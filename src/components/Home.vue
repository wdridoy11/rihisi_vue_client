<!-- <template>
  <div>
    <h1>Hello Welcome to my vue project</h1>
    <button class="join-btn">Join Meeting</button>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  methods: {
    joinMeeting() {
      const postData = {
        // Your data here
      };
      // Make a POST request to your API
      axios.post('http://localhost:3001/')
        .then(response => {
          console.log('API Response:', response.data);
        })
        .catch(error => {
          console.error('API Error:', error);
        });
    }
  }
};
</script>


<style>
  .join-btn{
    background: #fff;
    column-gap:#000;
    padding: 10px 30px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
</style> -->
<template>
  <div class="wrapper">
    <h1 class="heading">Video Call System</h1>
    <button class="join-btn" @click="handleJoinMeeting" :disabled="joining">
      {{ joining ? 'Joining...' : 'Join Meeting' }}
    </button>
    <div v-if="meetingLink">
      <p>Meeting Link:</p>
      <a :href="meetingLink" target="_blank" rel="noopener noreferrer">{{ meetingLink }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meetingLink: '',
      joining: false
    };
  },
  methods: {
    async handleJoinMeeting() {
      this.joining = true;
      
      try {
        const response = await fetch('http://localhost:3001/createMeeting', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          this.meetingLink = responseData.hostRoomUrl;
        } else {
          console.error('Failed to create a meeting:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error creating a meeting:', error);
      } finally {
        this.joining = false;
      }
    }
  }
};

</script>

<style>
  .wrapper{
    text-align: center;
  }
  .heading{
    font-size: 30px;
    font-weight: 500;
    color: #000;
  }
  .join-btn{
  background: #000;
  color:#fff;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  }
</style>