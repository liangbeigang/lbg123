
var divs = document.querySelector(".f1_padding").children;
//var dl=document.querySelectorAll(".d_l"); 
// for (var dl of dl){
//     dl.style.display="flex";
//     console.log(dl);
// }
// console.log(dl); 
for (var div of divs) {
    // console.log(div);
    var d1, d2, d3, d4;
    function get(div) {
        d1 = div.querySelector(".f1_right");
        d2 = div.querySelector(".f1_qh1");
        d3 = div.querySelector(".f2_douci");
        d4 = div.querySelector(".d_l");
    }
    // console.log(div);
    if (div != document.querySelector(".f1_padding").children[0]) {
        get(div);
        d1.style.display = "none";
        d2.style.display = "none";
        d3.style.display = "none";
        d4.style.display = "flex";
    }
    div.onmouseout = function () {
        var div = this;
        //                          var d1=div.querySelector(".f1_right");
        //                             var d2=div.querySelector(".f1_qh1");
        //                          var d3=div.querySelector(".f2_douci");

        get(div);
        d1.style.display = "none";
        d2.style.display = "none";
        d3.style.display = "none";
        d4.style.display = "flex";
        (function () {
            get(document.querySelector(".f1_padding").children[0]);
            d1.style.display = "";
            d2.style.display = "";
            d3.style.display = "";
            d4.style.display = "";
        })()
    }
    div.onmouseover = function () {

        var div = this;
        if (this != document.querySelector(".f1_padding").children[0]) {
            get(div);
            d4.style.display = "flex";
            //     var d1=div.querySelector(".f1_right");
            //  var d2=div.querySelector(".f1_qh1");
            //  var d3=div.querySelector(".f2_douci");
            d1.style.display = "";
            d2.style.display = "";
            d3.style.display = "";
            d4.style.display = "";
            (function () {
                get(document.querySelector(".f1_padding").children[0]);
                d1.style.display = "none";
                d2.style.display = "none";
                d3.style.display = "none";
                d4.style.display = "flex";
            })()
        }
    }
}
