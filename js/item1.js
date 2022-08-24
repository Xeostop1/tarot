window.addEventListener("load", function () {
    
    

    //==랜덤 숫자로 데이터 보내기
  //  let randomNum=Math.floor(Math.random()*11)+1;    
   // let classCard="cardItem";
   let numArr=[];
   let classCard="cardItem"; 

   //랜덤값 배열에 넣기
    
   

    function appenCard(){
        const cardNo=11; 
        for (let i = 0; i < cardNo-1; i++) {
            let randomNum=Math.floor(Math.random()*cardNo)+1;    
            numArr.push(randomNum);
        }
        let cardItem=document.querySelector(".cardItem"); //붙일곳 
        cardItem.style.visibility="visible" //visibility까지 써주기
        let div=document.createElement("div");
        div.className=classCard;     //클래스 네임 세팅
       
        let a=document.createElement("a");
        a.href="pickup.html";   //a href 넣기 <확인!>
        a.innerText=numArr; //a 랜덤으로 숫자 넣기<확인!>
        div.appendChild(a);
        cardItem.appendChild(div);
    }
    appenCard();
});