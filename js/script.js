const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_hello: "Hello, I'm",
        hero_role: "Automation QA Robot Framework and Cypress",
        btn_view_work: "View Work",
        btn_contact_me: "Contact Me",
        section_about: "About Me",
        about_title: "Passionate about Automation",
        about_desc: "I am a tester automation frameworks using Robot Framework and Cypress. I have a keen eye for detail and a drive to optimize testing processes. My experience covers web automation, API testing, and ensuring software quality through efficient automated solutions.",
        section_projects: "My Projects",
        proj1_title: "Automation Test",
        proj1_desc: "End-to-end registration automation script using Robot Framework with Page Object Model and Cypress for Test E2E UX/UI",
        btn_view_code: "View Code <i class=\"fas fa-arrow-right\"></i>",
        proj3_title: "Web Usage Handbook",
        proj3_desc: "Comprehensive guides for users and admins to effectively use the website.",
        btn_view_handbook: "View Handbooks <i class=\"fas fa-arrow-right\"></i>",
        modal_handbook_title: "Select a Guide",
        section_contact: "Get In Touch",
        ph_name: "Name",
        ph_email: "Email",
        ph_message: "Message",
        btn_send: "Send Message",
        lang_btn: "TH"
    },
    th: {
        nav_home: "หน้าแรก",
        nav_about: "เกี่ยวกับฉัน",
        nav_projects: "ผลงาน",
        nav_contact: "ติดต่อ",
        hero_hello: "สวัสดีครับ ผมชื่อ",
        hero_role: "ผู้เชี่ยวชาญด้าน Automation QA, Robot Framework และ Cypress",
        btn_view_work: "ดูผลงาน",
        btn_contact_me: "ติดต่อฉัน",
        section_about: "เกี่ยวกับผม",
        about_title: "มุ่งมั่นในงาน Automation",
        about_desc: "ผมเป็น Automation Tester ที่เชี่ยวชาญการใช้ Robot Framework และ Cypress ผมให้ความสำคัญกับรายละเอียดและมุ่งมั่นที่จะพัฒนากระบวนการทดสอบให้ดียิ่งขึ้น ประสบการณ์ของผมครอบคลุมทั้ง Web Automation, API Testing และการรับประกันคุณภาพซอฟต์แวร์ด้วยโซลูชันอัตโนมัติที่มีประสิทธิภาพ",
        section_projects: "ผลงานของผม",
        proj1_title: "ระบบทดสอบอัตโนมัติ",
        proj1_desc: "สคริปต์ทดสอบการลงทะเบียนแบบ End-to-end โดยใช้ Robot Framework (POM) และ Cypress สำหรับทดสอบ UX/UI",
        btn_view_code: "ดูโค้ด <i class=\"fas fa-arrow-right\"></i>",
        proj3_title: "คู่มือการใช้งานเว็บ",
        proj3_desc: "คู่มือรวมสำหรับการใช้งานและการจัดการระบบเว็บไซด์อย่างละเอียด",
        btn_view_handbook: "ดูคู่มือ <i class=\"fas fa-arrow-right\"></i>",
        modal_handbook_title: "เลือกรายการคู่มือ",
        section_contact: "ติดต่อเรา",
        ph_name: "ชื่อ",
        ph_email: "อีเมล",
        ph_message: "ข้อความ",
        btn_send: "ส่งข้อความ",
        lang_btn: "EN",
        modal_success_title: "ได้รับข้อความแล้ว!",
        modal_success_msg: "ขอบคุณที่ติดต่อมาครับ ผมจะรีบตอบกลับให้เร็วที่สุดครับ"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Contact Form Logic
    const contactForm = document.getElementById('contactForm');
    const modal = document.getElementById('successModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Prepare data
            const formData = {
                name: name,
                email: email,
                message: message
            };

            // Simulate sending (Fake)
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;

            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Restore button
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;

                // Show Success Modal directly
                showModal();
                contactForm.reset();
            }, 1500); // 1.5 seconds delay
        });
    }

    // Modal Logic
    function showModal() {
        modal.style.display = 'flex';
        // Small delay to allow display flex to apply before adding show class for opacity transition
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Wait for transition
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
        if (e.target === handbookModal) {
            closeHandbookModal();
        }
    });

    // Handbook Modal Logic
    const handbookBtn = document.getElementById('handbookBtn');
    const handbookModal = document.getElementById('handbookModal');
    const handbookCloseBtn = document.getElementById('handbookCloseBtn');

    function openHandbookModal(e) {
        if (e) e.preventDefault();
        handbookModal.style.display = 'flex';
        setTimeout(() => {
            handbookModal.classList.add('show');
        }, 10);
    }

    function closeHandbookModal() {
        handbookModal.classList.remove('show');
        setTimeout(() => {
            handbookModal.style.display = 'none';
        }, 300);
    }

    if (handbookBtn) {
        handbookBtn.addEventListener('click', openHandbookModal);
    }

    if (handbookCloseBtn) {
        handbookCloseBtn.addEventListener('click', closeHandbookModal);
    }

    // Language Switcher Logic
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('lang') || 'en';

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key]; // innerHTML to handle icons
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                element.setAttribute('placeholder', translations[lang][key]);
            }
        });

        if (langToggleBtn) {
            langToggleBtn.textContent = translations[lang]['lang_btn'];
        }

        localStorage.setItem('lang', lang);
    }

    // Initialize Language
    updateLanguage(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'th' : 'en';
            updateLanguage(currentLang);
        });
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(5, 5, 5, 0.85)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');

        if (navLinks.style.display === 'flex') {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'var(--nav-bg)';
            navLinks.style.padding = '2rem';
            navLinks.style.borderBottom = '1px solid var(--card-border)';
        }
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden-section');
        observer.observe(section);
    });
});

// Add dynamic class for sections
const style = document.createElement('style');
style.textContent = `
    .hidden-section {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease-out;
    }
    .visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
