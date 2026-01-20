// Simple Page Swiping Logic
let touchstartX = 0;
let touchendX = 0;
const pages = ['index.html', 'services.html', 'about.html', 'contact.html'];
let currentPage = window.location.pathname.split("/").pop() || 'index.html';

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    let index = pages.indexOf(currentPage);
    if (touchendX < touchstartX - 50) { // Swipe Left (Next Page)
        if (index < pages.length - 1) window.location.href = pages[index + 1];
    }
    if (touchendX > touchstartX + 50) { // Swipe Right (Prev Page)
        if (index > 0) window.location.href = pages[index - 1];
    }
}

function toggleMenu() {
    alert("This menu will open a full-screen sky-blue overlay in the next update!");
}
