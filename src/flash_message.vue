<template>
  <transition v-bind:name="this.$properties.transition" v-show="this.$properties.transition">
    <div class="alert" v-bind:class="[type]" role="alert" v-show="show">
      <button type="button" class="close" v-if="this.$properties.close" v-on:click="alert" >&times;</button>
        {{ body }}
    </div>
  </transition>
</template>

<script>

import Bus from './bus'
export default {
  name: 'flash-message',
  props: ['message'],
  data() {
    return {
      show : false,
      body : '',
      type: '',
      transition: '',
      close: ''
    }
  },

  created() {
    Bus.$on('flash', (message, type) => this.flash(message, type));
    Bus.$on('flashSuccess', (message) => this.flash(message, 'success'));
    Bus.$on('flashError', (message) => this.flash(message, 'error'));
    Bus.$on('flashAlert', (message) => this.flash(message, 'alert'));
    Bus.$on('flashNotice', (message) => this.flash(message, 'notice'));
  },

  methods: {
    flash(message, type) {
      this.show = true;
      this.body = message;
      this.type = this.alertClass(type);
      if(this.$properties.duration){
       this.duration();
      }
    },

    alertClass(type) {
    let classes = {
      error: 'alert-danger',
      alert: 'alert-warning',
      notice: 'alert-info',
      success: 'alert-success'
    };
     return classes[type]
    },

    duration(){
      setTimeout(() => {
        this.hide();
      }, this.$properties.duration)
    },

    alert(){
      this.hide();
    },

    hide() {
      this.show = false;
    }
  }
}
</script>

<style scoped>
  .alert{
    padding: 8px 35px 8px 14px;
    margin-bottom: 20px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    background-color: #fcf8e3;
    border: 1px solid #fbeed5;
    border-radius: 4px;
  }

  .alert-success{
    background-color: #dff0d8;
    border-color: #d6e9c6;
    color: #468847;
  }

  .alert-danger, .alert-error{
    background-color: #f2dede;
    border-color: #eed3d7;
    color: #b94a48
  }

  .alert-warning{
    color: #8a6d3b;
    background-color: #fcf8e3;
    border-color: #faebcc;
  }

  .alert-info {
    color: #31708f;
    background-color: #d9edf7;
    border-color: #bce8f1;
  }

  .close{
    float: right;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

</style>
