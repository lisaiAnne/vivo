<?php
	header("content-type","text/html;charset=utf-8");
	
	//1接收数据
	$phone = $_POST["userphone"];
	$pass = $_POST["userpass"];
	
	//2、在数据库中查询
	   //1)、建立连接，并选择数据库
	   $con = mysql_connect("localhost","root","root");
	   mysql_select_db("zoo",$con);
	   //2)、执行SQL语句（查询）
	   $sqlStr="select * from vivo where phone='".$phone."' and pass='".$pass."'";
	   
	   $result=mysql_query($sqlStr,$con);
	   
	   //3)、关闭连接
	   mysql_close($con);
	//3、响应结果
	//获得$result的行数
	$rows = mysql_num_rows($result);
		
	echo $rows;
//	
	if($rows>0){//登录成功
		echo "<a href='register.html'>";	
	}else {//登录失败，返回0.
		echo "<a href='zhuce.html'>";
	}	

?>