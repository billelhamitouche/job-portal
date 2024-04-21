import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffresModule } from './offres/offres.module';

@Module({
  imports: [OffresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
