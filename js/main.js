$(document).ready(function(){
    var pageCounter = 0;
    
    function animatePageUp(pageName, speed){
        pageName.animate({
           'top' : '-=100%' 
        },speed);
    }
    
    function animatePageDown(pageName, speed ) {
        pageName.animate({
            'top' : '+=100%'
        },speed);
    }
    
    $('.prevButton').on('click', function() {
        if(pageCounter < 11){
            animatePageUp($('#about'), 500);
            animatePageUp($('#two'), 500);
            animatePageUp($('#three'), 500);
            animatePageUp($('#four'), 500);
            animatePageUp($('#five'), 500);;
            animatePageUp($('#six'), 500);
            animatePageUp($('#seven'), 500);
            animatePageUp($('#eight'), 500);
            animatePageUp($('#nine'), 500);
            animatePageUp($('#ten'), 500);
            animatePageUp($('#eleven'), 500);
            animatePageUp($('#twelve'), 500);

            pageCounter = pageCounter + 1;
            
        }
        
        colorSwitch();
    });
    
    $('.nextButton').on('click', function() {
        if(pageCounter >= 1){
            animatePageDown($('#about'), 500);
            animatePageDown($('#two'), 500);
            animatePageDown($('#three'), 500);
            animatePageDown($('#four'), 500);
            animatePageDown($('#five'), 500);
            animatePageDown($('#six'), 500);
            animatePageDown($('#seven'), 500);
            animatePageDown($('#eight'), 500);
            animatePageDown($('#nine'), 500);
            animatePageDown($('#ten'), 500);
            animatePageDown($('#eleven'), 500);
            animatePageDown($('#twelve'), 500);
            
            pageCounter = pageCounter - 1;
        }
        
        colorSwitch();
    });
	
		$('.aboutSection').on('click', function() {
				var moveAbout = pageCounter - 0;
			
				var total = 100 * moveAbout;
			
				$('#about, #two, #three, #four, #five, #six, #seven, #eight, #nine, #ten, #eleven, #twelve').animate({'top' : "+=" + total + "%"}, 900);
				pageCounter = 0;
				colorSwitch();
			});
    $('.webSection').on('click', function() {
				var moveAbout = pageCounter - 1;
			
				var total = 100 * moveAbout;
			
				$('#about, #two, #three, #four, #five, #six, #seven, #eight, #nine, #ten, #eleven, #twelve').animate({'top' : "+=" + total + "%"}, 900);
				pageCounter = 1;
				colorSwitch();
			});
				
		$('.ModelingSection').on('click', function() {
				var moveAbout = pageCounter - 5;
			
				var total = 100 * moveAbout;
			
				$('#about, #two, #three, #four, #five, #six, #seven, #eight, #nine, #ten, #eleven, #twelve').animate({'top' : "+=" + total + "%"}, 900);
				pageCounter = 5;
				colorSwitch();
			});
    
		$('.graphicSection').on('click', function() {
				var moveAbout = pageCounter - 9;
			
				var total = 100 * moveAbout;
			
				$('#about, #two, #three, #four, #five, #six, #seven, #eight, #nine, #ten, #eleven, #twelve').animate({'top' : "+=" + total + "%"}, 900);
				pageCounter = 9;
				colorSwitch();
			});
    
        $('.contactSection').on('click', function() {
				var moveAbout = pageCounter - 11;
			
				var total = 100 * moveAbout;
			
				$('#about, #two, #three, #four, #five, #six, #seven, #eight, #nine, #ten, #eleven, #twelve').animate({'top' : "+=" + total + "%"}, 900);
				pageCounter = 10;
				colorSwitch();
			});



    function colorSwitch(){

        if(pageCounter == 0) {
            $("#body").stop().animate({"background-color" : "#d0d0d0"}, 800);
            $(".navLines").stop(false, true).animate({"background-color" : "#b5b5b5"}, 800);
            $(".span").stop().animate({"background-color" : "#737373"}, 300);
            
            scrollCheck = false;
        } else if(pageCounter >= 1 && pageCounter <= 4) {
            $("#body").stop().animate({"background-color" : "#272727"}, 800);
            $(".navLines").stop(false, true).animate({"background-color" : "#525252"}, 800);
            $(".span").stop().animate({"background-color" : "#ffffff"}, 300);
            
            scrollCheck = true;
        } else if(pageCounter >= 5 && pageCounter <= 8) {
            $("#body").stop().animate({"background-color" : "#d0d0d0"}, 800);
            $(".navLines").stop(false, true).animate({"background-color" : "#00a7ff"}, 800);
            $(".span").stop().animate({"background-color" : "#00a7ff"}, 300);
            
            scrollCheck = false;
        } else if(pageCounter >= 9 && pageCounter <= 10) {
            $("#body").stop().animate({"background-color" : "#272727"}, 800);
            $(".navLines").stop(false, true).animate({"background-color" : "#00a7ff"}, 800);
            $(".span").stop().animate({"background-color" : "#ffffff"}, 300);
            
            scrollCheck = false;
        }
    }



        colorSwitch();
    
});



















































