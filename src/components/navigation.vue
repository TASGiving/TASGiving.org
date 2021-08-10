<template>
  <b-navbar toggleable="md" type="dark" class="whole-nav">
    <b-navbar-toggle target="nav-text-collapse">
      <b-navbar-toggle target="nav-text-collapse" disabled /> Links
    </b-navbar-toggle>
    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav class="top-navbar-nav">
        <b-nav-item to="/">
          Home
        </b-nav-item>
        <b-nav-item to="/history/">
          History
        </b-nav-item>
        <b-nav-item href="https://www.nami.org/" target="_blank" rel="noopener">
          NAMI
        </b-nav-item>
        <b-nav-item
          href="http://s.tasgiving.org/"
          target="_blank"
          rel="noopener"
        >
          Submit a run
        </b-nav-item>
        <b-nav-item
          v-if="phase === 'live'"
          href="https://horaro.org/tasgiving2020/schedule"
          target="_blank"
          rel="noopener"
        >
          Schedule
        </b-nav-item>
        <b-nav-item
          v-if="phase === 'live'"
          href="https://tracker.tasbot.net/tracker/ui/donate/TASGiving2020"
        >
          Donate
        </b-nav-item>
        <b-nav-item
          v-if="phase === 'live'"
          href="https://tracker.tasbot.net/tracker/event/TASGiving2020"
        >
          Donation tracker
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    phase: {
      type: String,
      default: "hype"
    }
  }
};
</script>

<style lang="scss" scoped>
nav.navbar.whole-nav {
  text-transform: uppercase;
  @media (max-width: 992px) {
    justify-content: center;
    text-align: center;
  }
  ul.navbar-nav.top-navbar-nav {
    margin-left: auto;
    margin-right: auto;

    li.nav-item {
      margin-right: 10px;
      white-space: nowrap;
    }
    a.nav-link {
      font-weight: 600;
      letter-spacing: 2px;
      color: rgba(255, 255, 255, 0.7);
    }
    a.nav-link:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
}
</style>
