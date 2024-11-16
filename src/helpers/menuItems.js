 const menuItems = [
    {
        href: '#', 
        text: 'About us'
    },
    {
        href: '/gallery',
        text: "Gallery"
    },
    {
        href: '#', 
        text: 'Services',
        subItems: [
            {
                href: '/interior-painting', 
                text: 'Interior Painting',
            },
            {
                href: '/exterior-painting', 
                text: 'Exterior Painting',
            },
        ]
    },
    {
        href: '#', 
        text: 'Resources'
    },
    {
        href: '/contact-us', 
        text: 'Contact'
    },
];

export default menuItems;
