function canFinish(numCourses, prerequisites) {
    const adjList = Array.from({ length: numCourses }, () => []);
    const inDegree = Array(numCourses).fill(0);
    
    // Construct adjacency list and calculate in-degree for each course
    for (let [course, prerequisite] of prerequisites) {
        adjList[prerequisite].push(course);
        inDegree[course]++;
    }
    
    
    
   
    
  
    
   
}

