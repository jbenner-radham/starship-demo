const starshipDemo = require("./../");

describe("Starship Demo", function () {
	it("returns 0.2.0", function () {
		expect(starshipDemo()).toBe("0.2.0");
	});
});
