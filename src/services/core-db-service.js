import {firebaseDB as db} from './../config/firebase'
export const coreDBService = (() => {
    const _getProductDetailsByID = async (productID) => {
        if (!productID) {
            throw new Error('productID not valid')
        }
        const productDoc = await db.collection('inventory').doc(productID).get()
        if (!productDoc.exists) {
            return {ok: true, status: 404, message: 'product not found by id ' + productID}
        }
        return {ok: true, status: 200, data: {id: productID, ...productDoc.data()}}
    }
    return {
        getProductDetailsByID: _getProductDetailsByID
    }
})()