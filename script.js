function myFunction()
{
var a=document.getElementById("text_a").value;

if (a=="1")
  {
document.getElementById("Status").innerText="Your Parcel is on to you!!!";
  }
else
  {
document.getElementById("Status").innerHTML="No such parcel or the seller have not update";
  }
}
