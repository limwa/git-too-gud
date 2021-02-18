/**
 * Returns whether or not a given object can represent a gitmoji.
 * 
 * @param obj An object to validate.
 * @returns true if the given object can represent a gitmoji, false otherwise.
 */
function validate(obj: any): boolean {
    return (
            obj
            && typeof obj.name == "string"
            && typeof obj.description == "string"
            && typeof obj.emoji == "string"
        ) || false; // We use this to guarantee that we get a true/false value from this function
}

export default {
    validate,
}