// script.js

// 1. Login validation
function validateLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (password === "village@2025") {
    sessionStorage.setItem("username", username || "ग्रामवासी");
    window.location.href = "village.html";
  } else {
    alert("गलत पासवर्ड! कृपया सही पासवर्ड दर्ज करें।");
  }
}

// 2. Show welcome message if user is logged in
window.addEventListener("DOMContentLoaded", () => {
  const username = sessionStorage.getItem("username");
  if (username && document.getElementById("greeting")) {
    document.getElementById("greeting").textContent = `🙏 नमस्ते, ${username} जी!`;
  }

  // 3. Show current date & time
  const now = new Date().toLocaleString("hi-IN");
  const dateElement = document.getElementById("date-time");
  if (dateElement) {
    dateElement.textContent = now;
  }
});

// 4. WhatsApp quick contact
function openWhatsApp(number) {
  window.open(`https://wa.me/${number}`, "_blank");
}

// 5. Scroll to section
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// 6. Toggle visibility for resources section
function toggleResources() {
  const section = document.getElementById("resources");
  if (section) {
    section.style.display =
      section.style.display === "none" ? "block" : "none";
  }
}

// 7. Filter contact list
function filterContacts() {
  const input = document.getElementById("searchBox").value.toLowerCase();
  document.querySelectorAll(".contact-card").forEach((card) => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(input) ? "block" : "none";
  });
}