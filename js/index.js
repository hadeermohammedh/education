//start navbar//
let navbar = document.querySelector(".header2 .line");
let slider2 = document.querySelector(".slider");
let btn1 = document.querySelector(".slider button");
console.log(btn1);
navbar.addEventListener('click',()=>{
   slider2.classList.toggle("slider2");
});
btn1.addEventListener('click',()=>{
     slider2.classList.remove("slider2");
});
//end navbar//
// start slider 1//
let count1=3;
let count2=4;
let count3=2;
let count7=5;
let count8=2;
let m,n,b,q,g;
let num = 0;
let num2 =0;
let num3 = 0;
let num7 = 0;
let num8=0;
let next = document.querySelector(".scroll .services .img1");
let prev = document.querySelector(".scroll .services .img2");
let services = document.querySelector(".scroll .services .container .serv");
let c = window.matchMedia("(max-width:265px)")
// let f = window.matchMedia("(min-width:266px)")
let y = window.matchMedia("(max-width:767px)")
// let z = window.matchMedia("(max-width:767px)")//screen less than or equal 990px
let x = window.matchMedia("(min-width:992px)")//screen more than or equal 991px
//screen less than or equal 767px

//if click on prev or next of boutton slider1.
prev.addEventListener('click',()=>{
    if(num<103.5)
    {
        num = num +34.5;
        services.style.cssText=`right:${num}%;`;
    } 
});
next.addEventListener('click',()=>{
    if(num>0){
        num=num-34.5;
        services.style.cssText=`right:${num}%;`;
     }
})
function myFunction(x){//if match x 
 if(x.matches){
    services.style.cssText=`right:0%;`; 
    clearInterval(n)//stop n
    clearInterval(b)//stop b
    // clearInterval(q)//stop q
    // clearInterval(g);
    m=setInterval(function(){
        if(num<103.5&&count1==3){
          num = num +34.5;
          services.style.cssText=`right:${num}%;`;
        }
        else{
         count1=0;
         if(num>0){
            num=num-34.5;
            services.style.cssText=`right:${num}%;`;
         }
        else{
             count1=3;
          } 
     }  
    },5000);
}
else{
    services.style.cssText=`right:0%;`; 
    clearInterval(m);
}
}
// function myfunction8(f){//if match x 
//   if(f.matches){
//      services.style.cssText=`right:0%;`; 
//      clearInterval(n);//stop n
//     clearInterval(b)//stop b
//      clearInterval(m)//stop m
//     //  clearInterval(g);
//      q=setInterval(function(){
//          if(num7<575&&count7==5){
//            num7 = num7 +115;
//            services.style.cssText=`right:${num7}%;`;
//          }
//          else{
//           count7=0;
//           if(num7>0){
//              num7=num7-115;
//              services.style.cssText=`right:${num7}%;`;
//           }
//          else{
//               count7=5;
//            } 
//       }  
//      },5000);
//  }
//  else{
//      services.style.cssText=`right:0%;`; 
//      clearInterval(q);
//  }
//  }
 function myfunction4(c){//if match x 
  if(c.matches){
     services.style.cssText=`right:0%;`; 
     clearInterval(n);//stop n
    //  clearInterval(q)//stop b
     clearInterval(m)//stop m
    //  clearInterval(g);
     b=setInterval(function(){
         if(num3<590&&count3==5){
           num3 = num3 +118;
           services.style.cssText=`right:${num3}%;`;
         }
         else{
          count3=0;
          if(num3>0){
             num3=num3-118;
             services.style.cssText=`right:${num3}%;`;
          }
         else{
              count3=5;
           } 
      }  
     },5000);
 }
 else{
     services.style.cssText=`right:0%;`; 
     clearInterval(b);
 }
 }
