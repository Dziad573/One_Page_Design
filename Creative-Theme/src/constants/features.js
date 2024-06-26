import { FaLaptopCode, FaDatabase, FaImages, FaThLarge } from 'react-icons/fa';
const buttons = [
    {
        id: 1,
        icon: FaLaptopCode,
        isActive: true,
    },
    {
        id: 2,
        icon: FaDatabase,
        isActive: false,
    },
    {
        id: 3,
        icon: FaImages,
        isActive: false,
    },
    {
        id: 4,
        icon: FaThLarge,
        isActive: false,
    },
];

import webDev from '../assets/webDev.jpg';
import gallery from '../assets/gallery.jpg';
import dataBase from '../assets/dataBase.jpg';
import responsive from '../assets/responsive.jpg';

const content = [
    {
        id: 1,
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc quis lacinia fringilla, nulla nisl lacinia felis, nec egestas elit nunc ac libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc quis lacinia fringilla, nulla nisl lacinia felis, nec egestas elit nunc ac libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc quis lacinia fringilla, nulla nisl lacinia felis, nec egestas elit nunc ac libero.",
        img: webDev,
    },
    {
        id: 2,
        title: "Data Base Management",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc quis lacinia fringilla, nulla nisl lacinia felis, nec egestas elit nunc ac libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc quis lacinia fringilla, nulla nisl lacinia felis, nec egestas elit nunc ac libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc quis lacinia fringilla, nulla nisl lacinia felis, nec egestas elit nunc ac libero.",
        img: dataBase,
    },
    {
        id: 3,
        title: "Gallery Management",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc quis lacinia fringilla, nulla nisl lacinia felis, nec egestas elit nunc ac libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc quis lacinia fringilla, nulla nisl lacinia felis, nec egestas elit nunc ac libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc quis lacinia fringilla, nulla nisl lacinia felis, nec egestas elit nunc ac libero.",
        img: gallery,
    },
    {
        id: 4,
        title: "Responsive Web Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc quis lacinia fringilla, nulla nisl lacinia felis, nec egestas elit nunc ac libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc quis lacinia fringilla, nulla nisl lacinia felis, nec egestas elit nunc ac libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc quis lacinia fringilla, nulla nisl lacinia felis, nec egestas elit nunc ac libero.",
        img: responsive,
    },
];

export { buttons, content };