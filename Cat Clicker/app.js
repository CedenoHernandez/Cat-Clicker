
let model = {
  currentCat: null,
  cats: [
    {
      name: "Theo",
      clickCount: 0,
      imgSrc: 'images/cute-cat1.png'
    },
    {
      name: "Will",
      clickCount: 0,
      imgSrc: 'images/cute-cat2.png'
    },
    {
      name: "Charles",
      clickCount: 0,
      imgSrc: 'images/cute-cat3.png'
    },
    {
      name: "Edward",
      clickCount: 0,
      imgSrc: 'images/cute-cat4.png'
    },
    {
      name: "Xavier",
      clickCount: 0,
      imgSrc: 'images/cute-cat5.png'
    }
  ]
};



let octopus = {
  init: function() {
    model.currentCat = model.cats[0];
    catListView.init();
    catView.init();
  },
  // WAY more code here
};


let catView = {
  init: function() {
    //massive code here
  },
  render: function() {
    //massive code here
  }
};


let catListView = {
  init: function() {
    // massive code here
  },
  render: function() {
    // massive code here
  }
};


//app starts!
octopus.init();
