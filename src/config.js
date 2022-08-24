const config = require('config');

const Theme = config.get('Settings.theme');

window.onload(GetTheme);
const GetTheme = () => {
    switch (Theme) {
        case "dark":
         var backgroundColor = document.body;
         backgroundColor.className = "dark-mode-background";
        break;
    }


}
