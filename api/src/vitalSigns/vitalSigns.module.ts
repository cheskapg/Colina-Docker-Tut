import { Module } from '@nestjs/common';
import { VitalSignsService } from './vitalSigns.service';
import { VitalSignsResolver } from './vitalSigns.resolver';
import { VitalSignsController } from './vitalSigns.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VitalSigns } from './entities/vitalSigns.entity';
import { IdService } from 'services/uuid/id.service';
import { Patients } from 'src/patients/entities/patients.entity';
import { PatientsService } from 'src/patients/patients.service';
import { EmergencyContacts } from 'src/emergencyContacts/entities/emergencyContacts.entity';
import { EmergencyContactsService } from 'src/emergencyContacts/emergencyContacts.service';



@Module({
  imports: [TypeOrmModule.forFeature([VitalSigns, Patients,EmergencyContacts])],

  providers: [
    VitalSignsResolver,
    VitalSignsService,
    PatientsService,
    IdService,
<<<<<<< HEAD
=======
    EmergencyContactsService,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  ],
  controllers: [VitalSignsController],
})
export class VitalSignsModule {}
