import she from "./sheong"
import backIcon from '../img/icon/back.svg'
import menuIcon from '../img/icon/menu.svg'
import theme from './theme'
export default function ({back, title, menu}) {
    const {color,bgColor,fontColor} = theme;
    she
    ('head')([
        ['div',{class:'frc head'},[
            ['div',{ class:'back f1 frc jc' },[
                ['div',{ class:'backIcon', she:'back' }]
            ]],
            ['div',{ class:'title f4 frc jc' },[
                ['span',{ class:'titleText' },[title]]
            ]],
            ['div',{ class:'menu f1 frc jc' },[
                ['div',{ class:'menuIcon' }]
            ]]
        ]]
    ])
    ('back')((el)=>{
        el.onclick = function () {
            history.go(-1);
        }
    })

    she.style([
        ['[she-content="head"]',{
            width: '100%',
            height: '44px',
            backgroundColor: 'rgb(255,255,255)'
        }],
        ['[she-content="head"] .head',{
            width: '100%',
            height: '100%'
        }],
        ['[she-content="head"] .head>*',{
            height: '100%'
        }],
        ['[she-content="head"] .backIcon',{
            backgroundImage:`url(${backIcon})`,
            display: back === false ? 'none' : 'block'
        }],
        ['[she-content="head"] .menuIcon',{
            backgroundImage:`url(${menuIcon})`,
            display: menu === false ? 'none' : 'block'
        }],
        ['[she-content="head"] .backIcon, [she-content="head"] .menuIcon',{
            backgroundSize:'40% 40%',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center center',
            width:'100%',
            height: '100%'
        }],
        ['[she-content="head"] .titleText',{
            fontSize:'18px',
            color:fontColor
        }]
    ]);
}