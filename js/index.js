document.addEventListener("DOMContentLoaded", function () {
  // Initialize fullpage.js
  new fullpage("#fullpage", {
    licenseKey: "gplv3-license",
  });

  // Handle subscription button click for all elements with class '.subscription'
  const subscriptionButtons = document.querySelectorAll(".subscription");
  subscriptionButtons.forEach(function (subscriptionButton) {
    subscriptionButton.addEventListener("click", function () {
      window.location.href = "https://megogo.net/payment";
    });
  });

  // Handle detail link click
  const detailLink = document.querySelector(".detail");
  detailLink.addEventListener("click", function () {
    // Redirect to details page
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

  // Variable to track if the side menu is open or closed
  let isOpen = false;


  function closeMenu() {
    // Function to close the side menu
    isOpen = false;
    sideMenu.style.width = "0";
  }

  // Event listener for clicking the menu button
  menuButton.addEventListener("click", function () {
    isOpen = !isOpen;
    // Open or close the menu based on the value of isOpen
    sideMenu.style.width = isOpen ? "200px" : "0";
  });

  // Event listener for clicking anywhere on the document
  document.addEventListener("click", function (event) {
    // Check if the click event occurred outside the side menu and menu button
    if (!sideMenu.contains(event.target) && event.target !== menuButton) {
      closeMenu(); // Close the menu if the click was outside of it
    }
  });
});
