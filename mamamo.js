var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("act-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("act-tab");
        }
        event.currentTarget.classList.add("act-link");
        document.getElementById(tabname).classList.add("act-tab");
    }

    // Active nav link on scroll
    window.addEventListener('scroll', () => {
        let sections = document.querySelectorAll('#header, #about, #interests, #portfolio, #contact');
        let navLinks = document.querySelectorAll('nav ul li a');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // adjust for nav height
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});