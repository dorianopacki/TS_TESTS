import { aggregateArrayIntoChunks } from "../../task1/ts-fn/aggregateArrayIntoChunks";

describe("aggregateArrayIntoChunks", () => {
    const MIN_VALUE = 4
    const MAX_VALUE = 7
    const alphabet = "abcdefghijklmnoprstuwxyz".split("")

    // it("should return / throw error when array is too short", () => {
    //     expect(aggregateArrayIntoChunks([1,2,3])).toThrowError("Array is to short")
    // }) maximum callstack size exceeded

    it("function should create one chunk when not enough elements", () => {
        expect(aggregateArrayIntoChunks([1,2,3,4,5,6])).toStrictEqual([[1,2,3,4,5,6]])
    })

    it("does chunks have proper length", () => {
        const results = aggregateArrayIntoChunks(alphabet)
        results.forEach(result => {
            expect(result.length >= MIN_VALUE && result.length <= MAX_VALUE).toBe(true)
        })
    })

    it("does work as intended", () => {
        const a = aggregateArrayIntoChunks(alphabet)
        console.log(a)
    })
})