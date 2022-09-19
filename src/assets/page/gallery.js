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
dbx.filesListFolder({path: ''}).then(function (response) {
    console.log(response);
}).catch(function (err) {
console.error(err);
});