<template>
  <div>
    <router-link to="/crear">
    <button type="button" name="button">Agregar Hechizo</button>
    </router-link>
    <router-link to="/modificar">
    <button type="button" name="button">Modificar Hechizo</button>
    </router-link>
    <router-link to="/eliminar">
    <button type="button" name="button">Eliminar Hechizo</button>
    </router-link>
    <input type="text" placeholder="Buscar Hechizo" v-model="hechizo">
    <button type="button" name="button" v-on:click="mostrar">buscar</button>
</div>

</template>

<script>
export default {
  data(){
    return{
      hechizo:''
    }
  },
  methods:{
    mostrar:function(){
      this.$http.get("http://localhost:8000/hechizo/hechizo/"+hechizo).then((response)=>{
        alert(response.body);
      });
    }
  }
}
</script>

<style>
</style>
