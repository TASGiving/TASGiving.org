<template>
  <section v-if="showTimer" class="countdown">
    <div id="clock">
      <div id="grill"></div>
      <div class="digit-wrapper">
        <div class="back-digit"></div>
        <div id="days_hundred" class="digit">{{ days.split("")[0] }}</div>
      </div>
      <div class="digit-wrapper">
        <div class="back-digit"></div>
        <div id="days_ten" class="digit">{{ days.split("")[1] }}</div>
      </div>
      <div class="digit-wrapper">
        <div class="back-digit"></div>
        <div id="days" class="digit">{{ days.split("")[2] }}</div>
      </div>
      <div class="seperator">:</div>
      <div class="digit-wrapper">
        <div class="back-digit"></div>
        <div id="hours_ten" class="digit">{{ hours.split("")[0] }}</div>
      </div>
      <div class="digit-wrapper">
        <div class="back-digit"></div>
        <div id="hours" class="digit">{{ hours.split("")[1] }}</div>
      </div>
      <div class="seperator">:</div>
      <div class="digit-wrapper">
        <div class="back-digit"></div>
        <div id="minutes_ten" class="digit">{{ minutes.split("")[0] }}</div>
      </div>
      <div class="digit-wrapper">
        <div class="back-digit"></div>
        <div id="minutes" class="digit">{{ minutes.split("")[1] }}</div>
      </div>
      <div class="seperator">:</div>
      <div class="digit-wrapper">
        <div class="back-digit"></div>
        <div id="seconds_ten" class="digit">{{ seconds.split("")[0] }}</div>
      </div>
      <div class="digit-wrapper">
        <div class="back-digit"></div>
        <div id="seconds" class="digit">{{ seconds.split("")[1] }}</div>
      </div>
      <div class="seperator">.</div>
      <div class="digit-wrapper">
        <div class="back-digit"></div>
        <div id="tens" class="digit">{{ milliseconds.split("")[0] }}</div>
      </div>
      <div class="digit-wrapper">
        <div class="back-digit"></div>
        <div id="hundreds" class="digit">{{ milliseconds.split("")[1] }}</div>
      </div>
      <div class="digit-wrapper">
        <div class="back-digit"></div>
        <div id="thousands" class="digit">{{ milliseconds.split("")[2] }}</div>
      </div>
    </div>
  </section>
</template>

<script>
const timerTarget = new Date(Date.UTC(2021, 10, 26, 20, 0, 0, 0));

export default {
  name: "Countdown",
  components: {},
  data() {
    return {
      showTimer: true,
      eventDate: undefined,
      interval: undefined,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    };
  },
  created() {
    clearInterval(this.interval);
    this.interval = setInterval(this.updateTimer);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    updateTimer() {
      const duration = timerTarget - new Date();
      this.days = (
        "000" + parseInt((duration / (1000 * 60 * 60 * 24)) % 365)
      ).slice(-3);
      this.hours = ("00" + parseInt((duration / (1000 * 60 * 60)) % 24)).slice(
        -2
      );
      this.minutes = ("00" + parseInt((duration / (1000 * 60)) % 60)).slice(-2);
      this.seconds = ("00" + parseInt((duration / 1000) % 60)).slice(-2);
      this.milliseconds = ("000" + parseInt(duration % 1000)).slice(-3);
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nixie+One&display=swap");

#clock {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 110px;
  text-align: center;
  vertical-align: top;
  overflow: hidden;

  #grill {
    position: absolute;
    z-index: 100;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAANCAYAAACtpZ5jAAAAu0lEQVQ4jaVUCQ7DIAxLOP//W8ShTHTAOjAT1SJVrcBxTBzKIkIomBlvTGGMoZQSz+sKga21g1REGD3e+2s/5wwLQuIO7skoQghDpVJqOd3Sigrqa1XZ70Z8WjZjF8VPSJuQrwKjoHNuLMQYB7iUckR8J61GjkJVHFB9TErN7NlEvh+ht0FrXQ18rLh9v9+zeTszdmGMkVIKzTlw3GgzQigQKSTugN2NPC0OFe9GCIiAaq/cf/8VcDSJ6AXwQXsctMi/NgAAAABJRU5ErkJggg==");
    background-repeat: repeat;
    background-size: 10px;
    opacity: 0.5;
    height: 110px;
    width: 100%;
  }
  .digit-wrapper {
    position: relative;
    display: inline-block;

    .back-digit::after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 25;
      font-family: "Nixie One", cursive;
      // font-weight: bold;
      font-size: 100px;
      line-height: 100px;
      width: 60px;
      height: 110px;
      margin: 0 10px;
      text-align: center;
      vertical-align: bottom;
      color: rgba(64, 48, 19, 1);
      text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
      content: "8";
    }

    .digit {
      // visibility: hidden;
      position: relative;
      padding-right: 2px;
      z-index: 50;
      background: rgba(208, 164, 59, 0.3);
      color: rgba(255, 194, 76, 1);
      font-family: "Nixie One", cursive;
      font-size: 100px;
      text-shadow: 0px 0px 15px rgba(252, 108, 30, 1);
      line-height: 100px;
      width: 60px;
      height: 110px;
      margin: 0 10px;
      text-align: center;
      vertical-align: bottom;
      box-shadow: 0px 0px 25px 0px rgba(208, 164, 59, 0.75);
    }
  }
  .seperator {
    display: inline-block;
    background: rgba(208, 164, 59, 0.3);
    color: rgba(255, 194, 76, 1);
    font-family: "Nixie One", cursive;
    font-size: 100px;
    text-shadow: 0px 0px 15px rgba(252, 108, 30, 1);
    line-height: 100px;
    width: 60px;
    height: 110px;
    margin: 0 10px;
    text-align: center;
    vertical-align: bottom;
    box-shadow: 0px 0px 25px 0px rgba(208, 164, 59, 0.75);
    width: 30px;
    background: rgba(208, 164, 59, 0.3);
  }
}
</style>
