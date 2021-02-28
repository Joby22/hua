<?php
// 获取用户名和密码
$user=$_GET['username'];
$pass=$_GET['password'];

// 数据库连接
$con=mysqli_connect('localhost','root','123456','test');

// 整体用双引号，表名和字段用反引号，变量和字符用单引号
$sql="SELECT*FROM `user` WHERE `username`='$user'";

$res=mysqli_query($con,$sql);

// 判断
if(!$res){
    die('数据库连接错误'.mysqli_error($con));
}

$row=mysqli_fetch_assoc($res);

// 如果$row 有数据的时候表示  已存在这个用户名

if($row){
    print_r('该用户名已经存在，请重新输入');
}else{
    $sql1="INSERT INTO `user` VALUES(null,'$user','$pass')";
    $res1=mysqli_query($con,$sql1);
    // header('location:./login.html');
    print_r('注册成功');
}