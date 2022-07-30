import React, { FC } from 'react'
import {
    Link,
    Routes,
    Route
} from 'react-router-dom'

// 导入组件
import Index from '../HomeSub/Index'
import Job from '../HomeSub/Job'
import Ptjob from '../HomeSub/Ptjob'

import sty from './sty.less'

const styJons = { "color": "green" };
export default class Home extends React.Component {
    
    render(): React.ReactNode {
        return (
            <div>
                <div style={{ width: '100%', height: '15px' }}>
                    <ul  style={{ listStyleType: 'none', lineHeight: '15px', marginLeft: '26%' }}>
                        <li style={{ display: 'inline-block', float: 'left', width: '16%' }}>
                            <Link to="/index" style={styJons}>首页</Link></li>
                        <li style={{ display: 'inline-block', float: 'left', width: '16%' }}>
                            <Link to="/job"
                             >集市</Link></li>
                        <li style={{ display: 'inline-block', float: 'left', width: '16%' }}>
                            <Link to="/ptjob">兼职</Link></li>
                    </ul>
                </div>

                <div style={{ marginTop: '0px', display: "block" }}>
                    <Routes>
                        <Route path="/index" element={<Index />}></Route>
                        <Route path="/" element={<Index />}></Route>
                        <Route path="/job" element={<Job></Job>}></Route>
                        <Route path="/ptjob" element={<Ptjob></Ptjob>}></Route>
                    </Routes>
                </div>
            </div>

        )
    }

}
