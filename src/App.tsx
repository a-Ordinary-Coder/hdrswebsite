import React from 'react';
// import { Button } from 'antd-mobile';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Msg from './pages/Msg'
import Home from './pages/Home';
import My from './pages/My'

function App() {
  return (
    // Router组件包裹整个div
    <Router>
      <div className="App">
        {/* 1.测试antd-mobile的Button组件*/}
        {/* <Button>提交</Button> */}

        {/* 2.测试路由 
          *   由于react-router-dom组件的更新，目前需要Route组件放在Routers下
        */}
        <ul>
          <li><Link to="/msg/*">消息</Link></li>
          <li><Link to="/home/*">首页</Link></li>
          <li><Link to="/my/*">我的</Link></li>
        </ul>
        <Routes>
          <Route path="/msg/*" element={<Msg></Msg>}></Route>
          <Route path="/home/*" element={<Home></Home>}></Route>
          <Route path="/my/*" element={<My></My>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
