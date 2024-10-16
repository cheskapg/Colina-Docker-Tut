import { Module } from '@nestjs/common';
import { EmergencyContactsService } from './emergencyContacts.service';
import { EmergencyContactsResolver } from './emergencyContacts.resolver';
import { EmergencyContactsController } from './emergencyContacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmergencyContacts } from './entities/emergencyContacts.entity';
import { IdService } from 'services/uuid/id.service';
import { Patients } from 'src/patients/entities/patients.entity';
import { PatientsService } from 'src/patients/patients.service';

@Module({
<<<<<<< HEAD
  imports: [TypeOrmModule.forFeature([EmergencyContacts, Patients])],
=======
  imports: [TypeOrmModule.forFeature([EmergencyContacts, Patients, ])],
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  providers: [
    EmergencyContactsResolver,
    EmergencyContactsService,
    PatientsService,
    IdService,
  ],

  controllers: [EmergencyContactsController],
})
export class EmergencyContactsModule {}
