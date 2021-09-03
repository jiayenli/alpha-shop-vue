<template >
  <div class="checkout"  index="5" role="dialog">
    <div class="modal">
      <div class="cancel" @click.stop.prevent="closeModal"><i class="fas fa-times-circle"></i></div>
      <p class="mt-5">{{user}}</p>
    </div>
</div>
</template>

<style lang="scss" scoped>
.checkout {
  height:100%;
   width:100%;
   display: flex;
   align-items: center;
   z-index:5;
  
  position: absolute;
  .modal {
    border: white solid 5px;
    width:30%;
    background-color: #2a2a2a;
    margin: auto;
    color:white;
    border-radius:20px;
    padding: 10px;
    .cancel {
      cursor: pointer;
      
    }
  }
  };

</style>

<script>
export default {
  props: {
    user: {
      type: Object,
      required:true
    }
  },
  methods: {
    closeModal() {
      this.$emit("final-step-submit");
    }
  }
  
}
</script>