/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable-next-line array-callback-return */
/* eslint-disable guard-for-in */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
export default function orderByProps(obj, order) {
  const arrayToFilter = [];

  order.forEach((item) => {
    if (item in obj) {
      arrayToFilter.push({
        key: item,
        value: `${obj[item]}`,
      });

      const deleteditem = item;
      delete obj[deleteditem];
    }
  });

  const newArr = [];


  for (const item in obj) {
    newArr.push({
      key: item,
      value: `${obj[item]}`,
    });
  }

  newArr.sort((a, b) => {
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
  });

  const resultArr = [...arrayToFilter, ...newArr];

  return resultArr;
}
