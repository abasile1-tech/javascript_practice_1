const assert = require('assert');

//assert.equal(true, false);

//assert.strictEqual(1,'1');

//assert.strictEqual([1, 2, 3], [1, 2, 3]);

//assert.deepEqual([1, 2, 3], [1, 2, 3]);

assert.deepStrictEqual([1, 2, 3], ['1', '2', '3']);