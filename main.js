import "./style.css";
import card_back from "./img/card_back.png"
// import card_back from "./img/card_back.png"

// var context = require.context('./img/', true, /\.(png)$/);
// var files = {};

// context.keys().forEach((filename)=>{
//   files[filename] = context(filename);
// });
// console.log(files);


// import imageURL from './images/image.png'

// <img src="imageURL"/>

let deck =[];
let initialUserHand = [];
let currentUserHand = [];
let initialCompHand = [];
let currentCompHand = [];
let drawCard = [];
let discardedCards = [];
let currentPlayer = "";

//////////////////////////
//Things around deck
/////////////////////////
// class Deck {
  const chooseTurn = () => {
    const rndmNumber = Math.floor(Math.random() * 2);
    if (rndmNumber === 1) {
      currentPlayer = "user";
    } else {
      currentPlayer = "comp";
    }
    console.log(currentPlayer);
  }

  // constructor() {
  //   this.deck = [];

    const suits = ["H", "D", "C", "S"];
    const ranks = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "T",
      "J",
      "Q",
      "K",
    ];
    const createdeckCards = () =>{
    for (let suit in suits) {
      for (let rank in ranks) {
        deck.push(`${suits[suit]}${ranks[rank]}`);
      }
    }
  }

  const shuffle = () => {
    // const deck = this.deck;
    for (let cards in deck) {
      let tmp = deck[cards];
      const randomNumber = Math.floor(Math.random() * 52);
      deck[cards] = deck[randomNumber];
      deck[randomNumber] = tmp;
    }
    return deck;
  }
  const creatingDeck = () => {
    for (let cardCount3 in deck) {
      let deckCards = document.createElement("div");
      if (cardCount3 == 0) {
        deckCards.setAttribute("id", deck[cardCount3]);
        deckCards.setAttribute("class", "deckcards");
        deckCards.setAttribute(
          "style",
          "transform: translate(-0.06rem, 0rem); z-index:1"
        );
      } else if (cardCount3 == 1) {
        deckCards.setAttribute("id", deck[cardCount3]);
        deckCards.setAttribute("class", "deckcards");
        deckCards.setAttribute(
          "style",
          "transform: translate(-0.12rem, -0.4rem); z-index:2"
        );
      } else if (cardCount3 == 2) {
        deckCards.setAttribute("id", deck[cardCount3]);
        deckCards.setAttribute("class", "deckcards");
        deckCards.setAttribute(
          "style",
          "transform: translate(-0.18rem, -0.8rem); z-index:3"
        );
      } else if (cardCount3 == 3) {
        deckCards.setAttribute("id", deck[cardCount3]);
        deckCards.setAttribute("class", "deckcards");
        deckCards.setAttribute(
          "style",
          "transform: translate(-0.24rem, -1.2rem); z-index:4"
        );
      } else if (cardCount3 == 4) {
        deckCards.setAttribute("id", deck[cardCount3]);
        deckCards.setAttribute("class", "deckcards");
        deckCards.setAttribute(
          "style",
          "transform: translate(-0.32rem, -1.6rem); z-index:5"
        );
      } else {
        deckCards.setAttribute("id", deck[cardCount3]);
        deckCards.setAttribute("class", "deckcards");
      }
      // div全部にimg入れる
      let cardImageBack = document.createElement("img");
      cardImageBack.setAttribute("src", card_back);
      cardImageBack.setAttribute("class", "card-back");
      deckCards.appendChild(cardImageBack);
      document.querySelector(".deck").appendChild(deckCards);
    }
  }

  const dealCards = () => {
    for (let i = 0; i < 20; i++) {
      let selectedCards = deck[i];
      if (i < 10) {
        initialUserHand.push(selectedCards);
        deck.splice(i, 1);
      }
      if (i >= 10) {
        initialCompHand.push(selectedCards);
        deck.splice(i, 1);
      }
    }
  }
  const drawCards = () => {
    if (drawCard.length === 0) {
      const card = deck.pop();
      drawCard.push(card);
      const toRemove = document.getElementById(card);
      toRemove.remove();
      const drawnCard = document
        .querySelector(".drawCard")
        .appendChild(toRemove);
      drawnCard.innerHTML = `<img src="img/${card}.png" class="card-front"></img>`;
      drawnCard.classList.remove("deckcards");
      drawnCard.classList.add("drawCards");
      return deck;
    } else {
      return false;
    }
  }


