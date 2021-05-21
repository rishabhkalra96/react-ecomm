import {useEffect, useState} from 'react';
import { getLogisticsProviders } from './../services/content-body-service';

export function useDefaultLogistics() {
	const [DEFAULT_LOGISTICS, SET_DEFAULT_LOGISTICS] = useState([]);
	useEffect(() => {
		// fetch the default logistics from db
		(async () => {
			SET_DEFAULT_LOGISTICS(await getLogisticsProviders());
		})();
		return () => {
			SET_DEFAULT_LOGISTICS([]);
		}
	}, []);
	return DEFAULT_LOGISTICS;
}