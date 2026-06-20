import g1_p1 from './assets/g1_p1.jpg';
import g1_p2 from './assets/g1_p2.jpg';
import g1_p3 from './assets/g1_p3.jpg';
import g1_p4 from './assets/g1_p4.jpg';
import g1_p5 from './assets/g1_p5.jpg';
import g2_p1 from './assets/g2_p1.jpg';
import g2_p2 from './assets/g2_p2.jpg';
import g2_p3 from './assets/g2_p3.jpg';
import g2_p4 from './assets/g2_p4.jpg';
import g2_p5 from './assets/g2_p5.jpg';
import g3_p1 from './assets/g3_p1.jpg';
import g4_p1 from './assets/g4_p1.jpg';
import g5_p1 from './assets/g5_p1.jpg';
import g6_p1 from './assets/g6_p1.jpg';
import rev_1 from './assets/rev_1.jpg'
import rev_2 from './assets/rev_2.jpg'
import rev_3 from './assets/rev_5.jpg'
import rev_4 from './assets/rev_4.jpg'
import rev_5  from './assets/usan.jpg'
import blog_img1 from './assets/blog_img1.jpg'
import blog_img2 from './assets/blog_img2.jpg'
import blog_img3 from './assets/blog_img3.jpg'
import blog_img4 from './assets/blog_img4.jpg'
import blog_img5 from './assets/blog_img5.jpg'
import blog_img6 from './assets/blog_img6.jpg'
import blog_img7 from './assets/blog_img7.jpg'
import blog_img8 from './assets/blog_img8.jpg'
import blog_img9 from './assets/blog_img9.jpg'



export const reviews = [
    {
        id: 0, 
        img: rev_2, 
        info: "The entire process was smooth, professional, and very well-organized from start to finish. I truly appreciate the constant support and clear guidance provided throughout.",
        customer_name: 'Shilpa Shethy', 
        customer_position : 'CEO Of Zapple'

    },

    {
        id: 1, 
        img: rev_1, 
        info: "Excellent service and clear communication throughout every stage of the process. The team was always responsive, helpful, and made everything easy to understand.",
        customer_name: 'Adam Williams', 
        customer_position: 'Founder Of Microwoft'

    },

    {
        id: 2, 
        img: rev_5, 
        info: "They guided me step by step and helped me find the perfect property quickly and efficiently, without any unnecessary stress or delays along the way.",
        customer_name: 'Usan Gulwarm', 
        customer_position: 'CEO Of Faceworm'

    },

    {
        id: 3, 
        img: rev_4, 
        info: "A very reliable and professional team that made the whole buying experience simple, easy, and completely stress-free from beginning to final completion.",
        customer_name: 'Retha Deowalim', 
        customer_position: 'CEO Of Apple'

    },


    {
        id: 4, 
        img: rev_3, 
        info: "I had a wonderful experience working with this team, as they were patient, attentive, and always willing to go the extra mile to ensure everything went smoothly",
        customer_name: 'Sam J. Wasim', 
        customer_position: 'Pio Founder'

    },
]

