
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '@/main/pages/Home';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch> {/* Switch é usado para que apenas uma rota seja renderizada por vez */}
                <Route path="/" component={Home} exact/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;