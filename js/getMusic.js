import she from "./sheong"
import head from './head'
import theme from './theme'
export default function () {
    const {color,bgColor,fontColor} = theme;
    she
    ('appCont')([
        ['div',{ sheContent:'head' }],
        ['div',{ class:'musicListBox fcs' },[
            ['div',{ class:'frc musicList',sheFor:'musicList;item;i'},[
                ['span',{ sheContent:'item.name', class:'musicName f10' }],
                ['span',{ sheContent:'item.size', class:'musicSize f1' }],
                ['button',{ class:'addMusicList f2' },['+']]
            ]]
        ]]
    ])

    head({title:'获取音乐', menu:false});

    const musicList = [
        {
            name:'xxx',
            size:'20M'
        },
        {
            name:'xxx',
            size:'20M'
        },
        {
            name:'xxx',
            size:'20M'
        }
    ];

    she
    ('musicList')(musicList)

    she.style([
        ['.musicListBox',{
            padding:'0 5px'
        }],
        ['.musicList',{
            backgroundColor:'rgb(255,255,255)',
            marginTop:'5px',
            width:'100%',
            height:' 30px',
            borderRadius: '3px',
            color:fontColor,
            fontSize:'16px'
        }],
        ['.musicList .musicName',{
            paddingLeft:'10px'
        }],
        ['.musicList .addMusicList',{
            color:fontColor,
            fontSize:'20px'
        }]
    ]);
}