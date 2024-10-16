import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
// import { NotesResolver } from './notes.resolver';
import { NotesController } from './notes.controller';
import { Patients } from 'src/patients/entities/patients.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notes } from './entities/notes.entity';
import { PatientsService } from 'src/patients/patients.service';
import { IdService } from 'services/uuid/id.service';
import { EmergencyContacts } from 'src/emergencyContacts/entities/emergencyContacts.entity';
import { EmergencyContactsService } from 'src/emergencyContacts/emergencyContacts.service';

@Module({
<<<<<<< HEAD
  imports: [TypeOrmModule.forFeature([Notes, Patients])],
  providers: [NotesService, PatientsService, IdService],
=======
  imports: [TypeOrmModule.forFeature([Notes, Patients,EmergencyContacts])],
  providers: [NotesService, PatientsService, IdService,EmergencyContactsService],
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de

  controllers: [NotesController],
})
export class NotesModule {}
