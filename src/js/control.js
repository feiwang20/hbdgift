/*music control*/
$(document).ready(function(){
  $("#musicControl").hover(
    function(){
      if($("#musicControl").attr("class") === "on"){
        $("#music_img").attr("src", "imgs/musicStop.png");
      }
    },
    function(){
      if($("#musicControl").attr("class") === "on"){
        $("#music_img").attr("src", "imgs/music.png");
      }
    });
});

$(document).ready(function(){
  $("#musicControl").click(function(){
    var bgm = document.getElementById("bgm");
    if($("#musicControl").attr("class") === "on"){
      bgm.pause();
      $("#music_img").attr("src", "imgs/musicPlay.png");
      $("#musicControl").attr("class","paused");
    }else{
      bgm.play();
      $("#music_img").attr("src", "imgs/music.png");
      $("#musicControl").attr("class","on");
    }
  });
});

/*text control*/
$(document).ready(function(){
  $("#pic1").click(function(){
    $("#text1").fadeToggle("slow");
  });
  $("#pic2").click(function(){
    $("#text2").fadeToggle("slow");
  });
  $("#pic3").click(function(){
    $("#text3").fadeToggle("slow");
  });
  $("#pic4").click(function(){
    $("#text4").fadeToggle("slow");
  });
});
