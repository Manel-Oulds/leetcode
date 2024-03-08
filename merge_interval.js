function merge(intervals) {
    if (intervals.length === 0) return [];

    intervals.sort((a, b) => a[0] - b[0]); // Sort intervals based on start time

    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = merged[merged.length - 1];

        if (currentInterval[0] <= lastMergedInterval[1]) {
            // Overlapping intervals, merge them
            lastMergedInterval[1] = Math.max(currentInterval[1], lastMergedInterval[1]);
        } else {
            // Non-overlapping interval, add it to the merged list
            merged.push(currentInterval);
        }
    }

    return merged;
}

