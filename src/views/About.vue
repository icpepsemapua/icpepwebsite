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
      <ul>
        <li v-for="fact in facts" v-bind:key="fact">{{fact}}</li>
      </ul>
    </div>
    <div class="FAQ">
      <div class="label">
        <h1>FAQs</h1>
      </div>
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
            facts: ["The nodes at the end of circuit paths connecting to the pin ports of the process represents the core values of the organization.",
                    "The circuit path connecting the nodes to the processor represent the attachment of the core values to the organization.",
                    "The 4 lines connecting the processor to the top horizontal line represent the governing bodies of the organization: faculty advisor, board of directors, executive committee, committee chairs.",
                    "The 1 line connecting the processor to the bottom horizontal line represents the members of the organization.",
                    "The two horizontal lines connect the whole system as a closed circuit.",
                    "The top horizontal line represents logic high positive power line.",
                    "The bottom horizontal line represents logic low power line. Following the electron flow of current, the members are connected to the GND line because power comes first from the negative side towards the positive side. You have to be a member first if you want to reach the official positions.",
                    "The processor chip is an embedded system that represents the organization, composed of different people of different skills, working together to uplift, and accomplish the mission of the organization.",
                    "The processor chip design resembles somewhat of a tree. We as technologist should aim for development of greener technology. And that at the 'roots' of the tree, the support of the organization, are the members of the organization."
                    ]
            
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
  margin-left: 7.5em;
  margin-right: 7.5em;
  list-style-image: url('../assets/bullet.png');
  padding-left: 2em;
  padding-right: 2em;
  li{
    margin-bottom: 1rem;
    padding-left: 1em;
    padding-bottom: 0.5em;
    font-size: 1.5rem;
    font-family: "Ubuntu";
    font-weight: 400;
  }
}

.FAQ{
  background-image: url("../assets/half_banner.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 22.5em;
  width:100%;
  text-align: left;
  margin:0;
  .label{
    height: 10em;
    width: 10em;
    h1{
      font-family: 'VT323', monospace;
      font-weight: 400;
      margin:0 auto;
      color: white;
      font-size: 10rem;
      text-align: left;
      padding: 5rem;
    }
    
    -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: 0.2rem;
    
  }
  
}


</style>