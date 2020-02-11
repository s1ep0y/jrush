console.log('works here heeh')

openMenu= () => {
    
    document.getElementById('menu').classList.add('visible');
};

hideMenu = () => {
    
    document.getElementById('menu').classList.remove('visible');
};

showText = () =>{
    document.getElementById('header-text-control').classList.add('showtext');
    document.getElementById('read-more').style.display='none';
    document.getElementById('read-less').style.display='flex';
}

hideText = () =>{
    document.getElementById('header-text-control').classList.remove('showtext');
    document.getElementById('read-less').style.display='none';
    document.getElementById('read-more').style.display='flex';
}