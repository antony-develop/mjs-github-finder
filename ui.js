class UI {
    constructor(){
        this.profile = document.querySelector('#profile');
    }

    showProfile(user) {
        console.log(user);
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}" alt="profile image" class="img-fluid mb-2">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary mb-1">Public repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary mb-1">Public gists: ${user.public_gists}</span>
                        <span class="badge badge-success mb-1">Followers: ${user.followers}</span>
                        <span class="badge badge-info mb-1">Following: ${user.following}</span>
                        <br>
                        <br>
                        <ul>
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest repos</h3>
            <div id="repos"></div>
        `;
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    flashMessage(message, type) {
        const div = document.createElement('div');
        div.className = 'alert alert-' + type;
        div.innerText = message;

        this.clearFlashMessages();
        document.querySelector('.search-container').prepend(div);

        setTimeout(() => {
            div.remove();
        }, 2000);
    }

    clearFlashMessages() {
        const searchContainer = document.querySelector('.search-container');
        if (searchContainer.firstElementChild.classList.contains('alert')) {
            searchContainer.firstElementChild.remove();
        }
    }

    showRepos(repos) {
        let output = '';
        for (let repo of repos) {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <div class="badge badge-primary">Stars: ${repo.stargazers_count}</div>
                            <div class="badge badge-secondary">Watchers: ${repo.watchers_count}</div>
                            <div class="badge badge-success">Forks: ${repo.forks_count}</div>
                        </div>
                    </div>
                </div>
            `;
        }

        document.querySelector('#repos').innerHTML = output;
    }
}