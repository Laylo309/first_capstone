// Mobile Menu
const div = document.createElement('div');
const hamBttn = document.querySelector('.menu');
const header = document.querySelector('header');
const mainpage = document.querySelector(['.section_1', '.section_1_about']);
const secondSection = document.querySelector(['.section_2', '.section_2_about']);
const thirdSection = document.querySelector(['.section_3', '.section_3_about']);
const fourthSection = document.querySelector(['.section_4', '.section_4_about']);
const footer = document.querySelector('footer');
const blurElements = [
  mainpage,
  header,
  secondSection,
  thirdSection,
  fourthSection,
  footer,
];

// Mobile Menu
const UnBlurSections = () => {
  for (let i = 0; i < blurElements.length; i += 1) {
    blurElements[i].classList.remove('blur-content');
  }
};

const BlurSections = () => {
  // Add css class to behind sections
  for (let i = 0; i < blurElements.length; i += 1) {
    blurElements[i].classList.add('blur-content');
  }
};

hamBttn.addEventListener('click', () => {
  // Create div for mobile menu
  div.id = 'overlay';
  div.innerHTML = '<img src="./assets/images/cancel.png" class="cancelBttn"</img>'
    + '<ul class="mobile-menu-ul">'
    + '<li class="mobile-menu-li" id="1"><a href="index.html">Home</a></li>'
    + '<li class="mobile-menu-li" id="2"><a href="about.html">About</a></li>'
    + '<li class="mobile-menu-li" id="3"><a href="#section_2">Partners</a></li>'
    + '</ul>';
  document.body.appendChild(div);
  div.style.display = 'block';
  document.querySelector('body').style.overflow = 'hidden';
  BlurSections();
  // Add listener for closing menu
  const mobileMenu = document.querySelector('.cancelBttn');
  mobileMenu.addEventListener('click', () => {
    div.remove();
    UnBlurSections();
  });
  // Adding listeners to li tags
  const sections = document.querySelectorAll('.mobile-menu-li');
  for (let i = 0; i < sections.length; i += 1) {
    sections[i].addEventListener('click', (event) => {
      div.remove();
      UnBlurSections();
      window.location.hash = `section_${event.target.id}`;
    });
  }
});

// Making dynamic

const myTours = [
  {
    imgUrl: './assets/images/tours-image/Samarkand.jpg',
    price: '$500',
    overview: 'Samarkand',
    information:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem ipsum'
      + 'ea,atque velit eaque temporibus nesciunt sint mollitia suscipit corrupti eius repellendus',
  },

  {
    imgUrl: './assets/images/tours-image/Tashkent-City.jpg',
    price: '$2500',
    overview: 'Tashkent City',
    information:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem ipsum'
      + 'ea,atque velit eaque temporibus nesciunt sint mollitia suscipit corrupti eius repellendus',
  },
  {
    imgUrl: './assets/images/tours-image/bukhara-city.jpg',
    price: '$500',
    overview: 'Bukhara',
    information:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem ipsum'
      + 'ea,atque velit eaque temporibus nesciunt sint mollitia suscipit corrupti eius repellendus',
  },
  {
    imgUrl: './assets/images/tours-image/Khiva.jpg',
    price: '$700',
    overview: 'Khiva',
    information:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem ipsum'
      + 'ea,atque velit eaque temporibus nesciunt sint mollitia suscipit corrupti eius repellendus',
  },
  {
    imgUrl: './assets/images/tours-image/Mountains.jpg',
    price: '$2000',
    overview: 'Mountains',
    information:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem ipsum'
      + 'ea,atque velit eaque temporibus nesciunt sint mollitia suscipit corrupti eius repellendus',
  },

  {
    imgUrl: './assets/images/tours-image/Uzbekistan-summary.jpg',
    price: '$5000',
    overview: 'Uzbeksitan',
    information:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem ipsum'
      + 'ea,atque velit eaque temporibus nesciunt sint mollitia suscipit corrupti eius repellendus',
  },
];

const createToursSection = () => {
  if (myTours.length !== 0) {
    const myToursSection = document.querySelector('.myToursSection');
    for (let i = 0; i < myTours.length; i += 1) {
      myToursSection.innerHTML
        += '<div class="tour-box">'
        + `<img class="tour-img" src="${myTours[i].imgUrl}" alt="">`
        + '<div class="tour-text">'
        + `<h6 class="tour-price">${myTours[i].price}</h6>`
        + `<p class="tour-overview">${myTours[i].overview}</p>`
        +'<div class="line-separator-mini"></div>'
        + `<p class="tour-info">${myTours[i].information}</p>`
        + '</div>';
    }
  }
};

createToursSection();
