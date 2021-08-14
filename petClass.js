let pets = []

// user input here for those variables here

class Pet {
    constructor(Fur, petSize) {

        let size = petSize.value

        if(size == undefined || typeof(size) != "string")
        {
            throw Error("No size!!")
        }

        let furValue = Fur.value;

        if(furValue == undefined || typeof(furValue) != "string")
        {
            throw Error("No fur!!")
        }

        //////////////////////////////////////  SMALL


        if (size == "small") {
            pets = ["frog", "small-cat", "small-dog", "bird"]

            if (furValue == "y") {
                pets = ["small-cat", "small-dog"]
            }
            
            if (furValue == "n")
            {
                pets = ["frog", "bird"]
            }

        }

        /////////////////////////////////////////  MEDIUM

        if (size == "medium") {
            pets = ["parrot", "dog", "cat"]
        

        if (furValue == "y") {
            pets = ["dog", "cat"]
        }
        
        if (furValue == "n")
        {
            pets = ["parrot"]
        }

    }
        //////////////////////////////////////////  LARGE

        if (size == "large") {
            pets = ["big-dog"]
        }
        let Output = document.getElementById("output")
        Output.innerHTML = JSON.stringify(pets)
    }

    /////////////////////////////////////////

}