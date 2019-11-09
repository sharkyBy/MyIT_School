// console.log(document);
// console.log(document.getElementById("price2"));
// console.log(document.getElementsByClassName("video-img"));
// console.log(document.getElementsByTagName("input"));


// let a;
// a=document.getElementById("price1");
// console.log(a);
// console.log(typeof(a));

// let myString="stroka";
// console.log(typeof(myString));
// let myNumber=2345;
// console.log(typeof(myNumber));
// let myObject={};
// console.log(typeof(myObject));
// let myBoolean=true;
// console.log(typeof(myBoolean));
// let myUnderfind;
// console.log(typeof(myUnderfind));
// let testObject = {};
// console.log(typeof(testObject));
// console.log(typeof 125);
// let summa=myNumber+myNumber;
// console.log(summa);
// let newMyString=myString+" "+myString;
// console.log(newMyString);
// let newPrice=document.getElementById("price1");
// newPrice.style.color="blue";
// let topRow=document.getElementById('topRow');
// topRow.style.backgroundColor='lightgray';
// topRow.style.color='black';
// document.getElementById('price3').innerHTML="$499 ";
// let priceNew=document.getElementById('price3');
// priceNew.innerHTML='<div> new new</div> ';
// priceNew.style.color="red";
// priceNew.style.textTransform="uppercase";
// console.log(priceNew.children);
// myString=myString+myString+myNumber;
// console.log(myString);
// myString="2355";
// let example=+myString-myNumber;
// console.log(example);
// console.log(typeof(example));

// let a=3; let b=4; let c=7;

// console.log("a " + "+ b" + " - " + "c"+" = "+(a+b-c));
// console.log("a" + " + b" + " - "+"c" +" равно "+(a+b-c));
// let s=a+b-c;
// console.log("a " + "+ b" + " - " + "c"+" = " + s);
// console.log("a" + " + b" + " - "+"c" +" равно " + s);
// console.log(a>b);
// console.log(a<b);
// console.log(a==b);
// let d=true; let e=3;
// console.log(b>=d);
// console.log(b<=d);
// console.log(++a);
// console.log(--a);
// console.log(a++);
// console.log(a--);
// console.log(!d);
// console.log(0==true);
// console.log(0==null);
// console.log(0==undefined);
// console.log(0===true);
// console.log(0===null);
// console.log(0===undefined);
// console.log(null==true);
// console.log(null==null);
// console.log(null==undefined);
// console.log(null===true);
// console.log(null===null);
// console.log(null===undefined);
// console.log(undefined==true);
// console.log(undefined==null);
// console.log(undefined==undefined);
// console.log(undefined===true);
// console.log(undefined===null);
// console.log(undefined===undefined);
// console.log(undefined==0);
// console.log(a+=1);//4
// console.log(a-=1);//3
// console.log(a*=3);//9
// console.log(a/=1);//9
// console.log(a++);//show 9
// console.log(a--);//show 10
// console.log(++a);//10
// console.log(--a);//9
// console.log(a**3);//729
// a=3; b=4; c=true; d=12;
// if(a>b){
//     console.log("a !> b  "+(a>b))
// } else{
//     console.log("a < b  " +(a<b))
// }

// if (a==d){
//     console.log("a = d "+(a==d))
// }else if(a>d){
//     console.log("a > d  "+(a<d))
// } else{
//     console.log("a < d  " +(a<d))
// }
// //Оператор If
// let f=true;
// if (!f){
//     console.log(!true);
// }else{
//     f=4;
//     console.log(f);
//     if(f>2) {
//         f/=2
//         console.log(f);
//     }
// }

/*Оператор оператор ? однострочный:*/
// (a<b) ? console.log("а = 3 < b = 4 " + (a<b));
/*Многострочный оператор ?*/
// (a>b) ? console.log(a>b): 
// (a>d) ? console.log(a>d):
// (a<f) ? console.log(a<f):
// (a>f) ? console.log(a>f):console.log("a = 3 > f = 2 "+(a>f));

/*Алгоритмы:*/
//1
// let  k=a+b;
// (k>d) ? console.log(1) : console.log(k);
// //2
// (k>d) ? console.log(1) : 
// (k<d) ? console.log(2) : console.log(k);
// //3
// (k>d) ? console.log(1) : 
// (k<d) ? console.log(2) : console.log(k);
//4
// (k>d) ? console.log(1):console.log(k);
// (k<d) ? console.log(1):k=d;
//4 через if
// if(k>d){
//     console.log(1)
// }else if(k<d){
//     console.log(1)
// }else{
//     k=d;
//     console.log(k);
// }

//5
// (k<d)||(k>b) ? console.log(1) : k=k+b;

function validatePIN (pin) {
    
    return /^(\d{4}|\d{6})$/.test(pin);
}
   
  console.log(validatePIN("string")) ;
   


