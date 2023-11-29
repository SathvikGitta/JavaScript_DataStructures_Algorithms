const HelloWorld = require('./HelloWorld');

test('HelloWorld should return "Hello World"', () => {
    expect(HelloWorld()).toBe('Hello World');
});
