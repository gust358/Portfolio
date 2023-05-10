function createAndAddCards() {
    const nonFormatedCards = game.createCardsFromTechs();
    let formatedCards = [];
    nonFormatedCards.forEach((it) => {
        console.log(it.flipped)
        formatedCards.push(
            `<div class="card-memory" id="${it.id}">
     <div class="card_front-memory">
     <img class="icon" src="./images/${it.icon}.png" alt="${it.icon}"></img>
     </div>
     <div class="card_back-memory">
     </div>
     </div>`
        )
    })
    document.getElementById("gameboard").innerHTML = formatedCards.join("");
}


function handleFlip() {
    document.querySelectorAll(".card-memory").forEach((it) => {
        it.addEventListener("click", () => {
            game.flipCard(it.id,
                //GameOverCallBack
                () => {
                    document.getElementById("gameover").style.display = "flex"
                    game.clearCards();
                })
        })
    })
}

document.addEventListener("DOMContentLoaded", () => {

    createAndAddCards();
    handleFlip();
    document.querySelectorAll(".card-memory").forEach((it) => {
        it.addEventListener("click", () => {
            game.flipCard(it.id,
                //GameOverCallBack
                () => {
                    document.getElementById("gameover").style.display = "flex"
                    game.clearCards();
                })
        })
    })

    document.getElementById("gameover").addEventListener("click", () => {
        document.getElementById("gameover").style.display = "none"
        createAndAddCards();
        handleFlip();
    })
})

