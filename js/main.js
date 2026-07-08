/**
 * 3DEXPERIENCE / V5 MCP - Main JavaScript
 * Handles: mode tabs, navigation, copy code, scroll animations, mobile menu
 */

(function () {
    'use strict';

    // ============================================
    // DOM Elements
    // ============================================
    const nav = document.querySelector('.nav');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const modeTabs = document.querySelectorAll('.mode-tab');
    const modePanels = document.querySelectorAll('.mode-panel');
    const modeTitle = document.querySelector('.mode-title');
    const modeDesc = document.querySelector('.mode-desc');

    // Mode-specific content
    const modeContent = {
        mcp: {
            title: 'MCP 协议接入 — 标准开放，即配即用',
            desc: '基于标准 MCP 协议，一行 JSON 配置即可让 AI 客户端连接 CATIA 与 3DEXPERIENCE'
        },
        cli: {
            title: 'CLI 命令行 — 一键下载CLI 工具包',
            desc: '通过命令行工具，一键下载打包开发好的CAA AUTOMATION CLI程序，调用更省Token'
        },
        skill: {
            title: 'My 3DEXPERIENCE Skill — 技能包',
            desc: '让 agent 搭建工作流，让多种工具协同工作，实现复杂任务的自动化'
        }
    };

    // ============================================
    // Mode Tab Switching
    // ============================================
    function switchMode(mode) {
        // Update tabs
        modeTabs.forEach(function (tab) {
            var isActive = tab.getAttribute('data-mode') === mode;
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', isActive);
        });

        // Update panels with fade transition
        modePanels.forEach(function (panel) {
            var isTarget = panel.id === 'panel-' + mode;
            if (isTarget) {
                panel.classList.add('active');
                panel.style.opacity = '0';
                panel.style.transform = 'translateY(12px)';
                requestAnimationFrame(function () {
                    panel.style.opacity = '1';
                    panel.style.transform = 'translateY(0)';
                });
            } else {
                panel.classList.remove('active');
            }
        });

        // Update section header
        if (modeTitle && modeContent[mode]) {
            modeTitle.textContent = modeContent[mode].title;
        }
        if (modeDesc && modeContent[mode]) {
            modeDesc.textContent = modeContent[mode].desc;
        }

        // Re-observe step items in newly active panel for animation
        var activePanel = document.getElementById('panel-' + mode);
        if (activePanel) {
            activePanel.querySelectorAll('.step-item').forEach(function (el) {
                el.classList.remove('animate-in');
                requestAnimationFrame(function () {
                    el.classList.add('animate-in');
                });
            });
        }
    }

    // Tab click handlers
    modeTabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            var mode = this.getAttribute('data-mode');
            if (mode) {
                switchMode(mode);
                // Scroll the quickstart section to the top of viewport
                var quickstart = document.getElementById('quickstart');
                if (quickstart) {
                    quickstart.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // Also allow switching from nav links
    document.querySelectorAll('[data-switch-mode]').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            var mode = this.getAttribute('data-switch-mode');
            switchMode(mode);
            // Scroll to quickstart
            var quickstart = document.getElementById('quickstart');
            if (quickstart) {
                var navHeight = nav.offsetHeight;
                var targetPosition = quickstart.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    // ============================================
    // Navigation Scroll Effect
    // ============================================
    var lastScrollY = 0;
    var ticking = false;

    function updateNav() {
        var scrollY = window.scrollY;

        if (scrollY > 10) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Sticky mode selector highlight
        if (modeTabs.length > 0) {
            var selector = document.querySelector('.mode-selector');
            if (selector) {
                var rect = selector.getBoundingClientRect();
                if (rect.top <= nav.offsetHeight) {
                    selector.classList.add('sticky');
                } else {
                    selector.classList.remove('sticky');
                }
            }
        }

        lastScrollY = scrollY;
        ticking = false;
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(updateNav);
            ticking = true;
        }
    }, { passive: true });

    // ============================================
    // Mobile Menu Toggle
    // ============================================
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            var spans = mobileMenuBtn.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                var spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // ============================================
    // Copy Code Functionality (multi-block support)
    // ============================================
    window.copyCode = function (modeId) {
        var codeEl = document.getElementById('code-' + modeId);
        if (!codeEl) {
            // Fallback: find active panel's code
            var activePanel = document.querySelector('.mode-panel.active code');
            if (activePanel) {
                codeEl = activePanel;
            } else {
                codeEl = document.querySelector('.code-block code');
            }
        }

        // Use a temporary textarea to decode HTML entities and get plain text
        var tmp = document.createElement('textarea');
        tmp.innerHTML = codeEl.innerHTML
            .replace(/<span[^>]*>/g, '')
            .replace(/<\/span>/g, '');
        var codeText = tmp.value;

        // Find the button that was clicked
        var btn = document.querySelector('.btn-copy[data-code="' + modeId + '"]');
        if (!btn) {
            btn = document.querySelector('.mode-panel.active .btn-copy');
        }

        navigator.clipboard.writeText(codeText).then(function () {
            if (btn) {
                btn.classList.add('copied');
                var copySpan = btn.querySelector('span');
                var originalText = copySpan.textContent;
                copySpan.textContent = '已复制';
                setTimeout(function () {
                    btn.classList.remove('copied');
                    copySpan.textContent = originalText;
                }, 2000);
            }
            showToast('代码已复制到剪贴板');
        }).catch(function () {
            var textArea = document.createElement('textarea');
            textArea.value = codeText;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                showToast('代码已复制到剪贴板');
            } catch (err) {
                showToast('复制失败，请手动复制');
            }
            document.body.removeChild(textArea);
        });
    };

    // ============================================
    // Toast Notification
    // ============================================
    function showToast(message) {
        var existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }

        var toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        requestAnimationFrame(function () {
            toast.classList.add('show');
        });

        setTimeout(function () {
            toast.classList.remove('show');
            setTimeout(function () {
                toast.remove();
            }, 400);
        }, 2500);
    }

    // ============================================
    // Copy Skill Instruction
    // ============================================
    window.copySkillInstruction = function () {
        var codeEl = document.querySelector('.copy-instruction-code');
        var codeText = codeEl ? codeEl.innerText : '请下载安装 My Coffee Skill：\nhttps://my-coffee-skill.zip';
        var btn = document.querySelector('.btn-copy-skill');

        navigator.clipboard.writeText(codeText).then(function () {
            if (btn) {
                btn.classList.add('copied');
                var copySpan = btn.querySelector('span');
                var originalText = copySpan.textContent;
                copySpan.textContent = '已复制';
                setTimeout(function () {
                    btn.classList.remove('copied');
                    copySpan.textContent = originalText;
                }, 2000);
            }
            showToast('已复制到剪贴板');
        }).catch(function () {
            var textArea = document.createElement('textarea');
            textArea.value = codeText;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                showToast('已复制到剪贴板');
            } catch (err) {
                showToast('复制失败，请手动复制');
            }
            document.body.removeChild(textArea);
        });
    };

    // ============================================
    // Scroll Animations (Intersection Observer)
    // ============================================
    var observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .example-card, .step-item, .arch-node, .feature-card-mini').forEach(function (el) {
        observer.observe(el);
    });

    // ============================================
    // Smooth scroll for anchor links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            if (this.hasAttribute('data-switch-mode')) return;

            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var navHeight = nav.offsetHeight;
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Login Button — Show development notice modal
    // ============================================
    function showLoginModal() {
        // Remove existing modal if any
        var existing = document.getElementById('loginModal');
        if (existing) existing.remove();

        var overlay = document.createElement('div');
        overlay.id = 'loginModal';
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity 0.3s ease;';

        var modal = document.createElement('div');
        modal.style.cssText = 'background:#fff;border-radius:16px;padding:36px 32px;max-width:400px;width:90%;text-align:center;box-shadow:0 25px 50px rgba(0,0,0,0.25);transform:translateY(20px);transition:transform 0.3s ease;';

        modal.innerHTML =
            '<div style="font-size:20px;font-weight:700;color:#111827;margin-bottom:8px;">用户管理模块正在开发中</div>' +
            '<div style="width:40px;height:4px;background:linear-gradient(90deg,#0078D7,#00B4D8);border-radius:2px;margin:12px auto 20px;"></div>' +
            '<img src="cont/wechat.jpg" alt="微信二维码" style="width:160px;height:160px;border-radius:8px;margin:0 auto 16px;display:block;border:1px solid #E5E7EB;">' +
            '<div style="font-size:14px;color:#4B5563;margin-bottom:6px;">请扫描微信添加好友</div>' +
            '<div style="font-size:14px;color:#4B5563;margin-bottom:20px;">或者使用邮件 <a href="mailto:song_hsu@163.com" style="color:#0078D7;text-decoration:none;font-weight:500;">song_hsu@163.com</a> 与作者联系</div>' +
            '<button id="loginModalClose" style="background:linear-gradient(135deg,#0078D7,#00B4D8);color:#fff;border:none;padding:10px 32px;border-radius:8px;font-size:15px;font-weight:600;cursor:pointer;transition:opacity 0.2s;">我知道了</button>';

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // Animate in
        requestAnimationFrame(function () {
            overlay.style.opacity = '1';
            modal.style.transform = 'translateY(0)';
        });

        // Close handlers
        function closeModal() {
            overlay.style.opacity = '0';
            modal.style.transform = 'translateY(20px)';
            setTimeout(function () { overlay.remove(); }, 300);
        }

        document.getElementById('loginModalClose').addEventListener('click', closeModal);
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) closeModal();
        });
    }

    // Bind to login buttons (both standard and docs pages)
    document.querySelectorAll('.btn-nav-cta').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            showLoginModal();
        });
    });

    // ============================================
    // Image Preview — Click to enlarge
    // ============================================
    function showImagePreview(src, alt) {
        var existing = document.getElementById('imagePreview');
        if (existing) existing.remove();

        var overlay = document.createElement('div');
        overlay.id = 'imagePreview';
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:9999;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity 0.3s ease;cursor:zoom-out;';

        var img = document.createElement('img');
        img.src = src;
        img.alt = alt || '';
        img.style.cssText = 'max-width:90vw;max-height:90vh;width:auto;height:auto;border-radius:8px;box-shadow:0 25px 60px rgba(0,0,0,0.5);transform:scale(0.9);transition:transform 0.3s ease;';

        var closeBtn = document.createElement('button');
        closeBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
        closeBtn.style.cssText = 'position:absolute;top:24px;right:24px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:44px;height:44px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background 0.2s;';
        closeBtn.onmouseover = function () { this.style.background = 'rgba(255,255,255,0.25)'; };
        closeBtn.onmouseout = function () { this.style.background = 'rgba(255,255,255,0.15)'; };

        overlay.appendChild(img);
        overlay.appendChild(closeBtn);
        document.body.appendChild(overlay);

        requestAnimationFrame(function () {
            overlay.style.opacity = '1';
            img.style.transform = 'scale(1)';
        });

        function closePreview() {
            overlay.style.opacity = '0';
            img.style.transform = 'scale(0.9)';
            setTimeout(function () { overlay.remove(); }, 300);
        }

        closeBtn.addEventListener('click', closePreview);
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) closePreview();
        });
        document.addEventListener('keydown', function handleEscape(e) {
            if (e.key === 'Escape') {
                closePreview();
                document.removeEventListener('keydown', handleEscape);
            }
        });
    }

    document.querySelectorAll('.showcase-img').forEach(function (img) {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function () {
            showImagePreview(this.src, this.alt);
        });
    });

    // ============================================
    // Initialize
    // ============================================
    if (window.scrollY > 10) {
        nav.classList.add('scrolled');
    }

})();
