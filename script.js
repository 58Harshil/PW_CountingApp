const Dec = document.getElementById("Dec")
const Ice = document.getElementById("Ice")
const Rec = document.getElementById("Rec")
const RecValue = document.getElementById("RecValue")

Dec.addEventListener("click",() =>{
    const value = Number(RecValue.innerText)
    if(value>0)
    {
        RecValue.innerText = value -1
    }
    else
    {
        alert("Negative value not allowed");
    }
})





Ice.addEventListener("click",() =>{
    const value = Number(RecValue.innerText)
    if(value>8)
    {
        alert("9 values are not allowed");
    }
    else
    {
        RecValue.innerText = value +1
    }
})



Rec.addEventListener("click", () => {
    RecValue.innerText = 0;
  });
