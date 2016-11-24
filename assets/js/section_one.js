/**
 * Created by Liuwei on 2016/11/21.
 */

// init
$(document).ready(function () {
    console.log('Author: 刘伟,');
    console.log('Email: 116402157@qq.com,');
    console.log('Phone: 15895891210,');
    console.log('Age: 26,');
    console.log('Education: college,');
    console.log('Position desired: Front-End Engineer,');
    console.log('Target city: ["Suzhou", "Shanghai"],');
    console.log('[' + (Date()) + ']');
});

// fullpage
$(document).ready(function () {
    $(function () {
        $("#out-wrapper").fullpage(
            {
                continuousVertical: false,  //循环演示
                //绑定菜单
                anchors: ['1', '2', '3', '4', '5', '6'],

                // 导航
                'navigation': true,
            });

        $.fn.fullpage.setAllowScrolling(false);
    });
});

//hover
$(document).ready(function () {
    var logo = $("#logo");
    logo.hover(function(){
        logo.find("#header_p1").html("刘伟");
        logo.find("#header_p2").html("个人简历");
    },function(){
        logo.find("#header_p1").html("Liuwei");
        logo.find("#header_p2").html("<small>JS on the front, JS on that back, JS at supper time.</small>");
    });
});