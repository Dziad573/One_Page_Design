const LazyImage = ({ src, alt }) => {
    return (
        <img src={src} alt={alt} loading="lazy" />
    );
};

export default LazyImage;
