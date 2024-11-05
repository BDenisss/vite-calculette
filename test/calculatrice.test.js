import { describe, it, expect } from 'vitest';
import { calculate } from './calculate.js';

describe('Calculatrice', () => {
    it('addition de 1 et 2 doit retourner 3', () => {
        expect(calculate(1, 2, '+')).toBe(3);
    });

    it('soustraction de 5 et 3 doit retourner 2', () => {
        expect(calculate(5, 3, '-')).toBe(2);
    });

    it('multiplication de 4 et 5 doit retourner 20', () => {
        expect(calculate(4, 5, '*')).toBe(20);
    });

    it('division de 10 et 2 doit retourner 5', () => {
        expect(calculate(10, 2, '/')).toBe(5);
    });

    it('division par zéro doit retourner une erreur', () => {
        expect(calculate(10, 0, '/')).toBe('Erreur: division par zéro');
    });

    it('opération inconnue doit retourner un message d\'erreur', () => {
        expect(calculate(10, 2, '%')).toBe('Opération inconnue');
    });
});
