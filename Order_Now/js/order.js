// For highilght
$('.card').click(function() {
	$(this).toggleClass('high')
	  .siblings().removeClass('high')
  });


var sum_t = 0;
var sum_b = 0;
var total = 0;
var productval = 0;

// For popover
// $('[data-toggle="popover"]').popover({
// 	template: '<div class="popover"> <div class="arrow"> </div> <h3 class="popover-header">head</h3><div class="popover-body"></div><div class="popover-footer"><a href="#" class="btn btn-info btn-sm">Close</a></div></div>'
// 	// template: '<div class="date"> <a href="#" class="btn-block">1 day</a> <a href="#" class="btn btn-info btn-block">3 days</a> <a href="#" class="btn btn-info btn-block">5 days</a></div>'
// 	// template: '<div class="popover"><div class="arrow"> </div><table><th><tr>Row1</tr><tr>Price</tr><tr>Price</tr></th><th><tr>Row1</tr><tr>Price</tr><tr>Price</tr></th><tr><td>1 day</td><td>Rs.150</td></tr></table></div>',
// 	html:true,
// });

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img1.onclick = function(){
  modal.style.display = "block";
  // modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
console.log(img2);
img2.onclick = function(){
  modal.style.display = "block";
  // modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// spinner
$(document).on('click', '.number-spinner button', function () {    
	var btn = $(this),
		oldValue = btn.closest('.number-spinner').find('input').val().trim(),
		newVal = 0;
	
	if (btn.attr('data-dir') == 'up') {
		newVal = parseInt(oldValue) + 1;
		sum_t = productval * newVal;
	} else {
		if (oldValue > 1) {
			newVal = parseInt(oldValue) - 1;
			sum_t = sum_t - productval;
		} else {
			newVal = 1;
		}
	}
	document.getElementById("ItemsTotal").innerHTML = "₹" + sum_t;
	document.getElementById("no").innerHTML = newVal;
	btn.closest('.number-spinner').find('input').val(newVal);
});

// For increasing price
function init(){
	sum_t = 0;
	sum_b = 0;
	total = 0;
	productval = 0;
	document.getElementById("no").innerHTML = 1;
	document.getElementById("slides").value=1;
	document.getElementById("ItemsTotal").innerHTML = "₹" +sum_t;
}

function calculate_t(ele , n) 
{
	var id = ele.id;
	productval=productval + n;
	// content.style.pointerEvents = "none";
	document.getElementById(id).style.pointerEvents = "none";
	// id.style.pointerEvents = "none";

	var x = document.getElementById("slides").value;
	sum_t = sum_t +n;
	total = sum_t * x ;
	document.getElementById("ItemsTotal").innerHTML = "₹" +total;
}


function calculate_b(ele , n) 
{
	var id1 = ele.id;
	productval=productval + n;
	// content.style.pointerEvents = "none";
	document.getElementById(id1).style.pointerEvents = "none";
	// id.style.pointerEvents = "none";
	var x = document.getElementById("slides").value;
	sum_b = sum_b + n;
	total = sum_b*x;
	document.getElementById("ItemsTotal").innerHTML = "₹" + total;

}

// For slide number
function mult()
{
	var x = document.getElementById("slides").value;
}

// FOR TOGGLABLE SIDEPANEL
// function openNav() {
//   document.getElementById("mySidepanel").style.width = "100px";
//   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
// }

// function closeNav() {
//   document.getElementById("mySidepanel").style.width = "0";
//    document.body.style.backgroundColor = "white";
// }

$("#click-btn").click(function(){
	$('#mySidepanel').toggleClass('nav-view');
});

// // to stop animation
// $('.carousel'). carousel({ interval: false, }); 

// // For date addition
// Date.prototype.addDay = function(days) {
//    let d = new Date(this.valueOf());
//    d.setDate(d.getDate() + days);
//    return d;
// }
// let date = new Date();
// // console.log(date.addDay(1));

// // To insert today's date
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// day = days[date.getDay()];

// var months = ["January" , "February" , "March" , "April" , "May" , "june" ,"july" , "August" , "setember" , "Octomber" ,"November" , "December"];
// month = months[date.getMonth()];

// date1 = date.getDate();


// // Get H1 of active class and add todays day
// var t = document.getElementsByClassName("active")[0];
// t1 = t.getElementsByTagName("h1");
// t1[0].innerHTML = day;						//To show day of week

// t2 = t.getElementsByTagName("p");
// t2[0].innerHTML =  date1 + " " + month;		//To show date and month



// // for try count
// var count = (function(){
// var counter = 0;
// return function(){return counter=counter+1;}
// })();

// // console.log(count());
// // console.log(date.addDay(count()));

// function displaycount(){
// 	// document.getElementById("carrier").innerHTML = count();
// 	// console.log(count());
// 	console.log(date.addDay(count()));
// }

// // To add day
// $("#next").click(function add_day(){

// 	console.log(date.addDay(1));
// 	$('.carousel-item.active').toggleClass('tommorow');
// 	console.log("add");
// });

// // To sub day
// $("#prev").click(function sub_day(){
// 	$('.carousel-item').toggleClass('yesterday');
// 	console.log("sub");
// });

// For adding Date
// To insert today's date
let date = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
day = days[date.getDay()];
 
var t = document.getElementsByClassName("today")[0];
t1 = t.getElementsByTagName("h2");
t1[0].innerHTML = day;						//To show day of week


var months = ["January" , "February" , "March" , "April" , "May" , "June" ,"July" , "August" , "September" , "Octomber" ,"November" , "December"];
month = months[date.getMonth()];
date1 = date.getDate();

t2 = t.getElementsByTagName("p");
t2[0].innerHTML =  date1 + " " + month;		//To show date and month


// To input days
var count = (function(){
var counter = 1;
return function(){return counter=counter+1;}
})();

// console.log(count());
// console.log(date.addDay(count()));


// For date addition
Date.prototype.addDay = function(days) {
   let d = new Date(this.valueOf());
   d.setDate(d.getDate() + days);
   return d;
}
// let date = new Date();
// console.log(date.addDay(1));

function displaycount(){
	// document.getElementById("carrier").innerHTML = count();
	 var c = count();
	 document.getElementById("in").innerHTML = c;
	 document.getElementById("dead").innerHTML = date.addDay(c);
	 console.log(date.addDay(c));
	 // console.log(c);
	// console.log(date.addDay(count()));
}

// To display default delivery
var t = document.getElementsByClassName("delivery")[0];
t1 = t.getElementsByTagName("h2");
add = date.addDay(7);
day1 = days[add.getDay()];
t1[0].innerHTML = day1;						//To show day of week


month = months[add.getMonth()];
date1 = add.getDate();
t2 = t.getElementsByTagName("p");
t2[0].innerHTML =  date1 + " " + month;		//To show date and month


// deadline
document.getElementById("delivery_date").innerHTML = date1 + " " + month;
// End