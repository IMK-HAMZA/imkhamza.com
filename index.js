//  header respnsive butto

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click",()=>{
  headerElem.classList.toggle("active");
});


// creating portfolio tab component

const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const p_img_elem = document.querySelectorAll('.img-overlay'); 



p_btns.addEventListener('click',(e)=>{
const p_btn_clicked = e.target;
if(!p_btn_clicked.classList.contains("p-btn"))  return;
p_btn.forEach((curElm)=>curElm.classList.remove("p-btn-active"));
p_btn_clicked.classList.add("p-btn-active");

// to find the number in data attr
const btn_num = p_btn_clicked.dataset.btnNum;
const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

p_img_elem.forEach((currElm)=>currElm.classList.add("p-image-not-active"));

img_active.forEach((curElm)=>curElm.classList.remove("p-image-not-active"));
});

// service review

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
        delay :2000,
        diableOnInterraction:false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// scrol section

const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");

const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style");
scroollElement.innerHTML=`<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;
footerElem.after(scroollElement);
const scrollTop = () => {
  heroSection.scrollIntoView({behaviour:"smooth"});
};
scroollElement.addEventListener("click",scrollTop);







// sticky nav bar API 
const observer = new IntersectionObserver((entries)=>{
  const ent =entries[0];
!ent.isIntersecting? document.body.classList.add("sticky") : document.body.classList.remove("sticky");
},{root:null , threshold:0}
);
observer.observe(heroSection);



// //  increment har bar hoga jab b aoo 



const worksection  = document.querySelector('.section-work-data');
 
const workObserver  = new IntersectionObserver((entries,Observer)=>{
  const [entry] =entries;
  console.log(entry);
  if(!entry.isIntersecting) return;

  const counterNumber = document.querySelectorAll('.counter-numbers');
  const speed = 200;
  
  counterNumber.forEach((curElem)=>{
  
    const updateNumber =()=>{
  
      const targetNumber = parseInt(curElem.dataset.number);
      console.log(targetNumber);
       const initialNumber =parseInt(curElem.innerHTML);
  console.log(initialNumber);
       const incrementNumber =Math.trunc(targetNumber/speed);
       console.log(incrementNumber);
       if (initialNumber<targetNumber) {
        curElem.innerHTML=`${initialNumber+incrementNumber} +`;
        setTimeout(updateNumber, 15);
       }
    }
  updateNumber();
  
  });
  observer.unobserve(workSection);


 

},
{
  root:null,
  threshold:0,
}

)

workObserver.observe(worksection);



// responsive review section



const myjsmedia =(widthsize)=>{
 
 
 
  if (widthsize.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay:{
          delay :2000,
          diableOnInterraction:false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  else{
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay:{
          delay :2000,
          diableOnInterraction:false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}



const widthsize = window.matchMedia("(max-width:829px)");
myjsmedia(widthsize);
widthsize.addEventListener("change",myjsmedia);

// smooth scrolling effects

const portfolioSec = document.querySelector(".section-portfolio");
const contactSec = document.querySelector(".section-contact");

document.querySelector(".portfolio-link").addEventListener("click", () => {
  portfolioSec.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".hireme-btn").addEventListener("click", (e) => {
  e.preventDefault();
  contactSec.scrollIntoView({ behavior: "smooth" });
});




















