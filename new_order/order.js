function togglediv(id) {
    document.querySelectorAll(".TableBody").forEach(function(div) {
      if (div.id == id) {
        // Toggle specified DIV
        div.style.display = div.style.display == "none" ? "block" : "none";
      } else {
        // Hide other DIVs
        div.style.display = "none";
      }
    });
  }


  jQuery(function($) {
    $('.button-school').click(function() {
      $('.button-school').not(this).removeClass('active').html(function() {
        return $(this).html().replace('SELECTED', 'SELECT');
      });
      $(this).addClass('active').html(jQuery(this).html().replace('SELECT', 'SELECTED'));
    });
  });



// spinner
$(document).on('click', '.number-spinner button', function () {    
	var btn = $(this),
		oldValue = btn.closest('.number-spinner').find('input').val().trim(),
		newVal = 0;
	
	if (btn.attr('data-dir') == 'up') {
		newVal = parseInt(oldValue) + 1;
		// sum_t = productval * newVal;
	} else {
		if (oldValue > 1) {
			newVal = parseInt(oldValue) - 1;
			// sum_t = sum_t - productval;
		} else {
			newVal = 1;
		}
	}
	// document.getElementById("ItemsTotal").innerHTML = "₹" + sum_t;
	// document.getElementById("no").innerHTML = newVal;
	btn.closest('.number-spinner').find('input').val(newVal);
});

// TO CALCULATE TOTAL ALL
// For increasing price

var sum_t = 0;
var sum_b = 0;
var total = 0;
var productval = 0;

function init(){
	sum_t = 0;
	sum_b = 0;
	total = 0;
	productval = 0;
	// document.getElementById("no").innerHTML = 1;
	// document.getElementById("slides").value=1;
	// document.getElementById("ItemsTotal").innerHTML = "₹" +sum_t;
}

function calculate_t(ele , n) 
{
  console.log(n);
  productval=productval + n;

  /* to stop from selecting one item more than once
  var id = ele.id;
	// content.style.pointerEvents = "none";
  document.getElementById(id).style.pointerEvents = "none";
	// id.style.pointerEvents = "none";
  */

  var x = document.getElementById("slides").value;
	sum_t = sum_t +n;
  total = sum_t * x ;
  console.log(total);
	// document.getElementById("ItemsTotal").innerHTML = "₹" +total;
}

function calculate_b(ele , n) 
{
	console.log(n);
  productval=productval + n;

  /* to stop from selecting one item more than once
  var id1 = ele.id;
	// content.style.pointerEvents = "none";
	document.getElementById(id1).style.pointerEvents = "none";
  // id.style.pointerEvents = "none";
  */

	var x = document.getElementById("slides").value;
	sum_b = sum_b +n;
  total = sum_b*x;
  console.log(total);
	// document.getElementById("ItemsTotal").innerHTML = "₹" + total;

}


// For add button
// const ad = document.querySelector('.aa');
//   console.log("done");
//   const add = document.querySelector("#add");

//   add.addEventListener('click' , ()=>{
//     ad.classList.add('active');
//   })


// For add button
  $(".aa").click(function(){
    console.log('aas');
    $(this).addClass('active');
  });

  // var ad = document.getElementById("add");
  // var ad = document.getElementsByClassName("add");
  // console.log(ad);

function add(ele){
 $(ele).addClass('active');

//  $(ele).addClass('success');

 setTimeout(function(){
  $(ele).addClass("success");
  // ele.innerHTML = "<h6><i class="fa fa-pencil" title="Edit"></i> </h6>";
  // document.getElementsByClassName("add1").innerHTML="<h6>Added<h6>";
},2700);
}


// function reset(){
//   var element = document.getElementsByClassName("add1");
//   // console.log(element);
//   element.removeClass("active");
//   element.removeClass("success");
// }


$('.reset.btn.btn-primary').click(function(){
  console.log("in here");
  $('.add1').removeClass('success');
});






// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img1 = document.getElementById("myImg1");
// var img1 = document.getElementById("my1");
var img1 = document.getElementsByClassName("my");
var img2 = document.getElementById("myImg2");

// console.log(img1);

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img1.onclick = function(){
  modal.style.display = "block";
  // modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// img2.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }
// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }



  





// For reducing size of button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("").style.
//     document.getElementById("header").style.fontSize = "30px";
//   } else {
//     document.getElementById("header").style.fontSize = "90px";
//   }
// }