let __value = 42
// use spy
const isomorphicFetch = jest.fn( () => __value )
isomorphicFetch.__setValue = v => __value = v;

export default isomorphicFetch
