export const coreService = (() => {
    const asyncHandler = async (cb, setter, ...args) => {
        if (args) {
            const Objects = await cb(...args)
            setter(Objects)
        } else {
            const Objects = await cb()
            setter(Objects)
        }
    }
    return {
        asyncHandler
    }
})()