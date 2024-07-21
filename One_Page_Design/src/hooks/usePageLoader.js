// import { useState, useEffect } from 'react';

// export const usePageLoader = () => {
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const onPageLoad = () => {
//             console.log('Page loaded');
//             setLoading(false);
//         };

//         if (document.readyState === 'complete') {
//             onPageLoad();
//         } else {
//             window.addEventListener('load', onPageLoad);
//             return () => window.removeEventListener('load', onPageLoad);
//         }
//     }, []);

//     return loading;
// };

import { useState, useEffect } from 'react';

export const usePageLoader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleComplete = () => {
            setLoading(false);
            const initialLoader = document.getElementById('initial-loader');
            if (initialLoader) {
                initialLoader.style.display = 'none';
            }
        };

        if (document.readyState === 'complete') {
            handleComplete();
        } else {
            window.addEventListener('load', handleComplete);
            return () => window.removeEventListener('load', handleComplete);
        }
    }, []);

    return loading;
};

