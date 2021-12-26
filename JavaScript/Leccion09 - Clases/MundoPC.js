class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }

  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }
}

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }

  get idRaton() {
    return this._idRaton;
  }

  toString() {
    return `{Id Ratón: ${this._idRaton}}\n{Tipo entrada: ${this._tipoEntrada}}\n{Marca: ${this._marca}}`;
  }
}

class Teclado extends DispositivoEntrada {
  static contadorTeclado = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclado;
  }

  get idTeclado() {
    return this._idTeclado;
  }

  toString() {
    return `{Id Teclado: ${this._idTeclado}}\n{Tipo entrada: ${this._tipoEntrada}}\n{Marca: ${this._marca}}`;
  }
}

let raton1 = new Raton("USB", "DC");
let teclado1 = new Teclado("C", "Mac");

console.log(raton1.toString());
console.log(teclado1.toString());

class Monitor {
  static contadorMonitores = 0;

  constructor(marca, tamanio) {
    this._marca = marca;
    this._tamanio = tamanio;
    this._idMonitor = ++Monitor.contadorMonitores;
  }

  get idMonitor() {
    return this._idMonitor;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }

  get tamanio() {
    return this._tamanio;
  }

  set tamanio(tamanio) {
    this._tamanio = tamanio;
  }

  toString() {
    return `{Id Monitor: ${this.idMonitor}}\n{Marca: ${this._marca}}\n{Tamaño: ${this._tamanio}}`;
  }
}

let monitor1 = new Monitor("Toshiba", "17'");
console.log(monitor1.toString());

class Computadora {
  static contadorComputadoras = 0;

  constructor(nombre, monitor, teclado, raton) {
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }

  get idComputadora() {
    return this._idComputadora;
  }

  get nombre() {
    this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get monitor() {
    this._monitor;
  }

  set monitor(monitor) {
    this._monitor = monitor;
  }

  get teclado() {
    this._teclado;
  }

  set teclado(teclado) {
    this._teclado = teclado;
  }

  get raton() {
    this._raton;
  }

  set raton(raton) {
    this._raton = raton;
  }

  toString() {
    return `{Id Computadora: ${this._idComputadora}}\n{Nombre: ${this._nombre}}\n{${this._monitor}}\n{${this._raton}}\n{${this._teclado}}`;
  }
}

let computadora1 = new Computadora("HP", monitor1, teclado1, raton1);
console.log(computadora1.toString());

class Orden {
  static contadorOrdenes = 0;

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = [];
  }

  get idOrden() {
    return this._idOrden;
  }

  get computadoras() {
    return this._computadoras;
  }
  set computadoras(computadoras) {
    this._computadoras = computadoras;
  }

  agregarComputadora(computadora) {
    this._computadoras.push(computadora);
  }

  mostrarOrden() {
    let computadorasOrden = "";
    for (let computadora of this._computadoras) {
      computadorasOrden += `\n${computadora}`;
    }

    console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
  }
}


let raton3 = new Raton('USB', 'HP');
console.log( raton3.toString() );
let raton2 = new Raton('Bluetooth', 'Dell');
raton2.marca = 'HP';
console.log( raton2.toString() );

let teclado3 = new Teclado('Bluetooth', 'MSI');
let teclado2 = new Teclado('USB', 'Acer');
console.log( teclado3.toString() );
console.log( teclado2.toString() );

let monitor3 = new Monitor('HP', 15);
let monitor2 = new Monitor('Dell', 27);
console.log( monitor3.toString() );
console.log( monitor2.toString() );

let computadora3 = new Computadora('HP', monitor3, raton3, teclado3);
console.log( `${computadora3}` );
let computadora2 = new Computadora('Armada', monitor2, raton2, teclado2);
console.log(`${computadora2}`);

let orden1 = new Orden();
orden1.agregarComputadora(computadora3);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora3);
orden2.mostrarOrden();