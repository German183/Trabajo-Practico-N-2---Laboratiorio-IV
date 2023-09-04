class Person {
     constructor(name, age, profession){
          this.name = name;
          this.age = age;
          this.profession = profession;
     }

     saludar(){
          alert("Hola, me llamo " + this.name + " y tengo " + this.age + " años.");
     }

     toString(){
          return "Nombre: " + this.name + "\nEdad: " + this.age + "\nProfesión: " + this.profession;
     }
}

class Book{
     constructor(title, author, year){
          this.title = title;
          this.author = author;
          this.year = year;
     }

     showDigitals(){
          alert(this.toString());
     }

     toString(){
          return "Título: " + this.title + "\nAutor: " + this.author + "\nAño: " + this.year;
     }
}

class SuperHero{
     constructor(nombre, poder){
          this.nombre = nombre;
          this.poder = poder;
     }

     mySelf(){
          alert("Hola, soy " + this.nombre + " y mi poder es " + this.poder);
     }
}

class Villian extends SuperHero{
     constructor(nombre, poder, plan){
          super(nombre, poder);
          this.plan = plan;
     }

     threaten(){
          alert("Soy " + this.nombre + " y  mi plan es " + this.plan);
     }
}

class DigitalBook extends Book{
     constructor(title, author, year, format){
          super(title, author, year);
          this.format = format;
     }

     showformat(){
          alert("Formato del libro: " + this.format);
     }

     toString(){
          return super.toString() + "\nFormato: " + this.format;
     }
}

let names = [];
let numbers = [];

//#region exercise 1
function showPerson(){
     let name = document.getElementById("nameExercise1").value;
     let age = document.getElementById("age").value;
     let profession = document.getElementById("profession").value;
     
     let person = new Person(name, age, profession);

     alert("USUARIO REGISTRADO:\n" + person.toString());
}
//#endregion

//#region exercise 2
function showBook(){
     let book = new Book(prompt("Ingrese el título del libro"), prompt("Ingrese el autor del libro"), prompt("Ingrese el año del libro"));

     alert("LIBRO REGISTRADO:\n" + book.toString());
}
//#endregion

//#region exercise 3
function personalizatedPresentation(){
     let person = new Person(prompt("Ingrese su nombre"), prompt("Ingrese su edad"));

     person.saludar();
}
//#endregion

//#region exercise 4
function showSuperHero(){
     let superHeroe = new SuperHero(prompt("Ingrese el nombre del super héroe"), prompt("Ingrese el poder del super héroe"));

     superHeroe.mySelf();
}

function showVillian(){
     let villian = new Villian(prompt("Ingrese el nombre del villano"), "", prompt("Ingrese el plan del villano"));

     villian.threaten();
}
//#endregion

//#region exercise 5
function showDigitalBook(){
     let digitalBook = new DigitalBook(prompt("Ingrese el título del libro"), prompt("Ingrese el autor del libro"), prompt("Ingrese el año del libro"), prompt("Ingrese el formato del libro"));

     digitalBook.showformat();
     digitalBook.showDigitals();
}
//#endregion

//#region exercise 6
function addName(){
     let name = document.getElementById("nameExercise6");

     names.push(name.value.toUpperCase());

     name.value = "";
}

function concatNames(){
     let namesConcat = "";
     for(let i = 0; i < names.length; i++){
          namesConcat += names[i];
     }
     alert(namesConcat);
}
//#endregion

//#region exercise 7
function searchNumber(){
     let array = [1, 2, 4, 5, 7, 9];
     let number = parseInt(prompt("Ingrese un número para buscarlo en el arreglo"));

     if(array.find(element => element == number)){
          alert("El número " + number + " se encuentra en el arreglo");
     }else{
          alert("El número " + number + " no se encuentra en el arreglo");
     }
}
//#endregion

//#region exercise 8
function addNumber(){
     let number = document.getElementById("numberExercise8");

     numbers.push(parseInt(number.value));

     number.value = "";
}

function filterNumbers(){
     let addednumber = document.getElementById("numberExercise8");
     let filteredNumbers = numbers.filter(element => element % 2 == 0);
     
     alert(filteredNumbers);
     
     numbers = [];
}
//#endregion