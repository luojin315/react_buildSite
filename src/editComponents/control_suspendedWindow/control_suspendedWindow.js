import React, { Component } from 'react'
import './style.scss'
import { PieChartFilled, FormatPainterFilled, SettingFilled, OrderedListOutlined, BorderOutlined, CloseCircleOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'

// 悬浮窗盒子
export default class control_suspendedWindow extends Component {
    state = {
        head: 0,
        isShowWindow: true
    }
    switchHead = (num) => {
        //悬浮窗头部 导航点击
        return () => {
            this.setState({
                head: num
            })
        }
    }
    closeWindow = () => {
        //关闭悬浮窗 此组件
        this.setState({
            isShowWindow: false
        })
    }
    componentDidMount() {
        //订阅消息 可以不逐层递交值
        PubSub.subscribe('changeSuspendedWindowState', (msg, data) => {
            console.log(msg, data)
            this.setState(data)
        })
    }
    render() {
        const { head, isShowWindow } = this.state;
        return (
            <div className="control_suspendedWindow animate__animated animate__zoomIn" style={{ top: '100px', left: '200px', display: isShowWindow ? 'block' : 'none' }}>
                <div className="suspendedWindow_header">
                    <div className={head === 0 ? 'active' : ''} onClick={this.switchHead(0)}>
                        <PieChartFilled />
                        <p>模块</p>
                    </div>
                    <div className={head === 1 ? 'active' : ''} onClick={this.switchHead(1)}>
                        <FormatPainterFilled />
                        <p>样式</p>
                    </div>
                    <div className={head === 2 ? 'active' : ''} onClick={this.switchHead(2)}>
                        <SettingFilled />
                        <p>设置</p>
                    </div>
                    <CloseCircleOutlined className="close_suspendedWindow" onClick={this.closeWindow} />
                </div>
                <div className="suspendedWindow_body">
                    <div key="child1" className={`suspendedWindow_box ${head === 0 ? 'active' : ''}`}>
                        <ul className="suspendedWindow_boxHead">
                            <li className="active">新增模块</li>
                            <li>页面模块</li>
                            <li className="line"></li>
                        </ul>
                        <div className="suspendedWindow_boxBody active animate__animated  animate__fadeInRight">
                            <div className="menv_box">
                                <div className="menu_title">
                                    <i className="fa fa-chevron-circle-right"></i>
                                    <span>常用控件</span>
                                </div>
                                <ul className="controlMenu animate__animated animate__flipInX">
                                    <li id="addParagraphEvent">
                                        <OrderedListOutlined />
                                        <span>段落</span>
                                    </li>
                                    <li id="addBtnEvent">
                                        <BorderOutlined />
                                        <span>按钮</span>
                                    </li>
                                </ul>
                                <p className="clear"></p>
                            </div>

                            <div className="menv_box">
                                <div className="menu_title">
                                    <i className="fa fa-chevron-circle-right"></i>
                                    <span>常用控件</span>
                                </div>
                                <ul className="controlMenu animate__animated animate__flipInX">
                                    <li>
                                        <OrderedListOutlined />
                                        <span>段落</span>
                                    </li>
                                    <li>
                                        <BorderOutlined />
                                        <span>按钮</span>
                                    </li>
                                </ul>
                                <p className="clear"></p>
                            </div>
                        </div>
                        <div className="suspendedWindow_boxBody componentMapping  animate__animated animate__fadeInRight">
                        </div>
                    </div>
                    <div className={`suspendedWindow_box ${head === 1 ? 'active' : ''}`}>
                        <ul className="suspendedWindow_boxHead">
                            <li className="active">新增模块</li>
                            <li>页面模块</li>
                            <li className="line"></li>
                        </ul>
                        <div className="suspendedWindow_boxBody animate__animated active animate__fadeInRight">
                            2-1
                </div>
                        <div className="suspendedWindow_boxBody animate__animated animate__fadeInRight">
                            2-2
                </div>
                    </div>

                    <div className={`suspendedWindow_box ${head === 2 ? 'active' : ''}`}>
                        <ul className="suspendedWindow_boxHead">
                            <li className="active">新增模块</li>
                            <li>页面模块</li>
                            <li className="line"></li>
                        </ul>
                        <div className="suspendedWindow_boxBody animate__animated active animate__fadeInRight">
                            3-1
                </div>
                        <div className="suspendedWindow_boxBody animate__animated animate__fadeInRight">
                            3-2
                </div>
                    </div>
                </div>
            </div >
        )
    }
}
