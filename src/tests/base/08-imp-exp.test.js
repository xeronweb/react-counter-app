import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retornar un heroe', () => {

        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);

    });

    test('getHeroeById el id no existe', () => {

        const id = 16546;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual( undefined );

    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const heroesFilter = heroes.filter(h => h.owner === owner);
        const heroesData = getHeroesByOwner(owner);
        expect(heroesFilter).toEqual( heroesData );

    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroesFilter = heroes.filter(h => h.owner === owner);
        expect(heroesFilter.length).toBe( 2 );

    });

});
