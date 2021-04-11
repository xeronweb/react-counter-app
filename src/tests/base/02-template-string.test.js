import { getSaludo } from "../../base/02-template-string";
import '@testing-library/jest-dom';

describe('Pruebas en 02-template-string', () => {
    
    test('getSaludo debe retornar hola {nombre}', () => {
        
        const nombre = 'Fernando';

        const saludo = getSaludo(nombre);
        
        expect( saludo ).toBe( 'Hola ' + nombre );

    });
    
    
    test('getSaludo debe retornar hola carlos si no tiene argumento', () => {
        
        const saludo = getSaludo();
        
        expect( saludo ).toBe( 'Hola Carlos' );

    });
    

});
