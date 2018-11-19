import databus from './databus';
//屏幕信息
const screenWidth = databus.screenWidth;
const screenHeight = databus.screenHeight;
//游戏图片集合
const IMG_NAME_LIST = [
    'game@background.png',
    'game@birds.png',
    'game@land.png',
    'game@over.png',
    'game@pipe_down.png',
    'game@pipe_up.png',
    'game@start_button.png',
    'game@tip.png',
    'game@title.png',
];

//音乐集合
const MUSIC_NAME_LIST = [
    'collision.mp3',
    'drop.mp3',
    'point.mp3',
    'rise.mp3',
    'swooshing.mp3',
];

//小鸟参数
const BIRD_WIDTH = 110/2;
const BIRD_HEIGHT = 45;
const BIRD_X = (screenWidth -  BIRD_WIDTH)/2;
const BIRD_Y = 200;
const BIRD_MAX_ANGLE = 90;
const BIRD_MAX_SPEED = 12;

//天空
const SKY_WIDTH = 670;
const SKY_HEIGHT = screenHeight;

//陆地
const LAND_WIDTH = 672/2;
const LAND_HEIGHT = 70;

//小鸟飞行区域
const PLAYAREA_TOP = 0;
const PLAYAREA_BOTTOM = screenHeight-LAND_HEIGHT;

//管道
const PIPE_WIDTH = 32;
const PIPE_HEIGHT = 500;

//标题
const TITLE_WIDTH = 479/2;
const TITLE_HEIGHT = 128/2;
const TITLE_X = (screenWidth-TITLE_WIDTH)/2;
const TITLE_Y = 100;

//按钮
const REPLAY_WIDTH = 64;
const REPLAY_HEIGHT = 64;
const REPLAY_Y = 400;
const REPLAY_X = (screenWidth - REPLAY_WIDTH)/2;

// getready 
const GETREADY_X = 0;
const GETREADY_Y = 200;
const GETREADY_WIDTH = 268;
const GETREADY_HEIGHT = 84;

//tap
const TAP_WIDTH = 300/3;
const TAP_HEIGHT = 265/3;
const TAP_X = (screenWidth - TAP_WIDTH) / 2;
const TAP_Y = (screenHeight - TAP_HEIGHT)-100;

//over
const GAMEOVER_WIDTH = 273;
const GAMEOVER_HEIGHT = 64;
const GAMEOVER_X = (screenWidth - GAMEOVER_WIDTH) / 2;
const GAMEOVER_Y = 150;

//curScore
const CURSCORE_X = 0;
const CURSCORE_Y = 130;
const CURSCORE_FONT = '35px sans-serif';
const CURSCORE_FONTSTYLE = '#fff';

//bestScore
const BESTSCORE_X = 0;
const BESTSCORE_Y = 300;
const BESTSCORE_FONT = '35px sans-serif';
const BESTSCORE_FONTSTYLE = '#fff';

//游戏速度
const SPEED = -2;

const Config = {
    //游戏资源集合
    resources: {
        IMG_NAME_LIST,
        MUSIC_NAME_LIST,
    },
    //游戏信息: 精灵的参数
    gameInfo: {
        speed: SPEED,
        title: {
            x: TITLE_X ,
            y: TITLE_Y,
            width: TITLE_WIDTH,
            height: TITLE_HEIGHT,
        },
        bird: {
            x: BIRD_X,
            y: BIRD_Y,
            width: BIRD_WIDTH,
            height: BIRD_HEIGHT,
            speed: 0,
            angle:BIRD_MAX_ANGLE,
            max_speed:BIRD_MAX_SPEED,

        },
        sky: {
            x: 0,
            y: 0,
            width: SKY_WIDTH,
            height: SKY_HEIGHT,
            speed: SPEED,
        },
        land:{
            x: 0,
            y: screenHeight - LAND_HEIGHT,
            width: LAND_WIDTH,
            height: LAND_HEIGHT,
            speed: SPEED,
        },
        replay:{
            x: REPLAY_X,
            y: REPLAY_Y,
            width: REPLAY_WIDTH,
            height: REPLAY_HEIGHT,
        },
        tap:{
            x: TAP_X,
            y: TAP_Y,
            width: TAP_WIDTH,
            height: TAP_HEIGHT,
        },
        pipe: {
            x: 0,
            y: 0,
            width: PIPE_WIDTH,
            height: PIPE_HEIGHT,
            verticalGap:130,
            horizontalGap:130,
            speed:SPEED,
        },
        area: {
            top: PLAYAREA_TOP,
            bottom: PLAYAREA_BOTTOM,
        },
        gameover: {
            x: GAMEOVER_X,
            y: GAMEOVER_Y,
            width: GAMEOVER_WIDTH,
            height: GAMEOVER_HEIGHT
        },
        curScore: {
            x: CURSCORE_X,
            y: CURSCORE_Y,
            font: CURSCORE_FONT,
            fillStyle: CURSCORE_FONTSTYLE,
        },
        bestScore: {
            x: BESTSCORE_X,
            y: BESTSCORE_Y,
            font: BESTSCORE_FONT,
            fillStyle: BESTSCORE_FONTSTYLE,
        }
    }
}

export default Config;1