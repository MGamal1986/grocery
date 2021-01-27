import "./App.scss";
import Grocery from "./container/Grocery/Grocery";
import Layout from "./container/Layout/Layout";

function App() {
    return (
        <div className="App">
            <Layout>
                <Grocery />
            </Layout>
        </div>
    );
}

export default App;
