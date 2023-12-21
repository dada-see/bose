// * 문서 전체 스크롤 이벤트
$(window).scroll(function () {
    let sct = $(window).scrollTop();

    // * 본문3
    let m3 = $('.m2_list').offset().top;
    if(sct >= m3){
        $('.m3_main_video').stop().fadeIn();
    } else{
        $('.m3_main_video').stop().fadeOut();
    }

    let m301 = $('.main3').offset().top + 200;
    if(sct >= m301){
        $('.m3_01').addClass('on');
    } else{
        $('.m3_01').removeClass('on');
    }

    let m302 = $('.m3_01').offset().top +200;
    if(sct >= m302){
        $('.m3_02').addClass('on');
    } else{
        $('.m3_02').removeClass('on');
    }
}); // * 문서 전체 스크롤 이벤트 끝

// * main2 슬라이드
$(".m2_list").slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed : 400
});

$('.m2_list').slick('slickFilter','.bose_buds');

$('.m2_icon p').click(function(){
    let i = $(this).index();
    $('.m2_icon p').removeClass('active');
    $(this).addClass('active');

    $(".m2_list").slick('slickUnfilter');
    
    if(i == 0){
        $('.m2_list').slick('slickFilter','.bose_buds');
    } else if(i == 1){
        $('.m2_list').slick('slickFilter','.bose_head');
    } else if(i == 2){
        $('.m2_list').slick('slickFilter','.bose_sound');
    } else if(i == 3){
        $('.m2_list').slick('slickFilter','.bose_speaker');
    } 
});
// * main2 슬라이드 끝

// * main4 슬라이드
$(".m4_speaker_list").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000
});
