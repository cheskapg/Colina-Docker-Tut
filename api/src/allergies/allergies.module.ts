import { Module } from '@nestjs/common';
import { AllergiesService } from './allergies.service';
import { AllergiesController } from './allergies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Allergies } from './entities/allergies.entity';
import { Patients } from 'src/patients/entities/patients.entity';
import { IdService } from 'services/uuid/id.service';
import { PatientsService } from 'src/patients/patients.service';
import { EmergencyContacts } from 'src/emergencyContacts/entities/emergencyContacts.entity';
import { EmergencyContactsService } from 'src/emergencyContacts/emergencyContacts.service';

@Module({
<<<<<<< HEAD
  imports: [TypeOrmModule.forFeature([Allergies, Patients])],
=======
  imports: [TypeOrmModule.forFeature([Allergies, Patients, EmergencyContacts])],
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de

  controllers: [AllergiesController],
  providers: [AllergiesService, IdService, PatientsService,EmergencyContactsService],
})
export class AllergiesModule {}
