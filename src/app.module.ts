import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductsController } from "./products/products.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./models/product.entity";
import { ProductService } from "./Products/products.service";

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([Product])],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductService],
})
export class AppModule {}
