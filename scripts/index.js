(function setCurrentLinkActive() {
  var navLinks = document.querySelector("#navBar").childNodes;
  var i = 0;
  navLinks.forEach(function(currentValue) {
    console.log(i++);
    if (currentValue.nodeName == "A") {
      if (currentValue.pathname == location.pathname) {
        console.log("matching pathname");
        currentValue.classList.add("activeNavLink");
      } else {
        currentValue.classList.add("inactiveNavLink");
      }
    }
  });
}());
