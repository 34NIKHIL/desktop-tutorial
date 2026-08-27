import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Exam Timetable Manager</h1>
      <div className="nav-links">
        {/* We use Link instead of <a> tag so the page doesn't reload */}
        <Link to="/">Dashboard</Link>
        <Link to="/manager">Manage Exams</Link>
      </div>
    </nav>
  );
}

export default Navbar;
