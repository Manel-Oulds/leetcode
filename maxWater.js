// Given n non-negative integers representing an elevation map where the 
// width of each bar is 1, compute how much water it can trap after raining.
// heights = [1,8,6,2,5,4,8,3,7]
// The most water can be trapped between the 2nd and 9th bars
// Width = 8, Height = 7 (minimum height of the two bars)
// Water Trapped = Width * Height = 8 * 7 = 56
function max_water(array) {
    const sortedSet = new Set([...array].sort((a, b) => b - a));
    
    if (sortedSet.size < 2) {
        console.error("Insufficient unique elements for water trapping");
        return 0;
    }

    const sortedArray = Array.from(sortedSet);
    const length = sortedArray[1];
    const width = Math.abs(array.indexOf(sortedArray[0]) - array.indexOf(sortedArray[1]));
    console.log(width, length)
    return length * (width+1);
}

console.log(max_water([1, 8, 6, 2, 5, 4, 8, 3, 7]));
