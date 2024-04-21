import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OffresService } from './offres.service';
import { CreateOffreDto } from './dto/create-offre.dto';
import { UpdateOffreDto } from './dto/update-offre.dto';

@Controller('offres')
export class OffresController {
  constructor(private readonly offresService: OffresService) {}

  @Post()
  create(@Body() createOffreDto: CreateOffreDto) {
    return this.offresService.create(createOffreDto);
  }

  @Get()
  findAll() {
    return this.offresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOffreDto: UpdateOffreDto) {
    return this.offresService.update(+id, updateOffreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offresService.remove(+id);
  }
}
