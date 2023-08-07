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

    // click everywhere on window to close nav link
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
    window.location.href = "pages/contact.html";
};