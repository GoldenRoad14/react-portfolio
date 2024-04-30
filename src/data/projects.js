const projects = [
    {
        name: "Hamster Brain",
        description: "This project is designed to provide users that have ADHD with a streamlined and intuitive environment for managing their thoughts, notes, and ideas. Utilized React, Vite, JavaScript, JSON, MongoDB, Apollo Server, JWT, GraphQL, Node & CSS.",
        githubLink: "https://github.com/jskelly8/hamsterBrain",
        deployedLink: "https://hamsterbrain.onrender.com/",
        backgroundImage: "/assets/hamsterbrain_blue.jpg"
    },
    {
        name: "Blackjack Wild!",
        description: "A full stack blackjack game that uses Javascript, HTML, CSS, Express, Node.js, MySQL, Handlebars.js, Sequelize.",
        githubLink: "https://github.com/Justinh144/BlackJackWild",
        // deployedLink: "",
        backgroundImage: "/assets/blackjack_thumb.jpg"
    },
    {
        name: "The Smoke Box Grill Shop",
        description: "This is a website I built for a local business using the SiteSwan platform. In this project I utilized HTML and the Adobe Creative Suite to build out a clean, easy to navigate user interface. Additionally, I did the photography for the store and product images.",
        // githubLink: "",
        deployedLink: "https://thesmokeboxgrillshop.com/",
        backgroundImage: "/assets/SmokeBox.jpg"
    },
    {
        name: "Weather Dashboard",
        description: "This sleek weather app will pull the current weather and forecast for a specified city, saving prior searches to local storage for easy access. Technologies used: HTML, CSS, and Open Weather's API.",
        githubLink: "https://github.com/GoldenRoad14/Weather-Dashboard",
        // deployedLink: "",
        backgroundImage: "/assets/weatherdash_thumb.jpg"
    },
    {
        name: "Get Out The Door!",
        description: "This web application helps families organize their morning routines, by keeping the kids engaged and on task and utilizing an analog clock for a visual reference point that children can easily understand. Technlolgies used: JavaScript, HTML, CSS and Materalize.",
        githubLink: "https://github.com/Brady-hash/Get-Out-The-Door",
        // deployedLink: "",
        backgroundImage: "/assets/gotd_thumb.jpg"
    },
    {
        name: "Text Editor PWA",
        description: "This is a PWA project that allows the user to make notes both on and offline.",
        githubLink: "https://github.com/GoldenRoad14/TextEditor",
        // deployedLink: "",
        backgroundImage: "/assets/jatepwa_thumb.jpg"
    }
];



