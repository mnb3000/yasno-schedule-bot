import { connectMongoose } from '../core/db';

export const up = async () => {
  connectMongoose();
  /*
        Code your update script here!
     */
};

export const down = async () => {
  connectMongoose();
  /*
        Code you downgrade script here!
     */
};
