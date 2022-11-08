const inputNum = document.getElementById('quantity');
const plus  = document.getElementById('plus');
const minus = document.getElementById('minus');
const mainImg = document.getElementById('mainImg');
const cartIcon = document.getElementById('cartIcon');
const cartBody = document.getElementById('cartBody');
const itemsNum = document.getElementById('itemsNum');
const addBtn = document.getElementById('add');
const items = document.getElementById('items');
const empty = document.getElementById('empty');
const removeBtn = document.getElementById('remove');

const cartItems = [];

plus.onclick = () => {
    inputNum.stepUp(1)
}
minus.onclick = () => {
    if(inputNum.value == 0) return ;
    inputNum.stepUp(-1);   
}

let currentInd = 0;
let nextInd = currentInd + 1;
let prevInd = currentInd - 1;

$('.popup-nav-next').on('click',function(){ next('.popup-slid-ind') })
$('.popup-nav-prev').on('click', function(){ prev('.popup-slid-ind') })
$('.popInd').on('click',function(){ direct(this) })

$('.main-nav-next').on('click',function(){ next('.main-slid-ind') })
$('.main-nav-prev').on('click', function(){ prev('.main-slid-ind') })
$('.headInd').on('click',function(){ direct(this) })

function next(indicators) {
    let indArr = $(indicators).children();
    if(!(nextInd < indArr.length)) return ;
    let element = $(indicators).children()[nextInd];
    let newCurrent = $(element).data('current');
    $($(element).data('src')).addClass('active').siblings().removeClass('active');
    $(element).addClass('active').siblings().removeClass('active');
    updateSlider(newCurrent)
    
}
function prev(indicators) {
    if(!(prevInd >= 0)) return ;
    let element = $(indicators).children()[prevInd];
    let newCurrent = $(element).data('current');
    $($(element).data('src')).addClass('active').siblings().removeClass('active');
    $(element).addClass('active').siblings().removeClass('active');
    updateSlider(newCurrent)
}

function direct(elem) {
    $(elem).addClass('active').siblings().removeClass('active');
    $($(elem).data('src')).addClass('active').siblings().removeClass('active');
    let newCurrent = $(elem).data('current');
    updateSlider(newCurrent);
    
}
function updateSlider(current) {
    currentInd = current ;
    nextInd = current + 1 ;
    prevInd = current - 1 ;
}



cartIcon.onclick = e => {
    e.preventDefault();
    e.stopPropagation();
    cartBody.classList.toggle('active')
    
}
cartBody.onclick = e => {
    e.stopPropagation()
}



addBtn.onclick = ()=>{
    const amount = inputNum.value;
    if(amount == 0 ) return ;
    addItem(125 , +amount);
    setIcon();
    itemsNum.classList.add('active');
    items.classList.add('active');
    empty.classList.remove('active');
}

removeBtn.onclick = () => {
    cartItems.splice(0,cartItems.length);
    setIcon();
}

window.onclick = function(){
    cartBody.classList.remove('active');
}

$('#menueOpenBtn').on('click',function() {
    $('.mobile-menue').addClass('active')
})
$('#menueCloseBtn').on('click',function() {
    $('.mobile-menue').removeClass('active')
})

$('.mobile-menue').on('click',function() {
    $(this).removeClass('active')
})
$('.mobile-menue .menue').on('click',function(e) {
    e.stopPropagation()
})

$('.header-content .main-slider').on('click',function() {
    if(window.innerWidth <768) return ;
    $('.img-gallery-popup').addClass('active animate__zoomIn')
})
$('.img-gallery-popup , .img-gallery-popup .close-icon').on('click',function() {
     $('.img-gallery-popup').removeClass('active')
})
$('.img-gallery-popup .gallery').on('click',function(e) {
    e.stopPropagation()
})

function addItem (cost , amount) {
    const newItem = {
        img : 'images/image-product-1-thumbnail.jpg' , 
        desc : `Fall Limited Edition Sneakers $${cost.toFixed(2)} x ${amount} $${(cost * amount).toFixed(2)} ` , 
        cost , 
        amount ,
    }
    cartItems.push(newItem);
}

function setIcon(){
    if(cartItems.length === 0) {
        itemsNum.classList.remove('active');
        empty.classList.add('active');
        items.classList.remove('active');
    }else {
        itemsNum.innerText = cartItems.length ;
        itemsNum.classList.add('active');
        items.classList.add('active');
        empty.classList.remove('active');
    }
}
