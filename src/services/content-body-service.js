import requests from './../config/requests';

export const ContentBodyService = {
    fetchSliderImages: async (url, local = false) => {
        if (!local) {
            try {
                let response = await fetch(url)
                return response
            } catch(fetchErr) {
                console.error('An Error occured while fetching sliderimages')
                return null;
            }
        } else {
            return [
                {
                id: "mmhlsz_a8KU",
                created_at: "2018-12-16T06:21:27-05:00",
                updated_at: "2019-12-28T00:04:43-05:00",
                promoted_at: null,
                width: 6000,
                height: 4000,
                color: "#1F1A1B",
                description: "Paros, Greece",
                alt_description: "closed white metal gate",
                urls: {
                raw: "https://images.unsplash.com/photo-1544959014-375462eba73b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                full: "https://images.unsplash.com/photo-1544959014-375462eba73b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                regular: "https://images.unsplash.com/photo-1544959014-375462eba73b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                small: "https://images.unsplash.com/photo-1544959014-375462eba73b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                thumb: "https://images.unsplash.com/photo-1544959014-375462eba73b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                custom: "https://images.unsplash.com/photo-1544959014-375462eba73b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&fit=crop&ixid=eyJhcHBfaWQiOjE0OTIyN30"
                },
                links: {
                self: "https://api.unsplash.com/photos/mmhlsz_a8KU",
                html: "https://unsplash.com/photos/mmhlsz_a8KU",
                download: "https://unsplash.com/photos/mmhlsz_a8KU/download",
                download_location: "https://api.unsplash.com/photos/mmhlsz_a8KU/download"
                },
                categories: [ ],
                likes: 6,
                liked_by_user: false,
                current_user_collections: [ ],
                sponsorship: null,
                user: {
                id: "o_hGQ4hTR0Y",
                updated_at: "2020-07-17T18:07:19-04:00",
                username: "epicantus",
                name: "Daria Nepriakhina",
                first_name: "Daria",
                last_name: "Nepriakhina",
                twitter_username: "epicantus",
                portfolio_url: "http://solutioncanvas.com",
                bio: "Helping 100 entrepreneurs per year @ http://ideahackers.nl // Solutioncanvas.com // Collabcanvas.com // https://www.instagram.com/daria_epicantus/",
                location: "Amsterdam",
                links: {
                self: "https://api.unsplash.com/users/epicantus",
                html: "https://unsplash.com/@epicantus",
                photos: "https://api.unsplash.com/users/epicantus/photos",
                likes: "https://api.unsplash.com/users/epicantus/likes",
                portfolio: "https://api.unsplash.com/users/epicantus/portfolio",
                following: "https://api.unsplash.com/users/epicantus/following",
                followers: "https://api.unsplash.com/users/epicantus/followers"
                },
                profile_image: {
                small: "https://images.unsplash.com/profile-1555238175606-36faa3f16c32?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                medium: "https://images.unsplash.com/profile-1555238175606-36faa3f16c32?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                large: "https://images.unsplash.com/profile-1555238175606-36faa3f16c32?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
                },
                instagram_username: "epicantus",
                total_collections: 103,
                total_likes: 1190,
                total_photos: 340,
                accepted_tos: true
                },
                exif: {
                make: null,
                model: null,
                exposure_time: null,
                aperture: null,
                focal_length: null,
                iso: null
                },
                location: {
                title: "Street view in Paros, Greece",
                name: "Street view in Paros, Greece",
                city: null,
                country: "Greece",
                position: {
                latitude: null,
                longitude: null
                }
                },
                views: 192115,
                downloads: 431
                },
                {
                id: "Dk7JJUhBoEg",
                created_at: "2020-07-05T08:11:31-04:00",
                updated_at: "2020-07-05T18:36:36-04:00",
                promoted_at: null,
                width: 4408,
                height: 2528,
                color: "#0794F8",
                description: null,
                alt_description: "people standing on the street during daytime",
                urls: {
                raw: "https://images.unsplash.com/photo-1593951033510-e03e90bf89ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                full: "https://images.unsplash.com/photo-1593951033510-e03e90bf89ce?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                regular: "https://images.unsplash.com/photo-1593951033510-e03e90bf89ce?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                small: "https://images.unsplash.com/photo-1593951033510-e03e90bf89ce?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                thumb: "https://images.unsplash.com/photo-1593951033510-e03e90bf89ce?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                custom: "https://images.unsplash.com/photo-1593951033510-e03e90bf89ce?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&fit=crop&ixid=eyJhcHBfaWQiOjE0OTIyN30"
                },
                links: {
                self: "https://api.unsplash.com/photos/Dk7JJUhBoEg",
                html: "https://unsplash.com/photos/Dk7JJUhBoEg",
                download: "https://unsplash.com/photos/Dk7JJUhBoEg/download",
                download_location: "https://api.unsplash.com/photos/Dk7JJUhBoEg/download"
                },
                categories: [ ],
                likes: 3,
                liked_by_user: false,
                current_user_collections: [ ],
                sponsorship: null,
                user: {
                id: "fE7vNQo3k_E",
                updated_at: "2020-07-16T05:25:12-04:00",
                username: "robynnexy",
                name: "Robynne Hu",
                first_name: "Robynne",
                last_name: "Hu",
                twitter_username: null,
                portfolio_url: null,
                bio: "Just another amateur photographer",
                location: null,
                links: {
                self: "https://api.unsplash.com/users/robynnexy",
                html: "https://unsplash.com/@robynnexy",
                photos: "https://api.unsplash.com/users/robynnexy/photos",
                likes: "https://api.unsplash.com/users/robynnexy/likes",
                portfolio: "https://api.unsplash.com/users/robynnexy/portfolio",
                following: "https://api.unsplash.com/users/robynnexy/following",
                followers: "https://api.unsplash.com/users/robynnexy/followers"
                },
                profile_image: {
                small: "https://images.unsplash.com/profile-1589374275461-60754a59e6abimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                medium: "https://images.unsplash.com/profile-1589374275461-60754a59e6abimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                large: "https://images.unsplash.com/profile-1589374275461-60754a59e6abimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
                },
                instagram_username: null,
                total_collections: 3,
                total_likes: 400,
                total_photos: 64,
                accepted_tos: true
                },
                exif: {
                make: "NIKON CORPORATION",
                model: "NIKON D5500",
                exposure_time: "1/125",
                aperture: "5.6",
                focal_length: "18.0",
                iso: 400
                },
                location: {
                title: "Chinatown, Singapore",
                name: "Chinatown, Singapore",
                city: "Singapore",
                country: "Singapore",
                position: {
                latitude: 1.281494,
                longitude: 103.84482
                }
                },
                views: 2980,
                downloads: 11
                },
                {
                id: "Bt4XlvdzfGQ",
                created_at: "2020-05-26T18:55:34-04:00",
                updated_at: "2020-06-24T11:58:43-04:00",
                promoted_at: null,
                width: 4752,
                height: 3168,
                color: "#FCFCFC",
                description: null,
                alt_description: "grayscale photo of woman sitting on bench",
                urls: {
                raw: "https://images.unsplash.com/photo-1590533659054-f992b4aa287e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                full: "https://images.unsplash.com/photo-1590533659054-f992b4aa287e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                regular: "https://images.unsplash.com/photo-1590533659054-f992b4aa287e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                small: "https://images.unsplash.com/photo-1590533659054-f992b4aa287e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                thumb: "https://images.unsplash.com/photo-1590533659054-f992b4aa287e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                custom: "https://images.unsplash.com/photo-1590533659054-f992b4aa287e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&fit=crop&ixid=eyJhcHBfaWQiOjE0OTIyN30"
                },
                links: {
                self: "https://api.unsplash.com/photos/Bt4XlvdzfGQ",
                html: "https://unsplash.com/photos/Bt4XlvdzfGQ",
                download: "https://unsplash.com/photos/Bt4XlvdzfGQ/download",
                download_location: "https://api.unsplash.com/photos/Bt4XlvdzfGQ/download"
                },
                categories: [ ],
                likes: 0,
                liked_by_user: false,
                current_user_collections: [ ],
                sponsorship: null,
                user: {
                id: "kHswxR9qzZM",
                updated_at: "2020-07-13T00:01:05-04:00",
                username: "jabz0",
                name: "Jabo Elysée",
                first_name: "Jabo",
                last_name: "Elysée",
                twitter_username: null,
                portfolio_url: null,
                bio: "May we find beauty in all images.",
                location: "beijing/china",
                links: {
                self: "https://api.unsplash.com/users/jabz0",
                html: "https://unsplash.com/@jabz0",
                photos: "https://api.unsplash.com/users/jabz0/photos",
                likes: "https://api.unsplash.com/users/jabz0/likes",
                portfolio: "https://api.unsplash.com/users/jabz0/portfolio",
                following: "https://api.unsplash.com/users/jabz0/following",
                followers: "https://api.unsplash.com/users/jabz0/followers"
                },
                profile_image: {
                small: "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                medium: "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                large: "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
                },
                instagram_username: "jabz_lecapricorne",
                total_collections: 0,
                total_likes: 0,
                total_photos: 14,
                accepted_tos: true
                },
                exif: {
                make: "Canon",
                model: "Canon EOS 500D",
                exposure_time: "1/100",
                aperture: "7.1",
                focal_length: "52.0",
                iso: 100
                },
                location: {
                title: "Beijing Language and Culture University, Wudaokou, Haidian District, Beijing, China",
                name: "Beijing Language and Culture University, Wudaokou, Haidian District, Beijing, China",
                city: null,
                country: "China",
                position: {
                latitude: 39.995706,
                longitude: 116.345422
                }
                },
                views: 17811,
                downloads: 20
                },
                {
                id: "HaxrCVb1FEE",
                created_at: "2017-12-11T19:44:03-05:00",
                updated_at: "2020-06-28T01:04:07-04:00",
                promoted_at: "2017-12-12T06:37:12-05:00",
                width: 5027,
                height: 3366,
                color: "#15ABF2",
                description: "These unusual rays have a comical look to them. This one seemed to pose for me, and seemed to want to be photographed.",
                alt_description: "stingray near coral reef",
                urls: {
                raw: "https://images.unsplash.com/photo-1513039235271-5937eefe2959?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                full: "https://images.unsplash.com/photo-1513039235271-5937eefe2959?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                regular: "https://images.unsplash.com/photo-1513039235271-5937eefe2959?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                small: "https://images.unsplash.com/photo-1513039235271-5937eefe2959?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                thumb: "https://images.unsplash.com/photo-1513039235271-5937eefe2959?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                custom: "https://images.unsplash.com/photo-1513039235271-5937eefe2959?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&fit=crop&ixid=eyJhcHBfaWQiOjE0OTIyN30"
                },
                links: {
                self: "https://api.unsplash.com/photos/HaxrCVb1FEE",
                html: "https://unsplash.com/photos/HaxrCVb1FEE",
                download: "https://unsplash.com/photos/HaxrCVb1FEE/download",
                download_location: "https://api.unsplash.com/photos/HaxrCVb1FEE/download"
                },
                categories: [ ],
                likes: 234,
                liked_by_user: false,
                current_user_collections: [ ],
                sponsorship: null,
                user: {
                id: "TYLyWjPA9BM",
                updated_at: "2020-07-18T01:09:41-04:00",
                username: "davidclode",
                name: "David Clode",
                first_name: "David",
                last_name: "Clode",
                twitter_username: null,
                portfolio_url: "http://tracts4free.wordpress.com",
                bio: "I enjoy photography, painting, and nature. I lived in South Africa, the UK, and now Australia. More free paintings, photos available at Tracts4Free.WordPress.com, and Reforestation.me. Also now on YouTube.",
                location: "Cairns, Queensland, Australia.",
                links: {
                self: "https://api.unsplash.com/users/davidclode",
                html: "https://unsplash.com/@davidclode",
                photos: "https://api.unsplash.com/users/davidclode/photos",
                likes: "https://api.unsplash.com/users/davidclode/likes",
                portfolio: "https://api.unsplash.com/users/davidclode/portfolio",
                following: "https://api.unsplash.com/users/davidclode/following",
                followers: "https://api.unsplash.com/users/davidclode/followers"
                },
                profile_image: {
                small: "https://images.unsplash.com/profile-1503350572760-b44aa5280785?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                medium: "https://images.unsplash.com/profile-1503350572760-b44aa5280785?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                large: "https://images.unsplash.com/profile-1503350572760-b44aa5280785?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
                },
                instagram_username: null,
                total_collections: 12,
                total_likes: 20422,
                total_photos: 756,
                accepted_tos: true
                },
                exif: {
                make: "NIKON CORPORATION",
                model: "NIKON D750",
                exposure_time: "1/200",
                aperture: "2.8",
                focal_length: "35.0",
                iso: 800
                },
                location: {
                title: "Cairns Aquarium, Cairns City, Australia",
                name: "Cairns Aquarium, Cairns City, Australia",
                city: "Cairns City",
                country: "Australia",
                position: {
                latitude: -16.9185918,
                longitude: 145.7736208
                }
                },
                views: 1342692,
                downloads: 5209
                },
                {
                id: "0p1bKcO_I5w",
                created_at: "2018-11-24T05:06:28-05:00",
                updated_at: "2020-04-21T01:25:16-04:00",
                promoted_at: "2018-11-25T03:25:48-05:00",
                width: 3359,
                height: 2246,
                color: "#0D0E10",
                description: null,
                alt_description: "aerial view of buildings",
                urls: {
                raw: "https://images.unsplash.com/photo-1543053845-3eef00d3319f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                full: "https://images.unsplash.com/photo-1543053845-3eef00d3319f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                regular: "https://images.unsplash.com/photo-1543053845-3eef00d3319f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                small: "https://images.unsplash.com/photo-1543053845-3eef00d3319f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                thumb: "https://images.unsplash.com/photo-1543053845-3eef00d3319f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0OTIyN30",
                custom: "https://images.unsplash.com/photo-1543053845-3eef00d3319f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&fit=crop&ixid=eyJhcHBfaWQiOjE0OTIyN30"
                },
                links: {
                self: "https://api.unsplash.com/photos/0p1bKcO_I5w",
                html: "https://unsplash.com/photos/0p1bKcO_I5w",
                download: "https://unsplash.com/photos/0p1bKcO_I5w/download",
                download_location: "https://api.unsplash.com/photos/0p1bKcO_I5w/download"
                },
                categories: [ ],
                likes: 17,
                liked_by_user: false,
                current_user_collections: [ ],
                sponsorship: null,
                user: {
                id: "Q_TepIn8RMo",
                updated_at: "2020-07-12T16:42:04-04:00",
                username: "nicolebaster",
                name: "Nicole Baster",
                first_name: "Nicole",
                last_name: "Baster",
                twitter_username: "nicolebaster",
                portfolio_url: "http://nicolebaster.com",
                bio: "Vienna born and raised | graphic design student | instagram: @nicole.baster ",
                location: "Austria",
                links: {
                self: "https://api.unsplash.com/users/nicolebaster",
                html: "https://unsplash.com/@nicolebaster",
                photos: "https://api.unsplash.com/users/nicolebaster/photos",
                likes: "https://api.unsplash.com/users/nicolebaster/likes",
                portfolio: "https://api.unsplash.com/users/nicolebaster/portfolio",
                following: "https://api.unsplash.com/users/nicolebaster/following",
                followers: "https://api.unsplash.com/users/nicolebaster/followers"
                },
                profile_image: {
                small: "https://images.unsplash.com/profile-1542988573634-aba20174aec1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                medium: "https://images.unsplash.com/profile-1542988573634-aba20174aec1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                large: "https://images.unsplash.com/profile-1542988573634-aba20174aec1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
                },
                instagram_username: "mentiri_",
                total_collections: 1,
                total_likes: 40,
                total_photos: 77,
                accepted_tos: true
                },
                exif: {
                make: "Panasonic",
                model: "DMC-FZ150",
                exposure_time: "1/1000",
                aperture: "4.0",
                focal_length: "6.2",
                iso: 100
                },
                location: {
                title: "Plzeň, Czech Republic",
                name: "Plzeň, Czech Republic",
                city: "Plzeň",
                country: "Czech Republic",
                position: {
                latitude: null,
                longitude: null
                }
                },
                views: 355280,
                downloads: 1896
                }
                ]
        }
    },
    slideUrls: () => requests.slideshowsUrls,
    parseResponseForSliders: (data, route='') => {
        const returnData = data.map(imageObj => {
            return {
                alt: imageObj.alt_description,
                color: imageObj.color,
                description: imageObj.description,
                height: imageObj.height,
                width: imageObj.width,
                id: imageObj.id,
                url: imageObj.urls.custom || imageObj.urls.full || imageObj.urls.raw || null,
                routeTo: route || data.routeTo || null
            }
        })
        return returnData
    }
}