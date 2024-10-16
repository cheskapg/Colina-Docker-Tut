import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// import { ApiKeyGuard } from './auth/api-key/api-key.guard';
import { AllergiesModule } from './allergies/allergies.module';
import { SurgeriesModule } from './surgeries/surgeries.module';
import { APP_GUARD } from '@nestjs/core';
import { join } from 'path';
import { AppointmentsModule } from './appointments/appointments.module';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { CompaniesModule } from './companies/companies.module';
import { EmergencyContactsModule } from './emergencyContacts/emergencyContacts.module';
import { LabResultsModule } from './labResults/labResults.module';
import { MedicationLogsModule } from './medicationLogs/medicationLogs.module';
import { NotesModule } from './notes/notes.module';
import { PrescriptionsModule } from './prescriptions/prescriptions.module';
import { RolesModule } from './roles/roles.module';
import { UserAccessLevelsModule } from './userAccessLevels/userAccessLevels.module';
import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';
import { VitalSignsModule } from './vitalSigns/vitalSigns.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CronjobsModule } from '../services/cronjobs/cronjobs.module';
import { CountryModule } from './countries/countries.module';
import { LabResultsFilesModule } from './labResultsFiles/labResultsFiles.module';
import { MulterModule } from '@nestjs/platform-express';
<<<<<<< HEAD
import multer from 'multer';
import { PrescriptionFilesModule } from './prescriptionsFiles/prescriptionsFiles.module';

import { FormsModule } from './forms/forms.module';
import { FormFilesModule } from './formFiles/formFiles.module';
import { EmailModule } from '../services/email/email.module';
import * as dotenv from 'dotenv';
=======
import { PrescriptionFilesModule } from './prescriptionsFiles/prescriptionsFiles.module';
import { FormsModule } from './forms/forms.module';
import { FormFilesModule } from './formFiles/formFiles.module';
import { EmailModule } from '../services/email/email.module';
import { NotificationsModule } from './notifications/notifications.module';
import * as dotenv from 'dotenv';
import { UserNotificationsModule } from './userNotifications/user-notifications.module';
import { UserNotificationGateway } from '../services/cronjobs/user-notification-gateway';
import { AdlsModule } from './adls/adls.module';
import { VaccinationModule } from './vaccination/vaccination.module';
import { VaccinationFilesModule } from './vaccination-files/vaccination-files.module';
import { OrdersModule } from './orders/orders.module';
import { OrdersPrescriptions } from './orders_prescriptions/entities/orders_prescription.entity';
import { OrdersLaboratory } from './orders_laboratory/entities/orders_laboratory.entity';
import { OrdersLaboratoryModule } from './orders_laboratory/orders_laboratory.module';
import { OrdersPrescriptionsModule } from './orders_prescriptions/orders_prescriptions.module';
import { OrdersDietaryModule } from './orders_dietary/orders_dietary.module';
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
dotenv.config();
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.local',
    }),
    ScheduleModule.forRoot(),
    MulterModule.register({
      dest: './uploads',
    }),
<<<<<<< HEAD
  TypeOrmModule.forRoot({
=======
    TypeOrmModule.forRoot({
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
      type: 'postgres',
      host: process.env.PGHOST,
      port: parseInt(process.env.PGPORT, 10),
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      synchronize: process.env.DB_SYNCHRONIZE === 'true',
      logging: true,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
<<<<<<< HEAD
      autoLoadEntities: true, // Automatically load entities without the need for the entities array
=======
      autoLoadEntities: true,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
      ssl: true,
    }),
    UsersModule,
    RolesModule,
    UserAccessLevelsModule,
    PatientsModule,
    MedicationLogsModule,
    VitalSignsModule,
    LabResultsModule,
    NotesModule,
    AppointmentsModule,
    EmergencyContactsModule,
    CompaniesModule,
    CountryModule,
    AuthModule,
    PrescriptionsModule,
    AllergiesModule,
    SurgeriesModule,
    CronjobsModule,
    PrescriptionFilesModule,
    LabResultsFilesModule,
    FormsModule,
    FormFilesModule,
    EmailModule,
<<<<<<< HEAD
=======
    NotificationsModule,
    UserNotificationsModule,
    AdlsModule,
    VaccinationModule,
    VaccinationFilesModule,
    OrdersModule,
    OrdersPrescriptionsModule,
    OrdersLaboratoryModule,
    OrdersDietaryModule
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  ],
  controllers: [AppController],
  providers: [
    UserNotificationGateway,
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
