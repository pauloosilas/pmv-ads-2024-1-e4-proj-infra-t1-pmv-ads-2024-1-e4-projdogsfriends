import { Module } from '@nestjs/common';
import { ImagemService } from './imagem.service';
import { ImagemController } from './imagem.controller';
import { PrismaService } from '../prisma/service/prisma.service';

@Module({
  controllers: [ImagemController],
  providers: [ImagemService, PrismaService],
})
export class ImagemModule {}
