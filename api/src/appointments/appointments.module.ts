import { Logger, Module } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointmentsResolver } from './appointments.resolver';
import { AppointmentsController } from './appointments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointments } from './entities/appointments.entity';
import { IdService } from 'services/uuid/id.service';
import { PatientsService } from 'src/patients/patients.service';
import { Patients } from 'src/patients/entities/patients.entity';
<<<<<<< HEAD
=======
import { Notification } from 'src/notifications/entities/notification.entity';
import { AppointmentsFiles } from 'src/appointmentsFiles/entities/appointmentsFiles.entity';
import { AppointmentFilesService } from 'src/appointmentsFiles/appointmentsFiles.service';
import { EmergencyContacts } from 'src/emergencyContacts/entities/emergencyContacts.entity';
import { EmergencyContactsService } from 'src/emergencyContacts/emergencyContacts.service';
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de

// import { AppointmentScheduler } from 'services/scheduler/appointment.scheduler';

@Module({
<<<<<<< HEAD
  imports: [TypeOrmModule.forFeature([Appointments, Patients])],
=======
  imports: [TypeOrmModule.forFeature([Appointments, AppointmentsFiles, Patients, Notification,EmergencyContacts])],
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  providers: [
    AppointmentsResolver,
    AppointmentsService,
    IdService,
    Logger,
    PatientsService,
<<<<<<< HEAD
=======
    EmergencyContactsService,
    AppointmentFilesService
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  ],

  controllers: [AppointmentsController],
})
export class AppointmentsModule {}
