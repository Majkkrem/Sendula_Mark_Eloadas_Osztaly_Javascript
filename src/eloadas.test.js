import { Eloadas } from './eloadas';
import { expect, it, describe, beforeEach } from 'vitest';

describe('Eloadas', () => {
    let eloadas;

    beforeEach(() => {
        eloadas = new Eloadas(3, 4);
    });

    it('should throw an error when creating an Eloadas instance with invalid arguments', () => {
        expect(() => new Eloadas(0, 4)).toThrow('Invalid arguments. The number of rows and seats must be greater than 0.');
        expect(() => new Eloadas(3, 0)).toThrow('Invalid arguments. The number of rows and seats must be greater than 0.');
    });

    it('should initialize the foglalasok array correctly', () => {
        expect(eloadas.foglalasok).toEqual([
            [false, false, false, false],
            [false, false, false, false],
            [false, false, false, false],
        ]);
    });

    it('should lefoglal a seat correctly', () => {
        expect(eloadas.lefoglal()).toBe(true);
        expect(eloadas.foglalasok).toEqual([
            [true, false, false, false],
            [false, false, false, false],
            [false, false, false, false],
        ]);
    });

    it('should return the correct number of szabad helyek', () => {
        expect(eloadas.getSzabadHelyek()).toBe(12);
        eloadas.lefoglal();
        expect(eloadas.getSzabadHelyek()).toBe(11);
    });

    it('should return true when all seats are Teli', () => {
        eloadas.foglalasok = [
            [true, true, true, true],
            [true, true, true, true],
            [true, true, true, true],
        ];
        expect(eloadas.Teli).toBe(true);
    });

    it('should return false when at least one seat is not Teli', () => {
        expect(eloadas.Teli).toBe(false);
        eloadas.foglalasok[0][0] = true;
        expect(eloadas.Teli).toBe(false);
    });

    it('should throw an error when calling Foglalt with invalid arguments', () => {
        expect(() => eloadas.Foglalt(0, 1)).toThrow('Invalid arguments. Row and seat numbers must be between 1 and the maximum number of rows/seats.');
        expect(() => eloadas.Foglalt(1, 0)).toThrow('Invalid arguments. Row and seat numbers must be between 1 and the maximum number of rows/seats.');
        expect(() => eloadas.Foglalt(4, 1)).toThrow('Invalid arguments. Row and seat numbers must be between 1 and the maximum number of rows/seats.');
        expect(() => eloadas.Foglalt(1, 5)).toThrow('Invalid arguments. Row and seat numbers must be between 1 and the maximum number of rows/seats.');
    });

    it('should return the correct value when calling Foglalt', () => {
        expect(eloadas.Foglalt(1, 1)).toBe(false);
        eloadas.foglalasok[0][0] = true;
        expect(eloadas.Foglalt(1, 1)).toBe(true);
    });
});
