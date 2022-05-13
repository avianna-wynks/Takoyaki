import "./style.css";

// Deckを作る

let initialUserHand = [];
let currentUserHand = [];
let initialCompHand = [];
let CurrentCompHand = [];
let drawCard = [];
let discardedCards = [];
let currentUser = [];
class Deck {
  constructor() {
    this.deck = [];

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

    for (let suit in suits) {
      for (let rank in ranks) {
        this.deck.push(`${suits[suit]}${ranks[rank]}`);
      }
    }
  }
  shuffle() {
    const deck = this.deck;
    for (let cards in deck) {
      let tmp = deck[cards];
      const randomNumber = Math.floor(Math.random() * 52);
      deck[cards] = deck[randomNumber];
      deck[randomNumber] = tmp;
    }
    return deck;
  }
  creatingDeck() {
    for (let cardCount3 in deck1.deck) {
      let deckCards = document.createElement("div");
      // deckCards.setAttribute("class", "card-back");
      if (cardCount3 == 0) {
        deckCards.setAttribute("id", deck1.deck[cardCount3]);
        deckCards.setAttribute("class", "deckcards");
        deckCards.setAttribute(
          "style",
          "transform: translate(-0.06rem, 0rem); z-index:1"
        );
      } else if (cardCount3 == 1) {
        deckCards.setAttribute("id", deck1.deck[cardCount3]);
        deckCards.setAttribute("class", "deckcards");
        deckCards.setAttribute(
          "style",
          "transform: translate(-0.12rem, -0.4rem); z-index:2"
        );
      } else if (cardCount3 == 2) {
        deckCards.setAttribute("id", deck1.deck[cardCount3]);
        deckCards.setAttribute("class", "deckcards");
        deckCards.setAttribute(
          "style",
          "transform: translate(-0.18rem, -0.8rem); z-index:3"
        );
      } else if (cardCount3 == 3) {
        deckCards.setAttribute("id", deck1.deck[cardCount3]);
        deckCards.setAttribute("class", "deckcards");
        deckCards.setAttribute(
          "style",
          "transform: translate(-0.24rem, -1.2rem); z-index:4"
        );
      } else if (cardCount3 == 4) {
        deckCards.setAttribute("id", deck1.deck[cardCount3]);
        deckCards.setAttribute("class", "deckcards");
        deckCards.setAttribute(
          "style",
          "transform: translate(-0.32rem, -1.6rem); z-index:5"
        );
      } else {
        deckCards.setAttribute("id", deck1.deck[cardCount3]);
        deckCards.setAttribute("class", "deckcards");
      }
      // div全部にimg入れる
      let cardImageBack = document.createElement("img");
      cardImageBack.setAttribute("src", "pics/card_back.png");
      cardImageBack.setAttribute("class", "card-back");
      deckCards.appendChild(cardImageBack);
      document.querySelector(".deck").appendChild(deckCards);
    }
  }

  dealCards() {
    for (let i = 0; i < 20; i++) {
      let selectedCards = this.deck[i];
      if (i < 10) {
        initialUserHand.push(selectedCards);
        this.deck.splice(i, 1);
      }
      if (i >= 10) {
        initialCompHand.push(selectedCards);
        this.deck.splice(i, 1);
      }
    }
  }
  drawCards() {
    if (drawCard.length === 0) {
      const card = this.deck.pop();
      drawCard.push(card);
      const toRemove = document.getElementById(card);
      toRemove.remove();
      const drawnCard = document
        .querySelector(".drawCard")
        .appendChild(toRemove);
      drawnCard.innerHTML = `<img src="pics/${card}.png" class="card-front"></img>`;
      drawnCard.classList.remove("deckcards");
      drawnCard.classList.add("drawCards");
      return this.deck;
    }
  } 

