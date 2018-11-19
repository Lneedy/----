import Scene from '../base/scene';
import Over from '../roles/gameover/over';
import Replay from '../roles/gameover/replay';
import Score from '../roles/gameover/score';

/** 
 * 创建场景类
 * roles 当前场景角色列表
*/
export default new Scene({
    roles:[
        Over,
        Replay,
        Score,
    ],
    initRoles(roles){
        this.roles = [...roles, ...this.roles];
    }
});