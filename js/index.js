import she from "./sheong"
import defaultStyle from "./defaultStyle"
import flex from "./flex"
import home from "./home"
import theme from './theme'

const {color,bgColor} = theme;

home();
she.hashchange((hash) =>{
    switch (hash) {
        case "#/":
            home();
            break;
    }
});

she
("appEl")((el)=>{
    const elHeight = parseInt(getComputedStyle(el).height);
    const winHeight = document.documentElement.clientHeight;
    if ( elHeight < winHeight ) {
        she.style([
            ["#app",{ height: winHeight + 'px' }]
        ])
    }
})

she.style(defaultStyle);
she.style(flex);
she.style([
    ["#app",{
        width:"100%",
        backgroundColor:bgColor
    }]
]);