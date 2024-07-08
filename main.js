document.getElementById('registrationForm').addEventListener('submit', registerStudent);

function registerStudent(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    fetch('/api/students/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, age })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Registration successful', data);
        window.location.href = '/public/profile.html'; // Redirect to profile page
    })
    .catch(error => console.error('Registration error:', error));
}

// Example profile loading function (to be implemented based on your needs)
function loadProfile() {
    fetch('/api/students/profile')
    .then(response => response.json())
    .then(data => {
        // Display profile information on the profile page
        const profileInfo = document.getElementById('profileInfo');
        profileInfo.innerHTML = `
            <h2>${data.name}</h2>
            <p>Email: ${data.email}</p>
            <p>Age: ${data.age}</p>
            <p>Registration Date: ${new Date(data.date).toLocaleDateString()}</p>
        `;
    })
    .catch(error => console.error('Profile loading error:', error));
}
