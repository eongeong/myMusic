import she from "./sheong"
import theme from './theme'
export default function () {
    const {color} = theme;
    she("footer")([
        ["div",{ class:'footerNav frs' },[
            ["div",{ class:'footerButton frc jc', sheFor:'footerData;item;i', she:'item.click', sheAttribute:'{style:item.css}' },[
                ["span",{ sheContent:'item.text' }]
            ]]
        ]]
    ]);

    const footerClick = function (el) {
        el.onclick = function () {
            switch (el.getAttribute('i')) {
                case '0':
                    footerData[0].css = 'border-bottom:2px solid '+ color +';border-right:2px solid '+ color +';';
                    footerData[1].css = 'border-top:2px solid '+ color +';';
                    footerData[2].css = 'border-top:2px solid '+ color +';';
                    footerData[3].css = 'border-top:2px solid '+ color +';';
                    break;
                case '1':
                    footerData[0].css = 'border-top:2px solid '+ color +';';
                    footerData[1].css = 'border-bottom:2px solid '+ color +';border-right:2px solid '+ color +';border-left:2px solid '+ color +'';
                    footerData[2].css = 'border-top:2px solid '+ color +';';
                    footerData[3].css = 'border-top:2px solid '+ color +';';
                    break;
                case '2':
                    footerData[0].css = 'border-top:2px solid '+ color +';';
                    footerData[1].css = 'border-top:2px solid '+ color +';';
                    footerData[2].css = 'border-bottom:2px solid '+ color +';border-right:2px solid '+ color +';border-left:2px solid '+ color +'';
                    footerData[3].css = 'border-top:2px solid '+ color +';';
                    break;
                case '3':
                    footerData[0].css = 'border-top:2px solid '+ color +';';
                    footerData[1].css = 'border-top:2px solid '+ color +';';
                    footerData[2].css = 'border-top:2px solid '+ color +';';
                    footerData[3].css = 'border-bottom:2px solid '+ color +';border-left:2px solid '+ color +';';
                    break;
            }
            she('footerData')(footerData)
        }
    };

    const footerData = [
        {
            click: footerClick,
            css:'border-bottom:2px solid '+ color +';border-right:2px solid '+ color ,
            text:'本地'
        },
        {
            click: footerClick,
            css:'border-top:2px solid '+ color +';',
            text:'网络'
        },
        {
            click: footerClick,
            css:'border-top:2px solid '+ color +';',
            text:'我的'
        },
        {
            click: footerClick,
            css:'border-top:2px solid '+ color +';',
            text:'设置'
        }
    ];

    she
    ('footerData')(footerData)

    she.style([
        ['[she-content="footer"]',{
            width:"100%",
            position:'fixed',
            bottom:'0',
            backgroundColor: "rgb(255,255,255)",
            zIndex: '99'
        }],
        ['.footerNav',{
            width:'100%',
            height:'44px',
        }],
        ['.footerButton',{
            color,
            fontSize:'18px',
            flex:'1',
            height:'100%'
        }],
    ]);
}