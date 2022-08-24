window.addEventListener("load", function () {
    
    document.querySelector(".cardItem").style="visible";

    //==랜덤 숫자로 데이터 보내기
    let randomNum=Math.floor(Math.random()*11)+1;    
    let classCard="cardItem";
    
    function appenCard(){
        let cardItem=document.querySelector("cardItem")
        let div=document.createElement("div");
        div.className=classCard;     //클래스 네임 설정
        let a=document.createElement("a");
        a.href="pickup.html";   //a href 설정
        a.innerText=randomNum;
        div.appendChild(a);
        cardItem.appendChild(div);
    }
});