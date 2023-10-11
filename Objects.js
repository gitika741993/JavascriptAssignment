class Person {

  constructor(name, address, dob, passportNo) {

    this.name = name;

    this.address = address;

    this.dob = dob;

    this.passportNo = passportNo;

  }

  // Getter for Name

  get getName() {

    return this.name;

  }

  // Setter for Name
  set setName(name) {

    this.name = name;

  }

 

  // Getter for Address

  get getAddress() {

    return this.address;

  }

 

  // Setter for Address

  set setAddress(address) {

    this.address = address;

  }

 

  // Getter for Date of Birth

  get getDob() {

    return this.dob;

  }

 

  // Setter for Date of Birth

  set setDob(dob) {

    this.dob = dob;

  }

 

  // Getter for Passport No

  get getPassportNo() {

    return this.passportNo;

  }

 

  // Setter for Passport No

  set setPassportNo(passportNo) {

    this.passportNo = passportNo;

  }

 

  // Method to print the address in a 3-line format

  printAddress() {

    const addressLines = this.address.split(', ');

    return `${addressLines[0]}\n${addressLines[1]}\n${addressLines[2]}`;

  }

 

  // Method to calculate age from DOB

  calculateAge() {

    const dobDate = new Date(this.dob);

    const today = new Date();

    const age = today.getFullYear() - dobDate.getFullYear();

    return age;

  }

}

 

// Creating a Person object

const person = new Person('John Doe', '1234 Elm St, Springfield, IL', '1990-05-15', 'AB123456');

 

// Accessing properties and methods

console.log('Name:', person.getName);

console.log('Address:', person.printAddress());

console.log('Age:', person.calculateAge());
