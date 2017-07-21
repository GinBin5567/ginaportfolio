var origBackground = "#13F79A";

$("#top").click(function(){
  
    $("#wait").attr("src", "https://media.giphy.com/media/6jDhf1ATycaD6/giphy.gif" );
    $("#wait").show();
    $("#topP").html("When the code doesn't work.");
    $("#topP").show();
    $("#top").hide();
    $("#taco").hide();
    $("#WW").hide();
    $("#wow").hide();
    });
$("#resetButton").click(function(){
    $("body").css("background", origBackground);
    $("#top").show();
    $("#taco").show();
    $("#taco").attr("src", "http://images.clipartpanda.com/taco-clipart-taco_Vector_Clipart.png");
    $("#WW").attr("src", "http://orig14.deviantart.net/6193/f/2017/080/e/8/wonder_woman_shield_and_sword___transparent_by_asthonx1-db33wbs.png");
     $("#wait").removeAttr("src");
    $("#WW").show();
    $("#wow").hide();
    $("#topP").hide();
    $("#wait").hide();
   
    });
$("#taco").click(function(){
    $("#top").hide();
    $("#taco").attr("src", "https://media.giphy.com/media/Q7HsSEI4uKWFW/giphy.gif");
    $("#WW").hide();
    $("#wow").hide();
    
    });
$("#WW").click(function(){
    $("#top").hide();
    $("#WW").attr("src" ,"https://s-media-cache-ak0.pinimg.com/originals/c6/2c/01/c62c01284b141230d93262788e3948d3.gif");
    $("#taco").hide();
    $("#wow").html("Best movie of 2017, no contest.");
    $("#wow").show();

    });
