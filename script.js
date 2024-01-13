const selectCharacter = document.querySelectorAll(".imgbox img");
const startGame = document.querySelector("#btn");
const timeDiv = document.querySelector("#left span");
const scoreDiv = document.querySelector("#right span");
const selectionScreen = document.querySelector("#top");
const playingScreen = document.querySelector("#second-page");
const scoreScreen = document.querySelector("#third-page");
// const blankBoxImg = document.querySelector("#second-page .main-box");
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
    // let elem = document.querySelector("#blank-box-img");
    // console.log(elem)    
    // let rect = elem.getBoundingClientRect();
    // console.log("rect",rect);
    // for (const key in rect) {
    //   if (typeof rect[key] !== "function") {
    //     let para = document.createElement("p");
    //     para.textContent = `${key} : ${rect[key]}`;
    //     console.log((para));
    //   }
    // }


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
       
    // let rect = document.querySelector("#blank-box-img").getBoundingClientRect();
    // console.log("rect",rect);
    
    // // const minx = rect.left -130;
    // const minx = rect.left;
    // // const maxx = rect.right -210;
    // const maxx = rect.right;
    
    // // const miny = rect.top -50;
    // const miny = rect.top;
    // // const maxy = rect.bottom -90;
    // const maxy = rect.bottom;

    
    // // console.log("position", y, x);
    // const randomY = Math.random() * 1500;
    // const randomX = Math.random() * 800;
    // // const randomX = Math.random() * (maxx - minx) + minx;
    // // const randomY = Math.random() * (maxy - miny) + miny;
    // elem.style.top = randomY + "px";
    // elem.style.left = randomX + "px";
    const y = blankBoxImg.clientHeight;
    const x = blankBoxImg.clientWidth;
    console.log("position", y, x);
    const randomY = Math.random() * y;
    const randomX = Math.random() * x;
    elem.style.top = randomY + "px";
    elem.style.left = randomX + "px";
    console.log("random hor, random ver",randomX,randomY)

}

function removeImage(event) {
    event.target.remove();
    scoreDiv.innerHTML = ++score;
}
function calculateScore() {
    finalScoreDiv.innerHTML = score;
}






