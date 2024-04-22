var bool = false;
bool = true; //изменять можно только на true или false значение boolean
bool = 5; // нельдя присваивания булевого типа числовое значение
console.log(bool);
var a = 5;
a = 7;
var b = 10;
b = 20;
console.log(a + b);
var newString = 'Привет мир';
var helloString = 'Hello world';
console.log(newString);
console.log(helloString);
console.log(newString + helloString);
var u = undefined;
var n = null;
console.log(u);
console.log(n);
// type void - отсутсвие возвращаемого значения
var meetUser = function () {
    console.log('Hello user');
};
var meetUsers = function () {
    console.log('Hello users');
};
meetUser();
meetUsers();
