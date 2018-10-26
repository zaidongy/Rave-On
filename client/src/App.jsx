import React, { Component } from "react";
import Artistpage from "./components/Artistpage";
import AppNavBar from "./components/AppNavBar";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <AppNavBar />
                    <Artistpage />
                </div>
            </div>
        );
    }
}

export default App;
