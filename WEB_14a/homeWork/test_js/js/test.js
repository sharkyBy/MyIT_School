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

// function validatePIN (pin) {

//     return /^(\d){4}$|(\d){6}$/.test(pin);
// }

//   console.log(validatePIN("1234")) ;

//Создание массива элементов по тегу div

// let arr=[];
// console.log(arr.length);
// arr=document.getElementsByTagName("div");
// console.log(arr.length);
// console.log(arr);

//Функция выбора из массива четных или нечетных элементов
//и изменения свойства border

// function calcIndex(arr){
//     for (let i=0; i<arr.length;i++){
//         if(i%2==0) {
//             arr[i].style.border="5px solid white";
//           }
//         else{
//             arr[i].style.border="5px solid red";
//           }
//     }
//     return arr;
// }

//  calcIndex(arr);
//  let arr2=[];
//  arr2=document.getElementsByTagName('li');
//  console.log(arr2);
//  calcIndex(arr2);
//  let arr3=[];
//  arr3=document.getElementsByTagName("a");
//   console.log(arr3);

//Назначаем элементу из массива класс средствами js
// arr3[2].className+=" otherClass";
// console.log(arr3[2]);

// let mass = [null, 2, "яблоки", "груши", 4, 7, 3];

//Способ
//   for (let i=0;i<mass.length;i++){
//     console.log(typeof(mass[i]));
//     if(typeof(mass[i])==='number' ||typeof(mass[i])==='boolean' ||typeof(mass[i])==='undefined' ||typeof(mass[i])==='object'){
//     switch(mass[i]){
//       case 1:
//       mass[i]='киви';
//       break;
//       case 2:
//       mass[i]='апельсин';
//       break;
//       case 3:
//       mass[i]='яблоки';
//       break;
//       case 4:
//       mass[i]='груши';
//       break;
//       default:mass[i]=typeof(mass[i]);
//       break;
//     }

//   }
// }
//   console.log(mass);
// function sum(val) {
//   let rez = val * 2;
//   return rez;
// }
// let newRez = sum(4);
// console.log(newRez);

// let masive = [1, 3, 5, 7, 9];
// let newMassive = masive.map(function(t, i, arr) {
//   console.log(t);
//   console.log(i);
//   console.log(arr);
//   let rez = t * 6;
//   return rez;
// });
// console.log(newMassive);

// //execution method 1

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(m => m.length);
// console.log(lengths);

// //execution method 2

// let line=["Fill", "Jon", "Martin"]
// let newLine=line.map(function(s){
//   let stringLeghts=s.length;
//   return stringLeghts;
// });
// console.log(newLine);

//codewars example


// 1
// function howMuchILoveYou(nbPetals) {
//   let arr=['I love you','a little', 'a lot', 'passionately', 'madly', 'not at all',];
//  return arr[(nbPetals - 1) % arr.length];
 
// }

//2
// function howMuchILoveYou(nbPetals) {
//   let arr=['I love you','a little', 'a lot', 'passionately', 'madly', 'not at all',];
//  for (let i=0;i<arr.length-1;i++){
//    return arr[(nbPetals-1) % arr.length]
//  }
 
// }

//3
// function howMuchILoveYou(nbPetals) {
//   let arr=['I love you','a little', 'a lot', 'passionately', 'madly', 'not at all',];
//   let check=(nbPetals-1)%arr.length;
//   switch(check){
//    case 0: return (arr[check]);
//    break;
//    case 1: return (arr[check]);
//    break;
//    case 2: return (arr[check]);
//    break;
//    case 3: return (arr[check]);
//    break;
//    case 4: return (arr[check]);
//    break;
//    case 5: return (arr[check]);
//    break;
//    default: return ('non-natural numbers or less or zero');
//    break;
//  }
 
// }


// let sub=howMuchILoveYou(-22);
// console.log(sub);
//Вывод символов кодировки ANSII
// function getChar(c){
//   return String.fromCharCode(c);
// }
// console.log(getChar(77));

// function squareArea(A){
//   let sq=2 * A / Math.PI;
//   sq = sq ** 2; 
//     return sq.toFixed(2);
//   }
//   let ress=squareArea(14.05);
//   console.log(ress);
//   console.log(typeof(ress));

