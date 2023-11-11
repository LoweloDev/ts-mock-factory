import {MockFactory} from "../mock-factory.service";
import {Model} from "../models/example-model";

describe('MockFactory', () => {
    it('should be defined', () => {
        const model: Model = MockFactory.mock<Model>(Model);

        // delete date because always changes obviously
        delete model.date;
        delete model.with_init_date;

        expect(model).toMatchObject(
            {
                "with_init_string": "string",
                "with_init_number": 1,
                "with_init_boolean": true,
                "with_init_object": {
                    "testKey": "testValue"
                },
                "with_init_array": [
                    "arrayValue"
                ],
                "with_init_promise": {},
                "with_init_map": {},
                "with_init_set": {},
                "with_init_weakMap": {},
                "with_init_weakSet": {},
                "with_init_regExp": {},
                "with_init_uint8Array": {
                    "0": 1,
                    "1": 2,
                    "2": 3
                },
                "with_init_uint16Array": {
                    "0": 1,
                    "1": 2,
                    "2": 3
                },
                "with_init_uint32Array": {
                    "0": 1,
                    "1": 2,
                    "2": 3
                },
                "with_init_int8Array": {
                    "0": 1,
                    "1": 2,
                    "2": 3
                },
                "with_init_int16Array": {
                    "0": 1,
                    "1": 2,
                    "2": 3
                },
                "with_init_int32Array": {
                    "0": 1,
                    "1": 2,
                    "2": 3
                },
                "with_init_float32Array": {
                    "0": 1,
                    "1": 2,
                    "2": 3
                },
                "with_init_float64Array": {
                    "0": 1,
                    "1": 2,
                    "2": 3
                }
            }
        )
    });
});