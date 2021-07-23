<template>
  <header>
    <b-container>
      <b-row>
        <b-col lg="12">
          <Navigation :phase="phase" />
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12" class="logo-container">
          <img
            class="tasgiving-logo"
            src="../assets/avatar.png"
            alt="Logo of TASGiving"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h1>TASGiving</h1>
          <span>
            TASGiving is a 48 hour charity marathon starting on November 26th at
            12:00pm PT, and running until November 28th at 12:00pm PT.
            <br />
            All donations, subscriptions, and bit proceeds benefit NAMI.
          </span>
          <br />
          <span>
            November 26-28th. Live on
            <a href="https://twitch.tv/dwangoac">twitch.tv/dwangoac</a>
          </span>
        </b-col>
      </b-row>
      <b-row v-if="phase === 'live'">
        <b-col>
          <b-button
            pill
            variant="danger"
            block
            href="https://tracker.tasbot.net/tracker/ui/donate/TASGiving2020"
            class="wide"
          >
            Donate now!
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
import Navigation from "./navigation.vue";

export default {
  name: "Header",
  components: { Navigation },
  props: {
    phase: {
      type: String,
      default: "hype"
    }
  }
};
</script>

<style scoped lang="scss">
header {
  background-color: #666666;
  background-image: url("../assets/bkg1.png");
  background-position-y: 60%;
  background-size: 100%;
  color: #eee;
  padding-bottom: 1em;
  // border: 14px solid rgba(255, 116, 42, 0.5);

  h1,
  h3 {
    text-align: center;
    margin: 0;
  }
  h1 {
    font-size: 4em;
    font-weight: 700;
    @media (max-width: 576px) {
      font-size: 2em;
    }
  }
  span {
    font-size: 1em;
    display: block;
    text-align: center;
  }
  a {
    font-weight: 700;
  }
  .wide {
    width: 100%;
  }
}
.logo-container {
  display: flex;
  margin-top: 1em;
  justify-content: center;
}
.tasgiving-logo {
  height: 200px;
}
</style>
