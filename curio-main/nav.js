let i=0;
document.querySelector("#toggle-btn").addEventListener('click',()=>{
    const navLinks = document.getElementsByClassName("navbar-links");
    if(i==0){
    navLinks[0].classList.add('show');
    i=1;
    }else{
      navLinks[0].classList.remove('show');
      i=0;
    }
  });
  
  window.addEventListener('resize', () => {
    const navLinks = document.getElementsByClassName("navbar-links");
    if(navLinks[0].classList.contains('show')){
      navLinks[0].classList.remove('show');
    }
  });