$(document).ready(function(){

    $("#header").hover(function(){
        $(".main-nav a").addClass("active");
    },function(){
        $(".main-nav a").removeClass("active");
    })
    $(".logo").click(function(){
        location.href='/home';
    })
    
})