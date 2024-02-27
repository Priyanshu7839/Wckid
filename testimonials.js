var btn=document.getElementsByClassName("slide-btn");
var slide=document.getElementById("slide");
btn[0].onclick=function(){
   slide.style.transform="translateX(0vh)";
   for(let i=0;i<btn.length;i++){
    btn[i].classList.remove("slide-btn-active");
   }
   this.classList.add("slide-btn-active");
}
btn[1].onclick=function(){
   slide.style.transform="translateX(-25vw)";
   for(let i=0;i<btn.length;i++){
    btn[i].classList.remove("slide-btn-active");
   }
   this.classList.add("slide-btn-active");
   
}
btn[2].onclick=function(){
   slide.style.transform="translateX(-50vw)";
   for(let i=0;i<btn.length;i++){
    btn[i].classList.remove("slide-btn-active");
   }
   this.classList.add("slide-btn-active");
}
btn[3].onclick=function(){
   slide.style.transform="translateX(-75vw)";
   for(let i=0;i<btn.length;i++){
    btn[i].classList.remove("slide-btn-active");
   }
   this.classList.add("slide-btn-active");
}
// let j=0;
// setInterval(() => {

   
//    btn[j].click();
//    j++;
// if(j>3){
//    j=0;
// }
  
   
// }, 3000);

