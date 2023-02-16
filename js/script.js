let slide=$('.slideUl>li');
let leftBtn=$('.arrowBtn > .fa-chevron-left')
let rightBtn=$('.arrowBtn > .fa-chevron-right')
/* let pagerBtn=$('.') */
let current=0;

auto();
function auto(){
    btnSlideInterval=setInterval(function(){
        let prev=slide.eq(current);
        /* let prevBtn=pagerBtn.eq(current); */
        move(prev, 0, '-100%');
        /* prevBtn.removeClass('on') */
        current++;
        if(current==slide.size()){
            current=0;
        }
        let next=slide.eq(current);
        /* let nextBtn=pagerBtn.eq(current); */
        move(next, '100%', 0);
        /* nextBtn.addClass('on') */

        let bar=$('.barlist').find('li')
        
    },10000 );

    function move(a, b, c){
        a.css('left',b).stop().animate({left:c},500);
    }
    /* $('.slideUl > li').hover(function(){
        clearInterval(btnSlideInterval);
    },function(){
        auto();
    }); */
    //next btn */
    rightBtn.click(function(){
        let prev=slide.eq(current);
        move(prev, 0, '-100%');
        current++;
        if(current==slide.size()){
            current=0;
        }
        let next=slide.eq(current);
        move(next, '100%', 0);
    });
    leftBtn.click(function(){
        let prev=slide.eq(current);
        move(prev, 0, '100%');
        current--;
        if(current==-slide.size()){
            current=0;
        }
        let next=slide.eq(current);
        move(next, '-100%', 0);
    });
};