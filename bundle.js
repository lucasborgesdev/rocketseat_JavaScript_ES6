"use strict";

var arr = [1, 2, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item, index) {
  return item + index; //return item + index
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 10;
});
console.log(find); //unction teste(x){
//   let y = 4;
//   if(x > 5){
//       console.log(x,y)
//   }
//
//este(10);
// diferença de const e de var
// const vc não pode mudar o valor
// neste caso vai dar erro pois o valor é modificado
//const a = 1;
//a =3;
// neste caso é mutavel pois a forma da const permite modificação dentro do array
//const usuario = { nome: 'Maguila'}
//usuario.nome = 'Lucas';
//console.log(usuario);
//
//static soma(a, b){
//    class Matematica{
//    return a + b;
//    }
//}
//console.log(Matematica.soma(1,2));
//class List {
//    constructor(){
//        this.data = [];
//    }
//
//    add(data){
//        this.data.push(data);
//       console.log(this.data);
//    }
//}
//class Todolist extends List{
//    constructor(){
//        super();
//        this.usuario = 'Lucas';
//    }
//    mostraUsuario(){
//        console.log(this.usuario);
//    }
//}
//
// MinhaLista = new Todolist();
//
//document.getElementById('novotodo').onclick = function(){
//MinhaLista.add('Novo todo');
//}
//MinhaLista.mostraUsuario();
