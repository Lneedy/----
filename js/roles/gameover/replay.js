/**
 * @export 开始按钮实例
 */
import Sprite from '../../base/sprite';
import Config from '../../config';
import databus from '../../databus';
export default new Sprite({
    img:'game@start_button',
    ...Config.gameInfo.replay,
    changeScene(){},
    click(e){
        this.changeScene('getready');
        databus.gameover = false;
    },
    render(ctx, delta, changeSceneFn){
        this.changeScene = changeSceneFn;
        ctx.drawImage(databus.resources.images[this.img],this.x,this.y,this.width,this.height);
    }
});