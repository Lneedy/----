/**
 * @export 天空背景实例
 */
import Sprite from '../../base/sprite';
import Config from '../../config';
import databus from '../../databus';
const skyList = [];
for(let i = 0; i < 2; i++){
    const skySprite = new Sprite({
        img:'game@background',
        ...Config.gameInfo.sky,
        x: i * Config.gameInfo.sky.width,
        init(){
            this.x =  i * Config.gameInfo.sky.width;
            this.speed = Config.gameInfo.sky.speed;
        },
        update(){
            this.speed *= databus.scoreSpeed;
            this.x += this.speed;
            if(this.x <= -this.width){
                this.x += this.width*2;
            }
        }
    })
    skyList.push(skySprite);
}
export default skyList;