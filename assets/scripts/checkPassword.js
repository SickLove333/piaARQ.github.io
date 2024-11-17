// Requisito 1: Longitud de al menos 8 caracteres
export function checkReq1(pw) {
    return pw.length >= 8;
}

// Requisito 2: Mínimo de 6 letras
export function checkReq2(pw) {
    let letterCount = (pw.match(/[a-zA-Z]/g) || []).length;
    return letterCount >= 6;
}

// Requisito 3: Suma de dígitos al menos 22
export function checkReq3(pw) {
    let digits = pw.match(/\d/g) || [];
    let sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
    return sum >= 22;
}

// Requisito 4: Mínimo de 4 caracteres especiales
export function checkReq4(pw) {
    let specialChars = pw.match(/[^a-zA-Z0-9]/g) || [];
    return specialChars.length >= 4;
}

// Requisito 5: Contiene al menos un país de América del Sur (en español)
export function checkReq5(pw) {
    // Lista de países de América del Sur en español
    let paises = ["argentina", "bolivia", "brasil", "chile", "colombia", "ecuador", "guayana", "francia", "paraguay", "perú", "surinam", "uruguay", "venezuela"];
    pw = pw.toLowerCase();
    for (let index = 0; index < paises.length; index++) {
        if (pw.includes(paises[index])) {
            return true;
        }
    }
    return false;
}

// Requisito 6: No debe tener dígitos consecutivos iguales
export function checkReq6(pw) {
    return !/(.)\1/.test(pw);
}

// Requisito 7: La suma de dígitos no debe ser un número primo
export function checkReq7(pw) {
    let digits = pw.match(/\d/g) || [];
    let sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);

    function isPrime(n) {
        if (n <= 1) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    return !isPrime(sum);
}

// Requisito 8: Contiene al menos un medio de transporte en español
export function checkReq8(pw) {
    // Lista de medios de transporte en español
    let transportes = ["auto", "coche", "moto", "camión", "bus", "bicicleta", "avión", "tren", "barco"];
    pw = pw.toLowerCase();
    for (let index = 0; index < transportes.length; index++) {
        if (pw.includes(transportes[index])) {
            return true;
        }
    }
    return false;
}

////////////////////////////////////////////////* ///////////////////////////*/
export function checkReq9(pw) {
    let facultades = ["FIME", "FCB", "FCQ", "FFyL", "FIC", "FACDYC", "FACPYA", "FARQ", "FCFM", "FTSyDH", "FOD"];
    return facultades.some(facultad => pw.includes(facultad));
}

// Requisito 10: Año de fundación de la facultad
export function checkReq10(pw) {
    return pw.includes("1947");
}

// Requisito 11: Apellido del director
export function checkReq11(pw) {
    return pw.includes("Cubero");
}

// Requisito 12: Apellido de director de cine mexicano famoso
export function checkReq12(pw) {
    let directores = ["Cuarón", "Del Toro", "Iñárritu", "Ripstein", "Reygadas", "Escalante", "Novaro"];
    return directores.some(director => pw.includes(director));
}

// Requisito 13: Nombre de un miembro del equipo 4
export function checkReq13(pw) {
    let miembros = ["José Leonardo", "Dario Franciso", "Benjamin", "Eimmy Anahí", "Mario Alexander", "Erick Yair", "Alan Geovanni", "Bernardo Daniel", "Marcos Daniel", "Jose Martin"];
    return miembros.some(miembro => pw.includes(miembro));
}

// Requisito 14: Marca de computadora famosa
export function checkReq14(pw) {
    let marcas = [
        "Dell", "HP", "Lenovo", "Alienware", "Apple", "Asus", "Acer", "Microsoft", "Samsung", "Sony", "MSI"
    ];
    return marcas.some(marca => pw.includes(marca));
}

// Requisito 15: Tienda de autoservicio
export function checkReq15(pw) {
    let tiendas = ["Oxxo", "Seven Eleven"];
    return tiendas.some(tienda => pw.includes(tienda));
}

// Requisito 16: Año de la conquista de México
export function checkReq16(pw) {
    return pw.includes("1521");
}

// Requisito 17: Estado de México
export function checkReq17(pw) {
    let estados = [
        "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", 
        "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", 
        "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", 
        "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", 
        "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
    ];
    return estados.some(estado => pw.includes(estado));
}

// Requisito 18: Ciudad de Nuevo León
export function checkReq18(pw) {
    let ciudades = ["Monterrey", "Apodaca", "San Pedro", "García", "Escobedo", "Pesquería", "Santa Catarina", "Juárez", "Guadalupe"];
    return ciudades.some(ciudad => pw.includes(ciudad));
}

// Función para verificar si una contraseña cumple con todos los requisitos
export function isPasswordValid(pw) {
    return (
        checkReq1(pw) &&
        checkReq2(pw) &&
        checkReq3(pw) &&
        checkReq4(pw) &&
        checkReq5(pw) &&
        checkReq6(pw) &&
        checkReq7(pw) &&
        checkReq8(pw) &&
        checkReq9(pw) &&
        checkReq10(pw) &&
        checkReq11(pw) &&
        checkReq12(pw) &&
        checkReq13(pw) &&
        checkReq14(pw) &&
        checkReq15(pw) &&
        checkReq16(pw) &&
        checkReq17(pw) &&
        checkReq18(pw)
    );
}
