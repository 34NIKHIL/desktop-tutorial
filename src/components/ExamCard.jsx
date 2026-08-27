function ExamCard(props) {
  // Destructure the exam object from props
  const { exam, onDelete } = props;

  return (
    <div className="exam-card">
      <div className="exam-info">
        <h3>{exam.subject}</h3>
        <p><strong>Date:</strong> {exam.date}</p>
        <p><strong>Time:</strong> {exam.time}</p>
        <p><strong>Room:</strong> {exam.room}</p>
      </div>
      <button 
        className="delete-btn" 
        onClick={() => onDelete(exam.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default ExamCard;
