const btnFlip = document.getElementById("btnFlip")
const btnBack = document.getElementById("btnBack")
const btnNext = document.getElementById("btnNext")
const cardsInput = document.getElementById("cardsInput")

let CARDS = []
let CURRENT_CARD_INDEX = 0
let CURRENT_CARD_SHOW_FRONT = true

const redrawCurrentCard = () => {
  const card = CARDS[CURRENT_CARD_INDEX]
  const text = CURRENT_CARD_SHOW_FRONT ? card[0] : card[1]
  btnFlip.textContent = text
}

btnFlip.addEventListener("click", event => {
  CURRENT_CARD_SHOW_FRONT = !CURRENT_CARD_SHOW_FRONT
  redrawCurrentCard()
})

btnBack.addEventListener("click", event => {
  CURRENT_CARD_SHOW_FRONT = true
  CURRENT_CARD_INDEX = CURRENT_CARD_INDEX == 0 ? CARDS.length -1 : CURRENT_CARD_INDEX - 1
  redrawCurrentCard()
})

btnNext.addEventListener("click", event => {
  CURRENT_CARD_SHOW_FRONT = true
  CURRENT_CARD_INDEX = CURRENT_CARD_INDEX == CARDS.length - 1 ? 0 : CURRENT_CARD_INDEX + 1
  redrawCurrentCard()
})

cardsInput.addEventListener("change", event => {
  CARDS = []
  cardsInput.value.split("\n").forEach(line => {
    CARDS.push(line.split("\t"))
  })
  CURRENT_CARD_INDEX = 0
  CURRENT_CARD_SHOW_FRONT = true
  redrawCurrentCard()
  btnFlip.disabled = false
  btnBack.disabled = false
  btnNext.disabled = false
})