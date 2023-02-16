function searchBanner(startVal,endVal){
    $.ajax({
        type:"GET",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data:"startVal="+encodeURIComponent(startVal)+"&endVal="+encodeURIComponent(endVal),
        dataType:"html",
        async:false,
        url: "/web/main/bannerSearch.do",
        success:function(data){
            $('.banner .layer .listbox').empty().append(data);
        }, error: function(){
        }
    });
};

'use strict';

try {
	//제이쿼리가 있으면
	this.jQuery = this.jQuery || undefined;

	//제이쿼리가 있으면
	if(jQuery) {
		//$ 중복방지
		(function($) {
			//태그객체
			var $window = $(window);
			$(function() {

				//비주얼탭 슬라이드
				var $tab_slide = $('.visual_tab .visual_content');
				$tab_slide.each(function(){
					var $this = $(this),
						$slide = $this.find('.slide_list'),
						$slidePrev = $this.find('.prev'),
						$slideNext = $this.find('.next'),
						$slideAuto = $this.find('.auto'),
						$slideTotal = $this.find('.total'),
						$slideCurrent = $this.find('.current');


					$slide.slick({
						autoplay : true,
						dots:false,
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						prevArrow : $slidePrev,
						nextArrow : $slideNext,
						swipe:false,
						draggable:false,

						//추가 기능
						autoArrow : $slideAuto,
						isRunOnLowIE : false,
						pauseOnArrowClick : true,
						pauseOnDirectionKeyPush : true,
						pauseOnSwipe : true,
						pauseOnDotsClick : true,
						pauseText : '정지',
						playText : '재생',
						total : $slideTotal,
						current : $slideCurrent,
						customState : function(state) {
							if(state.current < 10) {
								state.current = '0' + state.current;
							}
							if(state.total < 10) {
								state.total = '0' + state.total;
							}
							return state;
						},
						responsive: [
							{
								breakpoint: 1201,
								settings: {
									swipe:true,
									draggable:true,
									swipeToSlide: true
								}
							}
						]
					});

				});

				// 비주얼 탭
				var $visualTab = $('.visual_tab'),
					$visualButton = $visualTab.find('.tab_button'),
					$visualContent = $visualTab.find('.visual_content');

				$visualButton.click(function () {
					var $this = $(this),
						thisTitle = $this.find('span').text(),
						index = $visualButton.index(this);
					$visualButton.removeAttr('title').parent().removeClass("active");
					$this.parent().addClass("active").find('.tab_button').attr('title',thisTitle +' 열림');
					$visualContent.addClass("active").find('.tab_button').attr('title','열림');
					$visualContent.eq(index).addClass('active').siblings('.visual_content').removeClass('active').removeAttr('title');

				});
				$('.visual_tab .tab_button').on('click', function(){
					var $this = $(this),
						$MyParent = $this.parent('.tab_item'),
						ParentIndex = $MyParent.index(),
						$MyCon = $('.visual_tab').find('.visual_content').eq(ParentIndex),
						$Myslide = $MyCon.find('.slide_list');
					$Myslide.slick('setPosition');
				});

				//비주얼 전체보기
				$('.visual .visual_tab .more').on('click', function(){
					var $this = $(this),
						$MyParent = $this.parents('.visual_content'),
						ParentIndex = $MyParent.index() - 2,
						$Layerbox = $('.visual .layerbox'),
						$MyLayer = $Layerbox.find('.layer').eq(ParentIndex),
						$layerlist = $MyLayer.find('.layerlist');


					var layerApdHTML = '<ul class="clearfix">';
					$MyParent.find('.slide_item:not(.slick-cloned)').each(function(){
						layerApdHTML += '<li>' + $(this).html().replace(/tabindex="-1"/ig, '') + '</li>';
					});
					layerApdHTML += '</ul>';
					$layerlist.empty().append(layerApdHTML);
					$Layerbox.fadeIn(200);
					$MyLayer.addClass('active');
					$layerlist.focus();
					$('#container').addClass('visualallacitve');
				});
				$('.visual .layerbox .close').on('click', function(){
					var $this = $(this),
						$Layerbox = $('.visual .layerbox'),
						$Layer = $Layerbox.find('.layer'),
						ActiveIndex = $Layerbox.find('.layer.active').index(),
						$ListBox = $('.visual .listbox'),
						$viewall = $ListBox.find('.visual_content').eq(ActiveIndex).find('.more');
					$viewall.focus();
					$Layerbox.fadeOut(200, function(){
						$Layer.removeClass('active');
					});
					$('#container').removeClass('visualallacitve');
				});



				//시정소식탭 슬라이드
				var $boardSlide = $('.board_tab .tab_content');
				$boardSlide.each(function(){
					var $this = $(this),
						$slide = $this.find('.board_list'),
						$slidePrev = $this.find('.prev'),
						$slideNext = $this.find('.next');
					$slide.slick({
						autoplay : false,
						dots:false,
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
						prevArrow : $slidePrev,
						nextArrow : $slideNext,
						swipe:false,
						draggable:false,
						variableWidth:true,
						responsive: [
							{
								breakpoint: 1501,
								settings: {
									slidesToShow: 2,
								}
							},{
								breakpoint: 1201,
								settings: {
									slidesToShow: 3,
									swipe:true,
									draggable:true,
									swipeToSlide: true
								}
							},{
								breakpoint: 801,
								settings: {
									slidesToShow: 2,
									swipe:true,
									draggable:true,
									swipeToSlide: true
								}
							}
						]
					});

				});

				// 시정소식 탭
				var $boardTab = $('.board_tab'),
					$boardButton = $boardTab.find('.tab_button:not(a)'),
					$boardContent = $boardTab.find('.tab_content');

				$boardButton.click(function () {
					var $this = $(this),
						thisTitle = $this.find('span').text(),
						index = $boardButton.index(this);
					$boardButton.parent().removeClass("active").children('.tab_button').removeAttr('title');
					$this.parent().addClass("active").children('.tab_button').attr('title',thisTitle +' 열림');
					$boardContent.addClass("active").children('.tab_button').attr('title','열림');
					$boardContent.eq(index).addClass('active').siblings('.tab_content').removeClass('active').removeAttr('title');

				});
				$('.board_tab .tab_button:not(a)').on('click', function(){
					var $this = $(this),
						$MyParent = $this.parent('.tab_item'),
						ParentIndex = $MyParent.index(),
						$MyCon = $('.board_tab').find('.tab_content').eq(ParentIndex),
						$Myslide = $MyCon.find('.board_list');
					$Myslide.slick('setPosition');
				});


				$window.on('screen:wide screen:web', function(event) {

				});

				$window.on('screen:tablet screen:phone', function(event) {

				});


				//즐겨찾기 슬라이드
				var $quick = $('.quick'),
				    $quickSlide = $('.quick .slide_list'),
					$quickItem = $quickSlide.find('.slide_item'),
					quickItemLength = $quickItem.length,
					$quickSlideControl = $quick.find('.slide_control'),
					$quickControlBox = $quick.find('.toolbox'),
					$quickThumbnailBox = $quickControlBox.find('.thumbnailbox');

				// 갯수
				var quickSlideLength = $quickItem.length;
				var quickSlideCount = null;
				$quickSlide.on('init', function(event, slick){
					quickSlideCount = slick.slideCount;
					setquickSlideCount();
					setquickSlideCurrentSlideNumber(slick.currentSlide);
				});
				$quickSlide.on('beforeChange', function(event, slick, currentSlide, nextSlide){
					setquickSlideCurrentSlideNumber(nextSlide);
				});
				function setquickSlideCount() {
					var $StateBar = $quickControlBox.find('.statebar'),
						ThumbnailWidth = (100 / quickItemLength);
					$StateBar.attr('data-total', quickItemLength);
					$quickControlBox.find('.thumbnailbox').find('li').css('width', ThumbnailWidth+'%');
				}
				function setquickSlideCurrentSlideNumber(currentSlide) {
					var $StateBar = $quickControlBox.find('.statebar'),
						StateBarWidth = 0,
						current = currentSlide + 1;
					StateBarWidth = (100 / quickSlideCount) * current;
					$StateBar.attr('data-current', currentSlide + 1).css('width', StateBarWidth+'%');
				}
				$quickSlide.slick({
					autoplay : false,
					slidesToShow: 9,
					slidesToScroll: 1,
					prevArrow : $quickSlideControl.find('.prev'),
					nextArrow : $quickSlideControl.find('.next'),
					pauseOnDotsHover : true,
					swipe:false,
					draggable:false,
					dots : true,
					appendDots: $quickThumbnailBox,
					dotsClass:'slick-dots clearfix',
					customPaging : function(slider, i) {
						return '<button type="button"><span>'+(i + 1)+'번 슬라이드 보기</span></button>';
					},
					//추가 기능
					infinite: true,
					variableWidth: false,
					isRunOnLowIE : false,
					responsive: [
						{
							breakpoint: 1501,
							settings: {
								slidesToShow : 8,
							}
						},
						{
							breakpoint: 1201,
							settings: {
								swipe : true,
								draggable : true,
								swipeToSlide: true
							}
						},{
							breakpoint: 1001,
							settings: {
								swipe : true,
								draggable : true,
								swipeToSlide: true
							}
						},{
							breakpoint: 801,
							settings: {
								swipe : true,
								draggable : true,
								swipeToSlide: true,
								slidesToShow : 6,
							}
						},{
							breakpoint: 641,
							settings: {
								swipe : true,
								draggable : true,
								swipeToSlide: true,
								slidesToShow : 5,
							}
						},
					]
				});

				//분야별 생활정보
				var $infoTab = $('.info_tab'),
					$infoButton = $infoTab.find('.info_button'),
					$infoContent = $infoTab.find('.info_item');

				$infoButton.on('click', function(){
					var $this = $(this),
						$share = $this.parent('.info_item'),
						$layer = $this.siblings('.link_box'),
						OnOff = $share.is('.active'),
						NowState = $.screen.settings.state[0];
					if(!OnOff){
						if(NowState=='wide' || NowState=='web'){
							$layer.animate({
								width: "show"
							}, 250);
						}
						$infoContent.removeClass('active');
						$share.addClass('active');
					}
				});


				//행사축제 슬라이드
				var $festival = $('.festival'),
					$festivalSlide = $('.info_slide .slide_list'),
					$SlideItem = $festivalSlide.find('.slide_item'),
					ItemLength = $SlideItem.length,
					$SlideControl = $festival.find('.slide_control'),
					$ControlBox = $festival.find('.toolbox'),
					$SlideThumbnailBox = $ControlBox.find('.thumbnailbox');

				// 갯수

				var boardSlideLength = $SlideItem.length;
				var boardSlideCount = null;
				$festivalSlide.on('init', function(event, slick){
					boardSlideCount = slick.slideCount;
					setboardSlideCount();
					setboardSlideCurrentSlideNumber(slick.currentSlide);
				});
				$festivalSlide.on('beforeChange', function(event, slick, currentSlide, nextSlide){
					setboardSlideCurrentSlideNumber(nextSlide);
				});
				function setboardSlideCount() {
					var $StateBar = $ControlBox.find('.statebar'),
						ThumbnailWidth = (100 / ItemLength);
					$StateBar.attr('data-total', ItemLength);
					$ControlBox.find('.thumbnailbox').find('li').css('width', ThumbnailWidth+'%');
				}
				function setboardSlideCurrentSlideNumber(currentSlide) {
					var $StateBar = $ControlBox.find('.statebar'),
						StateBarWidth = 0,
						current = currentSlide + 1;
					StateBarWidth = (100 / boardSlideCount) * current;
					$StateBar.attr('data-current', currentSlide + 1).css('width', StateBarWidth+'%');
				}
				$festivalSlide.slick({
					autoplay : false,
					slidesToShow: 3,
					slidesToScroll: 1,
					prevArrow : $SlideControl.find('.prev'),
					nextArrow : $SlideControl.find('.next'),
					pauseOnDotsHover : true,
					swipe:false,
					draggable:false,
					dots : true,
					appendDots: $SlideThumbnailBox,
					dotsClass:'slick-dots clearfix',
					customPaging : function(slider, i) {
						return '<button type="button"><span>'+(i + 1)+'번 슬라이드 보기</span></button>';
					},


					//추가 기능
					infinite: true,
					variableWidth: true,
					isRunOnLowIE : false,
					responsive: [
						{
							breakpoint: 1201,
							settings: {
								slidesToShow: 2,
							}
						},
						{
							breakpoint: 801,
							settings: {
								swipe:true,
								draggable:true,
								swipeToSlide: true,
							}
						},
						{
							breakpoint: 431,
							settings: {
								swipe:true,
								draggable:true,
								swipeToSlide: true,
								slidesToShow: 1,
							}
						}]
				});

				var $festivalMore = $festival.find('.more');
				$window.on('load resize',function (){
					if($window.width() < 801){
						$festivalMore.find('span').text('더보기')
					}else{
						$festivalMore.find('span').text('행사축제 포털')
					}
					
				});

			});
		})(jQuery);
	}
}catch(e) {
	console.error(e);
}