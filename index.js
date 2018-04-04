//选项卡效果
{
    let types=$(".case_finish_bottom_title span");
    let cons=$(".case_finish_bottom_content");
    console.log(types);
    console.log(cons);
    types.mouseenter(function () {
        types.removeClass("active").filter(this).addClass("active");
        var index=$(this).index();
        cons.removeClass("active").eq(index).addClass("active");
    })
}
//banner轮播
{
    //获取banner图片
    let imgs=document.querySelectorAll(".banner_imgBox img");
    //获取轮播点
    let pagers=document.querySelectorAll(".banner_number");
    //获取banner
    let banner=document.querySelector(".banner");
    console.log(banner);
    //轮播点的遍历
    pagers.forEach(function(ele,index){
        //鼠标单击事件
        ele.onmouseenter=function(){
            //图片的遍历
            for(let i=0;i<imgs.length;i++){
                //移除图片的active类名
                imgs[i].classList.remove("active");
                // 移除轮播点的active类名
                pagers[i].classList.remove("active");
            }
            //this  ele   pagers[index]
            //添加轮播点的active类名
            this.classList.add("active");
            // 添加图片的active类名
            imgs[index].classList.add("active");
            n=index;
        }
    })
    let n=0;
    let t=setInterval(move,3000);
    //move函数
    function move(){
        n++;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(let i=0;i<imgs.length;i++){
            //移除类名
            imgs[i].classList.remove("active");
            //移除类名
            pagers[i].classList.remove("active");
        }
        //添加类名
        imgs[n].classList.add("active");
        //添加类名
        pagers[n].classList.add("active");
    }
    // banner的鼠标移入效果
    banner.onmouseenter=function(){
        //停止执行setInterval
        clearInterval(t);
    }
    // banner的鼠标移出效果
    banner.onmouseleave=function(){
        t=setInterval(move,3000);
    }
    let flag=true;
    //图片的遍历
    imgs.forEach(function(ele){
        //事件监听事件
        ele.addEventListener("transitionend",function(){
            flag=true;
        })
    })
}

