// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelectorAll('.expandButton');

    // Using your expandButton reference, update the text on your expandButton to say "expand"

    this.expandButton.forEach((button) => {
      button.textContent = 'expand';
    })
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    //expanding the articles upon clicking "expand"//
    
    this.expandButton.forEach((button) => {
      button.addEventListener('click', (event) => {
        this.expandArticle(event);
      })
    })
  }
  

  expandArticle(){
    // Using our reference to the domElement, toggle a class to expand or hide the article.
        //TOGGLE the articles//


    console.log('toggle success');
    this.domElement.classList.toggle('article-open');
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');
// console.log(articles);

 articles.forEach((article) => {
  return new Article(article);
})



//STRETCH -- Add read button and make them all disapear on click - changed to selectAll//

    const buttonDisapear = document.querySelectorAll('.readbutton');
    buttonDisapear.forEach((readbutton) => {
        readbutton.addEventListener('click', (event) => {
        event.target.style.visibility = 'hidden';
        event.stopPropagation;
    });
})
