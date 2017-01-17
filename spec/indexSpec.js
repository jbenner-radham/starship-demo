const starshipDemo = require("./../");

describe("Starship Demo", function () {
	it("returns 0.1.1", function () {
		expect(starshipDemo()).toBe("0.1.1");
	});
});
