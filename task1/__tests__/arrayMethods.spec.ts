import { forEachFn, mapFn, someFn, everyFn, filterFn, reduceFn, entriesFn } from './../ts-fn/arrayMethods';

describe("MapFn", () => {
    const MOCK_ARRAY_NUM = [1,2,3,4]
    const MOCK_ARRAY_NUM2 = [10, 8, 4]

    const EXPECTED_OUTPUT_ONE = [2,4,6,8]
    const EXPECTED_OUTPUT_TWO = [1,2,3,4]
    const EXPECTED_OUTPUT_THREE = [5,4,2]

    const multiply = (number: number) => number * 2
    it("does return new array with proper data", () => {
        const result = mapFn(MOCK_ARRAY_NUM, multiply)
        expect(result).toStrictEqual(EXPECTED_OUTPUT_ONE)

        const result2 = mapFn(MOCK_ARRAY_NUM, (elem) => elem / 1)
        expect(result2).toStrictEqual(EXPECTED_OUTPUT_TWO)

        const result3 = mapFn(MOCK_ARRAY_NUM2, (elem) => elem /2)
        expect(result3).toStrictEqual(EXPECTED_OUTPUT_THREE)
    })

})

describe("someFn", () => {

    const MOCK_ARRAY_NUM = [1,2,3,4]

    it("returns true when at least on condition is met", () => {
        const result = someFn(MOCK_ARRAY_NUM, (num) => num === 2)
        expect(result).toBe(true)

        const result2 = someFn(MOCK_ARRAY_NUM, (elem) => elem > 3)
        expect(result2).toBe(true)

        const result3 = someFn(MOCK_ARRAY_NUM, (elem) => elem === 1)
        expect(result3).toBe(true)
    })

    it("should return false when no condtion is met", () => {
        const result = someFn(MOCK_ARRAY_NUM, (num)=> num === 10)
        expect(result).toBe(false)

        const result2 = someFn(MOCK_ARRAY_NUM, (elem) => typeof elem === "string")
        expect(result2).toBe(false)

        const result3 = someFn(MOCK_ARRAY_NUM, (elem) => elem < 1)
        expect(result3).toBe(false)
    })
})

describe("everyFn", () => {
    const MOCK_ARRAY_NUM = [1,2,3,4]
    const MOCK_ARRAY_MIXED = [1, "a", 3]
    it("should return true when every condition is met", () => {
        const result = everyFn(MOCK_ARRAY_NUM, (num) => typeof num === "number")
        expect(result).toBe(true)

        const result2 = everyFn(MOCK_ARRAY_NUM, (elem) => typeof elem === "number" && elem >= 1)
        expect(result2).toBe(true)
        
        const result3 = everyFn(MOCK_ARRAY_NUM, (elem) => typeof elem !== "string")
        expect(result3).toBe(true)
    })

    it("should return false when not every condition is met", () => {
        const result = everyFn(MOCK_ARRAY_MIXED, (num) => typeof num === "number")
        expect(result).toBe(false)

        const result2 = everyFn(MOCK_ARRAY_MIXED, (elem) => typeof elem === "string")
        expect(result2).toBe(false)

        const result3 = everyFn(MOCK_ARRAY_NUM, (elem) => typeof elem === "number" && elem > 2 )
        expect(result3).toBe(false)
    })
})

describe('filterFn', () => {
    const MOCK_ARRAY = ["a", 2, "b", 3]


    it("should return an array with elements that meet the condition", () => {
        const EXPECTED_OUTPUT_ONE = [2,3]
        const EXPECTED_OUTPUT_TWO = ["a", "b"]
        const EXPECTED_OUTPUT_THREE = [3]

        const result = filterFn(MOCK_ARRAY, (elem) => typeof elem === "number")
        expect(result).toEqual(EXPECTED_OUTPUT_ONE)

        const result2 = filterFn(MOCK_ARRAY, (elem) => typeof elem === "string")
        expect(result2).toEqual(EXPECTED_OUTPUT_TWO)

        const result3 = filterFn(MOCK_ARRAY, (elem) => typeof elem === "number" && elem > 2)
        expect(result3).toStrictEqual(EXPECTED_OUTPUT_THREE)
    })

    it("when no elements meet condition empty array should be returned", () => {
        const result = filterFn(MOCK_ARRAY, (elem) => typeof elem === "number" && elem > 5 )
        expect(result).toEqual([])

        const result2 = filterFn(MOCK_ARRAY, (elem) => typeof elem == "string" && elem === "c")
        expect(result2).toEqual([])

        const result3 = filterFn(MOCK_ARRAY, (elem) => typeof elem === "number" && elem === 19)
        expect(result3).toEqual([])
    })
});

describe("forEachFn", () => {
    const MOCK_ARRAY = ["a", "b", "b", "c"]
    it("should be done for every element of array", () => {
        let result: Array<any> = []
        forEachFn(MOCK_ARRAY, (elem) => result.push(elem))
        expect(result).toStrictEqual(MOCK_ARRAY)
    })

    it("shouldn't return any value", () => {
        const result = forEachFn(MOCK_ARRAY, (elem) => elem)
        expect(result).toBe(undefined)
    })
})

describe("entriesFn", () => {
    const MOCK_ARRAY = ["a", "b", "c"]

    it("returns a key/value pair of array elements postion", () => {
        const result = entriesFn(MOCK_ARRAY)
        expect(result.next()).toStrictEqual({value: "a", done: false })
    })

    it("should inform if array is empty", () => {
        const result = entriesFn([])
        // expect(result).toBe("array is empty")
        
    })
})

describe("reduceFn", () => {
    const MOCK_ARRAY = ["a", "a", "c"]
    const MOCK_ARRAY_NUM = [1,2,3,4]
    it("accumulates data from array into object", () => {
        const result = reduceFn(MOCK_ARRAY, (prev: any, curr: any) => {
            prev[curr] ? prev[curr] ++ : prev[curr] = 1
            return prev
        }, {})

        expect(result).toStrictEqual({"a": 2, "c": 1})
    })

    it("accumulates data from array without provided initial value into default array", () => {
        const result = reduceFn(MOCK_ARRAY, (prev: any, acc:any) => {
            prev+=acc
            return prev
        })
        
        expect(result).toBe('aaac')
    })
})