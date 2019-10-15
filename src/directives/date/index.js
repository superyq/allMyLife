export default {
  name: 'date',
  bind(el, binding) {
    console.log("1:", el);
  },
  inserted() {
    console.log(2);
  },
  update() {
    console.log(3);
  },
  componentUpdated() {
    console.log(4);
  },
  unbind() {
    console.log(5);
  }
};
