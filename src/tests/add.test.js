const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymus') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should get greeting with name', () => {
    const result = generateGreeting('Reut');
    expect(result).toBe(`Hello Reut!`);
});

test('should get greeting with no name', () => {
    const result = generateGreeting();
    expect(result).toBe(`Hello Anonymus!`);
});