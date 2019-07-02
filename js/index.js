window.onload = function () {
    let ss = document.querySelectorAll(".lby>img")
    console.log(ss)
    let xx = document.querySelectorAll(".lbd>ul>li")
    console.log(xx)
    //获取最大的盒子用于清除时间函数
    let hz = document.querySelector(".lb")
    console.log(hz)
    ss[0].style.opacity = 1;
    // 默认显示第一张
    xx[0].classList.add("hot");
    //显示第一个点为白色classList.add

    let index = 0; //保存要显示的第几张图片
    setInterval(() => {  //使用setInterval动态改变index实现轮播图
        index++
        //给定判断条件
        if (index > ss.length - 1) {
            index = 0; //当index大于图片最大下标的时候值为0，实现循环
        }
        //在显示当前图片之前，让所有的图片先隐藏
        ss.forEach((v) => {
            v.style.opacity = 0;
        })
        ss[index].style.opacity = 1;

        xx.forEach((v) => {
            v.classList.remove("hot")
        })
        xx[index].classList.add("hot");
    }, 1500)

    //移入轮播点，显示对应的图片。根据轮播点下标与图片下标一致的特点，通过将index的值改为对应的轮播点下标实现效果
    for (let i = 0; i < xx.length; i++) {
            xx[i].onmouseover = () => {
                index = i
                xx.forEach((v, i) => {
                    v.classList.remove("hot");
                    ss[i].style.opacity = 0;
                })
                xx[i].classList.add("hot")
                ss[i].style.opacity = 1;
            }
        }

    }