//example

//Условие: есть массив целых чисел. Записать массив из заданного, при условии
//целочисленного деления значения ячейки массива на индекс ячейки
//Способ 1

  // let array = [22, -6, 32, 82, 9, 25 ];
  // let newArray = array.filter( function(item,i){ return item % i == 0; } );
  // console.log(newArray);


// Способ 2
// function multipleOfIndex(array){  
// let result=array.filter(function(item,i){
//    return item % i == 0 ; 
// });
//   return result;
  
// }

// let array=[22, -6, 32, 82, 9, 25,];
// console.log(multipleOfIndex(array));

//Способ 3

// function multipleOfIndex(arr){    
//   let newArr = [];  
//     for (let i = 1; i < arr.length; i++){         
//       if(arr[i] % i == 0){
//          newArr.push(arr[i]);                 
//       }        
//     }  
//     return newArr;     
//   }
//   let arr=[22, -45, 32, 82, 9, 25];
//   console.log(multipleOfIndex(arr));
    


//    function stringToArray(str){
//      let arr=str.split(' ');
//      return arr;
//    }
//     let str="I love arrays they are my favorite";
//     console.log(stringToArray(str));
//     console.log(typeof(stringToArray(str)));

//След пример
// function take(arr, n) {
//   let newArr=arr.slice(0,n);
//   return newArr;
// }
// let arr=[0, 1, 2, 3, 5, 8, 13];
// let n=3;
// console.log(take(arr,n));

//Важно!!!!  Метод filter только проверяет условие, сортирует массив и не выполняет никаких действий.
//Изменить элемент массива методом map.

// let arr = [14, 2, "d", 12, -3];
// let newArr = arr
//   .filter(function(item) {
//     if (typeof item == "number") {
//       return item;
//     }
//   }).map(function(item) {
//     return item * 5;
//   });

// console.log(newArr);



//Сдед пример. Проверить имя пользователя (от 4 до 16 символов включительно сост из букв a-z, 0-9 и _ )

// function validateUsr(username) {
//   let res =  /^([\da-z_]{4,16})$/.test(username);
//   return res;
// }
// let username='kgfhfhg_121_uiio';
// console.log(validateUsr(username));

//Отфильтровать числа, отсортировать в порядке возрастания, числа умножить на 4.
// let arr=[22,2,1,'a',17];
// arr.filter(function(item){if(typeof item=='number'){return item}}).sort((a,b)=>a-b).map((item)=>item*4);
// console.log(arr);

//Примитивные ипы данных
// let num=Number('258');
// console.log(num);//258
// console.log(typeof(num));//number

// let str=String (258);
// console.log(str);//'258'
// console.log(typeof(str));//string

// let bool=Boolean('258');
// console.log(bool);//true
// console.log(typeof(bool));//boolean

//Посчитать количество ямм пример с codewars 'Counting

/* function countingValleys(s) {
  let count=0; let str=0;
     for(let i=0; i<s.length;i++){
    console.log(s[i]);
    switch(s[i]){     
    case 'U': str = str + 1;   
    break;
    case 'F': str = str + 0;  
    break;
    case 'D': str = str - 1;  
    break;
    default: str = str + 0;  
    break;     
    }   

    if(str > 0){count=0;
    
    }else if(str===0){
      count=count+0;
    }
    else{
      count = str+1; 
    }
    console.log(str,count);
    
    
  }
  return count; 
  }

  let s='FFUDUUDDDDDFUFDUUUUU';
  console.log(countingValleys(s)) */


//изменение регистра первой буквы слова
// let str='вася';
// let newStr=str[0].toUpperCase()+str.slice(1);

// console.log(newStr);


//клонирование объекта

// let user={
//   name: 'Valik',
//   age: 46,
//   weight: 105,
//   height: 182,
//   eyeColor: 'gray',

// }

// let clone={};
// for (let key in user){
//   clone[key] = user[key]; //скопировали  ключи и значения
  
// }
// console.log(clone);

