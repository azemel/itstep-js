// + фокус


// + Пробел влево

// + Двойной щелчок
//    - регистрируем отложенный обработчик 200ms
//    - повторное нажатие - если есть отложенный - убиваем, иначе регистрируем

// По цифрам

// ~ Аватоплей

window.addEventListener("load", () => {
  const slider = Slider.fromData([1, 2, 3, 4, 5, 6, 7], createSlide);
  
  // const slider2 = Slider.fromData([9, 8, 7, 6, 5 , 4, 3, 2, 1], createSlide);


  const sliderContainer = document.body.querySelector(".slider");
  slider.appendTo(sliderContainer);
  // slider2.appendTo(document.body.querySelector(".slider"));

  document.querySelector(".button_left").addEventListener("click", () => {
    slider.prevSlide();
    // slider2.prevSlide();
  });
  document.querySelector(".button_left").addEventListener("mouseenter", () => {
    slider.play(-2);
    // slider2.nextSlide();
  });

  document.querySelector(".button_left").addEventListener("mouseleave", () => {
    slider.stop();
    // slider2.nextSlide();
  });

  // document.querySelector(".button_right").addEventListener("click", () => {
  //   slider.nextSlide();
  //   // slider2.nextSlide();
  // });
  document.querySelector(".button_right").addEventListener("mouseenter", () => {
    slider.play();
    // slider2.nextSlide();
  });

  document.querySelector(".button_right").addEventListener("mouseleave", () => {
    slider.stop();
    // slider2.nextSlide();
  });


  let isSpacePressed = false;
  let delayedLeftPress = null;
  let delayedRightPress = null;
  // let delayedClick = null;


  // Клавиша отпущенаp
  sliderContainer.addEventListener("keyup", (event) => {
    console.log("keyup", event);

    switch (event.code) {
      case "ArrowLeft": {

        if (event.ctrlKey || isSpacePressed) {
          slider.firstSlide()
        } else if (delayedLeftPress === null) {
          delayedLeftPress = setTimeout(() => {
            slider.prevSlide();
            delayedLeftPress = null;
          }, 200);
        } else {
          clearTimeout(delayedLeftPress);
          delayedLeftPress = null;
          slider.firstSlide();
        }

      } break;

      case "ArrowRight": {
        
        if (event.ctrlKey || isSpacePressed) {
          slider.lastSlide()
        } else if (delayedRightPress === null) {
          delayedRightPress = setTimeout(() => {
            slider.nextSlide();
            delayedRightPress = null;
          }, 200);
        } else {
          clearTimeout(delayedRightPress);
          delayedRightPress = null;
          slider.lastSlide();
        }

        event.preventDefault();
      } break;
      
      case "Space": {
        isSpacePressed = false;
        event.preventDefault();
      } break;

    }

  });


  sliderContainer.addEventListener("keydown", (event) => {
    console.log("keyup", event);

    switch (event.code) {
      case "Space": {
        isSpacePressed = true;
        event.preventDefault();
      } break;
    }

  });

  // window.addEventListener("keypress", (event) => {
  //   console.log("keypress", event);
  // });
  
  // const logEvent = console.lo
  // mouseover
  // mouseenter
  // mousemove x N
  // mouseleave


  // sliderContainer.addEventListener("mouseover", console.log);
  sliderContainer.addEventListener("mouseenter", (event) => {
    console.log(event);

    slider.play();
  });

  sliderContainer.addEventListener("mouseleave", (event) => {
    console.log(event);
    slider.stop();
  });

  
  sliderContainer.addEventListener("mousemove", (event) => {
    // console.log(sliderContainer.offsetTop,sliderContainer.offsetLeft );
    const left = sliderContainer.offsetLeft;
  
    const center = left + sliderContainer.offsetWidth / 2;

    const dx = event.pageX - center; 

    console.log(center, event.offsetX, dx);

    // slider.play(10 * dx / center, 500);



    // console.log(event);
    // slider.stop();
  });

  // sliderContainer.addEventListener("mousemove", console.log);


  slider.goToSlide(2);
});


const createSlide = (index) => {
  return $("div", { 
      className: "slide__content", 
      style: {
        width: randomInt(150, 350) + "px",
        height: randomInt(100, 250) + "px",
      }
    }, 
    index
  );
}