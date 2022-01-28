const time=document.querySelector("#time");
const day=document.querySelector("#day");


function getDay(){
    const year=new Date().getFullYear();
    const mon=String(new Date().getMonth()+1).padStart(2,"0");
    const dd=String(new Date().getDate()).padStart(2,"0");
    day.innerText=`${year} / ${mon} / ${dd}`;
}

function getClock(){
    const date=new Date();
    const hours=String(date.getHours()).padStart(2,"0");  /*padStart 함수는 문자열에서 사용 가능 */
    const min=String(date.getMinutes()).padStart(2,"0");
    const sec=String(date.getSeconds()).padStart(2,"0");
    time.innerText=`${hours} : ${min} : ${sec}`;
    
}

getDay();
getClock();   /*website가 load되자마자 한번 실행한 후 매 초 다시실행*/
setInterval(getClock, 1000);