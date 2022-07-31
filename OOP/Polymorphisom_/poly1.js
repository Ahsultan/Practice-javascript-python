const bicycle = {
    bell: function()
    {
        return "Ring, ring! Get away, Please!"
    }
}

const door = {
    bell: function() 
    {
        return "Ring, ring! Open the door, please!"
    }
}


function ringTheBell(thing) {
    console.log(thing.bell())
}


ringTheBell(bicycle);
ringTheBell(door);