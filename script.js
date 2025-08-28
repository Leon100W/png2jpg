// ===== 全局变量 =====
let selectedFiles = [];
let convertedFiles = [];
let isConverting = false;
let conversionStartTime = 0;
let currentFileIndex = 0;

// ===== DOM 元素引用 =====
const uploadZone = document.getElementById('uploadZone');
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
const fileItems = document.getElementById('fileItems');
const convertBtn = document.getElementById('convertBtn');
const resetBtn = document.getElementById('resetBtn');
const progressSection = document.getElementById('progressSection');
const progressFill = document.getElementById('progressFill');
const progressPercent = document.getElementById('progressPercent');
const progressStatus = document.getElementById('progressStatus');
const currentFileName = document.getElementById('currentFileName');
const timeEstimate = document.getElementById('timeEstimate');
const resultSection = document.getElementById('resultSection');
const resultItems = document.getElementById('resultItems');
const downloadAllBtn = document.getElementById('downloadAllBtn');
const statusText = document.getElementById('statusText');
const totalTime = document.getElementById('totalTime');
const avgSpeed = document.getElementById('avgSpeed');
const completedCount = document.getElementById('completedCount');
const successCount = document.getElementById('successCount');
const failedCount = document.getElementById('failedCount');

// ===== 页面加载完成后初始化 =====
document.addEventListener('DOMContentLoaded', function() {
    // 初始化国际化
    if (window.i18n) {
        i18n.init();
    }
    
    initializeEventListeners();
    updateUI();
});

// ===== 事件监听器初始化 =====
function initializeEventListeners() {
    // 检查元素是否存在
    if (!fileInput || !uploadZone) {
        console.error('关键元素未找到');
        return;
    }
    
    // 文件输入框变化
    fileInput.addEventListener('change', handleFileSelect);
    
    // 拖拽上传事件
    uploadZone.addEventListener('dragover', handleDragOver);
    uploadZone.addEventListener('dragleave', handleDragLeave);
    uploadZone.addEventListener('drop', handleDrop);
    
    // 点击上传区域触发文件选择
    uploadZone.addEventListener('click', function(e) {
        // 如果点击的不是按钮，也触发文件选择
        if (!e.target.classList.contains('browse-btn')) {
            fileInput.click();
        }
    });
    
    // 选择文件按钮点击事件
    const browseBtn = document.querySelector('.browse-btn');
    if (browseBtn) {
        browseBtn.addEventListener('click', function(e) {
            console.log('选择文件按钮被点击');
            e.stopPropagation();
            fileInput.click();
            console.log('触发文件输入框点击');
        });
    } else {
        console.error('找不到选择文件按钮');
    }
    
    // 转换按钮事件
    if (convertBtn) {
        convertBtn.addEventListener('click', startConversion);
    }
    
    // 重置按钮事件
    if (resetBtn) {
        resetBtn.addEventListener('click', resetFiles);
    }
    
    // 批量下载按钮事件
    if (downloadAllBtn) {
        downloadAllBtn.addEventListener('click', downloadAll);
    }
    

    
    // 质量选择变化
    document.querySelectorAll('input[name="quality"]').forEach(radio => {
        radio.addEventListener('change', updateQualitySelection);
    });
    
    // 事件委托 - 处理动态生成的按钮
    document.addEventListener('click', function(e) {
        // 处理移除文件按钮
        if (e.target.classList.contains('remove-file')) {
            const index = parseInt(e.target.getAttribute('data-index'));
            if (!isNaN(index)) {
                removeFile(index);
            }
        }
        
        // 处理单个文件下载按钮
        if (e.target.classList.contains('download-btn')) {
            const index = parseInt(e.target.getAttribute('data-index'));
            if (!isNaN(index)) {
                downloadSingleFile(index);
            }
        }
    });
    
    console.log('事件监听器初始化完成');
}

// ===== 文件选择处理 =====
function handleFileSelect(event) {
    console.log('文件选择事件触发', event);
    const files = Array.from(event.target.files);
    console.log('选择的文件:', files);
    if (files.length === 0) {
        console.log('没有选择文件');
        return;
    }
    processFiles(files);
}

// ===== 拖拽处理 =====
function handleDragOver(event) {
    event.preventDefault();
    uploadZone.classList.add('drag-over');
}

function handleDragLeave(event) {
    event.preventDefault();
    uploadZone.classList.remove('drag-over');
}

