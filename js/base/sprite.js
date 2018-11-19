/**
 *
 * @export
 * @class Sprite 
 * @param config 角色的属性
 * 用来创建所有的游戏精灵(角色) 提供公共属性 和 方法
 */
import databus from '../databus';
export default class Sprite{
    constructor(config){
        for(var k in config) {
            this[k] = config[k] 
        }   
        this.init();
    }

    /**
     * 初始化
     */
    init(){}

    /**
     *  角色的单击事件
     * 
     */
    click(){}

    /**
     *  角色会动 在该页面添加update实现
     * 
     */
    update(){}

    /**
     * @description 初始化
     * @date 2018-11-15
     * @param {*} ctx
     * @param {*} delta
     * @param {*} changeSceneFn
     * @memberof Sprite
     */
    render(ctx, delta, changeSceneFn){
        ctx.drawImage(databus.resources.images[this.img],this.x,this.y,this.width,this.height);
    }
} 