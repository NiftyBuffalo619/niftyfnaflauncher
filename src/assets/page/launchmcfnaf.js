var child = require('child_process').execFile;
var excutablePath = `C:/ProgramData/Microsoft/Windows/Start Menu/Programs/Minecraft/Minecraft.lnk`;
var parameters = ["--incognito"];

document.getElementById('play-button').addEventListener('click', function () {
StartMC();
});

function StartMC() {
    child(excutablePath , parameters , function (err, child) {
     console.log("Error:", err);
     console.log(data.toString());
     alert('OK');
    });
}
