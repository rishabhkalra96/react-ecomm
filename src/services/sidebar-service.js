import requests from './../config/requests';

export const SidebarService = {
    fetchSidebarConfig: async () => {
        try {
            let response = await fetch(requests.sidebarConfigAPI)
            return response
        } catch(fetchErr) {
            console.error('An Error occured while fetching config for sidebar')
            return null;
        }
    },
    fetchSidebarLocal: async () => {
        try {
            let response = {
                status: 200,
                data: [
                    {
                        name: 'Main Page',
                        id: 'orders',
                        route: '/',
                        type: 'list-item',
                        protected: false
    
                    },
                    {
                        name: 'Add new Product',
                        id: 'add_new_product',
                        route: '/products/add',
                        type: 'list-item',
                        protected: true
    
                    },
                    {
                        name: 'Orders',
                        id: 'orders',
                        route: '/my-orders',
                        type: 'list-item',
                        protected: true
    
                    },
                    {
                        name: 'Profile',
                        id: 'profile',
                        route: '/user/profile',
                        type: 'list-item',
                        protected: true
    
                    },
                    {
                        name: 'Settings',
                        id: 'settings',
                        route: '/user/settings',
                        type: 'list-item',
                        protected: true
    
                    }
                ]
            }
            return response
        } catch(fetchErr) {
            console.error('An Error occured while fetching config for sidebar')
            return null;
        }
    }
}