import { EntitySchema } from "@mikro-orm/core";

export interface IMotTest {
    dvlaId: number;
    testType: TestType;
    vin: string;
}

export enum TestType {
    MOT = 'mot',
    DVA = 'dva',
}

export const MotTest = new EntitySchema<IMotTest>({
    name: 'MotTest',
    properties: {
        dvlaId: { type: Number, primary: true },
        testType: { enum: true, items: () => TestType },
        vin: { type: String },
    },
});
