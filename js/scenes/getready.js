import Scene from '../base/scene';
import Title from '../roles/getready/title';
import Birds from '../roles/getready/bird';
import Land from '../roles/getready/land';
import Sky from '../roles/getready/sky';
import databus from '../databus';
import Tap from '../roles/getready/tap';
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
        Tap,
    ],
    changeScene(){},
    click(e){
        this.changeScene('running');
    },
    render(ctx, delta, changeSceneFn){
        this.changeScene = changeSceneFn;
        this.roles.forEach(role => {
            role.render(ctx, delta, changeSceneFn);
            if(!databus.gameover){
                role.update();
            }
        });
        this.update();
    }
});