declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.woff2";

declare module "*.png" {
  const content: any;
  export default content;
}
