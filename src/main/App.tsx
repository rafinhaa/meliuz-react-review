import Header from '@/components/Header'; 
import Routes from '@/main/routes'; 
import { GlobalStyle } from "@/styles/globals";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Routes />
            <GlobalStyle />
        </>
    );
}

export default App;