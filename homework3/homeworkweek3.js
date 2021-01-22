
class Animal {
    constructor(kindofanimal,name, legs, actionText, actionSoundName, picture) {
        this.kindofanimal=kindofanimal;
        this.name = name;
        this.legs = legs;
        this.actionText = actionText;
        this.actionSoundName = actionSoundName;
        this.picture = picture;
    }
    action(e) {
        e.stopPropagation();
        document.getElementById(this.actionSoundName).play();
    }
    openImage() {
        var pictures = document.getElementsByTagName("img")
        for (var i = 0; i < pictures.length; i++) {
            if (pictures[i].id === this.picture) {
                document.getElementById(pictures[i].id).style.display = "block";
            }
            else {
                document.getElementById(pictures[i].id).style.display = "none"
            }
        }
    }

    putInTheDocument() {
        var petsTable = document.getElementById("petsTable");
        var petTR = document.createElement("tr");
        petTR.setAttribute("id", "a");
       
        var animalTD=document.createElement("td");
        animalTD.textContent=this.kindofanimal;
        petTR.appendChild(animalTD);

        var petNameTD = document.createElement("td");
        petNameTD.textContent = this.name;
        petTR.appendChild(petNameTD);
        petNameTD.setAttribute("id", "catTD")

        var petLegsTD = document.createElement("td");
        petLegsTD.textContent = this.legs;
        petTR.appendChild(petLegsTD);

        var petActionTD = document.createElement("td");
        var petActionTDButton = document.createElement("button");
        petActionTDButton.textContent = this.actionText;
        petActionTD.appendChild(petActionTDButton);
        petTR.appendChild(petActionTD);

        petActionTDButton.onclick = this.action.bind(this);
        petTR.onclick = this.openImage.bind(this);

        petsTable.querySelector("tbody").appendChild(petTR);
    }
}

class Cat extends Animal {
    constructor(kindofanimal,name, legs, actionText, actionSoundName, picture) {
        super(kindofanimal,name, legs, actionText, actionSoundName, picture);
    }
}

class Monkey extends Animal {
    constructor(kindofanimal,name, legs, actionText, actionSoundName, picture) {
        super(kindofanimal,name, legs, actionText, actionSoundName, picture);
    }
}
class Lion extends Animal {
    constructor(kindofanimal,name, legs, actionText, actionSoundName, picture) {
        super(kindofanimal,name, legs, actionText, actionSoundName, picture);
    }
}
var Mila = new Cat("Cat","Mila", 4, "Meoow", "meow", "cat");
var Charlie = new Monkey("Monkey","Charlie", 2, "Scream", "scream", "monkey");
var King= new Lion("Lion","King",4," Lion","lionsound","lion");

Mila.putInTheDocument();
Charlie.putInTheDocument();
King.putInTheDocument();