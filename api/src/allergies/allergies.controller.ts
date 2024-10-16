import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AllergiesService } from './allergies.service';
import { CreateAllergiesInput } from './dto/create-allergies.dto';
import { UpdateAllergiesInput } from './dto/update-allergies.dto';
import { Allergies } from './entities/allergies.entity';

@Controller('allergies')
export class AllergiesController {
  constructor(private readonly allergiesService: AllergiesService) { }

  @Post(':id')
  createAllergies(@Param('id') patientId: string, @Body() createAllergiesInput: CreateAllergiesInput) {
    return this.allergiesService.createAllergies(patientId, createAllergiesInput);
  }
  @Post('get/all')
  getAllAllergies() {
    return this.allergiesService.getAllAllergies();
  }
  @Post('list/:id')
  findAllergiesByPatient(
    @Param('id') patientId: string,
<<<<<<< HEAD
    @Body() body: { term: string, page: number, sortBy: string, sortOrder: 'ASC' | 'DESC' , perPage:number }
  ) {
    const { term = "", page, sortBy, sortOrder, perPage } = body;
    return this.allergiesService.getAllAllergiesByPatient(patientId, term, page, sortBy, sortOrder,perPage);
=======
    @Body() body: { term: string, page: number, sortBy: string, sortOrder: 'ASC' | 'DESC' , perPage:number ,    filterSeverity: string[];
    }
  ) {
    const { term = "", page, sortBy, sortOrder, perPage, filterSeverity } = body;
    return this.allergiesService.getAllAllergiesByPatient(patientId, term, page, sortBy, sortOrder,perPage, filterSeverity);
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  }


  @Patch('update/:id')
  updateAllergies(@Param('id') id: string, @Body() updateAllergiesInput: UpdateAllergiesInput) {
    return this.allergiesService.updateAllergies(id, updateAllergiesInput);
  }

  @Patch('delete/:id')
  softDeleteAllergies(@Param('id') id: string) {
    return this.allergiesService.softDeleteAllergies(id);
  }
}


