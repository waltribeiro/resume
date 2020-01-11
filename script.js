function showImage(imgName) {
    var curImage = document.getElementById('currentImg');
    var thePath = 'images/';
    var theSource = thePath + imgName;
    curImage.src = theSource;
    curImage.alt = imgName;
    curImage.title = imgName;
 }




 





 







function throttle(fn, delay) {
    let last;
    let timer;
  
    return () => {
      const now = +new Date;
  
      if (last && now < last + delay) {
        clearTimeout(timer);
  
        timer = setTimeout(() => {
          last = now;
          fn();
        }, delay);
      } else {
        last = now;
        fn();
      }
  
    };
  }
  
  function onScroll() {
    if (window.pageYOffset) {
      $$header.classList.add('is-active');
    } else {
      $$header.classList.remove('is-active');
    }
  }
  
  const $$header = document.querySelector('.js-header');
  
  window.addEventListener('scroll', throttle(onScroll, 25));
  