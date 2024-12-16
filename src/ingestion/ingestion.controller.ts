import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { IngestionService } from './ingestion.service';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@Controller('ingestion')
export class IngestionController {
  constructor(private ingestionService: IngestionService) {}

  @Post('trigger')
  @UseGuards(RolesGuard)
  @Roles('admin', 'editor')
  async triggerIngestion() {
    try {
      const result = await this.ingestionService.triggerIngestion();
      return { message: 'Ingestion successful', result };
    } catch (error) {
      return { message: 'Error in ingestion', error: error.message };
    }
  }

  @Get('status')
  @UseGuards(RolesGuard)
  @Roles('admin', 'editor')
  async getIngestionStatus() {
    try {
      const status = this.ingestionService.getIngestionStatus();
      return { message: 'Ingestion status received', status };
    } catch (error) {
      return {
        message: 'Error retrieving ingestion status',
        error: error.message,
      };
    }
  }
}
