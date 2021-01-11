const titleTyping = ()=> {
  ityped.init("#site_title", {
    strings: ['Hello World!' ,'This is my portfolio @ Ryuya Sasaki'],      
    startDelay: 200,                                                 
    typeSpeed: 80,                                              
    loop: false,
    backSpeed:  80,
    backDelay:  600,
    showCursor: true,
    cursorChar: "|",
  })
}

titleTyping();

let toggleVanish = ()=> {
  document.getElementsByClassName('ityped-cursor')[0].classList.toggle('opacity_none');
} 
setInterval(toggleVanish, 500);