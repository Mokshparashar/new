function toggleUl(e) {
  for (let i = 0; i < 17; i++) {
    let heading = document.getElementsByTagName("h4")[i];
    if (e.target == heading) {
      let ulr = document.getElementsByTagName("ul")[i - 1];
      let articleBox = document.querySelectorAll(".article-box")[i];
      articleBox.classList.toggle("ul");
      ulr.classList.toggle("ul-2");
    }
  }
}

addEventListener("click", toggleUl);



const article = document.getElementsByTagName('article')[0]
const hamburger = document.querySelectorAll('.bx-menu')[0]
const container = document.querySelectorAll('.container')[0]
console.log(container);
function sidebarToggle(e) {
  
  if(e.target == hamburger){
    article.classList.toggle('article-hide')
    article.classList.toggle('article-show')
    container.classList.toggle('container-widthMax')
    container.classList.toggle('container-widthMin')
    article.style.overflowY = 'hidden'
    console.log('hello');
  }
}

addEventListener('click',sidebarToggle)



