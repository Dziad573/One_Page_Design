import styles from "./Blog.module.css";
import { blog } from "../../constants/blog";

export const Blog = () => {
    return (
        <div className={styles.blogContainer}>
            <h1>Latest Blog</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
            </p>
            <div className={styles.blogItems}>
                {blog.map((item) => (
                    <div key={item.id} className={styles.blogItem}>
                        <div className={styles.imageContainer}>
                            <img src={item.image} alt={item.title} loading="lazy"/>
                            <span className={styles.date}>{item.date}</span>
                        </div>
                        
                        <div className={styles.content}>
                            <h2>{item.title}</h2>
                            <div className={styles.stats}>
                                <span>{item.author}</span>
                                <span>Comments: {item.comments}</span>
                            </div>  
                            <p>{item.content}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}