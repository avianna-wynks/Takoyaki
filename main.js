import './style.css'
// import $ from "jquery"

// Deckを作る

let userHand = [];
let compHand = [];
class Deck {
    constructor() {
        this.deck = [];

        const suits = ["H", "D", "C", "S"];
        const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

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
        return deck
    }
    placeCards() {
        for (let i = 0; i < 20; i++) {
            let selectedCards = this.deck[i];
            if (i < 10) {
                userHand.push(selectedCards);
                this.deck.pop()
                // console.log(userHand)
            } else {
                compHand.push(selectedCards);
                // console.log(compHand)
                this.deck.pop()
            }
        }
    }
}

const deck1 = new Deck();
deck1.shuffle();
deck1.placeCards();

// console.log(deck1);


//その分div作る
const hands = () => 
{createUserHands();
    createCompHands();
        creatingDeck();
}
const createUserHands = () => {
    for (let cardCount in userHand) {
        let usersCards = document.createElement('div');
        usersCards.setAttribute("id", userHand[cardCount]);
        // usersCards.setAttribute("class", "card-back");
        document.getElementById("user").appendChild(usersCards);
        // div全部にimg入れる
            const insertCardBack = document.getElementById(userHand[cardCount])
            insertCardBack.innerHTML = '<img src="pics/card_back.png" class="card-back"> </img>'   
        }
    }

 const createCompHands = () => {
        for (let cardCount2 in compHand) {
            let tempNumber = compHand[cardCount2];
            let compCards = document.createElement('div');
            compCards.setAttribute("id", tempNumber);
            // compCards.setAttribute("class", "cards");
            document.getElementById("comp").appendChild(compCards);
                const InsertCardFront = document.getElementById(tempNumber)
                    // InsertCardFront.innerHTML = `<img src="pics/${tempNumber}.png" class="card-front"></img>`
            InsertCardFront.innerHTML = '<img src="pics/card_back.png" class="card-back"> </img>'
            }

    }   
    const creatingDeck = () => {
        for (let cardCount3 in deck1.deck) {
            let deckCards = document.createElement('div');
            deckCards.setAttribute("id", deck1.deck[cardCount3]);
            // deckCards.setAttribute("class", "card-back");
            if (cardCount3 < 1) {
                deckCards.setAttribute("style", "transform: translate(-0.06rem, 0rem); z-index:1" )
            }
            // あとでここに２−５まで追加する
            document.getElementById("deck").appendChild(deckCards);
            // div全部にimg入れる
                // let cardImageBack = document.createElement('img');
                // cardImageBack.setAttribute("src", "https://4.bp.blogspot.com/-A_98ygeh-hs/WRLiKxndvtI/AAAAAAABEKo/qNM7t47lNCw4Sq0hEwJH5xhUaN8lnJf5gCLcB/s400/card_back.png");
                // cardImageBack.setAttribute("class", "card-back")
                // deckCards.appendChild(cardImageBack);
            }
        }

document.getElementById("startButton").addEventListener("click", hands) 

       
    
    
    
console.log(deck1)

// const pickedCard = document.createElement('div')


// placecard でshuffledDeckの中から10枚ずつくばる
// デックを光らせる（css）
// Deckをクリックしたら一番最初のカードをフリップ→deckの右側におく
// 自分のカードのおけるところが光る→クリックできる (class "here"をつけて”here"のcssで光るのを作る)
//　クリックするとそこにあるカードをフリップしてリプレイスする
//　もしフリップしたカードが１−１０の間＆＆まだ持ってないカードなら
//　自分のカードのおけるところが光る→クリックできる
//　
// comp側,user側にカードのimg 10個置く


















//----------------------------
// const createDeck = () => {
//     for (let item in suits) {
//         for (let num in numbers) {
//             deck.push(suits[item] + numbers[num])
//         }
//     }
//     return deck
// }

// createDeck();

// Deckをシャッフルする   
// const deckShuffle = (deck) => {
//     for (let cards in deck) {
//         let tmp = deck[cards];
//         const randomNumber = Math.floor(Math.random() * 52);
//         deck[cards] = deck[randomNumber];
//         deck[randomNumber] = tmp;
//     }
// }
// let shuffledDeck = createDeck();
// deckShuffle(shuffledDeck);

// placecard でshuffledDeckの中から10枚ずつくばる
// const cardKubaru = () => {
//     for (let i = 0; i < 20; i++) {
//         let selectedCards = deck1[i];
//         if (i < 10) {
//             userHand.push(selectedCards);
//             // deck1.pop()
//             console.log(userHand)
//         } else {
//             compCards.push(selectedCards);
//             // console.log(compCards)
//             // deck1.pop()
//         }
//     }
// }
// cardKubaru();
// const addingImages = (where) => {
//     for (let i = 0; i < 10; i++) {
//         let cardImageBack = document.createElement('img');
//         cardImageBack.setAttribute("src", "https://4.bp.blogspot.com/-A_98ygeh-hs/WRLiKxndvtI/AAAAAAABEKo/qNM7t47lNCw4Sq0hEwJH5xhUaN8lnJf5gCLcB/s400/card_back.png");
//         cardImageBack.setAttribute("class", "card-back")
//         document.getElementById(where).appendChild(cardImageBack);
//     }
// };

// addingImages("comp");