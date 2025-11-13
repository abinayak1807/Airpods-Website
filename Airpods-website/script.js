  // Toggle menu
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    // Active link underline change on click
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
  link.addEventListener('click', (e) => {
    // allow navigation to work normally
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

    // Dropdown toggle on click
    const profileBtn = document.getElementById('profileBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');
    document.addEventListener('click', (e) => {
      if (profileBtn.contains(e.target)) {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
      } else {
        dropdownMenu.style.display = 'none';
      }
    });

    // Search redirect
    function redirectSearch() {
      const query = document.getElementById('searchInput').value.trim();
      if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      }
    }
    const bell = document.querySelector('.fa-bell');
const notificationBox = document.getElementById('notificationBox');

bell.addEventListener('click', () => {
    notificationBox.style.display =
        notificationBox.style.display === 'block' ? 'none' : 'block';
});

// Close on outside click
document.addEventListener('click', (e) => {
    if (!bell.contains(e.target) && !notificationBox.contains(e.target)) {
        notificationBox.style.display = "none";
    }
});

// Auto open tab based on URL parameter
const params = new URLSearchParams(window.location.search);
if (params.get("tab") === "password") {
    document.querySelector("[data-target='passwordSection']").click();
}
