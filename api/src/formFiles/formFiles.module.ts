import { Module } from '@nestjs/common';
import { FormsFilesService } from './formFiles.service';
import { FormFilesController } from './formFiles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormFiles } from './entities/formFiles.entity';
import { Patients } from 'src/patients/entities/patients.entity';
import { PatientsService } from 'src/patients/patients.service';
import { IdService } from 'services/uuid/id.service';
import { Forms } from 'src/forms/entities/form.entity';
<<<<<<< HEAD

@Module({
  imports: [TypeOrmModule.forFeature([Patients, FormFiles, Forms])],
  controllers: [FormFilesController],
  providers: [FormsFilesService, IdService, PatientsService],
=======
import { EmergencyContacts } from 'src/emergencyContacts/entities/emergencyContacts.entity';
import { EmergencyContactsService } from 'src/emergencyContacts/emergencyContacts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Patients, FormFiles, Forms,EmergencyContacts])],
  controllers: [FormFilesController],
  providers: [FormsFilesService, IdService, EmergencyContactsService,PatientsService],
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
})
export class FormFilesModule { }
