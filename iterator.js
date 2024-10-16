const squaredNumbers = {
    numbers: [1, 2, 3, 4, 5],
    [Symbol.iterator]() {
        let index = 0;
        const nums = this.numbers;
        return {
            next() {
                if (index < nums.length) {
                    const result = { value: nums[index] * nums[index], done: false };
                    index++;
                    return result;
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};

// Iterate over squared numbers using for...of loop
for (const square of squaredNumbers) {
    console.log(square);
}
