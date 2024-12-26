document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('formReportRepair');
    form.addEventListener('submit', submitForm);

    // ดึง fieldวันที่
    const dateField = document.getElementById('currentDate');

    // รับวันที่ปัจจุบันแบบ yyyy-mm-dd
    const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // เดือนเริ่มที่ 0
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
    };

    // ตั้งค่าวันที่ปัจจุบันใน field
    dateField.value = getCurrentDate();

    console.log(getCurrentDate())
});




document.querySelector('.save-button').addEventListener('click', function() {
    const date = document.getElementById('date').value;
    const license = document.getElementById('license').value;
    const category = document.getElementById('category').value;
    const device = document.getElementById('device').value;
    const reason = document.getElementById('reason').value;
    const note = document.getElementById('note').value;

    const repairData = {
        date,
        license,
        category,
        device,
        reason,
        note
    };

    let repairs = JSON.parse(localStorage.getItem('repairs')) || [];
    repairs.push(repairData);
    localStorage.setItem('repairs', JSON.stringify(repairs));

    window.location.href = '../page_repair/page_ repair.html';
});

