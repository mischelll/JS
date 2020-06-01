function attachEventsListeners() {
    let daysBtn = document.getElementById("daysBtn");
    let hoursBtn = document.getElementById("hoursBtn");
    let minutesBtn = document.getElementById("minutesBtn");
    let secondsBtn = document.getElementById("secondsBtn");

    let daysInput = document.getElementById("days");
    let hoursInput = document.getElementById("hours");
    let minutesInput = document.getElementById("minutes");
    let secondsInput = document.getElementById("seconds");

    daysBtn.addEventListener("click", () => {
        hoursInput.value = Number(daysInput.value) * 24;
        minutesInput.value = Number(hoursInput.value) * 60;
        secondsInput.value = Number(minutesInput.value) * 60;
    })

    hoursBtn.addEventListener("click", () => {
        daysInput.value = Number(hoursInput.value) / 24;
        minutesInput.value = Number(hoursInput.value) * 60;
        secondsInput.value = Number(minutesInput.value) * 60;
    })

    minutesBtn.addEventListener("click", () => {
        daysInput.value = Number(hoursInput.value) / 24;
        hoursInput.value = Number(minutesInput.value) / 60;
        secondsInput.value = Number(minutesInput.value) * 60;
    })

    secondsBtn.addEventListener("click", () => {
        daysInput.value = Number(hoursInput.value) / 24;
        hoursInput.value = Number(minutesInput.value) / 60;
        minutesInput.value = Number(secondsInput.value) / 60;
    })


}