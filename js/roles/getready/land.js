/**
 * @export 陆地实例
 */
import Sprite from '../../base/sprite';
import Config from '../../config';
const List = [];
for(let i = 0; i < 2; i++){
    const sprite = new Sprite({
        img:'game@land',
        ...Config.gameInfo.land,
        x: i * Config.gameInfo.land.width
    });
    List.push(sprite);
}
export default List;