import React, { Component } from "react";
import Artistentry from "./Artistentry";
import Addartist from "./Addartist";
import axios from "axios";

class Artistpage extends Component {
    constructor() {
        super();
        this.state = {
            artists: []
        };
    }

    componentDidMount() {
        axios.get("/api/artists").then(res => {
            console.log(res.data);
            this.setState({ ...this.state, artists: res.data });
        });
    }

    render() {
        const artistList = this.state.artists;
        return (
            <div className="Container">
                <ul className="list-group">
                    {artistList.map(artist => (
                        <li className="list-group-item">
                            <Artistentry
                                name={artist.name}
                                frequency={artist.occurance}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Artistpage;
