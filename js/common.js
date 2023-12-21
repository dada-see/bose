// * 문서 전체 스크롤 이벤트
$(window).scroll(function () {
    let sct = $(window).scrollTop();

    // * 탑버튼
    if (sct > 500) {
        $(".goTop").stop().fadeIn();
    } else {
        $(".goTop").stop().fadeOut();
    }

    // * 다운버튼
    if($(document).scrollTop() > $(document).height()-1200){
        $(".goDown").stop().fadeOut();
    } else {
        $(".goDown").stop().fadeIn();
    }

}); // * 문서 전체 스크롤 이벤트 끝

// * 페이지 탑 버튼 
$(".goTop").click(function(){
    $('html, body').animate({
        scrollTop : 0
    }, 400);
});

// * 페이지 다운 버튼
$(".goDown").click(function(){
    $('html, body').animate({
        scrollTop : $(document).height()
    }, 400);
});

// 검색창 - 문서 클릭
$(document).click(function(e){
    var target = $(e.target);
    if(!target.closest('.h_icon > form').length){
        $('.hs_txt').removeClass('active');
        $('.open').show();
        $('.submit').hide();
        $('.keyword_collection').hide();
    }
});

// 검색창 - 사이드창
$('.h_icon form').click(function(){
    $(this).find('.hs_txt').addClass('active').focus();
    $(this).find('.open').hide();
    $(this).find('.submit').show();
    $(this).find('.hs_txt').click(function(){
        $(this).find('.hs_txt').addClass('active');
        $('.keyword_collection').show();
        $('.keyword_collection .close button').click(function(e){
            e.preventDefault();
            $('.keyword_collection').hide();
        });
    });
});

// 검색창 - 글자 넣기
$('.keyword_collection > div > p').click(function(){
    let txt = $(this).text();
    $('.hs_txt').val(txt);
    $('.keyword_collection').hide();
 });


// * 푸터 - 언어변경
$('.btn_lang').click(function(){
    $(this).toggleClass('active');
    $('.h_lang_list').stop().slideToggle();
});
