// src/ingestion/ingestion.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class IngestionService {
  constructor(private httpService: HttpService) {}

  // Trigger ingestion process
  async triggerIngestion(): Promise<any> {
    const response = await lastValueFrom(
      this.httpService.post('python-backend/api/ingest', {}),
    );
    return response.data;
  }

  // Get ingestion status
  async getIngestionStatus(): Promise<any> {
    const response = await lastValueFrom(
      this.httpService.get('python-backend/api/status'),
    );
    return response.data;
  }
}
