<template>
  <v-container height="100%" width="100%">
    <div id="accountContent">
      <h3 class="display-1" id="accounth3">Notification settings</h3>
      <hr class="light-blue lighten-4 my-2" />

      <v-sheet height="100%" width="100%" elevation="10" class="pa-5">
        <v-expansion-panels focusable inset>
          <v-expansion-panel two-line v-for="(item, index) in items" :key="index" active-class="black--text">
            <v-list>
              <v-expansion-panel-header>
                <v-icon class="display-1 justify-start" color="primary">{{ item.icon }}</v-icon>

                <v-list-item-title class="font-weight-bold text-left">{{ item.text }}</v-list-item-title>
              </v-expansion-panel-header>

              <v-list-item-subtitle class="text-right mr-15 green--text">{{ item.subtext }}</v-list-item-subtitle>
            </v-list>

            <v-expansion-panel-content class="text-right">
              <v-container class="pa-8 text-center" v-html="item.content"></v-container>

              <v-card class="d-flex d-flex-row justify-center" flat>
                <p>
                  Email
                  <v-switch v-model="email" inset></v-switch>
                </p>
                <p>
                  SMS
                  <v-switch v-model="sms" inset></v-switch>
                </p>
                <p>
                  APP
                  <v-switch v-model="app" inset></v-switch>
                </p>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-sheet>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Notifications",
  data() {
    return {
      items: [
        {
          icon: "mdi-message-reply-text",
          text: "Messages",
          subtext: "Emails, SMS, APP",
          content: `
          <p>These are notifications for comments on your posts and replies to your comments.</p>
          <p class="font-weight-bold">Where you receive these notifications: </p>
          `,
        },
        {
          icon: "mdi-bell-ring",
          text: "Reminders",
          subtext: "Emails, APP",
          content: "These are notifications to remind you of updates you might have missed.",
        },
        {
          icon: "mdi-update",
          text: "Updates",
          subtext: "SMS, APP",
          content: "These are notifications about system updates.",
        },
        {
          icon: "mdi-account-multiple",
          text: "Groups",
          subtext: "Emails, SMS",
          content: "These are notifications about activities in groups you've joined.",
        },
        {
          icon: "mdi-calendar-check",
          text: "Events",
          subtext: "Emails, SMS, APP",
          content: "These are notifications about events.",
        },
        {
          icon: "mdi-alert-octagon",
          text: "Other notifications",
          subtext: "Emails, SMS",
          content: "These are notifications from job apps like LinkedIn or system notifications",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

#accounth3 {
  margin-top: 20px;
}

#accountContent {
  padding: 50px;
}

h3 {
  background: $h3;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
