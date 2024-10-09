function toggleMenu() {
    var sidebar = document.getElementById("menuSidebar");
    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
    } else {
        sidebar.classList.add("open");
    }
}

function toggleChat() {
    var chatWindow = document.getElementById("chatWindow");
    if (chatWindow.style.display === "block") {
        chatWindow.style.display = "none";
    } else {
        chatWindow.style.display = "block";
    }
}

function openChat() {
    window.open('https://wa.me/916217315', '_blank');
}