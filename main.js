const burgerBtn = document.querySelector('.burger-menu')
const menu = document.querySelector('.menu__active')
const closeBtn= document.querySelector('.close-btn')
const popularBtn= document.querySelector('.popular__btn-group')
const peopleBtn= document.querySelector('.people__btn-group')
const sellerBtn= document.querySelector('.seller__btn-group')
const sellerItems= document.querySelector('.seller__items')
const sliderLine= document.querySelector('.slider__Line')
const select= document.querySelectorAll('.select1')
const sliderLine1= document.querySelector('.slider__Line1');
let offset=6
let offset1=-630
burgerBtn.addEventListener('click',function(){
    menu.classList.add('active')
    document.body.classList.add("overflow-hidden")
})
closeBtn.addEventListener('click',function(){
    menu.classList.remove('active')
    document.body.classList.remove("overflow-hidden")
})
popularBtn.addEventListener('click',function(){
    offset+=-321
    if(offset<-642){
        offset=6
    }
    sliderLine.style.left=offset+"px"
})
peopleBtn.addEventListener('click',function(){
    offset1+=325
    if(offset1>76){
        offset1=-630
    }
    sliderLine1.style.right=offset1+"px"
})
sellerBtn.addEventListener('click',function(){
   sellerItems.classList.toggle('active')
})
select.forEach(item=>(item.addEventListener("click",function(){
    
  if(item.getAttribute('src')=="img/select1.svg"){
    item.setAttribute('src',"img/close.png")
  }
  else{
    item.setAttribute('src',"img/select1.svg")
  }
    const parent=item.parentNode;
    parent.parentNode.classList.toggle('active')
})))