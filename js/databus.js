/**
 * @export 导出图片 
 */
export default {
    resources:{
        images:[],
        audios:[],
    },
    screenWidth: wx.getSystemInfoSync().windowWidth,
    screenHeight: wx.getSystemInfoSync().windowHeight,
    gameover:false,
    score: 0,//游戏积分
    bestScore: 0,//最佳积分
    level:4,//游戏关卡
    scoreSpeed:1,//游戏难度
}