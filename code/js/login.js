let username = document.querySelector("#username");
let password = document.querySelector("#password");
let form = document.querySelector(".form-horizontal");

form.onsubmit = function(){
    let e = window.event;
    e.preventDefault();
    pAjax({
        type:'post',
        url:'../api/login.php',
        data:{
            username:username.value,
            password:password.value
        }
    }).then(res=>{
        if(res.code == 1){
            // 登录成功存储 登录的状态
            setCookie('login',username.value);
            // 跳转页面 如果从购物车过来的时候登录成功去购物车页面
            // 否则就去到首页
            let url = localStorage.getItem('url');
            if(url){
                location.href = url;
                // 登录成功的时候把url的这个cookie值清除
                localStorage.removeItem('url');
            }else{
                location.href = 'http://joby.com/hbms/code/html/index.html';
            }
        }
    })
}

var mySwiper = new Swiper('.swiper-container', {
    // 默认显示索引为2的这个元素
    // initialSlide: 1,
    grabCursor: true,
    // init: false,
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    // autoplay: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false
    }


});