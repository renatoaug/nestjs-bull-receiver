import { Processor, Process } from '@nestjs/bull'
import { Job } from 'bull'

@Processor('content')
export class ContentProcessor {
  @Process('updated')
  async onContentUpdated(job: Job): Promise<void> {
    console.info('============== Job data:', job.data)
  }
}