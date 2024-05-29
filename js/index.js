document.addEventListener("DOMContentLoaded", function () {
  // Initialize fullpage.js
  new fullpage("#fullpage", {
    licenseKey: "gplv3-license",
  });

  // Handle subscription button click for all elements with class '.subscription'
  const subscriptionButtons = document.querySelectorAll(".subscription");
  subscriptionButtons.forEach(function (subscriptionButton) {
    subscriptionButton.addEventListener("click", handleSubscriptionClick);
  });
  // Function to handle subscription button clicks
  function handleSubscriptionClick() {
    window.location.href = "https://megogo.net/payment";
  }

  // Handle detail link click
  const detailLink = document.querySelector(".detail");
  detailLink.addEventListener("click", function () {
    window.location.href = "https://megogo.net/ua/kino_i_tv";
  });

  // Handle arrow icon click to move section down
  const arrowIcon = document.querySelector(".arrow");
  arrowIcon.addEventListener("click", function () {
    fullpage_api.moveSectionDown();
  });

  // Handle menu button click to toggle side menu
  const menuButton = document.getElementById("menuButton");
  const sideMenu = document.getElementById("sideMenu");

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    sideMenu.style.width = isOpen ? "200px" : "0";
  }

  // Event listener for clicking the menu button
  menuButton.addEventListener("click", function () {
    toggleMenu();
  });

  // Close the menu if click is outside the menu and menu button
  document.addEventListener("click", function (event) {
    if (!sideMenu.contains(event.target) && event.target !== menuButton) {
      isOpen = false;
      sideMenu.style.width = "0";
    }
  });

  // Function to set the correct value for the '--vh' CSS variable
  function setViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  // Set the correct value when the page loads
  setViewportHeight();

  // Update the value when the window is resized
  window.addEventListener("resize", setViewportHeight);
});
