import { Controller, Get, Render } from "@nestjs/common";

@Controller("/products")
export class ProductsController {
  static products: any = [
    {
      id: "1",
      name: "TV",
      description: "Best TV",
      image: "game.png",
      price: "1000",
    },
    {
      id: "2",
      name: "iPhone",
      description: "Best iPhone",
      image: "safe.png",
      price: "999",
    },
    {
      id: "3",
      name: "Chromecast",
      description: "Best Chromecast",
      image: "submarine.png",
      price: "30",
    },
    {
      id: "4",
      name: "Glasses",
      description: "Best Glasses",
      image: "game.png",
      price: "100",
    },
  ];

  @Get("/")
  @Render("products/index")
  index() {
    const viewData = [];
    viewData["title"] = "Products - Online Store";
    viewData["subtitle"] = "List of products";
    viewData["products"] = ProductsController.products;
    return {
      viewData: viewData,
    };
  }
}
