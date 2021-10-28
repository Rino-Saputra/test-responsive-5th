var nav=document.querySelector("nav");
var burger=document.querySelector(".burger");
var section=document.querySelector("section");
var up_cnt=section.querySelector(".left .upper");
var bottom_cnt=section.querySelector(".left .bottom");
burger.addEventListener('click',function(){
        burger.classList.toggle('exist');
        if(burger.classList.contains('exist')){
            nav.style.marginLeft='0';
            nav.style.opacity='1';
        }
       else{
           nav.style.marginLeft='100%';
           nav.style.opacity='0';  
       }
});

burger.previousElementSibling.addEventListener('click',function(){
    burger.previousElementSibling.classList.toggle('exist');
    if(burger.previousElementSibling.classList.contains('exist')){
       burger.previousElementSibling.style.backgroundColor="white";
       burger.previousElementSibling.lastElementChild.style.backgroundColor='rgb(8,8,8)';
       burger.previousElementSibling.lastElementChild.style.margin='4% 10% 0 -46%';
       document.body.firstElementChild.style.backgroundColor='rgb(8, 8, 8)';
       burger.style.backgroundColor="white"
       up_cnt.style.color="#b5c6ff";
       up_cnt.firstElementChild.style.color="#b5c6ff";
       up_cnt.lastElementChild.style.color="white";
       up_cnt.lastElementChild.style.borderColor="#b5c6ff";

       for(let i=0; i<bottom_cnt.childElementCount; i++){
        bottom_cnt.children[i].firstElementChild.style.color="#bdd5ff";
           bottom_cnt.children[i].lastElementChild.style.color="#f3ffbf";
       }
    }
    else {
        burger.previousElementSibling.style.backgroundColor='rgb(8, 8, 8)';
        document.body.firstElementChild.style.backgroundColor='rgb(255, 251, 246)';
        burger.previousElementSibling.lastElementChild.style.backgroundColor="white";
        burger.previousElementSibling.lastElementChild.style.marginLeft='5px';
        up_cnt.style.color="rgb(52, 53, 54)";
        up_cnt.firstElementChild.style.color="rgb(52, 53, 54)";
        up_cnt.lastElementChild.style.color="rgba(27, 59, 240, 0.705)";
        up_cnt.lastElementChild.style.borderColor="rgba(27, 59, 240, 0.705)";

        for(let i=0; i<bottom_cnt.childElementCount; i++){
            bottom_cnt.children[i].firstElementChild.style.color="rgba(2, 2, 54, 0.774)";
           bottom_cnt.children[i].lastElementChild.style.color="#768a22";
        }
    }
});