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

async function populateDatabase(dumpData) {
    // db.collection('inventory').add({})
    const promises = dumpData.map((data) => {
      return db.collection('inventory').doc().set(data)

    })
    try {
      const result = await Promise.all(promises)
      console.log('all ok ', result)
    } catch (e) {
      console.log('some error occured ', e)
    }
  }

  async function _getBodyStrips(stripNames) {
    try {
      const doc = await db.collection('inventory').limit(10).get()
      if (!doc.empty) {
        return stripNames.map(name => {
          return {
            category_name: name,
            items: doc.docs.map(d => ({...d.data()}))
          }
        })
      } else {
        return []
      }
    } catch (e) {
      console.log('error occured in get ', e)
    }
  }

  const getDiscountedPrice = (original, percentageForDiscount) => {
    try {
        const numOrignal = parseInt(original, 10)
        const percentage = parseInt(percentageForDiscount, 10)
        return numOrignal - (percentage / 100)*numOrignal
    } catch (e) {
        return 'NA'
    }
}

/* const _runSample = async () => {
  const docs = await (await db.collection('inventory').get()).docs.map(d => {
    const data = d.data();
    return {
      ...data,
      pricing_details: {
        original_price: data.pricing_details.original_price ? data.pricing_details.original_price : data.pricing_details.min,
        max_discount: data.pricing_details.max_discount,
        multi_currency: data.pricing_details.multi_currency,
        origin_currency: data.pricing_details.origin_currency,
      }
    }
  })
  /* const newDocs = docs.filter(d => !d.hasOwnProperty('has_reviews')).map(data => {
    data['has_reviews'] = true
      return data;
  })
  const promises = docs.map(d => {
    const dataToStore = {...d};
    // delete dataToStore.id;
    return db.collection('inventory').doc(d.id).update({...dataToStore})
  })
  try {
    const response = await Promise.all(promises)
    console.log('all ok', response)
  } catch (err) {
    console.log('error occured ', err)
  }
} */

export const ContentBodyService = {
    getBannerImages: async () => await getRemoteBannerImages(),
    utilities: {
        populateDatabase,
        getDiscountedPrice
    },
    getBodyStrips: _getBodyStrips
}