document.addEventListener('DOMContentLoaded', function () {
    // Get form and output elements
    var resumeForm = document.getElementById('Resumeform');
    var resumeOutput = document.getElementById('resumeOutput');
    resumeForm.addEventListener('submit', function (event) {
        var _a;
        event.preventDefault();
        // Get all form fields
        var profilePictureInput = document.getElementById('profilePicture');
        var nameElement = document.getElementById('name');
        var emailElement = document.getElementById('email');
        var phoneElement = document.getElementById('phone');
        var educationElement = document.getElementById('education');
        var skillsElement = document.getElementById('skills');
        var experienceElement = document.getElementById('experience');
        // Get input values
        var name = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        //  profile picture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var profilePictureURL = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            // resume output
            var resumeContent = "\n                <h2>Generated Resume</h2>\n                ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\" style=\"width: 150px; height: 150px; border-radius: 50%;\">") : '', "\n                <p><strong>Full Name:</strong> ").concat(name, "</p>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n                <h3>Experience</h3>\n                <p>").concat(experience, "</p>\n            ");
            if (resumeOutput) {
                resumeOutput.innerHTML = resumeContent;
            }
        };
        // Read profile picture as a data URL
        if (profilePictureFile) {
            reader.readAsDataURL(profilePictureFile);
        }
        else {
            // If no profile picture, still generate resume
            resumeOutput.innerHTML = "\n                <h2>Generated Resume</h2>\n                <p><strong>Full Name:</strong> ".concat(name, "</p>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n                <h3>Experience</h3>\n                <p>").concat(experience, "</p>\n            ");
        }
    });
});
