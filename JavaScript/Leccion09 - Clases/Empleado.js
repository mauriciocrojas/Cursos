class Empleado extends Persona {

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
      super(nombre, apellido, edad);
        this._sueldo=sueldo;
        this._idEmpleado = Empleado.contadorEmpleados++;
    }

    get idEmpleado() {
        return this._idEmpleado;
      }
    
      get sueldo() {
        return this._sueldo;
      }
    
      set sueldo(sueldo) {
        this._sueldo = sueldo;
      }


    
      toString(){
        //o
        //return super.toString() + bla bla bla
        return  "IdEmpleado: " + this._idEmpleado + " " + super.nombreCompletoYSueldo() + " " + this._sueldo;
      }
    
}