const graphicDesignProjects = [
    {
        name: "Baileson Brewing",
        description: "Every week I create fresh social media content for this local craft brewery. I use a combo of Photoshop and Illustrator to create the bulk of the content, occasionally doing some product photography to highlight the brand in a different way.",
        backgroundImage: "/assets/graphicdesign/baileson/RetroDomeLogocopy.png",
        images: [
            {src: "/assets/graphicdesign/baileson/_DSC2564-Edit-Edit.jpg", description: "Product Photography"},
            {src: "/assets/graphicdesign/baileson/2-14-24-6-Feet.png", description: "6 Feet, Brah"},
            {src: "/assets/graphicdesign/baileson/5-17-23Cruz.png", description: "Cruz Control"},
            {src: "/assets/graphicdesign/baileson/elKapitan.png", description: "el Kapitan"},
            {src: "/assets/graphicdesign/baileson/Ice.jpg", description: "Crowlers on ice"},
            {src: "/assets/graphicdesign/baileson/momo.png", description: "MoMo"},
            {src: "/assets/graphicdesign/baileson/Beauhaus3-6-24.jpg", description: "Beauhaus"}
        ]
    },
    {
        name: "Branding Mockups",
        description: "Branding template mockups for startup concepts.",
        backgroundImage: "/assets/graphicdesign/branding/LaptopMockUp.jpg",
        images: [
            {src: "/assets/graphicdesign/branding/OCBCBrandingOverview.png", description: "Owl Creek Brewing Mockups"},
            {src: "/assets/graphicdesign/branding/Sprinklicious.png", description: "Bakery Mockups"}
        ]
    },
    {
        name: "Logos & Layouts",
        description: "These are some various logos and layouts I have created for businesses and non-profits utilizing Adobe products.",
        backgroundImage: "/assets/graphicdesign/logoslayouts/SquareLogoFullColorSticker.png",
        images: [
            {src: "/assets/graphicdesign/logoslayouts/BuffBayouOutfitters_white.png", description: ""},
            {src: "/assets/graphicdesign/logoslayouts/BuffBayouOutfittersHexagon.png", description: ""},
            {src: "/assets/graphicdesign/logoslayouts/ChautAquaLogo-Blue.png", description: ""},
            {src: "/assets/graphicdesign/logoslayouts/hamsterbrainlogo_text.png", description: ""},
            {src: "/assets/graphicdesign/logoslayouts/Infographic-Brewery-03.jpg", description: ""},
            {src: "/assets/graphicdesign/logoslayouts/SlideTemplateExamples-01.jpg", description: ""},
            {src: "/assets/graphicdesign/logoslayouts/Slideshow_Wesley.png", description: ""},
            {src: "/assets/graphicdesign/logoslayouts/SOT2021Program.png", description: ""}
        ]
    },
    {
        name: "Sassy Storks",
        description: "Sassy Storks needed a rebrand. They are a small business that celebrates newborns being brought home from the hospital by putting stork signs in the new parents' yard. Utilizing Illustrator, Photoshop and my Nikon, I created a fresh new look and feel complete with studio photography images for branding.",
        backgroundImage: "/assets/graphicdesign/sassystorks/storkslogo.png",
        images: [
            {src: "/assets/graphicdesign/sassystorks/BrandingGuideRev_Page_1.jpg", description: "Page1"},
            {src: "/assets/graphicdesign/sassystorks/BrandingGuideRev_Page_2.jpg", description: "Page1"},
            {src: "/assets/graphicdesign/sassystorks/BrandingGuideRev_Page_3.jpg", description: "Page1"},
            {src: "/assets/graphicdesign/sassystorks/BrandingGuideRev_Page_4.jpg", description: "Page1"},
            {src: "/assets/graphicdesign/sassystorks/BrandingGuideRev_Page_5.jpg", description: "Page1"},
            {src: "/assets/graphicdesign/sassystorks/BrandingGuideRev_Page_6.jpg", description: "Page1"},
            {src: "/assets/graphicdesign/sassystorks/BrandingGuideRev_Page_7.jpg", description: "Page1"},
        ]
    },
    {
        name: "Photo Editing",
        description: "Before & after image edits",
        backgroundImage: "/assets/graphicdesign/photoedits/editscover.jpg",
        images: [
            {src: "/assets/graphicdesign/photoedits/Edit1-1.jpg", description: "Edit1"},
            {src: "/assets/graphicdesign/photoedits/Edit1-2.jpg", description: "Edit1a"},
            {src: "/assets/graphicdesign/photoedits/Edit2-1.jpg", description: "Edit2"},
            {src: "/assets/graphicdesign/photoedits/Edit2-2.jpg", description: "Edit2a"},
            {src: "/assets/graphicdesign/photoedits/Edit3-1.jpg", description: "Edit3"},
            {src: "/assets/graphicdesign/photoedits/Edit3-2.jpg", description: "Edit3a"},
            {src: "/assets/graphicdesign/photoedits/Edit4-1.jpg", description: "Edit4"},
            {src: "/assets/graphicdesign/photoedits/Edit4-2.jpg", description: "Edit4a"},
            {src: "/assets/graphicdesign/photoedits/Edit5-1.jpg", description: "Edit5"},
            {src: "/assets/graphicdesign/photoedits/Edit5-2.jpg", description: "Edit5a"}
        ]
    },
    {
        name: "Photography",
        description: "Some of my favorite photos I've taken.",
        backgroundImage: "/assets/graphicdesign/photography/dome.jpeg",
        images: [
            {src: "/assets/graphicdesign/photography/therange.jpeg", description: "Camping"},
            {src: "/assets/graphicdesign/photography/mcgovern2.jpeg", description: "McGovern"},
            {src: "/assets/graphicdesign/photography/mcgovern1.jpeg", description: "McGovern"},
            {src: "/assets/graphicdesign/photography/saab.jpeg", description: "Saab"},
            {src: "/assets/graphicdesign/photography/dome.jpeg", description: "8th Wonder of the World"},
            {src: "/assets/graphicdesign/photography/_DSC2393-HDR-Edit-2.jpg", description: "Lexuses"},
            {src: "/assets/graphicdesign/photography/_DSC2344-2.jpg", description: "More Lexuses"},
            {src: "/assets/graphicdesign/photography/_DSC1294-Edit-Edit-copy.jpg", description: "Charlie's Place"},
        ]
    }
]
export { projects, graphicDesignProjects};