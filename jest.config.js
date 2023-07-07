/** @type {import('jest').Config} */
module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: [
        // '**/src/(shared|entities)**/*.(spec|test).[jt]s?(x)'
        // '**/src/shared/ui/Button/**/*.(spec|test).[jt]s?(x)',
        '**/src/shared/ui/Quantity/**/*.(spec|test).[jt]s?(x)',
        // '**/src/entities/equipment/**/*.(spec|test).[jt]s?(x)',
        // '**/src/widgets/equipment/lib/**/*.(spec|test).[jt]s?(x)',
    ],
}
