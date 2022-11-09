// BigO of Object
// insertion => O(1)
// Removal => O(1)
// Searching => O(n)
// Access => O(1)

let instrcutor = {
    firstName: 'James',
    isInstructor: true,
    favoriteNumbers: [7, 2, 22, 12]
}

Object.keys(instrcutor) // output [FirstName, isInstructor, favoriteNumbers]

// hasOwnProperty
instrcutor.hasOwnProperty("firstName") // output true