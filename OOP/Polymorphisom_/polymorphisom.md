Polymorphism is a word derived from the Greek language meaning "multiple forms". An alternative translation might be: "something that can take on many shapes".

So, to understand what polymorphism is about, let's consider some real-life objects.

A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.

Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.

The above concepts can be coded in JavaScript as follows:

23456789101
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}
So, I can access the bell() method on the bicycle object, using the following syntax:  

1
bicycle.bell(); // "Get away, please"
I can also access the bell() method on the door object, using this syntax:  

1
door.bell(); // "Come here, please"
At this point, one can conclude that the exact same name of the method can have the exact opposite intent, based on what object it is used for.

Now, to make this code truly polymorphic, I will add another function declaration:

123
function ringTheBell(thing) {
    console.log(thing.bell())
}
Now I have declared a ringTheBell() function. It accepts a thing parameter - which I expect to be an object, namely, either the bicycle object or the door object.

So now, if I call the ringTheBell() function and pass it the bicycle as its single argument, here's the output:

1
ringTheBell(bicycle); // Ring, ring! Watch out, please!
However, if I invoke the ringTheBell() function and pass it the door object, I'll get the following output: 

1
ringTheBell(door); // "Ring, ring! Come here, please!"
You've now seen an example of the exact same function producing different results, based on the context in which it is used.