export const places = [
    {
        id : 0, 
        name: 'Resort Valley Ocs', 
        price: 7000, 
        description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
        info: {
            numOfBeds: 4,
            numOfBaths: 3, 
            sqft: 1200, 
            garage: 1,
        },
        amenities: ['Air Conditioning', 'Central Heating', 'Internet',
            'Alarm System', 'Car Parking', 'Window Covering'
        ], 
        floor_plan: {
            first_floor: 710,
            second_floor: 730,
            third_floor: 560
        },
        gallery: [g1_p1, g1_p2, g1_p3, g1_p4, g1_p5],
        rating: {
            property: 0,
            value_for_money: 0, 
            location: 0, 
            agent_support: 0
        }, 
        reviews: [],    
    },

    {
        id : 1, 
        name: 'Bluewhale Real Estate', 
        price: 5000, 
        description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
        info: {
            numOfBeds: 3,
            numOfBaths: 2, 
            sqft: 1100, 
            garage: 1,
        },

        amenities: ['Air Conditioning', 'Central Heating', 'Internet',
            'Alarm System', 'Car Parking', 'Window Covering', 'Free WiFi', 'Gym'
        ], 

        floor_plan: {
            first_floor: 700,
            second_floor: 710,
            third_floor: 550
        },

        gallery: [g2_p1, g2_p2, g2_p3, g2_p4, g2_p5],
        rating: {
            property: 0,
            value_for_money: 0, 
            location: 0, 
            agent_support: 0
        }, 
        reviews: [],    
    },

    {
        id : 2, 
        name: 'Adobe Property Advisor', 
        price: 6400, 
        description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
        info: {
            numOfBeds: 2,
            numOfBaths: 2, 
            sqft: 1300, 
            garage: 1,
        },

        amenities: ['Air Conditioning', 'Central Heating', 'Internet',
            'Alarm System', 'Car Parking', 'Window Covering', 'Free WiFi', 'Gym'
        ], 

        floor_plan: {
            first_floor: 750,
            second_floor: 700,
            third_floor: 470
        },

        gallery: [g3_p1, g1_p2, g1_p3, g1_p4, g1_p5],
        rating: {
            property: 0,
            value_for_money: 0, 
            location: 0, 
            agent_support: 0
        }, 
        reviews: [],    
    },

    {
        id : 3, 
        name: 'Bluebell Real Estate', 
        price: 4600, 
        description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
        info: {
            numOfBeds: 3,
            numOfBaths: 3, 
            sqft: 1200, 
            garage: 1,
        },

        amenities: ['Air Conditioning', 'Central Heating', 'Internet',
            'Alarm System', 'Car Parking', 'Window Covering',  'Free WiFi', 'Gym'
        ], 

        floor_plan: {
            first_floor: 700,
            second_floor: 650,
            third_floor: 600
        },

        gallery: [g4_p1, g2_p2, g2_p3, g2_p4, g2_p5],
        rating: {
            property: 0,
            value_for_money: 0, 
            location: 0, 
            agent_support: 0
        }, 
        reviews: [],    
    },

    
    {
        id : 4, 
        name: 'Agile Real Estate Group', 
        price: 3800, 
        description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
        info: {
            numOfBeds: 4,
            numOfBaths: 3, 
            sqft: 1200, 
            garage: 1,
        },

        amenities: ['Air Conditioning', 'Central Heating', 'Internet',
            'Pets Allow', 'Free WiFi'
        ], 

        floor_plan: {
            first_floor: 670,
            second_floor: 800,
            third_floor: 550
        },

        gallery: [g5_p1, g1_p2, g1_p3, g1_p4, g1_p5],
        rating: {
            property: 0,
            value_for_money: 0, 
            location: 0, 
            agent_support: 0
        }, 
        reviews: [],    
    },

    {
        id : 5, 
        name: 'Nestle Real Estate', 
        price: 2200, 
        description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
        info: {
            numOfBeds: 4,
            numOfBaths: 2, 
            sqft: 1200, 
            garage: 1,
        },

        amenities: ['Air Conditioning', 'Central Heating', 'Internet',
            'Alarm System', 'Car Parking', 'Window Covering'
        ], 

        floor_plan: {
            first_floor: 800,
            second_floor: 710,
            third_floor: 500
        },

        gallery: [g5_p1, g1_p2, g1_p3, g1_p4, g1_p5],
        rating: {
            property: 0,
            value_for_money: 0, 
            location: 0, 
            agent_support: 0
        }, 
        reviews: [],    
    },

]