//example 1
//Добавление свойств, изменение свойств, удаление свойств
// let user={};
// user.name='John';
// user.surName='Smith';
// console.log(user);
// user.name='Pete';
// console.log(user);
// delete user.name;
// console.log(user)

//example 2
//Определяем наличие каких либо свойств у объекта
// function isEmpty(obj){
//   for(let key in obj){
//     return false;
//   }
//   return true;
// }
// let schedule={};
// let obj=schedule;
// console.log(isEmpty(obj));

// schedule['8:30']='get up';
// console.log(schedule)
// console.log(isEmpty(obj));

//example 3
// Проверка на пустоту и суммирование свойств

// function salar(obj){
//   let sum=0;
//   for(let key in obj){
//      sum+=obj[key];   
//   }
//   return sum;
// }

// let salaris={};
// let obj=salaris;
// console.log(salar(obj));

// salaris.John=100;
// salaris.Ann=160;
// salaris.Pete=130;
// console.log(obj);
// console.log(salar(obj));

//example 4
// Проверка на числа и умножение на 2 значений свойств

// function multiplyNumeric(obj){
//   for (let key in obj){
//     if(typeof obj[key] =='number'){
//       obj[key] *= 2;
//     } 
//   }
  // return obj;
// }

// let menu={
//   width: 200,
//   heigth: 300,
//   title: 'My menu',
// }

// let obj=menu;
// multiplyNumeric(obj);
// console.log((obj));

//Ключевое слово this

// let user={
//   name:'john',
//   age:30,
//   sayHi(){
//     alert(this.name);
//     return this.name;
//   }
// }
// console.log(user);
// let sayHi = user.sayHi();
// console.log(sayHi);

//Для чего лучше использовать this
//В js  используем не сам объект, а ссылку на объект, которая хранится в переменной.
// Создав переменную и передав в нее ссылку на объект, а затем изменив переменную,
//теряем ссылку на объект, т.е. объект есть, но ссылки на него по каким -то причинам нет
//Ключевое слово this, расположенное внутри данного объекта обратится к объекту, а не
//к переменной объекта
/* let user = {
  name: "Джон",
  age: 30,
  sayHi() {
    alert( user.name ); // приведёт к ошибке. Если заменить user на this - ошибки не будет
  }

};
let admin = user;
user = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.
admin.sayHi(); // Ошибка! Внутри sayHi() используется user, которая больше не ссылается на объект!
 */

//Еще немного о this... Область видимости

/* function arc(){
   this.numb=20;
   console.log(this.numb);
   let asd = ()=>{
     let numb = 40;
     console.log(this.numb);//Выведет 20. У стрелочной функции нет своего this
   }
}
arc(); */


/* let ob={
  color: 'red',
  numb: 4,
  click: function(){
    this.color= 'black';
    this.numb=17;
    console.log(this.color, this.numb);
  }
}
ob.click();
console.log(ob.color, ob.numb,ob.click) */


//Обработка событий клик:

//1 способ

/* function clickButton(){
  console.log('Первый способ обработки события клик');

} */

//2 способ

/* let col = document.getElementById('click_btn2');
col.onclick=function(){
   console.log('Второй способ обработки события клик');
   col.style.color="red";
} */

//3 способ

/* let call = document.getElementById('click_btn3');
call.addEventListener('click', clickEvent);
function clickEvent(event){
  console.log('Третий способ обработки события клик');
  call.removeEventListener('click',clickEvent);
  console.log(event.target);
} */

// let tab = document.getElementById('table');
// tab.addEventListener('click', clickTable);

// function clickTable(event){
//   console.log('Вызов таблицы');
// console.log(event.target.tagName);
// console.log(event);
// tab.removeEventListener('click', clickTable);

//Проверка условия на что нажата кнопка мыши
//   if(event.target.tagName=='TD'){
//     console.log(event.target.tagName);
//   }
// }

//Всплытие событий наступит в случае применения свойства "онклик"
//во всех элементах вложенности снизу до верху.
//
// function clickBtn1(){
//   console.log('Проверка всплытия 1');
// }

// function clickBtn2(){
//   console.log('Проверка всплытия 2');
// }

// function clickBtn3(){
//   console.log('Проверка всплытия 3');
// }

