import { Module } from '@nestjs/common';
import { OffresService } from './offres.service';
import { OffresController } from './offres.controller';

@Module({
  controllers: [OffresController],
  providers: [OffresService],
})
export class OffresModule {}
