import React, { Component } from "react";
// import "./Artistentry.css";

class Artistentry extends Component {
    render() {
        const logourl = "https://via.placeholder.com/75";
        return (
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img
                            className="img-circle"
                            // src={Artistlogo}
                            src={logourl}
                            alt="artistlogo"
                        />
                    </div>
                    <div class="col">{this.props.name}</div>
                    <div class="col artist-frequency">
                        {this.props.frequency}
                    </div>
                </div>
            </div>
        );
    }
}

export default Artistentry;
