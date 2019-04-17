const Person_bob = require("./func");

describe("All test concerning person Bob", () => {
	
	test("Bob should be 25 years old", () => { //Test
    expect(Person_bob.get_age()).toBe(25); //Assertion to be validated
	});

	test("Bob should be 25 years old", () => {
		expect(Person_bob.get_age()).not.toBe(20);
	});

	test("Bob must be an adult", () => {
		expect(Person_bob.get_age()).toBeGreaterThan(18);
	})

	test("Get bobs friend info", () => {
		expect.assertions(1);
		return Person_bob.get_bobs_friend_info()
		.then(data => {
			expect(data.email).toBe("Rey.Padberg@karina.biz");
		})
	})

})