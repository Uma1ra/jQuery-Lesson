// 動作するが、記述が繰り返されがち

// $(function(){
//   $(".bg1").on("click",function(){
//     $(".bg1").slideUp();
//   });
//   $(".bg2").on("click",function(){
//     $(".bg2").slideUp();
//   });
//   $(".bg3").on("click",function(){
//     $(".bg3").slideUp();
//   });
//   $(".bg4").on("click",function(){
//     $(".bg4").slideUp();
//   });
// });


// thisを使用、記述がシンプル

$(function(){
  $(".box1").on("click",function(){
    $(this).slideUp();
  });
});
