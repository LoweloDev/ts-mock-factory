import {MockValue} from "../mock-value.decorator";

export class Model {
    @MockValue()
    string: string;
    @MockValue()
    number: number;
    @MockValue()
    date?: Date;
    @MockValue()
    boolean: boolean;
    @MockValue()
    object: object;
    @MockValue()
    array: any[];
    @MockValue()
    promise: Promise<any>;
    @MockValue()
    map: Map<any, any>;
    @MockValue()
    set: Set<any>;
    @MockValue()
    weakMap: WeakMap<any, any>;
    @MockValue()
    weakSet: WeakSet<any>;
    @MockValue()
    symbol: Symbol;
    @MockValue()
    function: Function;
    @MockValue()
    regExp: RegExp;
    @MockValue()
    uint8Array: Uint8Array;
    @MockValue()
    uint16Array: Uint16Array;
    @MockValue()
    uint32Array: Uint32Array;
    @MockValue()
    int8Array: Int8Array;
    @MockValue()
    int16Array: Int16Array;
    @MockValue()
    int32Array: Int32Array;
    @MockValue()
    float32Array: Float32Array;
    @MockValue()
    float64Array: Float64Array;
    @MockValue()
    regexp: RegExp;

    @MockValue('string')
    with_init_string: string;
    @MockValue(1)
    with_init_number: number;
    @MockValue(new Date())
    with_init_date?: Date;
    @MockValue(true)
    with_init_boolean: boolean;
    @MockValue({ testKey: 'testValue' })
    with_init_object: object;
    @MockValue(['arrayValue'])
    with_init_array: Array<any>;
    @MockValue(Promise.resolve({ testkey: 'testValue' }))
    with_init_promise: Promise<any>;
    @MockValue(new Map<any, any>([['testKey', 'testValue']]))
    with_init_map: Map<any, any>;
    @MockValue(new Set<any>(['testValue']))
    with_init_set: Set<any>;
    @MockValue(new WeakMap<any, any>([[{ testKey: 'testValue' }, 'testValue']]))
    with_init_weakMap: WeakMap<any, any>;
    @MockValue(new WeakSet<any>([{ testKey: 'testValue' }]))
    with_init_weakSet: WeakSet<any>;
    @MockValue(Symbol('test'))
    with_init_symbol: Symbol;
    @MockValue(new Function())
    with_init_function: Function;
    @MockValue(new RegExp('test'))
    with_init_regExp: RegExp;
    @MockValue(new Uint8Array([1, 2, 3]))
    with_init_uint8Array: Uint8Array;
    @MockValue(new Uint16Array([1, 2, 3]))
    with_init_uint16Array: Uint16Array;
    @MockValue(new Uint32Array([1, 2, 3]))
    with_init_uint32Array: Uint32Array;
    @MockValue(new Int8Array([1, 2, 3]))
    with_init_int8Array: Int8Array;
    @MockValue(new Int16Array([1, 2, 3]))
    with_init_int16Array: Int16Array;
    @MockValue(new Int32Array([1, 2, 3]))
    with_init_int32Array: Int32Array;
    @MockValue(new Float32Array([1, 2, 3]))
    with_init_float32Array: Float32Array;
    @MockValue(new Float64Array([1, 2, 3]))
    with_init_float64Array: Float64Array;
}