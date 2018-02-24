   var high = parseFloat(document.getElementById('highT').innerHTML); 
   var low = parseFloat(document.getElementById('lowT').innerHTML); 
   var s = parseFloat(document.getElementById('windS').innerHTML);
   
   var t = (high + low) / 2; 
    
   var f = Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16));  
   
document.getElementById("output").innerHTML = f; 