export const blogData = [
    {
        id: 0,
        blog_img: blog_img7,
        title: 'What are people saying about Resido properties', 
        detail: 'Resido Properties is known for its reliable services, quality listings, and customer-focused approach, earning positive feedback from clients.', 
        published_at: 'March 19 2023', 
        info: `Resido Properties has built a strong reputation in the real estate industry 
            by consistently delivering quality services and reliable property solutions. 
            Many clients appreciate the company's commitment to transparency, 
            professionalism, and customer satisfaction. Whether purchasing a dream home, 
            renting a property, or making an investment, customers often highlight the 
            ease and confidence they experience when working with Resido.`,
        moreInfo: `The positive feedback surrounding Resido Properties is also driven by its knowledgeable team and personalized approach. Clients value the guidance they receive throughout the buying and selling process, making complex transactions simpler and more efficient. This dedication to excellence has helped Resido establish long-term relationships and earn the trust of property seekers and investors alike.`,
        hotComment: `I recently purchased a property through Resido, and the entire experience was smooth and professional. Their team was always available to answer my questions and helped me find the perfect home within my budget.`, 
        commentor: "Rosaline Pong",
        comments: 4
    },
       
    {
        id: 1,
        blog_img: blog_img8,
        title: 'List of benifits and impressive listeo services', 
        detail: 'Listeo offers easy property management, verified listings, advanced search tools, and excellent customer support.', 
        info: `Listeo offers a modern and convenient platform designed to simplify property management and real estate listings. One of its biggest advantages is its user-friendly interface, allowing property owners and agents to create, manage, and promote listings with ease. Advanced search features and organized property information help users quickly find properties that match their needs.`,
        moreInfo: `In addition to its powerful listing tools, Listeo provides excellent support and features that improve visibility for property owners. From streamlined communication options to efficient property management capabilities, the platform helps users save time while maximizing opportunities. These benefits make Listeo a valuable solution for both real estate professionals and property owners.`,
        hotComment: 'Listeo made managing my property listings incredibly easy. The platform is user-friendly, and I received several inquiries within days of posting my property.',
        commentor: 'John Dawson',
        published_at: 'May 29 2023', 
        comments: 4
    },
    {
        id: 2,
        blog_img: blog_img3,
        title: 'Resido Clients Are Happy With The Services', 
        detail: "Clients appreciate Resido's professionalism, smooth transactions, and dedicated support throughout the property journey.", 
        info: `Client satisfaction remains one of the key reasons behind Resido's continued success. Customers frequently praise the company for its professional service, responsive communication, and dedication to meeting their needs. Whether helping first-time buyers or experienced investors, Resido focuses on providing a smooth and stress-free experience from start to finish.`,
        moreInfo: `The company's customer-first approach has resulted in many positive experiences and repeat clients. By offering personalized solutions and expert market knowledge, Resido ensures that every client feels supported throughout the process. This commitment to excellence continues to strengthen its reputation as a trusted real estate partner.`,
        hotComment: `Resido exceeded my expectations with their excellent customer service. They guided me through every step of the process and made what could have been a stressful experience completely hassle-free.`,
        commentor: "Munir Yasir",
        published_at: 'Jan 23 2024', 
        comments: 4
    },
    {
        id: 3,
        blog_img: blog_img9,
        title: 'The Services Resido Provides Will Impress', 
        detail: 'From property sales and rentals to expert advice, Resido delivers comprehensive real estate solutions.', 
        info: `Resido offers a complete range of real estate services designed to meet the needs of buyers, sellers, landlords, and investors. From property sales and rentals to market analysis and investment guidance, the company provides professional support at every stage of the property journey. Its experienced team works closely with clients to deliver solutions tailored to their goals.`,
        moreInfo: `What makes Resido stand out is its dedication to quality service and attention to detail. Every transaction is handled with professionalism, ensuring clients receive accurate information and expert advice. This comprehensive approach helps clients make informed decisions while enjoying a seamless real estate experience.`,
        hotComment: `I was impressed by the range of services Resido offers. From property valuation to closing the deal, their expertise and attention to detail were outstanding.`,
        commentor: `Sheikh Tijan Sillah`,
        published_at: 'March 19 2024', 
        comments: 4
    },
    {
        id: 4,
        blog_img: blog_img5,
        title: 'Why people choose listio for own properties', 
        detail: 'Listeo helps property owners reach more buyers and tenants through a simple and effective listing platform.',
        info: `Property owners choose Listeo because it offers an efficient and reliable way to showcase their properties to potential buyers and tenants. The platform provides easy listing management, attractive property displays, and tools that help increase visibility in a competitive market. These features make it easier for owners to connect with interested prospects.`,
        moreInfo: `Beyond its ease of use, Listeo helps property owners save time and improve marketing results. With organized management tools and user-friendly functionality, owners can focus on growing their property portfolio while reaching a wider audience. This combination of convenience and effectiveness makes Listeo a preferred choice for property listings.`,
        hotComment: `As a property owner, Listeo has been a great tool for marketing my rentals. The platform is simple to use, and it has helped me connect with quality tenants quickly`,
        commentor: `Ebrahima Secka`,
        published_at: 'Nov 21 2024', 
        comments: 4
    },

    {
        id: 5,
        blog_img: blog_img6,
        title: 'Why Resido is been popular all this years', 
        detail: 'Resido remains popular due to its trusted reputation, quality service, and commitment to client satisfaction.',
        info: `Resido has remained popular over the years because of its consistent commitment to delivering excellent real estate services. The company has built a reputation based on trust, reliability, and customer satisfaction, helping clients achieve their property goals with confidence. Its ability to adapt to changing market trends has also contributed to its long-term success.`,
        moreInfo: `Another reason for Resido's popularity is its focus on building lasting relationships with clients. By prioritizing transparency, professionalism, and personalized support, the company continues to earn positive recommendations and repeat business. This strong foundation has helped Resido maintain its position as a respected name in the real estate industry.`,
        hotComment: `I've worked with Resido multiple times over the years, and their professionalism has always remained consistent. It's easy to see why so many people trust them for their real estate needs.`,
        commentor: `Sallima Nureldiin`, 
        published_at: 'Jan 12 2025', 
        comments: 4
    },
       
       


]

export const categories = [
    {id: 0, category:'Branding', count: 2 },
    {id: 1, category: 'Fashion', count: 3},
    {id: 2, category: 'Lifestyle', count: 2},
    {id: 3, category: 'Music', count: 3},
    {id: 4, category: 'Travel', count: 2}
]
export const tags  = ['Apartment', 'Confy', 'Couple', 'Family', 
    'Flat', 'Food', 'Healthy', 'Love', 'Luxuary', 'Organic', 
    'Peace', 'Tasty'
]

 export const faqs = [
    {
        type: 'general',
        questions: ['How To Install Rikanda Theme',
            'What is main Requirement For Rikanda', 
            'Why Choose Rikanda Theme'
        ]

    },
    {
        type: 'payment',
        questions: ['May I Request For Refund',
            'May I Get Any Offer in Future', 
            'How Much Time It will Take For Refund'
        ]

    },

    {
        type: 'upgrade',
        questions: ['How To Upgrade Rikanda Theme',
            'Rikada Available for WordPress Version', 
            'Why We need to upgrade Rikada'
        ]

    }
]

export const typeOfProperty = ['Any Type', 'Appartment', 'Villas',
    'Commercials',, 'Offices', 'Garage'
]

export const propertyLocations = ['New York City', 'Chicago, Illinois',
    'Las Vegas', 'Comercial', 'New Orleans', 'Washington'
]

export const filterItems = ( items, query) => {
    query = query.toLowerCase();
    return items.filter( item => item.toLowerCase().includes(query)
    )
}
