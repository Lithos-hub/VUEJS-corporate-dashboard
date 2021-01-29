<template>
<div>
  <h1 class="primary--text">Changelog</h1>
  <v-divider></v-divider>

<div class="list-group">
      <div class="list" v-for="(item, i) in changelog" :key="i">
        <span class="font-weight-bold">{{ item.version }}</span>
        <ul style="list-style: none;">

        
          <li v-for="(change, i) in item.changes" :key="i">
            <v-icon color="green">mdi-check</v-icon> {{ change }}
          </li>
        </ul>
        
      </div>
</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            changelog: [
                {version: "1.1.0", changes: ["Added dynamic modals in Team section"]},
                {version: "1.1.1", changes: ["Added some fixes in Tasks section"]},
                {version: "1.1.2", changes: ["New logo and favicon"]},
                {version: "1.1.3", changes: ["Aesthetic changes in general", "Random User API improved", "Tasks list now have auto-refresh when the user write a task"]},
            ]
        }
    },
    methods: {
        reverseChangelog() {
            this.changelog.reverse();
        }
    },
    mounted() {
        this.reverseChangelog();
    }
}
</script>

<style lang="scss">
@import 'src/scss/variables';

  .list {
    font-size: 1em;
  }
  .list-group {
    background: white;
    padding: 20px;
    color: black;
  }
</style>