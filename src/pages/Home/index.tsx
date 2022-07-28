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
    UserOutline,
    MessageFill,
} from 'antd-mobile-icons'


import styles from './demo02.less'
import Msg from '../Msg'
import My from '../My'

const Bottom: FC = () => {
    const navigate = useNavigate()
    // const location = useLocation()
    // const { pathname } = location


    const tabs = [
        {
            key: '*/home/tim',
            title: '首页',
            icon: <AppOutline />,
        },
        {
            key: '*/home/msg',
            title: '消息',
            icon: (active: boolean) =>
                active ? <MessageFill /> : <MessageOutline />,
            badge: '99+',
        },
        {
            key: '*/home/my',
            title: '我的',
            icon: <UserOutline />,
        },
    ]

    const onNavigate = (value: string) => {
        navigate(value)
    }

    // 不知道怎么更改选中颜色
    return (
        <TabBar
            onChange={value => onNavigate(value)}
        >
            {tabs.map(item => (
                <TabBar.Item
                    key={item.key}
                    icon={item.icon}
                    title={item.title}
                    badge={item.badge}
                    style={{ color: '#57c3c2' }}
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

                        <Route path='*/home/my' element={<My />}></Route>

                        <Route path="*/home/msg" element={<Msg />}></Route>
                    </Routes>
                </div>
                <div className={styles.bottom} style={{position:'fixed',bottom:0,width:'100%',marginLeft:'-7px'}}>
                    <Bottom />
                </div>
            </div>

        )
    }

}

function Tim() {
    return <div>首页</div>
}