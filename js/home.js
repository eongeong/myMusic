import she from "./sheong"
import footer from "./footer"
import theme from './theme'
export default function () {
    const {color,bgColor} = theme;
    she
    ("appCont")([
        ["div", { class:'head frc' },[
            ['span',{ class:'add', she:'addMusic' },['+']]
        ]],
        ["div",{ class:'addMusic fcc',she:'addMusic' },[
            ["span",{},['添加本地歌曲']]
        ]],
        ["div", { sheContent:"footer" }]
    ])
    ('addMusic')((el)=>{
        el.onclick = function () {
            location.hash = '#/getMusic'
        };
    })


    footer();

    she.style([
        ['.head',{
            height:'44px',
            backgroundColor:'rgb(255,255,255)'
        }],
        ['.head .add',{
            color,
            fontSize:'40px',
            margin:'0 10px 0 auto'
        }],
        [".addMusic", {
            color: 'rgb(255,255,255)',
            fontSize: '24px',
            width:'100%',
            marginTop:'30px'
        }]
    ]);
}