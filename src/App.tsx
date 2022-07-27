import React from 'react';
// import { Button } from 'antd-mobile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';

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
        <Routes>
          <Route path="*" element={<Home></Home>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
