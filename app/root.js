import React from 'react'
import Header from './components/header'
import Player from './page/player';

let Root = React.createClass({
    componentDidMount(){
        $("#player").jPlayer({
            ready:function(){
                $(this).jPlayer('setMedia',{
                    mp3:'http://fs.w.kugou.com/201811081923/0ceb453ac7291ebfb8bbda87d39227d8/G011/M01/07/08/Sw0DAFUAcjqAO2tyADaAphHEc3I109.mp3'
                }).jPlayer('play');
            },
            supplied:'mp3',
            wmode:'window'
        });
    },
    render(){
        return(
            <div>
                <Header/>
                <Player></Player>
            </div>
        )
    }
  
});

export default Root;