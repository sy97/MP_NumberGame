//랜덤번호 생성
let computerNum = 0;
//유저입력값
let userInput = document.getElementById("input-area");
//플레이버튼
let playbutton = document.getElementById("play-button");
//리셋버튼
let resetbutton = document.getElementById("reset-button");
//결과
let result = document.getElementById("result-area");
//찬스
let chanceArea = document.getElementById("chance-area");
let chances = 5;
let gameOver = false;

//유저의 입력값 저장
let userValueList = [];

//클릭했을 때 
playbutton.addEventListener("click",play);

//리셋클릭했을 때
resetbutton.addEventListener("click",reset);

//인풋창에 포커스 놨을 때 숫자 초기화
userInput.addEventListener("focus",focusreset);

//랜덤번호함수
function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100) + 1;
    
}

//플레이버튼함수
function play() {
    let userValue = userInput.value;
    if(userValue<1 || userValue>100) {
        result.textContent = "Please enter a number between 1 and 100.";
        return;
    }
    if(userValueList.includes(userValue)){
        result.textContent = "You already enter that number. please enter another one.";
        return;
    }
    
    chances --;
    chanceArea.textContent = `Chances: ${chances}`
    
    if(userValue < computerNum) {
        result.textContent = "UP!!";
    }
    else if(userValue > computerNum) {
        result.textContent = "DOWN!!";
    }
    else if(userValue == computerNum) {
        result.textContent = "CORRECT!! PERFECT!!"
        playbutton.disabled = true;
    }

    if(chances < 1) {
        gameOver = true;
    }

    if(gameOver) {
        playbutton.disabled = true;
    }

    userValueList.push(userValue);
    console.log(userValueList);
}

//리셋버튼함수
function reset() {
    userInput.value = "";
    pickRandomNum();
    gameOver = false;
    chances = 5;
    chanceArea.textContent = `Chances: ${chances}`
    result.textContent = "LET'S PLAY!";
    playbutton.disabled = false;
}

//인풋 포커스 함수
function focusreset() {
    userInput.value = "";
}

pickRandomNum();
console.log(`정답:${computerNum}`);



