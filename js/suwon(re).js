
//2depth menu

//let tg=$('.menu_bottom_menu > li');
//$('.menu_bottom_menu > li > .width100 > ul').css('display','none');
//$('.menu_bottom_menu > li > .width100 > ul').css('opacity','0');

//$('.menu_bottom_menu > li > .width100').css('height','0');
$('.menu_bottom_menu > li > .width100').hide();
$('.menu_bottom_menu > li').hover(function(){
    //let posy=$(this).siblings('.width100').innerHeight();
    
    //$(this).find('.width100 > ul').css('display','block');
    $(this).find('.width100').slideDown(250);
    //.css({height: posy});
    
    //console.log(posy)
},function(){
    //$(this).siblings('.width100').slideUp(300);
    //$('.menu_bottom_menu > li > .width100').hide();
    $('.menu_bottom_menu > li > .width100').hide();
    //$(this).find('.width100').slideUp(250);
});
//.animate({top: (posy+100)-posy},1000);
//.animate({top: posy},1000);

//console.log(posy);
/* $('.bottom_menu_text').hover(function(){
    $('.width100 ul').animate({top: posy},3000);
},function(){

}) */

//슬라이드 1
$(function(){
    const slide=$('.slideList > li');
    const prevbtn=$('.prevbtn1');
    const nextbtn=$('.nextbtn1');
    const pausebtn=$('.play1');
    const pagerbtn=$('.countbox > span')
    
    /* const slideindex=$('.slideList li').index(this); */
    let current=0;
    //var count = ("0" + current).slice(-2);
    /* const zero = num => num < 10 && num >= 0 ? "0" + num : num; */
    //let count=current.padStart(2,'0'); 
    let setIntervalId;
    let ppbtn=true;
    
    /* function numberPad(n, width) {
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
    } */
    timer();
    function timer(){
        setIntervalId=setInterval(function(){
            let prev=slide.eq(current);
            let prevbtn=pagerbtn.eq(current);
            move(prev, 0, '-100%');
            prevbtn.removeClass('on')
            current++;
            if(current==10){current=0}
            let next=slide.eq(current);
            let nextbtn=pagerbtn.eq(current);
            move(next, '100%', 0)
            nextbtn.addClass('on');
            /* if(current>10){current.padStart(2,'0')} */
            //console.log(current);
            //console.log((current)+1);
            /* $('.number1').text((current)+1); */
        },3000);
    }
    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end});
    }
    //이미지 호버 멈춤
    $('.slideList li').hover(function(){
        clearInterval(setIntervalId)
    },function(){
        timer();
    });
    
    nextbtn.click(function(){
        let prev=slide.eq(current);
        let prevbtn=pagerbtn.eq(current);
        clearInterval(setIntervalId);
        pausebtn.addClass('add')
        /* $('.number1').text(current+2); */
        move(prev, 0, '-100%');
        prevbtn.removeClass('on')
        current++;
        if(current==10){current=0}
        let next=slide.eq(current);
        let nextbtn=pagerbtn.eq(current);
        move(next, '100%', 0)
        nextbtn.addClass('on')
    });
    prevbtn.click(function(){
        let prev=slide.eq(current);
        let prevbtn=pagerbtn.eq(current);
        clearInterval(setIntervalId);
        pausebtn.addClass('add')
        //카운트
        /* $('.number1').text(current-1); */
        move(prev, 0, '100%');
        prevbtn.removeClass('on')
        current--;
        if(current==-9){current=0}
        let next=slide.eq(current);
        let nextbtn=pagerbtn.eq(current);
        move(next, '-100%', 0);
        nextbtn.addClass('on')
    });
    pausebtn.click(function(){
        if($(this).hasClass("add") == true){
            pausebtn.removeClass('add');
            timer();
        }else{
            clearInterval(setIntervalId);
            $('.play1').addClass('add');
        }
    });
});
//채용정보 밑 배너
const $right=$('#sectionWrap .section_box3 .icon_list_control .nextBtn2');
const $left=$('#sectionWrap .section_box3 .icon_list_control .prevBtn2');
const $moving=$('#sectionWrap .section_box3 .icon_list .icon_list_track>ul');

$right.click(function(){
    $moving.stop().animate({left:153.33*-1},200,function(){
        $(this).children("li:first").insertAfter($(this).children("li:last"));
        $(this).css({left:0})
    });

});

$left.click(function(){
   $moving.children("li:last").insertBefore($moving.children("li:first"));
   $moving.css({left:153.33*-1});
   $moving.stop().animate({left:0},200);
});

//분야별 생활정보 
$('.info_btn').click(function(){
    $('.info_item').not(this).removeClass('active');
    $(this).parent('.info_item').addClass('active');
});


//행사 슬라이드
const slidefestival=$('.slide_list_wrap .slide_list > ul');
const leftBtn1=$('.fs_control > .prevbtn3');
const rightBtn1=$('.fs_control > .nextbtn3');
const slideList1=$('.slide_list_wrap .slide_list > ul > li');
const slide1=$('.slide_list_wrap .slide_list')
const slideWidth1=slideList1.width();
const slideindex1=$('.slide_list_wrap .slide_list > ul > li').index();
let IntervalId;
let current1=0;


