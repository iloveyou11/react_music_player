import React from 'react'
import './header.less'


let Header = React.createClass({
    render() {
        return (
            <div className="components-header row">
                <img src="/static/images/logo.png" width="40px" className="-col-auto"></img>
                <h1 className="caption">小型音乐播放器</h1>
            </div>
        )
    }
});

export default Header;