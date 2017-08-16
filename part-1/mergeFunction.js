module.exports = function merge(array1, array2) {
  let mergedArray = []
  for(let i = 0; i < array1.length || i < array2.length; i++) {
    mergedArray.push(array1[i])
    mergedArray.push(array2[i])
  }
  return mergedArray
}
