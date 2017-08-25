let bubble = require('../sort/bubble.js');
let expect = require('chai').expect;

describe('冒泡排序测试', function() {
    it('bubble([3, 1, 4, 2] 应该返回 [1, 2, 3, 4])', function() {
        expect(bubble([3, 1, 4, 2])).to.deep.equal([1, 2, 3, 4]);
    })
});