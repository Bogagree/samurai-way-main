export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
    if (value) {
        return undefined
    }
    return 'Field is required'
}

export const maxLengthCreator = (maxLength:number): FieldValidatorType => (value: string) => {
    console.log(value.length)
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}

export const minLengthCreator = (minLength:number): FieldValidatorType => (value: string) => {
    console.log(value.length)
    if (value && value.length <= minLength) return `Min length sould be more ${minLength} symbols`
    return undefined
}

export const maxLength10 = maxLengthCreator(10)
export const minLength3 = minLengthCreator(3)