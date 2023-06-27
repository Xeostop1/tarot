// Tarot card deck
const tarotDeck = [
    { name: "더 풀", image: "fool.webp" },
    { name: "마법사", image: "magician.webp" },
    { name: "여교황", image: "high_priestess.webp" },
    { name: "황후", image: "empress.webp" },
    { name: "황제", image: "emperor.webp" },
    { name: "교황", image: "hierophant.webp" },
    { name: "연인", image: "lovers.webp" },
    { name: "전차", image: "chariot.webp" },
    { name: "힘", image: "strength.webp" },
    { name: "은둔자", image: "hermit.webp" },
    { name: "운명의 수레바퀴", image: "wheel_of_fortune.webp" },
    { name: "정의", image: "justice.webp" },
    { name: "매달린 사람", image: "hanged_man.webp" },
    { name: "죽음", image: "death.webp" },
    { name: "절제", image: "temperance.jpg" },
    { name: "악마", image: "devil.jpg" },
    { name: "탑", image: "tower.png" },
    { name: "별", image: "star.jpg" },
    { name: "달", image: "moon.webp" },
    { name: "태양", image: "sun.webp" },
    { name: "심판", image: "judgment.webp" },
    { name: "세계", image: "world.webp" },
  ];
  
  // 카드뽑기
  function drawCard() {
    const randomIndex = Math.floor(Math.random() * tarotDeck.length);
    const card = tarotDeck[randomIndex];
  
    const cardBack = document.getElementById("card-back");
    const cardImage = document.getElementById("card-image");
    const cardTitle = document.getElementById("card-title");
  
    cardBack.style.display = "none";
    cardImage.src = `./img/${card.image}`;
    cardImage.classList.remove("hidden");
  
    cardTitle.textContent = card.name;
  }
  
  drawCard();