<template>
  <div id="nav">
    <img src="./assets/icpep_logo_static.png">
    <h3>ICpEP.SE-Mapua</h3>
    <div class="links">
      <router-link class='link_item' to="/">HOME</router-link> 
      <router-link class='link_item' to="/team">TEAM</router-link> 
      <router-link class='link_item' to="/news">NEWS</router-link> 
      <router-link class='link_item' to="/events">EVENTS</router-link>
      <router-link class='link_item' to="/about">ABOUT</router-link> 
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
#app { 
  font-family: Avenir, Helvetica, Arial, sans-serif,'Roboto','Ubuntu','VT323', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  text-align: left;
  background: rgba(0,0,0,0.56);
  display: flex;
  align-items: center;
  position: sticky;
  height: 85px;
  margin-bottom: -85px;
  top: 0;
  left: 0;
  right: 0;
  
  .links{
    flex:1;
    justify-content: space-around;
    display: flex;
  }
  .link_item{
    display:inline-block;
  }

 

  img{
    height: 67px;
    width: 67px;
  }

  h3{
    display: inline;
    color: #FFFFFF;
    padding: 1px;
    font-size: 2rem;
    font-family: 'Ubuntu';
    font-weight: 300;
  }
  a {
    //font-weight: bold;
    color: #C8BCBC;
    padding: 1px;
    text-align: center;
    font-size: 2rem;
    font-family: 'Ubuntu';
    font-weight: 400;

    &.router-link-exact-active {
      color:#FFFFFF;

    }
  }
}
</style>
