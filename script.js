const selectCharacter = document.querySelectorAll(".imgbox img");
const startGame = document.querySelector("#btn");
const timeDiv = document.querySelector("#left span");
const scoreDiv = document.querySelector("#right span");
const selectionScreen = document.querySelector("#top");
const playingScreen = document.querySelector("#second-page");
const scoreScreen = document.querySelector("#third-page");
const blankBoxImg = document.querySelector("#blank-box-img");
const finalScoreDiv = document.querySelector("#third-page h3 span")


let selectedAnime = "";
let timer = 60;
let score = 0;

selectCharacter.forEach((char) => {
    char.addEventListener("click", (e) => {
        console.log(e)
        const imgboxes = document.querySelectorAll(".imgbox");
        imgboxes.forEach((box) => {
            box.classList.remove("selectCharacterImg");
        });

        e.target.parentElement.classList.add("selectCharacterImg");

        const charName = e.target.parentElement.nextElementSibling.innerHTML;
        document.querySelector("#selectedSuperhero span").innerHTML = charName;
        selectedAnime = e.target.src;
    });
});

startGame.addEventListener("click", () => {
    selectionScreen.style.display = "none"
    playingScreen.style.display = "flex"



    const interval = setInterval(() => {
        if (timer === 1) {
            clearInterval(interval);
            playingScreen.style.display = "none";
            scoreScreen.style.display = "flex";
            calculateScore();
        }
        timeDiv.innerHTML = --timer;
    }, 1000);

    setInterval(() => {
        const img = document.createElement("img");
        img.src = selectedAnime;
        img.classList.add("smallImg");


        img.addEventListener("click", removeImage);


        randomPosition(img);
        blankBoxImg.append(img);
    }, 450);
}

);


function randomPosition(elem) {
    const y = blankBoxImg.clientHeight;
    const x = blankBoxImg.clientWidth;
    console.log("position", y, x);
    const randomY = Math.random() * y;
    const randomX = Math.random() * x;
    elem.style.top = randomY + "px";
    elem.style.left = randomX + "px";

}

function removeImage(event) {
    event.target.remove();
    scoreDiv.innerHTML = ++score;
}
function calculateScore() {
    finalScoreDiv.innerHTML = score;
}