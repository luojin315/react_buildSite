import React, { Component } from 'react'
import getComponent from '../exportComponent'
import SuspendedWindow from '../editComponents/control_suspendedWindow/control_suspendedWindow'

export default class index extends Component {
    state = {
        ary: ["header", "nav"],
        isShowWindow: true
    }
    test = () => {
        this.setState({
            ary: [...this.state.ary, 'nav']
        })
    }
    openWindow = (data) => {
        return () => {
            this.setState({
                isShowWindow: data
            })
        }
    }
    render() {
        const { ary, isShowWindow } = this.state;
        return (
            <div>
                {
                    ary.map((item, index) => {
                        return getComponent(item, index)
                    })
                }
                    <SuspendedWindow  key="1" openWindow={this.openWindow} chengeState={isShowWindow}/>
                <button onClick={this.openWindow(true)}>click me</button>
            </div >
        )
    }
}
