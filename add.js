/*document.write("singh");
alert("this file is working");
const st=document.getElementById("1st").value;
const nd=document.getElementById("2nd").value;
const sum=document.querySelector("#btn");
const show=document.querySelector("#show");

function s()
{

var sum= st+nd;
    return sum;
 
}

sum.addEventListener('click',s());
show.innerHTML=s();*/


const screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');

let screenvalue='';

for(item of buttons)
    {
        item.addEventListener('click',(e)=>
            {
            buttontext=e.target.innerText;
            // if any key in not persent in keybord
            //    use like this
            
           /* if(buttontext=='x')
            {
                buttontext='*';
                screenvalue+=buttontext;
                screen.value=screenvalue;
            }*/
             if(buttontext=='C')
            {
                screenvalue="";
                screen.value=screenvalue;
                
            }
            else if(buttontext=='=')
            {
                screen.value=eval(screenvalue);
            }
            else if(buttontext=='x^2')
                {
                  screen.value=eval(screenvalue*screenvalue);  
                }
            else if(buttontext=='x^3')
                {
                  screen.value=eval(screenvalue*screenvalue*screenvalue);  
                }
            else if(buttontext=='sqrt')
                {
                  screen.value=Math.sqrt(screenvalue);  
                }
            else if(buttontext=='<---')
                {
                 var a=screenvalue; screen.value=a.substr(0,a.length-1);
                }
            else{
                screenvalue+=buttontext;
                screen.value=screenvalue;
            }
        })
        
    }