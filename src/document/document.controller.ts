import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { DocumentService } from './document.service';
import { Document } from './document.entity';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@Controller('documents')
export class DocumentController {
  constructor(private documentService: DocumentService) {}

  @Post()
  async create(
    @Body() documentData: { title: string; content: string },
  ): Promise<Document> {
    return this.documentService.createDocument(
      documentData.title,
      documentData.content,
    );
  }

  @Get()
  @UseGuards(RolesGuard)
  @Roles('admin', 'editor')
  async findAll(): Promise<Document[]> {
    return this.documentService.getAllDocuments();
  }

  @Get(':id')
  @UseGuards(RolesGuard)
  @Roles('admin', 'editor')
  async findOne(@Param('id') id: number): Promise<Document> {
    return this.documentService.getDocumentById(id);
  }

  @Delete(':id')
  @UseGuards(RolesGuard)
  @Roles('admin', 'editor')
  async deleteDocument(@Param('id') id: number) {
    await this.documentService.deleteDocumentById(id);
    return { message: `Document with ${id} deleted successfully` };
  }
}