const discardCards = () => {
  let joinDrawCard = drawCard.join("");
  const insideDrawCard = joinDrawCard.split("");
  const bigNumbers = ["J", "Q", "K"];
  if (currentPlayer === "user") {
    let joinUserCard = currentUserHand.join("");
    const insideUserHand = joinUserCard.split("");
    if (
      bigNumbers.some((element) => element === insideDrawCard[1]) ||
      insideUserHand.some((element1) => element1 === insideDrawCard[1])
    ) {
      // console.log(bigNumbers.some(element => element === insideDrawCard[1]))
      const cardD = drawCard.pop();
      discardedCards.push(cardD);
      const toThrow = document.getElementById(cardD);
      toThrow.remove();
      const discard = document
        .querySelector(".discardCard")
        .appendChild(toThrow);
      discard.innerHTML = `<img src="img/${cardD}.png" class="card-front"></img>`;
      discard.classList.remove("drawCards");
      discard.classList.add("discarded");
      const changeClass = document.getElementById("side");
      changeClass.classList.remove("user");
      changeClass.classList.add("comp");
      currentPlayer = "comp";
    }
  } else {
    let joinCompCard = currentCompHand.join("");
    const insideCompHand = joinCompCard.split("");
    if (
      bigNumbers.some((element) => element === insideDrawCard[1]) ||
      insideCompHand.some((element1) => element1 === insideDrawCard[1])
    ) {
      // console.log(bigNumbers.some(element => element === insideDrawCard[1]))
      const cardD = drawCard.pop();
      discardedCards.push(cardD);
      const toThrow = document.getElementById(cardD);
      toThrow.remove();
      const discard = document
        .querySelector(".discardCard")
        .appendChild(toThrow);
      discard.innerHTML = `<img src="img/${cardD}.png" class="card-front"></img>`;
      discard.classList.remove("drawCards");
      discard.classList.add("discarded");
      const changeClass = document.getElementById("side");
      changeClass.classList.remove("comp");
      changeClass.classList.add("user");
      currentPlayer = "user";
    }
  }

  console.log(currentPlayer);
};
//////////////////////////////
//User Move
/////////////////////////////
const userPanCards = () => {
  if (currentPlayer === "user") {
    let joinDrawCard2 = drawCard.join("");
    const insideDrawCard2 = joinDrawCard2.split("");
    // console.log(insideDrawCard2);
    // let joinUserCard2 = currentUserHand.join("");
    // const insideUserHand2 = joinUserCard2.split("")
    // console.log(insideUserHand2)
    let numOfDrawCard = insideDrawCard2[1];
    if (numOfDrawCard === "T") {
      numOfDrawCard = 10;
    }

    if (numOfDrawCard === "J") {
      console.log("no");
    } else if (numOfDrawCard === "Q") {
      console.log("no");
    } else if (numOfDrawCard === "K") {
      console.log("no");
    } else if (drawCard.length === 0) {
      console.log("Draw a card");
    } else {
      for (let el = 0; el < currentUserHand.length; el++) {
        if (currentUserHand[el][1] === "T") {
          if (numOfDrawCard === 10) {
            console.log("no");
            return false;
          }
        }
        if (currentUserHand[el][1] === numOfDrawCard) {
          console.log("no");
          return false;
        }
      }
      const newInitCard = initialUserHand.slice();
      const selectedUserCard = newInitCard[numOfDrawCard - 1];
      drawCard.push(selectedUserCard);
      const currentDrawCard = drawCard.shift();
      currentUserHand.splice(numOfDrawCard - 1, 0, currentDrawCard);
      const whichDiv = document.getElementById("userPan");
      whichDiv.children[numOfDrawCard - 1].remove();
      const createNewDivForUser = document.createElement("div");
      const whereToInsertNewDiv = document.querySelector(".userPan");
      createNewDivForUser.setAttribute("id", currentDrawCard);
      createNewDivForUser.setAttribute("class", "userPanCards");
      createNewDivForUser.innerHTML = `<img src="img/${currentDrawCard}.png" class="card-front"></img>`;
      whereToInsertNewDiv.insertBefore(
        createNewDivForUser,
        whichDiv.children[numOfDrawCard - 1]
      );
      document.getElementById(currentDrawCard).remove();
      const newDivforDrawCard = document.createElement("div");
      const drawnCardw2 = document.querySelector(".drawCard");
      newDivforDrawCard.setAttribute("id", selectedUserCard);
      newDivforDrawCard.innerHTML = `<img src="img/${selectedUserCard}.png" class="card-front"></img>`;
      drawnCardw2.appendChild(newDivforDrawCard);
    }
  }
};
/////////////////////////////////////////
//Comp Move
/////////////////////////////////////////
const compPanCards = () => {
  if (currentPlayer === "comp") {
    let joinDrawCard4 = drawCard.join("");
    const insideDrawCard4 = joinDrawCard4.split("");

    let numOfDrawCard2 = insideDrawCard4[1];
    if (numOfDrawCard2 === "T") {
      numOfDrawCard2 = 10;
    }

    if (numOfDrawCard2 === "J") {
      console.log("no");
    } else if (numOfDrawCard2 === "Q") {
      console.log("no");
    } else if (numOfDrawCard2 === "K") {
      console.log("no");
    } else if (drawCard.length === 0) {
      console.log("Draw a card");
    } else {
      for (let el = 0; el < currentCompHand.length; el++) {
        if (currentCompHand[el][1] === "T") {
          if (numOfDrawCard2 === 10) {
            console.log("no");
            return false;
          }
        }
        if (currentCompHand[el][1] === numOfDrawCard2) {
          console.log("no");
          return false;
        }
      }
      const newInitCard2 = initialCompHand.slice();
      const selectedCompCard2 = newInitCard2[numOfDrawCard2 - 1];
      drawCard.push(selectedCompCard2);
      const currentDrawCard2 = drawCard.shift();
      currentCompHand.splice(numOfDrawCard2 - 1, 0, currentDrawCard2);
      const whichDiv = document.getElementById("compPan");
      whichDiv.children[numOfDrawCard2 - 1].remove();
      const createNewDivForComp = document.createElement("div");
      const whereToInsertNewDiv = document.querySelector(".compPan");
      createNewDivForComp.setAttribute("id", currentDrawCard2);
      createNewDivForComp.setAttribute("class", "compPanCards");
      createNewDivForComp.innerHTML = `<img src="img/${currentDrawCard2}.png" class="card-front"></img>`;
      whereToInsertNewDiv.insertBefore(
        createNewDivForComp,
        whichDiv.children[numOfDrawCard2 - 1]
      );
      document.getElementById(currentDrawCard2).remove();
      const newDivforDrawCard2 = document.createElement("div");
      const drawnCardw2 = document.querySelector(".drawCard");
      newDivforDrawCard2.setAttribute("id", selectedCompCard2);
      newDivforDrawCard2.innerHTML = `<img src="img/${selectedCompCard2}.png" class="card-front"></img>`;
      drawnCardw2.appendChild(newDivforDrawCard2);
    }
  }
};
///////////////////////////
// GAME START
//////////////////////////
createdeckCards();
/*deck1.*/shuffle();
/*deck1.*/dealCards();
/*deck1.*/chooseTurn();
//////////////////////////
const hands = () => {
  dealToUser();
  dealToComp();
  creatingDeck();
  document.getElementById("drawButton").disabled = false;
  document.getElementById("side").classList.add(currentPlayer);
};
const dealToComp = () => {
  for (let cardCount2 in initialCompHand) {
    let tempNumber = initialCompHand[cardCount2];
    let compCards = document.createElement("div");
    compCards.setAttribute("id", tempNumber);
    // compCards.setAttribute("class", "cards");
    document.querySelector(".compPan").appendChild(compCards);
    const InsertCardFront = document.getElementById(tempNumber);
    // InsertCardFront.innerHTML = `<img src="img/${tempNumber}.png" class="card-front"></img>`
    InsertCardFront.innerHTML =
      '<img src="img/card_back.png" class="card-back"> </img>';
  }
};
const dealToUser = () => {
  document.querySelector(".userPanCards").remove();
  for (let cardCount in initialUserHand) {
    let usersCards = document.createElement("div");
    usersCards.setAttribute("id", initialUserHand[cardCount]);
    usersCards.setAttribute("class", "userPanCards");
    document.querySelector(".userPan").appendChild(usersCards);
    const insertCardBack = document.getElementById(initialUserHand[cardCount]);
    insertCardBack.innerHTML =
      '<img src="img/card_back.png" class="card-back"> </img>';
  }
};
///////////////////////////////////////
const checkingWinnerUser = () => {
  if (currentUserHand.length === 10) {
    for (let t in currentUserHand) {
      let takoNumber = currentUserHand[t];
      console.log(takoNumber);
      const winnerWindowUser = document.getElementById(takoNumber);
      winnerWindowUser.innerHTML = '<img src = "img/takoyaki.png"></img>';
    }
    const winMsg = document.createElement('div')
    winMsg.setAttribute("id", "userWin")
    winMsg.innerText = "PLAYER1 WIN!"
    document.getElementById("table").appendChild(winMsg)
    console.log("You win!");
    return;
  }
};
const checkingWinnerComp = () => {
  if (currentCompHand.length === 10) {
    for (let tt in currentCompHand) {
        let takoNumberComp = currentCompHand[tt];
        const winnerWindowComp = document.getElementById(takoNumberComp);
        winnerWindowComp.innerHTML = '<img src = "img/takoyaki.png"></img>';
      }
      const winMsg = document.createElement('div')
      winMsg.setAttribute("id", "compWin")
      winMsg.innerText = "PLAYER2 WIN!"
      document.getElementById("table").appendChild(winMsg)
    }
    
    console.log("Computer win!");
    return;
};

