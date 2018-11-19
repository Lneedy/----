import Scene from '../base/scene';
import Title from '../roles/start/title';
import Birds from '../roles/start/bird';
import Land from '../roles/start/land';
import Sky from '../roles/start/sky';
import Replay from '../roles/start/replay';

/** 
 * 创建场景类
 * roles 当前场景角色列表
*/
export default new Scene({
    roles:[
        Sky,
        ...Land,
        Title,
        Birds,
        Replay,
    ]
});