selectChanged = (event) => {
    if (event.target.value == "Email address") {
        let phoneNumbers = document.getElementsByClassName("phone-number");
        let emailAddresses = document.getElementsByClassName("email-address");

        for (let i = 0; i < phoneNumbers.length; i++) {
            phoneNumbers[i].style.display = "none";
        }
        for (let i = 0; i < emailAddresses.length; i++) {
            emailAddresses[i].style.display = "inline-block";
        }
    } else if (event.target.value == "Phone number") {
        let phoneNumbers = document.getElementsByClassName("phone-number");
        let emailAddresses = document.getElementsByClassName("email-address");

        for (let i = 0; i < emailAddresses.length; i++) {
            emailAddresses[i].style.display = "none";
        }
        for (let i = 0; i < phoneNumbers.length; i++) {
            phoneNumbers[i].style.display = "inline-block";
        }
    }
}

showRowDetails = (event) => {
    let rowWidth = document.getElementsByTagName("tr")[0].offsetWidth;
    let rowHeight = document.getElementsByTagName("tr")[0].offsetHeight;

    let rows = document.getElementsByClassName("row-overlay");
    for (let i = 0; i < rows.length; i++) {
        rows[i].style.width = rowWidth + "px";
        rows[i].style.height = (rowHeight + 2) + "px";
    }

    if (event.target.parentElement.parentElement.tagName == "TR") {
        event.target.parentElement.parentElement.querySelector("div").style.width = "0";
        event.target.parentElement.parentElement.classList.add("open-details");
        event.target.parentElement.parentElement.getElementsByClassName("email-address")[0].style.display = "none";
        event.target.parentElement.parentElement.getElementsByClassName("phone-number")[0].style.display = "none";
        event.target.parentElement.parentElement.getElementsByClassName("details")[0].style.display = "block";

    } else {
        event.target.parentElement.querySelector("div").style.width = "0";
        event.target.parentElement.classList.add("open-details");
        event.target.parentElement.getElementsByClassName("email-address")[0].style.display = "none";
        event.target.parentElement.getElementsByClassName("phone-number")[0].style.display = "none";
        event.target.parentElement.getElementsByClassName("details")[0].style.display = "block";

    }

}

hideDetails = (event) => {
    let details = document.getElementsByClassName("details");
    for (let i = 0; i < details.length; i++) {
        details[i].style.display = "none";
    }
    let rowOverlays = document.getElementsByClassName("row-overlay");
    for (let i = 0; i < rowOverlays.length; i++) {
        rowOverlays[i].style.width = "0";
    }
    let rows = document.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        rows[i].classList.remove("open-details");
    }
    if (document.getElementsByTagName("select")[0].value == "Email address") {
        let phoneNumbers = document.getElementsByClassName("phone-number");
        let emailAddresses = document.getElementsByClassName("email-address");
    
        for (let i = 0; i < phoneNumbers.length; i++) {
            phoneNumbers[i].style.display = "none";
        }
        for (let i = 0; i < emailAddresses.length; i++) {
            emailAddresses[i].style.display = "inline-block";
        }
    }
    else {
        let phoneNumbers = document.getElementsByClassName("phone-number");
        let emailAddresses = document.getElementsByClassName("email-address");
    
        for (let i = 0; i < emailAddresses.length; i++) {
            emailAddresses[i].style.display = "none";
        }
        for (let i = 0; i < phoneNumbers.length; i++) {
            phoneNumbers[i].style.display = "inline-block";
        }    
    }
    event.stopPropagation();
}

let tableRows = document.getElementsByTagName("tr");
for (let j = 0; j < tableRows.length; j++) {
    tableRows[j].setAttribute("onclick", "showRowDetails(event)");
}
let details = document.getElementsByClassName("details");
for (let j = 0; j < details.length; j++) {
    details[j].style.width = document.getElementsByClassName("email-address")[0].parentElement.offsetWidth + 4 + "px";
}