	function play(numS,numE) {    
	    audio.currectTime = 0;
	    audio.play();
	    numS = numS + 1;
	    if(numS < numE) {
	         setTimeout("play("+numS+","+numE+")", 2000);
	    }    
	}
	
	if(f_chrome==1){	
		window.onload = function() {		
			document.body.onkeydown = function(e) {
				e = e || window.event;
				// 把键值转换成字母
				var key = String.fromCharCode(e.keyCode); 
				var dom = document.getElementById(key);
				if(document.getElementById(key).style.display=="block" || document.getElementById(key).style.display=="inline-block"){
					if(dom) {
						dom.click();
					}
				}else{
					//alert("error");	
				}
			}
		}
	}