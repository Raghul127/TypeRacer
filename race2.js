document.addEventListener('DOMContentLoaded', function ()
{
var i=0;  
var timer =0;  
var backspace=1;
var green="";
var red="";
var temp;
var black="Sports and games are involved with brisk physical activities including various physical and tactical challenges.";
var text="Sports and games are involved with brisk physical activities including various physical and tactical challenges.";
var l=text.length;
var typed=document.querySelector('#type-area');
var result =document.querySelector('#result');

g=document.getElementById('green');
r=document.getElementById('red');
b=document.getElementById('black');

b.textContent=black;

typed.addEventListener('keydown',function(e)
{

if(!timer)
{
  startTimer = new Date();
	timer++;
}
if(e.key == 'CapsLock' || e.key == 'Shift')
{
  e.preventDefault();
}
else
{ 

  //Three possible cases

  if(backspace && e.key!='Backspace' )
    {
      if(e.key==text[i] )
  	  {
        green+=text[i];
        black=black.slice(1,l);
        g.textContent=green;
        b.textContent=black;
		    backspace=1;
        i++;

          if(i==text.length)
          {
        	  endTimer = new Date();
        	  const timeTaken = (endTimer.getTime() - startTimer.getTime()) / 1000;
        	  const speed= text.length/timeTaken;
            var sp=speed.toFixed(2);
            result.innerHTML= sp; 
          }
	    }
     else
    {
    backspace=0;
    black=black.slice(1,l);
    red=text[i];
    r.textContent=red;
    b.textContent=black;
    }
  }
  else
    {
	    if(e.key=='Backspace' && backspace==0)
	      {
      		backspace=1;
          black=red+black;
          red="";
          r.textContent=red;
      		b.textContent=black;
	      }
    	else 
	      {
		      e.preventDefault();
	      }
	  }
}

}
)})