var inputBill= Number(prompt("what is your bill"));

var taxamount=inputBill*.07;
var taxtotalbill=inputBill+taxamount;
var tipamount=taxtotalbill*.05;
var total=tipamount+taxtotalbill;
var element = document.body.querySelector(".box");

element.innerHTML=total;