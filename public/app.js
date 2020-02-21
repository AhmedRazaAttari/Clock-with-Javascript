// $('#home').click(function(){
//     $('.screen').toggleClass("active");
// })

$("#home").click(function(){
    $(".screen").toggleClass("active");
    $(".homeIcons").toggleClass("show");
})

function digitalDate(){
    var date = new Date(new Date().getTime()).toLocaleTimeString();
    document.getElementById('widgets').innerHTML = date;
}

function rotate(){
    var hourhand = document.getElementById("hourhand")
    var minutehand = document.getElementById("minhand");
    var sechand = document.getElementById("sechand");

    var date = new Date();
    var hour = date.getHours() % 12;
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var hoursDeg = hour * 30;
    var minuteDeg = minute * 12;
    var secDeg = second * 6;

    hourhand.style.transform = 'rotate(' + hoursDeg + 'deg)';
    minutehand.style.transform = 'rotate(' + minuteDeg + 'deg)';
    sechand.style.transform = 'rotate(' + secDeg + 'deg)';

    setTimeout(rotate, 1000);
}
rotate();

setInterval(digitalDate, 1000);