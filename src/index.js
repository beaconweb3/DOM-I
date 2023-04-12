const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

//Anchor Tags and DImages
const anchorTags = document.querySelectorAll("a");
  //set class name
anchorTags.forEach(a => a.className = "italic");
  //set anchor textContent
for (let i = 0; i<anchorTags.length-1; i++) {
  anchorTags[i].textContent = siteContent['nav'][`nav-item-${i+1}`];
}
anchorTags[anchorTags.length-1].textContent = siteContent['footer']['copyright'];
anchorTags[anchorTags.length-1].className = 'bold';
//All Images
const img = document.querySelectorAll('img');
img[0].setAttribute('src', siteContent["images"]["logo-img"]);
img[1].setAttribute('src', siteContent["images"]["cta-img"]);
img[2].setAttribute('src', siteContent["images"]["accent-img"]);

//CTA Section - Header and Button
const h1 = document.querySelector('h1');
h1.textContent = siteContent['cta']['h1'];
document.querySelector('button').textContent = siteContent['cta']['button'];

//Main-Content Section 
  //h4 & p
  const h4 = document.querySelectorAll('h4');
  const p = document.querySelectorAll('p');
  let a = 0; let b = 1; 
    for(let i = 0; i<h4.length-1;i++){
    h4[i].textContent = siteContent['main-content'][Object.keys(siteContent['main-content'])[a]];
    p[i].textContent = siteContent['main-content'][Object.keys(siteContent['main-content'])[b]];
    a+=2; b+=2;
    }

//Contact Section
h4[5].textContent = siteContent['contact']['contact-h4'];
let c = 1;
for(let i = 5; i<p.length; i++){
  p[i].textContent = siteContent['contact'][Object.keys(siteContent['contact'])[c]];
  c++;
}

//

