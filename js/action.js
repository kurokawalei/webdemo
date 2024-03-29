

   
  $(window).load(function(e) {
    window.setTimeout(function(){
    $('#warp').addClass('animate__fadeIn animate__animated').css('opacity','1')
    $('#loading').css('display','none');
    },1500)

})



new WOW().init();

const list = document.querySelector('.list');
const filterBtn = document.querySelector('.filter-list');




//篩選


filterBtn.addEventListener( 'click' , function(e){
   if( e.target.nodeName == "UL" ){
    return false
   }else{
    renderHTML(e.target.dataset.value);
    const btn = document.querySelector('.btn');
    //console.log(btn);
    btn.textContent = e.target.dataset.value;

   }
})


//組元素
function renderHTML(type) {

  let str = "";
  let filterAry = [];

 

  data.forEach( (item,index) =>{

    if(   item.type == type   ) {

      
    str+= ` <div class="col" data-type="${item.type}">
    <div class="card shadow-sm animate__animated animate__fadeInUp wow">
     <a href="${item.link}" target="_blank" title="${item.name}"><img src="${item.img}" class="img-fluid"></a>
      <div class="card-body">
        <p class="card-text">${item.name}</p>
        <div class="d-flex justify-content-center align-items-center">
          <div class="btn-group mb-3">
            <a target="_blank" href="${item.link}" class="btn-style btn btn-sm btn-outline-secondary" >連結</a>          
          </div>
        
        </div>
      </div>
    </div>
  </div>`

  filterAry.push(item);

    }else if(   type == "全部"  ){

     str+=` <div class="col" data-type="${item.type}">
     <div class="card shadow-sm animate__animated animate__fadeInUp wow">
      <a href="${item.link}" target="_blank" title="${item.name}"><img src="${item.img}" class="img-fluid"></a>
       <div class="card-body">
         <p class="card-text">${item.name}</p>
         <div class="d-flex justify-content-center align-items-center">
           <div class="btn-group">
             <a target="_blank" href="${item.link}" class="btn-style btn btn-sm btn-outline-secondary" >連結</a>          
           </div>
         
         </div>
       </div>
     </div>
   </div>`

    }


  } )

  list.innerHTML = str;
 

}

renderHTML("全部");


$( window ).scroll(function(){

  let wwh = $(document).height();
 


  if ($(window).scrollTop() > wwh / 2 ) {
    $('header').addClass('fixed');
   
  } else {
    $('header').removeClass('fixed');
    }

} )

const btn = document.querySelector('.navbar-toggler');

btn.addEventListener('click' , (e)=> {

 if( e.target.getAttribute('class') == "bi bi-list"  ) {
  
  e.target.classList.remove('bi-list') ;
  e.target.classList.add('bi-x-square');
 }else {
  e.target.classList.remove('bi-x-square') ;
  e.target.classList.add('bi-list');
 }  
})
