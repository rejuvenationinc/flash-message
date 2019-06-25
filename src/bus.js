class Bus{
  constructor(){
    this.vue = null;
  }

  init(Vue){
    this.vue = new Vue();
  }

  $emit(event, message, type){
    if(this.vue){
      this.vue.$emit(event, message, type);
    }
  }

  $on(event, callback){
    if(this.vue){
        this.vue.$on(event, callback);
    }
  }
}
export default new Bus();
