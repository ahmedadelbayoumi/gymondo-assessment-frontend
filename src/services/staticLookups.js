/**
 * Static Lookups contains the lookup values that are not likely to change
 * through out the lifecycle of the project. Instead of fetching them everytime
 * from the backend.
 *
 * We here assume that these value would not change. However if they are to change,
 * we would probably create backend APIs to fetch them whenever needed and
 * cache them in the localstorage, while making sure to update the cached values
 * in the localstorage if the values change.
 */

export const categories = [
  {
    name: 'Category 1',
    value: 'c1',
  },
  {
    name: 'Category 2',
    value: 'c2',
  },
  {
    name: 'Category 3',
    value: 'c3',
  },
  {
    name: 'Category 4',
    value: 'c4',
  },
  {
    name: 'Category 5',
    value: 'c5',
  },
  {
    name: 'Category 6',
    value: 'c6',
  },
  {
    name: 'Category 7',
    value: 'c7',
  },
];
