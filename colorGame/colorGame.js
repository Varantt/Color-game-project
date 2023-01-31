var numOfSquares=6;
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector(".colorDisplay")
var msg=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetBtn=document.getElementById("reset");
var modeButtons=document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(var i=0;i<modeButtons.length;i++){
            modeButtons[i].addEventListener("click",function(){
                modeButtons[0].classList.remove("selected");
                modeButtons[1].classList.remove("selected");
                this.classList.add("selected");
                this.textContent === "Easy" ?numOfSquares =3 : numOfSquares=6;
                reset();
            });
        }
}

function setupSquares(){
    for(var i=0;i<squares.length;i++){
        squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor === pickedColor){
            msg.textContent="Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
            resetBtn.textContent="Play Again?";
    }
        else{
            this.style.backgroundColor="#232323";
            msg.textContent="Try Again!";
        }
        
    });
    };
}



function reset(){
    colors=randomizeColors(numOfSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    msg.textContent="";
    resetBtn.textContent="New Colors";
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
        squares[i].style.display="block";
        squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor="steelblue";

}

// easyBtn.addEventListener("click",function(){
//     hardBtn.classList.remove("selected");
//     this.classList.add("selected");
//     numSquares=3;
//     colors=randomizeColors(numSquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent=pickedColor;
//     for(var i=0;i<squares.length;i++){
//         if(colors[i]){
//             squares[i].style.background=colors[i];
//         }else{
//             squares[i].style.display="none";
//         }
//     }
// });

// hardBtn.addEventListener("click",function(){
//     this.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares=6;
//     colors=randomizeColors(numSquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent=pickedColor;
//     for(var i=0;i<squares.length;i++){
        
//             squares[i].style.background=colors[i];
//             squares[i].style.display="block";
//     }
// });

resetBtn.addEventListener("click",function(){
    reset();



});



    function changeColors(color){
        for(var i=0;i<squares.length;i++){
            squares[i].style.backgroundColor=color;
        }
    }

    function pickColor(){
        var random=Math.floor(Math.random()*colors.length);
        return colors[random];
    }

    function randomColor(){
        var rand1=Math.floor(Math.random()*256);
        var rand2=Math.floor(Math.random()*256);
        var rand3=Math.floor(Math.random()*256);
        return "rgb("+rand1+", "+rand2+", "+rand3+")";
    }

    function randomizeColors(num){
        var array=[];
        for(var i=0;i<num;i++)
        array.unshift(randomColor());
        return array;
    }
