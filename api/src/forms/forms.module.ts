import { Module } from '@nestjs/common';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdService } from 'services/uuid/id.service';
import { Patients } from 'src/patients/entities/patients.entity';
import { Forms } from './entities/form.entity';
import { FormFiles } from 'src/formFiles/entities/formFiles.entity';
import { PatientsService } from 'src/patients/patients.service';
import { FormsFilesService } from 'src/formFiles/formFiles.service';
<<<<<<< HEAD

@Module({
  imports: [TypeOrmModule.forFeature([Forms, FormFiles, Patients])],
  controllers: [FormsController],
  providers: [FormsService, IdService, FormsFilesService, PatientsService],
=======
import { EmergencyContacts } from 'src/emergencyContacts/entities/emergencyContacts.entity';
import { EmergencyContactsService } from 'src/emergencyContacts/emergencyContacts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Forms, FormFiles, Patients,EmergencyContacts])],
  controllers: [FormsController],
  providers: [FormsService, IdService, EmergencyContactsService,FormsFilesService, PatientsService],
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
})
export class FormsModule {}
