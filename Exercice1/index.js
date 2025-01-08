function pairNumbers(start, end) {
    const startNum = parseInt(start, 10);
    const endNum = parseInt(end, 10);
    const result = [];
  
    for (let i = startNum; i <= endNum; i++) {
      if (i % 2 === 0) {
        result.push(i);
      }
    }
    
    return result.join(',');
  }
console.log(pairNumbers(1, 10))
export default pairNumbers
