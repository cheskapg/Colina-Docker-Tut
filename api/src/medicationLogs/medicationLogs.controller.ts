import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MedicationLogsService } from './medicationLogs.service';
import { CreateMedicationLogsInput } from './dto/create-medicationLogs.input';
import { UpdateMedicationLogsInput } from './dto/update-medicationLogs.input';

@Controller('medication-logs')
export class MedicationLogsController {
  constructor(private readonly medicationLogsService: MedicationLogsService) {}
  
  @Post('due-medications')
  getAllDueMedication(
    @Body()
    body: {
      term: string;
      page: number;
      sortBy: string;
      sortOrder: 'ASC' | 'DESC';
      perPage: number;
    },
  ) {
    const { term = '', page, sortBy, sortOrder, perPage } = body;
    return this.medicationLogsService.getAllDueMedication(
      term,
      page,
      sortBy,
      sortOrder,
      perPage,
    );
  }


  @Post(':id')
  createMedicationLogs(
    @Param('id') patientId: string,
    @Body() createMedicationLogsInput: CreateMedicationLogsInput,
  ) {
    return this.medicationLogsService.createMedicationLogs(
      patientId,
      createMedicationLogsInput,
    );
  }

  @Post(':id/asch')
  findAllPatientASSMedicationLogs(
    @Param('id') patientId: string,
    @Body()
    body: {
      term: string;
      page: number;
      sortBy: string;
      sortOrder: 'ASC' | 'DESC';
<<<<<<< HEAD
    },
  ) {
    const { term = '', page, sortBy, sortOrder } = body;
=======
      perPage: number;
      filterStatus: string[];
    },
  ) {
    const { term = '', page, sortBy, sortOrder, perPage, filterStatus } = body;
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    return this.medicationLogsService.getAllASCHMedicationLogsByPatient(
      patientId,
      term,
      page,
      sortBy,
      sortOrder,
<<<<<<< HEAD
=======
      perPage,
      filterStatus,

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    );
  }

  @Post(':id/prn')
  findAllPatientPRNMedicationLogs(
    @Param('id') patientId: string,
    @Body()
    body: {
      term: string;
      page: number;
      sortBy: string;
      sortOrder: 'ASC' | 'DESC';
<<<<<<< HEAD
    },
  ) {
    const { term = '', page, sortBy, sortOrder } = body;
    return this.medicationLogsService.getAllPRNMedicationLogsByPatient(
      patientId,
      term,
      page,
      sortBy,
      sortOrder,
    );
  }

=======
      perPage: number;
      filterStatus: string[];

    },
  ) {
    const { term = '', page, sortBy, sortOrder, perPage, filterStatus } = body;
    return this.medicationLogsService.getAllPRNMedicationLogsByPatient(
      patientId,
      term,
      page,
      sortBy,
      sortOrder,
      perPage,
      filterStatus,

    );
  }

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  //can delete both asch and prn
  //onClick from med- get medID for patch
  @Patch('update/:id')
  updateMedicationLogsInput(
    @Param('id') id: string,
    @Body() updateMedicationLogsInput: UpdateMedicationLogsInput,
  ) {
    return this.medicationLogsService.updateMedicationLogs(
      id,
      updateMedicationLogsInput,
    );
  }

  @Patch('delete/:id')
  softDeleteMedicationLogs(@Param('id') id: string) {
    return this.medicationLogsService.softDeleteMedicationLogs(id);
  }
}