function handleDrop(event) {
    event.preventDefault();
    uploadZone.classList.remove('drag-over');
    
    const files = Array.from(event.dataTransfer.files);
    processFiles(files);
}

// ===== 文件处理主函数 =====
function processFiles(files) {
    // 检查文件数量限制
    const totalFiles = selectedFiles.length + files.length;
    if (totalFiles > 20) {
        alert(`${i18n.t('errorTooMany')}，${i18n.t('fileSelected')}${selectedFiles.length}${i18n.t('files')}，新增${files.length}${i18n.t('files')}，共${totalFiles}${i18n.t('files')}`);
        return;
    }
    
    files.forEach(file => {
        const validation = validateFile(file);
        
        const fileData = {
            id: Date.now() + Math.random(),
            file: file,
            name: file.name,
            size: file.size,
            sizeText: formatFileSize(file.size),
            isValid: validation.isValid,
            error: validation.error,
            status: validation.isValid ? 'ready' : 'error'
        };
        
        selectedFiles.push(fileData);
    });
    
    updateFileList();
    updateUI();
}

// ===== 文件验证 =====
function validateFile(file) {
    // 检查文件类型
    if (!file.type.includes('png') && !file.name.toLowerCase().endsWith('.png')) {
        return {
            isValid: false,
            error: i18n.t('errorNotPng')
        };
    }
    
    // 检查文件大小 (10MB = 10 * 1024 * 1024 bytes)
    if (file.size > 10485760) {
        return {
            isValid: false,
            error: `${i18n.t('errorTooLarge')} (${i18n.t('currentSize')}: ${formatFileSize(file.size)})`
        };
    }
    
    return {
        isValid: true,
        error: null
    };
}

// ===== 文件大小格式化 =====
function formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// ===== 更新文件列表显示 =====
function updateFileList() {
    if (selectedFiles.length === 0) {
        fileList.classList.remove('show');
        return;
    }
    
    fileList.classList.add('show');
    fileItems.innerHTML = '';
    
    selectedFiles.forEach((fileData, index) => {
        const fileItem = document.createElement('div');
        fileItem.className = `file-item ${fileData.isValid ? '' : 'error'}`;
        
        fileItem.innerHTML = `
            <div class="file-status">
                ${fileData.isValid ? '✅' : '❌'}
            </div>
            <div class="file-info">
                <div class="file-name">${fileData.name}</div>
                ${fileData.isValid 
                    ? `<div class="file-size">${fileData.sizeText}</div>`
                    : `<div class="file-error">${fileData.error}</div>`
                }
            </div>
            <button class="remove-file" data-index="${index}">${i18n.t('removeFile')}</button>
        `;
        
        fileItems.appendChild(fileItem);
    });
}

// ===== 移除文件 =====
function removeFile(index) {
    selectedFiles.splice(index, 1);
    updateFileList();
    updateUI();
}

// ===== 重置所有文件 =====
function resetFiles() {
    selectedFiles = [];
    convertedFiles = [];
    fileInput.value = '';
    updateFileList();
    updateUI();
    hideProgress();
    hideResults();
    updateStatusText(i18n.t('statusReady'));
}

// ===== 质量选择更新 =====
function updateQualitySelection() {
    const selectedQuality = document.querySelector('input[name="quality"]:checked').value;
    console.log('选择的质量:', selectedQuality);
}

// ===== UI 状态更新 =====
function updateUI() {
    const validFiles = selectedFiles.filter(f => f.isValid);
    const hasValidFiles = validFiles.length > 0;
    const hasFiles = selectedFiles.length > 0;
    
    // 更新转换按钮状态
    convertBtn.disabled = !hasValidFiles || isConverting;
    convertBtn.innerHTML = isConverting ? i18n.t('converting') : i18n.t('startConversion');
    
    // 更新重置按钮状态
    resetBtn.disabled = isConverting;
    
    // 更新状态文本
    if (hasFiles) {
        const validCount = validFiles.length;
        const totalCount = selectedFiles.length;
        updateStatusText(`${i18n.t('fileSelected')} ${totalCount} ${i18n.t('files')}，${i18n.t('fileValidation')} ${validCount} ${i18n.t('filesValid')}`);
    } else {
        updateStatusText(i18n.t('statusReady'));
    }
}

