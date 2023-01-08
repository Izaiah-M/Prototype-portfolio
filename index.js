const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (tabcontent of tabContents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

const sidemenu = document.getElementById("sidemenu");

function openMenu() {
  sidemenu.style.right = "0";
}
function closeMenu() {
  sidemenu.style.right = "-200px";
}
