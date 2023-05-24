import { EntitySchema } from "@mikro-orm/core";

export interface MotTest {
    dvlaId: number;
    testType: TestType;
    vin: string;
}

export enum TestType {
    MOT = 'mot',
    DVA = 'dva',
}

export const MotTestSchema = new EntitySchema<MotTest>({
    name: 'MotTest',
    properties: {
        dvlaId: { type: Number, primary: true },
        testType: { enum: true, items: () => TestType },
        vin: { type: String },
    },
});
