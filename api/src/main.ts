import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Define CORS options
  const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
      // Check if the request origin is allowed
      if (
        [process.env.FE_URL1, process.env.FE_URL2].includes(origin) ||
        !origin // Allow requests with no origin (e.g., same-origin requests)
      ) {
        callback(null, true); // Allow the request
      } else {
        callback(new Error('Not allowed by CORS')); // Deny the request
      }
    },    credentials: true, // Optional: If you need to send cookies with the request
  };
  app.enableCors(corsOptions);

  // Enable CORS with the specified options

  await app.listen(3000);
}
bootstrap();
