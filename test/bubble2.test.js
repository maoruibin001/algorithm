let bubble2 = require('../sort/bubble2.js');
let expect = require('chai').expect;

describe('冒泡排序改进版测试', function() {
    it('bubble([3, 1, 4, 2] 应该返回 [1, 2, 3, 4])', function() {
        expect(bubble2([3, 1, 4, 2])).to.deep.equal([1, 2, 3, 4]);
    })
});