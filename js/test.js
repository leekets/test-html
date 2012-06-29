
$(function() {
	
	var t1= new Date().getTime(); //初始化时间
	var dNum= 0;	//错误返回按钮延时时间；
	
	//数组指针初始化；
    var index = 0;
	var index_ = "";
		
	var errors = [];	//错误返回按钮延时时间；
	var eNum = 0;	//错误计数初始化；
	
	//显示全局
	$("#ul").show();
	
	//调试开关；
	var debug="0";
	if(debug=="1"){
		dNum=0;	
	}
	
	act(); //进入函数act

	function act() {
		//分段重复函数
		
//	alert(index+":"+eNum);
//	if(rNum==0){
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
        if ((index > 15 && index <= 20 && eNum == 9)) {

            alert("Repeat");
            index = 0;
            //			var index_ = "";
            errors = [];
            eNum = 0;
            $("span.sp3").html(eNum);

        }
        if ((index > 20 && index <= 25 && eNum == 11)) {

            alert("Repeat");
            index = 0;
            //			var index_ = "";
            errors = [];
            eNum = 0;
            $("span.sp3").html(eNum);

        }
        if ((index > 25 && index <= 30 && eNum == 13)) {

            alert("Repeat");
            index = 0;
            //			var index_ = "";
            errors = [];
            eNum = 0;
            $("span.sp3").html(eNum);

        }//	}

if (index<comments.length) {					//如果指针在范围内；
			$(".e_element").hide();				//隐藏所有元素；
			$("b.en").html("");					//初始化英文部分；
			$("b.cn").html("");					//初始化中文部分；
//			sen1(comments[index]['a']);			//调用句库函数；
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
			
			$("audio").attr({"src": audioUrl+"audio/"+comments[index]['a']+".mp3"});
			audio=document.getElementById('player') //初始化音频路径
			$("b.q_en").html(q_en);//问题区赋值
			$("b.q").html(comments[index]['subject']);//问题区赋值
			$("b.a").html(comments[index]['subTitle']);//答案区赋值
			$(".sen .en").html(comments[index]['en']);//问题区赋值
			$(".sen .cn").html(comments[index]['cn']);//答案区赋值
			$(".btnQ").html(btnQ);
			$(".e_act1").show();				//显示：act1元素；
			play3(1);
			$("textarea.b")[0].focus();			//输入框焦点
			
            index++;							//指针递进
        }
		else{
			if(errors.length > 0){				//数组【错误列表】不为空
				comments = errors;				//题库赋值错误列表
				errors = [];					//清空：错误列表；
				index = 0;						//初始化：指针
				eNum = 0;						//初始化：错误计数
				$("span.sp3").html('');			//清空：页面错误计数
				act();							//运行函数；
			}else{
				t2=new Date().getTime()-t1;
				alert(MillisecondToDate(t2));	
				window.location=jumpUrl+"&title="+MillisecondToDate(t2);
				//window.location="index."+bothPage+"#pid"+pid;
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
	
	//Error
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
		audio=document.getElementById('player')
		play3(1);
		$(".e_act3").show();				//显示：act3元素；
		$("a.btn2").hide().delay(dNum).fadeIn();
		$("a.btn3").hide();	


	}

	$("a.btnCn").click(function(){
		$(".sharewith .q").parent().show();
		
	});
    $("a.btn1").click(function() {

        if ($("textarea.b").val().replace(/>/g,"&gt;").toLowerCase() == $("b.a").html().toLowerCase()) {
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
		act2()		
	});
	
    $("a.btn3").click(function() {
		
        if ($("textarea.b").val().replace(/>/g,"&gt;").toLowerCase() == $("b.a").html().toLowerCase()) {
			act()
        } else {
			act3()
        };
    });
})

//		function sen1(a){
//			
//
//	for (x in sen){
//		if(sen[x].en.toLowerCase().indexOf(a.toLowerCase())>=0){
//			$("b.en").html(sen[x].en);
//			$("b.cn").html(sen[x].cn);
//			break;
//		}
//	}
//
//
//		}

		function play3(i){
			
			if(i==1){
				audio.currectTime=0;
				audio.play();
				i=i+1;
//				alert("123");
//				playVar="play3("+i+");";
				setTimeout("play3(2)",2000);
//				play3(i);
//			}else{
//				return false;
			}else if(i==2){
				audio.currectTime=0;
				audio.play();
				i=i+1;
//				alert("123");
//				playVar="play3("+i+");";
				setTimeout("play3(3)",2000);				
			}else if(i==3){
				audio.currectTime=0;
				audio.play();
				i=i+1;
//				alert("123");
//				playVar="play3("+i+");";
				setTimeout("play3(4)",2000);				
			}else if(i==4){
				audio.currectTime=0;
				audio.play();
				i=i+1;
//				alert("123");
//				playVar="play3("+i+");";
//				setTimeout("play3(4)",2000);				
			}

		}
		
//todo:转存如单页js
		function MillisecondToDate(msd)
		{
			var time = parseFloat(msd) / 1000;
			if (null != time && "" != time)
			{
				if (time > 60 && time < 60 * 60)
				{
					time = parseInt(time / 60.0) + "分钟" + parseInt((parseFloat(time / 60.0) -
							parseInt(time / 60.0)) * 60) + "秒";
				}
				else if (time >= 60 * 60 && time < 60 * 60 * 24)
				{
					time = parseInt(time / 3600.0) + "小时" + parseInt((parseFloat(time / 3600.0) -
							parseInt(time / 3600.0)) * 60) + "分钟" +
							parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
									parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + "秒";
				}
				else
				{
					time = parseInt(time) + "秒";
				}
			}
			return time;
		}

