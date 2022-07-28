import React, { FC } from 'react'
import { TabBar } from 'antd-mobile'
import {
  BrowserRouter as Routers,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom'
import {
  AppOutline,
  MessageOutline,
  UserOutline,
  MessageFill,
} from 'antd-mobile-icons'

import Msg from './pages/Msg'
import My from './pages/My'
import Home from './pages/Home'

// Bottom组件
const Bottom: FC = () => {
  const navigate = useNavigate()

  const tabs = [
    {
      key: '/home' || '*/' || "/",
      title: '首页',
      icon: (active: boolean) =>
        active ? <AppOutline style={{ color: '#20894d' }} /> : <AppOutline />,
    },
    {
      key: '/msg',
      title: '消息',
      icon: (active: boolean) =>
        active ? <MessageFill style={{ color: '#20894d' }} /> : <MessageOutline />,
      badge: '99+',
    },
    {
      key: '/my',
      title: '我的',
      icon: (active: boolean) =>
        active ? <UserOutline style={{ color: '#20894d' }} /> : <UserOutline />,
    },
  ]

  const onNavigate = (value: string) => {
    navigate(value)
  }

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
          style={{ color: '#2b312c' }}
        />
      ))}
    </TabBar>

  )
}


function App() {
  return (
    <Routers>
      <div>
        <div >
          <Routes>
            <Route path='*' element={<Home />}></Route>

            <Route path='/home/*' element={<Home />}></Route>

            <Route path='/my' element={<My />}></Route>

            <Route path="/msg" element={<Msg />}></Route>

          </Routes>
        </div>
        <div 
          style={{ position: 'fixed', bottom: 0, width: '100%', marginLeft: '-8px' }}
          >
          <Bottom />
        </div>
      </div>
    </Routers>
  );
}

export default App;
