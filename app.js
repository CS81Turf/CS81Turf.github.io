const darkBtn = document.getElementById('darkBtn');
const container = document.querySelector('.container');

let isDark = false; // track state manually

darkBtn.addEventListener('click', () => {
    if (!isDark) {
        container.style.backgroundColor = 'black';
        container.style.color = '#c9d9e2ff'; 
        darkBtn.textContent = 'Light mode';
    } else {
        container.style.backgroundColor = 'white';
        container.style.color = 'black';
        darkBtn.textContent = 'Dark mode';
    }
    isDark = !isDark; // flip mode
});
