import { connectMongoose } from '../core/db';
import { ScheduleGroups } from '../models/scheduleGroup';
import { ScheduleGroupNumbersEnum } from '../types/scheduleGroupNumbers.enum';

export const up = async () => {
  connectMongoose();
  const groupOne = await ScheduleGroups.create({
    number: ScheduleGroupNumbersEnum.ONE,
    monday: 'monday graph',
    tuesday: 'tuesday graph',
    wednesday: 'wednesday graph',
    thursday: 'thursday graph',
    friday: 'friday graph',
    saturday: 'saturday graph',
    sunday: 'sunday graph',
  });
  console.log(groupOne);
};

export const down = async () => {
  connectMongoose();
  /*
        Code you downgrade script here!
     */
};
