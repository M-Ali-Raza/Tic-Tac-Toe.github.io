let ding=new Audio("ding.mp3");
let gameover=new Audio("gameOver.wav");
let turn="X";
let isgameover=false;
//Function to change the turn
const changeTurn=()=>{
    return turn==="X"?"O":"X";
}
//Function to check win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxText');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[2]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[0]].innerHTML !== "")){
            document.querySelector(".info").innerHTML=boxtext[e[0]].innerHTML+" Won";
            isgameover=true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.display="block";
            gameover.play();
        }
    })
}
//Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if (boxtext.innerText === '') {
            boxtext.innerText=turn;
            turn=changeTurn();
            ding.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }
        }
    })
})
//Add onclick event listener on reset button
let reset=document.getElementById("reset");
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxText');
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    });
    turn="X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.display="none";
})