// ===== 开始转换 =====
async function startConversion() {
    const validFiles = selectedFiles.filter(f => f.isValid);
    if (validFiles.length === 0) {
        alert(i18n.t('errorNoFiles'));
        return;
    }
    
    isConverting = true;
    conversionStartTime = Date.now();
    currentFileIndex = 0;
    convertedFiles = [];
    
    updateUI();
    showProgress();
    updateStatusText(i18n.t('statusConverting'));
    
    try {
        for (let i = 0; i < validFiles.length; i++) {
            currentFileIndex = i;
            const fileData = validFiles[i];
            
            // 更新当前处理的文件
            currentFileName.textContent = fileData.name;
            
            // 更新进度
            const progress = (i / validFiles.length) * 100;
            updateProgress(progress, i, validFiles.length);
            
            // 计算预估时间
            if (i > 0) {
                const elapsed = Date.now() - conversionStartTime;
                const avgTimePerFile = elapsed / i;
                const remaining = (validFiles.length - i) * avgTimePerFile;
                timeEstimate.textContent = formatTime(remaining);
            }
            
            try {
                // 转换文件
                const convertedBlob = await convertPngToJpg(fileData.file);
                const convertedFileName = fileData.name.replace(/\.png$/i, '.jpg');
                
                const convertedFile = {
                    originalName: fileData.name,
                    convertedName: convertedFileName,
                    blob: convertedBlob,
                    size: convertedBlob.size,
                    sizeText: formatFileSize(convertedBlob.size),
                    status: 'success',
                    error: null
                };
                
                convertedFiles.push(convertedFile);
                
            } catch (error) {
                console.error('转换失败:', error);
                const convertedFile = {
                    originalName: fileData.name,
                    convertedName: null,
                    blob: null,
                    size: 0,
                    sizeText: '0 B',
                    status: 'failed',
                    error: error.message || '转换失败'
                };
                
                convertedFiles.push(convertedFile);
            }
            
            // 添加短暂延迟以显示进度动画
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        // 完成转换
        updateProgress(100, validFiles.length, validFiles.length);
        currentFileName.textContent = i18n.t('statusCompleted');
        timeEstimate.textContent = '0' + i18n.t('seconds');
        
        showResults();
        updateStatusText(i18n.t('statusCompleted'));
        
        // 显示转换完成Toast提示
        showToast(i18n.t('toastCompleted'));
        
    } catch (error) {
        console.error('转换过程出错:', error);
        alert(`${i18n.t('errorConversion')}: ${error.message}`);
        updateStatusText(i18n.t('statusFailed'));
    } finally {
        isConverting = false;
        updateUI();
        updateTotalTime();
    }
}

// ===== PNG to JPG 转换核心函数 =====
async function convertPngToJpg(file) {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        
        img.onload = () => {
            // 设置canvas尺寸
            canvas.width = img.width;
            canvas.height = img.height;
            
            // 绘制图片到canvas
            ctx.drawImage(img, 0, 0);
            
            // 获取选择的质量
            const quality = parseFloat(document.querySelector('input[name="quality"]:checked').value);
            
            // 转换为JPG并获取Blob
            canvas.toBlob((blob) => {
                if (blob) {
                    resolve(blob);
                } else {
                    reject(new Error(i18n.t('errorConversion')));
                }
            }, 'image/jpeg', quality);
        };
        
        img.onerror = () => {
            reject(new Error(i18n.t('errorConversion')));
        };
        
        // 读取文件为Data URL
        const reader = new FileReader();
        reader.onload = (e) => {
            img.src = e.target.result;
        };
        reader.onerror = () => {
            reject(new Error(i18n.t('errorConversion')));
        };
        reader.readAsDataURL(file);
    });
}

// ===== 进度更新 =====
function updateProgress(percent, current, total) {
    progressFill.style.width = percent + '%';
    progressPercent.textContent = Math.round(percent) + '%';
    progressStatus.textContent = `(${current}/${total})`;
}

// ===== 显示/隐藏进度区域 =====
function showProgress() {
    progressSection.style.display = 'block';
    updateProgress(0, 0, 0);
}

function hideProgress() {
    progressSection.style.display = 'none';
}

// ===== 显示/隐藏结果区域 =====
function showResults() {
    resultSection.style.display = 'block';
    updateResultList();
    updateResultSummary();
}

function hideResults() {
    resultSection.style.display = 'none';
}

