export default class systemModel {
  path = "";
  name = "";
  component = null;

  meta = {
    isSystem: true,
    isTab: true,
    isScroll: true,
    title: ""
  };

  constructor(opts = {}) {
    const { name, title, upper = "" } = opts;

    this.name = name;
    this.meta.title = title || name;

    if (upper) {
      this.path = `/system/${upper}/${name}`;
      this.component = () => import(`@/views/${upper}/${name}`);
    } else {
      this.path = `/system/${name}`;
      this.component = () => import(`@/views/${name}`);
    }
  }
}
