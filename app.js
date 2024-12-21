let boxes=document.querySelectorAll(".btnBox");
let draw=document.getElementById("draw");
let reset=document.querySelectorAll(".reset");
let winner=document.getElementById("winner");

console.log("reset[0]",reset[0]);
console.log(winner);
let checkO=true;


let winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  
  let count = 0;
  
  
  
  
  boxes.forEach(box => {
      box.addEventListener("click",()=>{
          
          if(checkO){
              box.innerHTML="o";
               
                checkO=false;
                count++;
                console.log(count)
            }
            else{
                box.innerHTML="x";
                checkO=true;
                count++;
                console.log(count)
            }
            box.disabled='true';
            checkWinner();
            console.log("reset[1]",reset[1]);
        })
})   


const   checkWinner=()=>{
    for(let patternes of winPatterns){
       
          let value1=boxes[patternes[0]].innerText;
      let value2=boxes[patternes[1]].innerText;
      let value3=boxes[patternes[2]].innerText;

      if (value1 != "" && value2 != "" && value3 != ""){
        if (value1 === value2 && value2 === value3){
            showWinner(value1);
        }
        checkfordraw();
      }
       
    }

}

 function checkfordraw(){
    console.log(count)
        if(count==9){
        draw.style.display="flex";
        }
 }


function showWinner(value1){
    // winner.i
     winner.innerHTML=`${value1},Won the Match`
     winner.style.display="flex";
   console.log(`winner is ${value1} `);
}

function funcReset(){
    // boxes.forEach(box => {
    //     box.innerText="";
    //     box.disabled=false;
    // });
    window.location.reload();
}
reset[0].addEventListener("click",funcReset);
reset[1].addEventListener("click",funcReset);
reset[2].addEventListener("click",funcReset);
// reset[2].addEventListener("click",funcReset);



