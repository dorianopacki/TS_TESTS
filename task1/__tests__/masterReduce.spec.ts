import {everyFnR, someFnR, mapFn, filterFn} from '../ts-fn/masterReduce'

describe("someFnR", () => {
    const MOCK_ARRAY = [1, "a", "b"]
    const MOCK_STRING = ["a", "b"]
    it("should return true when every at least 1 element met the condition", () => {
        const result = someFnR(MOCK_ARRAY, (elem) => typeof elem === "number")
        expect(result).toBe(true)

        const result2 = someFnR(MOCK_ARRAY, (elem) => typeof elem === "string")
        expect(result2).toBe(true)
    })

    it("returns false when none of elements met the req", () => {
        const result = someFnR(MOCK_STRING, (elem) => typeof elem === "number")
        expect(result).toBe(false)
    })
})

describe("everyFnR", () => {
    const MOCK_STRING = ["a", "b"]
    const MOCK_MIXED = ["a", "b", 2]

    it("returns true when every elements meets the condition", () => {
        const result = everyFnR(MOCK_STRING, (elem) => typeof elem === "string")
        expect(result).toBe(true)
    })

    it("returns false when at least one element doesnt meet the req", () => {
        const result = everyFnR(MOCK_MIXED, (elem) => typeof elem === "string")
        expect(result).toBe(false)
    })
})

describe("mapFnR", () => {
    const MOCK_ARRAY = [1,2,3,4]
    it("should return a new array based on provided one", () => {
        const result = mapFn(MOCK_ARRAY, (elem) => elem * 2 )
        expect(result).toStrictEqual([2,4,6,8])
    })
})

describe("filterFn", () => {
    const MOCK_ARRAY = [1,2,3]
    it("should return array with elemetns that meet the req", () => {
        const result = filterFn(MOCK_ARRAY, (elem) => typeof elem == "number" && elem > 1)
        expect(result).toEqual([2,3])
    })

    it("should return an empty array when no elements meet the req", () => {
        const result = filterFn(MOCK_ARRAY, (elem) => typeof elem === "string")
        expect(result).toEqual([])
    })
})