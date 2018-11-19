/**
 * @export 提示点击实例
 */
import Sprite from '../../base/sprite';
import Config from '../../config';

export default new Sprite({
    img:'game@tip',
    ...Config.gameInfo.tap
});