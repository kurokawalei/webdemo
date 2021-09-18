
new WOW().init();

const list = document.querySelector('.list');
const filterBtn = document.querySelector('.filter-list');




//篩選


filterBtn.addEventListener( 'click' , function(e){
   renderHTML(e.target.dataset.value);
})




//組元素
function renderHTML(type) {

  let str = "";
  let filterAry = [];

 

  data.forEach( (item,index) =>{

    if(   item.type == type   ) {

      
    str+= ` <div class="col" data-type="${item.type}">
    <div class="card shadow-sm animate__animated animate__fadeInUp wow">
     <a href="${item.link}" target="_blank"><img src="${item.img}" class="img-fluid"></a>
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

  filterAry.push(item);

    }else if(   type == "全部"  ){

     str+=` <div class="col" data-type="${item.type}">
     <div class="card shadow-sm animate__animated animate__fadeInUp wow">
      <a href="${item.link}" target="_blank"><img src="${item.img}" class="img-fluid"></a>
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







