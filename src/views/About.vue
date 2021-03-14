<template>
  <div class="about">
    <div class="banner">
      <img src="../assets/banner.gif">
    </div>
    <div class="text_field">
      <h1>{{title1}}</h1>
      <h3>{{message1}}</h3>
      <h1>{{title2}}</h1>
      <h3>{{message2}}</h3>
      <br>
      <h3>{{message3}}</h3>
    </div>
    <div class="logo">
      <img src="../assets/icpep_logo.gif">
    </div>
    
    <div class="facts">
      <h1>{{fact1}}</h1>
    </div>
    <div class="facts">
      <h1>{{fact2}}</h1>
    </div>
    <div class="facts">
      <h1>{{fact3}}</h1>
    </div>
    
  </div>
</template>
<script>
export default {
    name:"About",
    data(){
        return{
            title1:"VISION",
            message1:"The Organization sees itself as the catalyst to the academic and social needs of computer engineering students of the institute.",
            title2:"MISSION",
            message2:"The Organization shall provide the academic needs of computer engineering students in the Institute through the use of collaborative learning",
            message3:"The Organization shall provide relevant content and projects to the members without resorting to the use of illegitimate means or promoting unethical practices in attaining a better academic standing.",
            fact1: "The nodes at the end of circuit paths connecting to the pin ports of the process represents the core values of the organization.",
            fact2: "The circuit path connecting the nodes to the processor represent the attachment of the core values to the organization. ",
            fact3: "The 4 lines connecting the processor to the top horizontal line represent the governing bodies of the organization: faculty advisor, board of directors, executive committee, committee chairs.",

        }
    },
}
</script>
<style lang="scss" scoped>
.about{
  margin: 0;
  width:100%;
  background-color: #E5E5E5
}

.banner{
  
  img{
    margin: 0;
    width: 100%;
    height: auto;
  }
}
.text_field{
  text-align: center;
  h1{
    color: #F76D6D;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 5rem;
    letter-spacing: 0.25em;
    padding: 0.75em;
  }

  h3{
    color: black;
    font-family: 'Ubuntu';
    font-weight: 400;
    font-size: 2rem;
    margin-left: 15rem;
    margin-right: 15rem;
    line-height: 3rem;
  }
}
.logo{
  img{
    width: 85%;
    margin-top: 3em;
    margin-bottom:3em;
  }
}
.facts{
  text-align: left;
  margin-left: 12.5em;
  margin-right: 7.5em;
  display: list-item;
  list-style-image: url('../assets/bullet.png');
  padding-left: 2em;
  padding-right: 2em;
  h1{
    
    font-size: 1.5rem;
    font-family: "Ubuntu";
    font-weight: 400;
  }

}


</style>