// ===== 更新结果列表 =====
function updateResultList() {
    resultItems.innerHTML = '';
    
    convertedFiles.forEach((file, index) => {
        const resultItem = document.createElement('div');
        resultItem.className = `result-item ${file.status === 'failed' ? 'failed' : ''}`;
        
        const statusIcon = file.status === 'success' ? '✅' : '❌';
        const actionButton = file.status === 'success' 
            ? `<button class="download-btn" data-index="${index}">${i18n.t('download')}</button>`
            : '';
        
        resultItem.innerHTML = `
            <div class="result-status">${statusIcon}</div>
            <div class="result-info">
                <div class="result-filename">
                    ${file.originalName} ${i18n.t('convertedArrow')} ${file.convertedName || i18n.t('errorConversion')}
                </div>
                <div class="result-details">
                    ${file.status === 'success' 
                        ? `${i18n.t('fileSize')}: ${file.sizeText}`
                        : `${i18n.t('error')}: ${file.error}`
                    }
                </div>
            </div>
            ${actionButton}
        `;
        
        resultItems.appendChild(resultItem);
    });
}

// ===== 更新结果摘要 =====
function updateResultSummary() {
    const completed = convertedFiles.length;
    const successful = convertedFiles.filter(f => f.status === 'success').length;
    const failed = convertedFiles.filter(f => f.status === 'failed').length;
    
    completedCount.textContent = completed;
    successCount.textContent = successful;
    failedCount.textContent = failed;
    
    // 更新批量下载按钮状态
    downloadAllBtn.disabled = successful === 0;
}

// ===== 单个文件下载 =====
function downloadSingleFile(index) {
    const file = convertedFiles[index];
    if (file.status !== 'success' || !file.blob) {
        alert(i18n.t('errorConversion'));
        return;
    }
    
    const url = URL.createObjectURL(file.blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.convertedName;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ===== 批量下载ZIP =====
async function downloadAll() {
    const successfulFiles = convertedFiles.filter(f => f.status === 'success');
    if (successfulFiles.length === 0) {
        alert(i18n.t('errorNoValidFiles'));
        return;
    }
    
    try {
        downloadAllBtn.disabled = true;
        downloadAllBtn.innerHTML = i18n.t('downloadZipping');
        
        // 使用JSZip创建压缩包
        const zip = new JSZip();
        
        // 添加文件到压缩包
        successfulFiles.forEach(file => {
            zip.file(file.convertedName, file.blob);
        });
        
        // 生成ZIP文件
        const zipBlob = await zip.generateAsync({type: 'blob'});
        
        // 下载ZIP文件
        const url = URL.createObjectURL(zipBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `converted_images_${new Date().getTime()}.zip`;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
    } catch (error) {
        console.error('打包失败:', error);
        alert(`${i18n.t('errorPackaging')}: ${error.message}`);
    } finally {
        downloadAllBtn.disabled = false;
        downloadAllBtn.innerHTML = i18n.t('downloadAll');
    }
}

// ===== 清空结果 =====
function clearResults() {
    convertedFiles = [];
    hideResults();
    updateStatusText(i18n.t('statusReady'));
}

// ===== 时间格式化 =====
function formatTime(milliseconds) {
    const seconds = Math.round(milliseconds / 1000);
    if (seconds < 60) {
        return seconds + i18n.t('seconds');
    } else {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}${i18n.t('minutes')}${remainingSeconds}${i18n.t('seconds')}`;
    }
}

// ===== 更新状态文本 =====
function updateStatusText(text) {
    statusText.textContent = text;
}

// ===== 更新总耗时 =====
function updateTotalTime() {
    if (conversionStartTime > 0) {
        const elapsed = Date.now() - conversionStartTime;
        totalTime.textContent = formatTime(elapsed);
        
        const completed = convertedFiles.filter(f => f.status === 'success').length;
        if (completed > 0) {
            const avgTimeMs = elapsed / completed;
            avgSpeed.textContent = formatTime(avgTimeMs) + i18n.t('filePerSecond');
        }
    }
}



// ===== Toast 提示功能 =====
function showToast(message) {
    // 移除可能存在的旧Toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        document.body.removeChild(existingToast);
    }
    
    // 创建Toast元素
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    // 添加到页面
    document.body.appendChild(toast);
    
    // 显示Toast（延迟一下让CSS transition生效）
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // 1秒后隐藏并移除Toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300); // 等待动画完成
    }, 1000);
}

// ===== 工具函数：防抖 =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
