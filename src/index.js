import FlashMessage from './flash_message.vue';
import Bus from './bus'
import FlashMixing from './flash_mixing'


export default {
  
  install(Vue, options){
    Bus.init(Vue);
    Vue.mixin(FlashMixing);

    let flashOptions = Object.assign({}, {
      duration: 500,
    }, options);

    Vue.prototype.$properties = flashOptions;

    const Component = Vue.extend(FlashMessage);
    new Component().$mount('flash-message');


    // const FlashComponent = Vue.component('flash-message', FlashMessage, {
    //   props: ['title'],
    // });
    // debugger;
    //
    //  new Vue({
    //   el: 'flash-message'
    // })
  }
}
