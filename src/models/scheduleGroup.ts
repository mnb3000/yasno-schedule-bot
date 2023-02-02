import { getModelForClass, prop } from '@typegoose/typegoose';
import { ScheduleGroupNumbersEnum } from '../types/scheduleGroupNumbers.enum';

export class ScheduleGroup {
  @prop({
    required: true, unique: true, index: true, enum: ScheduleGroupNumbersEnum,
  })
  public number!: ScheduleGroupNumbersEnum;

  @prop({ required: true })
  public monday!: string;

  @prop({ required: true })
  public tuesday!: string;

  @prop({ required: true })
  public wednesday!: string;

  @prop({ required: true })
  public thursday!: string;

  @prop({ required: true })
  public friday!: string;

  @prop({ required: true })
  public saturday!: string;

  @prop({ required: true })
  public sunday!: string;
}

export const ScheduleGroups = getModelForClass(ScheduleGroup, {
  schemaOptions: {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
});
