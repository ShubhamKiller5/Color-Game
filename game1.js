var colors = randomColors(6);
var circles = $(".circle");
var totalCircle = 6;
var goalColor = decide();
$(".rgb").text(goalColor);

//when the browser opens
for(var i =0;i<circles.length;i++){
    $(circles[i]).css("background-color",colors[i]);
    $(circles[i]).on("click",function(){
        if($(this).css("background-color")===goalColor){
            changeColors(goalColor);
            $(".colors").text("play again");
            $("h1").css("background-color",goalColor);
            $(".spacing").text("CORRECT");
        }
        else{
            $(this).css("background-color","#232323");
            $(".spacing").text("try again");
        }
    });
}

//when tapped new colors
$(".colors").on("click",function(){
    colors = randomColors(totalCircle);
    for(var i=0;i<circles.length;i++)
    {
        $(circles[i]).css("background-color",colors[i]);
    }
    goalColor = decide();
    $(".rgb").text(goalColor);
    $(".spacing").text("");
    $(this).text("new colors");
    $("h1").css("background-color","steelblue");
});

//mode changing
var mode = $(".mode");
for(var i=0;i<mode.length;i++){
    $(mode[i]).on("click",function(){
       $(mode).removeClass("selected");
       $(this).addClass("selected"); 
       if($(this).text()==="Easy")
            totalCircle=3;
        else
            totalCircle=6;

       reset(totalCircle);
    });
}

//resetting as per mode
function reset(total)
{
    colors = randomColors(total);
    for(var i=0;i<circles.length;i++)
    {
        if(colors[i])
        {
            $(circles[i]).css("display","block");
            $(circles[i]).css("background-color",colors[i]);
        }
        else
            $(circles[i]).css("display","none");
    }
    goalColor = decide();
    $(".rgb").text(goalColor);
}

// to generate array of random colors
function randomColors(number)
{
    var a = [];
    for(var i=0;i<number;i++)
        a[i] = singleColor();

    return a;
}

// to generate single color
function singleColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

//to decide a goalColor
function decide(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

//to change the color of circle when correct hit
function changeColors(clr)
{
    for(var i=0;i<circles.length;i++)
        $(circles[i]).css("background-color",clr);
}