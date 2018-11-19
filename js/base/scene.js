/**
 *
 *
 * @export 
 * @class Scenes
 * @param config 所有角色
 * 场景类
 */
import databus from '../databus';
export default class Scenes{
    constructor(config){
        //游戏中所有的角色
        for (let k in config){
            this[k] = config[k];
        }
    }
    
    init(){}
    update(){}
    /**
     * @description
     * @date 2018-11-15
     * @param {*} e
     * @memberof Scenes
     */
    click(e){
        const clientX = e.touches[0].clientX;
        const clientY = e.touches[0].clientY;
        this.roles.forEach(role => {
            if(clientX >= role.x && clientX <= (role.x + role.width) && clientY >= role.y && clientY <= (role.y + role.height)){
                role.click(e);
            }
        });
    }

    
    /**
     * @description  场景数据复用
     * @date 2018-11-15
     * @memberof Scenes
     */
    initRoles(){}

    /**
     * @param {*} ctx
     * @memberof Scenes
     * 渲染场景 分别调用每个角色的render函数
     */
    render(ctx, delta, changeSceneFn){
        this.roles.forEach(role => {
            role.render(ctx, delta, changeSceneFn);
            if(!databus.gameover){
                role.update();
            }
        });
        
        this.update();
    }
}