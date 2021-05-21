import { BrowserRouter, Route } from 'react-router-dom';
import IndexPage from './pages';
import './sass/main.scss';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path="/" exact>
                    <IndexPage />
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
