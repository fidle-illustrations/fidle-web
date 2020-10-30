document.addEventListener('DOMContentLoaded', function(){
    let banner = document.getElementById('imagesection');
    let devLayer = banner.querySelector('.secondimg');
    let delta = 0;

    banner.addEventListener('mousemove', function(e){
        delta = (e.clientX - window.innerWidth / 2) * 0.5;
        devLayer.style.width = e.clientX + 1000 + delta + 'px';
    });
})