/* =========================================
   HELPER FUNCTION
========================================= */

function getValue(id) {
    return document.getElementById(id).value.trim();
}


/* =========================================
   PERSONAL INFORMATION
========================================= */

const personalFields = [
    "fullName",
    "jobTitle",
    "email",
    "phone",
    "location",
    "website",
    "linkedin",
    "summary",
    "skills"
];


/* =========================================
   UPDATE PERSONAL INFORMATION
========================================= */

function updatePersonalInformation() {

    const fullName = getValue("fullName");
    const jobTitle = getValue("jobTitle");
    const email = getValue("email");
    const phone = getValue("phone");
    const location = getValue("location");
    const website = getValue("website");
    const linkedin = getValue("linkedin");
    const summary = getValue("summary");
    const skills = getValue("skills");


    document.getElementById("previewName").textContent =
        fullName || "Your Name";


    document.getElementById("previewJobTitle").textContent =
        jobTitle || "Your Job Title";


    document.getElementById("previewEmail").textContent =
        email || "email@example.com";


    document.getElementById("previewPhone").textContent =
        phone || "+91 0000000000";


    document.getElementById("previewLocation").textContent =
        location || "Your Location";


    document.getElementById("previewSummary").textContent =
        summary ||
        "Your professional summary will appear here.";


    /* Website */

    const websiteLink =
        document.getElementById("previewWebsite");

    if (website) {

        websiteLink.href = website;

        websiteLink.textContent = "Portfolio";

        websiteLink.style.display = "inline";

    } else {

        websiteLink.style.display = "none";
    }


    /* LinkedIn */

    const linkedinLink =
        document.getElementById("previewLinkedin");

    if (linkedin) {

        linkedinLink.href = linkedin;

        linkedinLink.textContent = "LinkedIn";

        linkedinLink.style.display = "inline";

    } else {

        linkedinLink.style.display = "none";
    }


    /* Skills */

    const previewSkills =
        document.getElementById("previewSkills");

    previewSkills.innerHTML = "";


    const skillArray = skills
        .split(",")
        .map(skill => skill.trim())
        .filter(skill => skill !== "");


    if (skillArray.length === 0) {

        previewSkills.innerHTML =
            "<span>HTML</span>" +
            "<span>CSS</span>" +
            "<span>JavaScript</span>";

    } else {

        skillArray.forEach(skill => {

            const span = document.createElement("span");

            span.textContent = skill;

            previewSkills.appendChild(span);

        });
    }
}


/* =========================================
   EDUCATION
========================================= */

const educationContainer =
    document.getElementById("educationContainer");

const addEducationButton =
    document.getElementById("addEducation");


function createEducationEntry() {

    const entry =
        document.createElement("div");

    entry.className =
        "entry education-entry";


    entry.innerHTML = `

        <label>Degree / Course</label>

        <input
            type="text"
            class="education-degree"
            placeholder="B.Tech in Computer Science">

        <label>Institution</label>

        <input
            type="text"
            class="education-institution"
            placeholder="ABC University">

        <label>Year</label>

        <input
            type="text"
            class="education-year"
            placeholder="2022 - 2026">

        <button
            type="button"
            class="remove-btn remove-education">
            Remove
        </button>

    `;


    educationContainer.appendChild(entry);

    updateResume();
}


addEducationButton.addEventListener(
    "click",
    createEducationEntry
);


/* =========================================
   EXPERIENCE
========================================= */

const experienceContainer =
    document.getElementById("experienceContainer");

const addExperienceButton =
    document.getElementById("addExperience");


function createExperienceEntry() {

    const entry =
        document.createElement("div");

    entry.className =
        "entry experience-entry";


    entry.innerHTML = `

        <label>Job Title</label>

        <input
            type="text"
            class="experience-title"
            placeholder="Web Developer Intern">

        <label>Company</label>

        <input
            type="text"
            class="experience-company"
            placeholder="ABC Technologies">

        <label>Duration</label>

        <input
            type="text"
            class="experience-duration"
            placeholder="June 2025 - August 2025">

        <label>Description</label>

        <textarea
            class="experience-description"
            rows="4"
            placeholder="Describe your responsibilities and achievements"></textarea>

        <button
            type="button"
            class="remove-btn remove-experience">
            Remove
        </button>

    `;


    experienceContainer.appendChild(entry);

    updateResume();
}


addExperienceButton.addEventListener(
    "click",
    createExperienceEntry
);


