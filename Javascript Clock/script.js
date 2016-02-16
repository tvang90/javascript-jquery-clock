$(document).ready(function(){
	setInterval(function(){

	// Varibles created for millsec, sec, minutes, hours	
	var clock = new Date;
	var milli = clock.getMilliseconds();
	var seconds = clock.getSeconds();
	var minutes = clock.getMinutes();
	var colors = ["red", "blue", "yellow", "black", "green"];

	// Set to html div 
	$("#seconds").text(clock.getSeconds());
	$("#minutes").text(clock.getMinutes());
	$("#hours").text(clock.getHours());

	//Change minutes to a different color when odd
	if (minutes%2==0){ 
        $("#minutes").css("color", "black");
    }
    else
    	$("#minutes").css("color", "blue");

    //change background color every 5 minutes
    // $("#clock").hover(function() {
    // var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    // $("#clock").css('background-color', randomColorChange);
    // });

	// console log
	console.log("This is the milliseconds " + milli);
	console.log("This is the seconds " + seconds);
	console.log("This is the minutes " + minutes);
	console.log("This is the hours " + hours);
	}, 100)

})



