import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import EyenationInfo from './EyenationInfoComponent';
import { PODCAST } from '../shows/eyenation';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eyenation: PODCAST,
            selectedEyenation: null
        };
    }

    onEyenationSelect(eyenationId) {
        this.setState({selectedEyenation: eyenationId});
    }

    render() {
        return (
            <div>
                <Header />
                <Directory eyenation={this.state.eyenations} onClick={eyenationId => this.onEyenationSelect(eyenationId)}/>
                <Footer />
            </div>
        );
    };
}

export default Main;