import React from "react";
import "./App.scss";
import Grocery from "./container/Grocery/Grocery";
import Layout from "./container/Layout/Layout";

class App extends React.Component {
    constructor(props) {
        super(props);
        console.time();
    }
    componentDidMount() {
        console.timeEnd();
    }
    render() {
        return (
            <div className="App">
                <Layout>
                    <Grocery />
                </Layout>
            </div>
        );
    }
}

export default App;
