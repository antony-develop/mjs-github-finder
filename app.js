const github = new GitHub();
const ui = new UI();
const searchUser = document.querySelector('#search-user');

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message == 'Not Found') {
                    // show allert
                    ui.flashMessage('User not found', 'danger');
                } else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    } else {
        // clear profile
        ui.clearProfile();
    }
})