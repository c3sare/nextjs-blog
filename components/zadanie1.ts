//aliasy
{
    type dice = 1 | 2 | 3 | 4 | 5 | 6;
    type basicType = number | string | boolean;
    type d8 = dice | 7 | 8;
    type arrayStringNumber = (string | number)[];
  
    let x:dice = 6;
    let y:basicType = 1;
    let z:d8 = 1;
    let c:arrayStringNumber = [1, 'd'];
  }
  
  //typowanie obiektów
  {
    const person: {name: string, age: number} = {
      name: "Paweł",
      age: 32
    }
  }
  
  //interface
  {
    interface Person {
      name: string;
      age: number;
      email?: string;
      toString: () => string; // opcjonalna metoda wszystkie metdody w interafce sa opcjonalne
    }
  
    let kinga: Person = {
      name: "kinga",
      age: 32
    }
  
  
    const sendEmail = (people:Person[]) => {
      people.filter((person:Person) => person.email);
    }
  }
  
  //Rozstrzyganie typów
  {
    interface Person {
      age: number,
      name: string,
      email?: string
    }
  
    interface Pet {
      age: number,
      name: string,
      breed?: string
    }
  
    let pawel: Person = {
      name: "Paweł",
      age: 12,
      email: "pawel@o2.pl"
    }
  
    let neko: Pet = {
      name: "Neko",
      age: 15,
      breed: "cat"
    }
  
    // pawel = neko; //dozwolone te same atrybuty
    neko = pawel; // opcjonalne atrybuty sa obcinane
  
    
  
  }
  
  //Łączenie interfejsów
  {
    const dice: 1 | 2 | 3 | 4 | 5 | 6 = 4;
  
    interface Person {
      name: string,
      age: number,
      email: string,
    }
  
    interface Pet {
      name: string,
      age: number,
      breed: string
    }
  
    let union : Person | Pet = {
      name: "Paweł",
      age: 32,
      email: "cat@o2.pl",
      breed: "cat"
    }
  
    let join : Person & Pet = {
      name: "Paweł",
      age: 32,
      email: "cat@o2.pl",
      breed: "cat"
    } //Musi być jednocześnie 1 i 2 interfejsem
  }
  
  //Kompozycja typów
  {
    interface Email {
      name: string,
      domain: string
    }
  
    interface Person {
      name: string,
      age: number,
      email: Email
    }
  }
  
  //Rozszerzanie interfejsów
  {
    interface Person {
      name: string,
      age: number,
      email?: string
    }
  
    interface Child extends Person {
      favouriteColor: string
    }
  
    interface Adult extends Person {
      favouriteBeverage: string
    }
  
    const alicja : Child = {
      name: "Alicja",
      age: 13,
      favouriteColor: "black"
    }
  
    let someone : Person = alicja;
  
    interface Driver {
  
    }
  
    interface CoffeeeDrinker extends Person, Adult, Driver {
  
    }
  }


// Stwórz funkcje przyjmującą jeden parametr, typ tekstowy
// funkcja zwara typ tekstowy
// jesli parametr zaczyna sie od ts to zwroc bez zmian
// w innym wypadku dodaj 'ts' na poczatku


export function word(x: string):string {
    if(x.slice(0, 2) === "ts") return x;
    else return "ts"+x;
}

// Stwórz funkcje, która zwróci wynik dodawana dwóch liczb,
// przyjmujemy jednak, że parametry do funkcji przychodzą z
// zewnątrz, nie przeszły żadnej kontroli

function sum(a:number, b:number):number {
    if(typeof a === "number" && typeof b === "number") {
        return a+b;
    } else {
        throw new Error("Niepoprawne parametry dla funkcji");
    }
}

interface Weapon {
    name: string,
    damage: number,
    ammoLeft: number,
    ammoMax: number,
    rateOfFire: number,
    range: number
}

interface Unit {
    name: string,
    hitPointsLeft: number,
    maxHitPoints: number,
    moveDistance: number,
    weapons: Weapon[]
}

interface Infantry extends Unit {

}

interface Vehicle extends Unit {
    fuelLeft: number,
    fuelMax: number,
    fuelConsumptionPerMove: number,
}


//Typy generyczne
{
    interface Wrap<X> {
        value: X
    }

    function wrap<FooBar>(x:FooBar):Wrap<FooBar> {
        return {
            value: x
        }
    }

    wrap(5);
    wrap("123");
    wrap(true);
    wrap<number>(33);
    wrap<string>("123");
    
}