function lockedProfile() {
    let userOne = document.getElementsByClassName("profile")[0];
    let userTwo = document.getElementsByClassName("profile")[1];
    let userThree = document.getElementsByClassName("profile")[2];

    let userOneBtn = document.querySelector("#main > div:nth-child(1) > button");
    let userTwoBtn = document.querySelector("#main > div:nth-child(2) > button");
    let userThreeBtn = document.querySelector("#main > div:nth-child(3) > button");

    userOneBtn.addEventListener("click", () => {
        let lockRadioBtn = document.querySelector("#main > div:nth-child(1) > input[type=radio]:nth-child(3)");
       let userHiddneFields = document.getElementById("user1HiddenFields");
        lockUnlock(lockRadioBtn,userOneBtn,userHiddneFields);
    });

    userTwoBtn.addEventListener("click", () => {
        let lockRadioBtn = document.querySelector("#main > div:nth-child(2) > input[type=radio]:nth-child(3)");
        let userHiddneFields = document.getElementById("user2HiddenFields");
        lockUnlock(lockRadioBtn,userTwoBtn,userHiddneFields);
    });

    userThreeBtn.addEventListener("click", () => {
        let lockRadioBtn = document.querySelector("#main > div:nth-child(3) > input[type=radio]:nth-child(3)");
        let userHiddneFields = document.getElementById("user3HiddenFields");
        lockUnlock(lockRadioBtn,userThreeBtn,userHiddneFields);
    });

    function lockUnlock(lockRadioButton, userButton,userHiddenFields) {
        if (userButton.textContent === "Show more") {
            if (!lockRadioButton.checked === true) {
                userButton.textContent = "Hide it";
                userHiddenFields.style.display = "block";
            }
        } else {

            if (!lockRadioButton.checked === true) {
                userButton.textContent = "Show more";
                userHiddenFields.style.display = "none";
            }
        }
    }
}

