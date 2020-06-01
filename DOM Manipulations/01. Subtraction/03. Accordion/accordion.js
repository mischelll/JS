function toggle() {
   let moreBtn = document.querySelector("#accordion > div.head > span");

   if (moreBtn.textContent === "More"){
        moreBtn.textContent = "Less";
        document.getElementById("extra").style.display = "block";
   }else {
       moreBtn.textContent = "More";
       document.getElementById("extra").style.display = "none";
   }
}