import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ type: String, unique: true, required: true })
  username: string;

  @Prop({ type: String })
  displayName: string;

  @Prop({ type: String })
  avatarUrl: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
