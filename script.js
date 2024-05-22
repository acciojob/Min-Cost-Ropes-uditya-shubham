function mincost(arr) {
    // Step 1: Sort the array of rope lengths
    arr.sort((a, b) => a - b);

    let totalCost = 0;

    // Step 2: Iteratively combine the two smallest ropes
    while (arr.length > 1) {
        // Combine the two smallest ropes
        let first = arr.shift();
        let second = arr.shift();
        let cost = first + second;

        // Add the cost to the total cost
        totalCost += cost;

        // Insert the combined rope back into the array
        // and maintain the sorted order using binary search
        let index = binarySearch(arr, cost);
        arr.splice(index, 0, cost);
    }

    return totalCost;
}

// Helper function to perform binary search
function binarySearch(arr, value) {
    let low = 0;
    let high = arr.length;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] < value) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
}

// Example usage:
console.log(mincost([4, 3, 2, 6])); // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33

module.exports = mincost;
