const productosEnStock = ["Teclado", "Mouse", "Monitor", "Webcam", "Auriculares"];

console.log("=== INICIO DE GESTIÓN DE STOCK Y ARRAYS ===");


function listarStock(listaProductos) {
    console.log("\n--- REPORTE DE STOCK ACTUAL ---");
    for (const producto of listaProductos) {
        console.log(`• Producto: ${producto}`);
    }
    console.log(`Total disponible: ${listaProductos.length} productos.`);
}


console.log("\n--- 1. MANIPULACIÓN DE EXTREMOS ---");

productosEnStock.push("Parlantes");
console.log("➕ Se agregó 'Parlantes' al final de la lista.");

/
productosEnStock.unshift("Notebook");
console.log("⬆️ Se agregó 'Notebook' al inicio por prioridad.");


const productoEliminado = productosEnStock.pop();
console.log(`❌ Se ha eliminado el elemento: ${productoEliminado}`);
alert(`ℹ️ Notificación de inventario: Se ha eliminado el elemento del final: ${productoEliminado}`);


console.log("\n--- 2. BÚSQUEDA Y VALIDACIÓN ---");

const productoBuscado = prompt("¿Qué producto querés buscar en el inventario?");

if (productoBuscado) {
    
    if (productosEnStock.includes(productoBuscado)) {
        
        const posicion = productosEnStock.indexOf(productoBuscado);
        console.log(`✅ "${productoBuscado}" está en stock en el índice/posición: ${posicion}`);
        alert(`✅ El producto "${productoBuscado}" se encuentra disponible en la posición ${posicion}.`);
    } else {
        console.log(`❌ "${productoBuscado}" no se encuentra en el stock.`);
        alert(`❌ El producto "${productoBuscado}" NO está en el inventario.`);
    }
} else {
    console.warn("No se ingresó ningún término de búsqueda.");
}


console.log("\n--- 3. ACTUALIZACIÓN POR ÍNDICE CON SPLICE ---");

const indiceReemplazo = 2;
const productoNuevo = "Mouse Inalámbrico";

console.log(`Cambiando el elemento en el índice ${indiceReemplazo} ('${productosEnStock[indiceReemplazo]}') por '${productoNuevo}'...`);


productosEnStock.splice(indiceReemplazo, 1, productoNuevo);


listarStock(productosEnStock);

console.log("\n=== FIN DEL PROCESAMIENTO DE STOCK ===");