function myFunction1(y){//if match y
    if(y.matches){
        num2=0;
        count2=4;
        services.style.cssText=`right:0%;`; 
        clearInterval(m);
        clearInterval(b);
        // clearInterval(q);
        // clearInterval(g);
        n=setInterval(function(){
          if(num2<525&&count2==5){
            num2 = num2 +105;
            services.style.cssText=`right:${num2}%;`;
          }
          else{
            count2=0;
            if(num2>0){
                num2=num2-105;
                services.style.cssText=`right:${num2}%;`;
            }
            else{
                count2=5;
            } 
          }  
        },5000);
    }
    else{
        services.style.cssText=`right:0%;`; 
        clearInterval(n);
       }
}
// function myFunction2(z){//if match z
//      if(z.matches){
//         services.style.cssText=`right:0%;`; 
//          count8=2;
//          num8=0;
//         clearInterval(n);
//          clearInterval(m);
//          clearInterval(b)
//          clearInterval(q);
//          g=setInterval(function(){
//              if(num8<206&&count8==2){
//                num8 = num8 +103;
//               services.style.cssText=`right:${num8}%;`;
//              }
//              else{
//               count8=0;
//               if(num8>0){
//                num8=num8-103;
//                 services.style.cssText=`right:${num8}%;`;
//               }
//              else{
//                  count8=2;
//                } 
//           }  
//          },5000);
//      }
//      else{
//          services.style.cssText=`right:0%;`; 
//          clearInterval(g);
//      }
//  }
myfunction4(c);
c.addListener(myfunction4);
myFunction(x);
x.addListener(myFunction)
// myfunction8(f);
// f.addListener(myfunction8);
myFunction1(y);
y.addListener(myFunction1);
//  myFunction2(z);
// z.addListener(myFunction2);
//end slider1//
//////////// start timer ///////////
 let fact3 = document.querySelector(".containt .fact1 .text1 h1");
 let fac3 = document.querySelector(".containt .fact1 .text2 h1");
 let fact4 = document.querySelector(".containt .fact2 .text3 h1");
 let fac4 = document.querySelector(".containt .fact2 .text4 h1");
 let time1 = setInterval(() => {
     fact3.innerHTML=Number(fact3.innerHTML)+1;
    if(fact3.innerHTML== 94){       
         clearInterval(time1);
     }
},110);
let time2 = setInterval(() => {
      fac3.innerHTML=Number(fac3.innerHTML)+1;
      if(fac3.innerHTML==162){
         clearInterval(time2);
      }
  },65);
 let time3 = setInterval(() => {
      fact4.innerHTML=Number(fact4.innerHTML)+1
        if(fact4.innerHTML== 2345){
          clearInterval(time3);
      }
},0.0009);
 let time4 = setInterval(() => {
      fac4.innerHTML=Number(fac4.innerHTML)+1;
      if(fac4.innerHTML== 23){
          clearInterval(time4);
      }
 },460);
////////end timer////////
//start slider 2//
let count4=4;
let num4=0;
let num5 = 0;
let num6=0;
let count6=8;
let count5 =2;
let u,v,w;
let popularCourse = document.querySelector(".popular-courses .container .popular-course");
let size =  window.matchMedia("(min-width:1116px)");
let size1 = window.matchMedia("(max-width:500px)");
let size2 = window.matchMedia("(max-width:1115px)");
myfunction5(size);
size.addListener(myfunction5);
 myfunction6(size1);
 size1.addListener(myfunction6);
 myfunction7(size2);
 size2.addListener(myfunction7);
function myfunction5(size){
    if(size.matches){
      popularCourse.style.cssText=`right:0%;`;
      clearInterval(v); 
      clearInterval(w);
      count4=4;
      num4=0;
      u=setInterval(function(){
        if(num4<100&&count4==4){
            num4 = num4 +25;
            popularCourse.style.cssText=`right:${num4}%;`;
        }
        else{
        count4=0;
          if(num4>0){
              num4=num4-25;
              popularCourse.style.cssText=`right:${num4}%;`;
            }
          else{ 
               count4=4;
            } 
        } 
      },5000)
    }
    else{
        popularCourse.style.cssText=`right:0%;`;
        clearInterval(u);
    }
}
 function myfunction7(size2){
     if(size2.matches){
       popularCourse.style.cssText=`right:0%;`;
       count5=2;
       num6=0;
       clearInterval(u);
       clearInterval(v);
       w=setInterval(function(){
         if(num6<310&&count5==2){
             num6 = num6 + 155;
             popularCourse.style.cssText=`right:${num6}%;`;
           }
           else{
            count5=0;
            if(num6>0){
               num6=num6-155;
               popularCourse.style.cssText=`right:${num6}%;`;
             }
           else{ 
                count5=2;
             } 
          } 
     },5000)
     }
     else{
         popularCourse.style.cssText=`right:0%;`;
         clearInterval(w);
     }
 }
 function myfunction6(size1){
    if(size1.matches){
       popularCourse.style.cssText=`right:0%;`;
       count6=7;
       num5=0;
       clearInterval(u); 
       clearInterval(w);
       v=setInterval(function(){
        if(num5<735&&count6==7){
             num5 = num5 +105;
             popularCourse.style.cssText=`right:${num5}%;`;
           }
          else{
            count6=0;
            if(num5>0){
             num5=num5-105;
             popularCourse.style.cssText=`right:${num5}%;`;
            }
          else{ 
                count6=7;
            } 
        } 
     },5000)
   }
   else{
        popularCourse.style.cssText=`right:0%;`;
        clearInterval(v);
    }
 }
//end slider 2//
//////////////// edu-meeting /////////// 
let images = document.querySelectorAll(".box1 img");
let boxes = document.querySelectorAll(".box1");
let head = document.querySelectorAll(".box1 h3");
images.forEach((img)=>{
     img.addEventListener('click',()=>{
        boxes.forEach((box)=>{
            box.classList.add("box");
         });
        boxes.forEach((box)=>{
            if(img.classList[0]==box.classList[1]) {
                 box.classList.remove("box");
             } 
         });
         head.forEach((d)=>{
             d.classList.remove("active");
        });
        head.forEach((d)=>{
           if(d.classList[0]==img.classList[0]){
               d.classList.add("active");
           }
        });
     });
 }); 
 //end edu meeting//