import Head from './components/head';
import Main from './components/main';
import Sidebar from './components/sidebar';

function App() {
    return (
        <div className="App">
            <Head title="UI Elements" />
            <Sidebar />
            <Main />
        </div>
    );
}

export default App;
