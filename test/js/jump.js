x=getValue("id");
if(x==null){
	alert("error");	
	$("ul li").hide();	
	$("ul .f_index").show();		
}else{
	a=usual_search(cateJSON,x);
	pid=cateJSON[a].parentId;
	b=a-1;
	c=Number(a)+Number(1);
	$(".f_cate").attr("href","index.html?id="+pid);
	$(".f_up").prepend(cateJSON[b].category);
	$(".f_up").attr("href","test.html?id="+cateJSON[b].ID);
	printSize(newsJSON, cateJSON[b].ID, function(data){$(".f_up span").html(data);});
	$(".f_now").prepend(cateJSON[a].category);
	$(".f_now").attr("href","test.html?id="+cateJSON[a].ID);
	printSize(newsJSON, cateJSON[a].ID, function(data){$(".f_now span").html(data);});
	$(".f_down").prepend(cateJSON[c].category);
	$(".f_down").attr("href","test.html?id="+cateJSON[c].ID);
	printSize(newsJSON, cateJSON[c].ID, function(data){$(".f_down span").html(data);});
}