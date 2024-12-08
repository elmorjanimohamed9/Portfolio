"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// Project modal functionality
const projectModalContainer = document.querySelector("[data-project-modal-container]");
const projectOverlay = document.querySelector("[data-project-overlay]");
const projectModalCloseBtn = document.querySelector("[data-project-modal-close-btn]");

// Modal elements
const projectModalTitle = document.querySelector("[data-project-modal-title]");
const projectModalImg = document.querySelector("[data-project-modal-img]");
const projectModalDescription = document.querySelector("[data-project-modal-description]");
const modalTechList = document.querySelector("[data-project-modal-tech]");
const modalLiveLink = document.querySelector("[data-project-modal-live]");
const modalGithubLink = document.querySelector("[data-project-modal-github]");
const modalFigmaLink = document.querySelector("[data-project-modal-figma]");

const projectModalFunc = function () {
  projectModalContainer.classList.toggle("active");
  projectOverlay.classList.toggle("active");
}

projectOverlay.addEventListener("click", projectModalFunc);
projectModalCloseBtn.addEventListener("click", projectModalFunc);

// Add click event to project items
const projectItems = document.querySelectorAll(".project-item");
projectItems.forEach(item => {
  item.addEventListener("click", function(e) {
    e.preventDefault();
    
    // Get project data from data attributes
    const title = this.querySelector(".project-title").textContent;
    const img = this.querySelector(".project-img img").src;
    const description = this.dataset.description;
    const techStack = this.dataset.techStack?.split(",") || [];
    const liveLink = this.dataset.liveDemo;
    const githubLink = this.dataset.github;
    const figmaLink = this.dataset.figma;

    // Update modal content
    projectModalTitle.textContent = title;
    projectModalImg.src = img;
    projectModalImg.alt = title;
    projectModalDescription.textContent = description;

    // Create tech stack list
    modalTechList.innerHTML = techStack.map(tech => 
      `<li class="tech-item">${tech.trim()}</li>`
    ).join("");

    // Update links and their visibility
    if (liveLink) {
      modalLiveLink.href = liveLink;
      modalLiveLink.style.display = "flex";
    } else {
      modalLiveLink.style.display = "none";
    }

    if (githubLink) {
      modalGithubLink.href = githubLink;
      modalGithubLink.style.display = "flex";
    } else {
      modalGithubLink.style.display = "none";
    }

    if (figmaLink) {
      modalFigmaLink.href = figmaLink;
      modalFigmaLink.style.display = "flex";
    } else {
      modalFigmaLink.style.display = "none";
    }

    projectModalFunc();
  });
});

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Notifications container for toast messages

let notifications = document.querySelector(".notifications");

function createToast(type, icon, title, text) {
  let newToast = document.createElement("div");
  newToast.innerHTML = `
     <div class="toast ${type}">
        <i class="${icon}"></i>
        <div class="content">
          <div class="title">${title}</div>
          <span>${text}</span>
        </div>
        <i class="fa-solid fa-xmark" onclick="this.parentElement.remove()"></i>
      </div>
  `;
  notifications.appendChild(newToast);
  newToast.timeOut = setTimeout(() => newToast.remove(), 5000);
}

/// Submit contact form and show toast notifications
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Check the honeypot field
    if (document.querySelector('input[name="website"]').value !== "") {
      createToast(
        "error",
        "fa-solid fa-circle-exclamation",
        "Error",
        "Failed to send message."
      );
      return;
    }

    // Check reCAPTCHA
    let recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
      // reCAPTCHA not verified
      createToast(
        "error",
        "fa-solid fa-circle-exclamation",
        "Error",
        "Please complete the CAPTCHA."
      );
      return;
    }

    emailjs.sendForm("service_xykr7zs", "template_r0wg1rx", this).then(
      function () {
        // Show success toast
        createToast(
          "success",
          "fa-solid fa-circle-check",
          "Success",
          "Message sent successfully!"
        );

        // Reset the form
        document.getElementById("contact-form").reset();
      },
      function () {
        // Show error toast
        createToast(
          "error",
          "fa-solid fa-circle-exclamation",
          "Error",
          "Failed to send message."
        );
      }
    );
  });

// Theme switcher functionality
const themeContainer = document.querySelector('.theme-container');
const themeBtn = document.querySelector('.theme-btn');
const themeColors = document.querySelectorAll('.theme-color');

// Toggle theme panel
themeBtn.addEventListener('click', () => {
  themeContainer.classList.toggle('active');
});

