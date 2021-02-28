let span1 = $('.nav1 .span1');
let span2 = $('.nav1 .span2');
// let span3 = $('.nav1 .span3');

let nav1 = $('.nav1');
let nav2 = $('.nav1 .nav2');
let nav3 = $('.nav1 .nav3');
let nav4 = $('.nav1 .nav4');

span1.click(function () {
    nav2.toggle();
});

span2.click(function () {
    nav3.toggle();
});

$.ajax({
    method: 'get',
    dataType: 'json',
    url: 'https://muse.huaban.com/api/v1/services/',
    success: function (data) {
        render(data);
        console.log(data);

    },
    error: () => {
        console.log('error');
    }
})


let content1 = document.querySelectorAll('.content1');
let content = document.querySelector('.content');
//function render
function render(data) {
    let str = '';
    for (var i = 0; i < data.length; i++) {
        if (data[i].price == '0') {
            data[i].price = '价格面议';
            data[i].unit = '';
        }
        console.log(i);
        // 渲染结构
        str += ` <div class="content1">
            <figure>
            <span class="span1">☆</span>
            <a href="./detail.html?id=${data[i].service_id}" target="_blank">
            <img src="//muse-img.huabanimg.com/${data[i].cover[0].key}_/both/280x280" alt="">
                <figcaption>
                    <h1>${data[i].name}</h1>
                    <div class="divider"></div>
                    <p class="extra">${data[i].price} ${data[i].unit}</p>
                </figcaption>
            </figure>
        </a>
    </div> `
    }
    content.innerHTML = str;
    // console.log(str);
}


