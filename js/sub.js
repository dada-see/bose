// sub.js

// * header gnb 클릭 이벤트
$('.gnb p').click(function(e){
    e.preventDefault();
    let i = $(this).index();
    $('.gnb p').removeClass('active');
    $(this).addClass('active');

    $('.prod_gnb_in li').removeClass('active');
    $('.prod_gnb_in li').eq(i).addClass('active');
    
    gnbSelect(i);
}); 

// * main gnb 클릭이벤트
$('.prod_gnb_in li').click(function(e){
    e.preventDefault();
    let i = $(this).index();
    $('.prod_gnb_in li').removeClass('active');
    $(this).addClass('active');

    $('.gnb p').removeClass('active');
    $('.gnb p').eq(i).addClass('active');
    
    gnbSelect(i);
}); 


gnbSelect();
function gnbSelect(i){

    if(i == 0){
        $('.prod_li li').removeClass('active');
        $('.bose_buds').addClass('active');
    } else if(i == 1){
        $('.prod_li li').removeClass('active');
        $('.bose_head').addClass('active');
    } else if(i == 2){
        $('.prod_li li').removeClass('active');
        $('.bose_sound').addClass('active');
    } else if(i == 3){
        $('.prod_li li').removeClass('active');
        $('.bose_speaker').addClass('active');
    } else if(i == 4){
        $('.prod_li li').removeClass('active');
        $('.bose_refurb').addClass('active');
    } else if(i == 5){
        $('.prod_li li').removeClass('active');
        $('.bose_acc').addClass('active');
    };
}