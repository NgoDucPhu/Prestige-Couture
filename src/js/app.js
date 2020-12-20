import '../styles/app.scss';

document.querySelectorAll('.pc-menu__item').forEach(ele => {
    $(ele).click(function () { 
        $(this).children('.btn--menu-list').toggleClass('active');
        $(this).children('.pc-menu__sublist').toggleClass('pc-menu__sublist--show');
     })
});


