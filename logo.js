// / light-dark
let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});


// backtop



//minu//
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

//   button-bottomm

const boxNavGo =document.querySelector('.box-list')
const buttonBottomm =document.querySelector('.button-bottomm')
boxNavGo.addEventListener('click', ()=>{
  if(buttonBottom.style.display === 'none'){
    buttonBottom.style.display ='block'
  }
  else{
    buttonBottom.style.display ='none'
  }
})


const column =document.querySelector('.column')
const buttonBottom =document.querySelector('.button-bottom')
column.addEventListener('click', ()=>{
    if(buttonBottomm.style.display === 'none'){
        buttonBottomm.style.display ='block'
    }
    else{
        buttonBottomm.style.display ='none'
    }

})


const Arr =document.querySelector('.Arr')
let ApiUrl = 'https://fakestoreapi.com/products'
const loader  =document.querySelector('.all1')
async function good(api){
    let quiry =new URLSearchParams(window.location.search)
    let id = quiry.get('id');
    let son = await fetch(`${api}/ ${id}`)
    son 
    .json()
    .then(ris => NewCard(ris))
    .catch(irr =>{
        Arr.style.display = 'block'
    console.log(irr)})
    .finally(()=>{
        loader.style.display = 'none'
    })

}
good(ApiUrl)

