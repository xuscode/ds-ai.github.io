/**
 * Docs Page — Sidebar, Search, Navigation
 */
(function () {
    'use strict';

    // ============================================
    // Nav Scroll Effect
    // ============================================
    var nav = document.querySelector('.nav');
    if (nav) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 10) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    // ============================================
    // Mobile Menu Toggle
    // ============================================
    var mobileBtn = document.getElementById('docsMobileMenuBtn');
    if (mobileBtn && nav) {
        mobileBtn.addEventListener('click', function () {
            var links = nav.querySelector('.nav-links');
            if (links) {
                links.classList.toggle('open');
            }
        });
    }

    // ============================================
    // Sidebar Group Toggle
    // ============================================
    document.querySelectorAll('.sidebar-group-header').forEach(function (header) {
        header.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });

    // ============================================
    // Sidebar Tool Selection
    // ============================================
    var sidebarTools = document.querySelectorAll('.sidebar-tool');
    var toolSections = document.querySelectorAll('.tool-section');

    // Highlight active tool in sidebar based on scroll
    var observer = new IntersectionObserver(function (entries) {
        var visibleSections = entries.filter(function (e) { return e.isIntersecting; });
        if (visibleSections.length === 0) return;

        var activeId = visibleSections[0].target.id;
        sidebarTools.forEach(function (tool) {
            var isActive = tool.getAttribute('data-tool') === activeId;
            tool.classList.toggle('active', isActive);
        });
    }, { threshold: 0.2, rootMargin: '-80px 0px -60% 0px' });

    toolSections.forEach(function (section) {
        observer.observe(section);
    });

    // Click on sidebar tool — scroll to section
    sidebarTools.forEach(function (tool) {
        tool.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').replace('#', '');
            var target = document.getElementById(targetId);
            if (target) {
                var topbarHeight = document.querySelector('.nav').offsetHeight;
                var top = target.getBoundingClientRect().top + window.pageYOffset - topbarHeight - 20;
                window.scrollTo({ top: top, behavior: 'smooth' });

                // Highlight immediately
                sidebarTools.forEach(function (t) { t.classList.remove('active'); });
                this.classList.add('active');

                // Close mobile sidebar if open
                var sidebar = document.getElementById('docsSidebar');
                if (sidebar && sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                }
            }
        });
    });

    // ============================================
    // Mobile Sidebar Toggle
    // ============================================
    var toggleBtn = document.getElementById('sidebarMobileToggle');
    var sidebar = document.getElementById('docsSidebar');

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', function () {
            sidebar.classList.toggle('open');
        });

        // Close sidebar when clicking outside
        document.addEventListener('click', function (e) {
            if (sidebar.classList.contains('open') &&
                !sidebar.contains(e.target) &&
                e.target !== toggleBtn &&
                !toggleBtn.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        });
    }

    // ============================================
    // Search Filter
    // ============================================
    var searchInput = document.querySelector('.docs-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            var query = this.value.toLowerCase().trim();

            toolSections.forEach(function (section) {
                var text = section.textContent.toLowerCase();
                if (!query || text.includes(query)) {
                    section.style.display = '';
                } else {
                    section.style.display = 'none';
                }
            });

            // Also filter sidebar tools
            sidebarTools.forEach(function (tool) {
                var toolText = tool.textContent.toLowerCase();
                if (!query || toolText.includes(query)) {
                    tool.style.display = '';
                } else {
                    tool.style.display = 'none';
                }
            });

            // Show/hide sidebar groups based on visible tools
            document.querySelectorAll('.sidebar-group').forEach(function (group) {
                var visibleTools = group.querySelectorAll('.sidebar-tool[style*="display: none"]');
                var allTools = group.querySelectorAll('.sidebar-tool');
                if (query && visibleTools.length === allTools.length) {
                    group.style.display = 'none';
                } else {
                    group.style.display = '';
                }
            });
        });
    }

})();
