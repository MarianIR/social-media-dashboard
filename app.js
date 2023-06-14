const sliderToggle = document.querySelector(".slider");
const body = document.querySelector("body");
const mainHeading = document.querySelector(".main-heading");
const socialMediaPlatform = document.querySelectorAll(".social-media-platform");
const numOfFollowers = document.querySelectorAll(".number-of-followers");
const overview = document.querySelector(".overview");
const follow = document.querySelectorAll(".follow");
const statistics = document.querySelectorAll(".statistics");

let isToggled = false; // Keep track of toggle state

sliderToggle.addEventListener("click", (e) => {
  isToggled = !isToggled; // Toggle the state on each click

  if (isToggled) {
    // Change colors
    body.style.backgroundColor = "white";
    mainHeading.style.color = "hsl(230, 17%, 14%)";
    socialMediaPlatform.forEach((element) => {
      element.style.backgroundColor = "hsl(225, 100%, 98%)";
    });
    numOfFollowers.forEach((eachFollow) => {
      eachFollow.style.color = "hsl(230, 17%, 14%)";
    });
    overview.style.color = "hsl(228, 34%, 66%)";
    statistics.forEach((eachStatistic) => {
      eachStatistic.style.backgroundColor = "hsl(225, 100%, 98%)";
    });
    follow.forEach((eachOne) => {
      eachOne.style.color = "hsl(230, 17%, 14%)";
    });
  } else {
    // Revert back to default colors
    body.style.backgroundColor = ""; // Revert to default
    mainHeading.style.color = ""; // Revert to default
    socialMediaPlatform.forEach((element) => {
      element.style.backgroundColor = ""; // Revert to default
    });
    numOfFollowers.forEach((eachFollow) => {
      eachFollow.style.color = ""; // Revert to default
    });
    overview.style.color = ""; // Revert to default
    statistics.forEach((eachStatistic) => {
      eachStatistic.style.backgroundColor = ""; // Revert to default
    });
    follow.forEach((eachOne) => {
      eachOne.style.color = ""; // Revert to default
    });
  }
});
