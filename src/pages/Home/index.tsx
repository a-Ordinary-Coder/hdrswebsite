import React, { FC } from 'react'
import {
    Link,
    Routes,
    Route,
    useNavigate,
} from 'react-router-dom'

// 导入组件
import Index from '../HomeSub/Index'
import Job from '../HomeSub/Job'
import Ptjob from '../HomeSub/Ptjob'

export default class Home extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <div>
                    <ul style={{listStyleType:'none'}}>
                        <li><Link to="/index">首页</Link></li>
                        <li><Link to="/job">集市</Link></li>
                        <li><Link to="/ptjob">兼职</Link></li>
                    </ul>

                </div>
                <div>
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
