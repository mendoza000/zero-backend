import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
  CreateProductDto,
  CreateProductVariantDto,
} from './dto/create-product.dto';
import {
  PatchProductDto,
  PatchProductVariantDto,
} from './dto/patch-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getAll() {
    return this.prisma.product.findMany();
  }

  @Get(':id')
  async getOne(id: string) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  // Get variants for a product
  @Get(':id/variants')
  async getVariants(@Param('id') id: string) {
    return this.prisma.productVariant.findMany({
      where: { productId: id },
    });
  }

  // Create a product
  @Post()
  @UsePipes(new ValidationPipe())
  async createProduct(@Body() product: CreateProductDto) {
    return this.prisma.product.create({
      data: product,
    });
  }

  // Create a variant for a product
  @Post(':id/variants')
  @UsePipes(new ValidationPipe())
  async createVariant(
    @Body() variant: CreateProductVariantDto,
    @Param('id') id: string,
  ) {
    return this.prisma.productVariant.create({
      data: {
        ...variant,
        productId: id,
      },
    });
  }

  // Update a product
  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateProduct(
    @Body() product: PatchProductDto,
    @Param('id') id: string,
  ) {
    return this.prisma.product.update({
      where: { id },
      data: product,
    });
  }

  // Update a product variant
  @Patch(':id/variants/:variantId')
  @UsePipes(new ValidationPipe())
  async updateVariant(
    @Body() variant: PatchProductVariantDto,
    @Param('id') id: string,
    @Param('variantId') variantId: string,
  ) {
    return this.prisma.productVariant.update({
      where: { id: variantId, productId: id },
      data: variant,
    });
  }

  // Delete a product
  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return this.prisma.product.delete({
      where: { id },
    });
  }

  // Delete a product variant
  @Delete(':id/variants/:variantId')
  async deleteVariant(
    @Param('id') id: string,
    @Param('variantId') variantId: string,
  ) {
    return this.prisma.productVariant.delete({
      where: { id: variantId, productId: id },
    });
  }
}
