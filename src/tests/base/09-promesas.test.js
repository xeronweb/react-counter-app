import "@testing-library/jest-dom";
import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe retornar un heroe', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(
                heroe => {
                    const heroeData = heroes.find(h => h.id === id);
                    expect(heroe).toEqual(heroeData);
                    done();
                }
            );
    });

    test('getHeroeByIdAsync debe retornar un error porque el id no existe', (done) => {

        const id = 4545;
        getHeroeByIdAsync(id)
            .catch(
                error => {
                    expect(error).toBe('No se pudo encontrar el héroe');
                    done();
                }
            );
    });

});
