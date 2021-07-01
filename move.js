


var firstNameCon = document.getElementById("fir-name"); // firstname container variable
var surNameCon = document.getElementById("sur-name"); //surname container variable
var ageCon = document.getElementById("ag"); // age container variable
var levelCon = document.getElementById("level"); // level container variable
var clubCon = document.getElementById("club"); // club container variable
var table = "<table><tr><th>" + "  " + "S/N" + "  " + "</th><th>" + "  " + "Name" + "  " + "</th><th>" + "  " + 
"Age" + "  " + "</th><th>" + "  " + "Level" + "  " + "</th><th>" + "  " + "Club" + "  " + "</th><th>" + "  " + "Delete" + "  " + "</th></tr>";
// var you = document.getElementsByClassName("gee");
var but = document.getElementById("sub"); // button container variable
var theDiv = document.getElementById("result"); // div container variable
// this check for validation of the inputs
function check() {
    if((firstNameCon.value.trim() === "") && (surNameCon.value.trim() === "") && (ageCon.value.trim() === "") && 
    (levelCon.value.trim() === "") && (clubCon.value.trim() === "")) {
        setErrorFor(firstNameCon);
        setErrorFor(surNameCon);
        setErrorFor(ageCon);
        setErrorFor(levelCon);
        setErrorFor(clubCon);
        alert("Fill the input");
    }
    else if(!(firstNameCon.value.trim() === "") && !(surNameCon.value.trim() === "") && !(ageCon.value.trim() === "") &&
    !(levelCon.value.trim() === "") && !(clubCon.value.trim() === "")) {
        main();
        increase();
        theDiv.innerHTML = table;
    }
    else if((firstNameCon.value.trim() === "") && !(surNameCon.value.trim() === "") && !(ageCon.value.trim() === "") &&
    !(levelCon.value.trim() === "") && !(clubCon.value.trim() === "")) {
        setErrorFor(firstNameCon);
        alert("Fill Firstname input");  
    }
    else if(!(firstNameCon.value.trim() === "") && (surNameCon.value.trim() === "") && !(ageCon.value.trim() === "") &&
    !(levelCon.value.trim() === "") && !(clubCon.value.trim() === "")) {
        setErrorFor(surNameCon);
        alert("Fill Surname input");   
    }
    else if(!(firstNameCon.value.trim() === "") && !(surNameCon.value.trim() === "") && (ageCon.value.trim() === "") &&
    !(levelCon.value.trim() === "") && !(clubCon.value.trim() === "")) {
        setErrorFor(ageCon);
        alert("Fill Age input");
    }
    else if(!(firstNameCon.value.trim() === "") && !(surNameCon.value.trim() === "") && !(ageCon.value.trim() === "") &&
    (levelCon.value.trim() === "") && !(clubCon.value.trim() === "")) {
        setErrorFor(levelCon);
        alert("Fill Level input");  
    }
    else if (!(firstNameCon.value.trim() === "") && !(surNameCon.value.trim() === "") && !(ageCon.value.trim() === "") &&
    !(levelCon.value.trim() === "") && (clubCon.value.trim() === "")) {
        setErrorFor(clubCon);
        alert("Fill club input")
    }
    else {alert("Complete the leftout inputs")}
}
// this manipulate the inputs to display error style on the border styling red
function setErrorFor(inputErr) {
    inputErr.className = "second error";
}


// this function clears away the users value from the input tag after pressing the submit button 
function clearAway() {
    firstNameCon.value = " ";
    surNameCon.value = " ";
    ageCon.value = " ";
    levelCon.value = " ";
    clubCon.value = " ";
}
// table instantiation begins
var i = 1;
var count = 11;
function main() {    

    if (i < count) {
        table += "<tr class= 'gee'>";
        table += "<td>" + "  " + i + "  " +"</td>";
        table += "<td>" + "  " + firstNameCon.value + " " + surNameCon.value + "  " + "</td>";
        table += "<td>"+ "  " + Number(ageCon.value) + "  " +"</td>";
        table += "<td>" + "  " + Number(levelCon.value) + "  " + "</td>";
        table += "<td>" + "  " + clubCon.value + "  " +"</td>";
        table += "<td><button id= 'butt' width= '30px' height= '20px'>+</button></td>";
        table += "</tr>";
    }
    
}
// function rem() {
//     return you.remove();
// }
//*********************************************** */
// this stops the table when the s/N value reahes 10 
function exit() {
    if (i == 11) {
        table += "</table>";
        but.disabled = true;
    }
}
// this increase the s/N value by it self
function increase() {
    return i += 1;
}
// mother function responsible or container for other function which is called by the submit button in the hthml
function enter() {
    check();
    
    exit();
    
    clearAway();
    ifTrue();
}
