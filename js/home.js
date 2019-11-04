import she from "./sheong"
import footer from "./footer"
import theme from './theme'
export default function () {
    const {color,bgColor} = theme;
    she
    ("appCont")([
        ["div",{ class:'addMusic fcc' },[
            ["span",{},['添加本地歌曲']]
        ]],
        ["div", { sheContent:"footer" }]
    ])
    
    footer();

    she.style([
        [".addMusic", {
            color: 'rgb(255,255,255)',
            fontSize: '24px',
            width:'100%',
            paddingTop:'30px'
        }]
    ]);
}