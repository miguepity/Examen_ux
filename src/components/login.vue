<template>
  <form>
    <div class="container">
        <div class="row">
          <div class="col s6 m6 l5 izquierdo">

          <label><b>Nombre Completo</b></label>
          <input type="text" placeholder="Nombre compelto" v-model="hechizero.nombre">

          <label><b>Usuario</b></label>
          <input type="text"placeholder="Usuario" v-model="hechizero.username">

          <label><b>Contraseña</b></label>
          <input type="password" placeholder="Contraseña" v-model="hechizero.password">

          <label><b>Ocupacion</b></label>
          <input type="text" placeholder="Ocupacion" v-model="hechizero.ocupacion">

          <label><b>Fecha de naciemiento</b></label>
          <input type="text" placeholder="fecha de naciemiento" v-model="hechizero.nacimiento">

          <label><b>Pais de origen</b></label>
          <input type="text" placeholder="Pais de origen" v-model="hechizero.pais">

          <label><b>Creencias Religiosas</b></label>
          <input type="text" placeholder="Creencias Religiosas" v-model="hechizero.creencia">
           <button class="btn" v-on:click="agregar">Agregar</button>
        </div>
        <div class="col s6 m6 l5 derecha">

          <label><b>Usuario</b></label>
          <input class="username" type="text" placeholder="Ingrese Usuario" required v-model="this.user.username">

          <label><b>Contraseña</b></label>
          <input class="pass" type="password" placeholder="Ingrese Contraseña" required v-model="this.user.password">


          <div class="btn1 col s12 m6">
            <a class="waves-effect waves-light btn"  @click="clickLogin">Log in</a>
          </div>
        </div>
      </div>
    </div>

  </form>

</template>

<script>
export default {
  data(){
    return{
      user:{
        username:'',
        password:'',
      },

      hechizero:{
        nombre:'',
        username:'',
        password:'',
        ocupacion:'',
        nacimiento:'',
        pais:'',
        creencia:'',
        hechizos:[

        ]
      }
    }
  },
  methods:{
    agregar:function(){
      if(this.hechizero.nombre==="" || this.hechizero.username===""||this.hechizero.password===""||this.hechizero.ocupacion===""||this.hechizero.nacimiento==="" || this.hechizero.pais===""|| this.hechizero.creencia===""){
        this.$http.post("http://localhost:8000/hechizero/create",this.hechizero).then((response)=>{
        alert("No deje campos vacios");
      }else{
          if(response.body.success===true){
            alert("Hechizero agregado correctamente");
          }else{
            alert("No se agrego el hechizero");
          }
        });
      }
    },
    clickLogin: function(){
      this.$http.get("http://localhost:8000/hechizero/login/"+this.user).then((response)=>{
        if(response.body.success===true){
          this.$router.push("/principal");
        }else{
          alert("usuario o contraseña incorrecta!!");
        }
      });
    }
  }
}
</script>

<style scope>
form{
  width: 100%;
  height: 100%;
}

input[type=text]::-webkit-input-placeholder, input[type=password]::-webkit-input-placeholder {
  color: black;
}

input[type=text], input[type=password]{
  width: 100%;
  padding: 2% 4%;
  margin: 2% 0;
  display: inline-block;
  box-sizing: border-box;
  background-color: white;
}

input[type=text]{
  margin-bottom: 10%;
}

.btn1{
  padding-left: 0%;
}

.btn{
  background-color: #4CAF50;
  color: white;
  padding: 2% 15%;
  margin: 2% 0;
  border: none;
  cursor: pointer;
  height: 18%;
}

.btn:hover {
  opacity: 0.8;
}

.derecha{
  background-color: rgba(15, 14, 15,0.2);
  margin-top: 5%;
  padding-top: 2%;
  padding-left: 6%;
  padding-right: 12%;
  border-right-width: 5%;
  padding-bottom: 8%;
  width: 40%;
  margin-left: 0%;
  border-radius: 6px 6px 6px 6px;
}

.izquierdo{
  background-color: rgba(15, 14, 15,0.2);
  margin-top: 0%;
  padding-top: 2%;
  padding-left: 12%;
  padding-right: 8%;
  border-right-width: 5%;
  padding-bottom: 8%;
  width: 40%;
  margin-left: 55%;
  border-radius: 6px 6px 6px 6px;
}

.pass{
  padding-left: 25%;
}

.psw a{
  padding-left: 10%;
  font-size: 120%;
}

form label{
  color: black;
  font-size: 139%;
}
</style>
