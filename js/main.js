/**
 * @description 1.加载资源: 音乐 图片
 * @date 2018-11-13
 * @export 游戏主对象
 * @class Main
 */
import  config from './config';
import databus from './databus';
import sceneManager from './scenes/index';
const ctx = canvas.getContext('2d');

export default class Main{
    constructor(){
        //时间间隔
        this.delta = 0; 
        this.curFrameTime = new Date() - 0;
        this.lastFrameTime = new Date() - 0;
        this.render = this.render.bind(this);
        this.start();
    }
    // 游戏开始
    start(){
        this.loadReasources()
        .then(() => {
            //开始游戏
            this.curFrameTime = new Date() - 0;
            this.lastFrameTime = new Date() - 0;
            window.requestAnimationFrame(this.render);
            canvas.addEventListener('touchstart', (e) => {
                sceneManager.click(e);
            });
        });
    }

    //渲染游戏
    render(){
        //获取时间间隔
        this.curFrameTime = new Date() - 0;
        this.delta = (this.curFrameTime - this.lastFrameTime)/1000;
        this.lastFrameTime = this.curFrameTime;
        sceneManager.render(ctx,this.delta);
        window.requestAnimationFrame(this.render);
    }
    
    //加载游戏资源
    loadReasources(){
        const resourcesList = [
            ...config.resources.IMG_NAME_LIST,
            ...config.resources.MUSIC_NAME_LIST,
        ];
        let resource = null;
        let loadCount = 0;
        return new Promise((resolve, reject) => {
            resourcesList.forEach(resName =>{
                if(resName.endsWith('.png')){
                    resource = new Image();
                    resource.src = `images/${resName}`;
                    databus.resources.images[resName.slice(0,-4)] = resource;
                }
                else if (resName.endsWith('.mp3')){
                    resource = new Audio();
                    resource.src = `audio/${resName}`;
                    databus.resources.audios[resName.slice(0,-4)] = resource;
                }
                resource.addEventListener('load', () => {
                    loadCount++;
                    if(loadCount === resourcesList.length){
                        resolve();
                    }
                });
                resource.addEventListener('error', () => {
                    reject();
                });
            });
        })
        
    }
}