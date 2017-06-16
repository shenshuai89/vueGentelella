<template>
  <div id="generalform" class="row">
    <Form-Design></Form-Design>
    <Form-Button></Form-Button>
    <Form-Icon></Form-Icon>
    <Form-Grid></Form-Grid>
    <Form-Registry></Form-Registry>
    <Form-Button></Form-Button>
  </div>
</template>
<script type="text/ecmascript-6">
  import FormDesign from "../child/FormDesign.vue";
  import FormButton from "../child/FormButton.vue";
  import FormIcon from "../child/FormIcon.vue";
  import FormGrid from "../child/FormGrid.vue";
  import FormRegistry from "../child/FormRegistry.vue";
  export default{
    data(){
      return {
        show: true,
        deleteProp: true,
      }
    },
    methods: {
      toggleShow(){
        return this.show = !this.show;
      },
      deleteAll(){
        return this.deleteProp = !this.deleteProp;
      }
    },
    components: {FormDesign, FormButton, FormIcon, FormGrid, FormRegistry}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

  &.fade-enter-active, &.fade-leave-active
    opacity: 1
    transition: all 0.5s

  &.fade-enter, &.fade-leave-active
    opacity: 0
</style>
