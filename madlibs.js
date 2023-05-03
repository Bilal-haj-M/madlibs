/**
 * Complete the implementation of parseStory.
 *
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 *
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 *
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 *
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 *
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */

const edit = document.querySelector('.madLibsEdit');
const previer = document.querySelector('.madLibsPreview');

// create input 
function createInput( type, index ){
  const input = document.createElement('input');
  input.setAttribute('placeholder', type);
  input.setAttribute('class', 'input')

  edit.appendChild(input)
  //your code here  
  const inputs = document.getElementsByClassName('input');
  const inputsArr = Array.from(inputs)
  inputsArr.map( input => {
    input.addEventListener('change', e => {
      //codes
      console.log(createWordObject( arr ))
      console.log(e.target.value)
    })
  })
}



function createText(word){
  edit.innerHTML += ` ${word} `
}

function createPreviewText(word){

  previer.innerHTML += ` ${word} `
}

function parseStory(rawStory) {
  // Your code here.
  const newArr = rawStory.split(' ');
  const words = createWordObject(newArr);
  console.log(newArr)
  return words; 
}

const story = [];

function createWordObject( arr ){

  arr.forEach(item => story.push(item) )
  console.log(story, 'asdfasdfasdfasdf')
  ourStory = arr.map(item => {
    const myObject = {};
    if( item.includes('[n]')){
      myObject.pos = 'noun';
      let restoredItem = item.replace('[n]','')
      myObject.word = restoredItem;
      //
      createInput('noun'); 
      createPreviewText(myObject.word)
    } else if (item.includes('[v]')){
      myObject.pos = 'verb';
      let restoredItem = item.replace('[v]','')
      myObject.word = restoredItem;
      //
      createInput('verb') 
      createPreviewText(myObject.word)
    } else if ( item.includes('[a]')){
      myObject.pos = 'adjactive'
      let restoredItem = item.replace('[a]','')
      myObject.word = restoredItem;
      //
      createInput('adj') 
      createPreviewText(myObject.word)
    } else {
      myObject.word = item;
      createText(myObject.word);
      createPreviewText(myObject.word)
    }
    return myObject;
  });

  return ourStory
}





/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 *
 * NOTE: You should not be writing any code in the global namespace EXCEPT
 * declaring functions. All code should either:
 * 1. Be in a function.
 * 2. Be in .then() below.
 *
 * You'll want to use the results of parseStory() to display the story on the page.
 */



getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    console.log(processedStory);
  });

