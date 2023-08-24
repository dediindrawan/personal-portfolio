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

// set form handling
const form = document.querySelectorAll('.form-group');
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const subjectInput = document.querySelector('.subject-input');
const messageInput = document.querySelector('.message-input');
const popupError = document.querySelector('.popup-error');

// form executed
form.forEach(forms => {
    forms.addEventListener('submit', (e) => {
        checkingField();
        e.preventDefault();
    });
});

// checking field executed
function checkingField() {
    if (nameInput.value.trim() == '' && emailInput.value.trim() == '' && subjectInput.value.trim() == '' && messageInput.value.trim() == '') {
        popupError.style.display = 'block';
    } else {
        popupError.style.display = 'none';
        validateForm();
    };
};

// validate form executed
function validateForm() {
    let result = true;

    // name input
    let nameErrMessage = nameInput.nextElementSibling;
    if (nameInput.value.trim() == '') {
        nameErrMessage.style.display = 'block';
        nameErrMessage.innerHTML = 'Name cannot be empty';
        result = false;
    } else if (nameInput.value.trim().length < 3) {
        nameErrMessage.style.display = 'block';
        nameErrMessage.innerHTML = 'Name at least have 3 minimum characters';
        result = false;
    } else if (!isNameValid(nameInput.value.trim())) {
        nameErrMessage.style.display = 'block';
        nameErrMessage.innerHTML = 'Name must not contain numbers or symbols';
        result = false;
    } else {
        nameErrMessage.style.display = 'none';
    };

    // email input
    let emailErrMessage = emailInput.nextElementSibling;
    if (emailInput.value.trim() == '') {
        emailErrMessage.style.display = 'block';
        emailErrMessage.innerHTML = 'Email cannot be empty';
        result = false;
    } else if (!isEmailValid(emailInput.value.trim())) {
        emailErrMessage.style.display = 'block';
        emailErrMessage.innerHTML = 'Invalid email format';
        result = false;
    } else {
        emailErrMessage.style.display = 'none';
    };

    // subject input
    let subErrMessage = subjectInput.nextElementSibling;
    if (subjectInput.value.trim() == '') {
        subErrMessage.style.display = 'block';
        subErrMessage.innerHTML = 'You didn\'t write any subject, but that\'s okay';
        result = true;
    } else if (subjectInput.value.trim().length < 3) {
        subErrMessage.style.display = 'block';
        subErrMessage.innerHTML = 'Subject at least have 3 minimum characters';
        result = false;
    } else if (!isSubjectValid(subjectInput.value.trim())) {
        subErrMessage.style.display = 'block';
        subErrMessage.innerHTML = 'Subject must not contain numbers or symbols';
        result = false;
    } else {
        subErrMessage.style.display = 'none';
    };

    // message input
    let messageErrMessage = messageInput.nextElementSibling;
    if (messageInput.value.trim() == '') {
        messageErrMessage.style.display = 'block';
        messageErrMessage.innerHTML = 'Message cannot be empty';
        result = false;
    } else if (messageInput.value.trim().length < 3) {
        messageErrMessage.style.display = 'block';
        messageErrMessage.innerHTML = 'Message at least have 3 minimum characters';
        result = false;
    } else {
        messageErrMessage.style.display = 'none';
    };

    if (result) {
        if (subErrMessage.style.display = 'block') {
            subErrMessage.style.display = 'none';
        };

        sendEmail();
    };
};

// regular expression for validation of name input
function isNameValid(nameInput) {
    const reg = /^[A-Za-z\s]+$/;

    return reg.test(nameInput);
};

// regular expression for validation of email input
function isEmailValid(emailInput) {
    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return reg.test(emailInput);
};

// regular expression for validation of subject input
function isSubjectValid(subjectInput) {
    const reg = /^[A-Za-z\s]+$/;

    return reg.test(subjectInput);
};

// send email executed
function sendEmail() {
    let params = {
        name: nameInput.value,
        email: emailInput.value,
        subject: subjectInput.value,
        message: messageInput.value,
    };

    if (params.subject == '') {
        params.subject = 'No subject on this message';
    };

    const serviceId = "service_hhanyka";
    const templateId = "template_tuvl81v";

    emailjs.send(serviceId, templateId, params)
        .then(res => {
            nameInput.value = '';
            emailInput.value = '';
            subjectInput.value = '';
            messageInput.value = '';
            console.log(res);

            // show popup notification process sending
            let popupSuccess = document.querySelector('.popup-success');
            popupSuccess.style.display = 'flex';

            // show popup in timeout's
            function showPopup() {
                setTimeout(function () {
                    popupSuccess.textContent = 'Your message sent successfully';
                }, 2500);
                setTimeout(function () {
                    popupSuccess.style.display = 'none';
                }, 5000);
            };
            showPopup();
        }).catch(err => console.log(err));
};