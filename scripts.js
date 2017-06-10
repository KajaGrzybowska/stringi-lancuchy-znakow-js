// scripts.js

var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period";
var dinosaur ="Triceratops";
var dinosaurUpperCased = dinosaur.toUpperCase();
var replacement = text.replace("Velociraptor", dinosaurUpperCased);

alert(replacement);
console.log(replacement);

console.log(replacement.length / 2);

alert(replacement.substr(0, 72));
console.log(replacement.substr(0, 72));