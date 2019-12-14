import React, { Component } from 'react'
import { Tabs } from 'antd';
import List from "../list/list"
import Appraise from "../list/appraise/appraise"
import "../../../assets/css/food/btn.css"

const { TabPane } = Tabs;
export default class Btn extends Component {
    render() {
        return (
            <div id="btn">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="商品" key="1">
                        <List shuju={this.props.listData} />
                    </TabPane>
                    <TabPane tab="评价" key="2">
                        <Appraise bottom={this.props.bottomData} tags={this.props.tagsData}/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
