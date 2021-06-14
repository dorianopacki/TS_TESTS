import { getMyAge } from './../ts-fn/getMyAge';

describe("validates data correctly", () => {
    it("defines when string can't be transformed to a number", ()=> {
        expect(getMyAge("abc")).toBe("Given string can't be transformed to number")
        expect(getMyAge("!@#$")).toBe("Given string can't be transformed to number")
        //       
        //@ts-ignore: Unreachable code error
        // expect(getMyAge()).toBe("Pass the date between 1900 and current yar")
    })
    
    it("defines when number is not valid", () => {
        expect(getMyAge(NaN)).toBe("Given number is not valid")
        // expect(getMyAge(2.3333)).toBe("Given number is not valid")
        // expect(getMyAge(Infinity)).toBe("Given number is not valid")
        // expect(getMyAge(-12)).toBe("Given number is not valid")
    })

    it("defines when data object is not valid", () => {
        expect(getMyAge(new Date("abc"))).toBe("Given date is not valid")
    })
})

describe('function works correctly when provided value of type number', () => {

    it("returns correct age", () => {
        expect(getMyAge(1998)).toBe(23)
        expect(getMyAge(1995)).toBe(26)
        expect(getMyAge(2000)).toBe(21)
    })

    it("returns correct age when provides string value", () => {
        expect(getMyAge("2000")).toBe(21)
        expect(getMyAge("1998")).toBe(23)
        expect(getMyAge("1995")).toBe(26)
    })

    it("return correct age when date provided as date object", () => {
        expect(getMyAge(new Date(1995,11,17))).toBe(26)
        expect(getMyAge(new Date(1998,11,17))).toBe(23)
        expect(getMyAge(new Date(2000,11,17))).toBe(21)
        expect(getMyAge(new Date("January 12, 2001"))).toBe(20)
        expect(getMyAge(new Date("1998, May 21"))).toBe(23)
        expect(getMyAge(new Date("1998/05/21"))).toBe(23)
    })
    

    it("ask to pass correct date when provided date of type string", () => {
        expect(getMyAge("1670")).toBe("Pass the date between 1900 and current year")
        expect(getMyAge("1210")).toBe("Pass the date between 1900 and current year")
        expect(getMyAge("1000")).toBe("Pass the date between 1900 and current year")

    })

    it("ask to pass correct date when provided date of type number", () => {
        expect(getMyAge(1410)).toBe("Pass the date between 1900 and current year")
        expect(getMyAge(1200)).toBe("Pass the date between 1900 and current year")
        expect(getMyAge(100)).toBe("Pass the date between 1900 and current year")
    })

    it("ask to pass correct date when provided date of date object", () => {
        expect(getMyAge(new Date("100/05/21"))).toBe("Pass the date between 1900 and current year")
        expect(getMyAge(new Date("January 12, 1400"))).toBe("Pass the date between 1900 and current year")
        expect(getMyAge(new Date("1400, April 16"))).toBe("Pass the date between 1900 and current year")
    })

      
    expect(getMyAge(new Date(1995,11,17))).toBe(26)
    expect(getMyAge("NaN")).toBe("Given string can't be transformed to number")
});