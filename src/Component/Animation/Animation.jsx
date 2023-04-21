import React from "react";
import "./Animation.css";

export class Animation extends React.Component{
    constructor(props){
        super(props);
        this.animateBlockPosition = [
            {x:-5, y:-3, speed:_random(7, 12)},
            {x:-5, y:80, speed:_random(7, 12)},
            {x:-5, y:170, speed:_random(7, 12)},
            {x:-5, y:250, speed:_random(7, 12)},
            {x:-5, y:335, speed:_random(7, 12)},
            {x:90, y:335, speed:_random(7, 12)},
            {x:180, y:339, speed:_random(7, 12)},
            {x:280, y:339, speed:_random(7, 12)},
            {x:350, y:339, speed:_random(7, 12)},
            {x:430, y:339, speed:_random(7, 12)},
            {x:490, y:339, speed:_random(7, 12)},
            {x:580, y:339, speed:_random(7, 12)},
        ]
    }
    render(){
        return(
            <div className="animateApp">
                <div className="animaateLeft">
                    {
                        this.animateBlockPosition.map((item, index) => {
                            return <div key={index} className="animateBlock" style={{left:item.x, top:item.y, animation: 'identifier infinite linear ' + item.speed + 's'}}></div>
                        })
                    }
                </div>

                <div className="animaateRight">
                    {
                        this.animateBlockPosition.map((item, index) => {
                            return <div key={index} className="animateBlock" style={{left:item.x, top:item.y, animation: 'identifier infinite linear ' + item.speed + 's'}}></div>
                        })
                    }
                </div>
            </div>
        )
    }
}

function _random(mix, max){
    return ~~(Math.random() * (max - mix) + mix);
  }