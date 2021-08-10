<template>
  <main>
    <b-container fluid class="boxes">
      <b-row class="justify-content-md-center text-center">
        <b-col md="3">
          <img
            class="tasgiving-logo"
            src="../assets/404.png"
            alt="Logo of TASGiving: 404 Error"
          />
          <h2 class="errorText">We can't find that?</h2>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<style scoped lang="scss">
main {
  margin: 0 auto 30px auto;
  width: 100%;
  .boxes {
    margin-top: 3em;
    .errorText {
      padding: 20px;
      font-weight: bold;
      color: #ff742a;
    }
  }
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
.tasgiving-logo {
  height: 200px;
}
</style>
