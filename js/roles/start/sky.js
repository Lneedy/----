/**
 * @export 天空背景实例
 */
import Sprite from '../../base/sprite';
import Config from '../../config';

export default new Sprite({
    img:'game@background',
    ...Config.gameInfo.sky
});