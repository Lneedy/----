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
    a: 9.8,
    render(ctx, delta, changeSceneFn){
        this.speed = this.speed + this.a * delta;
        this.y += (this.speed * delta + 1/2 * this.a * delta * delta)*60 ;
        if(this.y >= 210){
            this.speed = -2.5;
        }

        const x = 50;
        ctx.drawImage(databus.resources.images[this.img], 0, 0, this.width, this.height, x, this.y, this.width, this.height);
    }
});