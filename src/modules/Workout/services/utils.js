import moment from 'moment';

import { categories } from 'services/staticLookups';

export const getCategoryName = (id) => categories.find(({ value }) => id === value)?.name || '';

export const getStartDate = (date) => moment(date, 'YYYY-MM-DDTHH:mm:ss Z').format('MM/YYYY');
