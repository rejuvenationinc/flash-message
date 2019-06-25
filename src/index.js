import FlashMessageComponent from './flash_message.vue';
import Bus from './bus'
import FlashMixing from './flash_mixing'
import Publisher from './publisher'

export const FlashMessage = {
  install(Vue, options){
    console.log("loading!!!!")
    const Publish = new Publisher();

    Vue.FlashMessage = Vue.prototype.$flashMessage = Publish;

    Bus.init(Vue);
    Vue.mixin(FlashMixing);

    let flashOptions = Object.assign({}, {
      duration: 500,
      close: true,
      transition: ''
    }, options);


    Vue.prototype.$properties = flashOptions;
    const Component = Vue.extend(FlashMessageComponent);
    new Component().$mount('#flash-message');

    // const FlashComponent = Vue.component('flash-message', FlashMessage, {
    //   props: ['title'],
    // });
    //
    //  new Vue({
    //   el: 'flash-message'
    // })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.FlashMessage = FlashMessage;
}

export default { FlashMessage }
