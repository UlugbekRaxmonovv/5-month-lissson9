const menu = document.querySelector('.menu')
const nav = document.querySelector('nav')
const logo = document.querySelector('.btn1')
// const navlogo = document.querySelector('.nav-logo')


menu.addEventListener('click', ()=>{
    nav.classList.toggle('gogle')
})
logo.addEventListener('click', ()=>{
    nav.classList.toggle('gogle')
})


// korzinka
const btn = document.querySelector('.alt1')
const content = document.querySelector('.content')
btn.addEventListener('mouseenter',()=>{
    content.style.display = 'block'
})
btn.addEventListener('click',()=>{
    content.style.display = 'none'
})


// light-dark
let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});


// backtop

window.addEventListener('scroll', function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById('backtop');
  
  function toggleBacktop() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 200
    ) {
      backtop.style.bottom = '20px';
    } else {
      backtop.style.bottom = '-50px';
    }
  }



const section =document.querySelector('.CardAll')
const loader  =document.querySelector('.all1')
const ApiUrl= 'https://fakestoreapi.com/products' 

async function good(api){
    let son = await fetch(api)
    son 
    .json()
    .then(ris => card(ris))
    .catch(irr => console.log(irr))
    .finally(()=>{
        loader.style.display = 'none'
    })

}
good(ApiUrl)

function card(son){
    console.log(son[1]);
    let fragmit = document.createDocumentFragment()
    console.log('ok');
    son.forEach(products =>{
        // console.log(products);
        const card = document.createElement('div')
        card.classList.add('hammasi')
        card.innerHTML =`
        
       <div class="hammasi" >
       <div class="hammasi-all">
           <div class="hammasi-row">
               <p class="box">Новенка</p>
           </div>
           <div class="hammasi-row" >    
           <img name ="prodact-img" data-id =${products.id}  src="${products.image}" alt="">
           </div>
           <div class="hammasi-all">
           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
           </div>
       </div>
       <p class="p-1">${products.title}
       </p>

       <div class="list">
           <div class="list-nav">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill:yellow"><path d="M5.025 20.775A.998.998 0 0 0 6 22a1 1 0 0 0 .555-.168L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107-1.491 6.452zM12 5.429l2.042 4.521.588.047h.001l3.972.315-3.271 2.944-.001.002-.463.416.171.597v.003l1.253 4.385L12 15.798V5.429z"></path></svg>
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill:yellow"><path d="M5.025 20.775A.998.998 0 0 0 6 22a1 1 0 0 0 .555-.168L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107-1.491 6.452zM12 5.429l2.042 4.521.588.047h.001l3.972.315-3.271 2.944-.001.002-.463.416.171.597v.003l1.253 4.385L12 15.798V5.429z"></path></svg>
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill:yellow"><path d="M5.025 20.775A.998.998 0 0 0 6 22a1 1 0 0 0 .555-.168L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107-1.491 6.452zM12 5.429l2.042 4.521.588.047h.001l3.972.315-3.271 2.944-.001.002-.463.416.171.597v.003l1.253 4.385L12 15.798V5.429z"></path></svg>
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill:yellow"><path d="M5.025 20.775A.998.998 0 0 0 6 22a1 1 0 0 0 .555-.168L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107-1.491 6.452zM12 5.429l2.042 4.521.588.047h.001l3.972.315-3.271 2.944-.001.002-.463.416.171.597v.003l1.253 4.385L12 15.798V5.429z"></path></svg>
             
           </div>
           <div class="list-nav">
               <span class="p">0 отзыевов </span>
               
           </div>
          

       </div>
       <h1>${products.price}</h1>
      <button class="box-all" >84 400 sum x 12 mec</button>

       <div class="all">
           <div class="all-list">
               <div class="al1">Kupite sychas</div>
           </div>
           <div class="all-list">
               <div class="al2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: white"><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle><path d="M21 7H7.334L6.18 4.23A1.995 1.995 0 0 0 4.333 3H2v2h2.334l4.743 11.385c.155.372.52.615.923.615h8c.417 0 .79-.259.937-.648l3-8A1.003 1.003 0 0 0 21 7zm-4 6h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z"></path></svg></div>
           </div>
       </div>
   </div>
        `
        fragmit.appendChild(card)
        
    });
    section.appendChild(fragmit)
}



const singlRoute = (id)=>{
window.open(`logo.html?id=${id}`, "_self")
}
section.addEventListener('click', e =>{
   if(e.target.name === 'prodact-img'){
    let id = (e.target.dataset.id);
    singlRoute(id)
   }
})


