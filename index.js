const allbg = ["./云原神.png", "./云崩坏.png"]
const allplaybg = ["./原神.svg", "./崩坏.svg"]
const allhref = ["https://ys.mihoyo.com/cloud", "https://sr.mihoyo.com/cloud"]
const logo = document.querySelectorAll('.go .yun-logo')
//鼠标移入yun-logo，切换bg背景图片，和play图片
for (let i = 0; i < logo.length; i++) {
    logo[i].addEventListener('mouseover', function () {
        document.querySelector('.bg').style.backgroundImage = `url(${allbg[i]})`
        document.querySelector('.jump').style.backgroundImage = `url(${allplaybg[i]})`
        document.querySelector('.play').href = allhref[i]

    })
}
//yun-qiehuan按钮的功能
document.querySelector('.yun-qiehuan').addEventListener('click', function () {
    if (document.querySelector('.play').href == "https://ys.mihoyo.com/cloud") {
        document.querySelector('.jump').style.backgroundImage = `url("./崩坏.svg")`
        document.querySelector('.bg').style.backgroundImage = `url("./云崩坏.png")`
        document.querySelector('.play').href = "https://sr.mihoyo.com/cloud"
        console.log(document.querySelector('.play').href);
    } else {
        document.querySelector('.jump').style.backgroundImage = `url("./原神.svg")`
        document.querySelector('.bg').style.backgroundImage = `url("./云原神.png")`
        document.querySelector('.play').href = "https://ys.mihoyo.com/cloud"
        console.log(document.querySelector('.play').href);
    }
})
//移动端切换按钮功能
document.querySelector('.qiehuan').addEventListener('click', function () {
    if (document.querySelector('.play').href == "https://ys.mihoyo.com/cloud") {
        document.querySelector('.jump').style.backgroundImage = `url("./崩坏.svg")`
        document.querySelector('.bg').style.backgroundImage = `url("./云崩坏.png")`
        document.querySelector('.play').href = "https://sr.mihoyo.com/cloud"
        console.log(document.querySelector('.play').href);
    } else {
        document.querySelector('.jump').style.backgroundImage = `url("./原神.svg")`
        document.querySelector('.bg').style.backgroundImage = `url("./云原神.png")`
        document.querySelector('.play').href = "https://ys.mihoyo.com/cloud"
        console.log(document.querySelector('.play').href);
    }
})