  discardCards() {
    let joinDrawCard = drawCard.join("");
    const insideDrawCard = joinDrawCard.split("");
    let joinUserCard = currentUserHand.join("");
    const insideUserHand = joinUserCard.split("");
    // console.log(insideUserHand.some(element1 => element1 === insideDrawCard[1]))

    const bigNumbers = ["J", "Q", "K"];
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
      discard.innerHTML = `<img src="pics/${cardD}.png" class="card-front"></img>`;
      discard.classList.remove("drawCards");
      discard.classList.add("discarded");
    }
/////////////////////////////////
// switch turn
////////////////////////////////
  }

  userPanCards() {
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
    } 
    else {
        for (let el = 0; el < currentUserHand.length; el++) {
            if (currentUserHand[el][1] === "T"){
                if (numOfDrawCard === 10) {
                    console.log("no");
                    return false;
                }
            }
            if (currentUserHand[el][1] === numOfDrawCard) {
                console.log("no");
                return false
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
      createNewDivForUser.innerHTML = `<img src="pics/${currentDrawCard}.png" class="card-front"></img>`;
      whereToInsertNewDiv.insertBefore(
        createNewDivForUser,
        whichDiv.children[numOfDrawCard - 1]
      );
      document.getElementById(currentDrawCard).remove();
      const newDivforDrawCard = document.createElement("div");
      const drawnCardw2 = document.querySelector(".drawCard");
      newDivforDrawCard.setAttribute("id", selectedUserCard);
      newDivforDrawCard.innerHTML = `<img src="pics/${selectedUserCard}.png" class="card-front"></img>`;
      drawnCardw2.appendChild(newDivforDrawCard);
    }
  }
}

// const nextDrawCard = userHand.shift()
// drawCard.push(nextDrawCard)

// console.log(/* bigNumbers.some(element => element !== numOfDrawCard) &&*/ insdeUserHand2.some(element2 => element2 !== numOfDrawCard))

// if (bigNumbers.some(element => element !== numOfDrawCard) && insdeUserHand2.some(element2 => element2 !== numOfDrawCard)) {

const hands = () => {
  dealToUser();
  dealToComp();
  deck1.creatingDeck();
};
const dealToComp = () => {
  for (let cardCount2 in initialCompHand) {
    let tempNumber = initialCompHand[cardCount2];
    let compCards = document.createElement("div");
    compCards.setAttribute("id", tempNumber);
    // compCards.setAttribute("class", "cards");
    document.querySelector(".compPan").appendChild(compCards);
    const InsertCardFront = document.getElementById(tempNumber);
    // InsertCardFront.innerHTML = `<img src="pics/${tempNumber}.png" class="card-front"></img>`
    InsertCardFront.innerHTML =
      '<img src="pics/card_back.png" class="card-back"> </img>';
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
      '<img src="pics/card_back.png" class="card-back"> </img>';
  }

  //       for (let cardCount1 in userHand) {
  //         for (let numbers in UserCardsNumber) {
  //         const aaa = document.getElementById(userHand[cardCount1])
  //         aaa.classList.add(UserCardsNumber[numbers])
  // }}
};

const deck1 = new Deck();
deck1.shuffle();
deck1.dealCards();

document.querySelector(".drawButton").addEventListener("click", () => {
  deck1.drawCards();
});
document.querySelector(".discardCard").addEventListener("click", () => {
  deck1.discardCards();
});

document.querySelector(".userPan").addEventListener("click", () => {
  deck1.userPanCards();
});


document.getElementById("startButton").addEventListener("click", hands);

// placecard でshuffledDeckの中から10枚ずつくばる
// デックを光らせる（css）
// Deckをクリックしたら一番最初のカードをフリップ→deckの右側におく
// 自分のカードのおけるところが光る→クリックできる (class "here"をつけて”here"のcssで光るのを作る)
//　クリックするとそこにあるカードをフリップしてリプレイスする
//　もしフリップしたカードが１−１０の間＆＆まだ持ってないカードなら
//　自分のカードのおけるところが光る→クリックできる
//
// comp側,user側にカードのimg 10個置く
