//链接
const allbg = ["./bg/云原神.png", "./bg/云星穹.png"]                                     //背景
const allhref = ["https://ys.mihoyo.com/cloud", "https://sr.mihoyo.com/cloud"]          //跳转链接
const allplaybg = ["./play/原神.svg", "./play/星穹.svg"]                                //跳转按钮
const allbgm = ["./bgm/原神.MP3", "./bgm/星穹.MP3"]                                     //背景音乐
const allapp_logo = ["./logo/云原神.webp", "./logo/云星穹.webp"]                        //左上角云游戏logo
//DOM   
const logo = document.querySelectorAll('.go .yun-logo')             //右下角游戏logo
const bgm_img = document.querySelector('.bgm')                      //左上角音乐符号图片
const bg = document.querySelector('.bg')                            //背景
const jump = document.querySelector('.jump')                        //跳转链接
const play = document.querySelector('.play')                        //跳转按钮
const bgm = document.querySelector('.bgm audio')                    //背景音乐
const app_logo = document.querySelector('.app-logo .image')         //左上角云游戏logo
const qiehuan = document.querySelectorAll('.other')                 //切换按钮，云切换按钮
//一次性代码
//音量
bgm.volume = 0.3
console.log("Creator : Hei An Liao Li");
console.log("前往：https://space.bilibili.com/3546733485230577?spm_id_from=333.337.0.0");
// 鼠标点击body自动播放bgm，仅发生一次
document.querySelector('body').addEventListener('click', function () {
    // 播放
    bgm.play()
    bgm_img.style.animation = 'bgm 10s linear infinite'
    // 移除
    document.querySelector('body').removeEventListener('click', arguments.callee)
})
//功能代码
//鼠标移入yun-logo，切换bg背景图片，和play图片,和app-logo图片
for (let i = 0; i < logo.length; i++) {
    logo[i].addEventListener('mouseover', function () {
        bg.style.backgroundImage = `url(${allbg[i]})`
        jump.style.backgroundImage = `url(${allplaybg[i]})`
        play.href = allhref[i]
        bgm.src = allbgm[i]
        app_logo.src = allapp_logo[i]
    })
}
//切换按钮功能
for (let i = 0; i < qiehuan.length; i++) {
    qiehuan[i].addEventListener('click', function () {
        if (play.href == "https://ys.mihoyo.com/cloud") {
            bg.style.backgroundImage = `url("./bg/云星穹.png")`
            jump.style.backgroundImage = `url("./play/星穹.svg")`
            play.href = "https://sr.mihoyo.com/cloud"
            bgm.src = './bgm/星穹.mp3'
            app_logo.src = './logo/云星穹.webp'
        }
        else {
            bg.style.backgroundImage = `url("./bg/云原神.png")`
            jump.style.backgroundImage = `url("./play/原神.svg")`
            play.href = "https://ys.mihoyo.com/cloud"
            bgm.src = './bgm/原神.mp3'
            app_logo.src = './logo/云原神.webp'
        }
    })
}
// 检测背景音乐是否播放，决定bgm按钮是否旋转
bgm.addEventListener('play', () => {
    bgm_img.style.animation = 'bgm 10s linear infinite'
})
bgm.addEventListener('pause', () => {
    bgm_img.style.animation = 'null'
})
// 点击bgm按钮，播放和关闭背景音乐
bgm_img.addEventListener('click', () => {
    if (bgm.paused) {
        bgm.play()
    } else {
        bgm.pause()
    }
})