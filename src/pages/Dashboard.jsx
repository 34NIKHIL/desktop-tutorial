import { useState, useEffect } from 'react';
import { initialExams } from '../data/mockData';

function Dashboard() {
  const [examCount, setExamCount] = useState(0);

  // Use useEffect to load data when the component first shows up
  useEffect(() => {
    const savedExams = localStorage.getItem('exams');
    if (savedExams) {
      const parsed = JSON.parse(savedExams);
      setExamCount(parsed.length);
    } else {
      // If nothing in localStorage, use initial mock data length
      setExamCount(initialExams.length);
    }
  }, []);

  return (
    <div>
      <h2 className="page-title">Welcome back, Student!</h2>
      
      <div className="summary-box">
        <h3>You have {examCount} upcoming exams</h3>
        <p>Go to the Manage Exams page to view or edit them.</p>
      </div>
    </div>
  );
}

export default Dashboard;
