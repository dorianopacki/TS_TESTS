import { isRectangularTriangle } from './../ts-fn/isRectangularTriangle';

describe("function validates provided arguments", () => {
    it("Returns message when arguments are not valid for function", () => {
    //@ts-ignore: Unreachable code error
       expect(isRectangularTriangle("a", "b", "c")).toBe("Arguments are not valid")
    //@ts-ignore: Unreachable code error
       expect(isRectangularTriangle(true, false, true)).toBe("Arguments are not valid")
    //@ts-ignore: Unreachable code error
       expect(isRectangularTriangle(null, null, undefined)).toBe("Arguments are not valid")
    //@ts-ignore: Unreachable code error
       expect(isRectangularTriangle()).toBe("Arguments are not valid")
    
    })

    it("return message when number is not valid", () => {
        expect(isRectangularTriangle(2.4, 3.2, 3.999)).toBe("Arguments are not valid")
        expect(isRectangularTriangle(NaN, NaN, NaN)).toBe("Arguments are not valid")
        expect(isRectangularTriangle(Infinity, Infinity, Infinity)).toBe("Arguments are not valid")
        expect(isRectangularTriangle(-1,2,3)).toBe("Side length has to be a natural number")
    })

})

describe("function works correctly", () => {
    it("defines that it is possible to build triangle", () => {
        expect(isRectangularTriangle(7,24,25)).toBe("It is possible to build rectangular triangle with those sides")
        expect(isRectangularTriangle(3,4,5)).toBe("It is possible to build rectangular triangle with those sides")
        expect(isRectangularTriangle(12,16,20)).toBe("It is possible to build rectangular triangle with those sides")
    })

    it("defined that it is not possible to build triangle", () => {
        expect(isRectangularTriangle(1,3,3)).toBe("It is not possible to build rectangular triangle with those sides")
        expect(isRectangularTriangle(2,6,6)).toBe("It is not possible to build rectangular triangle with those sides")
        expect(isRectangularTriangle(10,10,6)).toBe("It is not possible to build rectangular triangle with those sides")
    })

    it("defines if it's not possible to build triangle with wrong sides", () => {
        expect(isRectangularTriangle(1,2,3)).toBe("The biggest side has to be smaller than sum of two others to create a triangle")
        expect(isRectangularTriangle(6,8,22)).toBe("The biggest side has to be smaller than sum of two others to create a triangle")
        expect(isRectangularTriangle(4,6,12)).toBe("The biggest side has to be smaller than sum of two others to create a triangle")
    })
})