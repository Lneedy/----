/**
 * @export 管道实例
 */
import Sprite from '../../base/sprite';
import Config from '../../config';
import databus from '../../databus';
const pipeList = [];
const pipeConfig = Config.gameInfo.pipe;
for(let i = 0; i < 3; i++){
    const pipeSprite = new Sprite({
        img: 'game@pipe_up',
        bottomImg :'game@pipe_down',
        ...pipeConfig,
        x: databus.screenWidth + i * (pipeConfig.width + pipeConfig.horizontalGap),
        bottomY: 0,
        markScore: false,//标记是否已进入计分
        init(){
            this.x = databus.screenWidth + i * (pipeConfig.width + pipeConfig.horizontalGap);
            this.y = 0;
            this.bottomY = 0;
            this.setPosition();
            this.setY();
            this.markScore = false;
            this.speed = Config.gameInfo.pipe.speed;
        },
        setY(){
            const rHeight = Math.random()*150+100;
            this.y = rHeight - this.height;
            this.bottomY = rHeight + this.verticalGap;
        },
        setPosition(){
            const position = {
                startX: this.x,
                startY: this.y,
                endX: this.x + this.width,
                endY: this.y + this.height,
            }
            this.position = {
                top: position,
                bottom: {
                    ...position,
                    startY: this.bottomY,
                    endY: this.bottomY + this.height,
                }
            }
        },
        update(){
            this.speed *= databus.scoreSpeed;
            this.x += this.speed;
            if(this.x < - this.width){
                this.x += (this.width + this.horizontalGap) * 3;
                this.setY();
                this.markScore = false;
            }
            this.setPosition();
            
        },
        render(ctx, delta, changeSceneFn){
            ctx.drawImage(databus.resources.images[this.img],this.x,this.y,this.width,this.height);
            ctx.drawImage(databus.resources.images[this.bottomImg],this.x,this.bottomY,this.width,this.height);
        }
    });
    pipeList.push(pipeSprite);
}
export default pipeList;