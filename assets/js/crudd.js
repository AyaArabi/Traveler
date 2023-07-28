var backages;
var title=document.getElementById("title");
var description=document.getElementById("description");
var imageb=document.getElementById("imageb");
var days=document.getElementById("days");
var nights=document.getElementById("nights");
var loca=document.getElementById("loca");
var price=document.getElementById("price");
var reviews=document.getElementById("reviews");
var btnadd=document.getElementById("btnad");
var clear=document.getElementById("clear");
var pack=document.getElementById("pack");
var imgreader;
var loading=document.getElementById('loading');
var deleteAll=document.getElementById('deleteAll');
var search=document.getElementById('search');
var btnupdate=document.getElementById('btnupdate');
var istiltleValid =false;
var isDesvalid=false;
var islocavalid=false;
var  isDaysValid=false;
var isreviewsValid=false;
var isnightsValid=false;
var ispriceValid=false;

var currentIndex;
    document.body.style.overflow='hidden';

    if (localStorage.getItem('backages')== null){
      backages=[];
      }
      else{
        backages=JSON.parse(localStorage.getItem('backages'))
        readData();
      } 
      



btnadd.addEventListener('click', async function(e){
        e.preventDefault();
      await  readimg();
     
})

 function readimg(){

    var fr= new FileReader;
    
    fr. onload=  function(){
     imgreader= fr.result;
     addBackage();
     reset();
     readData();
     
    }
    fr.  readAsDataURL(imageb.files[0]);
    
}

 function addBackage(){
    
    var backage={
        description:description.value,
        title:title.value,
        imageb:imgreader,
        days:days.value,
        nights:nights.value,
        loca:loca.value,
        price:price.value,
        reviews:reviews.value
    }
    
    
    backages.push(backage);
   localStorage.setItem('backages',JSON.stringify(backages));
      
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Add backage sucssuflly',
        showConfirmButton: false,
        timer: 1500
      })
       istiltleValid =false;
 isDesvalid=false;
 islocavalid=false;
  isDaysValid=false;
 isreviewsValid=false;
 isnightsValid=false;
 ispriceValid=false;
}


clear.addEventListener('click',function(){
    reset();
    
});

function reset(){
    
    description.value=""
    title.value="";
    imageb.value="";
    days.value="";
   nights.value="";
    loca.value="";
    price.value="";
    reviews.value="";
    title.classList.remove('is-valid');
    price.classList.remove('is-valid');
    loca.classList.remove('is-valid');
    days.classList.remove('is-valid');
    nights.classList.remove('is-valid');
    reviews.classList.remove('is-valid');
    description.classList.remove('is-valid');

}

    function readData(){
        console.log("img is",imgreader);
        var result=``;
        for(var i=0;i<backages.length;i++){
            result+=`
          
  <div class="col-lg-4  img-backage mb-5" >
  <img id="img-gg" src="${backages[i].imageb}" alt="">
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
<div class="col-lg-4 price-backage mb-5">
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
<div class="deleteAll mb-3">
<button class="btn" onclick="deletebackage(${i})" >delete</button>
<button class="btn" onclick="updateb(${i})">update</button></div>
 `
        }
        
        pack.innerHTML=result;
        imgreader="";
    }

    function deletebackage(index){
      Swal.fire({ 
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {

        if (result.isConfirmed) {
            backages.splice(index,1);
            localStorage.setItem('backages',JSON.stringify(backages))
            readData();
            
          Swal.fire(
            'Deleted!',
            'Your backage has been deleted.',
            'success'
          )
        }}) }

      function updateb(index){
            btnupdate.classList.remove('d-none');
            btnadd.classList.add('d-none'); 

        description.value=backages[index].description
        title.value=backages[index].title;
        days.value=backages[index].days;
        nights.value=backages[index].nights;
        loca.value=backages[index].loca;
        price.value=backages[index].price;
        reviews.value=backages[index].reviews;
        currentIndex=index;
      }

    btnupdate.addEventListener('click',function(e){
e.preventDefault();
btnadd.classList.remove('d-none');
btnupdate.classList.add('d-none');
addBackageupdate();
reset();
readData();

 })

   
  
    function addBackageupdate(){
      var backage={
        description: description.value,
        title:title.value,
        days:days.value,
        nights:nights.value,
        loca:loca.value,
        price:price.value,
        reviews:reviews.value
      }
    
      
      backages[currentIndex].title=backage.title;
      backages[currentIndex].days=backage.days;
      backages[currentIndex].nights=backage.nights;
      backages[currentIndex].loca=backage.loca;
      backages[currentIndex].price=backage.price;
      backages[currentIndex].reviews=backage.reviews;
      
      localStorage.setItem('backages',JSON.stringify(backages));
      
    }
  
deleteAll.addEventListener('click',function(){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't delete all backages!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      backages=[];
      localStorage.setItem('backages',JSON.stringify(backages));
      readData();
      
      Swal.fire(
        'Deleted!',
        'Your backage has been deleted.',
        'success'
      )
    }
  })

})

search.onkeyup=function(){



  var result=``;
  for(var i=0;i<backages.length;i++){
    if(backages[i].title.toLowerCase().includes(search.value.toLowerCase())){
      result+=`
    
<div class="col-lg-4  img-backage mb-5" >

<img id="img-gg" src="${backages[i].imageb}" alt="">
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
<div class="deleteAll">
<button class="btn" onclick="deletebackage(${i})" >delete</button>
<button class="btn" onclick="updateb(${i})">update</button></div>
`
  }
  
  pack.innerHTML=result;
  
}}
function checkInput(){
  if(istiltleValid && isDaysValid && isDesvalid && islocavalid && isnightsValid && ispriceValid && isreviewsValid)
{
  btnadd.removeAttribute('disabled')
  console.log("hhhhhhhhhhhh")
}
else{
  btnadd.setAttribute('disabled','disabled')
}
}


