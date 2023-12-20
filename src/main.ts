class CabeceraPagina {
  titulo: string;
  color: string;
  fuente: string;
  alineacion: string;

  constructor(titulo: string, color: string, fuente: string) {
      this.titulo = titulo;
      this.color = color;
      this.fuente = fuente;
      this.alineacion = "centrado"; 
  }


  obtenerPropiedades(): { titulo: string; color: string; fuente: string } {
      return {
          titulo: this.titulo,
          color: this.color,
          fuente: this.fuente,
      };
  }

  
  establecerAlineacion(alineacion: string): void {
      if (["centrado", "derecha", "izquierda"].includes(alineacion)) {
          this.alineacion = alineacion;
      } else {
          console.error("La alineación no es válida. Use 'centrado', 'derecha' o 'izquierda'.");
      }
  }

  
  imprimirPropiedades(): void {
      console.log("Título:", this.titulo);
      console.log("Color:", this.color);
      console.log("Fuente:", this.fuente);
      console.log("Alineación:", this.alineacion);
  }
}


const miCabecera = new CabeceraPagina("Mi Página", "azul", "Arial");


const propiedades = miCabecera.obtenerPropiedades();
console.log("Propiedades:", propiedades);


miCabecera.establecerAlineacion("derecha");
miCabecera.imprimirPropiedades();


