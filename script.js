function onLink(name) {
    //TODO: Possible pushHistory here so backspace action
    //returns to last viewed repo page instead of last
    //website
    
    //Sets the object's source to a new file
    document.getElementById("view").setAttribute('data', 'repos/' + name + '.html');
}
