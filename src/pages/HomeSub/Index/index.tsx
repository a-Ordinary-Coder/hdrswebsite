import React, { useRef } from "react";

// 导入antd-mobile组件
import { Button, Space, Swiper, Toast } from 'antd-mobile'
import { SwiperRef } from 'antd-mobile/es/components/swiper'
import axios from 'axios'

import styles from './sty.less'
import { url } from "inspector";



const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']
const bgImgs = ['/assets/imgs/3.jpg', './imgs/4.jpg', './imgs/5.jpg', './imgs/2.jpg']

const items = bgImgs.map((bgImg, index) => (
    <Swiper.Item key={index} >
        <div
            className={styles.content}
            style={{
                // todo: 图片需要网络图片
                backgroundImage: 'url(' + 'file:///H:/HuaDa/RSSystem/WebSite/hdrswebsite/src/assets/imgs/3.jpg' + ')'
                // backgroundImage: bgImg
            }}
            onClick={() => {
                Toast.show(`你点击了卡片 ${index + 1}`)
                // todo: 跳转
            }}
        >
            {index + 1}
        </div>
    </Swiper.Item>
))

export default () => {
    const ref = useRef<SwiperRef>(null)
    return (
        <div>

            <Swiper autoplay loop>{items}</Swiper>

        </div>

    )
}


// export default class Index extends React.Component {
//     render(): React.ReactNode {
//         return (
//             <div>
//                 <Swiper autoplay loop>{items}</Swiper>
//             </div>
//         )
//     }
// }