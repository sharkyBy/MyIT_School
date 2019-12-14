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

//Посчитать количество ямм пример с codewars 'Counting valleys'

/* function countingValleys(s) {
  let count = 0; let sum=0; 
  let arr = s.split('').map((item) => {
    item == 'U'? item = 1:
    item == 'D'? item = -1: item = 0;
  return item})
  console.log(arr);
  for (let i = 0; i < arr.length; i++){
    sum += arr[i]; 
    if(sum ==0 && sum - arr[i] < 0){
      count++;
    }
  }
  return count;  
  }

  console.log(countingValleys('UFFDDFDUDFUFUUFFDDFDUDFUFUDDFUU')) */



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
//  ****************************


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

  

// *class work ********************************************

/* let fun = setInterval(function,time,'argsForFunction');

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


/*  function Person(name, age, time){
  this.name = name;
  this.age = age;
  this.time = time;
}


console.log(peter);

 let arr = [['Alex', 33, 22], ['Serg', 35, 66],['asd',45,45],["dfg",2,33]];
for(let i=0; i < arr.length; i++){
  let person = new Person(arr[i][0],arr[i][1], arr[i][2]);
  console.log(person);
}
   */

   //Написать функцию, которая заменяет повторячющиеся символы на ")",
  // а не повторяющиеся на "("
      //мое решение.....
 /*  function duplicateEncode(word){
    let newWord = word.toLowerCase(); 
    let str=[]; let newStr =[];
    for(let i = 0; i < word.length; i++){
      let char = newWord[i];     
      newWord.indexOf(char,i+1)  ? str.push(newWord.indexOf(char)): false;             
    } 
    newStr = str.filter((item, index) => item !== index);    
    let x = Array.from(new Set(newStr)); // метод отбрасывает одинаковые элементы оставляя по 1 экземпляру одинаковых элементов
    
    for( let j = 0; j < x.length; j++){      
      for(i = 0; i < str.length; i++){
        if(x[j] == str[i]){
          str[i] = ')'
        }
      }
     
    }
    let res = str.map((item) => item == ')'? item:item = '(');

    return res.join('');
}

console.log(duplicateEncode("recede")); */
// .......

//решение из кодевара.....
/* function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      //  array     index       lastIndex
      //    r         0             0
      //    e         1             5
      //    c         2             2
      //    e         3             5
      //    d         4             4
      //    e         5             5
    })
    .join('');
}
console.log(duplicateEncode("recede")); */
// ..................................



//First non-repeating character (5kyu) (codewars.com)
//Написать функцию, которая вернет ПЕРВЫЙ неповторяющийся символ в строке.
//регистр не учитывать, но если пришел заглавный символ - вернуться должен тоже заглавный 

/* function firstNonRepeatingLetter(s) {
  let pos; let char; 
  if(!!!s){// !!!s  - переменная undefined; !!s - переменная не undefined; 
    return char = ``;
  }
   let str = s
              .toLowerCase()
              .split('')
              .map((e,i,a) =>  a.indexOf(e) == a.lastIndexOf(e) ? i: e);
              console.log(str)
    
    for (let i=0; i < str.length; i++){
      if(typeof str[i] == 'number'){
        pos = str[i];
        char = s[pos];
        break;      
      } else  {
        char = ``;        
      }   
    }
     return char;
}

console.log(firstNonRepeatingLetter('')) */

// *********************************** class work ************************************
//Обработка события клик

/* let section = document.getElementById('section2');
console.log(section);
section.addEventListener('click',clickToElementSection);

function clickToElementSection(event){
  function inputFun2(){
    return event.target.style.fontSize = '13px';
  }

  function inputFun3(){    
     event.target.style.fontSize = '20px';
  }


  console.log(event.target.tagName);
  switch (event.target.tagName) {
    case 'H1':
      console.log('h1')
      event.target.style.backgroundColor = "red";
      break;
    case 'DIV':
        event.target.style.border = '1px solid black';
        event.target.style.backgroundColor = 'green';
      break;
    case 'P':
        event.target.style.backgroundColor = 'white';
      break;
    case 'INPUT':
        // let fun1 = setInterval(() => event.target.style.fontSize = '13px',2000);
        let fun2 = setInterval(inputFun2,2000);
        let fun3 = setInterval(inputFun3,4000);
        
        event.target.style.color = 'yellow';
        
      break;
  }
return
} */


