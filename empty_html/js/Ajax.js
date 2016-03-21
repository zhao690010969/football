//封装Ajax
//文件url  读取数据成功后的函数{fuSucc};和失败后的函数{fnFaild}（失败后的函数可以存在也可以不存在）  
function Ajax(url,fnSucc,fnFaild){
	//创建一个兼容的Ajax对象
	var oAjax=null;
	if(window.XMLHttpRequest){//判断window.XMLHttpRequest是否存在，存在不是IE6不存在就是IE6
		oAjax = new XMLHttpRequest();//非ie6
	}else{
		oAjax = new ActiveXObject('Microsoft.XMLHTTP');//ie6中创建Ajax（其中new ActiveXObject('Microsoft.XMLHTTP')为插件形式）
	}
	//open链接服务器
	oAjax.open('GET',url,true/*请求方式，文件名名称，是否异步*/);
	//发送请求
	oAjax.send();
	//接收服务器返回的信息
	oAjax.onreadystatechange=function(){//需要处理信息 
		if(oAjax.readyState==4){//oAjax.readyState判断返回的信息状态是否完成
			if(oAjax.status==200){
				fnSucc(oAjax.responseText);//读取数据成功后执行的函数
			}else{
				if(fnFaild){
					fnFaild(console.log(oAjax.status));//读取数据失败后执行的函数
				}
			}
		}
	}
}
