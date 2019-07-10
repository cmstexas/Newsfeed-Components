// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

// class Article {
//   constructor(domElement) {
//     // assign this.domElement to the passed in domElement
//     this.domElement = domElement;
    
//     // create a reference to the ".expandButton" class. 
//     this.expandButton = this.domElement.querySelectorAll('.expandButton');

//     // Using your expandButton reference, update the text on your expandButton to say "expand"

//     this.expandButton.forEach((button) => {
//       button.textContent = 'expand';
//     })
    
//     // Set a click handler on the expandButton reference, calling the expandArticle method.
//     //expanding the articles upon clicking "expand"//
    
//     this.expandButton.forEach((button) => {
//       button.addEventListener('click', (event) => {
//         this.expandArticle(event);
//       })
//     })
//   }



// const article = document.querySelectorAll('.article');


// panelData.forEach(data => {
//   console.log('creating panel:', data.title)
//   accordion.appendChild(createPanel(data.title, data.content))
// })

//define new elements

function createArticleComponent() {
  const article = document.createElement('div')
  const articleTitle = document.createElement('h2');
  const articleDate = document.createElement('p');
  const paragraphOne = document.createElement('p');
  const paragraphTwo = document.createElement('p');
  const paragraphThree = document.createElement('p');
  const buttonPanel = document.createElement('div');
  const expandButton = document.createElement('span');
  // const buttonOpen = document.createElement('button');
  // const buttonClose = document.createElement('button');

  
//setup structure of elements

articles.appendChild(article)
article.appendChild(articleTitle)
article.appendChild(articleDate)
article.appendChild(paragraphOne)
article.appendChild(paragraphTwo)
article.appendChild(paragraphThree)
article.appendChild(expandButton)

//set class names

article.classList.add('article')
articleDate.classList.add('date')
expandButton.classList.add('expandButton')

// set text content
buttonOpen.textContent = 'Open'
buttonClose.textContent = 'Close'
articleContent.textContent = content
articleTitle.textContent = title


// button events

expandButton.addEventListener('click', event => {
  console.log('button clicked', event.target)
  // 1. toggle hide-btn on BOTH buttons
  buttonOpen.classList.toggle('hide-btn')
  buttonClose.classList.toggle('hide-btn')
  // 2. Change visibility of the content w/ 'toggle-on'
  article.classList.toggle('toggle-on')
})

return article
}



//   expandArticle(){
//     // Using our reference to the domElement, toggle a class to expand or hide the article.
//         //TOGGLE the articles//


//     console.log('toggle success');
//     this.domElement.classList.toggle('article-open');
//   }
// }

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

// let articles = document.querySelectorAll('.article');

// console.log(articles);

// OLD
//  articles.forEach((article) => {
//   return new Article(article);
// })





//STRETCH -- Add read button and make them all disapear on click - changed to selectAll//

//     const buttonDisapear = document.querySelectorAll('.readbutton');
//     buttonDisapear.forEach((readbutton) => {
//         readbutton.addEventListener('click', (event) => {
//         event.target.style.visibility = 'hidden';
//         event.stopPropagation;
//     });
// })
