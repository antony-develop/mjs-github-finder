class GitHub {
    constructor(params) {
        this.clientId = '31399460c10f90e4f88f';
        this.clientSecret = 'd620e47c72d35a3626833eee07d4d9087f80ec84';
        this.reposCount = 5;
        this.reposSort = 'created: asc';
    }

    async getUser(userLogin) {
        const profileResponse = await fetch(`https://api.github.com/users/${userLogin}?client_id=${this.clientId}&client_sercret=${this.clientSecret}`);
        const profile = await profileResponse.json();

        const reposResponse = await fetch(`https://api.github.com/users/${userLogin}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_sercret=${this.clientSecret}`); 
        const repos = await reposResponse.json();


        return {
            profile: profile,
            repos: repos
        }
    }
}