type Product = {
    id:number;
    title:string;
    desc?:string;
    img?:string;
    price:number;
    options?:{
        title:string;
        additionalPrice:number;
    }[];
};
type Products = Product [];
export const featuredProducts: Products = [
    {
        id:1,
        title:"Pasta",
        desc:"enhance your taste buds with combination of spices",
        img:"/bg1.jpg",
        price:30.9,
        options:[
            {
                title:"Small",
                additionalPrice:5,
            },
            {
                title:"Medium",
                additionalPrice:10,
            },
            {
                title:"Large",
                additionalPrice:15,
            },
        ]
    },
    {
        id:2,
        title:"Chicken Burger",
        desc:"enhance your taste buds with combination of spices",
        img:"/bg2.jpg",
        price:40.5,
        options:[
            {
                title:"Small",
                additionalPrice:5,
            },
            {
                title:"Medium",
                additionalPrice:10,
            },
            {
                title:"Large",
                additionalPrice:15,
            },
        ]
    },
    {
        id:3,
        title:"Creamy Pizza",
        desc:"enhance your taste buds with combination of spices",
        img:"/pizza1.jpg",
        price:50.9,
        options:[
            {
                title:"Small",
                additionalPrice:5,
            },
            {
                title:"Medium",
                additionalPrice:10,
            },
            {
                title:"Large",
                additionalPrice:15,
            },
        ]
    },
    {
        id:4,
        title:"Italian pasta",
        desc:"enhance your taste buds with combination of spices",
        img:"/bg4.jpg",
        price:30.9,
        options:[
            {
                title:"Small",
                additionalPrice:5,
            },
            {
                title:"Medium",
                additionalPrice:10,
            },
            {
                title:"Large",
                additionalPrice:15,
            },
        ]
    },
    {
        id:5,
        title:"Zinger Burger",
        desc:"enhance your taste buds with combination of spices",
        img:"/bg5.jpg",
        price:40.9,
        options:[
            {
                title:"Small",
                additionalPrice:5,
            },
            {
                title:"Medium",
                additionalPrice:10,
            },
            {
                title:"Large",
                additionalPrice:15,
            },
        ]
    },
    {
        id:6,
        title:"Fajita Pizza ",
        desc:"enhance your taste buds with combination of spices",
        img:"/pizza2.jpg",
        price:50.9,
        options:[
            {
                title:"Small",
                additionalPrice:5,
            },
            {
                title:"Medium",
                additionalPrice:10,
            },
            {
                title:"Large",
                additionalPrice:15,
            },
        ]
    },
]
type Menu = {
    id:number;
    slug:string;
    title:string;
    desc?:string;
    img?:string;
    color:string;
}[];

export const pizzas:Products = [
    {
        id:1,
        title:"Tikka",
        desc:"enhance your taste buds with combination of spices",
        img:"/pizza1.jpg",
        price:30.9,
        options:[
            {
                title:"Small",
                additionalPrice:5,
            },
            {
                title:"Medium",
                additionalPrice:10,
            },
            {
                title:"Large",
                additionalPrice:15,
            },
        ]
    },
    {
        id:2,
        title:"fajita",
        desc:"enhance your taste buds with combination of spices",
        img:"/pizza2.jpg",
        price:30.9,
        options:[
            {
                title:"Small",
                additionalPrice:5,
            },
            {
                title:"Medium",
                additionalPrice:10,
            },
            {
                title:"Large",
                additionalPrice:15,
            },
        ]
    },
    {
        id:3,
        title:"Afghani",
        desc:"enhance your taste buds with combination of spices",
        img:"/pizza3.jpg",
        price:30.9,
        options:[
            {
                title:"Small",
                additionalPrice:5,
            },
            {
                title:"Medium",
                additionalPrice:10,
            },
            {
                title:"Large",
                additionalPrice:15,
            },
        ]
    },
    {
        id:4,
        title:"fajita",
        desc:"enhance your taste buds with combination of spices",
        img:"/pizza4.jpg",
        price:30.9,
        options:[
            {
                title:"Small",
                additionalPrice:5,
            },
            {
                title:"Medium",
                additionalPrice:10,
            },
            {
                title:"Large",
                additionalPrice:15,
            },
        ]
    },
    {
        id:5,
        title:"Creamy Tikka",
        desc:"enhance your taste buds with combination of spices",
        img:"/pizza5.webp",
        price:30.9,
        options:[
            {
                title:"Small",
                additionalPrice:5,
            },
            {
                title:"Medium",
                additionalPrice:10,
            },
            {
                title:"Large",
                additionalPrice:15,
            },
        ]
    },
    {
        id:6,
        title:"Spicy Fajita",
        desc:"enhance your taste buds with combination of spices",
        img:"/pizza6.webp",
        price:30.9,
        options:[
            {
                title:"Small",
                additionalPrice:5,
            },
            {
                title:"Medium",
                additionalPrice:10,
            },
            {
                title:"Large",
                additionalPrice:15,
            },
        ]
    },
]
export const menu:Menu = [
    {
        id:1,
        slug:"Pizza",
        title:"Pizza Flavours",
        desc: "Irresistible slices, miuthwatering toppings and cheesy perfection.",
        img:"/bg3.jpg",
        color:"white",
    },
      {
        id:2,
        slug:"Burgers",
        title:"Zinger Burger ",
        desc: "Buger Bliss: Juicy patties and bold flavors.",
        img:"bg2.jpg",
        color:"white",
    },
    {
        id:3,
        slug:"Pastas",
        title:"Cheesy Pastas",
        desc: "Savor the taste of perfection with our exquisite Italian handmade pastas menu.",
        img:"bg1.jpg",
        color:"white",
    },
]; 


export const singleProduct: Product = {
        id:1,
        title:"Sicilian",
        desc:"enhance your taste buds with combination of spices",
        img:"/pizza1.jpg",
        price:30.9,
        options:[
            {
                title:"Small",
                additionalPrice:5,
            },
            {
                title:"Medium",
                additionalPrice:10,
            },
            {
                title:"Large",
                additionalPrice:15,
            },
        ],
    };


  