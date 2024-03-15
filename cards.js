const restaurants = [
    {
        name: "McDonald's",
        type: "Fast-Food",
        desc: "Hamburger, wrap, salade, desserts... Sur place ou à emporter.",
        img: "https://images.unsplash.com/photo-1619881589316-56c7f9e6b587?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWNkb25hbGQnc3xlbnwwfDB8MHx8fDA%3D",
        burger: true,
    },
    {
        name: "Burger King",
        type: "Fast-Food",
        desc: "Hamburger, wrap, desserts... Sur place ou à emporter.",
        img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlciUyMGtpbmd8ZW58MHwwfDB8fHww",
        burger: true,
    },
    {
        name: "KFC",
        type: "Fast-Food",
        desc: "Hamburger, wings, tenders... Sur place ou à emporter.",
        img: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S0ZDfGVufDB8MHwwfHx8MA%3D%3D",
        burger: true,
    },
    {
        name: "231 East Street",
        type: "Artisanal",
        desc: "Burgers gourmets, frites maison...Sur place ou à emporter.",
        img: "https://images.unsplash.com/photo-1460306855393-0410f61241c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MjMxJTIwRWFzdCUyMFN0cmVldCUyMGJ1cmdlcnxlbnwwfDB8MHx8fDA%3D",
        burger: true,
    },
    {
        name: "Street Burger",
        type: "Artisanal",
        desc: "Hamburger, frites, desserts... Sur place ou à emporter.",
        img: "https://images.unsplash.com/photo-1700312092332-497d33eb9406?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RyZWV0JTIwYnVyZ2VyfGVufDB8MHwwfHx8MA%3D%3D",
        burger: true,
    },
    {
        name: "Smash Burger",
        type: "Artisanal",
        desc: "Hamburger smash, tenders... Sur place ou à emporter.",
        img: "https://images.unsplash.com/photo-1594078186749-7500028c07da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21hc2glMjBidXJnZXJ8ZW58MHwwfDB8fHww",
        burger: true,
    },
    {
        name: "Boulangerie Ange",
        type: "Boulangerie",
        desc: "Burgers fait maison, frites...Sur place ou à emporter.",
        img: "https://images.unsplash.com/photo-1649402206308-c50b78865e70?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym91bGFuZ2VyaWUlMjBidXJnZXJ8ZW58MHwwfDB8fHww",
        burger: true,
    },
    {
        name: "Boulangerie Paul",
        type: "Boulangerie",
        desc: "Burgers fait maison, boisson fraiche...Sur place ou à emporter.",
        img: "https://images.unsplash.com/photo-1505826759037-406b40feb4cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJvdWxhbmdlcmllJTIwYnVyZ2VyfGVufDB8MHwwfHx8MA%3D%3D",
        burger: true,
    },
    {
        name: "Boulangerie Belet",
        type:   "Boulangerie",
        desc:"Burgers délicieux, frites bio...Sur place ou à emporter.",
        img :"https://images.unsplash.com/photo-1649402206323-9bca1d77d10e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJvdWxhbmdlcmllJTIwYnVyZ2VyfGVufDB8MHwwfHx8MA%3D%3D",
        burger : true,
    },
]