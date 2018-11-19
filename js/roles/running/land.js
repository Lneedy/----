/**
 * @export 陆地实例
 */
import Sprite from '../../base/sprite';
import Config from '../../config';
import databus from '../../databus';
const landList = [];
for(let i = 0; i < 3; i++){
    const landArr = new Sprite({
        img:'game@land',
        ...Config.gameInfo.land,
        x: i * Config.gameInfo.land.width,
        init(){
            this.x =  i * Config.gameInfo.land.width;
            this.speed = Config.gameInfo.land.speed;
        },
        update(){
            this.speed *= databus.scoreSpeed;
            this.x += this.speed;
            if(this.x <= -(this.width - (databus.screenWidth -  this.width))){
                this.x += this.width * 2 - (databus.screenWidth -  this.width) * 2 ;
            }
        } 
    });
    landList.push(landArr);
}

export default landList;