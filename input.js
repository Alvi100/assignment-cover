function myFunction(){
   document.getElementById("name").innerHTML= prompt("Enter Your Name: [ max-22 Character ] ");
   document.getElementById("roll").innerHTML= prompt("Enter Your Roll: [ last 2 or 3 numbers ] ");
   document.getElementById("sname").style.display="none";
   
}

function myPrint(){
  window.print();
  document.getElementById("print").style.display="none";

}