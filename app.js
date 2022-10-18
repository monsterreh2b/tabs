
var btnHistory = document.getElementById("btnHistory");
var btnVision = document.getElementById("btnVision");
var btnGoals = document.getElementById("btnGoals");
var about = document.querySelector(".about");

console.log(btnHistory);
console.log(btnVision);
console.log(btnGoals);


var tabs = document.querySelectorAll(".tab-btn");
var content = document.querySelectorAll(".content");
console.log(content);
var contentHistory = document.getElementById("history");
var contentVision = document.getElementById("vision");
var contentGoals = document.getElementById("goals");

// console.log(contentHistory);
// console.log(contentVision);
// console.log(contentGoals);

function resetContentAndTabs() {
  content.forEach(function (cont) {
    
    if (cont.classList.contains("active")) {
      cont.classList.remove("active");
    }
   console.log(cont);
  });
  tabs.forEach(function (tab) {
    
    if (tab.classList.contains("active")) {
      tab.classList.remove("active");
    }
    console.log(tab);
  });
  // console.log(content);
  // console.log(tabs);
  
}

function showVision() {
  resetContentAndTabs();
  about.addEventListener("click", function (e) {
    console.log(e.target.dataset.id);
     if(e.target.dataset.id === "vision") {
        e.target.classList.add("active");
     }
    
    
  });
  contentVision.classList.add("active");
}

function showHistory() {
  resetContentAndTabs();
  about.addEventListener("click", function (e) {
    console.log(e.target.dataset.id);
    if (e.target.dataset.id === "history") {
      e.target.classList.add("active");
    }
  });
  contentHistory.classList.add("active");
}

function showGoals() {
  resetContentAndTabs();
  about.addEventListener("click", function (e) {
    console.log(e.target.dataset.id);
    if (e.target.dataset.id === "goals") {
      e.target.classList.add("active");
    }
  });
  contentGoals.classList.add("active");
}

btnVision.onclick = showVision;
btnHistory.onclick = showHistory;
btnGoals.onclick = showGoals;



























