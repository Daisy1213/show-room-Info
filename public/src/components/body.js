/**
 * Created by zhangsha on 16-8-14.
 */
import React, {Component} from 'react';

export default class Body extends Component{
    render(){
        return (
            <div>
                <span className="title-span">清新甜美，适合女生的单身公寓</span><br/>
                <div>
                    <a href = "#" >萤火虫</a><span>></span><a href="#">上海></a>上海市虹口地区
                </div>
                <img src="images/room1.jpg" className="room-picture"/>
            </div>
        );
    }
}
