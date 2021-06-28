import { forEachFn } from './../ts-fn/arrayMethods';
import { generateArrayWithRandomNumbers, generateArrayOfArrays } from "../ts-fn/generateArrayWithRandomNumbers";

describe("generateArrayWithRandomNumbers", () => {
    const exepction = new Error("Given value has to be a positive integer")
    it("should throw error change number of numbers when given 0", () => {
        try {
            generateArrayWithRandomNumbers(0,0,0)
        }
        catch(error) {
            expect(error.message).toBe("Given value has to be a positive integer")
        }
    })

    it("min valie should be bigger than maximum", () => {
        try {
            generateArrayWithRandomNumbers(1,2,1)
        }
        catch(error) {
            expect(error.message).toBe("Minimum value can't be bigger than maximum")
        }
    })

    it("min and max value should be from 1-10 range", () => {
        try {
            generateArrayWithRandomNumbers(1,12,13)
        }
        catch(error) {
            expect(error.message).toBe("The minimum and maximum value must be from range 1 - 10")
        }
    })

    it("should return array of given length",() => {
        const numOfArrays = 5
        expect(generateArrayWithRandomNumbers(numOfArrays, 1, 10)).toHaveLength(numOfArrays)
    })
})

describe("generateArrayOfArrays", () => {
    it("should throw error when value is not an integer", () => {
        try {
            generateArrayOfArrays(0,0,0,0)
        }
        catch(error) {
            expect(error.message).toBe("Given value has to be an integer")
        }
    })

    it("should throw error when min value is biggert than max", () => {
        try{
            generateArrayOfArrays(1,1,3,2)
        }
        catch(error) {
            expect(error.message).toBe("Minimum value can't be bigger than maximum")
        }
    })
    
    it("both mix and max values have to be from range 1-10", () => {
        try {
            generateArrayOfArrays(1,1,12,13)
        }
        catch(error) {
            expect(error.message).toBe("The minimum and maximum value must be from range 1 - 10")
        }
    })

    it("works like intended and returns proper output", () => {
        const numOfArrays = 2
        const numOfNumbers = 2
        const output= generateArrayOfArrays(numOfArrays,numOfNumbers,3,9)
        expect(output).toHaveLength(2)
        output.forEach(array => {
            expect(array).toHaveLength(2)
        })
    })
})
