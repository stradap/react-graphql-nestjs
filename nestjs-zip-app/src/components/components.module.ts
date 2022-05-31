import { Module } from '@nestjs/common';
import { ZipModule } from './zip/zip.module';
@Module({
  imports: [ZipModule],
})
export class ComponentsModule {}
