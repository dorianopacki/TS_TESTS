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

    it("min value should be bigger than maximum", () => {
        const wrongValuesOne = {first: 1, second: 2, third: 1}
        const wrongValuesTwo = {first: 2, second: 3, third: 1}
        const wrongValuesThree = {first: 3, second: 5, third: 3}
        try {
            generateArrayWithRandomNumbers(wrongValuesOne.first,wrongValuesOne.second,wrongValuesOne.third)
        }
        catch(error) {
            expect(error.message).toBe("Minimum value can't be bigger than maximum")
        }

        try {
            generateArrayWithRandomNumbers(wrongValuesTwo.first,wrongValuesTwo.second,wrongValuesTwo.third)
        }
        catch(error) {
            expect(error.message).toBe("Minimum value can't be bigger than maximum")
        }

        try {
            generateArrayWithRandomNumbers(wrongValuesThree.first,wrongValuesThree.second,wrongValuesThree.third)
        }
        catch(error) {
            expect(error.message).toBe("Minimum value can't be bigger than maximum")
        }
    })

    it("min and max value should be from 1-10 range", () => {
        const wrongValuesOne = {first: 1, second: 12, third: 13}
        const wrongValuesTwo = {first: 1, second: 20, third: 33}
        const wrongValuesThree = {first: 1, second: 12, third: 13}

        try {
            generateArrayWithRandomNumbers(wrongValuesOne.first, wrongValuesOne.second,wrongValuesOne.third)
        }
        catch(error) {
            expect(error.message).toBe("The minimum and maximum value must be from range 1 - 10")
        }

        try {
            generateArrayWithRandomNumbers(wrongValuesTwo.first,wrongValuesTwo.second,wrongValuesTwo.third)
        }
        catch(error) {
            expect(error.message).toBe("The minimum and maximum value must be from range 1 - 10")
        }


        try {
            generateArrayWithRandomNumbers(wrongValuesThree.first,wrongValuesThree.second,wrongValuesThree.third)
        }
        catch(error) {
            expect(error.message).toBe("The minimum and maximum value must be from range 1 - 10")
        }
    })

    it("should return array of given length",() => {
        const numOfArraysOne = 5
        expect(generateArrayWithRandomNumbers(numOfArraysOne, 1, 10)).toHaveLength(numOfArraysOne)

        const numOfArraysTwo = 6
        expect(generateArrayWithRandomNumbers(numOfArraysTwo, 1, 10)).toHaveLength(numOfArraysTwo)

        const numOfArraysThree = 2
        expect(generateArrayWithRandomNumbers(numOfArraysThree, 5, 10)).toHaveLength(numOfArraysThree)
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
        const wrongValuesOne = {first: 1, second: 1, third: 112, fourth: 13}
        const wrongValuesTwo = {first: 1, second: 20, third: 33, fourth: }
        const wrongValuesThree = {first: 1, second: 12, third: 13}

        try{
            generateArrayOfArrays(1,1,3,2)
        }
        catch(error) {
            expect(error.message).toBe("Minimum value can't be bigger than maximum")
        }

        try{
            generateArrayOfArrays(1,1,9,2)
        }
        catch(error) {
            expect(error.message).toBe("Minimum value can't be bigger than maximum")
        }

        try{
            generateArrayOfArrays(1,1,4,1)
        }
        catch(error) {
            expect(error.message).toBe("Minimum value can't be bigger than maximum")
        }
    })
    
    it("both mix and max values have to be from range 1-10", () => {
        const wrongValuesOne = {first: 1, second: 1, third: 12, fourth: 13}
        const wrongValuesTwo = {first: 1, second: 1, third: 20, fourth: 33}
        const wrongValuesThird = {first: 1, second: 1, third: 50, fourth: 99}
        try {
            generateArrayOfArrays(wrongValuesOne.first,wrongValuesOne.second,wrongValuesOne.third,wrongValuesOne.fourth)
        }
        catch(error) {
            expect(error.message).toBe("The minimum and maximum value must be from range 1 - 10")
        }

        try {
            generateArrayOfArrays(wrongValuesTwo.first,wrongValuesTwo.second, wrongValuesTwo.third, wrongValuesTwo.fourth)
        }
        catch(error) {
            expect(error.message).toBe("The minimum and maximum value must be from range 1 - 10")
        }

        try {
            generateArrayOfArrays(wrongValuesThird.first, wrongValuesThird.second,wrongValuesThird.third,wrongValuesThird.fourth)
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
