function onLink(name) {
    //TODO: Possible pushHistory here so backspace action
    //returns to last viewed repo page instead of last
    //website
    
    //Sets the object's source to a new file
    var element = document.getElementById("view");

    //Don't make the page load over and over when user clicks the same link
    if(element.innerHTML.indexOf(name + ".html") != -1) return;
    element.innerHTML = "<object type='text/html' data='repos/" + name + ".html'></object>";
}
