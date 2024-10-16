import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNotesInput } from './dto/create-notes.input';
import { UpdateNotesInput } from './dto/update-notes.input';


@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) { }

    @Post(':id')
    createVitalSign(@Param('id') patientId: string,
        @Body() createNotesInput: CreateNotesInput) {
        return this.notesService.createNote(patientId, createNotesInput);
    }

    @Post('list/:id')
    findAllPatientNotes(
        @Param('id') patientId: string,
<<<<<<< HEAD
        @Body() body: { term: string, type: string, page: number, sortBy: string, sortOrder: 'ASC' | 'DESC' }
    ) {
        const { term = "", type, page, sortBy, sortOrder } = body;
        return this.notesService.getAllNotesByPatient(patientId, term, type, page, sortBy, sortOrder);
=======
        @Body() body: { term: string, type: string, page: number, sortBy: string, sortOrder: 'ASC' | 'DESC', perPage: number}
    ) {
        const { term = "", type, page, sortBy, sortOrder, perPage } = body;
        return this.notesService.getAllNotesByPatient(patientId, term, type, page, sortBy, sortOrder, perPage);
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    }

    @Patch('update/:id')
    updateNotes(@Param('id') id: string, @Body() updateNotesInput: UpdateNotesInput) {
        return this.notesService.updateNote(id, updateNotesInput);
    }

    @Patch('delete/:id')
    softDeleteNote(@Param('id') id: string) {
        return this.notesService.softDeleteNotes(id);
    }
}
