import { MikroORM} from "@mikro-orm/sqlite";
import type { SqliteDriver } from '@mikro-orm/sqlite';

const orm = await MikroORM.init<SqliteDriver>({
    entities: ['./dist/entities'], // path to our JS entities (dist), relative to `baseDir`
    entitiesTs: ['./src/entities'], // path to our TS entities (src), relative to `baseDir`
    type: 'sqlite',
});
