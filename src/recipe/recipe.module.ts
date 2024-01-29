// src/recipes/recipes.module.ts

import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RecipeController],
  providers: [RecipeService]
})
export class RecipeModule {}