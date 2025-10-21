// navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.sceollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// update time and date
function updateDateTime() {
    const timeElement = document.getElementById('userTime'); 
    const dateElement = document.getElementById('userDate'); 
    const now = new Date();
    
    if (timeElement) {
        timeElement.textContent = Date.now()
    }

    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        dateElement.textContent = now.toLocaleDateString('en-Us', options)
    }
}

// initial update
updateDateTime();

// Update every second
setInterval(updateDateTime, 1000);

// copy timestamp on click
const timeElement = document.getElementById('userTime');
timeElement.addEventListener('click', () => {
    const timestamp = timeElement.textContent;
    navigator.clipboard.writeText(timestamp).then(() => {
        const originalText = timeElement.textContent;
        timeElement.textContent = 'Copied';
        setTimeout(() => {
            timeElement.textContent = originalText;
        }, 1000);
    });
});

// avatar click animation
const avatar = document.getElementById('avatar');
avatar.addEventListener('click', () => {
    avatar.style.animation = 'none';
    setTimeout(() => {
        avatar.style.animation = '';
    }, 10);
});

// name click effect
const userName = document.getElementById('userName');
const names = ['Emmanuel Okon', 'Frontend Wizard', 'Code Enthusiast', 'Emmanuel Okon'];
let nameIndex = 0;

userName.addEventListener('click', () => {
    nameIndex = (nameIndex + 1) % names.length;
    userName.style.opacity = '0';
    setTimeout(() => {
        userName.textContent = names[nameIndex];
        userName.style.opacity = '1';
    }, 200);
});

// Interactive list items
const listitems = document.querySelectorAll('.list-item');
listitems.forEach(item => {
    item.addEventListener('click', function() {
        this.style.animation = 'fadeIn 0.5s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 500);
    });
});

console.log('Profile Card initialized with interactivity!');
console.log('Current date:', new Date().toLocaleDateString());
console.log('Current timestamp:', Date.now());