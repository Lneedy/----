import Scene from '../base/scene';
import Birds from '../roles/running/bird';
import LandList from '../roles/running/land';
import SkyList from '../roles/running/sky';
import Pipes from '../roles/running/pipe';
import CurScore from '../roles/running/score';
import databus from '../databus';
import music from '../music/index';

const LEVEL = databus.level;
let rate = 0;
let num = 1;
if(databus.screenWidth === 375){
    //苹果6
    rate = 1.8;
}else if(databus.screenWidth === 414){
    //苹果6 puls
    rate = 2.2;
}
/** 
 * 创建场景类
 * roles 当前场景角色列表
*/
export default new Scene({
    roles:[
        ...SkyList,
        ...Pipes,
        ...LandList,
        Birds,
        CurScore,
    ],
    Birds,
    Pipes,
    audio: false,
    changeScene(){},
    Land: LandList[0],
    isCollisionWith(bird, pipe){
        if(bird.x - rate * bird.width >= pipe.startX &&bird.x - rate * bird.width <= pipe.endX && bird.y >= pipe.startY && bird.y <= pipe.endY){
            return true;
        }
        return false;
    },
    //碰撞检测
    collisionDetection(){
        const result =  this.Pipes.some(pipe => {
            return this.isCollisionWith(this.Birds, pipe.position.top)||this.isCollisionWith(this.Birds, pipe.position.bottom);
        });
        return result;
    },
    //落地检测
    isLanded(){
        return this.Birds.y + 10 >= this.Land.y;
    },
    init(){
        databus.scoreSpeed = 1;
        this.roles.forEach(role => {
            role.init();
        });
        this.audio = false;
    },
    //设置积分
    setScore(){
        Pipes.forEach(pipe => {
            if(!pipe.markScore && this.Birds.x >= pipe.x + rate * this.Birds.width + pipe.width){
                pipe.markScore = true;
                music.playPoint();
                databus.score ++;
                if( databus.score >= num * LEVEL){
                    num++;
                   databus.scoreSpeed *= (1+0.002);
                }
            }
        });
    },  
    //刷新页面
    update(){
        const isCollision = this.collisionDetection();
        const isLanded = this.isLanded();
        if(isCollision){
            if(!this.audio){
                music.playCollision();
                this.audio = true;
                setTimeout(function(){
                    music.playDrop();
                },800);
            }
            databus.gameover = true;
           
        }
        
        if(isLanded){
            databus.gameover = true;
           
            this.changeScene('gameover');
            if(databus.score>databus.bestScore){
                databus.bestScore = databus.score;
            }
        }
        this.setScore();
    },
    //点击
    click(e){
        if(!databus.gameover){
            music.playSwooshing();
            this.Birds.speed = -4;
        }
    },
    render(ctx,delta,changeSceneFn){
        this.changeScene = changeSceneFn;
        this.roles.forEach(role => {
            role.render(ctx, delta);
            if(!databus.gameover){
                role.update();
            }
        });
        this.update();
    }
});