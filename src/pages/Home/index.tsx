import React, { FC } from 'react'
import { NavBar, TabBar } from 'antd-mobile'

import {
    Route,
    Routes,
    useNavigate,
    useLocation,
    BrowserRouter as Router,
} from 'react-router-dom'
import {
    AppOutline,
    MessageOutline,
    UnorderedListOutline,
    UserOutline,
} from 'antd-mobile-icons'
import styles from './demo02.less'



const Bottom: FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location

    const setRouteActive = (value: string) => {
        navigate('/home')
    }

    const tabs = [
        {
            key: '/home',
            title: '首页',
            icon: <AppOutline />,
        },
        {
            key: '/todo',
            title: '我的待办',
            icon: <UnorderedListOutline />,
        },
        {
            key: '/message',
            title: '我的消息',
            icon: <MessageOutline />,
        },
        {
            key: '/me',
            title: '个人中心',
            icon: <UserOutline />,
        },
    ]

    return (
        <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
            {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
        </TabBar>
    )
}

export default () => {
    return (
        <Router>
            <div>
                <div>
                    <NavBar>配合路由使用</NavBar>
                </div>
                <div>
                    <Routes>
                        <Route path='/home' element={<Home />}/>
                        <Route path='/todo' element={<Todo />} />
                        <Route path='/message' element={<Message />} />
                        <Route path='/me' element={<PersonalCenter />} />
                    </Routes>
                </div>
                <div>
                    <Bottom />
                </div>
            </div>
        </Router>
    )
}

function Home() {
    return <div>首页</div>
}

function Todo() {
    return <div>我的待办</div>
}

function Message() {
    return <div>我的消息</div>
}

function PersonalCenter() {
    return <div>个人中心</div>
}