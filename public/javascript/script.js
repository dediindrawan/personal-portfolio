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

// import data from object on data file
const data = 'public/data/data.json';

const about = document.querySelector('.about');
const services = document.querySelector('.services');
const resume = document.querySelector('.resume');
const getListData = () => {
    fetch(data)
        .then(response => {
            return response.json();
        }).then(getData => {
            // dom implementation to about section
            let aboutObj = getData.about;
            aboutObj.forEach(obj => {
                about.innerHTML +=
                    `
                    <!-- card -->
                    <figure class="card">
                        <!-- image -->
                        <div class="image">
                            <img src="${obj.image_about}" alt="image">
                        </div>
                        <!-- caption -->
                        <figcation class="caption">
                            <!-- title -->
                            <h3 class="title">about me <span class="page"><small>01.</small></span></h3>
                            <!-- subtitle -->
                            <h4 class="subtitle">${obj.subtitle_about}</h4>
                            <!-- description -->
                            <p class="description">${obj.description_about}</p>
                            <!-- bio -->
                            <ul class="bio">
                                <li>name: <span>${obj.bio_name}</span></li>
                                <li>age: <span>${obj.bio_age}</span></li>
                                <li>phone: <span>${obj.bio_phone}</span></li>
                                <li>address: <span>${obj.bio_address}</span></li>
                                <!-- card icon -->
                                <i class="fa-solid fa-address-card bio-card-icon"></i>
                            </ul>
                        </figcation>
                    </figure>
                    <!-- skills -->
                    <div class="skills">
                        <!-- title -->
                        <h3 class="title">my skills <span class="page"><small>02.</small></span></h3>
                        <!-- card -->
                        <div class="card">
                            <!-- list -->
                            <div class="list">
                                <h3 class="subtitle"><span class="icon"><i
                                            class="fa-solid fa-address-card card-icon"></i></span>Personal Skills
                                </h3>
                                <!-- progress -->
                                <ul class="progress">
                                    <li>
                                        <span class="chart-title">${obj.communication_skills}</span>
                                        <span class="chart">
                                            <div class="bars"><small class="value">${obj.communication_value}</small></div>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="chart-title">${obj.teamwork_skills}</span>
                                        <span class="chart">
                                            <div class="bars"><small class="value">${obj.teamwork_value}</small></div>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="chart-title">${obj.leadership_skills}</span>
                                        <span class="chart">
                                            <div class="bars"><small class="value">${obj.leadership_value}</small></div>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="chart-title">${obj.self_motivation_skills}</span>
                                        <span class="chart">
                                            <div class="bars"><small class="value">${obj.self_motivation_value}</small></div>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <!-- list -->
                            <div class="list">
                                <h3 class="subtitle"><span class="icon"><i
                                            class="fa-solid fa-bars-progress"></i></span>Professional Skills</h3>
                                <!-- progress -->
                                <ul class="progress">
                                    <li>
                                        <span class="chart-title">${obj.html_skills}</span>
                                        <span class="chart">
                                            <div class="bars"><small class="value">${obj.html_value}</small></div>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="chart-title">${obj.css_skills}</span>
                                        <span class="chart">
                                            <div class="bars"><small class="value">${obj.css_value}</small></div>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="chart-title">${obj.sass_skills}</span>
                                        <span class="chart">
                                            <div class="bars"><small class="value">${obj.sass_value}</small></div>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="chart-title">${obj.javascript_skills}</span>
                                        <span class="chart">
                                            <div class="bars"><small class="value">${obj.javascript_value}</small></div>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="chart-title">${obj.nodejs_skills}</span>
                                        <span class="chart">
                                            <div class="bars"><small class="value">${obj.nodejs_value}</small></div>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="chart-title">${obj.expressjs_skills}</span>
                                        <span class="chart">
                                            <div class="bars"><small class="value">${obj.expressjs_value}</small></div>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="chart-title">${obj.mysql_skills}</span>
                                        <span class="chart">
                                            <div class="bars"><small class="value">${obj.mysql_value}</small></div>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="chart-title">${obj.vuejs_skills}</span>
                                        <span class="chart">
                                            <div class="bars"><small class="value">${obj.vuejs_value}</small></div>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="chart-title">${obj.tailwind_skills}</span>
                                        <span class="chart">
                                            <div class="bars"><small class="value">${obj.tailwind_value}</small></div>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="chart-title">${obj.bootstrap_skills}</span>
                                        <span class="chart">
                                            <div class="bars"><small class="value">${obj.bootstrap_value}</small></div>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    `
            });
            // dom implementation to services section
            let servicesObj = getData.services;
            servicesObj.forEach(obj => {
                services.innerHTML +=
                    `
                    <!-- title -->
                    <h3 class="title">my services <span class="page"><small>03.</small></span></h3>
                    <!-- card -->
                    <ul class="card">
                        <li>
                            <i class="fa-solid fa-pencil"></i>
                            <h4 class="subtitle">${obj.subtitle_services_1}</h4><span class="description">${obj.description_services_1}</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-flag"></i>
                            <h4 class="subtitle">${obj.subtitle_services_2}</h4><span class="description">${obj.description_services_2}</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-laptop"></i>
                            <h4 class="subtitle">${obj.subtitle_services_3}</h4><span class="description">${obj.description_services_3}</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-briefcase"></i>
                            <h4 class="subtitle">${obj.subtitle_services_4}</h4><span class="description">${obj.description_services_4}</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-code"></i>
                            <h4 class="subtitle">${obj.subtitle_services_5}</h4><span class="description">${obj.description_services_5}</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-life-ring"></i>
                            <h4 class="subtitle">${obj.subtitle_services_6}</h4><span class="description">${obj.description_services_6}</span>
                        </li>
                    </ul>
                    `
            });
            // dom implementation to resume section
            let resumeObj = getData.resume;
            resumeObj.forEach(obj => {
                resume.innerHTML +=
                    `
                    <!-- title -->
                    <h3 class="title">my resume <span class="page"><small>04.</small></span></h3>
                    <!-- wrapper container -->
                    <div class="wrapper-container">
                        <!-- wrapper -->
                        <div class="wrapper">
                            <div class="experience">
                                <div class="header">${obj.header_resume_1}</div>
                                <h4 class="subtitle">${obj.subtitle_resume_1}</h4>
                                <div class="description">${obj.description_resume_1}</div>
                            </div>
                        </div>
                        <!-- wrapper -->
                        <div class="wrapper">
                            <div class="experience">
                                <div class="header">${obj.header_resume_2}</div>
                                <h4 class="subtitle">${obj.subtitle_resume_2}</h4>
                                <div class="description">${obj.description_resume_2}</div>
                            </div>
                        </div>
                        <!-- wrapper -->
                        <div class="wrapper">
                            <div class="experience">
                                <div class="header">${obj.header_resume_3}</div>
                                <h4 class="subtitle">${obj.subtitle_resume_3}</h4>
                                <div class="description">${obj.description_resume_3}</div>
                            </div>
                        </div>
                        <!-- wrapper -->
                        <div class="wrapper">
                            <div class="experience">
                                <div class="header">${obj.header_resume_4}</div>
                                <h4 class="subtitle">${obj.subtitle_resume_4}</h4>
                                <div class="description">${obj.description_resume_4}</div>
                            </div>
                        </div>
                        <!-- wrapper -->
                        <div class="wrapper">
                            <div class="experience">
                                <div class="header">${obj.header_resume_5}</div>
                                <h4 class="subtitle">${obj.subtitle_resume_5}</h4>
                                <div class="description">${obj.description_resume_5}</div>
                            </div>
                        </div>
                        <!-- wrapper -->
                        <div class="wrapper">
                            <div class="experience">
                                <div class="header">${obj.header_resume_6}</div>
                                <h4 class="subtitle">${obj.subtitle_resume_6}</h4>
                                <div class="description">${obj.description_resume_6}</div>
                            </div>
                        </div>
                    </div>
                    `
            });
        }).catch(error => {
            console.error(error);
        });
};
document.addEventListener('DOMContentLoaded', getListData);

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