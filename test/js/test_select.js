		
$(function() {
	
	//错误返回按钮延时时间；
	var dNum= 6000;	
	var testSize=25;

	var t1= new Date().getTime(); //初始化时间
    var index = 0;	//数组指针初始化；
	//del:120528
//	var index_ = "";
//	var errors_1st = [];
//	var round=1;
	var getError="";
	var errors = [];	//错误返回按钮延时时间；
	var eNum = 0;	//错误计数初始化；
	$("#ul").show();	//显示全局
	//调试开关；
	var debug="0";
	if(debug=="1"){
		dNum=0;	
	}
	
	var org_comments=[];
	org_comments=comments;
	comments=randomOrder(comments);
	if(testSize>0){
		var comments2 = [];
		for(i=0;i<=testSize-1;i++){
			comments2.push(comments[i]);
		}
		comments = comments2;
	}
	act(); //进入函数act
	function act() {
		//分段重复函数
		
		if ((index <= 5 && eNum == 3)) {

            alert("Repeat");
            index = 0;
            //			var index_ = "";
            errors = [];
            eNum = 0;
            $("span.sp3").html(eNum);

        }
        if ((index > 5 && index <= 10 && eNum == 5)) {

            alert("Repeat");
            index = 0;
            //			var index_ = "";
            errors = [];
            eNum = 0;
            $("span.sp3").html(eNum);

        }
        if ((index > 10 && index <= 15 && eNum == 7)) {

            alert("Repeat");
            index = 0;
            //			var index_ = "";
            errors = [];
            eNum = 0;
            $("span.sp3").html(eNum);

        }

		if (index<comments.length) {			//如果指针在范围内；
			$(".e_element").hide();				//隐藏所有元素；
			$(".en").html("");					//初始化英文部分；
			$(".cn").html("");					//初始化中文部分；
			sen1(comments[index]['subTitle']);			//调用句库函数；
			$("span.sp1").html(index+1);		//调整当前数值；
			$("span.sp2").html(comments.length);//显示总数；

			$("lib.b").show();					//输入框显示		
			$("textarea.b").val("");			//输入框清空			
			
			q=comments[index]['q'];
			q_en=comments[index]['q_en'];
			if(q_en==""){
				q_en=q;
			}
			btnQ="Submit";
			s_audio="";
			s_audio=comments[index]['subTitle']+".mp3";
			$("audio").attr({"src": ""});
			$("audio").attr({"src": "../audio/"+s_audio});
			audio=document.getElementById('player') //初始化音频路径
			$(".q_en").html(q_en);//问题区赋值
			$(".f_subject").html(comments[index]['subject']);//问题区赋值
			$(".f_subTitle").html(comments[index]['subTitle']);//答案区赋值
			$(".sen .en").html(comments[index]['en']);//问题区赋值
			$(".sen .cn").html(comments[index]['cn']);//答案区赋值
			$(".btnQ").html(btnQ);
			$(".e_act1").show();				//显示：act1元素；
			

			var arrSelect=[];	//定义select数组；
			for(var i=0, len=org_comments.length; i<len; i++){	//取出当前指针的值。（同时取出与当前指正重复的值。）
				if(org_comments[i]['subTitle']!=comments[index]['subTitle']){
					arrSelect.push(org_comments[i]);
				}	
			}
			arrSelect=randomOrder(arrSelect);	//乱序数组
			

			var arrSelect2 = [];	//定时数组2

			//select num
			var s_num=6;
			for(i=0;i<=s_num;i++){	//获得目标数组-1的新数组
				arrSelect2.push(arrSelect[i]);
			}
			arrSelect2.push(comments[index]);	//新数组添加当前指针的值。
			arrSelect = randomOrder(arrSelect2);	//乱序数组。

			$(".f_btnSelect").hide();
			for(i=0;i<=s_num+1;i++){
				$(".f_btnNo"+(i+1)).html(arrSelect[i].subject); //赋值
				$(".f_btnNo"+(i+1)).attr("f_a",arrSelect[i].subTitle);
				$(".f_btnNo"+(i+1)).show();
			}
			
			play3(1);
//			$("textarea.b")[0].focus();			//输入框焦点
			
            index++;							//指针递进
        }
		else{
			if(errors.length > 0){				//数组【错误列表】不为空
				comments = errors;				//题库赋值错误列表
				comments=randomOrder(comments);
				errors = [];					//清空：错误列表；
				index = 0;						//初始化：指针
				eNum = 0;						//初始化：错误计数
				$("span.sp3").html('');			//清空：页面错误计数
				act();							//运行函数；
			}else{
				t2=new Date().getTime()-t1;
				alert(MillisecondToDate(t2));	
				window.location=jumpUrl+"&title="+MillisecondToDate(t2)+"&error="+getError;
			}
		}

    }
		
	function act2(){
		
//		$(".sharewith.a").hide();
//		$(".sharewith.e").hide();
//		$(".sharewith.en").hide();
//		$(".sharewith.cn").hide();
//		$("div.lib").show();
//		$("a.btnP").hide();
//		$("a.btn2").hide();
//		$("a.btn3").show();	
//		$("btnP").hide();	
		$(".e_element").hide();				//隐藏所有元素；
		$("textarea.b").val("");
		$(".e_act2").show();				//显示：act2元素；
		$("textarea.b")[0].focus();	


	}	
	function act3(){
		
		$(".e_element").hide();				//隐藏所有元素；
		$(".sharewith.a").show();
		$(".sharewith.e .e").html($("textarea.b").val());
//		$(".sharewith.e").show();
//		$(".sharewith.en").show();
//		$(".sharewith.cn").show();
		$("textarea.b").val("");
//		$("div.lib").hide();
//		$("a.btn1").hide();
		$("a.btnP").show();
		audio=document.getElementById('player');
		play3(1);
		//audio.play();
		$(".e_act3").show();				//显示：act3元素；
		$("a.btn2").hide().delay(dNum).fadeIn();
		$("a.btn3").hide();	


	}	
	$("a.btnCn").click(function(){
		$(".sharewith .q").parent().show();
		
	});	    $(".f_btnSelect").click(function() {
		$(".f_slipt").hide();
		//alert($(this).attr("f_a"));
		if($(this).attr("f_a")==$(".f_subTitle").html()){
        //if ($("textarea.b").val().replace(/>/g,"&gt;").toLowerCase() == $(".a .a").html().toLowerCase()) {
			act();
        } else {
				act3();
				eNum+=1
				errors.push(comments[index-1]);
	//			console.log(errors);
	//			if(index_==""){index_=comments[index-1]['id']}else{index_+=","+comments[index-1]['id']};
				$("span.sp3").html(eNum);
			
        };
    });
	
	$("a.btn2").click(function() {
		act()		
	});	
    $("a.btn3").click(function() {
		
        if ($("textarea.b").val().replace(/>/g,"&gt;").toLowerCase() == $(".a .a").html().toLowerCase()) {
			act()
        } else {
			act3()
        };
    });	
	$("a.f_slipt").click(function(){
		Arrsplit($(this).attr("num"));
	});	function Arrsplit(s) {
    //s1=0+(s-1)*10;
    //alert(s);
    var x = 5;
    var comments2 = [];
    for (var i = (s - 1) * x, len = s * x; i < len; i++) {
        comments2.push(comments[i]);
    }
    comments = comments2; //题库赋值错误列表
    errors = []; //清空：错误列表；
    index = 0; //初始化：指针
    eNum = 0; //初始化：错误计数
    $("span.sp3").html(''); //清空：页面错误计数	
    act(); //运行函数；	
    $(".f_slipt").hide();
}

		function sen1(a){
			
	for (x in senJSON){
		if(senJSON[x].en!=null){
			if(senJSON[x].en.toLowerCase().indexOf(a.toLowerCase())>=0){
				$(".f_en").html(senJSON[x].en);
				$(".f_cn").html(senJSON[x].cn);
				break;
			}
		}
	}
		}
function play3(i) {

    if (i == 1) {
        audio.currectTime = 0;
        audio.play();
        i = i + 1;
        setTimeout("play3(2)", 2000);
    } else if (i == 2) {
        audio.currectTime = 0;
        audio.play();
        i = i + 1;
        setTimeout("play3(3)", 2000);
    } else if (i == 3) {
        audio.currectTime = 0;
        audio.play();
        i = i + 1;
        setTimeout("play3(4)", 2000);
    } else if (i == 4) {
        audio.currectTime = 0;
        audio.play();
        i = i + 1;
    }

}

//计算总时间
function MillisecondToDate(msd) {
    var time = parseFloat(msd) / 1000;
    if (null != time && "" != time) {
        if (time > 60 && time < 60 * 60) {
            time = parseInt(time / 60.0) + "分钟" + parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60) + "秒";
        } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
            time = parseInt(time / 3600.0) + "小时" + parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) + "分钟" + parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) - parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + "秒";
        } else {
            time = parseInt(time) + "秒";
        }
    }
    return time;
}

