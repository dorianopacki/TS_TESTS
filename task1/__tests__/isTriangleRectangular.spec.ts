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
        const {decimalFirst, decimalSecond, decimalThird} = {decimalFirst: 2.4, decimalSecond: 3.2, decimalThird: 3.999}

        expect(isRectangularTriangle(decimalFirst, decimalSecond, decimalThird)).toBe("Arguments are not valid")
        expect(isRectangularTriangle(NaN, NaN, NaN)).toBe("Arguments are not valid")
        expect(isRectangularTriangle(Infinity, Infinity, Infinity)).toBe("Arguments are not valid")
        expect(isRectangularTriangle(-1,2,3)).toBe("Side length has to be a natural number")
    })

})

describe("function works correctly", () => {
    it("defines that it is possible to build triangle", () => {
        const validNumsOne = {first: 7, second: 24, third: 25}
        const validNumsSecond = {first: 3, second: 4, third: 5}
        const validNumsThird = {first: 12, second: 16, third: 20}

        expect(isRectangularTriangle(validNumsOne.first, validNumsOne.second, validNumsOne.third)).toBe("It is possible to build rectangular triangle with those sides")
        expect(isRectangularTriangle(validNumsSecond.first, validNumsSecond.second, validNumsSecond.third)).toBe("It is possible to build rectangular triangle with those sides")
        expect(isRectangularTriangle(validNumsThird.first,validNumsThird.second,validNumsThird.third)).toBe("It is possible to build rectangular triangle with those sides")
    })

    it("defined that it is not possible to build triangle", () => {
        const wrongNumsOne = {first: 1, second: 3, third: 3}
        const wrongNumsTwo = {first: 2, second: 6, third: 6}
        const wrongNumsThird = {first: 10, second: 10, third: 6}

        expect(isRectangularTriangle(wrongNumsOne.first, wrongNumsOne.second, wrongNumsOne.third)).toBe("It is not possible to build rectangular triangle with those sides")
        expect(isRectangularTriangle(wrongNumsTwo.first, wrongNumsTwo.second, wrongNumsTwo.third)).toBe("It is not possible to build rectangular triangle with those sides")
        expect(isRectangularTriangle(wrongNumsThird.first, wrongNumsThird.second, wrongNumsThird.third)).toBe("It is not possible to build rectangular triangle with those sides")
    })

    it("defines if it's not possible to build triangle with wrong sides", () => {
        const wrongNumsOne = {first:1, second: 2, third: 3}
        const wrongNumsTwo = {first:6, second: 8, third: 22}
        const wrongNumsThird = {first:4, second: 6, third: 12}

        expect(isRectangularTriangle(wrongNumsOne.first, wrongNumsOne.second, wrongNumsOne.third)).toBe("The biggest side has to be smaller than sum of two others to create a triangle")
        expect(isRectangularTriangle(wrongNumsTwo.first, wrongNumsTwo.second, wrongNumsTwo.third)).toBe("The biggest side has to be smaller than sum of two others to create a triangle")
        expect(isRectangularTriangle(wrongNumsThird.first, wrongNumsThird.second, wrongNumsThird.third)).toBe("The biggest side has to be smaller than sum of two others to create a triangle")
    })
})