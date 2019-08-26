import cArticalCard from "./c-artical-card.vue";
import cArticalList from "./c-artical-list.vue";
import cArticalCardImage from "./c-artical-card-image.vue";
import cHeader from "./c-header.vue";

const diyComponents = [cArticalCard, cArticalList, cArticalCardImage, cHeader];

export default vue => {
  diyComponents.forEach(item => {
    vue.component(item.name, item);
  });
};
