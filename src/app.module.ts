import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://omkarteli:omkarteli@mern-todo.lopxruv.mongodb.net/nestjs-mongoose-mongodb',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
