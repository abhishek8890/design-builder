export default function updateValue(tag: string, value: any, detail: any) {
  let componentDetail: any;
    componentDetail = detail.components(tag);
  return componentDetail;
}
