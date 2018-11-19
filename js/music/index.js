import databus from "../databus";
const audios = databus.resources.audios;

export default {
    //点击向上飞
    playSwooshing(){
        audios.swooshing.currentTime = 0;
        audios.swooshing.play();
    },
    //撞击到墙壁
    playCollision(){
        audios.collision.currentTime = 0;
        audios.collision.play();
    },
    //往下掉
    playDrop(){
        audios.drop.currentTime = 0;
        audios.drop.play();
    },
    //得分
    playPoint(){
        audios.point.currentTime = 0;
        audios.point.play();
    },

    playRise(){
        audios.rise.currentTime = 0;
        audios.rise.play();
    },
}