import { useState } from 'react';

function ExamForm({ onAddExam }) {
  const [formData, setFormData] = useState({
    subject: '', date: '', time: '', room: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.subject || !formData.date || !formData.time || !formData.room) {
      setError('Please fill in all fields');
      return;
    }
    onAddExam({ ...formData, id: Date.now() });
    setFormData({ subject: '', date: '', time: '', room: '' });
    setError('');
  };

  return (
    <div className="exam-form">
      <h3>Add New Exam</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input type="time" name="time" value={formData.time} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Room</label>
          <input type="text" name="room" value={formData.room} onChange={handleInputChange} />
        </div>
        {error && <p className="error-msg">{error}</p>}
        <button type="submit" className="submit-btn">Add Exam</button>
      </form>
    </div>
  );
}

export default ExamForm;
