$(document).ready(function() {
    //get the content
    var content = $('.col-8').html();
    //find the length of the content
    var contentLength = content.length;
    var char = 0;
    $('.col-8').html('<span class="typing-cursor">|</span>');
    //Here is the function
    (function typeFunc() {
        //dynamic delay to get the typewriting feel
        var typingSpeed = Math.round(Math.random() * 120) + 60 / 10;
        setTimeout(function() {
            char++;
            var type = content.substring(0, char);
            $('.col-8').html(type + '<span class="typing-cursor">|</span>');
            //recursive
            typeFunc();
        }, typingSpeed);
    }());
});