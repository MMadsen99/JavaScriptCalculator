document.getElementById("knap1").addEventListener("click", function() {

    document.getElementById("text1").innerHTML += "1";
});

document.getElementById("knap2").addEventListener("click", function() {

    document.getElementById("text1").innerHTML += "2";
});

document.getElementById("knap3").addEventListener("click", function() {

    document.getElementById("text1").innerHTML += "3";
});

document.getElementById("knap4").addEventListener("click", function() {

    document.getElementById("text1").innerHTML += "4";
});

document.getElementById("knap5").addEventListener("click", function() {

    document.getElementById("text1").innerHTML += "5";
});

document.getElementById("knap6").addEventListener("click", function() {

    document.getElementById("text1").innerHTML += "6";
});

document.getElementById("knap7").addEventListener("click", function() {

    document.getElementById("text1").innerHTML += "7";
});

document.getElementById("knap8").addEventListener("click", function() {

    document.getElementById("text1").innerHTML += "8";
});

document.getElementById("knap9").addEventListener("click", function() {

    document.getElementById("text1").innerHTML += "9";
});

document.getElementById("knap0").addEventListener("click", function() {

    document.getElementById("text1").innerHTML += "0";
});

document.getElementById("knapPlus").addEventListener("click", function() {

    document.getElementById("text1").innerHTML += " + ";
});

document.getElementById("knapMinus").addEventListener("click", function() {

    document.getElementById("text1").innerHTML += "-";
});
document.getElementById("knapClear").addEventListener("click", function(){

    document.getElementById("text1").innerHTML = "";
});


document.getElementById("knapCalc").addEventListener("click", function Calc(){
   var result = eval( document.getElementById("text1").innerHTML);
    console.log(result)
    document.getElementById("text1").innerHTML = result;

});