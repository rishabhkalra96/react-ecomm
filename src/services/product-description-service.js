import {firebaseDB as db} from './../config/firebase'

export const getProductReviews = async (productID) => {
    try {
        if (productID) {
            const reviewDocs = await db.collection('customer-reviews').where('product_id', '==', productID).get()
            const reviews = reviewDocs.docs.map(doc => {
                console.log('doc looks like ', doc.data(), doc.id)
                const data = doc.data()
                return {
                ...data,
                id: doc.id,
                review_count: data.reviews.length
                }
            })
            console.log('review docs look like ', reviews)
            return reviews;
        }
        return {
            ok: false, status: 400, error: 'product id not supplied'
        }
    } catch(e) {
        console.log('error occured while reading product reviews from database' , e)
        return []
    }
}