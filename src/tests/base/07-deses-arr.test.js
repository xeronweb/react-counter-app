import { retornaArreglo } from "../../base/07-deses-arr";
import "@testing-library/jest-dom";

describe('Pruebas en 07-deses-arr', () => {

    test('Debe retornar un string y un nuemro', () => {
   
        const res = retornaArreglo();
        expect( res ).toEqual( ['ABC', 123] );

        const [letras, numeros] = retornaArreglo();
        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe( 'string' );
        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( 'number' );

    });
    
    
});
