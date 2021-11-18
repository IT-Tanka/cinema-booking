const schemeSvg=document.querySelector('.scheme-svg');
const priceTotalTag=document.querySelector('.price-total');
const menuButton=document.querySelector('.m-menu');
const menu=document.querySelector('.menu');
let cost=800;
let totalPrice=0;

menuButton.addEventListener('click',()=>{
    menu.classList.toggle('is-open');
});

schemeSvg.addEventListener('click',(event)=>{
    if (!event.target.classList.contains('booked')){
        event.target.classList.toggle('active');
        let totalSeats=document.querySelectorAll('.active').length-1;
        console.log('totalSeats: ', totalSeats);
        totalPrice=totalSeats*cost;
        priceTotalTag.textContent=totalPrice;
    }  
});