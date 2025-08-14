const darkBtn = document.getElementById('darkBtn');
const container = document.querySelector('.container');

let isDark = false; // track state manually

darkBtn.addEventListener('click', () => {
    if (!isDark) {
        document.body.style.backgroundColor = '#39ff14';
        container.style.backgroundColor = 'black';
        container.style.color = '#c9d9e2ff'; 
        darkBtn.textContent = 'Light mode';
    } else {
        document.body.style.backgroundColor = '#858fa1ff';
        container.style.backgroundColor = 'white';
        container.style.color = 'black';
        darkBtn.textContent = 'Dark mode';
    }
    isDark = !isDark; // flip mode
});
