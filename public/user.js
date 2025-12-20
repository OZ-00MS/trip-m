const pages = document.querySelectorAll('.page');
let current = 0;

function showPage(index){
  pages.forEach(p => p.classList.remove('active'));
  pages[index].classList.add('active');
  current = index;
}

// Buttons
document.getElementById('toPage2').onclick = () => showPage(1);
document.getElementById('toPage3').onclick = () => showPage(2);

// Arrow buttons
document.querySelectorAll('.backArrow').forEach(btn=>{
  btn.addEventListener('click', ()=>{ if(current>0) showPage(current-1); });
});
document.querySelectorAll('.nextArrow').forEach(btn=>{
  btn.addEventListener('click', ()=>{ if(current<pages.length-1) showPage(current+1); });
});
