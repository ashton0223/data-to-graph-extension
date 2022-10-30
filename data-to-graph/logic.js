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

// Retrieved from this answer
// https://stackoverflow.com/a/25721457
document.addEventListener('DOMContentLoaded', () => {
    for(i=0;i<2;i++) {
        addRow();
    }
    document.getElementById('button').addEventListener("click", addRow);
});
