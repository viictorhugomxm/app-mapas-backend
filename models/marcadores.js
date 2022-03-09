class Marcadores {
  constructor() {
    this.activos = {}
  }

  agregarMarcador() {
    this.activos[marcador.id] = marcador
    return marcador
  }

  removerMarcador(id) {
    delete this.activos[id];
  }

  actualizarMarcador(marcador) {
    this.activos[marcador.id] = marcador;
  }
}

module.exports = Marcadores;