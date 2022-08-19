// filter out the duplicate numbers
const arr = [1, 2, 3, 4, 5, 5, 3, 3, 6, 7, 8, 9, 4];

const filteredArray = arr.filter((value, index, array) => array.indexOf(value) !== index);
// filteredArray == [3,4,5];
filteredArray.forEach((value) => {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === value) {
            arr.splice(i, 1);
            i -= 1;
        }
    }
});
console.log(isNaN('a'));
