document.addEventListener('DOMContentLoaded', function(){

    
/*     var imgTag = $('<mg src="./img/desktop/cover1.png">');
    if (imgTag.length === 1) { //length 프로퍼티는 해당 태그가 존재하면 1, 없으면 0을 리턴한다.
        if (imgTag.complete === false) {
            console.log(imgTag);
            imgTag.load(function () {
            var height = imgTag.height();
            console.log(imgTag);
            });
        }
    }
 */

    // MENU LETTER
    function menuColor(){
        const menuLetter = $('.menu-bar span');
        $(window).scroll(function(){
            if($(this).scrollTop() == 0){
                menuLetter.css('color', '#fff')
            } else {
                menuLetter.css('color', '#000');
            }
            console.log($(this).scrollTop())
        });
    };
    menuColor();

    //MENU BUTTON
    function menuControl(){
        let menuBtn = $('.menu-bar'),
            menu = $('#nav');

        menuBtn.click(function(){
            menu.css('display', 'block').animate({left: 0}, 300);
        })
        menu.mouseleave(function(){
            menu.animate({left: '-225px'}, 300).css('display', 'none');     //속도 수정 필요
        })

        // JavaScript
/* 
        var menuBtn = document.getElementsByClassName('menu-bar')[0],
            menu = document.getElementById('nav');
    
        menuBtn.addEventListener('click', function(){
            menu.style.display = 'block';
            // menu.addClass('animated');
        });
        menu.addEventListener('mouseleave', function(){
            menu.style.display = 'none'
        });
 */        
    };
    menuControl();


    //SONG LIST
    function songListControl(){
        const playBar=$('#playBar'),
            songListBtn=$('.song-list-btn'),
            songListBtnImg=songListBtn.children('img'),
            songList=$('#songList');
            
        let playBarCondition=playBar.css('overflow');  
        // console.log(playBarCondition);

        playBar.click(function(){
            if(playBarCondition === 'hidden'){            
                songListBtnImg.attr('src', "./img/SVG/playlist_down.svg");
                songListBtn.addClass('song-list-open');
                playBar.css('overflow', 'visible');
                playBarCondition='visible';
            } else {
                songListBtnImg.attr('src', "./img/SVG/playlist.svg");
                songListBtn.removeClass('song-list-open');
                playBar.css('overflow', 'hidden');
                playBarCondition='hidden';
            }
        });

        //JavaScript
/* 
        var playBar = document.getElementById('playBar'),
            songList = document.getElementById('songList'),
            songListBtn = document.getElementsByClassName('song-list-btn')[0];
            songListBtnImg = songListBtn.querySelector('.song-list-btn img');
    
            // console.log(playBar);
            // console.log(songList);
            // console.log(songListBtn);
            // console.log(songListBtnImg);
 
        playBar.addEventListener('click', function(){
            // songList.style.display = 'fixed';
            songListBtnImg.src = "./img/SVG/playlist_down.svg";
            songListBtn.classList.add("song-list-open");
            playBar.style.overflow = "visible"
        })
 */        
    }
    songListControl();



    //MAIN SLIDER
    function mainSliCon(){
        const slideContainer = $('.slider-container');
        
        slideContainer.each(function(){
            //ul 높이, li left 이동
            let slide = $(this).find('li'),
                slideHeight=slide.height(),
                slideWidth=slide.outerWidth(true);
            let target= $(this)
            // console.log(target);

            console.log(slideHeight);
            // console.log(slideWidth);
    
            $(this).height(slideHeight);
            slide.each(function(){
                let slideNum = $(this).index();
                // console.log(slideNum);
                $(this).css('left', slideWidth*slideNum);
            });
    
            //버튼
            let albumBox = $(this).parent(),
                prevBtn=albumBox.siblings('.arrow-left'),
                nextBtn=albumBox.siblings('.arrow-right'),
                slideCount = slide.size(),
                countCal=Math.ceil((slideCount/3)-1);
            // console.log(slideCount);
            // console.log(albumBox);
            // console.log(countCal);
            let currentIndex=0;
            
            function rightBtn(){
                if(currentIndex==countCal){
                    // nextBtn.css('background', 'url(./img/SVG/allbumBtnR.svg)');     //뭔가 한 번 더 눌러야 함...
                    return;
                } else {
                    currentIndex++
                    target.stop().animate({left: -slideWidth*3*currentIndex}, 500);
                    prevBtn.css('background', 'url(./img/SVG/allbumBtnL_on.svg)');
                    // console.log(target);
                }
            }
            function leftBtn(){
                if(currentIndex==0){
                    // prevBtn.css('background', 'url(./img/SVG/allbumBtnL.svg)');
                    return;
                } else {
                    currentIndex--
                    target.stop().animate({left: -slideWidth*3*currentIndex}, 500);
                    nextBtn.css('background', 'url(./img/SVG/allbumBtnR_on.svg)');
                }
            }
            
            nextBtn.click(function(){
                rightBtn();
            });
            prevBtn.click(function(){
                leftBtn();
            });
        });
    };
    mainSliCon();



});

/* var slideBanner=$('#albumSubject div ul'),
    slideList=$('#albumSubject div ul li'),
    slideWidth=$('#albumSubject .magagine').width(),
    
    setintervalId;
    

bannerSlide();
function bannerSlide(){
    setintervalId = setInterval(function(){
        slideBanner.stop().animate({left: -(slideWidth+85)}, 500)
    }, 2000);
}

function rightBtn(){
    slideBanner.stop().animate({left: -(slideWidth+85)}, 500);
}
function leftBtn(){
    slideBanner.stop().animate({left: -(slideWidth+85)}, 500);
}

$('.arrow-right').click(function(){
    rightBtn();
});
$('.arrow-left').click(function(){
    leftBtn();
}); */