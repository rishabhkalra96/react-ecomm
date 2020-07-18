const keys = {
    unslpash: 'Qgc10z4JYPl5dDsAFhWW4M8Hlk6Mba1PtfBiovLKSXU'
}
const requests = {
    sidebarConfigAPI: 'https://reqres.in/api/users?page=2',
    slideshowsUrls: [
        `https://api.unsplash.com/photos/random/?client_id=${keys.unslpash}&count=5&orientation=landscape&w=1920`,
    ],
}

export default requests;
