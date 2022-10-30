// Based off of this StackOverflow answer
// https://stackoverflow.com/a/57593040
function addRow() {
    table = document.querySelector('#table tbody');
    const row = document.createElement("tr");
    for(i=0;i<2;i++) {
        const cell = document.createElement("td");
        const input = document.createElement("input");
        input.setAttribute('type', 'text');
        cell.appendChild(input);
        row.appendChild(cell);
    }
    table.appendChild(row);
}

document.getElementById('button').onclick = addRow();