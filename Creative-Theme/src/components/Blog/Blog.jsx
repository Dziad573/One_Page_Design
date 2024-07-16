import styles from "./Blog.module.css";
import { blog } from "../../constants/blog";

export const Blog = () => {
    return (
        <div id="Blog" className={styles.blogContainer}>
            <div className={styles.header}><h1>Latest </h1> <h1> Blog</h1></div>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"/></svg>  
                                <span>
                                    {item.author}
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4z"/></svg>
                                <span>{item.comments}</span>
                            </div>  
                            <p>{item.content}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}