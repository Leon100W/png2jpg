// ===== 多语言国际化配置 =====

const i18n = {
    // 当前语言 - 默认改为英语
    currentLang: 'en-US',
    
    // 语言配置 - 按英语-德语-中文排序
    languages: {
        'en-US': {
            name: 'English',
            flag: '🇺🇸',
            order: 1
        },
        'de-DE': {
            name: 'Deutsch',
            flag: '🇩🇪',
            order: 2
        },
        'zh-CN': {
            name: '简体中文',
            flag: '🇨🇳',
            order: 3
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
            toastCompleted: '转换完成',
            
            // SEO内容
            seoTitle: '为什么选择我们的PNG转JPG转换器？',
            seoFastTitle: '🚀 快速高效',
            seoFastDesc: '在浏览器中即时将PNG文件转换为JPG格式。无需服务器上传，一切都在本地进行，确保最快的速度和隐私保护。',
            seoBatchTitle: '📦 批量处理',
            seoBatchDesc: '同时转换多达20张PNG图片。非常适合批量图片处理，节省多文件转换的时间。',
            seoQualityTitle: '🎛️ 质量控制',
            seoQualityDesc: '选择低、中、高质量选项，根据您的需求平衡文件大小和图片质量。',
            seoSecureTitle: '🔒 100% 安全',
            seoSecureDesc: '您的图片永远不会离开您的设备。所有转换都在浏览器中进行，确保完全的隐私和安全。',
            seoHowToTitle: '如何在线将PNG转换为JPG：',
            seoStep1: '点击"选择文件"或拖放您的PNG图片（最多20个文件，每个10MB）',
            seoStep2: '选择您喜欢的JPG质量（低、中或高）',
            seoStep3: '点击"开始转换"开始处理',
            seoStep4: '下载单个文件或将所有文件作为ZIP存档下载',
            seoKeywords: 'PNG转JPG转换器、将PNG转换为JPEG、在线图片转换器、批量图片转换、免费转换工具、图片格式转换器、PNG JPEG在线转换器'
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
            toastCompleted: 'Conversion Completed',
            
            // SEO Content
            seoTitle: 'Why Choose Our PNG to JPG Converter?',
            seoFastTitle: '🚀 Fast & Efficient',
            seoFastDesc: 'Convert PNG files to JPG format instantly in your browser. No server uploads needed - everything happens locally for maximum speed and privacy.',
            seoBatchTitle: '📦 Batch Processing',
            seoBatchDesc: 'Convert up to 20 PNG images simultaneously. Perfect for bulk image processing and saving time on multiple file conversions.',
            seoQualityTitle: '🎛️ Quality Control',
            seoQualityDesc: 'Choose from low, medium, or high quality options to balance file size and image quality according to your needs.',
            seoSecureTitle: '🔒 100% Secure',
            seoSecureDesc: 'Your images never leave your device. All conversions happen in your browser, ensuring complete privacy and security.',
            seoHowToTitle: 'How to Convert PNG to JPG Online:',
            seoStep1: 'Click "Choose Files" or drag and drop your PNG images (max 20 files, 10MB each)',
            seoStep2: 'Select your preferred JPG quality (low, medium, or high)',
            seoStep3: 'Click "Start Conversion" to begin the process',
            seoStep4: 'Download individual files or all as a ZIP archive',
            seoKeywords: 'PNG to JPG converter, convert PNG to JPEG, online image converter, batch image conversion, free converter tool, image format converter, PNG JPEG converter online'
        },
        
        'de-DE': {
            // Titel und Beschreibung
            title: 'PNG zu JPG Konverter',
            subtitle: 'Online Bildformat Konverter - Kostenlos, Schnell, Anpassbare Qualität',
            
            // Upload-Bereich
            uploadTitle: 'PNG-Dateien hierher ziehen oder klicken zum Auswählen',
            uploadHint: 'Unterstützt bis zu 20 Bilder, max. 10MB pro Datei',
            browseBtn: 'Dateien auswählen',
            selectedFiles: 'Ausgewählte Dateien:',
            removeFile: 'Entfernen',
            
            // Qualitätsauswahl
            qualityTitle: 'JPG Komprimierungsqualität:',
            qualityLow: 'Niedrige Qualität',
            qualityMedium: 'Mittlere Qualität',
            qualityHigh: 'Hohe Qualität',
            qualityLowDesc: 'Kleinere Dateigröße, schnellere Übertragung',
            qualityMediumDesc: 'Ausgewogene Qualität und Größe (Empfohlen)',
            qualityHighDesc: 'Beste Qualität, größere Dateigröße',
            
            // Fortschritt
            progressTitle: 'Konvertierungsfortschritt:',
            processing: 'Verarbeitung:',
            timeEstimate: 'Geschätzte verbleibende Zeit:',
            
            // Schaltflächen
            startConversion: '🚀 Konvertierung starten',
            converting: '🔄 Konvertiert...',
            resetFiles: '🔄 Dateien zurücksetzen',
            downloadAll: '📦 Alle als ZIP herunterladen',
            downloadZipping: '📦 ZIP wird erstellt...',
            clearResults: '🗑️ Ergebnisse löschen',
            download: '⬇️ Herunterladen',
            
            // Ergebnisse
            resultTitle: 'Konvertierungsergebnisse:',
            completed: 'Abgeschlossen:',
            successful: 'Erfolgreich:',
            failed: 'Fehlgeschlagen:',
            files: 'Dateien',
            
            // Statusleiste
            statusReady: 'Bereit',
            statusConverting: 'Konvertiert...',
            statusCompleted: 'Konvertierung abgeschlossen',
            statusFailed: 'Konvertierung fehlgeschlagen',
            totalTime: 'Gesamtzeit:',
            avgSpeed: 'Durchschnittsgeschwindigkeit:',
            seconds: 'Sekunden',
            minutes: 'Minuten',
            filePerSecond: '/Datei',
            
            // Fehlermeldungen
            errorNotPng: 'Keine PNG-Datei',
            errorTooLarge: 'Datei größer als 10MB',
            errorTooMany: 'Maximal 20 Dateien erlaubt',
            errorConversion: 'Konvertierung fehlgeschlagen',
            errorNoFiles: 'Keine gültigen PNG-Dateien zum Konvertieren',
            errorNoValidFiles: 'Keine erfolgreich konvertierten Dateien zum Herunterladen',
            errorPackaging: 'Fehler beim Erstellen des Download-Pakets',
            errorElementNotFound: 'Wesentliche Elemente nicht gefunden',
            
            // Benachrichtigungen
            fileSelected: 'ausgewählt',
            fileValidation: 'davon',
            filesValid: 'gültig',
            currentSize: 'aktuell',
            convertedArrow: '→',
            fileSize: 'Dateigröße',
            error: 'Fehler',
            
            // Sprachwechsel
            languageSwitch: 'Sprache',
            switchToEnglish: 'Switch to English',
            switchToChinese: '切换到中文',
            
            // Toast-Benachrichtigung
            toastCompleted: 'Konvertierung abgeschlossen',
            
            // SEO-Inhalt
            seoTitle: 'Warum unseren PNG zu JPG Konverter wählen?',
            seoFastTitle: '🚀 Schnell & Effizient',
            seoFastDesc: 'Konvertieren Sie PNG-Dateien sofort in Ihrem Browser zu JPG-Format. Keine Server-Uploads erforderlich - alles passiert lokal für maximale Geschwindigkeit und Privatsphäre.',
            seoBatchTitle: '📦 Stapelverarbeitung',
            seoBatchDesc: 'Konvertieren Sie bis zu 20 PNG-Bilder gleichzeitig. Perfekt für die Massenverarbeitung von Bildern und Zeitersparnis bei mehreren Dateikonvertierungen.',
            seoQualityTitle: '🎛️ Qualitätskontrolle',
            seoQualityDesc: 'Wählen Sie zwischen niedrigen, mittleren oder hohen Qualitätsoptionen, um Dateigröße und Bildqualität nach Ihren Bedürfnissen auszubalancieren.',
            seoSecureTitle: '🔒 100% Sicher',
            seoSecureDesc: 'Ihre Bilder verlassen niemals Ihr Gerät. Alle Konvertierungen finden in Ihrem Browser statt und gewährleisten vollständige Privatsphäre und Sicherheit.',
            seoHowToTitle: 'Wie PNG online zu JPG konvertieren:',
            seoStep1: 'Klicken Sie auf "Dateien auswählen" oder ziehen Sie Ihre PNG-Bilder per Drag & Drop (max. 20 Dateien, je 10MB)',
            seoStep2: 'Wählen Sie Ihre bevorzugte JPG-Qualität (niedrig, mittel oder hoch)',
            seoStep3: 'Klicken Sie auf "Konvertierung starten", um den Prozess zu beginnen',
            seoStep4: 'Laden Sie einzelne Dateien oder alle als ZIP-Archiv herunter',
            seoKeywords: 'PNG zu JPG Konverter, PNG zu JPEG konvertieren, Online-Bildkonverter, Stapel-Bildkonvertierung, kostenloser Konverter, Bildformat-Konverter, PNG JPEG Konverter online'
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
            // 强制默认为英语，不进行浏览器语言检测
            this.currentLang = 'en-US';
        }
        
        // 设置HTML lang属性
        document.documentElement.lang = this.currentLang;
        
        // 创建语言切换器
        this.createLanguageSwitch();
        
        // 更新页面文本
        this.updatePageTexts();
    },
    
    // 获取排序后的语言列表
    getSortedLanguages() {
        return Object.entries(this.languages)
            .sort(([,a], [,b]) => a.order - b.order)
            .map(([code, info]) => ({ code, ...info }));
    },

    // 创建语言切换器下拉菜单
    createLanguageSwitch() {
        const header = document.querySelector('.header');
        if (!header) return;
        
        const currentLangInfo = this.languages[this.currentLang];
        const sortedLanguages = this.getSortedLanguages();
        
        const langSwitch = document.createElement('div');
        langSwitch.className = 'language-switch';
        langSwitch.innerHTML = `
            <div class="lang-dropdown">
                <button class="lang-current" id="langCurrentBtn">
                    ${currentLangInfo.flag} ${currentLangInfo.name}
                    <span class="dropdown-arrow">▼</span>
            </button>
                <div class="lang-options" id="langOptions">
                    ${sortedLanguages.map(lang => `
                        <div class="lang-option ${lang.code === this.currentLang ? 'active' : ''}" data-lang="${lang.code}">
                            <span class="lang-flag">${lang.flag}</span>
                            <span class="lang-name">${lang.name}</span>
                            ${lang.code === this.currentLang ? '<span class="check-mark">✓</span>' : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        header.appendChild(langSwitch);
        
        const currentBtn = langSwitch.querySelector('#langCurrentBtn');
        const optionsPanel = langSwitch.querySelector('#langOptions');
        const dropdownArrow = langSwitch.querySelector('.dropdown-arrow');
        
        // 切换下拉菜单显示/隐藏
        currentBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = optionsPanel.classList.contains('show');
            if (isOpen) {
                this.closeLangDropdown(optionsPanel, dropdownArrow);
            } else {
                this.openLangDropdown(optionsPanel, dropdownArrow);
            }
        });
        
        // 选择语言选项
        optionsPanel.addEventListener('click', (e) => {
            const langOption = e.target.closest('.lang-option');
            if (langOption) {
                const newLang = langOption.getAttribute('data-lang');
                if (newLang !== this.currentLang) {
                    this.setLanguage(newLang);
                    this.updateLanguageDropdown(langSwitch);
                }
                this.closeLangDropdown(optionsPanel, dropdownArrow);
            }
        });
        
        // 点击外部关闭下拉菜单
        document.addEventListener('click', (e) => {
            if (!langSwitch.contains(e.target)) {
                this.closeLangDropdown(optionsPanel, dropdownArrow);
            }
        });
    },

    // 打开语言下拉菜单
    openLangDropdown(optionsPanel, dropdownArrow) {
        optionsPanel.classList.add('show');
        dropdownArrow.style.transform = 'rotate(180deg)';
    },

    // 关闭语言下拉菜单
    closeLangDropdown(optionsPanel, dropdownArrow) {
        optionsPanel.classList.remove('show');
        dropdownArrow.style.transform = 'rotate(0deg)';
    },

    // 更新语言下拉菜单显示
    updateLanguageDropdown(langSwitch) {
        const currentLangInfo = this.languages[this.currentLang];
        const currentBtn = langSwitch.querySelector('#langCurrentBtn');
        const optionsPanel = langSwitch.querySelector('#langOptions');
        
        // 更新当前显示按钮
        currentBtn.innerHTML = `
            ${currentLangInfo.flag} ${currentLangInfo.name}
            <span class="dropdown-arrow">▼</span>
        `;
        
        // 更新选项列表的激活状态
        const sortedLanguages = this.getSortedLanguages();
        optionsPanel.innerHTML = sortedLanguages.map(lang => `
            <div class="lang-option ${lang.code === this.currentLang ? 'active' : ''}" data-lang="${lang.code}">
                <span class="lang-flag">${lang.flag}</span>
                <span class="lang-name">${lang.name}</span>
                ${lang.code === this.currentLang ? '<span class="check-mark">✓</span>' : ''}
            </div>
        `).join('');
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
        
        // 更新SEO内容
        this.updateSeoContent();
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
    },
    
    // 更新SEO内容
    updateSeoContent() {
        // 更新SEO标题
        const seoTitle = document.getElementById('seoTitle');
        if (seoTitle) seoTitle.textContent = this.t('seoTitle');
        
        // 更新功能特点
        const seoFastTitle = document.getElementById('seoFastTitle');
        if (seoFastTitle) seoFastTitle.textContent = this.t('seoFastTitle');
        
        const seoFastDesc = document.getElementById('seoFastDesc');
        if (seoFastDesc) seoFastDesc.textContent = this.t('seoFastDesc');
        
        const seoBatchTitle = document.getElementById('seoBatchTitle');
        if (seoBatchTitle) seoBatchTitle.textContent = this.t('seoBatchTitle');
        
        const seoBatchDesc = document.getElementById('seoBatchDesc');
        if (seoBatchDesc) seoBatchDesc.textContent = this.t('seoBatchDesc');
        
        const seoQualityTitle = document.getElementById('seoQualityTitle');
        if (seoQualityTitle) seoQualityTitle.textContent = this.t('seoQualityTitle');
        
        const seoQualityDesc = document.getElementById('seoQualityDesc');
        if (seoQualityDesc) seoQualityDesc.textContent = this.t('seoQualityDesc');
        
        const seoSecureTitle = document.getElementById('seoSecureTitle');
        if (seoSecureTitle) seoSecureTitle.textContent = this.t('seoSecureTitle');
        
        const seoSecureDesc = document.getElementById('seoSecureDesc');
        if (seoSecureDesc) seoSecureDesc.textContent = this.t('seoSecureDesc');
        
        // 更新使用说明
        const seoHowToTitle = document.getElementById('seoHowToTitle');
        if (seoHowToTitle) seoHowToTitle.textContent = this.t('seoHowToTitle');
        
        const seoStep1 = document.getElementById('seoStep1');
        if (seoStep1) seoStep1.textContent = this.t('seoStep1');
        
        const seoStep2 = document.getElementById('seoStep2');
        if (seoStep2) seoStep2.textContent = this.t('seoStep2');
        
        const seoStep3 = document.getElementById('seoStep3');
        if (seoStep3) seoStep3.textContent = this.t('seoStep3');
        
        const seoStep4 = document.getElementById('seoStep4');
        if (seoStep4) seoStep4.textContent = this.t('seoStep4');
        
        // 更新关键词
        const seoKeywords = document.getElementById('seoKeywords');
        if (seoKeywords) seoKeywords.textContent = this.t('seoKeywords');
    }
};

// 导出供全局使用
window.i18n = i18n;
