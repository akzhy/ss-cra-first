import { BrowserRouter, Route } from 'react-router-dom';
import IndexPage from './pages';
import ElementsPage from './pages/elements';
import './sass/main.scss';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path="/" exact>
                    <IndexPage />
                </Route>
                <Route path="/elements" exact>
                    <ElementsPage />
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
