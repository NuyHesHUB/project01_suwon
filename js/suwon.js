//첫 슬라이드
$(function(){
    const slide=$('.slideList li');
    const prevbtn=$('.btnSlidePrev');
    const nextbtn=$('.btnSlideNext');
    const pausebtn=$('.btnSlidePP');
    let current=0;
    let setIntervalId=undefined;
    timer();
    function timer(){
        setIntervalId=setInterval(function(){
            let prev=slide.eq(current);
            move(prev, 0, '-100%');
            current++;
            if(current==10){current=0}
            let next=slide.eq(current);
            move(next, '100%', 0)
        },3000);
        
    }
    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end});
    }
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

//map API
/* var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.263646, 127.028715), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    }; */

/* var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var markerPosition  = new kakao.maps.LatLng(37.263646, 127.028715); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);    */ 


