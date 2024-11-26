var typed = new  Typed(".txtcolor", {
    strings: ["Starbucks"],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 1000,
    loop: true,
  });
  
  function imgSlider(anything){
    document.querySelector('.Starbucks').src = anything;

}

function colorChange(color){
    const circle = document.querySelector('.circle');
    const text = document.querySelector('.txtcolor');
    const btn1 = document.querySelector('.btn');
    circle.style.background = color;
    btn1.style.background = color;
    text.style.color = color;

}
