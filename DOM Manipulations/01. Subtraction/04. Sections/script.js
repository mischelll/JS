function create(words) {
    let conatiner = document.getElementById("content");

    words.forEach(e => {
        let divElement = document.createElement("div");
        let p = document.createElement("p");
        p.textContent = e;
        p.style.display = "none";
        divElement.appendChild(p);
        conatiner.appendChild(divElement);
        divElement.addEventListener("click", () => {
          p.style.display = "block";
        })
    })
}