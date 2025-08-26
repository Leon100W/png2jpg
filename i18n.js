// ===== 多语言国际化配置 =====

const i18n = {
    // 当前语言
    currentLang: 'zh-CN',
    
    // 语言配置
    languages: {
        'zh-CN': {
            name: '简体中文',
            flag: '🇨🇳'
        },
        'en-US': {
            name: 'English',
            flag: '🇺🇸'
        }
    },
    
    // 翻译文本
    translations: {
        'zh-CN': {
            // 标题和描述
            title: 'PNG to JPG 转换器',
            subtitle: '在线图片格式转换工具 - 免费、快速、可选压缩质量',
            
            // 上传区域
            uploadTitle: '拖拽PNG文件到这里或点击选择',
            uploadHint: '支持最多 20 张图片，单个文件不超过 10MB',
            browseBtn: '选择文件',
            selectedFiles: '已选择的文件：',
            removeFile: '移除',
            
            // 质量选择
            qualityTitle: 'JPG 压缩质量选择：',
            qualityLow: '低质量',
            qualityMedium: '中质量', 
            qualityHigh: '高质量',
            qualityLowDesc: '文件更小，快速传输',
            qualityMediumDesc: '平衡质量和大小 (推荐)',
            qualityHighDesc: '最佳质量，文件较大',
            
            // 进度
            progressTitle: '转换进度：',
            processing: '正在处理：',
            timeEstimate: '预计剩余时间：',
            
            // 按钮
            startConversion: '🚀 开始转换',
            converting: '🔄 转换中...',
            resetFiles: '🔄 重置文件',
            downloadAll: '📦 批量下载 ZIP',
            downloadZipping: '📦 正在打包...',
            clearResults: '🗑️ 清空结果',
            download: '⬇️ 下载',
            
            // 结果
            resultTitle: '转换结果：',
            completed: '已完成：',
            successful: '成功：',
            failed: '失败：',
            files: '个文件',
            
            // 状态栏
            statusReady: '准备就绪',
            statusConverting: '正在转换...',
            statusCompleted: '转换完成',
            statusFailed: '转换失败',
            totalTime: '总耗时：',
            avgSpeed: '平均速度：',
            seconds: '秒',
            minutes: '分',
            filePerSecond: '/文件',
            
            // 错误信息
            errorNotPng: '非 PNG 格式文件',
            errorTooLarge: '文件大于 10MB',
            errorTooMany: '最多只能选择20个文件',
            errorConversion: '转换失败',
            errorNoFiles: '没有有效的PNG文件可以转换',
            errorNoValidFiles: '没有成功转换的文件可以下载',
            errorPackaging: '打包下载失败',
            errorElementNotFound: '关键元素未找到',
            
            // 通知信息
            fileSelected: '已选择',
            fileValidation: '其中',
            filesValid: '个有效',
            currentSize: '当前',
            convertedArrow: '→',
            fileSize: '文件大小',
            error: '错误',
            
            // 语言切换
            languageSwitch: '语言',
            switchToEnglish: 'Switch to English',
            switchToChinese: '切换到中文',
            
            // Toast 提示
            toastCompleted: '转换完成'
        },
        
        'en-US': {
            // Title and description
            title: 'PNG to JPG Converter',
            subtitle: 'Online Image Format Converter - Free, Fast, Customizable Quality',
            
            // Upload area
            uploadTitle: 'Drag PNG files here or click to select',
            uploadHint: 'Support up to 20 images, max 10MB per file',
            browseBtn: 'Select Files',
            selectedFiles: 'Selected Files:',
            removeFile: 'Remove',
            
            // Quality selection
            qualityTitle: 'JPG Compression Quality:',
            qualityLow: 'Low Quality',
            qualityMedium: 'Medium Quality',
            qualityHigh: 'High Quality', 
            qualityLowDesc: 'Smaller file size, faster transfer',
            qualityMediumDesc: 'Balanced quality and size (Recommended)',
            qualityHighDesc: 'Best quality, larger file size',
            
            // Progress
            progressTitle: 'Conversion Progress:',
            processing: 'Processing:',
            timeEstimate: 'Estimated time remaining:',
            
            // Buttons
            startConversion: '🚀 Start Conversion',
            converting: '🔄 Converting...',
            resetFiles: '🔄 Reset Files',
            downloadAll: '📦 Download All as ZIP',
            downloadZipping: '📦 Creating ZIP...',
            clearResults: '🗑️ Clear Results',
            download: '⬇️ Download',
            
            // Results
            resultTitle: 'Conversion Results:',
            completed: 'Completed:',
            successful: 'Successful:',
            failed: 'Failed:',
            files: 'files',
            
            // Status bar
            statusReady: 'Ready',
            statusConverting: 'Converting...',
            statusCompleted: 'Conversion completed',
            statusFailed: 'Conversion failed',
            totalTime: 'Total time:',
            avgSpeed: 'Average speed:',
            seconds: 'seconds',
            minutes: 'minutes',
            filePerSecond: '/file',
            
            // Error messages
            errorNotPng: 'Not a PNG file',
            errorTooLarge: 'File larger than 10MB',
            errorTooMany: 'Maximum 20 files allowed',
            errorConversion: 'Conversion failed',
            errorNoFiles: 'No valid PNG files to convert',
            errorNoValidFiles: 'No successfully converted files to download',
            errorPackaging: 'Failed to create download package',
            errorElementNotFound: 'Essential elements not found',
            
            // Notification messages
            fileSelected: 'selected',
            fileValidation: 'of which',
            filesValid: 'valid',
            currentSize: 'current',
            convertedArrow: '→',
            fileSize: 'File size',
            error: 'Error',
            
            // Language switch
            languageSwitch: 'Language',
            switchToEnglish: 'Switch to English',
            switchToChinese: '切换到中文',
            
            // Toast 提示
            toastCompleted: 'Conversion Completed'
        }
    },
    
    // 获取当前语言的翻译
    t(key) {
        const translation = this.translations[this.currentLang];
        return translation && translation[key] ? translation[key] : key;
    },
    
    // 切换语言
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            // 保存到本地存储
            localStorage.setItem('selectedLanguage', lang);
            // 更新页面
            this.updatePageTexts();
            // 更新HTML lang属性
            document.documentElement.lang = lang;
        }
    },
    
    // 初始化语言
    init() {
        // 从本地存储获取语言设置
        const savedLang = localStorage.getItem('selectedLanguage');
        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
        } else {
            // 检测浏览器语言
            const browserLang = navigator.language || navigator.userLanguage;
            if (browserLang.startsWith('zh')) {
                this.currentLang = 'zh-CN';
            } else {
                this.currentLang = 'en-US';
            }
        }
        
        // 设置HTML lang属性
        document.documentElement.lang = this.currentLang;
        
        // 创建语言切换器
        this.createLanguageSwitch();
        
        // 更新页面文本
        this.updatePageTexts();
    },
    
    // 创建语言切换器
    createLanguageSwitch() {
        const header = document.querySelector('.header');
        if (!header) return;
        
        const langSwitch = document.createElement('div');
        langSwitch.className = 'language-switch';
        langSwitch.innerHTML = `
            <button class="lang-btn" data-lang="zh-CN" ${this.currentLang === 'zh-CN' ? 'class="active"' : ''}>
                🇨🇳 中文
            </button>
            <button class="lang-btn" data-lang="en-US" ${this.currentLang === 'en-US' ? 'class="active"' : ''}>
                🇺🇸 English
            </button>
        `;
        
        header.appendChild(langSwitch);
        
        // 添加点击事件
        langSwitch.addEventListener('click', (e) => {
            if (e.target.classList.contains('lang-btn')) {
                const newLang = e.target.getAttribute('data-lang');
                if (newLang !== this.currentLang) {
                    this.setLanguage(newLang);
                    // 更新按钮状态
                    langSwitch.querySelectorAll('.lang-btn').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    e.target.classList.add('active');
                }
            }
        });
    },
    
    // 更新页面所有文本
    updatePageTexts() {
        // 更新标题
        const title = document.querySelector('.title');
        if (title) title.textContent = this.t('title');
        
        const subtitle = document.querySelector('.subtitle');
        if (subtitle) subtitle.textContent = this.t('subtitle');
        
        // 更新页面title
        document.title = this.t('title');
        
        // 更新上传区域
        const uploadZone = document.querySelector('.upload-zone h3');
        if (uploadZone) uploadZone.textContent = this.t('uploadTitle');
        
        const uploadHint = document.querySelector('.upload-hint');
        if (uploadHint) uploadHint.textContent = this.t('uploadHint');
        
        const browseBtn = document.querySelector('.browse-btn');
        if (browseBtn) browseBtn.textContent = this.t('browseBtn');
        
        const selectedFiles = document.querySelector('.file-list h4');
        if (selectedFiles) selectedFiles.textContent = this.t('selectedFiles');
        
        // 更新质量选择
        const qualityTitle = document.querySelector('.quality-section h3');
        if (qualityTitle) qualityTitle.textContent = this.t('qualityTitle');
        
        const qualityBtns = document.querySelectorAll('.quality-btn');
        const qualityDescs = document.querySelectorAll('.quality-option small');
        
        if (qualityBtns[0]) qualityBtns[0].textContent = this.t('qualityLow');
        if (qualityBtns[1]) qualityBtns[1].textContent = this.t('qualityMedium');
        if (qualityBtns[2]) qualityBtns[2].textContent = this.t('qualityHigh');
        
        if (qualityDescs[0]) qualityDescs[0].textContent = `(0.6) - ${this.t('qualityLowDesc')}`;
        if (qualityDescs[1]) qualityDescs[1].textContent = `(0.8) - ${this.t('qualityMediumDesc')}`;
        if (qualityDescs[2]) qualityDescs[2].textContent = `(0.95) - ${this.t('qualityHighDesc')}`;
        
        // 更新进度区域
        const progressTitle = document.querySelector('.progress-section h3');
        if (progressTitle) progressTitle.textContent = this.t('progressTitle');
        
        // 更新按钮
        const convertBtn = document.getElementById('convertBtn');
        if (convertBtn && !convertBtn.textContent.includes('🔄')) {
            convertBtn.innerHTML = this.t('startConversion');
        }
        
        const resetBtn = document.getElementById('resetBtn');
        if (resetBtn) resetBtn.innerHTML = this.t('resetFiles');
        
        // 更新结果区域
        const resultTitle = document.querySelector('.result-section h3');
        if (resultTitle) resultTitle.textContent = this.t('resultTitle');
        
        const downloadAllBtn = document.getElementById('downloadAllBtn');
        if (downloadAllBtn && !downloadAllBtn.textContent.includes('正在打包') && !downloadAllBtn.textContent.includes('Creating')) {
            downloadAllBtn.innerHTML = this.t('downloadAll');
        }
        
        const clearResultsBtn = document.getElementById('clearResultsBtn');
        if (clearResultsBtn) clearResultsBtn.innerHTML = this.t('clearResults');
        
        // 更新状态栏标签
        this.updateStatusBarLabels();
    },
    
    // 更新状态栏标签
    updateStatusBarLabels() {
        const statusBar = document.querySelector('.status-bar');
        if (!statusBar) return;
        
        // 获取当前状态文本但保留数值
        const statusSpan = statusBar.querySelector('#statusText');
        const totalTimeSpan = statusBar.querySelector('#totalTime');
        const avgSpeedSpan = statusBar.querySelector('#avgSpeed');
        
        // 重新构建状态栏HTML，保持数值但更新标签
        statusBar.innerHTML = `
            <span>📈 状态：</span>
            <span id="statusText">${statusSpan ? statusSpan.textContent : this.t('statusReady')}</span>
            <span class="divider">|</span>
            <span>${this.t('totalTime')}</span>
            <span id="totalTime">${totalTimeSpan ? totalTimeSpan.textContent : '0' + this.t('seconds')}</span>
            <span class="divider">|</span>
            <span>${this.t('avgSpeed')}</span>
            <span id="avgSpeed">${avgSpeedSpan ? avgSpeedSpan.textContent : '-'}</span>
        `;
    }
};

// 导出供全局使用
window.i18n = i18n;
