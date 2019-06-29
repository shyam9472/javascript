
function naam(){
        var y = document.getElementsByTagName("p");
        document.getElementById("YahaKarenge").innerHTML = y[0].innerHTML  ;
        document.getElementsByTagName("p")[0].innerHTML = "Chaliye Ab dekhte hai."  ;
        console.log("Dekhe ye chala kya ....");
};

function buttonPress(){
        // console.log(getElementsByTagName(h3)[0]);
        // window.alert("Hi and welcome.");
        // console.log(prompt("Hi ye bhi chal gaya na????"));
};

function photoPress(){
        // document.getElementsByTagName("div").style.color = "#000000";
        // document.write(5+2+2);
        document.getElementsByClassName("iskoDekh")[0].style.color = "#008000";
        document.getElementsByClassName("iskoDekh")[0].innerHTML = "Ye change hua kya ?";
        document.getElementsByClassName("iskoDekh")[1].style.color = 	"#000000";
        document.getElementsByClassName("iskoDekh")[1].innerHTML = "Ye bhi change hua kya ?";
        console.log("Yaha pe bhi dekh chala ya nahi");

};

function submitIt(){
        var b = "";
        var y = document.getElementById("iskoUtha").value;
        if( y != ""){
                for(var i = 0 ; i < y.length ; i++ ){
                b = b + y[y.length-1-i];
                }
                document.getElementById("bhaiKaNaam").innerHTML = "ye sidha naam : " + y + " Ye ulta naam : " + b;
                document.getElementById("bhaiKaNaam").style.color = "#008000";
        } else {
                alert("Please enter some value first");
        }
}


var count = 1;
var iDiv ;      
function addIt(){
iDiv = document.createElement('div');
iDiv.id = 'block_'+(count);
iDiv.className = "div_class";
iDiv.innerHTML = "<style> div{border : 2px solid red;}</style><h1> Block number : </h1> <input style='border-radius:5px;width:250px;' type = 'text'> <button onclick = 'removeIt()'>Remove this field</button> ";
// document.getElementsByTagName("h1").innerHTML = iDiv.id;
document.getElementById("parentContainer").appendChild(iDiv);
count++;
}
// var x;
// function callIt(){
//         // clickClick();
//         x = document.activeElement.id;
//         removeIt();
        
// }

// function clickClick() {
//         // var current = document.getElementsByClassName("active");
//         // if (current.length > 0) { 
//         // current[0].className = current[0].className.replace(" active", "");
//         // }
//         this.className = "active";
// }

function callLog(){
        console.log("Dekh jaadoooo...");
}

// parentNode = document.getElementById("parentContainer");
// var btn = document.getElementsByClassName("div_class");
// parentNode.addEventListener("click", function() {
//         this.className ="active";
// });




// function removeIt(){
//         // id = "block_"+(count-1);
//         // console.log(id);
//         // var rem = document.getElementById(id);
//         x = document.activeElement.id;
//         console.log(x);
//         parentNode = document.getElementById("parentContainer");
//         // var header = document.getElementById("myDIV");
//         // var btns = parentNode.getElementsByClassName("active");
//         // console.log(btns.length);
//         // for (var i = 0; i < btns.length; i++) {
//         //         btns[i].addEventListener("click", function() {
//         //         var current = document.getElementsByClassName("active");
//         //         if (current.length > 0) { 
//         //         current[0].className = current[0].className.replace(" active", "");
//         //         }
//         //         this.className = " active";
//         //         });
//         // }
//         rem = document.getElementById(x) ;
//         // console.log(id);
//         rem.parentNode.removeChild(rem);
//         count--;
// }


// document.activeElement.id()


function removeIt(){
        // id = "block_"+(count-1);     
        // console.log(id);
        // console.log(document.activeElement.parentElement.id)
        var x = document.activeElement.parentElement.id;
        var rem = document.getElementById(x);
        // console.log(id);
        parentNode = document.getElementById("parentContainer");
        // console.log(id);
        rem.parentNode.removeChild(rem);
        // count--;
}
window.onload = function() {
var z = document.getElementById("ye_wala");
var a = document.getElementById("ye_wala_button");

// var x = document.getElementById("clickIt"); 
// var y = document.getElementById("hoverPara"); 

 
z.addEventListener("mouseover", RespondMouse); 
a.addEventListener("click",ResponseLoad);
// x.addEventListener("click", RespondClick); 
// y.addEventListener("mouseover", RespondMouseOver); 
// y.addEventListener("mouseout", RespondMouseOut); 
}

function ResponseLoad(){
        console.log("chlna toh chiye");
        document.getElementById("ye_wala").innerHTML = "Ab to naya wala text print hoga";
}

function RespondMouse(){
        console.log("Ho gaya bhiya");
        console.log("ab ki baar \"Modi\" sarkar");
        console.log("What happens when we divide 1\\0")
        // document.getElementById("ye_wala").innerHTML = "ab ki baar \"Modi\" sarkar";
        // alert("ab toh chal jaaaa");
}



  
        function RespondMouseOver() { 
            document.getElementById("effect").innerHTML += 
                       "MouseOver Event" + "<br>"; 
        } 
  
        function RespondMouseOut() { 
            document.getElementById("effect").innerHTML += 
                      "MouseOut Event" + "<br>"; 
        } 
  
        function RespondClick() { 
            document.getElementById("effect").innerHTML += 
                      "Click Event" + "<br>"; 
        } 
