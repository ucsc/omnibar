function subButton(txt) {
  window.location.href = "http://www.google.com/search?q=" + txt + " site:ucsc.edu";
}

function checkSubmit() {
   if(e && e.keyCode == 13) {
      document.forms[0].submit();
   }
}
