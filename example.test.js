// test('adds 1 +2 to equl 3', ()=> {
//   expect(1 + 2).toBe(3)
// });

describe('expect test',()=> {
it('37 to equl 37', ()=> {
  expect(37).toBe(37)
});
it('{age: 39} to equal {age: 39}', ()=> {
  expect({ age: 39 }).toEqual({ age: 39 })
});

// 문자의 길이를 구해서 비교해볼때 사용하는 함수 = toHaveLength
it('.toHaveLength', ()=> {
  expect('hello').toHaveLength(5)
});
it('.toHaveProperty', ()=> {
  expect({name:'yong'}).toHaveProperty('name')
  expect({name:'yong'}).toHaveProperty('name','yong')
});

it('.toBeDefind', ()=> {
  expect({name:'yong'}.name).toBeDefined()
});

it('.toBeFalsy', ()=> {
  expect(false).toBeFalsy()
  expect("").toBeFalsy()
  expect(null).toBeFalsy()
  expect(undefined).toBeFalsy()
  expect(NaN).toBeFalsy()
});

it('.toBeGreaterThan', ()=> {
  expect(10).toBeGreaterThan(9)
});
it('.toBeGreaterThanOrEqual', ()=> {
  expect(10).toBeGreaterThanOrEqual(10)
});

// 에러를 상속받은 하위가 에러인지 구분할때 테스트할때 사용함 -> toBeInstanceof
it('.toBeInstanceof', ()=> {
  class Foo{}
  expect(new Foo()).toBeInstanceOf(Foo)
});

})