/* let section = document.getElementById('section2');
console.log(section);
section.addEventListener('click',clickToElementSection);

function clickToElementSection(ev){
  switch (ev.target.tagName) {
    case 'H1':
      console.log('h1');
      break;
    case 'DIV':
      console.log('div');
      break;
    case 'P':
      console.log('p');
      break;
    case 'INPUT':
      console.log('input');
      ev.target.style.color = 'white';
      break;
    case 'SECTION':
      console.log('section');
      break;
  }
}
 */

// ******************************** end of class work ***************************************

/* let box = document.getElementById('box');
console.log(box)
box.addEventListener('click',boxMove);
let sect = document.getElementById('section2'); // вызов блока
let w = window.getComputedStyle(sect).width; //Получение свойства ширины блока
console.log(w);
console.log(parseInt(w))

let x = 0;
function boxMove() {
  console.log('click');
  function run() {
    console.log(x);
    if((x != parseInt(w) - 40)){
      box.style.left = `${x++}px`; 
    }    
  }  
  setInterval(run, 20);

} */

/* let sect = document.getElementById('section2'); // вызов блока
let color = window.getComputedStyle(sect); //Получение свойства ширины блока
console.log(color) */


// home work *******************************************************************
// копирование объектов

// let obj = {
//   name: 'Dima',
//   age: 34,
// }
// Ручное копирование ********************
// let arrayProperty = Object.keys(obj); // копирование ключей (свойств)
// console.log(arrayProperty);
// let obj2 = {};
// obj2.name = obj.name;
// obj2.age = obj.age;
// console.log(obj2);

// *********** Поверхностный способ копирования объектов ****************
/* let res = Object.assign({},obj)
console.log(res);
res.name = "Mix";
res.age = 44;
console.log(res, obj) */

// При наличии в качестве значения свойств встроенного объекта - изменении свойств 
// скопированного объекта  изменяет и сам объект-родитель
/* let newObj = {
  name: 'Valik',
  age:{
    date:22,
    year:1973,
  }
}
console.log(newObj);

let res = Object.assign({},newObj)
res.age.date = 17;                            // изменяет дату в обоих объектах
res.name = 'Smile'                            // изменяет имя только в объекте 'res'
console.log(res); */

// ************** Глубокое копирование ******************
//Переводит объект в строку, а затем обратно в объект
/* let str = JSON.stringify(newObj);
// console.log(str);
let objStr = JSON.parse(str);
objStr.age.date = 55;
console.log(objStr); */

// **************************

//  "Склеивание" объектов ***************************
/*  let newObj_1 = {
  name: 'Valik',
  age:{
    date:22,
    year:1973,
  }
}

let newObj_2 = {
  name: 'gray', //последующий объект заменяет значения повторяющихся свойств
  height: 182,
  weight: 105,
  sex: 'man',
}
 
let objSum = Object.assign(newObj_1,newObj_2);
console.log(objSum); */
// **************************************************

/* let obj_1 = {
  name: 'Dima',
  age: 34,
}
//Действия над объектами
let arrKeys = Object.keys(obj_1); //Вывод массив свойств
let arrValues = Object.values(obj_1); //Вывод массив значений
let arrEntries = Object.entries(obj_1); //Преобразование в двумерный массив
let arrFromEntries = Object.fromEntries(arrEntries);  //Преобразование двумерного массива в объект
console.log(arrKeys, arrValues, arrEntries, arrFromEntries ); */


//Деструктуризация
/* let a = {
  firstLastName:'Dima',
  ageOfNumber:33,
  eyeColorType: 'gray',
} */
// let {firstLastName, ageOfNumber,...Val} = a;

/* f1(a);
function f1({firstLastName:name, ageOfNumber:numbers = 222,...Val}){
  console.log(name) 
  console.log(Val)
  console.log(numbers)
}
 */

//Пример на объединение  объектов и вызов функций
 /* let obj_1 = {
    a: 2,
    b: 3,
    sum: function() { console.log(this.a + this.b)}
 }

 obj_1.sum();

 let obj_2 = {
    a: 4,
    b: 5,
    multiply: function() {console.log(this.a * this.b)}
 }
obj_2.multiply();

let result = Object.assign(obj_1, obj_2);
// console.log(result);
result.sum(); 
result.multiply();
 */

