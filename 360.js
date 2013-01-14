		
		var i = 0;
		var imageAmount = 72;
		var autospin = false;
		var tickAmount = 10;
		var imgholder = 0;
		var speeeeeed = 25;
		var mdown = false;
		
		function loadDemo(){
			 
			/*$("autoplaybutton").checked = false;
			$("speed").value = "5";
			$("ticks").value  = "10";
			$("notice").setStyle("opacity", "0");
			setTimeout("$('notice').fade([0,1]);", 1000);
			setTimeout("$('notice').fade(0);", 5000);
			setTimeout("$('notice').innerHTML = 'Click and drag the image to rotate it';", 5900);
			setTimeout("$('notice').fade(1);", 6500);
			*/
	  		imgholder = $("imgholder");
			
			
			$("control").addEvents({
            			'mousedown': function(e){
            				 e.preventDefault(); // firefox/ie crazyness
            				 autospin = false;
            				 mdown = true;
							 posXori = e.page.x;
							 
						},
						'mouseup': function(e){
								if(mdown){
							 		mdown = false;
								}
							},
						'mouseleave': function(e){
							 
							 	mdown = false;
							    
					 
							},
						'mousemove': function(e){
							if(mdown){
							 	var moveto = parseInt((e.page.x - posXori)/tickAmount);
							 	if(moveto >= 1){
							 		posXori = e.page.x;
							 		
							 		moveBack();
							 	}
							 	if(moveto <= -1){
							 	 	posXori = e.page.x;
							 		moveForward();
							 	}
						 
							}
							 
						}
					});
 
		}
 
 	function moveForward(){
 		i++;
 		if(i == imageAmount){
 			i=0;
 		}
 		imgholder.setStyle("background-position", "0px " +(-i*360)+"px" );
 	}
 	
 	 function moveBack(){
 		i--;
 		if(i == -1){
 			i = imageAmount-1;
 		}
 		 
 		imgholder.setStyle("background-position", "0px " +(-i*360)+"px");
 	}
 	
 	
 	function nextImage(){
 	 
 		i++;
 		if(i == imageAmount){
 			i=0;
 		}
 		
 		imgholder.setStyle("background-position", "0px " +(-i*411)+"px");
 		if(autospin){
 			setTimeout("nextImage();", speeeeeed);
 		}
 	}
  
 	function toggelPlay(){
 		if(!autospin){
 			autospin = true;
 			nextImage();
 			 
 		}
 		else{
 			autospin = false;
 		}
 	}
 	
 	function setSpeed(val){
 		if(val <= 0 || val >= 11){
 			alert("your val is pish man!");
 		}
 		else{
 			speeeeeed = 51 - (val*5);
 		}
 	}
 	
 	
 	function setTick(val){
 		if(val <= 0 || val >= 101){
 			alert("your val is pish man!");
 		}
 		else{
 			tickAmount = val;
 		}
 	}
 	
 	
	function chart()
	{
		imgholder.setStyle('background-image', "url(chart.png)");
	}
	function mueble360()
	{
		imgholder.setStyle('background-image', "url(mueble360vertical.jpg)");
	}
		function nexus()
	{
		imgholder.setStyle('background-image', "url(nexus.jpg)");
	}
		function nudos()
	{
		imgholder.setStyle('background-image', "url(nudos.jpg)");
	}
	