var titleAlert=document.getElementById("titleAlert");
titleAlert.style.display= 'none';
title.onkeyup=function(){
  var pattren=/^[A-Z][a-z]{2,9}$/
  if(pattren.test(title.value)){
    istiltleValid=true;
    
    titleAlert.style.display= 'none';
    if(title.classList.contains('is-invalid'))
    {title.classList.replace('is-invalid','is-valid')}
    
    else 
   title.classList.add('is-valid')
   
  }else{
    istiltleValid=false;
    titleAlert.style.display= 'block'
    if(title.classList.contains('is-valid'))
    {title.classList.replace('is-valid','is-invalid')}
    else
   title.classList.add('is-invalid')
  
  }
  checkInput();
}

var descriptionAlert=document.getElementById("descriptionAlert");
descriptionAlert.style.display= 'none';
description.onkeyup=function(){
  var pattren=/^[A-Z][A-Za-z0-9\s]{3,119}$/
  if(pattren.test(description.value)){
    isDesvalid=true
    descriptionAlert.style.display= 'none';

    if(description.classList.contains('is-invalid'))
    {description.classList.replace('is-invalid','is-valid')}
    
    else 
    description.classList.add('is-valid')

  }else{
    isDesvalid=false
    descriptionAlert.style.display= 'block';

    if(description.classList.contains('is-valid'))
    {description.classList.replace('is-valid','is-invalid')}
    else
    description.classList.add('is-invalid')
  
  }
  checkInput();
}


var locaAlert=document.getElementById("locaAlert");
locaAlert.style.display= 'none';
loca.onkeyup=function(){
  var pattren=/^[A-Z][A-Za-z0-9\s]{2,19}$/
  if(pattren.test(loca.value)){
   islocavalid=true
    locaAlert.style.display= 'none';

    if(loca.classList.contains('is-invalid'))
    {loca.classList.replace('is-invalid','is-valid')}
    
    else 
    loca.classList.add('is-valid')

  }else{
   islocavalid=false
    locaAlert.style.display= 'block';

    if(loca.classList.contains('is-valid'))
    {loca.classList.replace('is-valid','is-invalid')}
    else
    loca.classList.add('is-invalid')
  
  }
  checkInput();
}

var daysAlert=document.getElementById("daysAlert");
daysAlert.style.display= 'none';
days.onkeyup=function(){
  var pattren=/^[0-9]{1,2}$/;
  if(pattren.test(days.value)){
    isDaysValid=true;
   daysAlert.style.display= 'none';

    if(days.classList.contains('is-invalid'))
    {days.classList.replace('is-invalid','is-valid')}
    
    else {days.classList.add('is-valid')}

  }else{
    isDaysValid=false
   daysAlert.style.display= 'block';

    if(days.classList.contains('is-valid'))
    {days.classList.replace('is-valid','is-invalid')}
    else{ days.classList.add('is-invalid')}
   
  
  }
  checkInput();
}
var nightsAlert=document.getElementById("nightsAlert");
nightsAlert.style.display= 'none';
nights.onkeyup=function(){
  var pattren=/^[0-9]{1,2}$/;
  if(pattren.test(nights.value)){
    isnightsValid=true;
    
   nightsAlert.style.display= 'none';

    if(nights.classList.contains('is-invalid'))
    {nights.classList.replace('is-invalid','is-valid')}
    
    else {nights.classList.add('is-valid')}

  }else{
    isnightsValid=false
   nightsAlert.style.display= 'block';

    if(nights.classList.contains('is-valid'))
    {nights.classList.replace('is-valid','is-invalid')}
    else{ nights.classList.add('is-invalid')}
   
  
  }
  checkInput();
}
var reviewsAlert=document.getElementById("reviewsAlert");
reviewsAlert.style.display= 'none';
reviews.onkeyup=function(){
  var pattren=/^[0-9]{1,3}$/;
  if(pattren.test(reviews.value)){
    isreviewsValid=true;
   reviewsAlert.style.display= 'none';

    if(reviews.classList.contains('is-invalid'))
    {reviews.classList.replace('is-invalid','is-valid')}
    
    else {reviews.classList.add('is-valid')}

  }else{
    isreviewsValid=false
   reviewsAlert.style.display= 'block';

    if(reviews.classList.contains('is-valid'))
    {reviews.classList.replace('is-valid','is-invalid')}
    else{ reviews.classList.add('is-invalid')}
   
  
  }
  checkInput();
}
var priceAlert=document.getElementById("priceAlert");
priceAlert.style.display= 'none';
price.onkeyup=function(){
  var pattren=/^[1-9][0-9][0-9]{1,3}$/;
  if(pattren.test(price.value)){
    ispriceValid=true;
   priceAlert.style.display= 'none';

    if(price.classList.contains('is-invalid'))
    {price.classList.replace('is-invalid','is-valid')}
    
    else {price.classList.add('is-valid')}

  }else{
    ispriceValid=false
   priceAlert.style.display= 'block';

    if(price.classList.contains('is-valid'))
    {price.classList.replace('is-valid','is-invalid')}
    else{ price.classList.add('is-invalid')}
   
  
  }
  checkInput();
}

