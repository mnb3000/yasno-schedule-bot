import mongoose from 'mongoose'
import {config} from './config'

export const connectMongoose = () => {
  console.log('Connecting to DB...');
  return mongoose.connect(config.mongo.url, {
    dbName: config.mongo.dbName,
  })
}
