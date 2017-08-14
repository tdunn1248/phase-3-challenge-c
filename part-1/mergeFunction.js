module.exports = function merge(array1, array2) {
  let results = []
  for(let i = 0; i < array1.length || i < array2.length; i++) {
    results.push(array1[i])
    results.push(array2[i])
  }
  return results
}
