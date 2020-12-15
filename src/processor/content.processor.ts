import { Processor, Process } from '@nestjs/bull'
import { Job } from 'bull'
import { RouterEvent } from '../../../nestjs-bull-emitter/src/decorator'

@Processor('content')
export class ContentProcessor {
  @RouterEvent('content', 'updated')
  @Process('updated')
  async onContentUpdated(job: Job): Promise<void> {
    console.info('Job data:', job.data)
  }
}