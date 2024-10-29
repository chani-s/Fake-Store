export function updateFetchTimeAndData(category, data) {
    const now = Date.now();
    localStorage.setItem(`fetchTime_${category}`, now);
    localStorage.setItem(`fetchData_${category}`, JSON.stringify(data));
  }
  
  export function shouldFetch(category) {
    const lastFetchTime = localStorage.getItem(`fetchTime_${category}`);
    const now = Date.now();
  
    if (!lastFetchTime || now - lastFetchTime > 60000) {
      return true;
    }
  
    return false; 
  }
  
  export function getStoredData(category) {
    const storedData = localStorage.getItem(`fetchData_${category}`);
    return storedData ? JSON.parse(storedData) : null;
  }
  