/**
 * Return random number from {0} to {max}, not included max number
 * @example randint(6) => 0 | 1 | 2 | 3 | 4 | 5
 */
export function randint(max: number): number
/**
 * Return random number from {min} to {max}, not included max number
 * @example randint(1, 6) => 1 | 2 | 3 | 4 | 5
 */
export function randint(min: number, max: number): number
export function randint(...args: number[]): number {
    let max = 1
    let min = 0

    if (args.length === 1) {
        max = args[0]
    } else {
        min = args[0]
        max = args[1]
    }

    return Math.min(Math.floor(Math.random() * (max - min + 1) + min), max - 1)
}
