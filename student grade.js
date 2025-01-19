var sid=parseInt(prompt("enter the id"));
var sname=(prompt("enter the name"));
var English=parseInt(prompt("enter the English"));
var tamil=parseInt(prompt("enter the tamil"));
var Maths=parseInt(prompt("enter the Maths"));
var Science=parseInt(prompt("enter the Science"));
var Social=parseInt(prompt("enter the Social"));
var total=English+tamil+Maths+Science+Social;
var percentage=(total*100/500.0);
document.write("student id=:"+sid+"<br>");
document.write("student name=:"+sname+"<br>");
document.write("total=:"+total+"<br>");
document.write("percentage=:"+percentage+"<br>");
if(percentage>90)
{
    alert("Grade A")
}
else if(percentage>80)
{
    alert("Grade B")
}
else if(percentage>70)
{
    alert("Grade C")
}
else if(percentage>60)
{
    alert("Grade D")
}
else if(percentage>50)
{
    alert("Grade E")
}
else{
    alert("fail")
}
