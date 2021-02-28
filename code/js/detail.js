var arr = [],
    reg = /\w{1,}=\w{1,}/g;

function fun(url, name) {
    // 正则表达式：由于键值对以=划分，所以匹配=号左右两边即可获得一对完整键值对
    var reg = /\w{1,}=\w{1,}/g;
    // 将获取出来的键值对存入变量
    var hw = url.match(reg);
    var a = {};
    hw.forEach(function (item) {
        a[item.substring(0, item.indexOf("="))] = []
    });
    // 遍历数组
    hw.forEach(function (item) {
        // 切割数组,将数据存入对象
        a[item.substring(0, item.indexOf("="))].push(item.substring(item.indexOf("=") + 1))
    });

    // 返回数组
    return a
}
let href = location.href;
let id = fun(href).id[0];

$.ajax({
    method: 'get',
    dataType: 'json',
    url: 'https://muse.huaban.com/api/v1/services/' + id,
    success: function (data) {
        console.log(data);
        let arry = [];
        arry.push(data);
        render(arry);


    },
    error: () => {
        console.log('error');
    }
})


// 数据渲染
let content1 = document.querySelectorAll('.content1');
let content = document.querySelector('.content');
let content2 = document.querySelectorAll('.content2');
// let content3 = document.querySelector('#content');

function render(data) {
    let str = '';
    for (var i = 0; i < data.length; i++) {
        // console.log(i);
        if (data[i].price == '0') {
            data[i].price = '价格面议';
            data[i].unit = '';
        }
        str += `
            <div class="content1">
                <p><a href="./list.html">设计服务</a> » ${data[i].name}</p>
                <h1>${data[i].name}</h1>
                <img src="//muse-img.huabanimg.com/${data[i].cover[0].key}" alt="" class="img1">
                <h2>服务说明</h2>
                <img src="//muse-img.huabanimg.com/${data[i].cover[1].key}" alt="" class="img2">
                <h2>预估完成时间</h2>
                <span id="span1">${data[i].complete_in.number} ${data[i].complete_in.unit}</span>
                <div class="divider"></div>
                <span id="span2"><a href="">购买</a> </span>

            </div>
            <div class="content2">
                <div class="top">
                    <h1 class="extra">${data[i].price} ${data[i].unit}</h1>
                    <h2>基础服务价格 <a href="">&nbsp;了解更多</a> </h2>
                    <div class="divider"></div>
                    <p class="p1">成交<span>${data[i].order_count}</span></p>
                    <p class="p2">评价<span>☆☆☆☆☆</span></p>
                    <span id="span2"><a href="./login.html">购买</a> </span>
                </div>
                <div class="center">
                    <figure>
                    <img src="../images/tx1.jpg" alt="">
                        <figcaption>
                            <p class="p1">${data[i].user.username}</p>
                            <span class="p2"><img src="../images/lt1.svg" alt=""> <a href="./login.html"
                                    target="_blank">聊天</a> </span>
                        </figcaption>
                    </figure>
                    <div class="divider"></div>
                    <p class="p2"><img src="../images/shijian1.svg" alt="">
                        平均响应时间  &nbsp;&nbsp;1天13时16分48秒</p>
                    <p class="p3"><img src="../images/renzheng1.svg" alt="">
                        实名认证<span>已认证</span></p>
                    <div class="divider"></div>
                    <div class="p4">
                    ${data[i].user.desc}

                    </div>
                </div>

                <div class="bottom">
                    <p class="p1">购买流程</p>
                    <p class="p2">
                        勾选服务项目进行购买后, 填写需求订<br>
                        单,等待设计师确认;设计师确认订单<br>
                        后，需要您再次确认并付款;您的付款<br>
                        将托管在美思平台,只有项目结束后得<br>
                        双方同意后,款项才会转到服务方账<br>
                        号。<br>
                    </p>
                    <div class="divider"></div>
                    <p class="p1">还有疑问</p>
                    <p class="p3">
                        <a href="">查看帮助文档</a>
                        <span> </span>
                        <a href="">联系客服</a>
                    </p>
            </div> `
    }

    content.innerHTML = str;
    console.log(str);
}

