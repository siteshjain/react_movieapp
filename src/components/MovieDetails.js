import React, { Component } from 'react'

export default class MovieDetails extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                {
                    console.log(this.props.info)
                }
            </div>
        )
    }
}
