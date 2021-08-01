import React, { Component } from 'react'

import {Minimalistic} from './minimalistic'
import {Blog} from './blog'

export default class MiddleSection extends Component{
    render(){
        return(
            <>
            <div id = 'min'>
                <Minimalistic/>
            </div>

            <div id = 'blog'>
                <Blog/>
            </div>
            </>   
        )
    }
}