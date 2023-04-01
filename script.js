let display=document.getElementById("screen");
function allclear()
{
    display.value = "";
}

function clear()
{
    display.value = display.value.toString().slice(0, -1);
}

function show(n)
{
    display.value += n;
}

function calc()
{
    try{
        display.value = eval(display.value);
    }catch(err){
        alert('Invalid operation')
    }
    
}