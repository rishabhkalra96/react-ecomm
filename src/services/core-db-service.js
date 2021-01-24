import {firebaseDB as db} from './../config/firebase';
import * as uniqueID from 'uniqid';

export const coreDBService = (() => {
    const _addNewProductToInventory = async (productData) => {
        try {
            if (productData && !productData.id) {
                productData.id = uniqueID();
            }
            if (!productData) {
                throw new Error('product object not supplied');
            }
            // initiate
            const newDoc = await db.collection('inventory').doc().set(productData);
            console.log('new id is ', newDoc.id);
            return {ok: true, status: 200, data: {message: 'product added successfully'}}
        } catch (e) {
            return {ok: false, status: 500, message : e.toString()};
        }
    }

    const _deleteProducFromInventory = async (productID) => {
        try {
            if (productID) {
                const docsMatched = await db.collection('inventory').where("id", "==", productID).limit(1).get();
                if(!docsMatched.empty) {
                    await Promise.all(docsMatched.docs.map(document => document.ref.delete()));
                    // delete related reviews of the product as well
                    const matchingreviews = await db.collection('customer-reviews').where("product_id", "==", productID).limit(1).get();
                    if (!matchingreviews.empty) {
                        await Promise.all(matchingreviews.map(reviewDoc => reviewDoc.ref.delete()));
                    }
                    return await {ok: true, status: 200, data: {message: 'Product deleted successfully!'}}
                }
            }
            return {ok: false, status: 400, error: 'product id is not provided'};
        } catch(e) {
            return {ok: false, status: 500, error: e.toString()};
        }
    }
    const _getProductDetailsByID = async (productID) => {
        if (!productID) {
            throw new Error('productID not valid')
        }
        const productDoc = await db.collection('inventory').where('id', '==', productID).limit(1).get()
        if (!productDoc.docs.length) {
            return {ok: true, status: 404, message: 'product not found by id ' + productID}
        }
        return {ok: true, status: 200, data: {id: productID, ...productDoc.docs[0].data()}}
    }
    return {
        getProductDetailsByID: _getProductDetailsByID,
        addNewProductToInventory: _addNewProductToInventory,
        deleteProducFromInventory: _deleteProducFromInventory,
    }
})()