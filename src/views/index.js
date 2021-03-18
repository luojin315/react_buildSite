import React, { Component } from 'react'
import getComponent from '../exportComponent'
import SuspendedWindow from '../editComponents/control_suspendedWindow/control_suspendedWindow'
import PubSub from 'pubsub-js'

export default class index extends Component {
    state = {
        ary: ["header", "nav"],
        isShowWindow: true
    }
    openWindow = () => {
        //发布消息给订阅者
        PubSub.publish('changeSuspendedWindowState', { isShowWindow: true });
    }
    render() {
        const { ary } = this.state;
        return (
            <div>
                {
                    ary.map((item, index) => {
                        return getComponent(item, index)
                    })
                }
                <SuspendedWindow />
                <button onClick={this.openWindow}>click me</button>
            </div >
        )
    }
}
