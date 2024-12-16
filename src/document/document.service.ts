import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Document } from './document.entity';

@Injectable()
export class DocumentService {
  constructor(
    @InjectRepository(Document)
    private documentRepository: Repository<Document>,
  ) {}

  //Create Document
  async createDocument(title: string, content: string): Promise<Document> {
    const document = this.documentRepository.create({
      title,
      content,
      uploadedAt: new Date(),
    });
    return this.documentRepository.save(document);
  }

  //Get all documents
  async getAllDocuments(): Promise<Document[]> {
    return this.documentRepository.find();
  }

  //Get Document by Id
  async getDocumentById(id: number): Promise<Document | null> {
    return this.documentRepository.findOne({
      where: { id },
    });
  }

  //Delete Document by id
  async deleteDocumentById(id: number): Promise<DeleteResult> {
    const result = await this.documentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Document with id ${id} does not exist`);
    }
    return result;
  }
}
