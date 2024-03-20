export const allArray = [

    // -------------- BARS --------------
    {
        type: 'Bars',
        places: [
            {
                name: "My Beers",
                type: "Artisanal",
                desc: "Burgers tendre, frites bio...Sur place ou à emporter.",
                img: "img/card-Boulangerie-3L.jpg",
                burger: true,
                range : "(1,5km)",
                avis: "Avis : 226",
                note: "Note : 4,1/5",
                prix: "Prix : 10,90€ ",
                category: 'Bars',
            },

            {
                name: "Café de la Place",
                type: "Cocktails artisanaux, tapas délicieux...À découvrir absolument.",
                desc: "Burgers gourmets, frites maison...Sur place ou à emporter.",
                img: "img/card-le-café-parisien.jpg",
                burger: false,
                range : "(2,3km)",
                avis: "Avis : 142",
                note: "Note : 4,5/5",
                prix: "Prix : 8,50€",
                category: 'Bars',
            },

            {
                name: "La Taverne du Coin",
                type: "Artisanal",
                desc: "Ambiance chaleureuse, bières locales...Un incontournable du quartier.",
                img: "img/card-la-taverne-du-coin.jpg",
                burger: false,
                range : "(800m)",
                avis: "Avis : 312",
                note: "Note : 4,3/5",
                prix: "Prix : 7,90€",
                category: 'Bars',
            },
            
            {
                name: "231 East Street",
                type: "Artisanal",
                desc: "Burgers gourmets, frites maison...Sur place ou à emporter.",
                img: "https://images.unsplash.com/photo-1460306855393-0410f61241c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MjMxJTIwRWFzdCUyMFN0cmVldCUyMGJ1cmdlcnxlbnwwfDB8MHx8fDA%3D",
                burger: true,
                range : "(1,2km)",
                avis: "Avis : 202",
                note: "Note : 4,8/5",
                prix: "Prix : 19,30€ ",
                category: 'Bars',
            },
        ]
    },


    // -------------- Brunch --------------
    {
        type: 'Brunch',
        places: [
            {
                name: "Au Brunch",
                type: "Brunch",
                desc: "Brunch décadent, sucré-salé, avec croissants chauds et œufs brouillés.",
                img: './Img/boulangerie-1.jpg',
                burger: true,
                range: "(3,8km)",
                avis: "Avis : 105",
                note: "Note : 4,9/5",
                prix: "Prix : 10,90€ ",
                category: 'Brunch',
            },
            {
                name: "Boulangerie Paul",
                type: "Boulangerie",
                desc: "Brunch gourmet, varié, avec pancakes moelleux et fruits frais.",
                img: './Img/boulangerie-2.jpg',
                burger: true,
                range: "(2,2km)",
                avis: "Avis : 277",
                note: "Note : 4,6/5",
                prix: "Prix : 11,90€ ",
                category: 'Brunch',
            },
            {
                name: "Boulangerie Belet",
                type: "Boulangerie",
                desc: "Brunch méditerranéen, léger, avec mezze et pain frais.",
                img: './Img/boulangerie-3.jpg',
                burger: true,
                range: "(1,3km)",
                avis: "Avis : 256",
                note: "Note : 4,3/5",
                prix: "Prix : 9,90€ ",
                category: 'Brunch',
            },
            {
                name: "Brunch'Dici",
                type: 'Boulangerie',
                desc: "Brunch méditerranéen, léger, avec mezze et pain frais.",
                img: './Img/boulangerie-4.jpg',
                brunch: true,
                range: "(2,6km)",
                avis: "Avis : 79",
                note: "Note : 2,9/5",
                prix: 'Prix: 7,90€',
                category: 'Brunch',
            },
        ],
    },



    // -------------- Burger --------------
    {
        type: 'Burger',
        places: [
            {
                name: "McDonald's",
                type: "Fast-Food",
                desc: "Hamburger, wrap, salade, desserts... Sur place ou à emporter.",
                img: "https://images.unsplash.com/photo-1619881589316-56c7f9e6b587?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWNkb25hbGQnc3xlbnwwfDB8MHx8fDA%3D",
                burger: true,
                range : "(190m)",
                avis: "Avis : 504",
                note: "Note : 4,4/5",
                prix: "Prix : 16,90€ ",
                category: 'Burger',
            },
            {
                name: "Burger King",
                type: "Fast-Food",
                desc: "Hamburger, wrap, desserts... Sur place ou à emporter.",
                img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlciUyMGtpbmd8ZW58MHwwfDB8fHww",
                burger: true,
                range : "(231m)",
                avis: "Avis : 632",
                note: "Note : 4,9/5",
                prix: "Prix : 14,90€ ",
                category: 'Burger',
        
            },
            {
                name: "KFC",
                type: "Fast-Food",
                desc: "Hamburger, wings, tenders... Sur place ou à emporter.",
                img: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S0ZDfGVufDB8MHwwfHx8MA%3D%3D",
                burger: true,
                range : "(698m)",
                avis: "Avis : 504",
                note: "Note : 4,2/5",
                prix: "Prix : 12,70€ ",
                category: 'Burger',
            },
        ]
    },



    // -------------- Popular --------------
    {
        type: 'Popular',
        places: [
            {
                name: "Sushis",
                type: "Sushis",
                desc: "Sushis frais, variés et savoureux pour une expérience gustative unique.",
                img: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S0ZDfGVufDB8MHwwfHx8MA%3D%3D",
                range: "(543m)",
                avis: "Avis : 788",
                note: "Note : 4,9/5",
                prix: "Prix : 11,55€",
            },
        
            {
                name: "Riz crousty",
                type: "Riz crousty",
                desc: "Expérience culinaire croustillante, variée et délectable pour tous les convives.",
                img: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S0ZDfGVufDB8MHwwfHx8MA%3D%3D",
                range: "(907m)",
                avis: "Avis : 943",
                note: "Note : 4,7/5",
                prix: "Prix : 13,55€",
            },
        
            {
                name: "Kebab",
                type: "Kebab",
                desc: "Découvrez une sélection de kebabs variés, frais et savoureux.",
                img: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S0ZDfGVufDB8MHwwfHx8MA%3D%3D",
                range: "(235m)",
                avis: "Avis : 245",
                note: "Note : 4,2/5",
                prix: "Prix : 9,55€",
            },
        ]
    },


    // -------------- Pizza --------------
    {
        type: 'Pizza',
        places: [
            {
                name: "Italian Trattoria",
                type: "Pizza",
                desc: "Avec IT Trattoria, vous êtes immédiatement transporté dans un monde où les saveurs italiennes règnent en maître.",
                img: "https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=2768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                range: "(600m)",
                avis: "Avis : 942",
                note: "Note : 4,1/5",
                prix: "Prix : 17,50€",
                category: 'Pizza',
            },
            
            {
                name: "Flam’s",
                type: "Pizza",
                desc: "Chez Flam’s, nous servons des tartes flambées natures ou gratinées, accompagnées d’une bière ou d’un verre de vin blanc.",
                img: "https://images.unsplash.com/photo-1637341207266-996c20e3ae93?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                range: "(650m)",
                avis: "Avis : 194",
                note: "Note : 4,7/5",
                prix: "Prix : 12,76€",
                category: 'Pizza',
            },

            {
                name: "Pizza Enzo Bordeaux",
                type: "Pizza",
                desc: "Des pizzas faites à base de produits de qualité, dans le respect de la tradition familiale du chef Enzo.",
                img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                range: "(800m)",
                avis: "Avis : 318",
                note: "Note : 4,1/5",
                prix: "Prix : 13,14€",
                category: 'Pizza',
            },

            {
                name: "IL MAESTRO FRANCO",
                type: "Pizza",
                desc: "Traditionnel restaurant pizzeria italien. De nombreuses variétés gastronomiques italiennes.",
                img: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                range: "(950m)",
                avis: "Avis : 373",
                note: "Note : 4,7/5",
                prix: "Prix : 14,10€",
                category: 'Pizza',
            },
        ]
    }
]