import { time } from "console";
import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import usa from '../assets/images/usa-pic1.jpg'
import london from '../assets/images/london.jpg'
import spain from '../assets/images/spain.jpg'

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        addText: "Fast",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        addText: "Safety",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        addText: "Care",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];


export const ourLocations = [
    { 
        offset: 0,
        location:"United States", 
        alt:'Usa image' ,
        src: usa,
        desc: 'The United States of America (USA), often referred to as the U.S. or simply America, is a large country located primarily in North America. Its a federal republic of 50 states and the District of Columbia',
        city: 'Los Angeles | Sanfransico | New york',
        email: 'nike-usa@gmail.com',
        contact: '(123) 456-7890',
        time: '12:00 - 21:30'
        
    },

    { 
        offset: 1,
        location:"Spain", 
        alt:'Usa image' ,
        src: spain,
        desc: 'The United States of America (USA), often referred to as the U.S. or simply America, is a large country located primarily in North America. Its a federal republic of 50 states and the District of Columbia',
        city: 'Barcelona | Madrid | Sevilla ',
        email: 'nike-es@gmail.com',
        contact: '(123) 456-7890',
        time: '9:00 - 18:30'
        
    },

    { 
        offset: 2,
        location:"United Kingdom", 
        alt:'Usa image' ,
        src: london,
        desc: 'The United States of America (USA), often referred to as the U.S. or simply America, is a large country located primarily in North America. Its a federal republic of 50 states and the District of Columbia',
        city: 'London | Manchester | Liverpool',
        email: 'nike-uk@gmail.com',
        contact: '(123) 456-7890',
        time: '11:00 - 20:30'
        
    },

    // {   
    //     offset:1,
    //     location:"United States", 
    //     alt:'Usa image' ,
    //     src: '../assets/images/usa.jpg',
    //     desc: 'The United States of america',

    // },

    // {   
    //     offset:2,
    //     location:"London", 
    //     alt:'London image' ,
    //     src: 'my-tailwind-app/src/assets/images/london.jpg',
    //     desc: 'The United States of america',

    // }
]