import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
    render() {
        let relatives = ["ns", "js", "java"];
        return (
            <>
                <ol key="relativeList">
                    {relatives.map((relatives, index) => (
                        <li key={`relativeListItem${index + 1}`}></li>
                    ))}
                </ol>
            </>
        );
    }
}

export default App;
