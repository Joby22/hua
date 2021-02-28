  //获取元素
  var userName = document.querySelector('.userName');
  var phone = document.querySelector('.telephone');
  var passWord = document.querySelector('.passWord')
  var box = document.querySelector('.box');
  //   var num1 = document.querySelector('.num1');

  // 事件委托
  box.onclick = function (e) {
      // check点击事件
      // 记录表单内容输入框输入正确的次数
      var time = 0;
      if (e.target.className == 'login') {
          //7个汉字或者 14个英文
          var reg = /[\u4e00-\u9fa5]{1,7}$|[a-zA-Z]{1,14}$/;
          var str = userName.value;
          if (reg.test(str) == true) {
              time++;
              console.log(time);
              // alert('用户名输入正确！');
          } else {
              time--;
              console.log(time);
              // alert('用户名输入格式为:7个汉字或者14个英文！')
          }

          //   手机号：11位数字 /^1[356789]\d{9}$/
          var reg1 = /^1[356789]\d{9}$/;
          var str1 = telephone.value;
          if (reg1.test(str1) == true) {
              // alert('手机号输入正确！');
              time++;
              console.log(time);
          } else {
              // alert('手机号输入格式为:以1开头的11位数字！')
              time--;
              console.log(time);
          }
          //密码:/^[0-9a-zA-Z,\.]{8，14}$/ 数字 字母 标点标点符号 组成
          var reg2 = /^[0-9a-zA-Z,\.]{6,14}$/;
          var str2 = passWord.value;
          if (reg2.test(str2) == true) {
              // alert('密码输入正确，请记住您的密码！');
              time++;
              console.log(time);
          } else {
              // alert('密码输入格式为:数字 字母 标点标点符号 组成！')
              time--;
              console.log(time);
          }


          //   确认密码
          var reg3 = /^[0-9a-zA-Z,\.]{6,14}$/;
          var str3 = passWord.value;
          if (reg3.test(str3) == reg2.test(str2)) {
              time++;
              console.log(time);
          }else {
            // alert('密码输入格式为:数字 字母 标点标点符号 组成！')
            time--;
            console.log(time);
        }


          // 验证码验证
        //   if (num1.value * 1 == code.innerHTML * 1) {
        //       time++;
        //       console.log(time);
        //   } else {
        //       time--;
        //       console.log(time);
        //   }

          if (time == 4) {
              alert('表单提交成功！')
          } else {
              alert('抱歉，表单提交失败!')
          }
          console.log(time);
      }
  }