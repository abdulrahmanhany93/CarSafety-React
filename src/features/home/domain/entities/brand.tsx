 class Brand {
  public readonly id: string;
  public readonly name: string;
  public readonly image: string;

   constructor({
    id,
    name,
    image,
  }: {
    id: string;
    name: string;
    image: string;
  }) {
    this.id = id;
    this.name = name;
    this.image = image;
  }

  public toMap(): Record<string, string> {
    return {
      id: this.id,
      name: this.name,
      image: this.image,
    };
  }
}
export default Brand;