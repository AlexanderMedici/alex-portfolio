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
        strings: ["JS Developer", "Full-Stack Developer", "React Developer", "Mobile Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });



    var typed = new Typed(".typing-2", {
      strings: ["Software Engineer ", "Certified Tech Nerd", "Driver of Business Disruption & Innovation",
      ],
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
    title: " A Path Finder Project - Implementing Dijkstra's Algorithm",
    img: "images/Capture.webp",
    body: "This is a path finder project which makes use of Dijkstra's algorithm. The project displays a graphed board where predetermined starting (top left box) and ending (bottom right box) nodes are provided. One can use their mouse anywhere on the grid, to block the route between the two nodes. Space which is blocked out on the grid are displayed as buildings. Once the user is satisfied with the areas blocked on the grid, the run algorithm button can be clicked. The pathfinder will then deploy Dijkstra's algorithm. This will quickly find the shortest path between the two given nodes.",
     link: "https://dijkstraalgorithmvisulaizer.netlify.app/",
    linkText: "Check It Out Use This Link .",
    tags: "Pathfinding Algorithm, Dijkstra"
  },
  {
    title: "Blockchain Transaction Application",
    img: "images/capture 2.webp",
    body: "Quickoin allows users to send transactions through the block chain. Each transaction is paired with a Gif & stored forever on the digital ledger. Connect your Metamask wallet to the secure application to buy, sell, or send crypto to loved ones anywhere in the world. Recipients receive funds instantly; and have the option to convert Ethereum into any crypto they prefer at the current exchange value.",
    link: "https://quickoin.netlify.app/",
      linkText: "Check It Out Use This Link .",
    tags: "Fun Javascript, Firebase"
  },
  {
     title: "A fully functional e-Commerce Website",
    img: "images/shopfare.webp",
    body: " Shopfare is a fully functional e-Commerce website with Stripe integration for card transactions. The e-commerce site showcases items/products for sale on an intuitive design, which places emphasis on a user-centric approach. Simply click on any item, and add the item to the site's cart. Then on the next page complete the prompts requesting shipping, email, and payment details. After the payment is processed, an email will arrive to the one provided, notifying the user of the purchase and of shipping confirmation." ,
    link: "https://shopfare.netlify.app/" ,
      linkText: "Check It Out Use This Link .",
    tags: "Netlify, Design by me, CRUD, Ecommerce"
  },
  {
    title: "A Mario Computer Game",
    img: "images/4.webp",
    body: "This computer game is a nostalgic throwback of the 1980's classic Mario. The static website integrates server-side rendering to serve pre-built HTML, CSS, and JavaScript files. Mario takes advantage of Kabbom.js built-in library functions which simplify game development for 2D or even 3D game assets. Camera positioning, collisions, movement, and in-game power-ups are all made available in this game and integrate smoothly.",
    link: "https://marioisback.netlify.app/",
      linkText: "Check It Out Use This Link .",
    tags: "kabbom.js, game  dev, Mario,  "
  },
  {
    title: "Modern UI/UX Blog Site.",
    img: "images/13.webp",
    body: "Transformed a Figma design into a fully functioning Modern UI/UX Website using React JS. Can be adapted or repurposed as a blog template to host various uses, like- business platforms, news outlet, personal blogs, or non profits .",
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