/* let newObj_1 = {
  name: 'Greg', //последующий объект заменяет значения повторяющихся свойств
  height: 182,
  weight: 105,
  reName: function(name){console.log(this.name = name)}// Функция меняет имя
}

let newObj_2 = Object.assign({},newObj_1); // копируем объект
newObj_2.upperCase = function (){ // добавляем свойство аперкейс и в качестве значения функцию
  this.name = this.name.toUpperCase();
console.log(this.name);
};
console.log(newObj_2);
newObj_2.reName('Mix'); // запускаем функцию по изменению имени
newObj_2.upperCase(); // запуск функции по изменению на заглавные */

// *********************  end class work   *************************************

// ************************* home work *****************************************
//Создать объект "пользователь", написать функцию, которая вычисляет количество прожитых им дней с даты рождения

/* let user = {
  name: "Ivan",
  familyName: "Ivanov",
  yBirth:1973,
  mBirth: 1,
  dBirth: 22,
  sumDay: function (year, month, day){
    let userDate = `${this.yBirth = year}-${this.mBirth = month}-${this.dBirth = day}`;
    userDate = Date.parse(userDate);
    let nowDate= Date.now();
    const oneDay = 1000 * 60 * 60 * 24 //Set one day in miliiseconds 
    let dayD = Math.trunc((nowDate - userDate) / oneDay);   
    console.log(dayD);
    },
  phone: '(+79) 123 456 789, (+79) 164 23 45 78',
  address:{
    country:'Russian',
    city: "Saint Petersburg",
    street:"Moscow highway",
    houseNumber:'101',
    local:'24',
    postalCode: '240 589' ,
  },  
}
user.sumDay(1974,05,8);
console.log(user); */

// ******* Создать объект "пользователь", написать функцию, которая вычисляет количество прожитых им дней с даты рождения
// с использованием класса
/* let user;
class UserCreate{
  //Конструктор объекта 'пользователь'
  constructor(name, fName, year, month, day, phone, country, city, street, hNum, ap, post,){
    this.name = name;
    this.fName = fName;
    this.yBirth = year;
    this.mBirth = month;
    this.dBirth = day;
    this.phone = phone;
    this.address = {};
    this.address.country = country;      
    this.address.city = city;
    this.address.street = street;
    this.address.houseNumber = hNum;
    this.address.appartment = ap;
    this.address.postalCode = post;
  }
  sumDay (){  //Метод подсчета количества дней прожитых на с даты рождения на текущий момент
    let userDate = Date.parse( `${this.yBirth}-${this.mBirth}-${this.dBirth }`);    
    let nowDate = Date.now();
    const oneDay = 1000 * 60 * 60 * 24 //Set one day in miliiseconds      
    return Math.trunc((nowDate - userDate) / oneDay);  
  };
  }
//функция, запускающая выполнение класса (создание объекта (конструктор) и подсчет кол - ва дней(метод))
function callUserCreate( sumDay){
  user = new UserCreate('Valentin','Petrenko', 1973, 01, 22, '(+375) 29 721 82 80', 'Belarus','Brest', 'Gagarina', 93, '', 224009);
  user[sumDay];  //вызов метода подсчета кол -ва прожитых  пользователем дней
 }
 callUserCreate();
 console.log('object', user); 
 console.log('dDay', user.sumDay()); */
 


/* let user = {
  name: "Ivan",
  familyName: "Ivanov",
  yBirth:1973,
  mBirth: 1,
  dBirth: 22,
  phone: '(+79) 123 456 789, (+79) 164 23 45 78',
  address:{
    country:'Russian',
    city: "Saint Petersburg",
    street:"Moscow highway",
    houseNumber:'101',
    local:'24',
    postalCode: '240 589' ,
  },  
}
 */


// ***************************** end home work *******************************

//  **************************** class work **********************************

// ****************** создание класса методами js объектам DOM **********************

/*let elemHTML = document.getElementById('exam');
let newElem = document.createElement('span');
newElem.className = 'span1 build float';      // 1 способ добавления классов
newElem.innerHTML='Welcom';
elemHTML.appendChild(newElem);                 // Добавление узла в HTML страницу
let massClass = newElem.classList;

newElem.classList.add('grog', 'prog', 'drog'); // 2способ добавления классов

newElem.classList.remove('prog', 'drog');      // удаление классов

newElem.classList.toggle('build');             // включить / выключить. Ставит класс в конец, 
newElem.classList.toggle('hjgjhg');
newElem.classList.toggle('build');
let cont = newElem.classList.contains('span1')

console.log(newElem, cont)                    // Смотрим наличие класса для элемента. Возвращает true or false


elemHTML.appendChild(newElem);  //Вставляем элемент внутрь в конец
elemHTML.prepend(newElem);      //Вставляем элемент внутрь в начало
elemHTML.before(newElem);       // Вставляем элемент перед дивом
elemHTML.after(newElem);        //Вставляем элемент после дива

console.log(elemHTML); */

