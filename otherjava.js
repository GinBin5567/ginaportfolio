var origBackground = "#13F79A";

$("#top").click(function(){
    $("#wait").attr("src", "https://media.giphy.com/media/6jDhf1ATycaD6/giphy.gif" );
    $("#topP").html("When the code doesn't work.");
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
    $("#WW").show();
    $("#wow").hide();
    $("#wait").attr("src", "");
    $("#wait").hide();
    $("#topP").hide();
    });
$("#taco").mouseover(function(){
    $("#top").hide();
    $("#taco").attr("src", "https://media.giphy.com/media/Q7HsSEI4uKWFW/giphy.gif");
    $("#WW").hide();
    $("#wow").hide();
    $("#wait").hide();
    $("#topP").hide();
    });
