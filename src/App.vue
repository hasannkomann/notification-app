<script>
import { getToken, onMessage, getMessaging } from "firebase/messaging";
import { messaging } from "./plugins/firebase";
export default {
  name: "AgoraUIKit",
  mounted() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log("message on client:", payload.notification);
    });
  },
  methods: {
    async requestPermission() {
      const token = await getToken(messaging, {
        vapidKey:
          "BO5ycO5hSTgRDXEV88qY4QpELMzxq8jaeZ_oZgissL14LzICVhwAUYif5hjtdi4Ce3xxZzk2Ya6tysB9Kr5qrog",
      });
      if (token) {
        console.log(token);
      } else {
        console.log("permission");
      }
    },
  },
};
</script>

<template>
  <div>Notification Test App</div>
  <button @click="requestPermission">Notification</button>
</template>

<style scoped></style>
