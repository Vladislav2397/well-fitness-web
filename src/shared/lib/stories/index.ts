type argumentTypes = {
    control: {
        type: string
        options?: string[]
    }
    defaultValue?: string | boolean
    table?: {
        type: {
            summary: string
        }
    }
}

export function textControl(): argumentTypes {
    return {
        control: {
            type: 'text',
        },
        table: {
            type: {
                summary: 'string',
            },
        },
    }
}

export function selectControl(args: string[]): argumentTypes {
    return {
        control: {
            type: 'select',
            options: args,
        },
        defaultValue: args[0],
        table: {
            type: {
                summary: args.join(' | '),
            },
        },
    }
}

export function booleanControl(): argumentTypes {
    return {
        control: {
            type: 'boolean',
        },
        defaultValue: false,
    }
}

export function defineControls(
    params: Record<string, string | boolean | string[]>,
): Record<string, argumentTypes> {
    const result: Record<string, argumentTypes> = {}

    Object.entries(params).forEach(([name, value]) => {
        if (typeof value === 'string' && value === '') {
            result[name] = textControl()
        } else if (Array.isArray(value)) {
            result[name] = selectControl(value)
        } else if (typeof value === 'boolean') {
            result[name] = booleanControl()
        }
    })

    return result
}
