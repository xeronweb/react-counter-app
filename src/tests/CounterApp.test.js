import React from 'react';
import "@testing-library/jest-dom";
import { shallow } from 'enzyme';
import CounterApp from "../CounterApp";

describe('Pruebas de <CounterApp />', () => {

    let wrapper = shallow( <CounterApp /> ); // lo hago para el scope

    beforeEach(() =>{
        wrapper = shallow( <CounterApp /> );
    });

    test('debe mostrar <counterApp /> el valor por defecto', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe mostrar <counterApp /> el valor 100', () => {
        const wrapper = shallow( <CounterApp value={100} /> );
        const texto = wrapper.find('h2').text().trim();
        expect(texto).toBe('100');
    });

    test('debe incrementar al apretar el boton +1 ', () => {
        
        wrapper.find('button').at(0).simulate('click');        
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('11')

    });

    test('debe decrementar al apretar el boton -1 ', () => {
        
        wrapper.find('button').at(2).simulate('click');        
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('9')

    });

    test('debe resetear al apretar el reset ', () => {
         
        const wrapper = shallow( <CounterApp value={105} /> );
        wrapper.find('button').at(0).simulate('click');       
        wrapper.find('button').at(0).simulate('click');       
        wrapper.find('button').at(1).simulate('click');        
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('105')

    })
    
    


})
