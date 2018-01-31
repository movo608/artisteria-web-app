import React, { Component } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default class LandingLayout extends Component {
    render() {
        return (
            <div className="app">
                <div className="site-container">
                    <div className="site-pusher">
                        <Header />

                        <div className="content">
                            { this.props.children }
                        </div>

                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}