$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["JS Developer", "Full-Stack Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["JS Developer", "Full-Stack Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
} );

//  Accordion Carousel
// ======================= 
const accordionContent = [
  {
    title: "ShopFare",
    img: "images/1JPG.JPG",
    body: "This minimalist site takes full advantage of React and SPA. A seamless experience with a clean look mobile friendly. Using clean code that is readable taking full advantage of E6 syntax and implementing it. This project is fully functional. E-commerce app that has full stripe implementation. Material-UI is used for the overall look with styled components complimenting reacts framework beautifully and commercejs an API that serves as the back-end managing product inventory. A full Functional CRUD App that is capable of Creating , Reading, Updating, Deleting Information. " ,
    link: "https://shopfare.netlify.app/" ,
      linkText: "Check It Out Use This Link .",
    tags: "Netlify, Design by me, CRUD, Ecommerce"
  },
  {
    title: "Mario Game",
    img: "images/4.JPG",
    body: "The main goal of this project was to get a better sense of JavaScript HTML CSS and begin learning Kaboom.js as this library came highly recommended. Kaboom.js is a library that allowed me to use a lot of their built-in functions.Creating scenes, adding layers, creating sprites, dealing with actions, collisions, adding key events. I enjoyed getting into the world of game development by using Kaboom.js there is a learning curve but the documentation is solid.",
    link: "https://marioisback.netlify.app/",
      linkText: "Check It Out Use This Link .",
    tags: "kabbom.js, game  dev, Mario,  "
  },
  {
    title: "QuicKoin",
    img: "images/7.JPG",
    body: "Cryptocurrency is a challenge to our notions of money and stored economic value. This app is meant to simplify the payment process, Connect your Metamask account to this site and send crypto to anywhere in the world. Lower gas fees allow for affordable transactions. Solidity is used to write the smart contracts that work with Ethereum blockchain network",
    link: "https://quickoin.netlify.app/",
      linkText: "Check It Out Use This Link .",
    tags: "Fun Javascript, Firebase"
  },
  {
    title: "Dijkstra's Algorithm",
    img: "images/11.JPG",
    body: "The algorithm exists in many variants. Dijkstra's original algorithm found the shortest path between two given nodes, but a more common variant fixes a single node as the source node and finds the shortest paths from the source to all other nodes in the graph, producing a shortest-path tree.",
     link: "https://dijkstraalgorithmvisulaizer.netlify.app/",
    linkText: "Check It Out Use This Link .",
    tags: "Pathfinding Algorithm, Dijkstra"
  },
  {
    title: "People.ai",
    img: "images/13.JPG",
    body: "Figma did the heavy lifting in terms of the design, layout, colour.React was instrumental as Components played a key role alongside Javascript and CSS Transformed a Figma design into a fully functioning Modern UI/UX Website using React JS.Can be adapted or repurposed as a blog template to host various uses, like- business platforms, news outlet, personal blogs, or non profits .",
    link: "https://blog-site-ai.netlify.app/",
    linkText: "Check It Out Use This Link .",
    tags: " React, Tricky CSS,Responsive"
  }
]

const accordion = document.getElementById('accordion');

let accordionHTML = "";

accordionContent.forEach(entry =>{
  accordionHTML += "\
    <dt>\
      <h3>"+entry.title+"</h3>\
      <img src='https://alexandermedici.github.io/alex-portfolio//"+entry.img+"'>\
    </dt>\
    <dd>\
      <div class='accordion-left'>\
        <p>\
          "+entry.body+"\
        </p>\
        <p><a href='"+entry.link+"' target='_blank'>\
          "+entry.linkText+"\
        </a></p>\
      </div>\
      <div class='accordion-right'>\
        <img src='https://alexandermedici.github.io/alex-portfolio//"+entry.img+"'>\
      </div>\
    </dd>"
})

accordion.innerHTML = accordionHTML;



/*Accordions*/

/*On load, add 'active' class to accordion*/
document.querySelectorAll('dl').forEach(accordion =>{
  accordion.classList.add('active');
});
/*Add 'closed' to all 'dts'. Add tabindex="0" to 'dt's*/
document.querySelectorAll('dl dt').forEach(dt =>{
  dt.tabIndex = 0;
  dt.ariaExpanded = false;
  dt.classList.add('closed');
  dt.addEventListener('click', function(){
    toggleAccordion(this);
  });
  dt.addEventListener('keydown', function(event){
    if (event.code === 'Space') {
      event.preventDefault();
      toggleAccordion(this);
    }
  })
});

document.querySelectorAll('dl dd').forEach(dd =>{
  dd.style.height = "0px";
});

function toggleAccordion(dt){
  let dd = dt.nextElementSibling;
  //Open it
  if (dt.classList.contains('closed')){
    dt.classList.remove('closed');
    dt.classList.add('open');
    dt.ariaExpanded = true;
    //slide down dd (animation is css transition)
    dd.style.height = "auto";
    var height = dd.clientHeight + "px";
    dd.style.height = "0px";
    setTimeout(() => {
      dd.style.height = height;
    }, 0); 
    dd.addEventListener('transitionend', () => {
      dd.style.height = "auto";
    }, {once: true})
  }
  //close it
  else if (dt.classList.contains('open')){
    //slide up dd
    dd.style.height = dd.clientHeight + "px";
    setTimeout(() => {
      dd.style.height = "0px";
    }, 0); 
    dt.ariaExpanded = false;
    /** Change the classes when the animation ends. */
    dd.addEventListener('transitionend', () => {
      dt.classList.add('closed');
      dt.classList.remove('open');
    }, {once: true})
  }
}