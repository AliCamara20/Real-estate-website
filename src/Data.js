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



export const reviews = [
    {
        id: 0, 
        img: rev_2, 
        info: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores',
        customer_name: 'Shilpa Shethy', 
        customer_position : 'CEO Of Zapple'

    },

    {
        id: 1, 
        img: rev_1, 
        info: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores',
        customer_name: 'Adam Williams', 
        customer_position: 'Founder Of Microwoft'

    },

    {
        id: 2, 
        img: rev_5, 
        info: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores',
        customer_name: 'Usan Gulwarm', 
        customer_position: 'CEO Of Faceworm'

    },

    {
        id: 3, 
        img: rev_4, 
        info: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores',
        customer_name: 'Retha Deowalim', 
        customer_position: 'CEO Of Apple'

    },


    {
        id: 4, 
        img: rev_3, 
        info: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores',
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
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', 
        published_at: 'March 19 2023', 
        comments: 0
    },
       
    {
        id: 1,
        blog_img: blog_img8,
        title: 'List of benifits and impressive listeo services', 
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', 
        published_at: 'May 29 2023', 
        comments: 3
    },
    {
        id: 2,
        blog_img: blog_img3,
        title: 'Resido Clients Are Happy With The Services', 
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', 
        published_at: 'Jan 23 2024', 
        comments: 5
    },
    {
        id: 3,
        blog_img: blog_img4,
        title: 'The Services Resido Provides Will Impress', 
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', 
        published_at: 'March 19 2024', 
        comments: 4
    },
    {
        id: 4,
        blog_img: blog_img5,
        title: 'Why people choose listio for own properties', 
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', 
        published_at: 'Nov 21 2024', 
        comments: 7
    },

    {
        id: 5,
        blog_img: blog_img6,
        title: 'Why Resido is been popular all this years', 
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', 
        published_at: 'Jan 12 2025', 
        comments: 25
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
