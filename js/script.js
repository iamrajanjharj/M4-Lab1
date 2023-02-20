var _ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
var form = _("addForm");
var empTable = _("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
var cnt=0;


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    var empID = _("id").value;
    var name = _("name").value;
    var ext = _("extension").value; 
    var email = _("email").value;
    var dept= _("department").value; 

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow = empTable.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let newcellID = newRow.insertCell(0);
    let newcellName = newRow.insertCell(1);
    let newcellExt = newRow.insertCell(2);
    let newcellEmail = newRow.insertCell(3);
    let newcellDept = newRow.insertCell(4);
    let newcellDelete = newRow.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let newtextNodeID = document.createTextNode(empID);
    newcellID.appendChild(newtextNodeID);

    let newtextNodeName = document.createTextNode(name);
    newcellName.appendChild(newtextNodeName);
 
    let newtextNodeExt = document.createTextNode(ext);
    newcellExt.appendChild(newtextNodeExt);

    let newtextNodeEmail = document.createTextNode(email);
    newcellEmail.appendChild(newtextNodeEmail);

    let newtextNodeDept = document.createTextNode(dept);
    newcellDept.appendChild(newtextNodeDept);

    // CREATE THE DELETE BUTTON
    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm del";
    deleteButton.appendChild(document.createTextNode("X"));
    newcellDelete.appendChild(deleteButton);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    _('id').focus();
    
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    _("empCount").innerText = "(" + ++cnt + ")";

});

// DELETE EMPLOYEE

empTable.addEventListener("click", (e) => {
    if (e.target.classList.contains('del')){
        if(confirm("Do you really want to delete this row?")) {
            empTable.deleteRow(e.target.parentNode.parentNode.rowIndex);
            _("empCount").innerText = "(" + --cnt + ")";
            _('id').focus();
        };
    }
})
