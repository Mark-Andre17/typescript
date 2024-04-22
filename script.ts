let bool: boolean = false;
bool = true;  //изменять можно только на true или false значение boolean
bool = 5;    // нельдя присваивания булевого типа числовое значение
console.log(bool);

let a: number = 5;
a = 7;
a = 'string'; // нельдя присваивания числового типа строк
let b: number = 10;
b = 20;
console.log(a + b);
let newString: string = 'Привет мир';
let helloString: string = 'Hello world';
console.log(newString);
console.log(helloString);
console.log(newString+helloString);
let u: undefined = undefined;
let n: null = null;
console.log(u);
console.log(n);
// type void - отсутсвие возвращаемого значения
const meetUser = (): void => {
    console.log('Hello user');
};
const meetUsers = () => {
    console.log('Hello users');
};
meetUser();
meetUsers();



