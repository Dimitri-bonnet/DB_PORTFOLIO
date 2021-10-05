
class SliderDrag {
    constructor() {
      this.slideBar = document.querySelector('.slideBar__bar')
      this.slideShow = document.querySelector(".slideshow")
    }
  
    init() {
        console.log("init sliderDrag");
        const slider = document.querySelector('.slideshow-container')
        const slideBar = document.querySelector(".slideBar__bar")
        let holding = false;
        let firstClickX;
        let alreadyLeftScrolled;
        let velocity;
        let rafID;
        let test;
        /*  */
        const start = slider.offsetWidth
        const all = this.slideShow.offsetWidth
      /*   console.log(all); */
        const startPourcent = start * 100 / all
    /*     console.log(startPourcent); */
        /* this.slideBar.style.background ="#009fe3";  */
        this.slideBar.style.width = `${startPourcent}%`;
        /*  */
        slider.addEventListener('mousedown', e => {
          holding = true;
          firstClickX = e.pageX - slider.offsetLeft;
          alreadyLeftScrolled = slider.scrollLeft;
          stopTransition()
        })
        slider.addEventListener('mousemove', e => {
          if(!holding) return;
          /*  */
          const calc = (slider.scrollLeft * 100)  / all
          const r = (calc + startPourcent);
          this.slideBar.style.width = `${r}%`;
          /*  */
          const x = e.pageX - slider.offsetLeft;
          const scrolled = (x - firstClickX) * 2;
          const prevScrollLeft = slider.scrollLeft
          slider.scrollLeft = alreadyLeftScrolled - scrolled;
          velocity = slider.scrollLeft - prevScrollLeft;
        })
        
        slider.addEventListener('mouseup', () => {
          holding = false;
          startTransition()
        })
        slider.addEventListener('mouseleave', () => {
          holding = false;
        
        })
        function startTransition(){
          stopTransition();
          rafID = requestAnimationFrame(decreasingTransition);
 
        }
        function stopTransition(){
          cancelAnimationFrame(rafID)
        }

        function decreasingTransition(){
          slider.scrollLeft += velocity;
          velocity *= 0.95;
          if(Math.abs(velocity) > 0.5){
            rafID = requestAnimationFrame(decreasingTransition)
          }
          barTransition(slider.scrollLeft)
        }

        function barTransition(scroll){
          /* console.log(scroll); */
          const calc = (scroll * 100) / all
          const r =  calc + (start * 100 / all)
         /*  console.log(calc);
          console.log(r); */
          slideBar.style.width = `${r}%`;
          
        }




        slider.addEventListener('touchstart', e => {
          holding = true;
          // pageX => la largeur entre mon click et le DOCUMENT
          firstClickX = e.targetTouches[0].pageX - slider.offsetLeft;
          alreadyLeftScrolled = slider.scrollLeft;
          stopTransition()
        })
        slider.addEventListener('touchend', () => {
          holder = false;
          startTransition()
        })
        slider.addEventListener('touchmove', e => {
          if(!holding) return;
          const x = e.targetTouches[0].pageX - slider.offsetLeft;
          console.log(x);
          const scrolled = (x - firstClickX) * 2;
          const prevScrollLeft = slider.scrollLeft;
          slider.scrollLeft = alreadyLeftScrolled - scrolled;
          velocity = slider.scrollLeft - prevScrollLeft;
        })
    }
}

