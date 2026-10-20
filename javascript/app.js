const toggleBtn = document.getElementById("toggle-btn");
const toggleIcon = document.getElementById("toggle-icon");
const mobileMenu = document.getElementById("mobile-menu");

toggleBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("-translate-y-36000")) {
    toggleIcon.classList.remove("ph-list");
    toggleIcon.classList.add("ph-x");
    mobileMenu.classList.remove("-translate-y-36000");
  } else {
    toggleIcon.classList.remove("ph-x");
    toggleIcon.classList.add("ph-list");
    mobileMenu.classList.add("-translate-y-36000");
  }
});

const faqItems = document.querySelectorAll(".faq-content");

faqItems.forEach((item) => {
  const header = item.querySelector(".faq-header");
  const buttonIcon = item.querySelector("button i");

  header.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    faqItems.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("active")) {
        otherItem.classList.remove("active");
        otherItem.style.height = "4.5rem";
        const otherIcon = otherItem.querySelector("button i");
        if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
      }
    });

    if (!isOpen) {
      item.classList.add("active");
      item.style.height = item.scrollHeight + "px";
      buttonIcon.classList.remove("ph-plus");
      buttonIcon.classList.add("ph-minus");
    } else {
      item.classList.remove("active");
      item.style.height = "4.5rem";
      buttonIcon.classList.add("ph-plus");
      buttonIcon.classList.remove("ph-minus");
    }
  });
});

const currentYear = document.getElementById("current-year");

currentYear.innerHTML = new Date().getFullYear();
