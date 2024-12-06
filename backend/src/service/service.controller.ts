import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ServiceService } from './service.service';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post('')
  async addService(@Body() serviceData) {
    return this.serviceService.addService(serviceData);
  }

  @Put(':serviceId')
  async updateServiceById(
    @Param('serviceId') serviceId: string,
    @Body() updateData,
  ) {
    return this.serviceService.updateServiceById(serviceId, updateData);
  }

  @Get('')
  async getAllServices() {
    return this.serviceService.getAllServices();
  }

  @Delete('')
  async deleteService(@Body() serviceData) {
    return this.serviceService.deleteService(serviceData);
  }
}
