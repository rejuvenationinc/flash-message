<template>
  <div class="alert" v-bind:class="[type]"role="alert" v-show="show">
    <button type="button" class="close" v-on:click="alert">&times;</button>
      {{ body }}
  </div>
</template>

<script>

import Bus from './bus'
export default {
  props: ['message'],
  data() {
    return {
      show : false,
      body : '',
      type: ''
    }
  },

  created() {
    Bus.$on('flash', (message, type) => this.flash(message, type));
    Bus.$on('flashSuccess', (message, type) => this.flash(message, 'success'));
    Bus.$on('flashError', (message, type) => this.flash(message, 'error'));
    Bus.$on('flashAlert', (message, type) => this.flash(message, 'alert'));
    Bus.$on('flashNotice', (message, type) => this.flash(message, 'notice'));
  },

  methods: {
    flash(message, type) {
      this.show = true;
      this.body = message;
      this.type = this.alertClass(type);
      setTimeout(() => {
        this.hide();
      }, this.$properties.duration)
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

    alert(){
      this.hide();
    },

    hide() {
      this.show = false;
    }
  }
}
</script>

<style>
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
</style>
