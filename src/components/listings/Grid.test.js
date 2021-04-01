import data from '../../data/courses.json';
// load the number of data in the file
const numItems = data.length;

test('Number of Itmes = `12', () => {
    expect(numItems).toBe(12);
});

test('Number of Items to be greater than or equal to 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
});