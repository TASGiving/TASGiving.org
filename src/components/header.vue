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
            src="../assets/logo-cutout.png"
            alt="Logo of TASGiving"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h1>TASGiving</h1>
          <span>
            TASBot's charity marathon in 2020 showcased 3 days of speedruns,
            TAS'es, randomizer races, and more!
            <br />
            All donations, subscriptions, and bit proceeds benefited NAMI.
          </span>
          <br />
          <!-- <span>
            November 27-29th. Live on
            <a href="https://twitch.tv/dwangoac">twitch.tv/dwangoac</a>
          </span> -->
          <span>
            We are still determining when TASGiving 2021 will be. Please check
            back later!
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
  background-color: #ff742a;
  background: linear-gradient(#ff8746, #ff742a);
  color: #eee;
  padding-bottom: 1em;
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
