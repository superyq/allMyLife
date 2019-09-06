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
    const { name, title } = opts;

    this.path = `/system/${name}`;
    this.name = name;
    this.meta.title = title || name;

    this.component = () => import(`@/views/${name}`);
  }
}

