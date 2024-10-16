import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointments } from 'src/appointments/entities/appointments.entity';
import { Equal, MoreThanOrEqual, Not, Repository } from 'typeorm';
import { DateTime } from 'luxon';
import { In } from 'typeorm';
import { Prescriptions } from 'src/prescriptions/entities/prescriptions.entity';
import { MedicationLogs } from 'src/medicationLogs/entities/medicationLogs.entity';
import { IdService } from 'services/uuid/id.service';
import { CreateMedicationLogsInput } from 'src/medicationLogs/dto/create-medicationLogs.input';
<<<<<<< HEAD
=======
import { Notification } from 'src/notifications/entities/notification.entity';
import { NotificationsService } from 'src/notifications/notifications.service';
import { CreateNotificationDto } from 'src/notifications/dto/create-notification.dto';
import { Patients } from 'src/patients/entities/patients.entity';

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de

@Injectable()
export class CronjobsService {
  constructor(
    @InjectRepository(Appointments)
    private appointmentsRepository: Repository<Appointments>,
    @InjectRepository(Prescriptions)
    private prescriptionsRepository: Repository<Prescriptions>,
    @InjectRepository(MedicationLogs)
    private medicationLogsRepository: Repository<MedicationLogs>,
<<<<<<< HEAD
    private idService: IdService,
  ) { }
  @Cron('* * * * *') // Cron job to check appointments every minute

  async checkDailyAppointments() {
    const currentDateTime = DateTime.local(); // Get current date and time using Luxon
    const formattedDate = currentDateTime.toFormat('yyyy-MM-dd');

    console.log('Checking appointments for date:', formattedDate);
    console.log('Current date time:', currentDateTime);

=======
    @InjectRepository(Notification)
    private notificationRepository: Repository<Notification>,
    @InjectRepository(Patients)
    private patientsRepository: Repository<Patients>,
    private readonly notificationsService: NotificationsService,
  
    private idService: IdService,
  ) {}

