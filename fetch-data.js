document.addEventListener("DOMContentLoaded", function () {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch user data
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear loading message
            dataContainer.innerHTML = '';

            // Create user list
            const userList = document.createElement('ul');
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.name;
                userList.appendChild(li);
            });

            // Append to container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Error handling
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    fetchUserData();
});
