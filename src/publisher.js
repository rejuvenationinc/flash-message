
import Bus from './bus';
const Publisher  = function()
{
  this.message = (message, type) => {
    Bus.$emit('flash', message, type);
  };

  this.success = (message, type) => {
    Bus.$emit('flashSuccess', message, type);
  };

  this.error = (message, type) => {
    Bus.$emit('flashError', message, type);
  },

  this.alert = (message, type) => {
    Bus.$emit('flashAlert', message, type);
  },

  this.notice = (message, type) => {
    Bus.$emit('flashNotice', message, type);
  }
}
export default Publisher;
