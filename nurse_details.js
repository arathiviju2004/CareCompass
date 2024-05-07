document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const nurseId = parseInt(urlParams.get('id')); // Parse the ID as an integer

    fetch('nurses.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(nurses => {
            const nurse = nurses.find(nurse => nurse.id === nurseId); // Find nurse by ID
            if (nurse) {
                displayNurseDetails(nurse);
            } else {
                const nurseDetailsDiv = document.getElementById('nurseDetails');
                nurseDetailsDiv.innerHTML = '<p>Nurse details not found.</p>';
            }
        })
        .catch(error => {
            console.error('Could not load the nurse data:', error);
        });
});

function displayNurseDetails(nurse) {
    const nurseDetailsDiv = document.getElementById('nurseDetails');
    nurseDetailsDiv.innerHTML = `
    <h2>${nurse.name}</h2>
    <p>Location: ${nurse.location}</p>
    <p>Age: ${nurse.age}</p>
    <p>Gender: ${nurse.gender}</p>
    <p>Specialization: ${nurse.specialization}</p>
    <p>Experience: ${nurse.experience}</p>
    <p>Rating: ${nurse.rating}</p>
    <p>Mobile: ${nurse.mobile}</p>
    <p>Email: ${nurse.email}</p>
    <p>Description: ${nurse.description}</p>
    <p>Languages: ${nurse.languages.join(', ')}</p>
    <p>Education: ${nurse.education}</p>
    <p>Certifications: ${nurse.certifications.join(', ')}</p>
    `;
}
