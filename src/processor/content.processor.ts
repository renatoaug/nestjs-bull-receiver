import { Processor, Process } from '@nestjs/bull'
import { Logger } from '@nestjs/common'
import { Job } from 'bull'
import { RouterEvent } from '@renatoaug/nestjs-bull-emitter'

@Processor('content')
export class ContentProcessor {
  @RouterEvent('content', 'updated')
  @Process('updated')
  async onContentUpdated(job: Job): Promise<void> {
    Logger.log(`Received event: ${JSON.stringify(job.data)}`, ContentProcessor.name)
  }
}