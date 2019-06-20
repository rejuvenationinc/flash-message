import FlashMessage from './flash_message.vue';
import Bus from './bus'
import FlashMixing from './flash_mixing'

export default {
  install(Vue, options){
    Bus.init(Vue);
    Vue.mixin(FlashMixing)
    Vue.component('flash-message', FlashMessage);
    new Vue({
      el: 'flash-message'
    })
  }
}
