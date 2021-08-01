import React, { Component } from 'react'
import {Link} from 'react-scroll'

export default class Navbar extends Component {
    render(){
        return(
            <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
            <li><Link activeClass="active" to="min" spy={true} smooth={true}>Home</Link></li>
            <li><Link  to="min" spy={true} smooth={true}>Minimal</Link></li>
            <li><Link  to="blog" spy={true} smooth={true}>Blog</Link></li>
            </ul>
        )
    }

}