function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

var ode = false;
var checki = false;

window.onload = function showPopUp() {
    var visited = localStorage.getItem('visited');
    if (!visited) {
      var lastOne = false;
      while (lastOne == false) {
      var r = confirm("You are going to get few alerts now. Pls read them carefully. If you press 'Stop reseiving messages from this site' this site won't function at all");
      if (r == true) {
         if (!document.all) {
            var n = confirm("Good job your browser is <" + layoutEngine.browser + "> not a IE");
            alert("(We didn't guess that! There is actually pretty complex function that checks your browser type)")
         } else {
            var n = confirm("Pls get better browser like chrome");
         }
         if (n == true) {
          ode = confirm("Would you like to use cookies in this site?");
          if (ode == true) {
            alert("Thank you! We use them to remember your language selection. It will stay same for a year");
              checki = true;
          }
          if (ode == false) {
            var cok = confirm("Are you sure? we use them to remember your language selection. Nothing else OK = you are sure");
             if (cok == true) {
                alert("okay :(")
                ode = true;
             }
          }
          if (ode== true) {
            alert("Some background photos are quite big so pls just give them some time to load :(")
            lastOne = confirm("Thanks for your co-operating you are free to enter now!");
          }
         }
      } 
      localStorage.setItem('visited', true);
      }
    }
}

function check() {
    var valinta = getCookie("kielenValinta");
    if (valinta == "fin") {
      kaanto();
    }
    if (Function('/*@cc_on return document.documentMode===10@*/')()){
        document.documentElement.className+=' ie10';
    }
}

function kaanto(){
        var x = document.getElementsByClassName("content");
        var y = document.getElementsByClassName("kieli");
        var z = document.getElementsByClassName("otsikko");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].classList.toggle("noLang");
        }
        var i;
        for (i = 0; i < y.length; i++) {
            y[i].classList.toggle("selected");
        }
        var i;
        for (i = 0; i < z.length; i++) {
            z[i].classList.toggle("noLang");
        }
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function langToggle() {
    kaanto();
    checkCookie();
}

function setCookie(cname, cvalue, exdays, osoite) {
    var domain_string = osoite ? ("; domain=" + osoite) : '' ;
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" + domain_string;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var valinta = getCookie("kielenValinta");
    if (valinta == "fin") {
      setCookie("kielenValinta", "en", 365, "nipatiitti.tk");
    } else  if (valinta == "en"){
      setCookie("kielenValinta", "fin", 365, "nipatiitti.tk");
    } else if (checki == true){
      setCookie("kielenValinta", "en", 365, "nipatiitti.tk");
    }
}
