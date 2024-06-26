import { useState, useEffect } from 'react';

export const useImageLoader = (images) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const imagePromises = images.map((src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = reject;
            });
        });

        Promise.all(imagePromises)
            .then(() => setLoaded(true))
            .catch(() => setLoaded(false));
    }, [images]);

    return loaded;
};