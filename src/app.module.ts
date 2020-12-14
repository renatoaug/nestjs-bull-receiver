import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { BullModule } from '@nestjs/bull'
import { ContentProcessor } from './processor'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    BullModule.forRoot({
      prefix: 'receiver',
      redis: {
        host: process.env.REDIS_URL,
        port: Number(process.env.REDIS_PORT),
        password: process.env.REDIS_PASSWORD
      },
    }),
    BullModule.registerQueueAsync({
      name: 'content',
      imports: [],
    }),
  ],
  providers: [ContentProcessor],
})
export class AppModule {}
