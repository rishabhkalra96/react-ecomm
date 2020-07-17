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
                        name: 'Orders',
                        id: 'orders',
                        route: '/my-orders',
                        type: 'list-item'
    
                    },
                    {
                        name: 'Settings',
                        id: 'settings',
                        route: '/settings',
                        type: 'list-item'
    
                    },
                    {
                        name: 'Profile',
                        id: 'profile',
                        route: '/my-profile',
                        type: 'list-item'
    
                    },
                    {
                        name: 'Subscriptions',
                        id: 'subscriptions',
                        route: '/subscriptions',
                        type: 'list-item'
    
                    },
                    {
                        name: 'Shipment',
                        id: 'shipment',
                        route: '/shipment',
                        type: 'list-item'
    
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