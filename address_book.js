var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

var search = function(lastName) {
    contactsLength = contacts.length
    
    for (var i = 0; i < contactsLength; i++) {
        if (lastName === contacts[i].lastName) {
            printPerson(contacts[i]);
        };
        
    };
};

var add = function(firstName, lastName, email, phoneNumber) {
    var contact = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber
    };
    
    contacts.push(contact);
}

add('Zack', 'Fisch', 'zackf', '555');
list();