//Изменение цвета текста элемента спан при клике и двойном клике
//1 способ

/* let spanClick = document.getElementById("example");
spanClick.addEventListener("click", func);
spanClick.addEventListener("dblclick", func);

function func(event) {
  console.log();
  switch (event.type) {
    case "click":
      event.target.style.color = "green";
      break;
      case "dblclick":
      event.target.style.color = "red";
      break;
  }
} */

//2 способ

/* let spanClick = document.getElementById('example');
spanClick.addEventListener('click',clickSpan);
spanClick.addEventListener('dblclick',dblClickSpan);

function clickSpan(event){
  // console.log(event);
  if(event.target.tagName == 'SPAN'){
    event.target.style.color='red';
  }
}

function dblClickSpan(event){
  if(event.target.tagName=='SPAN'){
    event.target.style.color='blue'
  }
} */

//Метод reduce для получения суммы числовых элементов массива
// let mass=['a','b',22,34,'e','f',3];


//1способ
/* let rezMass = mass
  .filter((value) => (typeof value == "number" ? value : false))
  .reduce((a, b) => a + b);
console.log(rezMass); */

//2способ
/* function filterSumm(mass) {
  let newMass = mass
    .filter(value => (typeof value == "number" ? value : false))
    .reduce((a, b) => a + b);
  return newMass;
}
console.log(filterSumm(mass)); */

//Найти строки, изменить регистр строки, поменять местами

/* let arr=['Anastation',3,5,'Nicolas'];

function newArr(arr){
let newArr = arr
  .filter(item => (typeof item == 'string' ? item: false))
  .map(val => val.toUpperCase().charAt(1))
  .reverse();  
  return newArr;
}
console.log(newArr(arr)); */
    

//Найти символы в строке начиная с начала строки

/* let str='metallica nirvana karavan';

let newStr=str.substring(1,4);//символы с 1го по четвертый
console.log(newStr); 
console.log(str.indexOf('van', 0));   //Поиск позиции совпадения начиная с 0
 */

//Поиск позиций всех совпадений словосочетания в строке

/* let str = 'metallica nirvana karavan  mandarin';
let pos=0; let ar=[];
while(true){
  let find = str.indexOf('an', pos);
  if(find == -1) break;
    pos = find + 1;    
    ar.push(pos);  
}
console.log(ar);   */

// a=1; b=2; c=3; d=4; e=5; f=6;

// let str = /^[a-z]$/;
// console.log(str.test('x'));
// let a;
// let arr=String.fromCharCode(98);
// console.log(arr);

// let str='abcde';
// console.log(str.charCodeAt(1));
// let arr=str;


/* let arr=['a','c','d'];
function getChar(arr){
let newArr=[]; 
let res; 
let total;
// let str=arr.join('');
if(arr==0){newArr.push(arr);};
 
  for(let i=0; i<arr.length ; i++) {       
        newArr.push(arr[i].charCodeAt(arr[i])-96);             
      }
       res=newArr.reduce((a,b) => a+b);
      // console.log(res);
      if (res>26){res=res-26;};
       total=String.fromCharCode(res+96);
      
      if(res == 0){total = 'z'}
      return [total];  
}

console.log(getChar(arr)); */

/* function getChar(...letters){
  let alfabet='abcdefghijklmnopqrstuvwxyz';
  let summ=0;
  if(letters.length>0 ){
    for(let i=0;i<letters.length;i++){
      summ+=alfabet.indexOf(letters[i])+1;
    }
  }else{
    return 'z';
  }
  if(summ>26){
    summ = summ %26;
  }
  if(summ===0){
    return 'z';
  }

  summ = summ-1;
  return alfabet[summ]
}
console.log(getChar('y','s','g')) */


//массив чисел.... Упорядочить в порядке убывания и считать сумму разностей между эл-ами
//[1-2]+[2-3]+[3-4]+...+[n-1 - n]


/* let arr=[];
function sumOfDifferences(arr) { 
  arr.sort((a,b) => a-b)
     .reverse();  
     let diff ;

     if(arr.length != 0){
      let i=0; let j=arr.length-1;
      diff = arr[i]-arr[j];       
    }else{
      diff = 0;
    }
    return diff;
    // console.log(diff);
     }
     
sumOfDifferences(arr);
console.log(arr); */

