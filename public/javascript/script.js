// Fungsi untuk mengubah gambar berdasarkan platform yang digunakan pengguna
function setSharedImage() {
    var sharedImage = 'URL_gambar_logo_atau_icon'; // URL gambar logo atau icon website Anda

    // Di bawah ini adalah contoh penyesuaian gambar untuk Twitter
    if (window.location.href.includes('twitter.com')) {
        sharedImage = 'URL_gambar_lain_untuk_Twitter';
    }

    // Di bawah ini adalah contoh penyesuaian gambar untuk platform lain (tambahkan jika perlu)

    // Set gambar yang akan ditampilkan ketika link website dibagikan
    document.querySelector('meta[property="og:image"]').setAttribute('content', sharedImage);
}

// Panggil fungsi setSharedImage saat halaman dimuat
setSharedImage();


function navbar() {
    const wrapperNavbar = document.querySelector('.wrapper-navbar');
    const toggleMenu = document.querySelector('.toggle-menu');
    const navLinkMenu = document.querySelector('.nav-link');

    toggleMenu.addEventListener('click', () => {
        navLinkMenu.classList.toggle('nav-open');
        // wrapperNavbar.classList.toggle('navbar-overlay');

        if (navLinkMenu.classList.contains('nav-open')) {
            document.querySelector('.btn-toggle-open').style.display = 'none';
            document.querySelector('.btn-toggle-close').style.display = 'block';
        } else {
            document.querySelector('.btn-toggle-open').style.display = 'block';
            document.querySelector('.btn-toggle-close').style.display = 'none';
        };
    });

    document.addEventListener('click', (e) => {
        if (!toggleMenu.contains(e.target) && !navLinkMenu.contains(e.target)) {
            navLinkMenu.classList.remove('nav-open');
            // wrapperNavbar.classList.remove('navbar-overlay');
            document.querySelector('.btn-toggle-open').style.display = 'block';
            document.querySelector('.btn-toggle-close').style.display = 'none';
        };
    });

    window.addEventListener('scroll', () => {
        wrapperNavbar.classList.toggle('sticky-navbar', scrollY > 70);
        wrapperNavbar.style.transition = 'all 0.3s ease-in-out';
        // if (window.innerWidth < 320) {
        //     wrapperNavbar.classList.remove('sticky-navbar');
        // };
    });
};
navbar();