<?php
    # 获取胡灿地过来的用户名和密码
    $user = $_POST['username'];
    $pass = $_POST['password'];
    
    // 链接数据库
    $con = mysqli_connect('localhost','root','123456','test');

    # 整体用双引号，表名和字段用反引号，变量和字符串用单引号
    $sql = "SELECT * FROM `user` WHERE `username` = '$user'";

    $res = mysqli_query($con,$sql);

    if(!$res){
        die('数据库链接错误' . mysqli_error($con));
    }

    $row = mysqli_fetch_assoc($res);

    // 如果$row 有数据的时候表示 已经存在该用户名
    if($row){
        print_r('该用户名已经存在，请重新输入');
    }else{
        $sql1 = "INSERT INTO `user` VALUES(null,'$user','$pass')";
        $res1 = mysqli_query($con,$sql1);

        print_r($res1);
        header('location:../html/login.html');
    }
   
?>








