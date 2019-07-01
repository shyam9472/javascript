$(document).ready(function(){
    $("p").on({click:function(){
        console.log("click pe chala");
        },mouseover:function(){
            console.log("Mouse kaam kar gaya");
        }
    })

    $("button").click(function(){
        c = $("input").val().length;
        console.log("Ye schala")
        if(c < 8){
            $("input").css("border","2px solid red")
        }
        else{
            $("input").css("border","2px solid green")
        }
    })
})