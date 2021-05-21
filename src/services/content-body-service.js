import {firebaseDB as db} from './../config/firebase'


const extractData = (dataObj) => {
	return dataObj.docs.map(doc => ({...doc.data(), id: doc.id}))
}

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

export const getLogisticsProviders = async () => {
	try {
		const doc = await db.collection('logistics-providers').get();
		const result = extractData(doc);
		console.log('result recieved as ', result);
		return result;
	} catch(e) {
		console.error('An error occured while retrieving logistics details ', e);
		return [];
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
  const totalDocuments = await db.collection('inventory');
  debugger
  const docs = (await totalDocuments.get()).docs.filter(d => {
    const data = d.data();
    return data.hasOwnProperty('hasRatings') && (!data.hasOwnProperty('ratings') || !data.ratings)
  })
  debugger;
  docs.forEach(async faultyDoc => {
    const filteredDocs = (await totalDocuments.where('id', '==', faultyDoc.data().id).get())
    filteredDocs.docs.map(async doc => doc.ref.update(
      {
        hasRatings: true,
        ratings: {
          average: Math.floor((Math.random() * 5) + 1),
          maxCount: 5,
          ratingsBy: Math.floor((Math.random() * 1000) + 1)
        }
      }
    ));
  }) */
  /* const promises = docs.map(d => {
    const dataToStore = {...d};
    // delete dataToStore.id;
    const sc = await db.collection('inventory').where('id', '==', d.id).get();
    if (!sc.empty) {
      sc.docs.forEach(doc => {
        doc.
      })
    }
  }) */

  /* try {
    const response = await Promise.all(promises)
    console.log('all ok', response)
  } catch (err) {
    console.log('error occured ', err)
  } */
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
}
*/

export const ContentBodyService = {
    getBannerImages: async () => await getRemoteBannerImages(),
    utilities: {
        populateDatabase,
        getDiscountedPrice
    },
    getBodyStrips: _getBodyStrips
}