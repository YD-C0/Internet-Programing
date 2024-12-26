document.addEventListener('DOMContentLoaded', function() {
    const repairTableBody = document.getElementById('repair-table-body');
    const repairs = JSON.parse(localStorage.getItem('repairs')) || [];

    repairs.forEach(repair => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${repair.date}</td>
            <td>${repair.license}</td>
            <td>${repair.category}</td>
            <td>${repair.device}</td>
            <td>${repair.reason}</td>
            <td><button class="status-button">แจ้งซ่อม</button></td>
        `;
        repairTableBody.appendChild(row);
    });

    // Re-apply the event listeners for the status buttons
    const statusButtons = document.querySelectorAll('.status-button');
    statusButtons.forEach(button => {
        button.addEventListener('click', function() {
            button.textContent = 'แจ้งซ่อมแล้ว';
            button.style.backgroundColor = '#A8E5B1';
            button.disabled = true;
        });
    });
});

function addRepair() {
    location.href = '../form_repair/from_repair.html'; 
}