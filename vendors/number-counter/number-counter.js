class Counter {
  constructor(selector, start, end, duration){
    this._selector = selector; // elemento a seleccionar
    this._obj = document.querySelector(this._selector);// Seleccionar objeto
    this._start = start; // número inicial
    this._end = end; // número final
    this._range = this._end - this._start; // número de rango
    this._duration = duration; // Duranción para terminar el proceso

    this._range = this._end - this._start; // Rango actual
    this._increment = (this._end > this._start) ? 1 : -1; // ¿Seguir incremntado?


    this._step = Math.abs( Math.floor(this._duration  / this._range ) );  // Tiempo restante
    this._timer = setInterval(() => { // Realizar función
      this._start += this._increment; // Incrementar start
      this._obj.textContent = this._start; // Cambiar número
      if(this._start == this._end) clearInterval(this._timer); // Terminar función
    }, this._step);
  }
}