window.onload = function(){
    
var topLine = $("#topLineNav");
var rightLine = $("#rightLineNav");
var bottomLine = $("#bottomLineNav");
var leftLine = $("#leftLineNav");
var startDiv = $("#startPage");
var homeMain = $("#homeMain");
var overlay = $("#overlayHolder");
var navLinesMenu = $("#nav-icon3");
var webContainer = $("#webContainer");
var wholePageStart = $("#wholePageStart");
	
var navTester = true;
//var paraTest = true;
	
	
	
$(".menuContainer").delay(350).css({"display" : "none"});
	

	$("#continueFirst").click(function() {
		paraTest = false;
        $(".button").css({"display" : "block"});
		startDiv.animate({"opacity" : "0"}, 1200);		
			$("html, body").css({"overflow" : "visible"});
		setTimeout(function(){ 
			startDiv.delay(1201).css({"display" : "none"});
			homeMain.css({"display" : "block"});
			homeMain.animate({"opacity" : "1"}, 1200);
		} ,1201);	
		
		setTimeout(function(){ 	
				overlay.delay(1400).animate({"opacity" : "1"}, 1200);
				homeMain.css({"display" : "block"});
				homeMain.animate({"opacity" : "1"}, 1200);
				topLine.delay(0).animate({"width" : "100%"}, 1200);
				rightLine.delay(100).animate({"height" : "100vh"}, 1200);
				bottomLine.delay(250).animate({"width" : "100%"}, 1200);
				leftLine.delay(200).animate({"height" : "100vh"}, 1200);
				$(".button").delay(1000).animate({"opacity" : "1"}, 1200);
				webContainer.delay(1400).animate({"opacity" : "1"}, 800);
				navLinesMenu.delay(650).animate({"opacity" : "1"}, 300);
				
		} ,1500);
	});


	$(".span1").css({"top": "7px"});
	$(".span2").css({"top": "18px"});
	$(".span3").css({"top": "18px"});
	$(".span4").css({"top": "29px"});
	$(".span").css({"display": "block", "position": "absolute", "height": "3px", "width": "70%", "background": "#737373", "border-radius": "9px", "opacity": "1", "left": "0", "-webkit-transform": "rotate(0deg)", "-moz-transform": "rotate(0deg)", "-o-transform": "rotate(0deg)", "transform": "rotate(0deg)", "-webkit-transition": ".25s ease-in-out", "-moz-transition": ".25s ease-in-out", "-o-transition": ".25s ease-in-out", "transition": ".25s ease-in-out"});
		
		
		$(".menuContainer").delay(350).css({"display" : "none"});
			$('#nav-icon3, .menuLinks').click(function(){
				$(this).toggleClass('open'); 
				
				if(navTester == true){
					$(".menuContainer").css({"display" : "block"});
					$("#aboutSection").delay(0).animate({"opacity" : "1"}, 300);
					$("#webSection").delay(100).animate({"opacity" : "1"}, 300);
					$("#ModelingSection").delay(200).animate({"opacity" : "1"}, 300);
					$("#graphicSection").delay(300).animate({"opacity" : "1"}, 300);
					$("#contactSection").delay(400).animate({"opacity" : "1"}, 300);
					
					$(".span1").css({"top": "18px", "width": "0%", "left": "50%"});
					$(".span2").css({"-webkit-transform": "rotate(45deg)", "-moz-transform": "rotate(45deg)", "-o-transform": "rotate(45deg)", "transform": "rotate(45deg)"});
					$(".span3").css({"-webkit-transform": "rotate(-45deg)", "-moz-transform": "rotate(-45deg)", "-o-transform": "rotate(-45deg)", "transform": "rotate(-45deg)"});
					$(".span4").css({ "top": "18px", "width": "0%", "left": "50%"});
					
					navTester = false;
				}else{
					$("#aboutSection").delay(200).animate({"opacity" : "0"}, 150);
					$("#webSection").delay(150).animate({"opacity" : "0"}, 150);
					$("#ModelingSection").delay(100).animate({"opacity" : "0"}, 150);
					$("#graphicSection").delay(50).animate({"opacity" : "0"}, 150);
					$("#contactSection").delay(0).animate({"opacity" : "0"}, 150);
					
					$(".span1").css({"top": "7px"});
					$(".span2").css({"top": "18px"});
					$(".span3").css({"top": "18px"});
					$(".span4").css({"top": "29px"});
					$(".span").css({"display": "block", "position": "absolute", "height": "3px", "width": "70%", "background": "#737373", "border-radius": "9px", "opacity": "1", "left": "0", "-webkit-transform": "rotate(0deg)", "-moz-transform": "rotate(0deg)", "-o-transform": "rotate(0deg)", "transform": "rotate(0deg)", "-webkit-transition": ".25s ease-in-out", "-moz-transition": ".25s ease-in-out", "-o-transition": ".25s ease-in-out", "transition": ".25s ease-in-out"});
					
					setTimeout(function(){
						
						$(".menuContainer").delay(350).css({"display" : "none"});
					}, 350);
					
					

					
					navTester = true;
				}
			});

		
		var hoverMain = $(".hoverMain");

	
			hoverMain.mouseenter(function(el) {
				el = $(this);
				startHoverEffect(el);
			})
			hoverMain.mouseleave(function(el) {
				el = $(this);
				stopHoverEffect(el);
			});
		


	function startHoverEffect(el) {

			el.find(".hover2").stop().animate({'left':'2px'}, 350);
			el.find(".hover3").stop().animate({'left':'0px'}, 250);

	}
	function stopHoverEffect(el) {

			el.find(".hover2").stop().animate({'left':'200px'}, 350);
			el.find(".hover3").stop().animate({'left':'-200px'}, 250);
	}


	
	
	
	
////	var firstHeight = $( window ).height() * 2;
//	
//	$(window).scroll(function() {
//			var height = $(window).scrollTop();
//			var webTop = $("#webContainer").offset().top;
//			var medelingTop = $("#modelingContainer").offset().top;
////			console.log(height);
////			console.log(webTop);
//
//			
//	});
	
	
	$(".exit, .lb-close").click(function close(){
		$("html, body").stop().css({"overflow" : "visible"});
		$(".popupOver").animate({"opacity" : "0"}, 400);
		setTimeout(function(){
			
				$(".popupOver").css({"display" : "none"});
		}, 400);
		
		
	})
	$(".ster").click(function clear(){
		$("html, body").stop().css({"overflow" : "hidden"});
		$(".sterPop").css({"display" : "block"});
		$(".sterPop").animate({"opacity" : "1"}, 400);
		
	})
	$(".best").click(function clear2(){
		$("html, body").stop().css({"overflow" : "hidden"});
		$(".bestPop").css({"display" : "block"});
		$(".bestPop").animate({"opacity" : "1"}, 400);
		
	})
	$(".dash").click(function clear(){
		$("html, body").stop().css({"overflow" : "hidden"});
		$(".dashPop").css({"display" : "block"});
		$(".dashPop").animate({"opacity" : "1"}, 400);
		
	})
	$(".day").click(function clear2(){
		$("html, body").stop().css({"overflow" : "hidden"});
		$(".dayPop").css({"display" : "block"});
		$(".dayPop").animate({"opacity" : "1"}, 400);
		
	})
	
	
	
	var mainDiv = window;
	var mainImage = document.getElementById("logoFirst");	
	var mainImage2 = document.getElementById("logoSecond");	
	var mainImage3 = document.getElementById("logoThird");
	var mainImage4 = document.getElementById("ster");
	var mainImage5 = document.getElementById("best");
	var mainImage6 = document.getElementById("dash");
	var mainImage7 = document.getElementById("tbd");
	var mainImage8 = document.getElementById("mash");
	var mainImage9 = document.getElementById("man");
	var mainImage10 = document.getElementById("gun");
	var mainImage11 = document.getElementById("car");
	var mainImage12 = document.getElementById("mtv");
	var mainImage13 = document.getElementById("twd");
    
	var imageWidth = $("#logoFirst").width();
	var width = window.innerWidth;
	var height = window.innerHeight;


	
		mainDiv.addEventListener("mousemove", function(){
//			if(paraTest == true){
				myFunction1(event);
//			}

		});

		function myFunction1(e) {
			var xPostion = e.clientX;
			var yPostion = e.clientY;
			var xImageRatio = (xPostion - (width / 2)) / 50;
			var xImageMove = xImageRatio + 1000;

			mainImage.style.left = "calc(50% - " + (((xPostion - (width / 2)) / 70) + 200) + "px)";
			mainImage2.style.left = "calc(50% - " + (((xPostion - (width / 2)) / 50) + 200) + "px)";
			mainImage3.style.left = "calc(50% - " + (((xPostion - (width / 2)) / 30) + 200) + "px)";
			mainImage4.style.left = "calc(0% + " + (((xPostion - (width / 2)) / 100)) + "px)";
			mainImage5.style.left = "calc(0% + " + (((xPostion - (width / 2)) / 100)) + "px)";
			mainImage6.style.left = "calc(0% + " + (((xPostion - (width / 2)) / 100)) + "px)";
			mainImage7.style.left = "calc(0% + " + (((xPostion - (width / 2)) / 100)) + "px)";
			mainImage8.style.left = "calc(0% + " + (((xPostion - (width / 2)) / 100)) + "px)";
			mainImage9.style.left = "calc(0% + " + (((xPostion - (width / 2)) / 100)) + "px)";
			mainImage10.style.left = "calc(0% + " + (((xPostion - (width / 2)) / 100)) + "px)";
			mainImage11.style.left = "calc(0% + " + (((xPostion - (width / 2)) / 100)) + "px)";
			mainImage12.style.left = "calc(0% + " + (((xPostion - (width / 2)) / 100)) + "px)";
			mainImage13.style.left = "calc(0% + " + (((xPostion - (width / 2)) / 100)) + "px)";

			var yImageRatio = (yPostion - (height / 2)) / 40;
			var yImageMove = yImageRatio + 1000;

			mainImage.style.top = "calc(50% - " + (((yPostion - (height / 2)) / 30) + 250) + "px)";
			mainImage2.style.top = "calc(50% - " + (((yPostion - (height / 2)) / 50) + 250) + "px)";
			mainImage3.style.top = "calc(50% - " + (((yPostion - (height / 2)) / 70) + 250) + "px)";

	//		mainImage.style.top = "calc(" + imageWidth + "-"  +  (((yPostion - (height / 2)) / 30) + 424.5) + "px)";
	//		mainImage2.style.top = "calc(" + imageWidth + "-"  + (((yPostion - (height / 2)) / 50) + 424.5) + "px)";
	//		mainImage3.style.top = "calc(" + imageWidth + "-"  + (((yPostion - (height / 2)) / 70) + 424.5) + "px)";
//		paraTest
	
		}	
	
	
	
	
	
	
	
	
}

