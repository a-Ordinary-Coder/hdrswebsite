import React, { useRef } from "react";

// 导入antd-mobile组件
import { Button, Space, Swiper, Toast } from 'antd-mobile'
import { SwiperRef } from 'antd-mobile/es/components/swiper'

import styles from './sty.less'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const items = colors.map((color, index) => (
    <Swiper.Item key={index} >
        <div
            className={styles.content}
            style={{ background: color,height:'120px'}}
            onClick={() => {
                Toast.show(`你点击了卡片 ${index + 1}`)
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