import Bus from './bus'
export default {
    methods: {
      flashMessage(message, type){
        Bus.$emit('flash', message, type);
      },
      flashSuccess(message, type){
        Bus.$emit('flashSuccess', message, type);
      },
      flashError(message, type){
        Bus.$emit('flashError', message, type);
      },
      flashAlert(message, type){
        Bus.$emit('flashAlert', message, type);
      },
      flashNotice(message, type){
        Bus.$emit('flashNotice', message, type);
      }
    }
  }
