import { NestFactory } from '@nestjs/core'
import { ReceiverModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(ReceiverModule)
  await app.listen(8080)
}
bootstrap()
