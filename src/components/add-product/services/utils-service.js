export const prepareOriginalDataForEdit = (editData) => {
    // prepare the format so that edit functionality works same as create
    const formattedProduct = {
        ...editData,
        image_raw_path: '',

    }
    return formattedProduct;
}