function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

var en = true;
var fin = false;
var lang = localStorage.getItem('lang');

window.onload = function showPopUp() {
    var visited = sessionStorage.getItem('visited');
    if (!visited) {
      alert("You are going to get few alerts now. Pls read them carefully");
      if (!document.all) {
        alert('Good job you are not using internet explorer. Lucky for you');
      }
      alert("This site is optimized for halfscreen and mobile");
      alert("Oh and this site uses your sessionStorage (Not cookies) so you don't see these alert more than 1 time per session");
      alert("To show these again close and open this tab again");
      alert("Thank you for your attention and co-operating :D");
      sessionStorage.setItem('visited', true);
      localStorage.setItem('lang', true);
    }
}

function check() {
    if (document.all === true) {
        alert('We strongly recommend using good browser like google chrome instead of this shitty one');
      }
    if (!lang) {
        kaanto();
    }
    if (Function('/*@cc_on return document.documentMode===10@*/')()){
        document.documentElement.className+=' ie10';
    }
    if (Function('/*@cc_on return document.documentMode===11@*/')()){
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
    if (!lang) {
        localStorage.setItem('kieli', true);
    }
    else {
        localStorage.setItem('kieli', false);
    }
}
