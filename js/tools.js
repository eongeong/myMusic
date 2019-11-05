import she from './sheong'
export default {
    setAppHeight: function () {
        she.style([
            ["#app",{ height: 'auto' }]
        ])
        const app = document.getElementById('app');
        const winHeight = document.documentElement.clientHeight;
        const elHeight = parseInt(getComputedStyle(app).height);
        if ( elHeight < winHeight ) {
            she.style([
                ["#app",{ height: winHeight + 'px' }]
            ])
        }
    }
}