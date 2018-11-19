/**
 * @export 标题实例
 */
import Sprite from '../../base/sprite';
import Config from '../../config';

export default new Sprite({
    img:'game@over',
    ...Config.gameInfo.gameover
});