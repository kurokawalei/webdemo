$(window).load((function(t){window.setTimeout((function(){$("#warp").addClass("animate__fadeIn animate__animated").css("opacity","1"),$("#loading").css("display","none")}),1500)})),(new WOW).init();const list=document.querySelector(".list"),filterBtn=document.querySelector(".filter-list");function renderHTML(t){let e="",n=[];data.forEach(((a,i)=>{a.type==t?(e+=` <div class="col" data-type="${a.type}">\n    <div class="card shadow-sm animate__animated animate__fadeInUp wow">\n     <a href="${a.link}" target="_blank" title="${a.name}"><img src="${a.img}" class="img-fluid"></a>\n      <div class="card-body">\n        <p class="card-text">${a.name}</p>\n        <div class="d-flex justify-content-center align-items-center">\n          <div class="btn-group">\n            <a target="_blank" href="${a.link}" class="btn-style btn btn-sm btn-outline-secondary" >連結</a>          \n          </div>\n        \n        </div>\n      </div>\n    </div>\n  </div>`,n.push(a)):"全部"==t&&(e+=` <div class="col" data-type="${a.type}">\n     <div class="card shadow-sm animate__animated animate__fadeInUp wow">\n      <a href="${a.link}" target="_blank" title="${a.name}"><img src="${a.img}" class="img-fluid"></a>\n       <div class="card-body">\n         <p class="card-text">${a.name}</p>\n         <div class="d-flex justify-content-center align-items-center">\n           <div class="btn-group">\n             <a target="_blank" href="${a.link}" class="btn-style btn btn-sm btn-outline-secondary" >連結</a>          \n           </div>\n         \n         </div>\n       </div>\n     </div>\n   </div>`)})),list.innerHTML=e}filterBtn.addEventListener("click",(function(t){if("UL"==t.target.nodeName)return!1;renderHTML(t.target.dataset.value)})),renderHTML("全部"),$(window).scroll((function(){let t=$(document).height();$(window).scrollTop()>t/2?$("header").addClass("fixed"):$("header").removeClass("fixed")}));const btn=document.querySelector(".navbar-toggler");btn.addEventListener("click",(t=>{"bi bi-list"==t.target.getAttribute("class")?(t.target.classList.remove("bi-list"),t.target.classList.add("bi-x-square")):(t.target.classList.remove("bi-x-square"),t.target.classList.add("bi-list"))}));