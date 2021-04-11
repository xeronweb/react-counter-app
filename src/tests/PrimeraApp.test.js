import React from 'react';
import "@testing-library/jest-dom";
import { shallow } from 'enzyme';
import PrimeraApp from "../PrimeraApp";

describe('Pruebas de <PrimeraApp />', () => {

    /* test('Probar el mensaje Hola soy goku ', () => {
        const saludo = 'Hola soy Goku';
        const { getByText } = render(<PrimeraApp saludo={saludo} />);
        expect ( getByText(saludo) ).toBeInTheDocument();
    }); */

    test('debe mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola soy Goku';
        const wrapper = shallow( <PrimeraApp saludo={saludo} /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe mostrar el subtitulo enviado por props ', () => {
        
        const saludo = 'Hola soy Goku';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow( 
            <PrimeraApp 
                saludo={saludo} 
                subtitulo={subtitulo} 
            /> 
        );

        const textoParrafo = wrapper.find('p').text();
        expect( textoParrafo ).toBe( subtitulo );
    });
    
    


})
