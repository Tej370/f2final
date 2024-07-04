const studentTable = document.getElementById('studentTable');
const sortButtons = document.querySelectorAll('.sort_btn');

// Default sort (optional):
studentTable.rows[0].classList.add('sorted'); // Visually indicate default sort

sortButtons.forEach(button => {
  button.addEventListener('click', handleSort);
});

function handleSort(event) {
  const sortType = event.target.dataset.sortType;
  const sortOrder = sortType.split('-')[1] || 'asc'; // Extract sort order from data-sort-type

  // Clear previous sorting (optional):
  studentTable.querySelectorAll('.sorted').forEach(row => row.classList.remove('sorted'));

  const tableBody = studentTable.querySelector('tbody');
  const rows = Array.from(tableBody.querySelectorAll('tr')); // Convert to array

  rows.sort((row1, row2) => {
    const value1 = row1.children[sortType.split('-')[0]].textContent.toLowerCase();