/* let salary=1000; let bonus = false;

function bonusTime(salary, bonus) {
  bonus === true ? salary =`\u00A3`+ salary*10: salary =`\u00A3`+salary;
  return salary;
  }

  bonusTime(salary,bonus);
  console.log( bonusTime(salary,bonus)) */

 /*  function unusualFive() {
    return 'abcde'.length;
  }

  
  console.log(unusualFive()) */

//Замена значения в строке
  // let str='Hello, mr. Duglas';
  // let newStr=str.replace('Duglas','name');
  // console.log(newStr);


  //Преобразование строки в массив
  
  /* let str1='Andrew, Alex, John';
  let arr = str1.split(', ');
  console.log(arr); */

  //Преобразование массива в строку
 /*  let newArr=arr.join(' ');
  console.log(newArr);
 */


 //Склейка массивов
 /* let massFirst=[1,2,3];
 let massSecond = massFirst.concat([8,9]);
 console.log(massSecond); */

 // пример 1
 /* let str1 = '3, 2, 4, 7';
 let str2 = '11, 1, 5, 20';
 let newArr1 = str1.split(', ');
 let newArr2 = str2.split(', '); 
 console.log(newArr1, newArr2);
let newArr=newArr1;
newArr=newArr.concat(newArr2);
newArr=newArr.sort((a,b) => a - b);
console.log(newArr);
newArr.reduce((a,b) => summ = +a + +b);
console.log(summ); */

//пример 2
/* let arr=["3;2;4;7", "11;1;5;20"];
let str = arr.join(';')
// str = str.replace(';',',');
console.log(str);
let newArr = str.split(';');
console.log(newArr);
newArr = newArr.sort((a,b) => a - b);
console.log(newArr);
newArr = newArr.reduce((a,b) => summ = +a + +b);
console.log(summ); */

//пример 2, но короче

/* let arr=["3,2,4,7", "11,1,5,20"];
let str = arr.join()
            .split(',')
            .map(item => parseInt(item))
            .sort((a,b) => a - b)
            .reduce((a,b) => a + b);
console.log(str);
 */

 //Отсортировать массив, выбрать первое слово после сортировки, разбить на буквы, вставить звездочки
 //пример: 'b***i***t***c***o***i***n'
/* let s=["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]; */

 /* function twoSort(s) { */
//Длинная запись*************
 /*  s = s.sort(); //sort array
  let str = s[0];//take a first element (string)
  console.log(str);
  str = str.split('');//convert to array
  console.log(str);
  str = str.join('***');// convert to string and замена разделителя на звездочки, 
  console.log(str); */
  // конец **************

  //Короткая запись***********
   /*  return s.sort()[0].split('').join('***'); */
    
    //конец************
  /* }
  
  console.log(twoSort(s)); */

//Написать функцию, которая рисует лестницу из букв "I"
/* let n = 0;
function drawStairs(n) {
  let res = "";
  let space ;
  if(n!=0){
  for(let i = 0 ;i<n;i++){
    space = "\u0020";
    for(let j = 0; j<i;j++){
      space += "\u0020";
    }
    res +="I\n"+space;
  }
  return res.substr(0, res.length - space.length-1);
}
} */

//Вариант из кодевара
/* function drawStairs(n) {

  let step = "I"
  for(let i=1; i<n;  i++) {
   step +="\n" + "\г0020".repeat(i) + 'I' ;
  }return step 
  }
 */
/* drawStairs(n)
console.log(drawStairs(n)); */

// always return 5

/* function unusualFive() {
  let str='abcdef'.indexOf('f');
  return str;
}
console.log(unusualFive()); */

// Вернуть массив чисел от мин до макс с шагом...
/* let min=2; let max=10; let step=2;
function generateRange(min, max, step){
  let arr = []; let sum = min; 
  while(sum <= max){
    
    let newArr = arr.push(sum);
    sum +=step;    
  }
  return arr;
  }
  console.log(generateRange(min, max, step)); */

  //вернуть одну либо другую фразу в зависимости от результата возведения в степень
 /*  let x= '-20';
  function apple(x){
    let str = x => parseInt(x);    
    let sum = x**2 > 1000 ?  'It\'s hotter than the sun!!': 'Help yourself to a honeycomb Yorkie for the glovebox.'
    return sum;
  }
    apple(x);
    console.log(apple(x)); */
    
