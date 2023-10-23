import React, { useState } from 'react'

const Home = () => {
    const [meetingLink, setMeetingLink] = useState('');
    const [joining, setJoining] = useState(false);
  
    const handleJoinMeeting = async () => {
        setJoining(true);
    
        try {
          const response = await fetch('http://localhost:3001/createMeeting', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (response.ok) {
            const responseData = await response.json();
            setMeetingLink(responseData.hostRoomUrl);
          } else {
            console.error('Failed to create a meeting:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Error creating a meeting:', error);
        } finally {
          setJoining(false);
        }
      };

  return (
   <div>
      <h1>Video Call System</h1>
      <button className='bg-blue-500 px-7 py-2 rounded-md text-white' onClick={handleJoinMeeting} disabled={joining}>
        {joining ? 'Joining...' : 'Join Meeting'}
      </button>
      {meetingLink && (
        <div>
          <p>Meeting Link:</p>
          <a href={meetingLink} target="_blank" rel="noopener noreferrer">
            {meetingLink}
          </a>
        </div>
      )}
    </div>
  )
}

export default Home