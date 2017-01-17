const starshipDemo = require("./../");

describe("Starship Demo", function () {
	it("returns 0.0.0", function () {
		expect(starshipDemo()).toBe("0.0.0");
	});
});
