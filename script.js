function compute()//final output calculation function
{
    var principal = document.getElementById("principal").value;
    if(principal<=0||principal == "")//checks whether input is valid
        {
            alert('Please enter a positive number');
            document.getElementById("principal").focus();
            return;
        }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;//calculates interest
    var year = new Date().getFullYear()+parseInt(years);//finds out the year based on number of years
    document.getElementById("result").innerHTML=document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"}//output

function updateRate() //slider value function
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= rateval ;
    
}