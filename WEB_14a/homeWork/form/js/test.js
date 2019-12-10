// **************************** home work ************************************

//Создать объект, присвоив значения полей формы соответствующим полям объекта (создать объект из формы)


let form = document.getElementById('form'); //вызов формы
let formInput = form.querySelectorAll('input'); // получаю список инпутов
console.log(formInput);
let keyPerson; // переменная для хранения имен инпутов (хрен знает зачем);
let propertyPerson; // переменная для хранения значений инпутов


let inputSubmit = document.getElementById('submit');   // вызов кнопки сабмит
let formSubmit = inputSubmit.addEventListener('click',userInfo);  // перехват события клик на кнопке сабмит
userInfo(event) ; // вызов функции по обработке события клик

function Person(){     // конструктор

 this.name = propertyPerson[0];
 this.fName = propertyPerson[1];
 this.sex = propertyPerson[2];
 this.birthday = propertyPerson[3];
 this.numPhone = propertyPerson[4];
 this.address = `${propertyPerson[10]}, ${propertyPerson[5]}, ${propertyPerson[6]}, ${propertyPerson[7]} ${propertyPerson[8]}, ap.${propertyPerson[9]}` ;
}
let user = new Person() // Вызов конструктора 
console.log(user);

// функция, вызываемая при наступлении события
function userInfo(event){
 keyPerson = []; //массив имен инпутов
 propertyPerson = []; //массив значений инпутов
 for(let i = 0; i < formInput.length - 1; i++){    
    keyPerson[i] = formInput[i]['name'];        //перебор имен инпута и запихивание в массив
    propertyPerson[i] = formInput[i]['value'];  // перебор значений инпутов и запихивание в массив
               
 }  
 console.log(event);
return propertyPerson; // возврат массива значений инпутов (как я надеялся....)
}

console.log(userInfo());  // ан нет.... хренушки


