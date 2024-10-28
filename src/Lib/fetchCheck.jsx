
// פונקציה שמעדכנת את הזמן הנוכחי ב-localStorage ושומרת את הנתונים
export function updateFetchTimeAndData(category, data) {
    const now = Date.now();
    localStorage.setItem(`fetchTime_${category}`, now);
    localStorage.setItem(`fetchData_${category}`, JSON.stringify(data));
  }
  
  // פונקציה שבודקת האם יש צורך לקרוא ל-fetch לפי הזמן ששמור ב-localStorage
  export function shouldFetch(category) {
    const lastFetchTime = localStorage.getItem(`fetchTime_${category}`);
    const now = Date.now();
  
    // אם לא נמצא זמן שמור או שעברה יותר מדקה מאז הקריאה האחרונה, נבצע קריאה חדשה
    if (!lastFetchTime || now - lastFetchTime > 60000) {
      return true; // צריך לבצע קריאה
    }
  
    return false; // אין צורך לבצע קריאה נוספת
  }
  
  // פונקציה לשליפת הנתונים השמורים אם קיימים
  export function getStoredData(category) {
    const storedData = localStorage.getItem(`fetchData_${category}`);
    return storedData ? JSON.parse(storedData) : null;
  }
  