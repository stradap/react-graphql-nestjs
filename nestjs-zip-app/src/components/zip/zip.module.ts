import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZipResolver } from './zip.resolver';
import { ZipService } from './zip.service';
import { Zip } from './entities/zip';

@Module({
  imports: [TypeOrmModule.forFeature([Zip]), HttpModule],
  providers: [ZipService, ZipResolver],
  exports: [ZipService],
})
export class ZipModule {}
