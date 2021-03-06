import { render } from '@testing-library/react';
import React from 'react';
import './style.css';
export class Launch extends React.Component {
    render() {
        return (
            <div className='launch'>
                <img src={this.props.banner}></img>
                <div className='content'>
                    <div className='info'>
                        <h1>{this.props.title}</h1>
                        <h1>{this.props.date}</h1>
                    </div>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        )
    }
}