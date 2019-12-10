// **************************** home work ************************************

//Создать объект, присвоив значения полей формы соответствующим полям объекта (создать объект из формы)


let form = document.getElementById('form'); //вызов формы
let formInput = form.querySelectorAll('input'); // получаю список инпутов
console.log(formInput);
let keyPerson; // переменная для хранения имен инпутов (хрен знает зачем);
let propertyPerson; // переменная для хранения значений инпутов
let user; // переменная пользователя

let inputSubmit = document.getElementById('submit');   // вызов кнопки сабмит
let formSubmit = inputSubmit.addEventListener('click', userInfo);  // перехват события клик на кнопке сабмит
userInfo(event) ; // вызов функции по обработке события клик


// функция, вызываемая при наступлении события
function userInfo(event){
   event && event.preventDefault();
   keyPerson = []; //массив имен инпутов
   propertyPerson = []; //массив значений инпутов
   for (let i = 0; i < formInput.length - 1; i++) {    
      keyPerson[i] = formInput[i]['name'];        //перебор имен инпута и запихивание в массив
      propertyPerson[i] = formInput[i]['value'];  // перебор значений инпутов и запихивание в массив          
   }
   console.log('event', event);
  return formateUser(); // возврат массива значений инпутов (как я надеялся....)
}

function Person(){     // конструктор

   this.name = propertyPerson[0];
   this.fName = propertyPerson[1];
   this.sex = propertyPerson[2];
   this.birthday = propertyPerson[3];
   this.numPhone = propertyPerson[4];
   this.address = `${propertyPerson[10]}, ${propertyPerson[5]}, ${propertyPerson[6]}, ${propertyPerson[7]} ${propertyPerson[8]}, ap.${propertyPerson[9]}` ;
}
 
function formateUser() { // функция, вызывающая конструктор
   user = new Person();
   console.log('user', user);
}

// после этого можно попробовать написать в консоли браузера "user" (без кавычек) и увидеть объект.
// а ещё лучше, для наглядности, взять какую-нибудь функцию, которая будет вставлять сформированный объект юзера ниже формы заполнения/вместо неё


console.log('user after init', user);



console.log('func after init', userInfo());  // ан нет.... хренушки


