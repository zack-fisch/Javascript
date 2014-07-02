var text = "Hello Zack, wonderful day isn't it?!";
var myName = "Zack";
var hits = [];

for (var i = 0; i < text.length; i++) {
    if (text[i] === myName[0]) {
        for (var j = i; j < myName.length + i; j++)
        {
            hits.push(myName);
            
        };
    };
};

if (hits.length === 0) {
    console.log("Your name wasnt found!");
}
else {
   console.log("Your name was found!"); 
}

