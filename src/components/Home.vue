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