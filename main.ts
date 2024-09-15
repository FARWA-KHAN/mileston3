
document.addEventListener('DOMContentLoaded', () => {

    // Get form and output elements
    const resumeForm = document.getElementById('Resumeform') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

    
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get all form fields
        const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
        const nameElement = document.getElementById('name') as HTMLInputElement;
        const emailElement = document.getElementById('email') as HTMLInputElement;
        const phoneElement = document.getElementById('phone') as HTMLInputElement;
        const educationElement = document.getElementById('education') as HTMLTextAreaElement;
        const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
        const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;

        // Get input values
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;
        const experience = experienceElement.value;

        //  profile picture
        const profilePictureFile = profilePictureInput.files?.[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const profilePictureURL = e.target?.result;

            // resume output
            const resumeContent = `
                <h2>Generated Resume</h2>
                ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture" style="width: 150px; height: 150px; border-radius: 50%;">` : ''}
                <p><strong>Full Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Skills</h3>
                <p>${skills}</p>
                <h3>Experience</h3>
                <p>${experience}</p>
            `;

            
            if (resumeOutput) {
                resumeOutput.innerHTML = resumeContent;
            }
        };

        // Read profile picture as a data URL
        if (profilePictureFile) {
            reader.readAsDataURL(profilePictureFile);
        } else {
            // If no profile picture, still generate resume
            resumeOutput.innerHTML = `
                <h2>Generated Resume</h2>
                <p><strong>Full Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Skills</h3>
                <p>${skills}</p>
                <h3>Experience</h3>
                <p>${experience}</p>
            `;
        }
    });
});
