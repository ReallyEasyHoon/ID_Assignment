function myFunction()
{
var a=document.getElementById("text_a").value;

if (a=="123456")
  {
document.getElementById("Status").innerText="Your Parcel is on to you!!!";
  }
else
  {
document.getElementById("Status").innerHTML="No such parcel or the seller have not update";
  }
}


//For DeliveryParcel
function required()
{
var empt = document.form1.Name.value;
var empt1 = document.form1.Number.value;
var empt2 = document.form1.Code.value;
var empt3 = document.form1.Address.value;
var empt4 = document.form1.Postal.value;
if (empt === "" || empt1 ==="" || empt2 ==="" || empt3 ==="" || empt4 ==="" )
{
alert("Please fill up all information");
return false;
}
else{
alert('Successful Submitted');
return true; 
}
}
