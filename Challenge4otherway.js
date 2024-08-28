class People {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

class City {
    constructor(name) {
        this.name = name;
        this.residents = []; 
    }
}

function agregarPersonaACiudad(people, city) {
    city.residents.push(people);
}


function obtenerResidents(city) {
    return city.residents;
}

// Ejemplo de uso
const ciudad1 = new City("Bogota");
const ciudad2 = new City("Medellin");

const persona1 = new People("Karol", 20, ciudad1);
const persona2 = new People("Karen", 21, ciudad1);
const persona3 = new People("Carlos", 45, ciudad2);

agregarPersonaACiudad(persona1, ciudad1);
agregarPersonaACiudad(persona2, ciudad1);
agregarPersonaACiudad(persona3, ciudad2);

const residentesBogota = obtenerResidents(ciudad1);
console.log("Residentes de Bogota:");
residentesBogota.forEach(People => {
    console.log(`Nombre: ${People.name}, Edad: ${People.age}`);
});

