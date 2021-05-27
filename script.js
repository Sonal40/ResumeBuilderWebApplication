function addNewWEField(event) {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);

    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("we");
    let aqAddButtonOb = document.getElementById("weAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);

}

function addNewAQField(event) {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);

    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);

}

function gResume(event) {

    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = nameField;

    console.log(nameT1.innerHTML);

    document.getElementById("nameT2").innerHTML = nameField;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

    document.getElementById("LinkedT").innerHTML = document.getElementById("linkedField").value;

    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;


    document.getElementById("objectiveT").innerHTML = document.getElementById("ObjectiveField").value;

    let wes = document.getElementsByClassName("weField");

    let str = "";
    console.log(wes);
    for (let e of wes) {
        str += "<li> " + e.value + "</li>";

    }
    document.getElementById("weT").innerHTML = str;



    let aqs = document.getElementsByClassName("aqField");

    let str1 = "";
    console.log(aqs);
    for (let e of aqs) {
        str1 += "<li> " + e.value + "</li>";
    }

    document.getElementById("aqT").innerHTML = str1;

    //code for setting image
    let file = document.getElementById("imgField").files[0];

    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);
    console.log(reader.result);

    //set the image to template
    reader.onloadend = function () {
        document.getElementById("imgTemplate").src = reader.result;
    };



    document.getElementById("Resume-template").style.display = "block";
    var form = document.getElementById("eraser");

    form.remove();

}

function printResume(event) {
    window.print();
}

