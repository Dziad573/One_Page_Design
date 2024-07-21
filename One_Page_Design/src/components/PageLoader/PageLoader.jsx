import { Oval } from 'react-loader-spinner';
import styles from './PageLoader.module.css';

export const PageLoader = ({ loading }) => {
    return (
        <div className={styles.pageLoader} style={{ display: loading ? 'flex' : 'none' }}>
            <Oval
                visible={true}
                height="80"
                width="80"
                color="#ff0000"
                secondaryColor='#7a7a7a'
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

