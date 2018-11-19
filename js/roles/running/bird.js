/**
 * @export 鸟实例
 */
import Sprite from '../../base/sprite';
import Config from '../../config';
import databus from '../../databus';
export default new Sprite({
    img:'game@birds',
    ...Config.gameInfo.bird,
    speed: 0,
    a: 9.8 * databus.scoreSpeed,
    init(){
        
        this.x = Config.gameInfo.bird.x;
        this.y = Config.gameInfo.bird.y;
        this.speed = 0;
        this.a = 9.8 * databus.scoreSpeed;
    },
    render(ctx, delta, changeSceneFn){
        this.speed = this.speed + this.a * delta;
        this.speed *= databus.scoreSpeed;
        this.y += (this.speed * delta + 1/2 * this.a * delta * delta)*60;
        if(this.y <= Config.gameInfo.area.top){
            this.y = Config.gameInfo.area.top
        }
        if(this.y >= Config.gameInfo.area.bottom - 10){
            this.y = Config.gameInfo.area.bottom - 10
        }

        const x = 50;
        ctx.save();
        ctx.translate(x, this.y);
        let curAngle = this.speed / this.max_speed * this.angle;
        if(curAngle>=this.angle){
            curAngle = this.angle;
        }
        ctx.rotate(curAngle /180 * Math.PI);
        ctx.drawImage(databus.resources.images[this.img], 0, 0, this.width, this.height, -1/2 * this.width, -1/2 * this.height, this.width, this.height);
        ctx.restore();
    }
});