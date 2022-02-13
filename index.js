$(document).ready(function(){
    $(".card").mouseover(function(){
        $(".card-text").css("color","black");
        $(".card-text").css("font-weight","600");
    });
    $(".view").click(function(){
        $(".d-block").css("-webkit-filter","blur(0px)");
    });
    
});
