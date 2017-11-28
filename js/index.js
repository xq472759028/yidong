/*
* @Author: Administrator
* @Date:   2017-11-12 12:34:54
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-13 00:58:34
*/
window.onload=function(){

	// 导航下拉
	let sanbubox=document.getElementsByClassName('sanbu-box');
	let ssxl=document.getElementsByClassName('ss-xl');
	console.log(sanbubox,ssxl)
	for(let i=0;i<sanbubox.length;i++){
		sanbubox[i].onmouseover=function(){
			ssxl[i].style.display='block';
		}

		sanbubox[i].onmouseout=function(){
			ssxl[i].style.display='none';
		}
	}


	// 轮播图开始
	// let center=document.getElementsByClassName('center-box')[0];
	// let centerBox=center.getElementsByTagName('li');
	// let list=document.getElementsByClassName('list-yuan')[0];
	// let yuan=document.getElementsByClassName('yuan');
	// let forward1=document.getElementsByClassName('zuofushou-zhezhao')[0];
	// let back1=document.getElementsByClassName('youfushou-zhezhao')[0];
	// console.log(center,centerBox,list,yuan);
	// let num1=0;
	// let t1=setInterval(fn1,2000)
	// for(let i=0;i<yuan.length;i++){
     //    yuan[i].onclick=function(){
     //        centerBox[i].className='dong';
     //        centerBox[num1].className='';
     //        yuan[i].style.background='red';
     //        yuan[num1].style.background='';
     //        num1=i;
     //    }
	// }
    //
    // forward1.onclick=fn2;
	// back1.onclick=fn1;
	// function fn1(){
	// 	num1++;
	// 	if(num1==centerBox.length){
	// 		num1=0;
	// 	}
	// 	for(let i=0;i<centerBox.length;i++){
	// 		// centerBox[i].style.display='none'
	// 		centerBox[i].className=''
	// 		yuan[i].style.background='#fff'
	// 	}
	// 		centerBox[num1].className='dong'
	// 		yuan[num1].style.background='red';
	// }
    // function fn2(){
     //    num1--;
     //    if(num1==-1){
     //        num1=centerBox.length-1;
     //    }
     //    for(let i=0;i<centerBox.length;i++){
     //        centerBox[i].className=''
     //        yuan[i].style.background='#fff'
     //    }
     //    centerBox[num1].className='dong'
     //    yuan[num1].style.background='red';
    // }
    // 节点轮播
    let wubu1 = document.querySelector('.wubu1');
    let wububox = document.querySelectorAll('.wubu-box');
    let left = document.querySelector('.wubu-anniu');
    let right = document.querySelector('.wubu-anniu1');
    let box = document.querySelector('.wubu');
    let flag = true;
    width = wubu1.children[0].offsetWidth;
    let t = setInterval(fu, 2000)
    right.onclick = function () {
        if (flag) {
            fu();
            flag = false;
        }
    }

    function fu() {
        animate(wubu1, {left: -width}, 1000, function () {
            let first = wubu1.firstElementChild;
            // console.log(first)
            wubu1.appendChild(first);
            wubu1.style.left = 0;
            flag = true;
        })
    }

    left.onclick = function () {
        if (flag) {
            fu1();
            flag = false;
        }
    }

    function fu1() {
        let first = wubu1.firstElementChild;
        let last = wubu1.lastElementChild;
        wubu1.insertBefore(last, first);
        wubu1.style.left = -width + 'px';
        animate(wubu1, {left: 0}, 1000,function () {
            flag = true;
        });

    }

    box.onmouseover = function () {
        clearInterval(t);
    }
    box.onmouseout = function () {
        clearInterval(t);
        t = setInterval(fu, 2000);
    }



    // 节点轮播新闻
    let row = document.querySelector('.row');
    let li = document.querySelectorAll('.row li');
    let left1 = document.querySelector('.fuhao');
    let right1 = document.querySelector('.fuhao1');
    let jiuburow = document.querySelector('.jiubu-row');
    let flag1 = true;
    width1 = row.children[0].offsetWidth;
    let t2 = setInterval(fu2, 3000)
    right1.onclick = function () {
        if (flag1) {
            fu2();
            flag1 = false;
        }
    }

    function fu2() {
        animate(row , {left: -width1}, 10, function () {
            let first = row .firstElementChild;
            // console.log(first)
            row .appendChild(first);
            row .style.left = 0;
            flag1 = true;
        })
    }

    left1.onclick = function () {
        if (flag1) {
            fu3();
            flag1 = false;
        }
    }

    function fu3() {
        let first = row .firstElementChild;
        let last = row .lastElementChild;
        row .insertBefore(last, first);
        row .style.left = -width1 + 'px';
        animate(row , {left: 0}, 10,function () {
            flag1 = true;
        });

    }

    jiuburow.onmouseover = function () {
        clearInterval(t2);
    }
    jiuburow.onmouseout = function () {
        clearInterval(t2);
        t2 = setInterval(fu, 3000);
    }
    // banner图开始
    let tu=document.querySelectorAll('.center-box li');
    let width2=parseInt(getComputedStyle(tu[0],null).width);
    let yuan=document.querySelectorAll('.yuan');
    let zuo=document.querySelector('.zuofushou');
    let you=document.querySelector('.youfushou');
    let AA=document.querySelector('.center-box');
    let now=next=0;
    let flag2=true;
    let t3=setInterval(fn,3000);
    AA.onmouseenter=function () {
        clearInterval(t3);
    }
    AA.onmouseleave=function () {
        clearInterval(t3);
        t3=setInterval(fn,3000);
    }
    zuo.onclick=function () {
        if(flag2){
            flag2=false;
            fn1();
        }
    };
    you.onclick=function () {
        if(flag2){
            flag2=false;
            fn();
        }
    };
    function fn() {
        next=now+1;
        if(next==tu.length){
            next=0;
        }
        tu[next].style.left=width2+'px';
        animate(tu[now],{left:-width2},1000,function () {
            flag2=true;
        });
        animate(tu[next],{left:0},1000);
        yuan[now].classList.remove('quan');
        yuan[next].classList.add('quan')
        now=next;
    }
    function fn1() {
        next=now-1;
        if(next==-1){
            next=tu.length-1;
        }
        tu[next].style.left=-width2+'px';
        animate(tu[now],{left:width2},1000,function () {
            flag2=true;
        });
        animate(tu[next],{left:0},1000);
        yuan[now].classList.remove('quan');
        yuan[next].classList.add('quan')
        now=next;
    }

    yuan.forEach(function (vva,index) {
        vva.onclick=function () {
            if(!flag2){
                return;
            }
            if(index>now){
                flag2=false;
                tu[index].style.left=-width2+'px';
                animate(tu[now],{left:width2},1000,function () {
                    flag2=true;
                });
                animate(tu[index],{left:0},1000);
                yuan[now].classList.remove('quan');
                yuan[index].classList.add('quan')
                now=index;
            }
            if(index<now){
                flag2=false;
                tu[index].style.left=width2+'px';
                animate(tu[now],{left:-width2},1000,function () {
                    flag2=true;
                });
                animate(tu[index],{left:0},1000);
                yuan[now].classList.remove('quan');
                yuan[index].classList.add('quan')
                now=index;
            }
        }
    })
}