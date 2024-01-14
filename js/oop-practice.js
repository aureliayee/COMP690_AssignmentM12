// STEP 1
// function Cat() {}
// const Dog = function() {}


// STEP 2
// const cat1 = new Cat()
// const dog1 = new Dog()

// STEP 3
// class Animal {
//     constructor() {
//         console.log(`The Animal has been created.`)
//     }
// }
// const animal1 = new Animal()


// STEP 4
// class Animal {
//     constructor(animal) {
//         this._animal = animal
//         console.log(`The ${this._animal} has been created.`)
//     }
// }
// const animal1 = new Animal('Cat')

// STEP 5
// class Animal {
//     constructor(type,breed,color,height,length) {
//         this._type = type
//         this._breed = breed
//         this._color = color
//         this._height = height
//         this._length = length
//         console.log(`The ${this._type} is a ${this._breed} and is ${this._color}, ${this._height}, and ${this._length}`)
//     }
// }
// const cat1 = new Animal('Cat', 'Bengal', 'Black', '11inches', '10lbs')



// STEP 6
// class Animal {
//     constructor(type,breed,color,height,length) {
//         this._type = type
//         this._breed = breed
//         this._color = color
//         this._height = height
//         this._length = length
//     }
// }
// const cat1 = new Animal('Cat', 'Bengal', 'Black', '11inches', '10lbs')
// for(let prop in cat1){
//     console.log(cat1[prop]);
// }

// STEP 7
// const speak = {
//     displayInfo: function(type, color) {
//         if (type === 'dog') {
//             return `The ${color} dog is barking`
//         } else if (type === 'cat') {
//             return `The ${color} cat is meowing`
//         }
//     }
// }
// const Animal = speak
// console.log(Animal.displayInfo('dog', 'white'))
// console.log(Animal.displayInfo('cat', 'black'))

// STEP 8
// function Animal(type) {
//     let _type = type
//     let checkType = function() {
//         console.log(`The ${_type} has made a noise!`)
//     }
//     this.speak = function() {
//         checkType()
//     }
// }
// const Cat = new Animal('Cat')
// Cat.speak()
// const Dog = new Animal('Dog')
// Dog.speak()


// STEP 9
// Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype.
function findWords(words) {   
    function getWords(word) {
        let text = 'With innovative approaches and advanced methodologies, Vecta Corporation provides scalable business solutions to help companies achieve success through revenue increase, cost management, and user satisfaction. Our approach stems from the three most important business growth aspects: helping companies reach prospects, assist in converting prospects to customers, and assist in retaining those customers. This is accomplished through our interactive solutions and expertise in providing a memorable and positive user experience.'
        let arrWords = text.split(' ')
        function count(arrWords, element) {
            return arrWords.filter(
                (ele) => ele == element).length;
        };
        return count(arrWords, word)
    }
    let word = words
    let _countWords = getWords(word)
    let _words = words
    alert(`Number of "${_words}" is ${_countWords}`)
}
findWords('and')
