// var c = document.getElementById("canvas");
// var ctx = c.getContext("2d");
//
// //making the canvas full screen
// c.height = window.innerHeight;
// c.width = window.innerWidth;
//
// //chinese characters - taken from the unicode charset
// var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
// //converting the string into an array of single characters
// chinese = chinese.split("");
//
// var font_size = 10;
// var columns = c.width/font_size; //number of columns for the rain
// //an array of drops - one per column
// var drops = [];
// //x below is the x coordinate
// //1 = y co-ordinate of the drop(same for every drop initially)
// for(var x = 0; x < columns; x++)
// 	drops[x] = 1;
//
// //drawing the characters
// function draw()
// {
// 	//Black BG for the canvas
// 	//translucent BG to show trail
// 	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
// 	ctx.fillRect(0, 0, c.width, c.height);
//
// 	ctx.fillStyle = "#0F0"; //green text
// 	ctx.font = font_size + "px arial";
// 	//looping over drops
// 	for(var i = 0; i < drops.length; i++)
// 	{
// 		//a random chinese character to print
// 		var text = chinese[Math.floor(Math.random()*chinese.length)];
// 		//x = i*font_size, y = value of drops[i]*font_size
// 		ctx.fillText(text, i*font_size, drops[i]*font_size);
//
// 		//sending the drop back to the top randomly after it has crossed the screen
// 		//adding a randomness to the reset to make the drops scattered on the Y axis
// 		if(drops[i]*font_size > c.height && Math.random() > 0.975)
// 			drops[i] = 0;
//
// 		//incrementing Y coordinate
// 		drops[i]++;
// 	}
// }
//
// setInterval(draw, 44);
$(document).ready(function() {
  // Projects on hover display caption
  $("[rel='tooltip']").tooltip();

  $("#projects-nav").click(function () {
        $('html, body').animate({
            scrollTop: $("#section-a").offset().top - 50
        }, 3750);
    });

    $("#next").click(function () {
          $('html, body').animate({
              scrollTop: $("#section-a").offset().top - 50
          }, 3750);
      });

    //
    $("#home-nav").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 3200);
    });

  $('.thumbnail').hover(
    function() {
      $(this).find('.caption').slideDown(250); //.fadeIn(250)
    },
    function() {
      $(this).find('.caption').slideUp(250); //.fadeOut(205)
    }
  );


  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  };

  window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };

  // Modal Animation start

  // Get the modal element
  var modal = document.getElementById('simpleModal');
  var modal2 = document.getElementById('simpleModal2');
  // Get open modal button
  var modalBtn = document.getElementById('modalBtn');
  // Get close button
  var closeBtn = document.getElementsByClassName('closeBtn')[0];
  var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];
  // Listens for open click
  modalBtn.addEventListener('click', openModal);

  // Listens for close click
  closeBtn.addEventListener('click', closeModal);
  closeBtn2.addEventListener('click', closeModal2);
  // Listen for outside clicks
  window.addEventListener('click', clickOutside);

  // Function to open modalBtn
  function openModal() {
    modal.style.display = 'block';
  }

  // Function to close modalBtn
  function closeModal() {
    $('#simpleModal').modal('hide');
  }

  function closeModal2() {
    $('#simpleModal2').modal('hide');
  }

  // Function to close modalBtn if clicked outside
  function clickOutside(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }

  // Modal animation end

});
