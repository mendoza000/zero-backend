import {
  CreateProductDto,
  CreateProductVariantDto,
} from './create-product.dto';
import { PartialType } from '@nestjs/swagger';

export class PatchProductDto extends PartialType(CreateProductDto) {}

export class PatchProductVariantDto extends PartialType(
  CreateProductVariantDto,
) {}
