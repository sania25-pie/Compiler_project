function scrollAppear() {
    var introText = document.querySelector('.side-text');
    var sideImage = document.querySelector('.sideImage');
    var introPosition = introText.getBoundingClientRect().top;
    var imagePosition = sideImage.getBoundingClientRect().top;
    
    var screenPosition = window.innerHeight / 1.2;
  
    if(introPosition < screenPosition) {
      introText.classList.add('side-text-appear');
    }
    if(imagePosition < screenPosition) {
      sideImage.classList.add('sideImage-appear');
    }
  }
  
  window.addEventListener('scroll', scrollAppear);
  
  // For switching between navigation menus in mobile mode
  var i = 2;
  function switchTAB() {
      var x = document.getElementById("list-switch");
      if(i%2 == 0) {
          document.getElementById("list-switch").style= "display: grid; height: 50vh; margin-left: 5%;";
          document.getElementById("search-switch").style= "display: block; margin-left: 5%;";
      }else {
          document.getElementById("list-switch").style= "display: none;";
          document.getElementById("search-switch").style= "display: none;";
      }
      i++;
  }
  
  // For LOGIN
  var x = document.getElementById("login");
  var y = document.getElementById("register");
  var z = document.getElementById("btn");
  var a = document.getElementById("log");
  var b = document.getElementById("reg");
  var w = document.getElementById("other");
  
  function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
    w.style.visibility = "hidden";
    b.style.color = "#fff";
    a.style.color = "#000";
  }
  
  function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
    w.style.visibility = "visible";
    a.style.color = "#fff";
    b.style.color = "#000";
  }

// side menu

  function sideMenu(side) {
    var menu = document.getElementById('side-menu');
    if(side==0) {
      menu.style = 'transform: translateX(0vh); position:fixed;';
    }
    else {
      menu.style = 'transform: translateX(-100%);';
    }
    side++;
  }
  

//conuting boxes



  let count = 1;
  const display = document.getElementById('counter');

  const interval = setInterval(()=>{
    display.textContent = count;
    count++;

    if(count>154){
      clearInterval(interval);
    }
  },10);

  //second div
  
  let count2 = 1;
  const display2 = document.getElementById('counter2');

  const interval2 = setInterval(()=>{
    display2.textContent = count2;
    count2++;

    if(count2>62){
      clearInterval(interval2);
    }
  },10);

  let count3 = 1;
  const display3 = document.getElementById('counter3');

  const interval3 = setInterval(()=>{
    display3.textContent = count3;
    count3++;

    if(count3>56){
      clearInterval(interval3);
    }
  },10);

  let count4 = 1;
  const display4 = document.getElementById('counter4');

  const interval4 = setInterval(()=>{
    display4.textContent = count2;
    count4++;

    if(count4>27){
      clearInterval(interval4);
    }
  },10);


  //for more button

  
    document.getElementById('toggle').addEventListener('click',function(){
      const moreBoxes = document.querySelector('.more-boxes');
      moreBoxes.style.display = moreBoxes.style.display === 'none' ? 'block' : 'none';
      this.textContent = moreBoxes.style.display === 'none' ? 'More' : 'Less';
        });
  