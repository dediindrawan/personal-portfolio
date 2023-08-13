// strict mode is activated
'use strict';

// import data from local database
const data = 'public/data/data.json';

// create variable to dom execution
const about = document.querySelectorAll('.about');
const services = document.querySelectorAll('.services');
const resume = document.querySelectorAll('.resume');
const portfolio = document.querySelectorAll('.portfolio');

// export data and sending to the web page
const getDataObject = () => {
    fetch(data)
        .then(res => {
            return res.json();
        }).then(getData => {
            // ========== dom implementation to about content ========== //
            let aboutObj = getData.about[0];

            // reverse data form highest to lowest on personal value
            const reversePersonalValue = aboutObj.personal.sort((a, b) => parseInt(a.personal_values) - parseInt(b.personal_values));
            reversePersonalValue.reverse();

            // reverse data form highest to lowest on professional value
            const reverseProfessionalValue = aboutObj.professional.sort((a, b) => parseInt(a.professional_values) - parseInt(b.professional_values));
            reverseProfessionalValue.reverse();

            // mapping inner object array on about property to get specific data
            let personalSkills = reversePersonalValue.map(dataItems => dataItems.personal_skills);
            let personalValues = reversePersonalValue.map(dataItems => dataItems.personal_values);
            let professionalSkills = reverseProfessionalValue.map(dataItems => dataItems.professional_skills);
            let professionalValues = reverseProfessionalValue.map(dataItems => dataItems.professional_values);

            about.forEach(abouts => {
                abouts.innerHTML = '';
                abouts.innerHTML +=
                    `
                    <!-- card -->
                    <figure class="card">
                        <!-- image -->
                        <div class="image">
                            <img src="${aboutObj.image_about}" alt="image">
                        </div>
                        <!-- caption -->
                        <figcation class="caption">
                            <!-- title -->
                            <h3 class="title">about me <span class="page"><small>01.</small></span></h3>
                            <!-- subtitle -->
                            <h4 class="subtitle">${aboutObj.subtitle_about}</h4>
                            <!-- description -->
                            <p class="description">${aboutObj.description_about}</p>
                            <!-- bio -->
                            <ul class="bio">
                                <li>name: <span>${aboutObj.bio_name}</span></li>
                                <li>age: <span>${aboutObj.bio_age}</span></li>
                                <li>phone: <span>${aboutObj.bio_phone}</span></li>
                                <li>address: <span>${aboutObj.bio_address}</span></li>
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
                                ${personalSkills.map((skills, listIndex) => `
                                <li>
                                    <span class="chart-title">${skills}</span>
                                    <span class="chart">
                                        <div class="personal bars"><small class="value">${personalValues[listIndex]}</small></div>
                                    </span>
                                </li>
                                `).join('')}
                                </ul>
                            </div>
                            <!-- list -->
                            <div class="list">
                                <h3 class="subtitle"><span class="icon"><i
                                            class="fa-solid fa-bars-progress"></i></span>Professional Skills</h3>
                                <!-- progress -->
                                <ul class="progress">
                                ${professionalSkills.map((skills, listIndex) => `
                                    <li>
                                        <span class="chart-title">${skills}</span>
                                        <span class="chart">
                                            <div class="professional bars"><small class="value">${professionalValues[listIndex]}</small></div>
                                        </span>
                                    </li>
                                `).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                    `
            });
            // compare bars width as bars value on skills personal bars value 
            let personalBars = document.querySelectorAll('.personal');
            personalBars.forEach(personBars => {
                let rootBars = personBars.firstElementChild;
                let barsValue = rootBars.innerHTML;
                personBars.style.width = barsValue;
            });
            // compare bars width as bars value on skills professional bars value 
            let professionalBars = document.querySelectorAll('.professional');
            professionalBars.forEach(profBars => {
                let rootBars = profBars.firstElementChild;
                let barsValue = rootBars.innerHTML;
                profBars.style.width = barsValue;
            });
            // ========== dom implementation to services content ========== //
            let servicesObj = getData.services;
            let iconServices = servicesObj.map(dataItems => dataItems.icon_services);
            let subtitleServices = servicesObj.map(dataItems => dataItems.subtitle_services);
            let descriptionServices = servicesObj.map(dataItems => dataItems.description_services);
            services.forEach(servs => {
                servs.innerHTML = '';
                servs.innerHTML +=
                    `
                    <!-- title -->
                    <h3 class="title">my services <span class="page"><small>03.</small></span></h3>
                    <!-- card -->
                    <ul class="card">
                    ${subtitleServices.map((services, listIndex) => `
                        <li>
                            ${iconServices[listIndex]}
                            <h4 class="subtitle">${services}</h4><span class="description">${descriptionServices[listIndex]}</span>
                        </li>
                    `).join('')}
                    </ul>
                    `
            });
            // ========== dom implementation to resume content ========== //
            let resumeObj = getData.resume;
            let headerResume = resumeObj.map(dataItems => dataItems.header_resume);
            let subtitleResume = resumeObj.map(dataItems => dataItems.subtitle_resume);
            let descriptionResume = resumeObj.map(dataItems => dataItems.description_resume);
            resume.forEach(resumes => {
                resumes.innerHTML = '';
                resumes.innerHTML +=
                    `
                    <!-- title -->
                    <h3 class="title">my resume <span class="page"><small>04.</small></span></h3>
                    <!-- wrapper container -->
                    <div class="wrapper-container">
                    ${headerResume.map((resume, listIndex) => `
                        <!-- wrapper -->
                        <div class="wrapper">
                            <div class="experience">
                                <div class="header">${resume}</div>
                                <h4 class="subtitle">${subtitleResume[listIndex]}</h4>
                                <div class="description">${descriptionResume[listIndex]}</div>
                            </div>
                        </div>
                    `).join('')}
                    </div>
                    `
            });
            // ========== dom implementation to portfolio content ========== //
            let portfolioObj = getData.portfolio;
            let urlImagePortfolio = portfolioObj.map(dataItems => dataItems.url_image_portfolio);
            let imagePortfolio = portfolioObj.map(dataItems => dataItems.image_portfolio);
            portfolio.forEach(portfolios => {
                portfolios.innerHTML = '';
                portfolios.innerHTML +=
                    `
                    <!-- title -->
                    <h3 class="title">my portfolio <span class="page"><small>05.</small></span></h3>
                    <!-- card -->
                    <ul class="card">
                    ${urlImagePortfolio.map((portfolio, listIndex) => `
                    <li>
                        <a href="${portfolio}" target="_blank">
                            <img src="${imagePortfolio[listIndex]}" alt="image">
                            <span class="detail">
                                <i class="fa-regular fa-image"></i>
                                <span class="caption">website</span>
                            </span>
                        </a>
                    </li>
                    `).join('')}
                    </ul>
                    `
            });
        }).catch(err => {
            console.log('Oops, sorry!! We\'re looks like having trouble to load data. Detail error => ' + err);
        });
};
document.addEventListener('DOMContentLoaded', getDataObject);