/**
 * @export 标题实例
 */
import Sprite from '../../base/sprite';
import Config from '../../config';
import databus from '../../databus';
const score = Config.gameInfo.curScore;
export default new Sprite({
    img:'game@over',
    ...Config.gameInfo.gameover,
    render(ctx){
        const scoreText = 'SCORE: ' + databus.score;
        ctx.font = score.font;
        ctx.fillStyle = score.fillStyle;
        const scoreWidth = ctx.measureText(scoreText).width;
        if(!databus.gameover){
            ctx.fillText(scoreText, (databus.screenWidth - scoreWidth) / 2, score.y);
        }
        
    },
    init(){
        databus.score = 0;
    },
});