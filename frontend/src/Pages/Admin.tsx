import React, { useState } from 'react';

interface Match {
  team1: string;
  team2: string;
  date: string;
  venue: string;
}

const Admin: React.FC = () => {
  const [matchForm, setMatchForm] = useState<Match>({
    team1: '',
    team2: '',
    date: '',
    venue: '',
  });

  const [matches, setMatches] = useState<Match[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMatchForm({ ...matchForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMatches([...matches, matchForm]);
    setMatchForm({ team1: '', team2: '', date: '', venue: '' });
  };

  return (
    <div className="p-6 pt-28 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Panel - Add Match</h1>

      {/* Match Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <input name="team1" value={matchForm.team1} onChange={handleChange} placeholder="Team 1" className="p-3 border rounded" required />
        <input name="team2" value={matchForm.team2} onChange={handleChange} placeholder="Team 2" className="p-3 border rounded" required />
        <input name="date" type="date" value={matchForm.date} onChange={handleChange} className="p-3 border rounded" required />
        <input name="venue" value={matchForm.venue} onChange={handleChange} placeholder="Venue" className="p-3 border rounded" required />
        <button type="submit" className="md:col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Add Match
        </button>
      </form>

      {/* Matches Grid */}
      <h2 className="text-2xl font-bold mb-4 text-center">Upcoming Matches</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((match, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold">
              {match.team1} <span className="text-blue-600">vs</span> {match.team2}
            </h3>
            <div className="flex items-center mt-3 text-gray-600">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 2a1 1 0 011-1h6a1 1 0 011 1v1h1a1 1 0 011 1v1H3V4a1 1 0 011-1h1V2zM3 8v9a2 2 0 002 2h10a2 2 0 002-2V8H3zm4 2h2v2H7v-2z" />
              </svg>
              {new Date(match.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="flex items-center mt-2 text-gray-600">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              {match.venue}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