//  **************  Создать элементы списка, назначить класс и добавить в DOM   ********************

/* let arr = ['Pit', 'Vaser', 'Nicolas'];       // Исходный массив значений li

let ul = document.createElement('ul');          // Создаем ul
document.body.appendChild(ul); */               // Добавляем ul в DOM

//********* Создание и добавление элементов списка  *****************
// ****** 1 способ  в цикле for ***********
 /* for (let i = 0; i < arr.length; i++){
  let li = document.createElement('li');      // создаем элемент списка
  li.classList.add(`item${i+1}`);             // задаем класс объекта li
  li.innerHTML = arr[i];                      // Записываем текст в элемент li
  ul.appendChild(li) ;                        // Добавляем в ul элемент li
}; */
 
// ******** 2 способ  с помощью метода map **********
/* arr.map((val,i) => {
  let li = document.createElement('li');     // создаем элемент для добавления
  li.classList.add(`item${i+1}`);            // присваиваем  класс элементу (класс описан заранее в CSS)
  li.innerHTML = val;                        // присваиваем значение из массива
  ul.appendChild(li) ;                       // добавляем в элемент ul
});
console.log(ul) 
 */

// ***************** Отрисовать таблицу используя методы js ***********************************

// ***************Создание шапки таблицы *********************
 /* let table = document.createElement('table');    // создаем оболочку - таблицу
 let tr = document.createElement('tr');             // создаем строку для добавдения
 
//  let td = document.createElement('td')           // создаем ячейку для добавления
 document.body.appendChild(table);                  // вставляем таблицу в разметку body
 table.appendChild(tr);                             // вставляем строку 

let tableData = {
  tHead:{                                           // шапка таблицы
    name:"ФИО",
    salary:"Ставка",
    yearBirth: "Год рождения",
    dateBirth: 'Дата рождения',    
    amountOfChildren: 'Кол-во детей',
    city:'Город',

  },
  massData:[                                        // массив строк таблицы
    ['Дарский', 52500, 1986, "23 янв", 2, "Москва"],
    ['Делягин', 38000, 1975, "23 янв", 1, "Москва"],
    ['Дирский', 42000, 1977, "12 мар", 0, "Москва"]
  ]  
}

for(let el in tableData.tHead){
  let th = document.createElement('th');             // создаем ячейку для шапки
  th.innerHTML = tableData.tHead[el];                // записываем имя, которое берем из значения свойства объекта tHead 
  tr.appendChild(th)                                 // добавляем ячейку
}
// элементы шапки созданы ******************************************************

for(let i = 0; i < tableData.massData.length; i++){
  let tr = document.createElement('tr');            // создаем строку таблицы
  tableData.massData[i].map((el) => {               // перебираем элемент массива massData
    let td = document.createElement('td');          // создаем ячейку строки
    td.innerHTML = el;                              // записываем значения из элемента(массива) массива massData в ячейку
    tr.appendChild(td);                             // в строку добавляем ячейку

  })
  table.appendChild(tr);                            // добавляем строку в таблицу
} 
console.log(table) */

// ***************************** end of class work

// **************************** home work ************************************

//Создать объект, присвоив значения полей формы соответствующим полям объекта (создать объект из формы)

