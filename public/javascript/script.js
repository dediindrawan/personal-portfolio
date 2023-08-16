// change image on user platform using basically
function setSharedImage() {
    let sharedImage = 'https://i.postimg.cc/VLcbBcnv/dedi-indrawan.png';

    // set user popular platform are needed
    if (window.location.href.includes('whatsapp.com')) {
        sharedImage = 'https://i.postimg.cc/VLcbBcnv/dedi-indrawan.png';
    } else if (window.location.href.includes('instagram.com')) {
        sharedImage = 'https://i.postimg.cc/VLcbBcnv/dedi-indrawan.png';
    } else if (window.location.href.includes('telegram.com')) {
        sharedImage = 'https://i.postimg.cc/VLcbBcnv/dedi-indrawan.png';
    } else if (window.location.href.includes('twitter.com')) {
        sharedImage = 'https://i.postimg.cc/VLcbBcnv/dedi-indrawan.png';
    };

    // set display picture when link is shared by user
    document.querySelector('meta[property="og:image"]').setAttribute('content', sharedImage);
};
setSharedImage();

// styling to navbar interaction
function navbar() {
    const wrapperNavbar = document.querySelector('.wrapper-navbar');
    const toggleMenu = document.querySelector('.toggle-menu');
    const navLinkMenu = document.querySelector('.nav-link');

    toggleMenu.addEventListener('click', () => {
        navLinkMenu.classList.toggle('nav-open');
        wrapperNavbar.classList.toggle('show-overlay');

        if (navLinkMenu.classList.contains('nav-open')) {
            document.querySelector('.btn-toggle-open').style.display = 'none';
            document.querySelector('.btn-toggle-close').style.display = 'block';
        } else {
            document.querySelector('.btn-toggle-open').style.display = 'block';
            document.querySelector('.btn-toggle-close').style.display = 'none';
        };
    });

    // click anywhere on window to close nav link
    document.addEventListener('click', (e) => {
        if (!toggleMenu.contains(e.target) && !navLinkMenu.contains(e.target)) {
            navLinkMenu.classList.remove('nav-open');
            wrapperNavbar.classList.remove('show-overlay');
            document.querySelector('.btn-toggle-open').style.display = 'block';
            document.querySelector('.btn-toggle-close').style.display = 'none';
        };
    });

    // adding new class when window on horizontal scrolling
    window.addEventListener('scroll', () => {
        wrapperNavbar.classList.toggle('sticky-navbar', scrollY > 70);
        wrapperNavbar.style.transition = 'all 0.3s ease-in-out';
        if (window.innerWidth < 1024) {
            wrapperNavbar.classList.remove('sticky-navbar');
        };
    });
};
navbar();

// direct button on click to contact page
function btnHero() {
    window.location.href = "contact.html";
};

// set copyright year to automatically updated
function displayCopyrightYear() {
    let year = document.querySelectorAll('.year'),
        thisYear = new Date(), years;
    years = thisYear.getFullYear();

    year.forEach(copyYear => {
        copyYear.textContent = `${years}`;
    });
};
displayCopyrightYear();

// set btn back to top
const btnBackToTop = document.querySelector('.btn-back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        btnBackToTop.style.display = 'flex';
        btnBackToTop.addEventListener('click', () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    } else {
        btnBackToTop.style.display = 'none';
    };
});

// set contact form to auto sending message from web to email
function sendEmail(event) {
    event.preventDefault();
    let params = {
        name: document.querySelector('.name-input').value,
        email: document.querySelector('.email-input').value,
        subject: document.querySelector('.subject-input').value,
        message: document.querySelector('.message-input').value,
    };

    const serviceId = "service_hhanyka";
    const templateId = "template_tuvl81v";

    emailjs.send(serviceId, templateId, params)
        .then(res => {
            document.querySelector('.name-input').value = '';
            document.querySelector('.email-input').value = '';
            document.querySelector('.subject-input').value = '';
            document.querySelector('.message-input').value = '';
            console.log(res);

            // show popup notification process sending 
            let popupSuccess = document.querySelector('.popup-success');
            setTimeout(function () {
                popupSuccess.style.display = 'flex';
                popupSuccess.textContent = 'Sending message';
                setInterval(function () {
                    popupSuccess.textContent = 'Your message sent successfully';
                }, 2500);
                setInterval(function () {
                    popupSuccess.style.display = 'none';
                }, 5000);
            }, 100);
        }).catch(err => console.log(err));
};