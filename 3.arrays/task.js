function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);  
}


function getUsersNamesInAgeRange(users, gender) {
    let filterByGender = users.filter(user => user.gender === gender);
    let averAge = filterByGender.reduce((init, user) => init + user.age, 0) / filterByGender.length;
    if (isNaN(averAge)) {
        return 0;
    }
    return averAge;
}