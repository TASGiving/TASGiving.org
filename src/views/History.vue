<template>
  <main>
    <b-container class="boxes">
      <b-row class="justify-content-md-center">
        <b-col md="6">
          <b-card class="history-card" text-variant="white">
            <b-card-title class="text-center">
              History
            </b-card-title>
            <small>
              Look how well we did at previous events!
            </small>
            <HistoryComponent />
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import HistoryComponent from "../components/history";
export default {
  name: "History",
  components: {
    HistoryComponent
  },
  props: {
    phase: {
      type: String,
      default: "hype"
    }
  },
  methods: {
    openLinkNewTab(url) {
      let win = window.open(url, "_blank");
      win.focus();
    }
  }
};
</script>

<style scoped lang="scss">
main {
  margin: 0 auto 30px auto;
  width: 100%;
}
.boxes {
  margin-top: 3em;
}
.card {
  border: 0;
}
.card {
  font-size: 18px;
  margin-bottom: 4em;
}
.card.history-card {
  background-color: rgb(255, 172, 158);
  border-radius: 1.5rem;
}
img.childsplay-controller {
  width: 100px;
}
.benefiting-card::after {
  content: "";
  // background-image: url("../assets/nami-logo-carousel.png");
  background-size: 65px;
  display: inline-block;
  position: absolute;
  width: 100%;
  bottom: -55px;
  height: 60px;
  background-repeat: no-repeat;
  background-position-x: center;
}
.nami-logo {
  display: block;
  width: 70%;
  margin: 2em auto;
}
.history-card {
  h4 {
    margin: 0;
  }
  small {
    text-align: center;
    display: block;
    margin-bottom: 1em;
  }
}
.card-title {
  font-weight: 600;
}
.history-card::after {
  content: "\f1da";
  font-family: "Font Awesome 5 Free";
  display: inline-block;
  padding-right: 3px;
  vertical-align: middle;
  font-weight: 900;
  font-size: 60px;
  position: absolute;
  bottom: -62px;
  text-align: center;
  width: 100%;
  color: rgb(255, 172, 158);
}
a:link {
  color: #ddd;
}
a:visited {
  color: #ddd;
}
a:hover {
  color: #fafafa;
}
</style>