// Theme color update function
function updateTheme(color) {
  const root = document.documentElement;
  const themes = {
    blue: {
      primary: '#2A9AF6',
      secondary: '#01F9A6',
      gradient: 'linear-gradient(to right, #2A9AF6, #01F9A6)',
      bgGradient: 'linear-gradient(135deg, #003764, hsla(152, 100%, 30%, 0) 59.86%), hsl(150, 3%, 13%)',
      avatar: './assets/images/my-avatar-blue.png'
    },
    purple: {
      primary: '#b623fe',
      secondary: '#26cefd',
      gradient: 'linear-gradient(to right, #b623fe, #26cefd)',
      bgGradient: 'linear-gradient(135deg, #300048, hsla(152, 100%, 30%, 0) 59.86%), hsl(150, 3%, 13%)',
      avatar: './assets/images/my-avatar-purple.png'
    },
    orange: {
      primary: '#f93a00',
      secondary: '#f8cc21',
      gradient: 'linear-gradient(to right, #f93a00, #f8cc21)',
      bgGradient: 'linear-gradient(135deg, #551400, hsla(152, 100%, 30%, 0) 59.86%), hsl(150, 3%, 13%)',
      avatar: './assets/images/my-avatar-orange.png'
    }
  };

  const selectedTheme = themes[color];

  // Update avatar image
  const avatar = document.querySelector('.my-avatar') || document.querySelector('[alt="Mohamed El Morjani"]');
  if (avatar) {
    avatar.src = selectedTheme.avatar;
  }

  // Update CSS variables
  root.style.setProperty('--orange-yellow-crayola', selectedTheme.primary);
  root.style.setProperty('--vegas-gold', selectedTheme.secondary);
  root.style.setProperty('--text-gradient-blue', selectedTheme.gradient);
  root.style.setProperty('--bg-gradient-Blue-1', `linear-gradient(to bottom right, 
    ${selectedTheme.primary},
    hsla(36, 100%, 69%, 0) 50%)`);
  root.style.setProperty('--bg-gradient-yellow-2', selectedTheme.bgGradient);

  // Update icon boxes hover effect
  const style = document.createElement('style');
  style.textContent = `
    .icon-box-skills:hover {
      background: linear-gradient(to bottom right, 
        ${selectedTheme.primary},
        hsla(36, 100%, 69%, 0) 50%) !important;
    }
    .timeline-item::after {
      background: ${selectedTheme.gradient} !important;
      box-shadow: 0 0 0 4px var(--jet);
    }
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 ${selectedTheme.primary}66;
      }
      70% {
        box-shadow: 0 0 0 10px ${selectedTheme.primary}00;
      }
      100% {
        box-shadow: 0 0 0 0 ${selectedTheme.primary}00;
      }
    }
  `;

  // Remove old style element if exists
  const oldStyle = document.getElementById('theme-styles');
  if (oldStyle) {
    oldStyle.remove();
  }

  // Add new style element
  style.id = 'theme-styles';
  document.head.appendChild(style);

  // Update devicon colors
  const icons = document.querySelectorAll('.icon-box i');
  icons.forEach(icon => {
    if (icon.classList.contains('colored')) {
      icon.style.color = selectedTheme.primary;
    }
  });

  // Save theme preference
  localStorage.setItem('selected-theme', color);

  // Show notification
  showNotification(`Theme updated to ${color}`, 'success');
}

// Handle color selection
themeColors.forEach(color => {
  color.addEventListener('click', () => {
    // Remove active class from all colors
    themeColors.forEach(c => c.classList.remove('active'));
    // Add active class to selected color
    color.classList.add('active');

    const selectedColor = color.dataset.color;
    updateTheme(selectedColor);
  });

  // Set active class for saved theme
  if (color.dataset.color === localStorage.getItem('selected-theme')) {
    color.classList.add('active');
  }
});

// Close panel when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.theme-container')) {
    themeContainer.classList.remove('active');
  }
});

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('selected-theme');
  if (savedTheme) {
    updateTheme(savedTheme);
  }
});

// Notification function
function showNotification(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check"></i>
    <div class="content">
      <div class="title">Success</div>
      <span>${message}</span>
    </div>
    <i class="fa-solid fa-xmark" onclick="this.parentElement.remove()"></i>
  `;

  const notifications = document.querySelector('.notifications') || (() => {
    const div = document.createElement('div');
    div.className = 'notifications';
    document.body.appendChild(div);
    return div;
  })();

  notifications.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 5000);
}