//найти в строке число, вернуть правда или ложь
    /* String.prototype.digit = function() {
      return  /^\d$/.test(this); */
      /*  return this.length == 1 ? /\d/.test(this): false; */ //тоже самое
      /* }; */
    /*  String='7';
    console.log( String.digit());//или так вызвать
    console.log('as2'.digit());//или так */
   

    //Перевернуть строку
/* let str = 'valik'
    function solution(str){
      return str.split('').reverse().join('');
    }

    console.log(solution(str)) */

    //Вернуть строку в зависимости от возраста.
    //Длина функции не более 137 символов
//Мое решение
    /* function describeAge(age){let s="You're a(n)";return age<=12?s+" kid":age<=17?s+" teenager":age<=64?s+" adult":s+" elderly"} */
//Решение с кодевара
    /* function describeAge(age) {
      return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
    }

    console.log(describeAge('30')) */

    // найти интеграл
   /*  function integrate(coefficient, exponent) {
      return `${coefficient / (exponent+1)}x^${exponent+1}`;
    }
    console.log(integrate(20, 1)); */

    //Wolf and sheet's
/* let queue = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"];
    function warnTheSheep(queue) {
       
      return (queue.indexOf('wolf')+1) == queue.length ? "Pls go away and stop eating my sheep":
       `Oi! Sheep number ${(queue.length-(queue.indexOf('wolf')+1))}! You are about to be eaten by a wolf!`;
        
    }
    console.log(warnTheSheep(queue)); */

    /* function swapValues(arr) {
     
      args = arr;
      console.log(args);
      var temp = args[0];
      console.log(temp)
      args[0] = args[1];
      console.log(args[0]);
      args[1] = temp;
      console.log(args[1])
      return (`args[0], ${args[0]}`);
  }
  console.log(swapValues([1,2])) */

//В строке отбросить первую и последнюю буквы. Не беспокоиться о длине строки меньше 2 символов
/* function removeChar(str){
  // return str.split('').slice(1,str.length-1).join('');
  // return str.substring(1,str.length-1);
  return str.slice(1,-1); 
 };
 
console.log(removeChar('country')); */


// let s=["Bilbo", "Gandalf", "Nazgul"].forEach('1');

//
/* function firstNonConsecutive (arr) {
  return arr.reduce((a,b) => a + b);
  }
  console.log(firstNonConsecutive ([1,2,3,4,6,7])); */


//Class work**************************************************************

/* let obj = {
  name: 'Valentin',
  age: 46,
  eyeColor: 'gray',
} */

/* for(key in obj){
  console.log(key);
};
 */

 /* function korni({a,b,c,...val}){
    let x = (-b + (b**2 - 4 * a * c)**(1/2)) / (2 * a);
    console.log(x);
    console.log(a,b,c);
    console.log(val);

 } */
// console.log(korni(1,4,4));

/* 
let obj={
  a:1,
  b:2,
  c:1,
  finish: true,
}

let timerID = setTimeout(korni, 1000, obj);
clearTimeout(timerID); */

//  setTimeout((({a,b,c,...val}) => {
//   let x = (-b + (b**2 - 4 * a * c)**(1/2)) / (2 * a);
//   console.log(x);
//   console.log(a,b,c);
//   console.log(val);
   
//  })(obj), 1000);

/* function koren([a,b,c,...val]){
  let x1 = (-b + (b**2 - 4 * a * c)**(1/2)) / (2 * a);
  let x2 = (-b - (b**2 - 4 * a * c)**(1/2)) / (2 * a);
    console.log(`x1 = ${x1}, `, `x2 = ${x2}`);
    console.log(`a = ${a},  b = ${b}, c = ${c}`);
    console.log(val);
    

}

let timeID = setTimeout(koren, 1000,[1,2,1,4]); */

