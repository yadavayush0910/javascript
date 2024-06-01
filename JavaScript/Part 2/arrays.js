let cars=["toyota","ferrari","audi"];
cars.push("bmw")
console.log(cars.indexOf("audi"));
console.log(cars.includes("audi"));
console.log(cars);
cars.pop();
console.log(cars);
cars.unshift("mercedes");
console.log(cars);
cars.shift();
console.log(cars);
let bike=["hero","honda","bajaj"];
let gaadi=cars.concat(bike);
console.log(gaadi);
console.log(gaadi.reverse());
console.log(gaadi.slice(2,4));
console.log(gaadi.slice(-3));
console.log(gaadi);
