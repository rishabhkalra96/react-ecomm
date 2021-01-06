import {firebaseDB as db} from './../config/firebase';
import * as uniqueID from 'uniqid';

export const coreDBService = (() => {
    const _addNewProductToInventory = async (productData) => {
        try {
            debugger
            if (productData && !productData.id) {
                productData.id = uniqueID();
            }
            if (!productData) {
                throw new Error('product object not supplied');
            }
            // initiate
            const newDoc = await db.collection('inventory').doc().set(productData);
            debugger;
            console.log('new id is ', newDoc.id);
            return {ok: true, status: 200, data: {message: 'product added successfully'}}
        } catch (e) {

        }
    }
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
        getProductDetailsByID: _getProductDetailsByID,
        addNewProductToInventory: _addNewProductToInventory,
    }
})()