// Создать 2 кнопки. При начании на кнопку 1, повляется сообщение
//что кнопка нажата, появляется вторая кнопка, а первая исчезает
//С установленной задержкой появляется надпись что таймер выполнен
//Кнопка 1 появляется с другим цветом.
//При нажатии на кнопку 2 таймер отменяется и кнопка 1 появляется, кнопка 2 исчезает
//  *****************************


/* let call = document.getElementById('btn');  //вызов элемента
let canc = document.getElementById('cancel'); //вызов элемента

call.addEventListener('click', clickEvent); //вызов события "клик" для элемента
canc.addEventListener('click', clickCancel);//вызов события "клик" для элемента
let ID; */
//Функция, вызываемая при наступлении события
/* function clickEvent(event){
  console.log('Кнопка нажата');
  call.style.visibility = 'hidden';
  canc.style.visibility = 'visible';
  ID = setTimeout(consoleMessage,2000); //метод установки времени задержки выполнения функции
   */
  // call.removeEventListener('click',clickEvent);
  // console.log(event.target);
// }
//Функция, вызываемая методом setTimeout
/* function consoleMessage(){
 console.log('Таймер выполнен');
 call.style.backgroundColor ='blue';
 call.style.color = 'white';
 call.style.visibility = 'visible'; 
 canc.style.visibility = 'hidden'; */
// }
//Функция, вызываемая при наступлении события
/* function clickCancel(event){
call.style.visibility = 'visible';
canc.style.visibility = 'hidden';
(clearTimeout(ID));

} */

//  **************************************************************

// home work **************************************************

// console.log('ab,cde'.split(','));
// console.log(['ab','Cde', 'Fgh'].join(''));
// console.log([1,3,5,7,9].reduce((sum,current) => sum + current, 0))

//Найти в массиве непоследовательные значения (отличающиеся больше чем на 1). Массив как 
//минимум из 2х чисел. Числа по возрастанию. Могут быть отрицательные. 
//Могут быть все последвательныею

// let arr = [ -4, -2, -1, 0, 1, 3, 4, 5 ];
// let arr =[ 3, 5, 6, 7, 9, 11, 12 ]
/* let arr = [1,2,3,4,6,7,8];

function firstNonConsecutive (arr) {
  for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == arr[i+1] % 2){
    return arr[i+1];
    }
  }
  return null;
  }

firstNonConsecutive(arr);
console.log(firstNonConsecutive(arr)); */

//Убрать все пробелы в строке
/* let x = '8 j 8   mBliB8g  imjB8B8  jl  B';

function noSpace(x){
  return x.split(' ').join('');
}

console.log(noSpace(x)); */

// *******************************************************************


//quadratic equation

/* function quadraticEquation(a,b,c){
  let x; let x1; let x2; let D = Math.pow(b,2) - 4 * a * c;
  return D < 0 ? 'Корней нет':
  D === 0 ? `x = ${((-b) + Math.pow(D,0.5)) / (2 * a)}`: `x1 = ${((-b) + Math.pow(D,0.5)) / (2 * a)}, x2 = ${((-b) - Math.pow(D,0.5)) / (2 * a)}`;
  
}

console.log(quadraticEquation(1,2,-2)) */

//Вывести надписи в зависимости от величины массива

/* function likes(names) {
  return names.length == 0 ? `no one likes this`:
         names.length == 1 ? `${names[0]} likes this`:
         names.length == 2 ? `${names[0]} and ${names[1]} like this`:
         names.length == 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this`:
         `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
  console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); */

  //Написать функцию шифрования, в которой каждая буква смещена на 13 позиций.
  //Цифры и прочее оставить без изменения

 /*  function rot13(message){
    let newMessage ='';
    for (let i = 0; i < message.length; i++){
      let num = message.codePointAt(i);
      num > 64 && num < 78 ||  num > 96 && num < 110 ? num += 13:
      num > 77 && num < 91 ||  num > 109 && num < 123 ? num -= 13:
      num = num;
      newMessage = newMessage + String.fromCodePoint(num);   
       
    }
    return newMessage;
  }

  console.log(rot13('abcdefghijklmnopqrstuvwxyz ')) */

  //Написать функцию, которая заменяет повторячющиеся символы на ")",
  // а не повторяющиеся на "("

  /* function duplicateEncode(word){
  let newWord = word.toLowerCase();
  let str;  let letter;
  for(let i=0; i < newWord.length; i++){
    letter = newWord[i];
  }
  }

console.log(duplicateEncode('wordww')) */

