
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model testing_table_user
 * 
 */
export type testing_table_user = $Result.DefaultSelection<Prisma.$testing_table_userPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GENDER_ENUM_FOR_USER: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type GENDER_ENUM_FOR_USER = (typeof GENDER_ENUM_FOR_USER)[keyof typeof GENDER_ENUM_FOR_USER]

}

export type GENDER_ENUM_FOR_USER = $Enums.GENDER_ENUM_FOR_USER

export const GENDER_ENUM_FOR_USER: typeof $Enums.GENDER_ENUM_FOR_USER

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Testing_table_users
 * const testing_table_users = await prisma.testing_table_user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Testing_table_users
   * const testing_table_users = await prisma.testing_table_user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.testing_table_user`: Exposes CRUD operations for the **testing_table_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testing_table_users
    * const testing_table_users = await prisma.testing_table_user.findMany()
    * ```
    */
  get testing_table_user(): Prisma.testing_table_userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    testing_table_user: 'testing_table_user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "testing_table_user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      testing_table_user: {
        payload: Prisma.$testing_table_userPayload<ExtArgs>
        fields: Prisma.testing_table_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.testing_table_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testing_table_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.testing_table_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testing_table_userPayload>
          }
          findFirst: {
            args: Prisma.testing_table_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testing_table_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.testing_table_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testing_table_userPayload>
          }
          findMany: {
            args: Prisma.testing_table_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testing_table_userPayload>[]
          }
          create: {
            args: Prisma.testing_table_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testing_table_userPayload>
          }
          createMany: {
            args: Prisma.testing_table_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.testing_table_userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testing_table_userPayload>[]
          }
          delete: {
            args: Prisma.testing_table_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testing_table_userPayload>
          }
          update: {
            args: Prisma.testing_table_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testing_table_userPayload>
          }
          deleteMany: {
            args: Prisma.testing_table_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.testing_table_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.testing_table_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testing_table_userPayload>
          }
          aggregate: {
            args: Prisma.Testing_table_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTesting_table_user>
          }
          groupBy: {
            args: Prisma.testing_table_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<Testing_table_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.testing_table_userCountArgs<ExtArgs>
            result: $Utils.Optional<Testing_table_userCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model testing_table_user
   */

  export type AggregateTesting_table_user = {
    _count: Testing_table_userCountAggregateOutputType | null
    _avg: Testing_table_userAvgAggregateOutputType | null
    _sum: Testing_table_userSumAggregateOutputType | null
    _min: Testing_table_userMinAggregateOutputType | null
    _max: Testing_table_userMaxAggregateOutputType | null
  }

  export type Testing_table_userAvgAggregateOutputType = {
    age: number | null
    rollNo: number | null
  }

  export type Testing_table_userSumAggregateOutputType = {
    age: number | null
    rollNo: number | null
  }

  export type Testing_table_userMinAggregateOutputType = {
    id: string | null
    name: string | null
    age: number | null
    gender: $Enums.GENDER_ENUM_FOR_USER | null
    rollNo: number | null
  }

  export type Testing_table_userMaxAggregateOutputType = {
    id: string | null
    name: string | null
    age: number | null
    gender: $Enums.GENDER_ENUM_FOR_USER | null
    rollNo: number | null
  }

  export type Testing_table_userCountAggregateOutputType = {
    id: number
    name: number
    age: number
    gender: number
    rollNo: number
    _all: number
  }


  export type Testing_table_userAvgAggregateInputType = {
    age?: true
    rollNo?: true
  }

  export type Testing_table_userSumAggregateInputType = {
    age?: true
    rollNo?: true
  }

  export type Testing_table_userMinAggregateInputType = {
    id?: true
    name?: true
    age?: true
    gender?: true
    rollNo?: true
  }

  export type Testing_table_userMaxAggregateInputType = {
    id?: true
    name?: true
    age?: true
    gender?: true
    rollNo?: true
  }

  export type Testing_table_userCountAggregateInputType = {
    id?: true
    name?: true
    age?: true
    gender?: true
    rollNo?: true
    _all?: true
  }

  export type Testing_table_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which testing_table_user to aggregate.
     */
    where?: testing_table_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testing_table_users to fetch.
     */
    orderBy?: testing_table_userOrderByWithRelationInput | testing_table_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: testing_table_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testing_table_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testing_table_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned testing_table_users
    **/
    _count?: true | Testing_table_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Testing_table_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Testing_table_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Testing_table_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Testing_table_userMaxAggregateInputType
  }

  export type GetTesting_table_userAggregateType<T extends Testing_table_userAggregateArgs> = {
        [P in keyof T & keyof AggregateTesting_table_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTesting_table_user[P]>
      : GetScalarType<T[P], AggregateTesting_table_user[P]>
  }




  export type testing_table_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testing_table_userWhereInput
    orderBy?: testing_table_userOrderByWithAggregationInput | testing_table_userOrderByWithAggregationInput[]
    by: Testing_table_userScalarFieldEnum[] | Testing_table_userScalarFieldEnum
    having?: testing_table_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Testing_table_userCountAggregateInputType | true
    _avg?: Testing_table_userAvgAggregateInputType
    _sum?: Testing_table_userSumAggregateInputType
    _min?: Testing_table_userMinAggregateInputType
    _max?: Testing_table_userMaxAggregateInputType
  }

  export type Testing_table_userGroupByOutputType = {
    id: string
    name: string
    age: number
    gender: $Enums.GENDER_ENUM_FOR_USER
    rollNo: number
    _count: Testing_table_userCountAggregateOutputType | null
    _avg: Testing_table_userAvgAggregateOutputType | null
    _sum: Testing_table_userSumAggregateOutputType | null
    _min: Testing_table_userMinAggregateOutputType | null
    _max: Testing_table_userMaxAggregateOutputType | null
  }

  type GetTesting_table_userGroupByPayload<T extends testing_table_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Testing_table_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Testing_table_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Testing_table_userGroupByOutputType[P]>
            : GetScalarType<T[P], Testing_table_userGroupByOutputType[P]>
        }
      >
    >


  export type testing_table_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    rollNo?: boolean
  }, ExtArgs["result"]["testing_table_user"]>

  export type testing_table_userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    rollNo?: boolean
  }, ExtArgs["result"]["testing_table_user"]>

  export type testing_table_userSelectScalar = {
    id?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    rollNo?: boolean
  }


  export type $testing_table_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "testing_table_user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      age: number
      gender: $Enums.GENDER_ENUM_FOR_USER
      rollNo: number
    }, ExtArgs["result"]["testing_table_user"]>
    composites: {}
  }

  type testing_table_userGetPayload<S extends boolean | null | undefined | testing_table_userDefaultArgs> = $Result.GetResult<Prisma.$testing_table_userPayload, S>

  type testing_table_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<testing_table_userFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Testing_table_userCountAggregateInputType | true
    }

  export interface testing_table_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['testing_table_user'], meta: { name: 'testing_table_user' } }
    /**
     * Find zero or one Testing_table_user that matches the filter.
     * @param {testing_table_userFindUniqueArgs} args - Arguments to find a Testing_table_user
     * @example
     * // Get one Testing_table_user
     * const testing_table_user = await prisma.testing_table_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends testing_table_userFindUniqueArgs>(args: SelectSubset<T, testing_table_userFindUniqueArgs<ExtArgs>>): Prisma__testing_table_userClient<$Result.GetResult<Prisma.$testing_table_userPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Testing_table_user that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {testing_table_userFindUniqueOrThrowArgs} args - Arguments to find a Testing_table_user
     * @example
     * // Get one Testing_table_user
     * const testing_table_user = await prisma.testing_table_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends testing_table_userFindUniqueOrThrowArgs>(args: SelectSubset<T, testing_table_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__testing_table_userClient<$Result.GetResult<Prisma.$testing_table_userPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Testing_table_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testing_table_userFindFirstArgs} args - Arguments to find a Testing_table_user
     * @example
     * // Get one Testing_table_user
     * const testing_table_user = await prisma.testing_table_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends testing_table_userFindFirstArgs>(args?: SelectSubset<T, testing_table_userFindFirstArgs<ExtArgs>>): Prisma__testing_table_userClient<$Result.GetResult<Prisma.$testing_table_userPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Testing_table_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testing_table_userFindFirstOrThrowArgs} args - Arguments to find a Testing_table_user
     * @example
     * // Get one Testing_table_user
     * const testing_table_user = await prisma.testing_table_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends testing_table_userFindFirstOrThrowArgs>(args?: SelectSubset<T, testing_table_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__testing_table_userClient<$Result.GetResult<Prisma.$testing_table_userPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Testing_table_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testing_table_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testing_table_users
     * const testing_table_users = await prisma.testing_table_user.findMany()
     * 
     * // Get first 10 Testing_table_users
     * const testing_table_users = await prisma.testing_table_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testing_table_userWithIdOnly = await prisma.testing_table_user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends testing_table_userFindManyArgs>(args?: SelectSubset<T, testing_table_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testing_table_userPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Testing_table_user.
     * @param {testing_table_userCreateArgs} args - Arguments to create a Testing_table_user.
     * @example
     * // Create one Testing_table_user
     * const Testing_table_user = await prisma.testing_table_user.create({
     *   data: {
     *     // ... data to create a Testing_table_user
     *   }
     * })
     * 
     */
    create<T extends testing_table_userCreateArgs>(args: SelectSubset<T, testing_table_userCreateArgs<ExtArgs>>): Prisma__testing_table_userClient<$Result.GetResult<Prisma.$testing_table_userPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Testing_table_users.
     * @param {testing_table_userCreateManyArgs} args - Arguments to create many Testing_table_users.
     * @example
     * // Create many Testing_table_users
     * const testing_table_user = await prisma.testing_table_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends testing_table_userCreateManyArgs>(args?: SelectSubset<T, testing_table_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Testing_table_users and returns the data saved in the database.
     * @param {testing_table_userCreateManyAndReturnArgs} args - Arguments to create many Testing_table_users.
     * @example
     * // Create many Testing_table_users
     * const testing_table_user = await prisma.testing_table_user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Testing_table_users and only return the `id`
     * const testing_table_userWithIdOnly = await prisma.testing_table_user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends testing_table_userCreateManyAndReturnArgs>(args?: SelectSubset<T, testing_table_userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testing_table_userPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Testing_table_user.
     * @param {testing_table_userDeleteArgs} args - Arguments to delete one Testing_table_user.
     * @example
     * // Delete one Testing_table_user
     * const Testing_table_user = await prisma.testing_table_user.delete({
     *   where: {
     *     // ... filter to delete one Testing_table_user
     *   }
     * })
     * 
     */
    delete<T extends testing_table_userDeleteArgs>(args: SelectSubset<T, testing_table_userDeleteArgs<ExtArgs>>): Prisma__testing_table_userClient<$Result.GetResult<Prisma.$testing_table_userPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Testing_table_user.
     * @param {testing_table_userUpdateArgs} args - Arguments to update one Testing_table_user.
     * @example
     * // Update one Testing_table_user
     * const testing_table_user = await prisma.testing_table_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends testing_table_userUpdateArgs>(args: SelectSubset<T, testing_table_userUpdateArgs<ExtArgs>>): Prisma__testing_table_userClient<$Result.GetResult<Prisma.$testing_table_userPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Testing_table_users.
     * @param {testing_table_userDeleteManyArgs} args - Arguments to filter Testing_table_users to delete.
     * @example
     * // Delete a few Testing_table_users
     * const { count } = await prisma.testing_table_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends testing_table_userDeleteManyArgs>(args?: SelectSubset<T, testing_table_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testing_table_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testing_table_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testing_table_users
     * const testing_table_user = await prisma.testing_table_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends testing_table_userUpdateManyArgs>(args: SelectSubset<T, testing_table_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Testing_table_user.
     * @param {testing_table_userUpsertArgs} args - Arguments to update or create a Testing_table_user.
     * @example
     * // Update or create a Testing_table_user
     * const testing_table_user = await prisma.testing_table_user.upsert({
     *   create: {
     *     // ... data to create a Testing_table_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testing_table_user we want to update
     *   }
     * })
     */
    upsert<T extends testing_table_userUpsertArgs>(args: SelectSubset<T, testing_table_userUpsertArgs<ExtArgs>>): Prisma__testing_table_userClient<$Result.GetResult<Prisma.$testing_table_userPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Testing_table_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testing_table_userCountArgs} args - Arguments to filter Testing_table_users to count.
     * @example
     * // Count the number of Testing_table_users
     * const count = await prisma.testing_table_user.count({
     *   where: {
     *     // ... the filter for the Testing_table_users we want to count
     *   }
     * })
    **/
    count<T extends testing_table_userCountArgs>(
      args?: Subset<T, testing_table_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Testing_table_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testing_table_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Testing_table_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Testing_table_userAggregateArgs>(args: Subset<T, Testing_table_userAggregateArgs>): Prisma.PrismaPromise<GetTesting_table_userAggregateType<T>>

    /**
     * Group by Testing_table_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testing_table_userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends testing_table_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: testing_table_userGroupByArgs['orderBy'] }
        : { orderBy?: testing_table_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, testing_table_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTesting_table_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the testing_table_user model
   */
  readonly fields: testing_table_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for testing_table_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__testing_table_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the testing_table_user model
   */ 
  interface testing_table_userFieldRefs {
    readonly id: FieldRef<"testing_table_user", 'String'>
    readonly name: FieldRef<"testing_table_user", 'String'>
    readonly age: FieldRef<"testing_table_user", 'Int'>
    readonly gender: FieldRef<"testing_table_user", 'GENDER_ENUM_FOR_USER'>
    readonly rollNo: FieldRef<"testing_table_user", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * testing_table_user findUnique
   */
  export type testing_table_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testing_table_user
     */
    select?: testing_table_userSelect<ExtArgs> | null
    /**
     * Filter, which testing_table_user to fetch.
     */
    where: testing_table_userWhereUniqueInput
  }

  /**
   * testing_table_user findUniqueOrThrow
   */
  export type testing_table_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testing_table_user
     */
    select?: testing_table_userSelect<ExtArgs> | null
    /**
     * Filter, which testing_table_user to fetch.
     */
    where: testing_table_userWhereUniqueInput
  }

  /**
   * testing_table_user findFirst
   */
  export type testing_table_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testing_table_user
     */
    select?: testing_table_userSelect<ExtArgs> | null
    /**
     * Filter, which testing_table_user to fetch.
     */
    where?: testing_table_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testing_table_users to fetch.
     */
    orderBy?: testing_table_userOrderByWithRelationInput | testing_table_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testing_table_users.
     */
    cursor?: testing_table_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testing_table_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testing_table_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testing_table_users.
     */
    distinct?: Testing_table_userScalarFieldEnum | Testing_table_userScalarFieldEnum[]
  }

  /**
   * testing_table_user findFirstOrThrow
   */
  export type testing_table_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testing_table_user
     */
    select?: testing_table_userSelect<ExtArgs> | null
    /**
     * Filter, which testing_table_user to fetch.
     */
    where?: testing_table_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testing_table_users to fetch.
     */
    orderBy?: testing_table_userOrderByWithRelationInput | testing_table_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testing_table_users.
     */
    cursor?: testing_table_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testing_table_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testing_table_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testing_table_users.
     */
    distinct?: Testing_table_userScalarFieldEnum | Testing_table_userScalarFieldEnum[]
  }

  /**
   * testing_table_user findMany
   */
  export type testing_table_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testing_table_user
     */
    select?: testing_table_userSelect<ExtArgs> | null
    /**
     * Filter, which testing_table_users to fetch.
     */
    where?: testing_table_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testing_table_users to fetch.
     */
    orderBy?: testing_table_userOrderByWithRelationInput | testing_table_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing testing_table_users.
     */
    cursor?: testing_table_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testing_table_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testing_table_users.
     */
    skip?: number
    distinct?: Testing_table_userScalarFieldEnum | Testing_table_userScalarFieldEnum[]
  }

  /**
   * testing_table_user create
   */
  export type testing_table_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testing_table_user
     */
    select?: testing_table_userSelect<ExtArgs> | null
    /**
     * The data needed to create a testing_table_user.
     */
    data: XOR<testing_table_userCreateInput, testing_table_userUncheckedCreateInput>
  }

  /**
   * testing_table_user createMany
   */
  export type testing_table_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many testing_table_users.
     */
    data: testing_table_userCreateManyInput | testing_table_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * testing_table_user createManyAndReturn
   */
  export type testing_table_userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testing_table_user
     */
    select?: testing_table_userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many testing_table_users.
     */
    data: testing_table_userCreateManyInput | testing_table_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * testing_table_user update
   */
  export type testing_table_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testing_table_user
     */
    select?: testing_table_userSelect<ExtArgs> | null
    /**
     * The data needed to update a testing_table_user.
     */
    data: XOR<testing_table_userUpdateInput, testing_table_userUncheckedUpdateInput>
    /**
     * Choose, which testing_table_user to update.
     */
    where: testing_table_userWhereUniqueInput
  }

  /**
   * testing_table_user updateMany
   */
  export type testing_table_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update testing_table_users.
     */
    data: XOR<testing_table_userUpdateManyMutationInput, testing_table_userUncheckedUpdateManyInput>
    /**
     * Filter which testing_table_users to update
     */
    where?: testing_table_userWhereInput
  }

  /**
   * testing_table_user upsert
   */
  export type testing_table_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testing_table_user
     */
    select?: testing_table_userSelect<ExtArgs> | null
    /**
     * The filter to search for the testing_table_user to update in case it exists.
     */
    where: testing_table_userWhereUniqueInput
    /**
     * In case the testing_table_user found by the `where` argument doesn't exist, create a new testing_table_user with this data.
     */
    create: XOR<testing_table_userCreateInput, testing_table_userUncheckedCreateInput>
    /**
     * In case the testing_table_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<testing_table_userUpdateInput, testing_table_userUncheckedUpdateInput>
  }

  /**
   * testing_table_user delete
   */
  export type testing_table_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testing_table_user
     */
    select?: testing_table_userSelect<ExtArgs> | null
    /**
     * Filter which testing_table_user to delete.
     */
    where: testing_table_userWhereUniqueInput
  }

  /**
   * testing_table_user deleteMany
   */
  export type testing_table_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which testing_table_users to delete
     */
    where?: testing_table_userWhereInput
  }

  /**
   * testing_table_user without action
   */
  export type testing_table_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testing_table_user
     */
    select?: testing_table_userSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Testing_table_userScalarFieldEnum: {
    id: 'id',
    name: 'name',
    age: 'age',
    gender: 'gender',
    rollNo: 'rollNo'
  };

  export type Testing_table_userScalarFieldEnum = (typeof Testing_table_userScalarFieldEnum)[keyof typeof Testing_table_userScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'GENDER_ENUM_FOR_USER'
   */
  export type EnumGENDER_ENUM_FOR_USERFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GENDER_ENUM_FOR_USER'>
    


  /**
   * Reference to a field of type 'GENDER_ENUM_FOR_USER[]'
   */
  export type ListEnumGENDER_ENUM_FOR_USERFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GENDER_ENUM_FOR_USER[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type testing_table_userWhereInput = {
    AND?: testing_table_userWhereInput | testing_table_userWhereInput[]
    OR?: testing_table_userWhereInput[]
    NOT?: testing_table_userWhereInput | testing_table_userWhereInput[]
    id?: StringFilter<"testing_table_user"> | string
    name?: StringFilter<"testing_table_user"> | string
    age?: IntFilter<"testing_table_user"> | number
    gender?: EnumGENDER_ENUM_FOR_USERFilter<"testing_table_user"> | $Enums.GENDER_ENUM_FOR_USER
    rollNo?: IntFilter<"testing_table_user"> | number
  }

  export type testing_table_userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    rollNo?: SortOrder
  }

  export type testing_table_userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    rollNo?: number
    AND?: testing_table_userWhereInput | testing_table_userWhereInput[]
    OR?: testing_table_userWhereInput[]
    NOT?: testing_table_userWhereInput | testing_table_userWhereInput[]
    name?: StringFilter<"testing_table_user"> | string
    age?: IntFilter<"testing_table_user"> | number
    gender?: EnumGENDER_ENUM_FOR_USERFilter<"testing_table_user"> | $Enums.GENDER_ENUM_FOR_USER
  }, "id" | "id" | "rollNo">

  export type testing_table_userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    rollNo?: SortOrder
    _count?: testing_table_userCountOrderByAggregateInput
    _avg?: testing_table_userAvgOrderByAggregateInput
    _max?: testing_table_userMaxOrderByAggregateInput
    _min?: testing_table_userMinOrderByAggregateInput
    _sum?: testing_table_userSumOrderByAggregateInput
  }

  export type testing_table_userScalarWhereWithAggregatesInput = {
    AND?: testing_table_userScalarWhereWithAggregatesInput | testing_table_userScalarWhereWithAggregatesInput[]
    OR?: testing_table_userScalarWhereWithAggregatesInput[]
    NOT?: testing_table_userScalarWhereWithAggregatesInput | testing_table_userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"testing_table_user"> | string
    name?: StringWithAggregatesFilter<"testing_table_user"> | string
    age?: IntWithAggregatesFilter<"testing_table_user"> | number
    gender?: EnumGENDER_ENUM_FOR_USERWithAggregatesFilter<"testing_table_user"> | $Enums.GENDER_ENUM_FOR_USER
    rollNo?: IntWithAggregatesFilter<"testing_table_user"> | number
  }

  export type testing_table_userCreateInput = {
    id?: string
    name: string
    age: number
    gender: $Enums.GENDER_ENUM_FOR_USER
    rollNo: number
  }

  export type testing_table_userUncheckedCreateInput = {
    id?: string
    name: string
    age: number
    gender: $Enums.GENDER_ENUM_FOR_USER
    rollNo: number
  }

  export type testing_table_userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGENDER_ENUM_FOR_USERFieldUpdateOperationsInput | $Enums.GENDER_ENUM_FOR_USER
    rollNo?: IntFieldUpdateOperationsInput | number
  }

  export type testing_table_userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGENDER_ENUM_FOR_USERFieldUpdateOperationsInput | $Enums.GENDER_ENUM_FOR_USER
    rollNo?: IntFieldUpdateOperationsInput | number
  }

  export type testing_table_userCreateManyInput = {
    id?: string
    name: string
    age: number
    gender: $Enums.GENDER_ENUM_FOR_USER
    rollNo: number
  }

  export type testing_table_userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGENDER_ENUM_FOR_USERFieldUpdateOperationsInput | $Enums.GENDER_ENUM_FOR_USER
    rollNo?: IntFieldUpdateOperationsInput | number
  }

  export type testing_table_userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGENDER_ENUM_FOR_USERFieldUpdateOperationsInput | $Enums.GENDER_ENUM_FOR_USER
    rollNo?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumGENDER_ENUM_FOR_USERFilter<$PrismaModel = never> = {
    equals?: $Enums.GENDER_ENUM_FOR_USER | EnumGENDER_ENUM_FOR_USERFieldRefInput<$PrismaModel>
    in?: $Enums.GENDER_ENUM_FOR_USER[] | ListEnumGENDER_ENUM_FOR_USERFieldRefInput<$PrismaModel>
    notIn?: $Enums.GENDER_ENUM_FOR_USER[] | ListEnumGENDER_ENUM_FOR_USERFieldRefInput<$PrismaModel>
    not?: NestedEnumGENDER_ENUM_FOR_USERFilter<$PrismaModel> | $Enums.GENDER_ENUM_FOR_USER
  }

  export type testing_table_userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    rollNo?: SortOrder
  }

  export type testing_table_userAvgOrderByAggregateInput = {
    age?: SortOrder
    rollNo?: SortOrder
  }

  export type testing_table_userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    rollNo?: SortOrder
  }

  export type testing_table_userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    rollNo?: SortOrder
  }

  export type testing_table_userSumOrderByAggregateInput = {
    age?: SortOrder
    rollNo?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumGENDER_ENUM_FOR_USERWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GENDER_ENUM_FOR_USER | EnumGENDER_ENUM_FOR_USERFieldRefInput<$PrismaModel>
    in?: $Enums.GENDER_ENUM_FOR_USER[] | ListEnumGENDER_ENUM_FOR_USERFieldRefInput<$PrismaModel>
    notIn?: $Enums.GENDER_ENUM_FOR_USER[] | ListEnumGENDER_ENUM_FOR_USERFieldRefInput<$PrismaModel>
    not?: NestedEnumGENDER_ENUM_FOR_USERWithAggregatesFilter<$PrismaModel> | $Enums.GENDER_ENUM_FOR_USER
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGENDER_ENUM_FOR_USERFilter<$PrismaModel>
    _max?: NestedEnumGENDER_ENUM_FOR_USERFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGENDER_ENUM_FOR_USERFieldUpdateOperationsInput = {
    set?: $Enums.GENDER_ENUM_FOR_USER
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumGENDER_ENUM_FOR_USERFilter<$PrismaModel = never> = {
    equals?: $Enums.GENDER_ENUM_FOR_USER | EnumGENDER_ENUM_FOR_USERFieldRefInput<$PrismaModel>
    in?: $Enums.GENDER_ENUM_FOR_USER[] | ListEnumGENDER_ENUM_FOR_USERFieldRefInput<$PrismaModel>
    notIn?: $Enums.GENDER_ENUM_FOR_USER[] | ListEnumGENDER_ENUM_FOR_USERFieldRefInput<$PrismaModel>
    not?: NestedEnumGENDER_ENUM_FOR_USERFilter<$PrismaModel> | $Enums.GENDER_ENUM_FOR_USER
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumGENDER_ENUM_FOR_USERWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GENDER_ENUM_FOR_USER | EnumGENDER_ENUM_FOR_USERFieldRefInput<$PrismaModel>
    in?: $Enums.GENDER_ENUM_FOR_USER[] | ListEnumGENDER_ENUM_FOR_USERFieldRefInput<$PrismaModel>
    notIn?: $Enums.GENDER_ENUM_FOR_USER[] | ListEnumGENDER_ENUM_FOR_USERFieldRefInput<$PrismaModel>
    not?: NestedEnumGENDER_ENUM_FOR_USERWithAggregatesFilter<$PrismaModel> | $Enums.GENDER_ENUM_FOR_USER
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGENDER_ENUM_FOR_USERFilter<$PrismaModel>
    _max?: NestedEnumGENDER_ENUM_FOR_USERFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use testing_table_userDefaultArgs instead
     */
    export type testing_table_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = testing_table_userDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}