/* =========================================
   UPDATE EDUCATION PREVIEW
========================================= */

function updateEducationPreview() {

    const preview =
        document.getElementById("previewEducation");

    const entries =
        document.querySelectorAll(".education-entry");


    preview.innerHTML = "";


    if (entries.length === 0) {

        preview.innerHTML =
            "<p>No education information added.</p>";

        return;
    }


    entries.forEach(entry => {

        const degree =
            entry.querySelector(
                ".education-degree"
            ).value.trim();

        const institution =
            entry.querySelector(
                ".education-institution"
            ).value.trim();

        const year =
            entry.querySelector(
                ".education-year"
            ).value.trim();


        if (!degree && !institution && !year) {
            return;
        }


        const resumeEntry =
            document.createElement("div");

        resumeEntry.className =
            "resume-entry";


        resumeEntry.innerHTML = `

            <div class="entry-top">

                <strong>
                    ${escapeHTML(degree || "Degree / Course")}
                </strong>

                <span>
                    ${escapeHTML(year || "Year")}
                </span>

            </div>

            <p>
                ${escapeHTML(
                    institution || "Institution"
                )}
            </p>

        `;


        preview.appendChild(resumeEntry);
    });


    if (preview.innerHTML.trim() === "") {

        preview.innerHTML =
            "<p>No education information added.</p>";
    }
}


/* =========================================
   UPDATE EXPERIENCE PREVIEW
========================================= */

function updateExperiencePreview() {

    const preview =
        document.getElementById("previewExperience");

    const entries =
        document.querySelectorAll(".experience-entry");


    preview.innerHTML = "";


    if (entries.length === 0) {

        preview.innerHTML =
            "<p>No experience information added.</p>";

        return;
    }


    entries.forEach(entry => {

        const title =
            entry.querySelector(
                ".experience-title"
            ).value.trim();

        const company =
            entry.querySelector(
                ".experience-company"
            ).value.trim();

        const duration =
            entry.querySelector(
                ".experience-duration"
            ).value.trim();

        const description =
            entry.querySelector(
                ".experience-description"
            ).value.trim();


        if (
            !title &&
            !company &&
            !duration &&
            !description
        ) {
            return;
        }


        const resumeEntry =
            document.createElement("div");

        resumeEntry.className =
            "resume-entry";


        resumeEntry.innerHTML = `

            <div class="entry-top">

                <strong>
                    ${escapeHTML(
                        title || "Job Title"
                    )}
                </strong>

                <span>
                    ${escapeHTML(
                        duration || "Duration"
                    )}
                </span>

            </div>

            <p>
                ${escapeHTML(
                    company || "Company"
                )}
            </p>

            <p>
                ${escapeHTML(
                    description ||
                    "Experience description."
                )}
            </p>

        `;


        preview.appendChild(resumeEntry);
    });


    if (preview.innerHTML.trim() === "") {

        preview.innerHTML =
            "<p>No experience information added.</p>";
    }
}


/* =========================================
   ESCAPE HTML
========================================= */

function escapeHTML(value) {

    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================
   REMOVE EDUCATION / EXPERIENCE
========================================= */

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains(
                "remove-education"
            )
        ) {

            event.target
                .closest(".education-entry")
                .remove();

            updateResume();
        }


        if (
            event.target.classList.contains(
                "remove-experience"
            )
        ) {

            event.target
                .closest(".experience-entry")
                .remove();

            updateResume();
        }

    }
);


/* =========================================
   UPDATE EVERYTHING
========================================= */

function updateResume() {

    updatePersonalInformation();

    updateEducationPreview();

    updateExperiencePreview();
}


/* =========================================
   UPDATE ON EVERY INPUT EVENT
========================================= */

document.addEventListener(
    "input",
    function() {

        updateResume();

    }
);


/* =========================================
   CLEAR FORM
========================================= */

document
    .getElementById("clearForm")
    .addEventListener(
        "click",
        function() {

            const inputs =
                document.querySelectorAll(
                    "input, textarea"
                );


            inputs.forEach(input => {

                input.value = "";

            });


            updateResume();

        }
    );


/* =========================================
   PRINT / SAVE PDF
========================================= */

document
    .getElementById("printResume")
    .addEventListener(
        "click",
        function() {

            window.print();

        }
    );


/* =========================================
   INITIAL UPDATE
========================================= */

updateResume();