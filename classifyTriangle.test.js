const classifyTriangle = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions', () => {
    // Initial Required Test Cases
    test('should classify an Equilateral triangle', () => {
        expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
    });

    test('should return error for invalid inputs', () => {
        expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('should return "Not a Triangle" for invalid triangle sides', () => {
        expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
    });

    // Boundary Value Analysis
    test('BVT: a = 1 (valid)', () => expect(classifyTriangle(1, 100, 100)).toBe('Isosceles'));
    test('BVT: a = 200 (not a triangle)', () => expect(classifyTriangle(200, 100, 100)).toBe('Not a Triangle'));
    test('BVT: a = 201 (invalid)', () => expect(classifyTriangle(201, 100, 100)).toBe('Error: Input conditions C1, C2, or C3 failed.'));

    test('BVT: b = 1 (valid)', () => expect(classifyTriangle(100, 1, 100)).toBe('Isosceles'));
    test('BVT: b = 200 (not a triangle)', () => expect(classifyTriangle(100, 200, 100)).toBe('Not a Triangle'));
    test('BVT: b = 201 (invalid)', () => expect(classifyTriangle(100, 201, 100)).toBe('Error: Input conditions C1, C2, or C3 failed.'));

    test('BVT: c = 1 (valid)', () => expect(classifyTriangle(100, 100, 1)).toBe('Isosceles'));
    test('BVT: c = 200 (not a triangle)', () => expect(classifyTriangle(100, 100, 200)).toBe('Not a Triangle'));
    test('BVT: c = 201 (invalid)', () => expect(classifyTriangle(100, 100, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.'));

    // Equivalence Class Partitioning
    test('ECP: Valid Equilateral', () => expect(classifyTriangle(5, 5, 5)).toBe('Equilateral'));
    test('ECP: Valid Isosceles (a=b)', () => expect(classifyTriangle(7, 7, 10)).toBe('Isosceles'));
    test('ECP: Valid Isosceles (b=c)', () => expect(classifyTriangle(10, 7, 7)).toBe('Isosceles'));
    test('ECP: Valid Isosceles (a=c)', () => expect(classifyTriangle(7, 10, 7)).toBe('Isosceles'));
    test('ECP: Valid Scalene', () => expect(classifyTriangle(3, 4, 5)).toBe('Scalene'));
    test('ECP: Not a Triangle (a+b=c)', () => expect(classifyTriangle(50, 60, 110)).toBe('Not a Triangle'));
    test('ECP: Not a Triangle (a+c=b)', () => expect(classifyTriangle(50, 110, 60)).toBe('Not a Triangle'));
    test('ECP: Not a Triangle (b+c=a)', () => expect(classifyTriangle(110, 50, 60)).toBe('Not a Triangle'));
});