//随机改变数组的排序
function randomOrder(targetArray) {
    var arrayLength = targetArray.length
    var tempArray1 = new Array(); //先创建一个正常顺序的数组
    for (var i = 0; i < arrayLength; i++) {
        tempArray1[i] = i
    }
    var tempArray2 = new Array();	//再根据上一个数组创建一个随机乱序的数组
    for (var i = 0; i < arrayLength; i++) {
        tempArray2[i] = tempArray1.splice(Math.floor(Math.random() * tempArray1.length), 1)	//从正常顺序数组中随机抽出元素
    }
    var tempArray3 = new Array();	//最后创建一个临时数组存储 根据上一个乱序的数组从targetArray中取得数据
    for (var i = 0; i < arrayLength; i++) {
        tempArray3[i] = targetArray[tempArray2[i]]
    }
    return tempArray3	//返回最后得出的数组
    //使用实例
    // var tmp = ["1", "2", "3", "4"];
    // alert(randomOrder(tmp));
}

//打印数组
function print_array(arr) {
    var t = 'array(\n';
    for (var key in arr) {
        if (typeof(arr[key]) == 'array' || typeof(arr[key]) == 'object') {
            var t_tmp = key + ' = ' + print_array(arr[key]);
            t += '\t' + t_tmp + '\n';
        } else {
            var t_tmp = key + ' = ' + arr[key];
            t += '\t' + t_tmp + '\n';
        }
    }
    t = t + ')';
    return t;;
}})

		
