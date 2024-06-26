import { Layout } from './components/Layout/Layout';
import { PageLoader } from './components/PageLoader/PageLoader';
import { usePageLoader } from './hooks/usePageLoader';
import './styles/globals.css';

function App() {
    const loading = usePageLoader();

    return (
        <>
            {loading ? (
                <PageLoader loading={loading} />
            ) : (
                <Layout />
            )}
        </>
    );
}

export default App;

