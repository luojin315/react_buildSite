import React, { Component } from 'react'
import './horizontalNav.scss'

export default class header extends Component {
    line = React.createRef()
    navMouseover = (e) => {
        const { target: { className, nodeName }, target } = e;
        if (className !== 'line' && nodeName === 'LI') {
            let num = [].indexOf.call(target.parentNode.querySelectorAll('li'), target),
                left;
            if (num === 0) {
                left = 60;
            } else {
                left = 60 + (num * 120);
            }
            this.line.current.style.left = `${left}px`;
        }
    }
    render() {
        return (
            <nav className="horizontalPullDownNav">
                <ul onMouseOver={this.navMouseover}>
                    <li><a href="http://www.baidu.com">首页</a></li>
                    <li className="pullDown"><a href="http://www.baidu.com">品牌介绍</a>
                        <div>
                            <a href="http://www.baidu.com">发展历程</a>
                            <a href="http://www.baidu.com">教研课程</a>
                        </div>
                    </li>
                    <li className="pullDown"><a href="http://www.baidu.com">舞蹈培训</a>
                        <div>
                            <a href="http://www.baidu.com">少儿舞蹈</a>
                            <a href="http://www.baidu.com">成人舞蹈</a>
                            <a href="http://www.baidu.com">民族舞</a>
                            <a href="http://www.baidu.com">古典舞</a>
                            <a href="http://www.baidu.com">爵士舞</a>
                            <a href="http://www.baidu.com">芭蕾舞</a>
                            <a href="http://www.baidu.com">拉丁舞</a>
                            <a href="http://www.baidu.com">街舞</a>
                        </div>
                    </li>
                    <li className="pullDown"><a href="http://www.baidu.com">声乐培训</a>
                        <div>
                            <a href="http://www.baidu.com">少儿声乐</a>
                            <a href="http://www.baidu.com">成人声乐</a>
                            <a href="http://www.baidu.com">流行唱法</a>
                            <a href="http://www.baidu.com">民族唱法</a>
                            <a href="http://www.baidu.com">通俗唱法</a>
                            <a href="http://www.baidu.com">美声唱法</a>
                        </div>
                    </li>
                    <li className="pullDown"><a href="http://www.baidu.com">器乐培训</a>
                        <div>
                            <a href="http://www.baidu.com">少儿器乐</a>
                            <a href="http://www.baidu.com">成人器乐</a>
                            <a href="http://www.baidu.com">钢琴</a>
                            <a href="http://www.baidu.com">吉他</a>
                            <a href="http://www.baidu.com">架子鼓</a>
                            <a href="http://www.baidu.com">尤克里里</a>
                        </div>
                    </li>
                    <li className="pullDown"><a href="http://www.baidu.com">美术培训</a>
                        <div>
                            <a href="http://www.baidu.com">少儿美术</a>
                            <a href="http://www.baidu.com">成人美术</a>
                            <a href="http://www.baidu.com">素描</a>
                            <a href="http://www.baidu.com">油画</a>
                            <a href="http://www.baidu.com">水粉</a>
                            <a href="http://www.baidu.com">漫画</a>
                            <a href="http://www.baidu.com">水彩</a>
                            <a href="http://www.baidu.com">速写</a>
                        </div>
                    </li>
                    <li className="pullDown"><a href="http://www.baidu.com">艺考考级</a>
                        <div>
                            <a href="http://www.baidu.com">艺考舞蹈</a>
                            <a href="http://www.baidu.com">艺考声乐</a>
                            <a href="http://www.baidu.com">艺考器乐</a>
                            <a href="http://www.baidu.com">社会考级</a>
                            <a href="http://www.baidu.com">特长考试</a>
                        </div>
                    </li>
                    <li className="pullDown"><a href="http://www.baidu.com">关于我们</a>
                        <div>
                            <a href="http://www.baidu.com">师资力量</a>
                            <a href="http://www.baidu.com">学员风采</a>
                            <a href="http://www.baidu.com">艺术头条</a>
                            <a href="http://www.baidu.com">联系我们</a>
                        </div>
                    </li>
                    <li><a href="http://www.baidu.com">校区分布</a></li>
                    <li className="line" ref={this.line}></li>
                </ul>
            </nav>
        )
    }
}