const checkingDraw = () => {
  if (deck.length === 0) {
    console.log("DRAW")
    const winMsg = document.createElement('div')
    winMsg.setAttribute("id", "drawMsg")
    winMsg.innerText = "TIE"
    document.getElementById("table").appendChild(winMsg)
  }
}
///////////////////////////////////// 
// const compAuto = () => {
//   if (currentPlayer === "comp") {
//     drawCards();
//     discardCards();
//     compPanCards();
// }}

// compAuto();
///////////////////////////
// User Button Moves
///////////////////////////
document.getElementById("startButton").addEventListener("click", hands);

document.querySelector(".drawButton").addEventListener("click", () => {
drawCards();
});

document.querySelector(".discardCard").addEventListener("click", () => {
  discardCards();
  checkingDraw();
});

document.querySelector(".userPan").addEventListener("click", () => {
  userPanCards();
  checkingWinnerUser();
});

document.querySelector(".compPan").addEventListener("click", () => {
  compPanCards();
  checkingWinnerComp();
  checkingDraw();
});

document.getElementById("resetButton").addEventListener("click", () => {
  const template = document.getElementById("table");
  template.innerHTML = `
  <div class="deck">
    <button id="drawButton" class="drawButton" disabled="true;">
      Draw
    </button>
  </div>
  <div class="tako">
    <img src="img/tako.png" class="takochan" />
  </div>
  <div class="drawCard"></div>
  <div class="discardCard"></div>
  <div id="userPan" class="userPan">
    <div class="userPanCards"></div>
  </div>
  <div id="compPan" class="compPan"></div>`;
  document.getElementById("startButton").disabled = false;
  deck = [];
  initialUserHand = [];
  currentUserHand = [];
  initialCompHand = [];
  currentCompHand = [];
  drawCard = [];
  discardedCards = [];
  currentPlayer = "";
  createdeckCards();
    shuffle();
    dealCards();
    chooseTurn();
    location.reload();
});


