type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

declare module "*.yaml" {
  // export default JSONValue;
  const data: any;
  export default data;
}
