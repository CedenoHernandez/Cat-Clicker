
let model = {
  currentCat: null,
  cats: [
    {
      name: "Theo",
      clickCount: 0,
      imgSource: 'images/cute-cat1.png'
    },
    {
      name: "Will",
      clickCount: 0,
      imgSource: 'images/cute-cat2.png'
    },
    {
      name: "Charles",
      clickCount: 0,
      imgSource: 'images/cute-cat3.png'
    },
    {
      name: "Edward",
      clickCount: 0,
      imgSource: 'images/cute-cat4.png'
    },
    {
      name: "Xavier",
      clickCount: 0,
      imgSource: 'images/cute-cat5.png'
    }
  ]
};


let catView = {
  init: function() {
    // sets variables in DOM from HTML
    this.catElement = document.getElementById('cat');
    this.catNameElement = document.getElementById('cat-name');
    this.catImageElement = document.getElementById('cat-img');
    this.countElement = document.getElementById('cat-count');
    // click function to increment placed here to limit calls
    this.catImageElement.addEventListener('click', function(){
      octopus.moveCounter();
    });
    this.render();
  },
  render: function() {
    //sets cat's name, picture, and click count
    let currentCat = octopus.getCurrentCat();
    this.catImageElement.src = currentCat.imgSource;
    this.catNameElement.textContent = currentCat.name;
    this.countElement.textContent = currentCat.clickCount;
  }
};


let catListView = {
  //displays cat names for user selection
  init: function() {
    this.catListElement = document.getElementById('cat-list');
    this.render();
  },
  render: function() {
    let cat, element, i;
    let cats = octopus.getCats();
    //resets HTML
    this.catListElement.innerHTML = '';
    // loops through the following when each 'click' renders
    for (i = 0; i < cats.length; i++) {
      cat = cats[i];
      element = document.createElement('li');
      element.textContent = cat.name;
      element.addEventListener('click', (function(catCopy) {
        //fixes bug where cats were not being displayed
        return function() {
          octopus.setCurrentCat(catCopy);
          catView.render();
        };
      })(cat));
      this.catListElement.appendChild(element);
    }
  }
};



let octopus = {
  init: function() {
    //communicates with model to display view on page load
    model.currentCat = model.cats[0];
    catListView.init();
    catView.init();
  },
  getCurrentCat: function() {
    return model.currentCat;
  },
  getCats: function() {
    return model.cats;
  },
  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },
  moveCounter: function() {
    // cat counter goes up with each click 
    model.currentCat.clickCount++;
    catView.render();
  }
};


//app starts!
octopus.init();