// let str = 'metallica nirvana karavan  mandarin';
// let pos=0; let ar=[];
// for (let i = 0; i < str.length; i++){
//   while(true){
    
//   }
// }

// console.log(ar);  let find = str.indexOf(str[i], pos);
// if(find == -1) break;
//   pos = find + 1;    
//   ar.push(pos);  

  function duplicateEncode(word){
    let newWord = word.toLowerCase(); let str=''; let count = 0;
    
  /* function duplicateEncode(word){
    let newWord = word.toLowerCase(); let str='';
    for(let i=0; i < newWord.length; i++){
      let char = newWord[i];
      // let cutStr = newWord.slice(i+1,newWord.length); 
      // console.log(cutStr, char);
      newWord.indexOf(char,count)  ? console.log(char, count +=1): false ;
      
    }
    // return str;
    return str;
} */

// console.log(duplicateEncode())

// *class work ********************************************

/* let fun = setInterval(duplicateEncode,1000,'Worddd');

clearInterval(fun); */


/* let call = document.getElementById('btn_1');  //вызов элемента
let canc = document.getElementById('btn_2'); //вызов элемента

call.addEventListener('click', clickEvent); //вызов события "клик" для элемента
canc.addEventListener('click', clickCancel);//вызов события "клик" для элемента
let ID;  */
//Функция, вызываемая при наступлении события
/* function clickEvent(event){ */
  // call.style.visibility = 'hidden';
  /* ID = setInterval(consoleMessage,1000); */ //метод установки времени интервала выполнения функции
  // canc.style.visibility = 'visible';
  
  
  // call.removeEventListener('click',clickEvent);
  // console.log(event.target);
/* } */
//Функция, вызываемая методом setTimeout
/* function consoleMessage(){
  call.style.position = 'relative';
 call.style.visibility = 'visible'; 
  */
//  for (let i = 0; i < 400; i+=50){
//   let pos = 0;
//   call.style.left = `${pos}px`
//  }
 
 
//  canc.style.visibility = 'hidden';
/* } */
//Функция, вызываемая при наступлении события
//  function clickCancel(event){
// call.style.visibility = 'visible';
// canc.style.visibility = 'hidden';
// (clearTimeout(ID));

// }


//Запуск события с задержкой и с интервалом
// *********
/* setTimeout(fun1,2000);
let count
let time;
function fun1(){
  count = 2;
  time = setInterval(fun2,1000);
}
function fun2(){
  console.log('time')
  count > 10 ? clearInterval(time): count++;
} */
// ***************

console.log(duplicateEncode('reverse'))

/* function duplicateEncode(word){
  let newWord = word.toLowerCase()+'_'; 
  let str=''; 
  let i = 0; 
  let j = newWord.length;
  while (i < j){
    let char = newWord[i];
    console.log(char);
    newWord.includes(char,i+1) ? str +=')': str += '(' ;
    i++;
  }
  return str;
/* function any(){
  console.log("It is time")
}
setInterval() */

/* setTimeout(function run() {
  console.log("ssss")
  setTimeout(run, 1000);
}, 1000);
 */

/*  let call = document.getElementById('section2');
 console.log(call);
 call.addEventListener("click", Start,false);
 function Start (event){
   console.log(event.target.tagName)
   switch (event.target.tagName){
     case "H1":
       console.log('askjgd')
   }

 } */

//  function fun(event){
// console.log(event)
//  }


 function Person(name, age, time){
  this.name = name;
  this.age = age;
  this.time = time;
}


// console.log(peter);

let arr = [['Alex', 33, 22], ['Serg', 35, 66],['asd',45,45],["dfg",2,33]];
for(let i=0; i < arr.length; i++){
  let person = new Person(arr[i][0],arr[i][1], arr[i][2]);
  console.log(person);
}

