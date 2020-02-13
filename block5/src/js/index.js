openMenu= () => {
    
    document.getElementById('menu').classList.add('visible');
};

hideMenu = () => {
    document.getElementById('menu').classList.remove('visible');
};

document.querySelectorAll('.show-hide-buttons').forEach(item=>{
    const change = item.previousElementSibling
    const open = item.querySelectorAll('button:first-child')[0];
    const close = item.querySelectorAll('button:last-child')[0]
    open.addEventListener('click', function(){
        change.classList.add('showfulldiv');
        open.style.display='none';
        close.style.display='flex';
    })
    close.addEventListener('click', function(){
        change.classList.remove('showfulldiv');
        open.style.display='flex';
        close.style.display='none';
    })
})




function sliderControl(target){
    
    if(window.innerWidth < 768){
        
        document.querySelectorAll(`.${target}__container`).forEach(elem=>{
            elem.classList.add('swiper-container')
        })
        document.querySelectorAll(`.${target}__wrapper`).forEach(elem=>{
            elem.classList.add('swiper-wrapper')
        })
        
        document.querySelectorAll(`.${target}__list-item`).forEach(element => {
        element.classList.add('swiper-slide')
        });
        var init = true
            swiper = new Swiper ('.swiper-container',{
            slidesPerView: 'auto',
            spaceBetween: 16,
            // autoplay: {
            //     delay: 2000,
            // },
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

    }
    else{
        if(init){
            
        }
    }

}

window.onload = sliderControl('content-body')
window.addEventListener('resize', function(){
    sliderControl('content-body')
  });
