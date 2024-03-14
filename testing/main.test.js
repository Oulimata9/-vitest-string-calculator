import { expect, test } from 'vitest'
import { add } from '../main'

test('empty string returns', () => {
  expect(add("")).toBe(0)
});

test('string "1" returns 1', () => {
    expect(add("1")).toBe(1)
  });

test('string "2" returns 2', () => {
    expect(add("2")).toBe(2);
  });


test('two numbers separated by a comma are added', () => {
  expect(add("1,2")).toBe(3)
});  

test('multiple numbers separated by commas are added', () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("4,5,6,7")).toBe(22);
    expect(add("8,9,10,11,12")).toBe(50);
  });
  
test('new line between numbers (instead of commas) returns their sum', () => {
      expect(add("1\n2,3")).toBe(6);
  });
  
test('new lines and commas as mixed separators are handled correctly', () => {
      expect(add("1\n2\n3,4")).toBe(10);
  });
  
  test('support custom delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//*\n4*5*6")).toBe(15);
    expect(add("//|\n7|8")).toBe(15); // Attention ici : 7 + 8 = 15 (vérifier la logique ou l'exemple donné)
});  

test('throw exception for negative numbers', () => {
    const runWithNegativeNumber = () => add("-1,2,-3");
    expect(runWithNegativeNumber).toThrow("Negatives not allowed: -1, -3");
});

test('throw exception for multiple negative numbers', () => {
    const runWithMultipleNegatives = () => add("2,-4,3,-5,-6");
    expect(runWithMultipleNegatives).toThrow("Negatives not allowed: -4, -5, -6");
});

test('numbers larger than 1000 are ignored', () => {
    expect(add("2,1001")).toBe(2);
    expect(add("3\n1002,4")).toBe(7);
    expect(add("1000,1000")).toBe(2000); // 1000 doit être inclus, mais les nombres supérieurs ignorés
    expect(add("1003,5")).toBe(5);
});

test('support custom delimiter of any length', () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
    expect(add("//[xyz]\n4xyz5xyz6")).toBe(15);
    expect(add("//[--]\n7--8--9")).toBe(24);
});

