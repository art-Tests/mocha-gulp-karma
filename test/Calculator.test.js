try {
	var should = require("should");
	var Calculator = require("../src/Calculator.js");
}catch(e){}
describe('計算機', function(){
	it('1 + 2 = 3', function(){
		Calculator.add(1, 2).should.be.equal(3);
	});
		it('1 * 2 = 2', function(){
		Calculator.multi(1, 2).should.be.equal(2);
	});
});

