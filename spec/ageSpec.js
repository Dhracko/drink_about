describe("Drink About", function(){
    beforeEach(function() {
        age = new whatCanIDrink;
    });

    describe("Check the age", function() {
        it("should return \"Drink Toddy\"", function() {
            expect(age).toBe(14);
        });
    });
});
