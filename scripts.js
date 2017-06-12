// scripts.js

var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur ="Triceratops";
var dinosaurUpperCased = dinosaur.toUpperCase(); //duże litery do zmiennej "dinosaur" 
var replacement = text.replace("Velociraptor", dinosaurUpperCased); // zmienna "dinosaur" duzymi literami zastępuje słowo "velociraptor" w stringu "text"

alert(replacement); 
console.log(replacement); //zmieniony string 

console.log(replacement.length / 2); // wyświetli 144

alert(replacement.substr(0, replacement.length / 2)); 
console.log(replacement.substr(0, replacement.length / 2)); // (samo replacement.length / 2) - pokazuje połowę, ale drugą