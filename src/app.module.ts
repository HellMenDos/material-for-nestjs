import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './exception.filter';
import { TodoModule } from './todo/todo.module';
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entity/todo.entity';
import { LogMiddleware } from './log.middleware';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LogInterceptor } from './log.interceptor';

@Module({
  imports: [
    TodoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Todo],
      synchronize: true
    })
  ],
  controllers: [],
  providers: [
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: LogInterceptor
    // }
  ],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(LogMiddleware).forRoutes('*')
  // }
}
