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
    // Initialize
    // ============================================
    if (window.scrollY > 10) {
        nav.classList.add('scrolled');
    }

})();
