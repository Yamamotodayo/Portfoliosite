'use strict';

// ページトップまでスクロール
// let gotoTop = document.getElementById('gotoTop')

//   gotoTop = addEventListener('click', ScrollToTop);

//   function ScrollToTop() {
//     scroll({
//       top: 0,
//       behavior: 'smooth'
//     });
//   }


// ページトップまでスクロール
let gotoTop = document.getElementById('gotoTop')

gotoTop.addEventListener('click', ScrollTop);

function ScrollTop() {
  let targetId = document.getElementById('top')
      
  console.log(targetId);

  targetId.scrollIntoView({
    behavior: 'smooth'
  })
}


// コンテンツまでスクロール
let gotoContact = document.getElementById('gotoContact')
let gotoWorks = document.getElementById('gotoWorks')
let gotoAbout = document.getElementById('gotoAbout')

  gotoContact.addEventListener('click', toScroll);
  gotoWorks.addEventListener('click', toScroll);
  gotoAbout.addEventListener('click', toScroll);


  function toScroll(e) {
    e.preventDefault()

    let targetId = this.getAttribute('id').replace(/^goto/, ''),
        targetElem = document.getElementById(targetId);

        // targetId = this.getAttribute('href').replace(/^#/, ''),
        // targetElem = document.getElementById(targetId);

          console.log(this);
          console.log(targetId);
          console.log(targetElem);

    targetElem.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center'
    });
  }