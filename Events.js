//Event reference | MDN
let btn1 = document.querySelector("#btn1");
/*btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a); //26
}; */
/*btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}; */

/*let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("you are inside div");
}; */
//let div = document.querySelector("div");
/*div.onmouseover = (evt) =>{
     console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}; */
/*btn1.addEventListener("click", (evt) => {
    //console.log("button 1 was clicked");
    //console.log(evt);
   // console.log(evt.type);
      console.log("button 1 was clicked - handler1");
});
btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler2");
});
const handler3 = () =>
{
    console.log("button1 was clicked - handler3");
}
btn1.addEventListener("click", handler3);
btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler4");
});
btn1.removeEventListener("click", handler3); */
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"; 
modeBtn.addEventListener("click", () => {
   // console.log("you are trying to change mode");
   if(currMode == "light")
   {
    currMode = "dark";
   // document.querySelector("body").style.backgroundColor = "black";
   //or
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");
   }
   else{
    currMode = "light";
    //document.querySelector("body").style.backgroundColor = "white";
    //or
    body.classList.add("light");
    body.classList.remove("dark");
   }
   console.log(currMode)
})