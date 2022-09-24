const dropbox = require('dropbox');
const { Dropbox } = require('dropbox');
const dotenv = require('dotenv').config();
const dbx = new Dropbox({
    accessToken: process.env.token
});
dbx.usersGetCurrentAccount().then(function (response) {
    console.log(response);
}).catch(function (err) {
console.error(err);
});
dbx.filesListFolder({path: '/screenshots'}).then(function (response) {
    console.log(response.entries);
}).catch(function (err) {
console.error(err);
});