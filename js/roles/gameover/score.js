/**
 * @export 标题实例
 */
import Sprite from '../../base/sprite';
import Config from '../../config';
import databus from '../../databus';
import music from '../../music/index';
const score = Config.gameInfo.curScore;
const bestScore = Config.gameInfo.bestScore;
export default new Sprite({
    img:'game@over',
    ...Config.gameInfo.gameover,
    audio:false,
    render(ctx){
        if(!this.audio){
            this.audio = true;
           music.playRise();
        }
        const scoreText = 'SCORE: ' + databus.score;
        ctx.font = score.font;
        ctx.fillStyle = score.fillStyle;
        const scoreWidth = ctx.measureText(scoreText).width;
        let y = 260; 
        ctx.fillText(scoreText, (databus.screenWidth - scoreWidth) / 2, y);
        const bestScoreText = '   BEST: ' + databus.bestScore;
        ctx.font = bestScore.font;
        ctx.fillStyle = bestScore.fillStyle;
        const bestScoreWidth = ctx.measureText(bestScoreText).width;
        ctx.fillText(bestScoreText, (databus.screenWidth - bestScoreWidth) / 2, bestScore.y);
    },
    init(){
        databus.score = 0;
        this.audio = false;
    },
});