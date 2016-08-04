var a,b;
function setValues()
{
a = Number(document.getElementById("a").value);
b = Number(document.getElementById("b").value);
}
function sum()
{
setValues();
result = a+b;
alert("The sum is equal to " + result);
}
function subtract()
{
setValues();
result = a-b;
alert("The subtraction is equal to " + result);
}
function mult()
{
setValues();
result = a*b;
alert("The operation is equal to " + result);
}
function div()
{
setValues();
result = a/b;
alert("The operation is equal to " + result);
}

