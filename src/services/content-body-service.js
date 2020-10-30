import {firebaseDB as db} from './../config/firebase'


const getRemoteBannerImages = async () => {
    try {
        const bannerDocs = await db.collection('main_banners').get()
        const bannerImages = bannerDocs.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }))
        return bannerImages
    } catch(e) {
        console.log('error occured while reading banner images from database' , e)
        return []
    }
}

export const ContentBodyService = {
    getBannerImages: async () => await getRemoteBannerImages()
}