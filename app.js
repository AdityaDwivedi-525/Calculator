let result=document.getElementById("result");
let buttons=document.querySelectorAll(".box");

let currInp="";
buttons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        let value =btn.textContent;
        console.log(value);

        if(value==="C"){
            currInp="";
            result.textContent="0";
        }else if(value==="="){
            try{
                currInp=eval(currInp).toString();
                result.textContent=currInp;
            }catch{
                result.textContent="Error";
                currInp="";
            }
        }else{
            currInp+=value;
            result.textContent=currInp;
        }
    })
})

