var tab = document.createElement("table");
tab.border = "2"
tab.style.borderCollapse = "Collapse"
var tbody = document.createElement("tbody");
var tr = document.createElement("tr");
var td = document.createElement("td");
td.innerHTML = "hello";
tr.appendChild(td);
tbody.appendChild(tr);
tab.appendChild(tbody);
document.getElementById("parentContainer").appendChild(tab);