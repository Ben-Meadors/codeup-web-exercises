'use strict'


// fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => data.forEach(user => console.log(user)));

// function getGithubUsernames() {
//     return fetch('https://api.github.com/users')
//         .then(response => response.json())
// }
// console.log(getGithubUsernames());
//
// getGithubUsernames().then( users => {
//     users.forEach( userObj => {
//         // do something with each username
//         console.log(userObj.login);
//     });
// }).catch(error => console.error(error));

// fetch(url, {headers: {'Authorization': 'token GITHUB_KEY'}})
function getCommitDate(username){
const url = `https://api.github.com/users/${username}/events`;
const token = GITHUB_KEY;
const options = {
    headers:{
        'Authorization': `token ${token}`
    }
};
return fetch(url, options).then(response => response.json()).then(events => {
const lastPushEvent = events.find(event => event.type === 'PushEvent');
if (lastPushEvent) {
return lastPushEvent.created_at;
} else {
    throw new Error('No pushes found');
}
}).then(dateString => new Date(dateString).toDateString())
}
console.log(getCommitDate(Ben-Meadors));
