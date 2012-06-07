function getValue(str){
	var url = location.href;
	var theRequest = new Object();
	var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
	if (url.indexOf("?") != -1) {
		for (var i = 0; i < paraString.length; i++) {
			theRequest[paraString[i].split("=")[0]] = unescape(paraString[i].split("=")[1]);
		}
	}
	x=theRequest[str];
	return x;
}

function usual_search(data,key){
	var m=data.length;
	for(i=0;i<m;i++){
		if(data[i].ID==key){
			return i
		}
	}
}

function printSize(data, pid, callback){
		var comments=[];
		for(var i=0, len=newsJSON.length; i<len; i++){
			if(newsJSON[i].categoryId==pid){
				comments.push(newsJSON[i]);
			}	
		}
		
		var xx = comments.length;
		if(callback) callback(xx);
}