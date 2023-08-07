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
$(function(){
  $(".box1").slideDown(1500,function(){
    $(".box1").css({
      "background-color": "#0000FF",
      "height": "100px"
    }).slideUp();
  });
});