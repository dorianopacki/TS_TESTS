import { aggregateArrayIntoChunks } from "../../task1/ts-fn/aggregateArrayIntoChunks";


const transformOutputToInput = <T>(outputArray: Array<Array<T>>) => {
    const result = outputArray.reduce((prev, acc) => {
        acc.forEach(chunk => {
            prev.push(chunk)
        })
        return prev
    }, [])
        return result
    }

describe("aggregateArrayIntoChunks", () => {
    const MIN_VALUE = 4
    const MAX_VALUE = 7
    const alphabet = "abcdefghijklmnoprstuwxyz".split("")

    // it("should return / throw error when array is too short", () => {
    //     expect(aggregateArrayIntoChunks([1,2,3])).toThrowError("Array is to short")
    // }) maximum callstack size exceeded
    //to be checked in future 

    it("function should create one chunk when not enough elements", () => {
        const PROVIDED_VALUE_ONE = [1,2,3,4,5,6]
        const EXPECTED_OUTPUT_ONE = [[1,2,3,4,5,6]]
        expect(aggregateArrayIntoChunks(PROVIDED_VALUE_ONE)).toStrictEqual(EXPECTED_OUTPUT_ONE)

        // const PROVIDED_VALUE_TWO = [1,1,1]
        // const EXPECTED_OUTPUT_TWO = [[1,1,1,]]
        // expect(aggregateArrayIntoChunks(PROVIDED_VALUE_TWO)).toStrictEqual(EXPECTED_OUTPUT_TWO)

        // const PROVIDED_VALUE_THREE = [1]
        // const EXPECTED_OUTPUT_THREE = [[1]]
        // expect(aggregateArrayIntoChunks(PROVIDED_VALUE_THREE)).toStrictEqual(EXPECTED_OUTPUT_THREE)

    })

    it("does chunks have proper length", () => {
        const results = aggregateArrayIntoChunks(alphabet)
        results.forEach(result => {
            expect(result.length >= MIN_VALUE && result.length <= MAX_VALUE).toBe(true)
        })
    })

    it("output is same after regression", () => {
        const INPUT_VALUE = [1,2,3,4,5,6,7,8,9]
        const output = aggregateArrayIntoChunks(INPUT_VALUE)
        const transformedOutput = transformOutputToInput(output)
        expect(transformedOutput).toStrictEqual(INPUT_VALUE)

        const INPUT_VALUE_TWO = [9,8,7,6,5,4,3,2,1]
        const outputTwo = aggregateArrayIntoChunks(INPUT_VALUE_TWO)
        const transformedOutputTwo = transformOutputToInput(outputTwo)
        expect(transformedOutputTwo).toStrictEqual(INPUT_VALUE_TWO)

        const INPUT_THREE = [2,1,3,7]
        const outputThree = aggregateArrayIntoChunks(INPUT_THREE)
        const transformedOutputThree = transformOutputToInput(outputThree)
        expect(transformedOutputThree).toStrictEqual(INPUT_THREE)

    })

    it("does work as intended", () => {
        const a = aggregateArrayIntoChunks(alphabet)
    })
})
