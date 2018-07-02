// JavaScript Document
var canvasC, contextC, canvas, context, vPos, yPos, endXPos, intervalID, ball;
function init(){
	canvas = document.getElementById('canvas_1'),
    context = canvas.getContext('2d');
	
	// For the logo animation part
	canvasC   = document.getElementById("canvasCircle"); 
 	contextC  = canvasC.getContext("2d");
	
	canvasM   = document.getElementById("canvas3"); 
 	contextM  = canvasM.getContext("2d");
	
	//for the bottom half of the advertisement
	canvasD   = document.getElementById("canvas4"); 
 	contextD  = canvasD.getContext("2d");
	
	
	
	contextD.font="bold 20px verdana, sans-serif";
	contextD.fillStyle='lightblue';
	contextD.fillText("Starts Monday, January 20th, 2014", 150, 500);
	
	contextD.font="bold 15px verdana, sans-serif";
	contextD.fillstyle='blue';
	contextD.fillText("For more information visit our company website", 150, 550);
	contextD.fillText("", 50, 600);
	contextD.fillText("", 50, 625);
	
	
	
	
	
	
	<!-- ***************************** Information text ********************************-->
image = new Image();	
image.src = 'test2.jpg';
image.onload = function (e) 
		{
//var pattern = contextD.createPattern(image, 'repeat');
contextD.font="bold 30px verdana, sans-serif";
contextD.fillStyle ='lightblue';
contextD.fillText("GROUP FITNESS CHALLENGE", 120, 400);
contextD.fillText("Do you have what it takes?", 135,450);
contextD.fill();	
		};
	
<!-- ********************************************************************************* -->
	var imageObj = new Image();

      imageObj.onload = function() {
        context.drawImage(imageObj, 140, 550);
      };
      imageObj.src = 'weightloss.jpg';

<!-- ************************ Divider border ***************************************** -->
/*
contextD.beginPath();
contextD.strokeStyle = "DarkBlue";
contextD.moveTo(450,3200);
contextD.bezierCurveTo(200,125,300,125,450,700);
contextD.stroke();
*/
<!--**********************************************************************************-->

	
	
	
	
	<!-- ********************* Underline artwork of "New Year New You" *********** -->
	/*
	contextM.beginPath();
    contextM.moveTo(100, 150); // the lower the height, the higher up it goes. Higher the width, the further right it goes
	contextM.quadraticCurveTo(300, 350, 550, 150); //First 2 coordanites are the x,y of the curve point. 2nd 2 are the x,y of the end point
	
	
	contextM.lineWidth = 10;
    contextM.strokeStyle = '#486da6';
    contextM.stroke();
	*/
	<!-- **************************************************************************-->
	
	<!-- ********************* New Year New You text********************************-->
contextM.font="60px Verdana";
// Create gradient
var gradient=contextM.createLinearGradient(0,0,canvasM.width,0);
gradient.addColorStop("0","lightblue");
gradient.addColorStop("0.25","lightblue");
gradient.addColorStop("0.5","lightblue");
gradient.addColorStop("0.75","lightblue");
gradient.addColorStop("1.0","lightblue");
// Fill with gradient
contextM.fillStyle=gradient;
contextM.fillText("NEW YEAR NEW YOU",50,275); 
	
	
<!-- *************** Background image of canvas ********************* -->  
   // A3. BACKGROUND canvas filled with color.
  // context.fillStyle = "black";
  // context.fillRect(0, 0, canvas.width, canvas.height);
   context.rect(0, 0, canvas.width, canvas.height);

      // add linear gradient
      var grd = context.createLinearGradient(0, 0, canvas.width, canvas.height);
      // light blue
      grd.addColorStop(0, 'orange');
	  grd.addColorStop(0.25, 'red'); 
	  grd.addColorStop(0.5, 'darkred'); 
	  grd.addColorStop(0.75, 'grey'); 
      // dark blue
      grd.addColorStop(1, 'black');
      context.fillStyle = grd;
      context.fill();
   
   
    // add image to background
   	var img = document.createElement('img');
    img.setAttribute('src', 'fireworks.jpg');
    img.addEventListener("load", function(){
    context.drawImage(img, 0, 0, 700, 300);
  });
 <!-- *************************************************************** -->
	
	// Top half of the page rectangle
	//context.fillStyle = "#FF0000";
	//context.fillRect(0,0,700,350);
	
	

	
	
	
	
	
	
	xPos  = 50;      
	yPos  = canvasC.height/2;
	endXPos    = canvasC.width-75;
	

	
	
	
	
	
	
	
	logo(); // Used to call the logo() function that moves the logo accross the top of the page.
	
	
	
	
	
	
	
	
	
	
	
	}
addEventListener("load", init);


	// Function to move the logo accross the sreen
 function logo(){
 ball = new Image();  //create a new image object named ball
 ball.src = "logo2.jpg";  // fill image object with an image

   //draw circle function
    ball.onload = function()
   { 
      intervalID = setInterval(drawBall, 30);
  
   }
  }
  
   function drawBall()
      {
          contextC.clearRect(0,0,canvasC.width,canvasC.height);
            xPos += 3;
			
      if(xPos > endXPos) {clearInterval(intervalID)};
	  
         contextC.drawImage(ball,xPos, 30);
		 
      }