  @Cron('* * * * *') // Cron job to check appointments every minute
  async checkDailyAppointments() {
    const currentDateTime = DateTime.local(); // Get current date and time using Luxon
    const formattedDate = currentDateTime.toFormat('yyyy-MM-dd');
    const currentTime = currentDateTime.toFormat('HH:mm:ss');
    console.log('Current time:', currentTime);

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    const allAppointments = await this.appointmentsRepository.find({
      where: {
        appointmentStatus: In(['Scheduled', 'On-going', 'Patient-IN']),
      },
    });

    for (const appointment of allAppointments) {
<<<<<<< HEAD
      const appointmentDateTime = this.parseDateTime(appointment.appointmentDate, appointment.appointmentTime);
      const appointmentEndDateTime = this.parseDateTime(appointment.appointmentDate, appointment.appointmentEndTime);
=======
      const appointmentDateTime = this.parseDateTime(
        appointment.appointmentDate,
        appointment.appointmentTime,
      );
      const appointmentEndDateTime = this.parseDateTime(
        appointment.appointmentDate,
        appointment.appointmentEndTime,
      );
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de

      const isScheduled = appointment.appointmentStatus === 'Scheduled';
      const isPatientIn = appointment.appointmentStatus === 'Patient-IN';
      const isDone = appointment.appointmentStatus === 'Done';
      const isOngoing = appointment.appointmentStatus === 'On-going';

      if (currentDateTime > appointmentEndDateTime) {
        if (isScheduled && !isPatientIn) {
          await this.updateAppointmentStatus(appointment, 'Missed');
<<<<<<< HEAD
        }
        if (isOngoing && !isPatientIn) {
          await this.updateAppointmentStatus(appointment, 'Missed');
=======
          await this.createMissedAppointmentNotification(appointment);
        }
        if (isOngoing && !isPatientIn) {
          await this.updateAppointmentStatus(appointment, 'Missed');
          await this.createMissedAppointmentNotification(appointment);
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        }
        if (isPatientIn) {
          await this.updateAppointmentStatus(appointment, 'Done');
        }
      } else if (currentDateTime > appointmentDateTime) {
        if (isScheduled && !isPatientIn && !isOngoing && !isDone) {
          await this.updateAppointmentStatus(appointment, 'On-going');
        }
      } else if (currentDateTime < appointmentDateTime) {
<<<<<<< HEAD
        if (!isDone && !isPatientIn && !isOngoing ) {
=======
        if (!isDone && !isPatientIn && !isOngoing) {
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
          await this.updateAppointmentStatus(appointment, 'Scheduled');
        }
      }
    }
  }

<<<<<<< HEAD
=======
  @Cron('* * * * *')
  async checkDailyMedicationLogs() {
    const currentDateTime = DateTime.local(); // Get current date and time using Luxon
    const formattedDate = currentDateTime.toFormat('yyyy-MM-dd');
    console.log('Checking medication logs for date:', formattedDate);

    const allMedicationLogs = await this.medicationLogsRepository.find({
      where: {
        medicationLogStatus: In(['pending']),
        medicationLogsDate: formattedDate,
      },
    });

    for (const medicationLog of allMedicationLogs) {
      const medicationLogDateTime = this.parseDateTime(
        medicationLog.medicationLogsDate,
        medicationLog.medicationLogsTime,
      );

      const isPending = medicationLog.medicationLogStatus === 'pending';

      if (currentDateTime > medicationLogDateTime) {
        if (isPending) {
          // Check if notification for this medication log already exists
          const existingNotification =
            await this.notificationRepository.findOne({
              where: {
                medicationLogId: medicationLog.id,
                notificationType: 'Medication',
                status: 'Missed',
              },
            });

          if (!existingNotification) {
            // Create missed medication notification if not already existing
            await this.createMissedMedicationNotification(medicationLog);
          }
        }
      }
    }
  }

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  // @Cron('* * * * *') // Cron job to check appointments every minute
  // async checkDailyAppointments() {
  //     const currentDateTime = DateTime.local(); // Get current date and time using Luxon

  //     const formattedDate = currentDateTime.toFormat('yyyy-MM-dd');
  //     console.log('Checking appointments for date:', formattedDate);
  //     console.log('currentDate now', currentDateTime);

  //     const appointments = await this.appointmentsRepository.find({
  //         where: {
  //             appointmentDate: formattedDate,
  //             appointmentStatus: In(['Scheduled', 'On-going', 'Patient-IN']),
  //         },
  //     });

  //     for (const appointment of appointments) {
  //         const appointmentDateTime = this.parseDateTime(appointment.appointmentDate, appointment.appointmentTime);
  //         const appointmentEndDateTime = this.parseDateTime(appointment.appointmentDate, appointment.appointmentEndTime);
  //         console.log('appointmentDateTime:', appointmentDateTime);
  //         console.log('appointmentEndDateTime:', appointmentEndDateTime);
  //         console.log('currentDateTime:', currentDateTime);
  //         if (currentDateTime > appointmentDateTime && currentDateTime < appointmentEndDateTime) {
  //             if (appointment.appointmentStatus === 'Scheduled') {
  //               await this.updateAppointmentStatus(appointment, 'On-going');
  //               console.log('Marked ongoing for appointment:', appointment.id);
  //             } else if (appointment.appointmentStatus === 'On-going') {
  //               console.log('Appointment already ongoing:', appointment.id);
  //             } else if (appointment.appointmentStatus === 'Patient-IN') {
  //               console.log('Patient already checked in:', appointment.id);
  //             }
  //           } else if (currentDateTime > appointmentEndDateTime) {
  //             if (appointment.appointmentStatus === 'On-going') {
  //               await this.updateAppointmentStatus(appointment, 'Missed');
  //               console.log('Marked missed for appointment:', appointment.id);
  //             } else if (appointment.appointmentStatus === 'Patient-IN') {
  //               await this.updateAppointmentStatus(appointment, 'Done');
  //               console.log('Marked Done for appointment:', appointment.id);
  //             } else if (appointment.appointmentStatus === 'Scheduled') {
  //               await this.updateAppointmentStatus(appointment, 'Missed');
  //               console.log('Marked missed for appointment:', appointment.id);
  //             }
  //           } else if (currentDateTime < appointmentDateTime && appointment.appointmentStatus !== 'Done') {
  //             await this.updateAppointmentStatus(appointment, 'Scheduled');
  //             console.log('Marked scheduled for appointment:', appointment.id);
  //           }
  //           else if (currentDateTime > appointmentDateTime && appointment.appointmentStatus !== 'Patient-IN') {
  //             await this.updateAppointmentStatus(appointment, 'Missed');
  //             console.log('Marked scheduled for appointment:', appointment.id);
  //           }
  //           else if (currentDateTime > appointmentDateTime && appointment.appointmentStatus === 'Patient-IN') {
  //             await this.updateAppointmentStatus(appointment, 'Done');
  //             console.log('Marked scheduled for appointment:', appointment.id);
  //           }
  //     }
  // }

<<<<<<< HEAD

=======
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  async updateAppointmentStatus(appointment: Appointments, status: string) {
    appointment.appointmentStatus = status;
    await this.appointmentsRepository.save(appointment);
  }

<<<<<<< HEAD
=======
  private async createMissedAppointmentNotification(appointment: Appointments) {
    const patient = await this.patientsRepository
      .createQueryBuilder('patient')
      .select(['patient.firstName', 'patient.lastName', 'patient.uuid'])
      .where('patient.id = :patientId', { patientId: appointment.patientId })
      .getOne();

    if (!patient) {
      throw new Error('Patient not found');
    }

    const patientFirstName = patient.firstName;
    const patientLastName = patient.lastName;
    const patientId = patient.uuid;

    // Generate UUID
    const uuidPrefix = 'NTF-'; // Customize prefix as needed
    const uuid = this.idService.generateRandomUUID(uuidPrefix);

    // Create notification DTO
    const createNotificationDto: CreateNotificationDto = {
      uuid: uuid,
      patientId: patientId,
      patientName: `${patientFirstName} ${patientLastName}`,
      notificationType: 'Appointment',
      appointmentType: appointment.appointmentType,
      date: appointment.appointmentDate,
      time: appointment.appointmentTime,
      details: 'The appointment has been missed.',
      status: 'Missed',
      appointmentId: appointment.id,
      medicationLogId: null, // No medication log ID for appointment notifications
    };

    const savedNotification = await this.notificationRepository.save(
      createNotificationDto,
    );
    // this.userNotificationGateway.broadcastNotification(savedNotification);
  }

  private async createMissedMedicationNotification(
    medicationLog: MedicationLogs,
  ) {
    // Fetch patient details using createQueryBuilder
    const patient = await this.patientsRepository
      .createQueryBuilder('patient')
      .select(['patient.firstName', 'patient.lastName', 'patient.uuid'])
      .where('patient.id = :patientId', { patientId: medicationLog.patientId })
      .getOne();

    if (!patient) {
      throw new Error('Patient not found');
    }

    const patientFirstName = patient.firstName;
    const patientLastName = patient.lastName;
    const patientId = patient.uuid;

    // Generate UUID
    const uuidPrefix = 'NTF-'; // Customize prefix as needed
    const uuid = this.idService.generateRandomUUID(uuidPrefix);

    // Create notification DTO for missed medication
    const createNotificationDto: CreateNotificationDto = {
      uuid: uuid,
      patientId: patientId,
      patientName: `${patientFirstName} ${patientLastName}`,
      notificationType: 'Medication',
      appointmentType: null,
      medicationName: medicationLog.medicationLogsName,
      medicationDosage: medicationLog.medicationLogsDosage,
      date: medicationLog.medicationLogsDate,
      time: medicationLog.medicationLogsTime,
      details: medicationLog.notes,
      status: 'Missed',
      appointmentId: null,
      medicationLogId: medicationLog.id,
    };

    // Save the notification
    const savedNotification = await this.notificationRepository.save(
      createNotificationDto,
    );

    // this.userNotificationGateway.broadcastNotification(savedNotification);
  }

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  parseDateTime(dateString: string, timeString: string): DateTime {
    const [year, month, day] = dateString.split('-').map(Number);
    const [hoursString, minutesString] = timeString.split(':');
    const hours = parseInt(hoursString, 10);
    const minutes = parseInt(minutesString, 10);

    // Create a Luxon DateTime object for the appointment
    const appointmentDateTime = DateTime.fromObject({
      year,
      month,
      day,
      hour: hours,
      minute: minutes,
    });

    // Return the appointment DateTime object
    return appointmentDateTime;
  }

  ///

  // @Cron('*/5 * * * * *') // Cron job to run every 5 seconds
<<<<<<< HEAD
  @Cron('0 0 * * * *') // Cron job to run every 12am
=======
  @Cron('0 0 * * *') // Cron job to run every 12am
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  async checkDailyPrescription(medicationLogData: CreateMedicationLogsInput) {
    const todayDate = new Date();
    todayDate.setUTCHours(0, 0, 0, 0);

<<<<<<< HEAD
    console.log('currentDate now', todayDate);

    const prescriptions = await this.prescriptionsRepository.find({
      select: ['patientId', 'id', 'frequency', 'name', 'interval'],
=======
    const currentDateTime = DateTime.local(); // Get current date and time using Luxon
    const formattedDate = currentDateTime.toFormat('yyyy-MM-dd');
    const currentTime = currentDateTime.toFormat('HH:mm:ss');
    console.log('Current time:', currentTime);
    console.log('currentDate now', todayDate);

    const prescriptions = await this.prescriptionsRepository.find({
      select: [
        'patientId',
        'id',
        'frequency',
        'name',
        'interval',
        'dosage',
        'prescriptionType',
        'startDate',
      ],
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
      where: {
        status: 'active',
      },
    });

    console.log('prescriptions', prescriptions);

    if (prescriptions && prescriptions.length > 0) {
<<<<<<< HEAD
=======
      //check if prescription has ended

      for (const prescription of prescriptions) {
        if (prescription.endDate) {
          const endDate = new Date(prescription.endDate);
          endDate.setUTCHours(0, 0, 0, 0);
          if (todayDate > endDate) {
            console.log('Prescription has ended:', prescription.id);
            prescription.status = 'inactive';
            await this.prescriptionsRepository.save(prescription);
          }
        }
      }

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
      for (const prescription of prescriptions) {
        const medlogs = await this.medicationLogsRepository.find({
          select: [
            'patientId',
            'prescriptionId',
            'medicationLogStatus',
            'medicationLogsName',
          ],
          where: {
            createdAt: MoreThanOrEqual(todayDate.toISOString()),
            prescriptionId: prescription.id,
            patientId: prescription.patientId,
          },
        });

        console.log('prescription', prescription);
        console.log('medlogs', medlogs);

        // Determine the expected number of logs based on frequency
        let expectedLogs = 0;
        if (prescription.frequency === 'Once Daily') {
          expectedLogs = 1;
        } else if (prescription.frequency === 'Twice Daily') {
          expectedLogs = 2;
        } else if (prescription.frequency === 'Thrice Daily') {
          expectedLogs = 3;
        }

        // Check if the actual number of logs is less than the expected number
        if (medlogs.length < expectedLogs) {
          console.log(
            `Creating medication logs for ${prescription.frequency} prescription...`,
          );
          for (let i = medlogs.length; i < expectedLogs; i++) {
            const newMedicationLogs = new MedicationLogs();
            const uuidPrefix = 'MDL-'; // Customize prefix as needed
            const uuid = this.idService.generateRandomUUID(uuidPrefix);
            newMedicationLogs.uuid = uuid;
            newMedicationLogs.medicationLogsName = prescription.name;
<<<<<<< HEAD
            newMedicationLogs.medicationLogsDate = todayDate
              .toISOString()
              .split('T')[0];
=======
            newMedicationLogs.medicationLogsDosage = prescription.dosage;
            newMedicationLogs.medicationLogsDate = formattedDate;
            newMedicationLogs.hasDuration =
              prescription.startDate != '' ||
              undefined ||
              (null && prescription.prescriptionType === 'PRN')
                ? 'true'
                : prescription.prescriptionType === 'ASCH'
                  ? 'true'
                  : 'false';
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
            // Calculate medicationLogsTime based on interval
            newMedicationLogs.medicationLogsTime = this.calculateMedicationTime(
              prescription.frequency,
              i,
              prescription.interval,
            );
            newMedicationLogs.notes = 'Generated by system';
<<<<<<< HEAD
            newMedicationLogs.medicationType = 'ASCH';
            newMedicationLogs.patientId = prescription.patientId;
            newMedicationLogs.prescriptionId = prescription.id;
            newMedicationLogs.medicationLogStatus = 'pending';
=======
            newMedicationLogs.medicationType = prescription.prescriptionType;
            newMedicationLogs.patientId = prescription.patientId;
            newMedicationLogs.prescriptionId = prescription.id;
            newMedicationLogs.medicationLogStatus = 'pending';
            newMedicationLogs.createdAt = formattedDate;
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
            Object.assign(newMedicationLogs, medicationLogData);
            const savedMedicationLogs =
              await this.medicationLogsRepository.save(newMedicationLogs);
            const result = { ...newMedicationLogs };
            delete result.patientId;
            delete result.deletedAt;
            delete result.updatedAt;
            delete result.id;
            console.log('Saved medication logs:', result);
          }
        }
      }
    }
  }

  // Function to calculate medicationLogsTime based on frequency and interval
  calculateMedicationTime(
    frequency: string,
    index: number,
    intervals: string,
  ): string {
<<<<<<< HEAD
    let hour = 8; // Default hour for medicationLogsTime
=======
    let hour = 9; // Default hour for medicationLogsTime
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    const interval = parseInt(intervals); // Default interval in hours

    // Adjust hour based on index and frequency
    if (frequency === 'Twice Daily') {
      hour += index * interval;
    } else if (frequency === 'Thrice Daily') {
      hour += index * interval;
    }

    // Ensure hour is within 0-23 range
    hour = hour % 24;

    // Convert hour to string format with leading zeros if necessary
    const hourStr = hour < 10 ? `0${hour}` : `${hour}`;

    return `${hourStr}:00`;
  }

  // for (const appointment of appointments) {
  //   const appointmentDateTime = this.parseDateTime(
  //     appointment.appointmentDate,
  //     appointment.appointmentTime,
  //   );
  //   const appointmentEndDateTime = this.parseDateTime(
  //     appointment.appointmentDate,
  //     appointment.appointmentEndTime,
  //   );
  //   console.log('appointmentDateTime:', appointmentDateTime);
  //   console.log('appointmentEndDateTime:', appointmentEndDateTime);
  //   console.log('currentDateTime:', currentDateTime);
  //   if (
  //     currentDateTime > appointmentDateTime &&
  //     currentDateTime < appointmentEndDateTime
  //   ) {
  //     if (appointment.appointmentStatus === 'Scheduled') {
  //       await this.updateAppointmentStatus(appointment, 'On-going');
  //       console.log('Marked ongoing for appointment:', appointment.id);
  //     } else if (appointment.appointmentStatus === 'On-going') {
  //       console.log('Appointment already ongoing:', appointment.id);
  //     } else if (appointment.appointmentStatus === 'Patient-IN') {
  //       console.log('Patient already checked in:', appointment.id);
  //     }
  //   } else if (currentDateTime > appointmentEndDateTime) {
  //     if (appointment.appointmentStatus === 'On-going') {
  //       await this.updateAppointmentStatus(appointment, 'Missed');
  //       console.log('Marked missed for appointment:', appointment.id);
  //     } else if (appointment.appointmentStatus === 'Patient-IN') {
  //       await this.updateAppointmentStatus(appointment, 'Done');
  //       console.log('Marked Done for appointment:', appointment.id);
  //     } else if (appointment.appointmentStatus === 'Scheduled') {
  //       await this.updateAppointmentStatus(appointment, 'Missed');
  //       console.log('Marked missed for appointment:', appointment.id);
  //     }
  //   } else if (
  //     currentDateTime < appointmentDateTime &&
  //     appointment.appointmentStatus !== 'Done'
  //   ) {
  //     await this.updateAppointmentStatus(appointment, 'Scheduled');
  //     console.log('Marked scheduled for appointment:', appointment.id);
  //   }
  // }
}
