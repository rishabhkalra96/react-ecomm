export const coreService = (() => {
    const asyncHandler = async (cb, setter, ...args) => {
        if (args) {
            const response = await cb(...args)
            setter(response)
        } else {
            const response = await cb()
            setter(response)
        }
    }
    return {
        asyncHandler
    }
})()