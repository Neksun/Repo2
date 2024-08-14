/*Array Functions*/
/*Fruentes usadas: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
y https://medium.com/@khriztianmoreno/funciones-sobre-arreglos-que-debes-conocer-en-javascript-bae9d9ff8e52*/
/*Karol Payares 2221343*/
const EpicArraynumeros=[1,2,3,4,5,6,7,8];
const EpicArrayStuff=['mango biche','coco','Maracumango','sandia','salpicon'];

///////////////////////////////////
let nuevoheladofinal=EpicArrayStuff.push('banano');
let quitarnuevohelado=EpicArrayStuff.pop();

let nuevoheladoinicial=EpicArrayStuff.unshift('lulo');
let quitarnuevohelao=EpicArrayStuff.shift();

let copiarHelados=EpicArrayStuff.slice();
/*ver si incluye un elemento determinado falso o verdadero*/
console.log(EpicArrayStuff.includes('mani'));
console.log(EpicArrayStuff.includes('coco'));

/*recorrer arreglo*/
EpicArraynumeros.forEach(a=>{console.log(a);})

/*filtrar elementos requeridos*/
const mayores_a_cuatro=EpicArraynumeros.filter(num=> num>4);
console.log(mayores_a_cuatro);
const menores_a_cuatro=EpicArraynumeros.some(num=> num<4);
console.log(menores_a_cuatro); /*true or farse*/

/*sumar todo en un solo numero*/
const sumaarray= EpicArraynumeros.reduce((total,value)=> total+value,0);
console.log(sumaarray);
/*todos cumplen la condicion?*/
const menores_cuatro=EpicArraynumeros.every(num=> num<4);
console.log(menores_cuatro); /*true or farse*/

/*sort() ordena los elementos de un array localmente y devuelve el array ascendente y decendente*/
EpicArraynumeros.sort();
EpicArraynumeros.sort((a,b)=>b-a);

///////////////
const ultimosaborH= EpicArrayStuff.at(-1);
console.log(ultimosaborH);

///////*unir arrays*/
const nuevosHelados=['mandarina', 'limon']
const Epicheladosstuff=EpicArrayStuff.concat(nuevosHelados);
/////
class Helado{
    constructor(Sabores,precio){
        this.Sabores=Sabores;
        this.precio=precio;

    }
}

////
EpicArraynumeros.copyWithin(0,3)
///
const iterator1 = EpicArrayStuff.entries();
console.log(iterator1.next().value)
////
console.log(EpicArraynumeros.fill(0,1))
////
const Encontrarprimerelement = EpicArraynumeros.find((element) => element > 5);
///
const numerogrande = (element) => element > 13;
console.log(EpicArraynumeros.findIndex(numerogrande));
////
const encontrarultimo = EpicArraynumeros.findLast((element) => element > 4);
////
const encontrarindice = EpicArraynumeros.findLastIndex((element) => element > 4);
////
const Arraypaaplanar=[1,2,3,[4,5,7]]
Arraypaaplanar.flat();
////
const EpicArraynum2 = [[1, 2], [3, 4, 5], [6]];
const Aplanar = EpicArraynum2.flatMap(num => num);
console.log(Aplanar); 
////localizar valores
EpicArrayStuff.indexOf('coco');
/////unir elementos
console.log(EpicArrayStuff.join('-'))
////
const keyshelao= EpicArrayStuff.keys();
for (const key of keyshelao) {
    console.log(key);
  }
////


