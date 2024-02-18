function canFinish(numCourses, prerequisites) {
    const adjList = Array.from({ length: numCourses }, () => []);
    const inDegree = Array(numCourses).fill(0);
    
    // Construct adjacency list and calculate in-degree for each course
    for (let [course, prerequisite] of prerequisites) {
        adjList[prerequisite].push(course);
        inDegree[course]++;
    }
    
    const queue = [];
    
    // Add courses with in-degree 0 to the queue
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    // Perform topological sort using BFS
    let count = 0;
    while (queue.length) {
        const current = queue.shift();
        count++;
        
        for (let nextCourse of adjList[current]) {
            inDegree[nextCourse]--;
            if (inDegree[nextCourse] === 0) {
                queue.push(nextCourse);
            }
        }
    }
    
    // If all courses can be finished, count will be equal to numCourses
    return count === numCourses;
}

