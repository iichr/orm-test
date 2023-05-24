import {MikroORM, SqliteDriver} from "@mikro-orm/sqlite";
import config from './mikro-orm.config';
import {MotTest, TestType} from "./entities/motTest";

(async () => {
    try {
        const orm = await MikroORM.init<SqliteDriver>(config);
        const em = orm.em.fork();
        const a = em.create(MotTest, { dvlaId: 123, vin: 'D1455ABC', testType: TestType.MOT });
        await em.persistAndFlush(a);
    } catch (e) {
        console.error(e);
    }
})();
