/**
 * @description 场景管理器
 */
import start from './start';
import getready from './getready';
import running from './running';
import gameover from './gameover';
export default {
    //场景集合
    scenesList: {
        start,
        getready,
        running,
        gameover,
    },
    //当前场景
    currentSceneName: 'start',
    
    //场景中点击事件
    click(e) {
         this.scenesList[this.currentSceneName].click(e);
    },

    //渲染场景
    render(ctx,delta) {
        this.scenesList[this.currentSceneName].render(ctx,delta,this.changeScene.bind(this));
    },
    //改变场景
    changeScene(sceneName) {
        this.scenesList[sceneName].initRoles(this.scenesList[this.currentSceneName].roles);
        this.scenesList[sceneName].init();
        this.currentSceneName = sceneName;
    }
}