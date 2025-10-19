import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: { createdAt: 'received_at', updatedAt: 'updated_at' } })
export class NotificationLog extends Document {
  @Prop({ required: true })
  charge_id: string;

  @Prop({ required: true })
  previous_status: string;

  @Prop({ required: true })
  new_status: string;
}

export const NotificationLogSchema =
  SchemaFactory.createForClass(NotificationLog);
