const tableBody=
document.querySelector('#piezometre-table tbody');

function ajouterRelevé(date, profondeur)
{
        const newRow=
    tableBody.insertRox();
        const dateCell=
    newRow.insertCell(0);
        const profndeurCell=
    newRow.insertCell(1);
    

    dateCell.textContent = date;
    profndeurCell.textContent =
    profondeur;
}
