import React from 'react'
import Progress from '../components/progress'
import './player.less'
let musicTime=null;

let Player = React.createClass({
    getInitialState() {
        return {
            progress: '-'
        }
    },
    componentDidMount() {
        $("#player").bind($.jPlayer.event.timeupdate, (e) => {
            musicTime = e.jPlayer.status.duration;
            this.setState({
                progress: e.jPlayer.status.currentPercentAbsolute
            });
        });
    },
    //绑定了事件一定要解绑，否则重新加载组件时会引起事件的重复绑定
    componentWilUnMount(){
        $("#player").unbind($.jPlayer.event.timeupdate);
    },
    onProgressChangeHandler(progress){
        $("#player").jPlayer('play',musicTime*progress);
    },
    // render() {
    //     return (
    //         <div className="player-page">
    //             <h1 className="caption">我的私人音乐坊 &gt;</h1>
    //             <div className="mt20 row">
    //             	<div className="controll-wrapper">
    //             		<h2 className="music-title">歌曲名称</h2>
    //             		<h3 className="music-artist mt10">歌手名字</h3>
    //             		<div className="row mt20">
    //             			<div className="left-time -col-auto">剩余时间</div>
    //             			<div className="volume-container">
    //             				<i className="icon-volume rt" style={{top: 5, left: -5}}></i>
    //             				<div className="volume-wrapper">
	// 				                {/* <Progress
	// 									progress='12'
	// 									onProgressChange={this.changeVolumeHandler}
	// 									barColor='#aaa'
	// 				                >
	// 				                </Progress> */}
    //             				</div>
    //             			</div>
    //             		</div>
    //             		<div style={{height: 10, lineHeight: '10px'}}>
	// 		                <Progress
	// 							progress={this.state.progress}
	// 							onProgressChange={this.onProgressChangeHandler}
	// 		                >
	// 		                </Progress>
    //             		</div>
    //             		<div className="mt35 row">
    //             			{/* <div>
	//                 			<i className="icon prev" onClick={this.prev}></i>
	//                 			<i className={`icon ml20 ${this.state.isPlay ? 'pause' : 'play'}`} onClick={this.play}></i>
	//                 			<i className="icon next ml20" onClick={this.next}></i>
    //             			</div>
    //             			<div className="-col-auto">
    //             				<i className={`icon repeat-${this.props.repeatType}`} onClick={this.changeRepeat}></i>
    //             			</div> */}
    //             		</div>
    //             	</div>
    //             	<div className="-col-auto cover">
    //             		{/* <img src={this.props.currentMusitItem.cover} alt={this.props.currentMusitItem.title}/> */}
    //             	</div>
    //             </div>
    //         </div>
    //     );
    // },
    render() {
        return (
            <div className="player-page">
                <Progress 
                    progress={this.state.progress}
                    barColor="#f00"
                    onProgressChange={this.onProgressChangeHandler}
                    ></Progress>
            </div>
        )
    }

});
export default Player;