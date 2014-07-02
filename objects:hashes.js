var friends = {
   bill: {
    firstName: 'Bill',
    lastName: 'Schwartz',
    number: '911',
    address: ['12', 'Redmond Street', 'Toronto']
   },
   steve: {
       firstName: 'Steve',
       lastName: 'Stevens',
       number: '912',
       address: ['11', 'Players Way', 'Toronto']
   }
};

var list = function (friends) {

for (var key in friends) {
    console.log(key);
}

};

var search = function (name) {
    for (var key in friends) {
        if (friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
        else {
            console.log("No match!");
        }
    }
};
