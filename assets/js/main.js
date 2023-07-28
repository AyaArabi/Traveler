var iconsheader = document.querySelectorAll(".icon-headernavbar i");
var screenSerch =document.getElementById("serch-screen");
var iconScreen=document.getElementById("iconScreen");
var nav=document.getElementById("navbar");
var screenMenu=document.getElementsByClassName("screen-menu");
var iconScreenMenu=document.getElementById("iconScreenMenu");
var playbtn=document.getElementById("play-btn")
var iconplay=document.getElementById("iconplay");
var playframe=document.getElementById("playframe");
var headnav=document.getElementById("headnav");
var iconsNav=document.querySelector(".icons-nav");
var navLink=document.querySelectorAll('.nav-link');
var mainpack=document.getElementById('mainpack');
var backages;
if (localStorage.getItem('backages')== null){
    backages=[];
    }
    else{
      backages=JSON.parse(localStorage.getItem('backages'))
      readmData();
    } 
    
console.log(navLink)
window.addEventListener('scroll',function(){
    if(this.window.scrollY>nav.offsetTop){
        nav.classList.add("fixed-top");
        nav.classList.remove("bg-transparent");
        nav.classList.add("bg-white");
    iconsNav.style.color='#404040';
    for(var i=0;i<=navLink.length;i++){
navLink[i].style.color='#404040';
    }
    }
    if(this.window.scrollY<=nav.offsetTop){
        nav.classList.remove("fixed-top");
        nav.classList.add("bg-transparent");
        iconsNav.style.color='white';
        for(var i=0;i<=navLink.length;i++){
            navLink[i].style.color='white'
                }
    }
   

});


iconsheader[0].addEventListener('click',function(e){
    screenSerch.classList.remove("d-none");

  
});

playbtn.addEventListener('click',function(e){
playframe.classList.remove("d-none");
});

iconplay.addEventListener('click',function(e){
    playframe.classList.add("d-none");
});

iconsheader[1].addEventListener('click',function(e){
    screenMenu[0].classList.remove("d-none");

  
});

iconScreen.addEventListener('click',function(e){
    screenSerch.classList.add("d-none");
    
});

iconScreenMenu.addEventListener('click',function(e){
    screenMenu[0].classList.add("d-none");
});


function readmData(){
       
    var res=``;
    for(var i=0;i<backages.length;i++){
        res+=`
      
<div class="col-lg-4  img-backage mb-5">
<img src="${backages[i].imageb}" alt="">
</div>
<div class="col-lg-4 info-backage mb-5">
<h3 class="mt-5  ms-3">${backages[i].title}</h3>
<p  class="mt-4 ms-3">${backages[i].description}</p>
<div class="  ms-3 d-flex  rounded-pill align-items-center mt-4 p-2 detailes">
<i class="fa-solid fa-clock me-2"></i>
<span class="me-2 pe-2 ">${backages[i].days}D/${backages[i].nights}N</span>
<i class="fa-solid fa-user-group me-2"></i>
<span class="me-2 pe-2">pax: 10</span>
<i class="fa-solid fa-location-dot me-2"></i>
<span class="me-2 pe-2"> ${backages[i].loca}</span>
</div>
</div>
<div class="col-lg-4 price-backage mb-5 ">
<div class="rate text-white mt-5 mb-3 ">
<span class="me-2">(${backages[i].reviews} reviews) </span>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-regular fa-star"></i>
</div>
<div class="text-white">
<span class="price d-block">$${backages[i].price}</span>
<span>/ per person</span>
</div>
<button class="btn rounded-pill text-white mt-4">BOOK NOW</button>

</div>

`}
    
    mainpack.innerHTML=res;
 
}

