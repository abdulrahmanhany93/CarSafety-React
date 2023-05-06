interface IBrandWebServices {
  getSections(brandId:string): Promise<any>;
}
export default IBrandWebServices;
