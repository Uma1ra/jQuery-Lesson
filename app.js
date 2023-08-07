// $(function(){
//   $('.box1').slideDown(1000);
// });

// $(function(){
//   $(".box1").slideUp(1000);
// });

// $(function(){
//   $(".box1").show(1500);
//   $(".box1").css({"background-color": "#0000FF"});
// });

// $(function(){
//   $(".box1").hide(1500);
// });


// 演習問題
// $(function(){
//   $(".box1").slideDown(1500,function(){
//     $(".box1").css({
//       "background-color": "#0000FF",
//       "height": "100px"
//     }).slideUp();
//   });
// });


// mouseoverイベント、青に変更
// $(function(){
//   $(".box1").mouseover(function(){
//     $(".box1").css({"background-color":"#0000FF"});
//   });
//   $(".box1").mouseout(function(){
//     $(".box1").css({"background-color":"#FF0000"});
//   });
// });


// mouseoverイベント、クラス変更
// $(function(){
//   $(".box1").mouseover(function(){
//     $(".box1").addClass("box1-ext");
//   });
//   $(".box1").mouseout(function(){
//     $(".box1").removeClass("box1-ext");
//   });
// });


// on(click)
$(function(){
  $(".box1").on("click",function(){
    $(".box1").addClass("box1-ext");
  });
  $(".box1").mouseout(function(){
    $(".box1").removeClass("box1-ext");
  });
});