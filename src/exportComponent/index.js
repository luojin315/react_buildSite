import React from 'react'
import Header from '@components/header/header'
import Nav from '@components/horizontalNav/horizontalNav'

export default function getComponent(name, index) {
    switch (name) {
        case 'header': return <Header key={index} />;
        case 'nav': return <Nav key={index} />;
        default: return <div>没有这个组件</div>
    }
}
