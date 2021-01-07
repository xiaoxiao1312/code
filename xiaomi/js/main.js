console.log("加载成功");

//侧边导航栏
$('.icon').onclick=function(){
    $('.static').style.display=none;
    $('.hover').style.display=block;
}


// 倒计时
var startTime = new Date();
    startTime.setFullYear(2021,1,5);
    startTime.setHours(22);
    startTime.setMinutes(0);
    startTime.setSeconds(0);  
var EndTime=startTime.getTime();

function GetRTime(){
    //定义方法
        var NowTime = new Date();
        //定义参数可返回当天的日期和时间
        var nMS = EndTime - NowTime.getTime();
        var nD = Math.floor(nMS/(1000 * 60 * 60 * 24));
        //定义参数 获得天数
        var nH = Math.floor(nMS/(1000*60*60)) % 24;
        //定义参数 获得小时
        var nM = Math.floor(nMS/(1000*60)) % 60;
        //定义参数 获得分钟
        var nS = Math.floor(nMS/1000) % 60;
        //定义参数 获得秒钟
        if (nMS < 0){
            $(".desc").hide();
            $(".daoend").show();
        }else{
        //否则
           $(".desc").show();
           //天数展开
           $(".daoend").hide();
           //活动截止时间隐藏
           //显示天数
           $(".RemainH").text(nH);
           //显示小时
           $(".RemainM").text(nM);
           //显示分钟
           $(".RemainS").text(nS);
           //显示秒钟
        }
    }
    $(document).ready(function () {
        var timer_rt = window.setInterval("GetRTime()", 1000);
    });


     //返回顶部按钮显隐
     $(window).scroll(function(){
        // console.log(111)
      if($(window).scrollTop()>600){
          $('.home-tool-bar a:nth-child(6)').css({
              'display':'flex',
          })
      }else{
        $('.home-tool-bar a:nth-child(6)').css({
            'display':'none',
        })
      }
    })
    $('.home-tool-bar a:nth-child(6)').click(function(){
        $('body,html').animate({scrollTop:0},1000); 
    //    console.log( screenTop)
    })
    $('.home-tool-bar a:nth-child(2)').click(function(){
        // console.log("11111")
        location.href='../pages/regsiter.html' 
    })


    $('.span16 .brick-list .brick-item').click(function(){
        location.href="../pages/produce.html";
    })

    

    //读取cookie,根据cookie状态判断是否进行登录状态展示
    
    // let valname=cookie.get('username') ;
    // if(valname!=false){
    //     $('.taggle').empty().html(
    //         `
    //         <a >欢迎您，${valname}用户！</a><span>|</span>
    //         <a class="signout">退出</a><span>|</span>
    //         <a href="#">消息通知</a><span>|</span>
    //         <a href="./cart.html">
    //          <i class="iconfont icon-gouwuchekong"></i>购物车(0)
    //         </a>
    //         `
    //     )
    // }
    // $('.signout').click(function(){
    //     cookie.remove('username')
    //     $('.taggle').empty().html(
    //         `
    //         <a href="./sign.html">登录</a><span>|</span>
    //         <a href="#">注册</a><span>|</span>
    //         <a href="#">消息通知</a><span>|</span>
    //         <a href="./cart.html">
    //          <i class="iconfont icon-gouwuchekong"></i>购物车(0)
    //         </a>
    //         `
    //     )
    // })