$('.fs_control > .nextbtn3').click(function(){
    slidefestival.animate({left:-(slideWidth1+60)},400, function(){
        $('.slide_list_wrap .slide_list > ul > li:first').insertAfter('.slide_list_wrap .slide_list > ul>li:last')
            slidefestival.css({left:0})
            
    });
});
leftBtn1.click(function(){
$('.slide_list_wrap .slide_list > ul > li:last').insertBefore('.slide_list_wrap .slide_list >ul>li:first');
slidefestival.css({left:-(slideWidth1+60)}).animate({left:0},400)
});

//행사 슬라이드 호버
/* const over=$('.slide_list > ul > li')
const move=$('.slide_list > ul > li::before')

over.hover(function(){
    $(this).css({right:'10'+'px'})
},function(){

}); */

//배너 슬라이드

//bannerSlide
const slideBanner=$('.banner_track>ul');
const leftBtn=$('.banner_prev');
const ppBtn=$('.banner_wrap .control_box .banner_control .banner_play')
const rightBtn=$('.banner_next');
const slideList=$('.banner_track>ul>li');
const slide=$('.banner_track> .bannerslideList')
const slideWidth=slideList.width();
let setIntervalId;
let current=0;
let ppbtn=true;

bannerslider();
function bannerslider(){
    setIntervalId=setInterval(function(){
        slideBanner.stop().animate({left:-(slideWidth+15)},500, function(){
            $('.banner_track > ul > li:first').insertAfter('.banner_track>ul>li:last')
            slideBanner.css({left:0})
            //count
            $('.current').text('0'+(current+1));
        })
    },2000);
}

leftBtn.hover(function(){
    clearInterval(setIntervalId)
    },function(){
    bannerslider();
    });
ppBtn.hover(function(){
clearInterval(setIntervalId)
},function(){
bannerslider();
});
rightBtn.hover(function(){
    clearInterval(setIntervalId)
    },function(){
    bannerslider();
    });
slideBanner.hover(function(){
    clearInterval(setIntervalId)
    },function(){
    bannerslider();
    }); 
$('.next').click(function(){
        slideBanner.stop().animate({left:-(slideWidth+20)},500, function(){
            $('.banner_track > ul > li:first').insertAfter('.banner_track>ul>li:last')
            slideBanner.css({left:0})
        });
    });
leftBtn.click(function(){
    $('.banner_track > ul > li:last').insertBefore('.banner_track>ul>li:first');
    slideBanner.css({left:-(slideWidth+20)}).stop().animate({left:0},500)
});

$('.banner_control .banner_play').click(function(){
    if(ppbtn==true){
        $(this).addClass('add');
        clearInterval(setIntervalId);
        ppbtn=false;
    }else{
        $(ppBtn).removeClass('add');
        bannerslider();
        ppbtn=true;
    }
});

//map API
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.263646, 127.028715), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    }; 

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var markerPosition  = new kakao.maps.LatLng(37.263646, 127.028715); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);


//푸터 메뉴

//$('.footer_menu_list > .layer').hide();
/* $('.footer_menu_list > .layer').css({display:'block'}); */
/* $('.footer_top > ul > li > .layer').hide();
$('.footer_top > ul > li').hover(function(e){
    e.preventDefault(); */
    //let posy=$(this).siblings('.width100').innerHeight();
    
    //$(this).find('.width100 > ul').css('display','block');
/*     $(this).find('.layer').slideDown(250); */
    //.css({height: posy});
    
    //console.log(posy)
/* },function(){ */
    //$(this).siblings('.width100').slideUp(300);
    //$('.menu_bottom_menu > li > .width100').hide();
/*     $('.footer_top > ul > li > .layer').hide();
}); */

/* let open=$('.footer_top > ul > li > .layer')
let hov=$('.footer_top > ul > li')
$('.footer_top > ul > li > .layer').hide();
$(function () {
    hov.on("click", function(e) {
        e.preventDefault();
        $(this).find('.layer').slideUp(250);
    })
    hov.on("click", function(e) {
        e.preventDefault();
        $(this).find('.layer').slideDown(250);
    })
}) */


/* $(".footer_top > ul > li").click(function(){
    // 현재 클릭한 태그가 a 이기 때문에
    // a 옆의 태그중 ul 태그에 hide 클래스 태그를 넣던지 빼던지 한다.
    $(this).find(".layer").toggleClass('hide');
}); */

$(".footer_top > ul > li").click(function(){
    var submenu = $(this).find(".layer");
    //var other=$(".footer_top > ul > li").find(".layer")
    $('.footer_top > ul > li').not(this).removeClass('active');
    $(this).addClass('active');

    // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
    if( submenu.is(":visible") ){
        
        submenu.slideUp();
        
    }else{
        submenu.slideDown();
    }
});/* .mouseover(function(){
    $(this).find(".layer").slideDown();
}); */


// menu class 중에 두번째 있는 menu 의 하위에 있는 a태그에 클릭 이벤트를 발생시킨다.
//$(".menu:eq(1)>a").click();
