import { useState, useEffect } from 'react';
import ExamCard from '../components/ExamCard';
import ExamForm from '../components/ExamForm';
import { initialExams } from '../data/mockData';

function Manager() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const savedExams = localStorage.getItem('exams');
    if (savedExams) {
      setExams(JSON.parse(savedExams));
    } else {
      setExams(initialExams);
      localStorage.setItem('exams', JSON.stringify(initialExams));
    }
  }, []);

  const handleAddExam = (newExam) => {
    const updatedExams = [...exams, newExam];
    setExams(updatedExams);
    localStorage.setItem('exams', JSON.stringify(updatedExams));
  };

  const handleDelete = (id) => {
    const filteredExams = exams.filter(exam => exam.id !== id);
    setExams(filteredExams);
    localStorage.setItem('exams', JSON.stringify(filteredExams));
  };

  return (
    <div>
      <h2 className="page-title">Manage Exams</h2>
      
      <ExamForm onAddExam={handleAddExam} />

      <div className="exam-list">
        <h3>Your Exams</h3>
        {exams.length === 0 ? (
          <p>No exams scheduled yet.</p>
        ) : (
          exams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} onDelete={handleDelete} />
          ))
        )}
      </div>
    </div>
  );
}

export default Manager;
