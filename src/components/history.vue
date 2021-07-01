<template>
  <div>
    <div v-for="(item, offset) in historyItems" :key="offset" class="event">
      <div class="title">{{item.title}}</div>
      <div class="date">{{item.runtime.date}}</div>
      <div class="description">{{item.description}}</div>
      <div class="detail"><span class="title">Raised</span>{{item.raised}}</div>
      <div class="detail"><span class="title">Runs</span>{{item.runCount}}</div>
      <div class="detail"><span class="title">Runners</span>{{item.runnerCount}}</div>
      <div class="detail">
        <span class="title">Length</span>
        {{item.runtime.days}} days {{item.runtime.hours}} hours {{item.runtime.minutes}} minutes {{item.runtime.seconds}} seconds
      </div>
    </div>
  </div>
</template>

<script>
import rawHistory from "../data/history.json";
export default {
  name: "History",
  components: {},
  data() {
    return {
      historyItems: rawHistory.events
    };
  }
};
</script>

<style scoped lang="scss">
.event {
  padding-top: 10px;
  padding-bottom: 15px;
  border-top: 1px solid #ffffff;

  .title,
  .date {
    display: inline-block;
  }

  >.title {
    font-size: 1.5em;
    font-weight: bold;
    width: calc(100% - 170px);
  }
  .date {
    font-size: 1.5em;
    font-weight: bold;
    text-align: right;
    width: 170px;
  }
  .description {
    font-size: 1.25em;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .detail {
    .title {
      font-size: 1.25em;
      font-weight: bold;
      padding-right: 10px;

      &:after {
        content: ":"
      }
    }
  }
}
</style>