const sectionall =document.querySelector('.products-wrappir')
function NewCard(son){
    sectionall.innerHTML=
    `<div class="containerr-list">
    <div class="containerr-link">
        <div class="all">
            <div class="book">
                <div class="book-all">
                    <p>Новенка</p>
                  </div>
                  <div class="book-all1">
                    <img src="https://asaxiy.uz/custom-assets/images/icons/heart.svg" alt="">
                   </div>
              </div>
        
              <div class="imagi">
                <img src=${son.image} alt="">
              </div>
        </div>
    </div>
    <div class="containerr-link">
        <h1>Ноутбук MSI Sword GF76, Core I7-12650H, DDR 8GB, SSD 512GB, RTX3050 6GB, 17.3"FullHD IPS</h1>
        <div class="list">
            <div class="list-nav">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill:rgb(242, 23, 26)"><path d="M5.025 20.775A.998.998 0 0 0 6 22a1 1 0 0 0 .555-.168L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107-1.491 6.452zM12 5.429l2.042 4.521.588.047h.001l3.972.315-3.271 2.944-.001.002-.463.416.171.597v.003l1.253 4.385L12 15.798V5.429z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill:rgb(242, 23, 26)"><path d="M5.025 20.775A.998.998 0 0 0 6 22a1 1 0 0 0 .555-.168L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107-1.491 6.452zM12 5.429l2.042 4.521.588.047h.001l3.972.315-3.271 2.944-.001.002-.463.416.171.597v.003l1.253 4.385L12 15.798V5.429z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill:rgb(242, 23, 26)"><path d="M5.025 20.775A.998.998 0 0 0 6 22a1 1 0 0 0 .555-.168L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107-1.491 6.452zM12 5.429l2.042 4.521.588.047h.001l3.972.315-3.271 2.944-.001.002-.463.416.171.597v.003l1.253 4.385L12 15.798V5.429z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill:rgb(242, 23, 26)"><path d="M5.025 20.775A.998.998 0 0 0 6 22a1 1 0 0 0 .555-.168L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107-1.491 6.452zM12 5.429l2.042 4.521.588.047h.001l3.972.315-3.271 2.944-.001.002-.463.416.171.597v.003l1.253 4.385L12 15.798V5.429z"></path></svg>
              
            </div>
            <div class="list-nav">
                <span class="p">0 отзыевов </span>   
            </div>
           <div class="list-all">
            <div class="list-nav">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(57, 57, 232);"><path d="M2.5 18.5C2.5 20.43 4.07 22 6 22s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337v-3.488c.244.273.509.527.813.744 1.18.844 2.617 1.098 3.918 1.098.966 0 1.853-.14 2.506-.281a3.5 3.5 0 0 0 3.264 2.265c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5a3.5 3.5 0 0 0-3.404 2.718c-1.297.321-3.664.616-5.119-.426-.666-.477-1.09-1.239-1.306-2.236C8.755 7.96 9.5 6.821 9.5 5.5 9.5 3.57 7.93 2 6 2S2.5 3.57 2.5 5.5c0 1.58 1.06 2.903 2.5 3.337v6.326c-1.44.434-2.5 1.757-2.5 3.337zm15-8c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5S16 12.827 16 12s.673-1.5 1.5-1.5zm-10 8c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5S5.173 17 6 17s1.5.673 1.5 1.5zm-3-13C4.5 4.673 5.173 4 6 4s1.5.673 1.5 1.5S6.827 7 6 7s-1.5-.673-1.5-1.5z"></path></svg>
            </div>
            <div class="list-nav">
               <p>Поделиться</p>
            </div>
           </div>

           

    </div>
    <div class="tig1"><h1>12 039 000 сум</h1></div>
           <div class="tig2"><p>1 464 800 сум x 12 мес</p></div>
           <div class="p-1"><p>Бренд:
            MSI
            Модель:_ _ _ _ 
            Sword GF76</p></div>
            <div class="tig-3">
                <div class="tig-5">
                    <p>Наличии: _ _ _ _ _</p>
                </div>
                <div class="tig-4">
                    <p>● В наличии</p>
                </div>
            </div>

            <div class="button">
                <div class="button-link">
                    <div class="button-nav">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:white"><path d="M20.995 6.903a.997.997 0 0 0-.547-.797l-7.973-4a.997.997 0 0 0-.895-.002l-8.027 4c-.297.15-.502.437-.544.767-.013.097-1.145 9.741 8.541 15.008a.995.995 0 0 0 .969-.009c9.307-5.259 8.514-14.573 8.476-14.967zm-8.977 12.944c-6.86-4.01-7.14-10.352-7.063-12.205l7.071-3.523 6.998 3.511c.005 1.87-.481 8.243-7.006 12.217z"></path></svg>
                    </div>
                    <div class="button-nav">
                      <p> Довавить корзинка</p>
                    </div>
                   
                </div>
                <div class="button-link-1">
                    <div class="button-nav">
                        <p> Кпить сейчас</p>
                    </div>
                </div>
            </div>
           <div class="tixt">
            <p>Проголосуйте:</p>
           </div>

           <div class="bottom">
            <div class="bottom-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"></path></svg>
            </div>
            <div class="bottom-all">
                <p>Яа рекомендую</p>
            </div>
            <div class="numbir">
               <div class="numbir-1">
                <p>0</p>
               </div>
            </div>
           </div>
 


  </div>

  <div class="containerr-link">
    <div class="hammasi">
        <h1>Рассрочка платежа</h1>
    <div class="containerr-link-all">
        <div class="containerr-link-nav">
            <p>3 mis</p>
        </div>
        <div class="containerr-link-nav">
            <p>6 mis</p>
        </div>
        <div class="containerr-link-nav">
            <p>12 mis</p>
        </div>
    
    </div>

   <div class="column">
    <div class="card">
        <div class="card-all">
            <p>Рассрочка от партнера UzumNasiya
            </p>
        </div>
        <div class="card-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1)"><path d="M20.995 6.903a.997.997 0 0 0-.547-.797l-7.973-4a.997.997 0 0 0-.895-.002l-8.027 4c-.297.15-.502.437-.544.767-.013.097-1.145 9.741 8.541 15.008a.995.995 0 0 0 .969-.009c9.307-5.259 8.514-14.573 8.476-14.967zm-8.977 12.944c-6.86-4.01-7.14-10.352-7.063-12.205l7.071-3.523 6.998 3.511c.005 1.87-.481 8.243-7.006 12.217z"></path></svg>
        </div>
      
    </div>
    <div class="card-all1">
        <div class="card-all2">
            <img src="https://asaxiy.uz/custom-assets/images/company/uzumnasiya.svg" alt="">
        </div>
        <div class="card-all2">
           <p>4 735 400 сум</p>
        </div>

    </div>

    <div class="button-bottom">
        <div class="button-bottom-list">
            <p>Заказате в рассрочку</p>
        </div>
    </div>
   </div>
   <div class="card-list1">
    <div class="card-all1">
        <p>Рассрочка от Asaxiy
        </p>
    </div>
    <div class="card-all1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1)"><path d="M20.995 6.903a.997.997 0 0 0-.547-.797l-7.973-4a.997.997 0 0 0-.895-.002l-8.027 4c-.297.15-.502.437-.544.767-.013.097-1.145 9.741 8.541 15.008a.995.995 0 0 0 .969-.009c9.307-5.259 8.514-14.573 8.476-14.967zm-8.977 12.944c-6.86-4.01-7.14-10.352-7.063-12.205l7.071-3.523 6.998 3.511c.005 1.87-.481 8.243-7.006 12.217z"></path></svg>
    </div>
  
</div>

<div class="box-list">
    <div class="boxt-link">
        <img src="https://asaxiy.uz/custom-assets/images/company/asaxiy.svg" alt="">
    </div>
    <div class="boxt-link">
     <p>2 131 200 сум</p>
    </div>

</div>
<div class="button-bottomm">
    <div class="button-bottom-list">
        <p>Заказате в рассрочку</p>
    </div>
</div>
    </div>
</div>
</div>
    
    `

}








