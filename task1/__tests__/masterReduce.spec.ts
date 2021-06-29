import {everyFnR, someFnR, mapFn, filterFn} from '../ts-fn/masterReduce'

describe("someFnR", () => {
    const MOCK_ARRAY = [1, "a", "b"]
    const MOCK_STRING = ["a", "b"]
    it("should return true when every at least 1 element met the condition", () => {
        const result = someFnR(MOCK_ARRAY, (elem) => typeof elem === "number")
        expect(result).toBe(true)

        const result2 = someFnR(MOCK_ARRAY, (elem) => typeof elem === "string")
        expect(result2).toBe(true)

        const result3 = someFnR(MOCK_ARRAY, (elem) => typeof elem === "number" && elem === 1)
        expect(result3).toBe(true)
    })

    it("returns false when none of elements met the req", () => {
        const result = someFnR(MOCK_STRING, (elem) => typeof elem === "number")
        expect(result).toBe(false)

        const result2 = someFnR(MOCK_ARRAY, (elem) => typeof elem === "number" && elem > 2 )
        expect(result2).toBe(false)

        const result3 = someFnR(MOCK_STRING, (elem) => elem === "d")
        expect(result3).toBe(false)
    })
})

describe("everyFnR", () => {
    const MOCK_STRING = ["a", "b"]
    const MOCK_NUMBER = [1,2,3]
    const MOCK_BOOL = [true, true, true]
    const MOCK_MIXED = ["a", "b", 2]

    it("returns true when every elements meets the condition", () => {
        const result = everyFnR(MOCK_STRING, (elem) => typeof elem === "string")
        expect(result).toBe(true)

        const result2 = everyFnR(MOCK_NUMBER, (elem) => typeof elem === "number")
        expect(result2).toBe(true)

        const result3 = everyFnR(MOCK_BOOL, (elem) => elem )
        expect(result3).toBe(true)
    })

    it("returns false when at least one element doesnt meet the req", () => {
        const result = everyFnR(MOCK_MIXED, (elem) => typeof elem === "string")
        expect(result).toBe(false)

        const result2 = everyFnR(MOCK_STRING, (elem) => typeof elem === "number" )
        expect(result2).toBe(false)

        const result3 = everyFnR(MOCK_BOOL, (elem) => elem === false)
        expect(result3).toBe(false)
    })
})

describe("mapFnR", () => {
    const MOCK_ARRAY = [1,2,3,4]
    const EXPECT_OUTPUT = [2,4,6,8]

    const MOCK_ARRAY_TWO = [10, 8, 4]
    const EXPECT_OUTPUT_TWO = [5,4,2]

    const MOCK_ARRAY_THREE = [1,2,3]
    const EXPECT_OUTPUT_THREE = [0,1,2]

    it("should return a new array based on provided one", () => {
        const result = mapFn(MOCK_ARRAY, (elem) => elem * 2 )
        expect(result).toStrictEqual(EXPECT_OUTPUT)

        const result2 = mapFn(MOCK_ARRAY_TWO, (elem) => elem / 2 )
        expect(result2).toStrictEqual(EXPECT_OUTPUT_TWO)

        const result3 = mapFn(MOCK_ARRAY_THREE, (elem) => elem - 1)
        expect(result3).toStrictEqual(EXPECT_OUTPUT_THREE)
    })
})

describe("filterFn", () => {
    const MOCK_ARRAY_NUMS = [1,2,3]
    const EXPECT_OUTPUT = [2,3]

    const MOCK_ARRAY_MIXED = ["a", 1, "b", 3]
    const EXPECT_OUTPUT_TWO = ["a", "b"]

    const MOCK_ARRAY_LETTER = ["a", "b","c", 1]
    const EXPECT_OUTPUT_THREE = [1]
    
    it("should return array with elemetns that meet the req", () => {
        const result = filterFn(MOCK_ARRAY_NUMS, (elem) => typeof elem == "number" && elem > 1)
        expect(result).toEqual(EXPECT_OUTPUT)

        const result2 = filterFn(MOCK_ARRAY_MIXED, (elem) => typeof elem !== "number")
        expect(result2).toStrictEqual(EXPECT_OUTPUT_TWO)

        const result3 = filterFn(MOCK_ARRAY_LETTER, (elem) => typeof elem !== "string")
        expect(result3).toStrictEqual(EXPECT_OUTPUT_THREE)
    })

    it("should return an empty array when no elements meet the req", () => {
        const result = filterFn(MOCK_ARRAY_NUMS, (elem) => typeof elem === "string")
        expect(result).toEqual([])
    })
})