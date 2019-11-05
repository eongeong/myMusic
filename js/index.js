import she from "./sheong"
import defaultStyle from "./defaultStyle"
import flex from "./flex"
import theme from './theme'
import tools from './tools'

import home from "./home"
import getMusic from "./getMusic"

const {color,bgColor} = theme;
const {setAppHeight} = tools;

// getMusic();
home();
setAppHeight();

she.hashchange((hash) =>{
    switch (hash) {
        case "#/":
            home();
            break;
        case "#/getMusic":
            getMusic();
            break;
    }

    setAppHeight();
});

she.style(defaultStyle);
she.style(flex);
she.style([
    ["#app",{
        width:"100%",
        backgroundColor:bgColor
    }]
]);