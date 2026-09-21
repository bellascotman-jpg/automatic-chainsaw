const progress=document.getElementById('progress');const year=document.getElementById('year');
window.addEventListener('scroll',()=>{const h=document.documentElement;const max=h.scrollHeight-h.clientHeight;progress.style.width=max>0?`${(h.scrollTop/max)*100}%`:'0%'});if(year)year.textContent=new Date().getFullYear();
