import React, { Component, Fragment } from 'react'
//引入此路径，才不会打包失败
// import Swiper from 'swiper/dist/js/swiper.js';

//引入样式，还可以加上自己的样式
import 'swiper/dist/css/swiper.min.css';
import "../../../assets/css/home/content.css"

class Content extends Component {
    render() {
        return (
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                </div>
                {/* <!-- 如果需要分页器 --> */}
                <div class="swiper-pagination"></div>

                {/* <!-- 如果需要导航按钮 --> */}
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

                {/* <!-- 如果需要滚动条 --> */}
                <div class="swiper-scrollbar"></div>
            </div>
        )        
    }
    componentDidMount(){
        //可以加上你需要的条件等，然后生成Swiper对象，
        //一定要检查是不是每次都生成了Swiper对象，否则可能出现不滑动的情况和别的情况等
        new Swiper('.swiper-container',{
            loop: true, // 循环模式选项
        
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
        
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        
            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar',
            },
            
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
        });
    }
}

export default Content