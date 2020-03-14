/********* Closures ********/

// Example 1
function setName() {
  const name = 'Ali';
  return function getName() {
    return name;
  }
}

const newFun = setName();
console.log(newFun());


// Example 2
function getScore() {
  const user = 'CR7';
  return function goalScored() {
    let goals = 700;
    return `${user} has scored ${goals} goals.`;
  }
}

const getDetails = getScore();
console.log(getDetails());


// Example 3
const notes = (function () {
  let title = 'My title';
  let showTitle = () => {
    return title;
  }

  return {
    showTitle: showTitle
  }
})();

console.log(notes.showTitle());


// Example 4
const app = {
  user: 'My title',
  getId() {
    const id = 123;
    return function () {
      return id;
    }
  }
}

const newApp = app.getId();
console.log(newApp());


/********* Using 'this' keyword ********/

const object = {
  title: 'My title',
  printTitle() {
    return this.title;
  }
}

console.log(object.printTitle());

const objectTwo = {
  title: 'New Object',
  books: ['a', 'b', 'c', 'd'],
  showBooks() {
    this.books.forEach(book => {
      console.log(this.title, book);
    })
  }
}
console.log(objectTwo.showBooks());