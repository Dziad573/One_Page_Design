import { useEffect, useState } from "react";

export const useShowImage = () => {
    const [showImg, setShowImg] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setShowImg(window.innerWidth > 1028);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return showImg;
};

// const[showImg, setShowImg] = useState(window.innerWidth > 768 ? true : false);
// useEffect(() => {
//     const handleResize = () => {
//         setShowImg(window.innerWidth > 768);
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup function to remove the event listener when the component unmounts
//     return () => {
//         window.removeEventListener('resize', handleResize);
//     };
// }, []);