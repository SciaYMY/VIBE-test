const nav=$('#tabletNav'),
navLogoNaver=$('#tabletNav img[src*=naver]'),
navLogoVibe=$('#tabletNav img[src*=vibe]'),
navIcon=$('#tabletNav i');

$(window).scroll(function(){
    if($(this).scrollTop() > 67){
        nav.addClass('on');
        navLogoNaver.attr('src', './img/SVG/naver_fff.svg');
        navLogoVibe.attr('src', './img/SVG/vibe_fff.svg');
        navIcon.addClass('on');
    } else {
        nav.removeClass('on');
        navLogoNaver.attr('src', './img/SVG/naver.svg');
        navLogoVibe.attr('src', './img/SVG/vibe.svg');
        navIcon.removeClass('on');
    }
})