/*  let arrObjects = []; 
 let keyPerson; // переменная для хранения имен инпутов (хрен знает зачем);
 let propertyPerson; // переменная для хранения значений инпутов

 let form = document.getElementById('form').querySelectorAll('input'); //вызов формы, получение списка седекторов формы
console.log('calling form inputs',form);

let inputSubmit = document.getElementById('submit').addEventListener('click',userInfo);   // вызов кнопки сабмит и обработка события на ней
console.log('calling submit button and event handling', inputSubmit);


// функция, вызываемая при наступлении события
function userInfo(event){
  event && event.preventDefault(); // запрет обработки события явно (отправки формы по умолчанию)???????? наверно
  keyPerson = []; //массив имен инпутов
  propertyPerson = []; //массив значений инпутов
  for(let i = 0; i < form.length - 1; i++){    
     keyPerson[i] = form[i]['name'];        //перебор имен инпута и запихивание в массив
     propertyPerson[i] = form[i]['value'];  // перебор значений инпутов и запихивание в массив                
  }  
  console.log('event', event); 
  return  dataUser()  ; //вызов функции, запускающей конструктор
}

function Person(){     // конструктор для создания объекта по данным формы
  for(let i = 0; i < 5; i++){
    this[keyPerson[i]] = propertyPerson[i]
  }
    this.address = `${propertyPerson[10]}, ${propertyPerson[5]}, ${propertyPerson[6]}, ${propertyPerson[7]} ${propertyPerson[8]}, ap.${propertyPerson[9]}` ;
}
//Функция запуска конструктора
function dataUser(){
  const user = new Person();
  console.log('object user', user)
  arrObjects.push(user);
}
 */
 // *************************************** end home work  ***********************************************************************

 // *************************************** class work  **************************************************************************

 /* let ul = document.getElementById('ul'); //вызов элемента ul, в который будут добавляться элементы
 let fr = document.createDocumentFragment(); // создание оболочки для добавление в элемент
 for(let i = 0; i < 5; i++){
   let li = document.createElement("li"); // создание элемента для добавления
   fr.appendChild(li);   //добавляем элемент в оболочку
 }
 console.log(ul);
 ul.appendChild(fr); // добавляем оболочку в вызванный блок
 */



/* //создаем конструктор
function Constructor(name, age, color){
  this.name = name;
  this.age = age;
  this.eyeColor = color;
}
//создаем протопип конструктора, который будет относится ко всем объектам (один на всех)
Constructor.prototype.reName = function reName(rename){
  this.name = rename;
}
//создаем объект с посощью конструктора
let user = new Constructor('Dima', 22, 'gray');
user.reName('Nicolas'); // запускаем прототип конструктора, который уже относится ко всем объектам
 */

 //Сделать 3 кнопки, по клику на любой из них поменять цвет надписей *****************************************

/*  let arr = ['Open', 'Close', 'Submit'];       // Названия кнопок
console.log(window);
 //цикл по созданию кнопок 
for (let i = 0; i < arr.length; i++){
   let btn = document.createElement('input');  // создаем кнопку
      btn.type = 'button';                     // назначаем тип кнопки
      btn.className = "button";                // назначаем класс кнопки
      btn.value = arr[i];                      // присваиваем значение кнопке (имя что будет отображаться на кнопке)
      btn.__proto__.click = function(){        // создаем метод 'click' по изменению цвета при нажатии на кнопку 
        this.style.color = "red";              // и помещаем  в прототип объекта

      }
   document.body.appendChild(btn);             // добавляем кнопки (узел) в тело документа    
}

document.body.addEventListener("click",function(event){ // создаем обработчик события "click"
  if(event.target.tagName === "INPUT"){
    console.log("fff");
    event.target.click();                              // запускаем метод 'click'  }

}) */
// ******************************* end **********************************************************************


// Класс **************************************
// Класс - шаблон для создания конструктора и методов объекта
// Методы классов сохраняются в "Имя.prototype." и доступны для всех объектов созданных конструктором "Имя"
/* class Name{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
    click (){
      return `${this.name} ${this.age} `
    }
}

 let person = new Name('Mike',48);
 console.log(person);
 let str = person.click()
 console.log(str); */
 
// Калькулятор ***************************************
// Создаем класс, в котором создаем конструктор и методы вычисления
/*  class Calc{
   constructor(a,b){                             // конструктор
     this.val1 = a;
     this.val2 = b;
   }
   summ(){                                       // методы
     return this.val1 + this.val2;
   }
   multi(){
     return this.val1 * this.val2;
   }
   diff(){
     return this.val1 - this.val2;
   }
   divis(){
     return this.val1 / this.val2;
   }
 }

 // Создаем функцию , которая создаст новый объект на основе класса с аргументами (2 числа и метод действий с числами)
function calc(val1, val2, type){
  let calc = new Calc(val1, val2);
  let res = calc[type](); // выбираем метод для действий с числами
  return res;
}

console.log(calc(3,5,'diff')) */
// **********************************************

//Проверка на наличие ключей в объекте
/* let obj = {
  // name: 'pit',
  // age:30,
};
console.log(Object.keys(obj).length === 0 ? true: false);     // проверка на наличие ключей в объекте
 */
// ************************************************************

