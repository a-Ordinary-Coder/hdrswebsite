import React, { FC } from 'react'
import { NavBar, TabBar } from 'antd-mobile'
import {
    Routes,
    Route,
    useNavigate,
    // useLocation,
} from 'react-router-dom'
import {
    AppOutline,
    MessageOutline,
    UnorderedListOutline,
    UserOutline,
    MessageFill,
} from 'antd-mobile-icons'

import styles from './demo02.less'

const Bottom: FC = () => {
    const navigate = useNavigate()
    // const location = useLocation()
    // const { pathname } = location

    // const setRouteActive = (value: string) => {
    //     history.push(value)
    // }

    const tabs = [
        {
            key: '*/home/tim',
            title: '首页',
            icon: <AppOutline />,
        },
        {
            key: '*/home/todo',
            title: '我的待办',
            icon: <UnorderedListOutline />,
            badge: '9',
        },
        {
            key: '*/home/message',
            title: '我的消息',
            icon: (active: boolean) =>
                active ? <MessageFill /> : <MessageOutline />,
            badge: '99+',
        },
        {
            key: '*/home/me',
            title: '个人中心',
            icon: <UserOutline />,
        },
    ]

    return (
        // <TabBar activeKey={pathname} onChange={value => navigate(value)} safeArea={true} defaultActiveKey={'*/home/todo'}>
        //     {tabs.map(item => (
        //         <TabBar.Item key={item.key} icon={item.icon} title={item.title} badge={item.badge} />
        //     ))}
        // </TabBar>

        <TabBar onChange={value => navigate(value)}>
            {tabs.map(item => (
                <TabBar.Item
                    key={item.key}
                    icon={item.icon}
                    title={item.title}
                    badge={item.badge}
                />
            ))}
        </TabBar>

    )
}

export default class Home extends React.Component {



    render(): React.ReactNode {
        return (

            <div className={styles.app}>
                <div className={styles.top}>
                    <NavBar>首页  | 岗位  |  兼职 </NavBar>
                </div>
                <div className={styles.body} style={{ marginTop: '100px' }}>
                    <Routes>
                        <Route path='*/home/tim' element={<Tim />}></Route>
                        <Route path='*/home/todo' element={<Todo />}></Route>
                        <Route path='*/home/message' element={<Message />}></Route>
                        <Route path='*/home/me' element={<PersonalCenter />}></Route>

                    </Routes>
                </div>
                <div className={styles.bottom}>
                    <Bottom />
                </div>
            </div>

        )
    }

}

function Tim() {
    return <div style={{ paddingTop: '20px' }}>首页</div>
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