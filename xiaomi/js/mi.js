window.onload=function(){
	//购物车下拉框
	let cart =document.getElementsByClassName("topbar-cart")[0];
	let down=document.querySelector(".topbar-down");
    cart.onmouseover=function(){
    	down.style.display="block";
    }
    cart.onmouseout=function(){
    	down.style.display="none";
    }
    //头部选项卡
    let li6=document.querySelectorAll(".u1>li");
    let list6=document.querySelectorAll(".container1");
    for(let i=0;i<li6.length;i++){
    	li6[i].onmouseover=function(){
    		for(let j=0;j<list6.length;j++){
    			list6[j].style.display="none";
    		}
    		list6[i].style.display="block";
    	}
    	li6[i].onmouseout=function(){
    		list6[i].style.display="none";
    	}
    }
    
    //轮播图
    let dots=document.querySelectorAll(".xm-slider .bannr-dot .dot");
	let imgs=document.querySelectorAll(".xm-slider ul li img");
	console.log(imgs);
	imgs[0].style.zIndex=2;
	for(let i=0;i<dots.length;i++){
		dots[i].onmouseover=function(){
			for(let j=0;j<imgs.length;j++){
				imgs[j].style.zIndex=1;
				dots[j].style.background="#333";
			}
			imgs[i].style.zIndex=2;
			dots[i].style.background="#fff";
		}
	}
	//自动轮播
	let num=0;
	let banner=document.querySelector(".xm-slider");
	let t=setInterval(move,2000);
	imgs[0].style.opacity=1;
	dots[0].style.background="#fff";
	function move(){
		num++;
		if(num==5){
			num=0;
		}
		for(let j=0;j<imgs.length;j++){
				imgs[j].style.zIndex=1;
				dots[j].style.background="#333";
			}
		imgs[num].style.zIndex=2;
		dots[num].style.background="#fff";
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,2000);
		}
	}
	let rbtn=document.querySelector(".banner-right");
	let lbtn=document.querySelector(".banner-left");
	console.log(lbtn);
	rbtn.onclick=function(){
		move();
	}
	lbtn.onclick=function(){
		
		num--;
		if(num<0){
			num=4;
		}
		for(let j=0;j<imgs.length;j++){
				imgs[j].style.zIndex=1;
				dots[j].style.background="#333";
			}
		imgs[num].style.zIndex=2;
		dots[num].style.background="#fff";
	    
	}
	window.onblur=function(){
		clearInterval(t);
	}
	window.onfoucs=function(){
		t=setInterval(move,2000);
	}
	//侧拉选项卡
    let li1=document.querySelectorAll(".site-category-list>ul>li");
    let list=document.querySelectorAll(".site-category-list .list");
    console.log(li1,list);
    for(let i=0;i<li1.length;i++){
    	li1[i].onmouseover=function(){
	  		for(let j=0;j<list.length;j++){
	  			list[j].style.display="none";
	  		}
	  		list[i].style.display="block";
	  	}
	  	li1[i].onmouseout=function(){
	  		list[i].style.display="none";
	  	}
    }
    //平移轮播
    let left=document.querySelector(".small-left");
	let right=document.querySelector(".small-right");
	let con=document.querySelector(".xm-wrapper>ul");
	let widths=parseInt(getComputedStyle(con,null).width)/2;
	console.log(left,right,con,widths);
	//2.点击左箭头
	//3.点击右箭头
	let n=0;
	right.onclick=function(){
		n++;
		if(n==2){
			n=1;
			return;
		}
		con.style.transform="translateX("+(-widths*n)+"px)";
	}
	left.onclick=function(){
		n--;
		if(n==-1){
			n=0;
			return;
		}
		con.style.transform="translateX("+(-widths*n)+"px)";
	}
    //选项卡
    let li8=document.querySelectorAll(".tab-list li");
    let list8=document.querySelectorAll(".boo");
    list8[1].style.display="none";
    list8[2].style.display="none";
    list8[3].style.display="none";
    li8[0].classList.add("active");
    for(let i=0;i<li8.length;i++){
    	li8[i].onmouseover=function(){
    		for(let j=0;j<list8.length;j++){
	  			list8[j].style.display="none";
	  			li8[j].classList.remove("active");
	  		}
	  		list8[i].style.display="block";
	  		li8[i].classList.add("active");
    	}
    	li8[i].onmouseout=function(){
    		for(let j=0;j<list8.length;j++){
    			li8[j].classList.remove("active");
    		}
    		li8[i].classList.add("active");
    	}
    }
    //小轮播
    
    let banner4=document.querySelector(".hezi");
	let imgs4=document.querySelectorAll(".book1 .banner1");
	let imgs5=document.querySelectorAll(".book2 .banner1");	
	let imgs6=document.querySelectorAll(".book3 .banner1");
	let imgs7=document.querySelectorAll(".book4 .banner1");
	
	let dots4=document.querySelectorAll(".gg1 div");
	let dots5=document.querySelectorAll(".gg2 div");
	let dots6=document.querySelectorAll(".gg3 div");
	let dots7=document.querySelectorAll(".gg4 div");
	
	
    let rbtn1=document.querySelector(".rbtn1");
	let lbtn1=document.querySelector(".lbtn1");
	
	let rbtn2=document.querySelector(".rbtn2");
	let lbtn2=document.querySelector(".lbtn2");
	
	let rbtn3=document.querySelector(".rbtn3");
	let lbtn3=document.querySelector(".lbtn3");
	
	let rbtn4=document.querySelector(".rbtn4");
	let lbtn4=document.querySelector(".lbtn4");

	let w=parseInt(getComputedStyle(banner4,null).width);
	liu(imgs4,dots4,rbtn1,lbtn1);
	liu(imgs5,dots5,rbtn2,lbtn2);
	liu(imgs6,dots6,rbtn3,lbtn3);
	liu(imgs7,dots7,rbtn4,lbtn4);
	function liu(imgs4,dots4,rbtn1,lbtn1){
	let now=0;
	let next=0;
	imgs4[0].style.left=0;
	console.log(rbtn1);
	dots4[0].style.backgroundColor="#ff6700";
	rbtn1.onclick=function(){
		next++;
		if(next==3){
			next=2;
			return;
		}
		imgs4[now].style.left=0;
		imgs4[next].style.left=w+"px";
		animate(imgs4[now],{left:-w},500,
			function(){
				dots4[now].style.backgroundColor="gray";
			});
		animate(imgs4[next],{left:0},500,
			function(){
				for(let i=0;i<imgs4.length;i++){
					dots4[i].style.backgroundColor="gray";
				};
				dots4[next].style.backgroundColor="#FF6700";
			});
		now=next;
	}
	lbtn1.onclick=function(){
		next--;
		if(next==-1){
			next=0;
			return;
		}
		imgs4[now].style.left=0;
		imgs4[next].style.left=-w+"px";
		animate(imgs4[now],{left:w},500,
			function(){
				dots4[now].style.backgroundColor="gray";
			}
		);
		animate(imgs4[next],{left:0},500,
			function(){
				for(let i=0;i<imgs4.length;i++){
					dots4[i].style.backgroundColor="gray";
				};
				dots4[next].style.backgroundColor="#FF6700";
			}
		);
		now=next;
	}
	
	
	for(let i=0;i<dots4.length;i++){
		dots4[i].onclick=function(){
			for(let j=0;j<imgs4.length;j++){
				imgs4[j].style.left=w+"px";
//				animate(imgs4[j],{left:-w},1000);
				dots4[j].style.backgroundColor="gray";
			}
			imgs4[i].style.left=0;
			dots4[i].style.backgroundColor="#FF6700";
//			animate(imgs4[i],{left:0},1000);
			now=i;
			next=i;
		}
	}
	}
}
