import { Options } from '@mikro-orm/core';
import {SqliteDriver} from "@mikro-orm/sqlite";

const config: Options<SqliteDriver> = {
    entities: ['./dist/entities'],
    entitiesTs: ['./src/entities'],
    dbName: 'test.sqlite',
    type: 'sqlite',
    logger: console.log.bind(console),
    debug: true,
}
export default config;
