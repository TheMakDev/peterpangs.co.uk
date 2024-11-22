function showSidebar(){
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = "flex"
}
function hideSidebar(){
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = "none"
}


const headerContainer = document.getElementById("custom_header");
const headerContainer2 = document.getElementById("custom_header2");
const headerDiv = document.createElement("div");

function createCustomHeader(header) {
  headerDiv.innerText = header;
  headerDiv.className = "main_custom_header";
  headerContainer.appendChild(headerDiv);
}


//------------------ Workshop List

const workShopList = [
  "Trusted Solutions",
  "100% Satisfaction Guarantee",
  "Quality Control System",
  "Accourate Testing Process",
  "Commitment to Quality",
  "Timely Delivery",
];
const listContainer = document.getElementById("workshop_list");
const listUl = document.createElement("ul");
listUl.className = "workshop_list_container";
listContainer.appendChild(listUl);
function handleCreateList() {
  for (let i = 0; i < workShopList.length; i++) {
    const listLi = document.createElement("li");
    listLi.innerText = workShopList[i];
    listUl.appendChild(listLi);
  }
}
handleCreateList();


window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal'); // Get all elements with class 'reveal'

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150; // When the element should start revealing

    // Add 'active' when the element comes within the reveal point
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

function button(){
  alert("someThing went wrong")
}

let lastScrollTop = 0; // To track the last scroll position
const socialBar = document.querySelector('.social_bar'); // The social bar element

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // If scrolling down
    if (currentScroll > lastScrollTop) {
        // Add a class to hide the social bar
        socialBar.style.transform = 'translateY(-100%)'; // Slide it up
    } else {
        // If scrolling up, bring the social bar back
        socialBar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll value
});
