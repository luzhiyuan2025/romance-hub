
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
 * Model UserInfo
 * 
 */
export type UserInfo = $Result.DefaultSelection<Prisma.$UserInfoPayload>
/**
 * Model TaskList
 * 
 */
export type TaskList = $Result.DefaultSelection<Prisma.$TaskListPayload>
/**
 * Model GiftList
 * 
 */
export type GiftList = $Result.DefaultSelection<Prisma.$GiftListPayload>
/**
 * Model WhisperList
 * 
 */
export type WhisperList = $Result.DefaultSelection<Prisma.$WhisperListPayload>
/**
 * Model FavouriteList
 * 
 */
export type FavouriteList = $Result.DefaultSelection<Prisma.$FavouriteListPayload>
/**
 * Model SystemConfig
 * 
 */
export type SystemConfig = $Result.DefaultSelection<Prisma.$SystemConfigPayload>
/**
 * Model ImageBedConfig
 * 
 */
export type ImageBedConfig = $Result.DefaultSelection<Prisma.$ImageBedConfigPayload>
/**
 * Model NotificationConfig
 * 
 */
export type NotificationConfig = $Result.DefaultSelection<Prisma.$NotificationConfigPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserInfos
 * const userInfos = await prisma.userInfo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more UserInfos
   * const userInfos = await prisma.userInfo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userInfo`: Exposes CRUD operations for the **UserInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserInfos
    * const userInfos = await prisma.userInfo.findMany()
    * ```
    */
  get userInfo(): Prisma.UserInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskList`: Exposes CRUD operations for the **TaskList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskLists
    * const taskLists = await prisma.taskList.findMany()
    * ```
    */
  get taskList(): Prisma.TaskListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.giftList`: Exposes CRUD operations for the **GiftList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GiftLists
    * const giftLists = await prisma.giftList.findMany()
    * ```
    */
  get giftList(): Prisma.GiftListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whisperList`: Exposes CRUD operations for the **WhisperList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhisperLists
    * const whisperLists = await prisma.whisperList.findMany()
    * ```
    */
  get whisperList(): Prisma.WhisperListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favouriteList`: Exposes CRUD operations for the **FavouriteList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavouriteLists
    * const favouriteLists = await prisma.favouriteList.findMany()
    * ```
    */
  get favouriteList(): Prisma.FavouriteListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemConfig`: Exposes CRUD operations for the **SystemConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemConfigs
    * const systemConfigs = await prisma.systemConfig.findMany()
    * ```
    */
  get systemConfig(): Prisma.SystemConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imageBedConfig`: Exposes CRUD operations for the **ImageBedConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImageBedConfigs
    * const imageBedConfigs = await prisma.imageBedConfig.findMany()
    * ```
    */
  get imageBedConfig(): Prisma.ImageBedConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationConfig`: Exposes CRUD operations for the **NotificationConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationConfigs
    * const notificationConfigs = await prisma.notificationConfig.findMany()
    * ```
    */
  get notificationConfig(): Prisma.NotificationConfigDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    UserInfo: 'UserInfo',
    TaskList: 'TaskList',
    GiftList: 'GiftList',
    WhisperList: 'WhisperList',
    FavouriteList: 'FavouriteList',
    SystemConfig: 'SystemConfig',
    ImageBedConfig: 'ImageBedConfig',
    NotificationConfig: 'NotificationConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userInfo" | "taskList" | "giftList" | "whisperList" | "favouriteList" | "systemConfig" | "imageBedConfig" | "notificationConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserInfo: {
        payload: Prisma.$UserInfoPayload<ExtArgs>
        fields: Prisma.UserInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          findFirst: {
            args: Prisma.UserInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          findMany: {
            args: Prisma.UserInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>[]
          }
          create: {
            args: Prisma.UserInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          createMany: {
            args: Prisma.UserInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>[]
          }
          delete: {
            args: Prisma.UserInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          update: {
            args: Prisma.UserInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          deleteMany: {
            args: Prisma.UserInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>[]
          }
          upsert: {
            args: Prisma.UserInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          aggregate: {
            args: Prisma.UserInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserInfo>
          }
          groupBy: {
            args: Prisma.UserInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserInfoCountArgs<ExtArgs>
            result: $Utils.Optional<UserInfoCountAggregateOutputType> | number
          }
        }
      }
      TaskList: {
        payload: Prisma.$TaskListPayload<ExtArgs>
        fields: Prisma.TaskListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload>
          }
          findFirst: {
            args: Prisma.TaskListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload>
          }
          findMany: {
            args: Prisma.TaskListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload>[]
          }
          create: {
            args: Prisma.TaskListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload>
          }
          createMany: {
            args: Prisma.TaskListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload>[]
          }
          delete: {
            args: Prisma.TaskListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload>
          }
          update: {
            args: Prisma.TaskListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload>
          }
          deleteMany: {
            args: Prisma.TaskListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload>[]
          }
          upsert: {
            args: Prisma.TaskListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload>
          }
          aggregate: {
            args: Prisma.TaskListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskList>
          }
          groupBy: {
            args: Prisma.TaskListGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskListGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskListCountArgs<ExtArgs>
            result: $Utils.Optional<TaskListCountAggregateOutputType> | number
          }
        }
      }
      GiftList: {
        payload: Prisma.$GiftListPayload<ExtArgs>
        fields: Prisma.GiftListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GiftListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GiftListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftListPayload>
          }
          findFirst: {
            args: Prisma.GiftListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GiftListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftListPayload>
          }
          findMany: {
            args: Prisma.GiftListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftListPayload>[]
          }
          create: {
            args: Prisma.GiftListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftListPayload>
          }
          createMany: {
            args: Prisma.GiftListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GiftListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftListPayload>[]
          }
          delete: {
            args: Prisma.GiftListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftListPayload>
          }
          update: {
            args: Prisma.GiftListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftListPayload>
          }
          deleteMany: {
            args: Prisma.GiftListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GiftListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GiftListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftListPayload>[]
          }
          upsert: {
            args: Prisma.GiftListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftListPayload>
          }
          aggregate: {
            args: Prisma.GiftListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGiftList>
          }
          groupBy: {
            args: Prisma.GiftListGroupByArgs<ExtArgs>
            result: $Utils.Optional<GiftListGroupByOutputType>[]
          }
          count: {
            args: Prisma.GiftListCountArgs<ExtArgs>
            result: $Utils.Optional<GiftListCountAggregateOutputType> | number
          }
        }
      }
      WhisperList: {
        payload: Prisma.$WhisperListPayload<ExtArgs>
        fields: Prisma.WhisperListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhisperListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhisperListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhisperListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhisperListPayload>
          }
          findFirst: {
            args: Prisma.WhisperListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhisperListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhisperListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhisperListPayload>
          }
          findMany: {
            args: Prisma.WhisperListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhisperListPayload>[]
          }
          create: {
            args: Prisma.WhisperListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhisperListPayload>
          }
          createMany: {
            args: Prisma.WhisperListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WhisperListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhisperListPayload>[]
          }
          delete: {
            args: Prisma.WhisperListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhisperListPayload>
          }
          update: {
            args: Prisma.WhisperListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhisperListPayload>
          }
          deleteMany: {
            args: Prisma.WhisperListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhisperListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WhisperListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhisperListPayload>[]
          }
          upsert: {
            args: Prisma.WhisperListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhisperListPayload>
          }
          aggregate: {
            args: Prisma.WhisperListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhisperList>
          }
          groupBy: {
            args: Prisma.WhisperListGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhisperListGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhisperListCountArgs<ExtArgs>
            result: $Utils.Optional<WhisperListCountAggregateOutputType> | number
          }
        }
      }
      FavouriteList: {
        payload: Prisma.$FavouriteListPayload<ExtArgs>
        fields: Prisma.FavouriteListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavouriteListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavouriteListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteListPayload>
          }
          findFirst: {
            args: Prisma.FavouriteListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavouriteListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteListPayload>
          }
          findMany: {
            args: Prisma.FavouriteListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteListPayload>[]
          }
          create: {
            args: Prisma.FavouriteListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteListPayload>
          }
          createMany: {
            args: Prisma.FavouriteListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavouriteListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteListPayload>[]
          }
          delete: {
            args: Prisma.FavouriteListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteListPayload>
          }
          update: {
            args: Prisma.FavouriteListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteListPayload>
          }
          deleteMany: {
            args: Prisma.FavouriteListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavouriteListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavouriteListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteListPayload>[]
          }
          upsert: {
            args: Prisma.FavouriteListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteListPayload>
          }
          aggregate: {
            args: Prisma.FavouriteListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavouriteList>
          }
          groupBy: {
            args: Prisma.FavouriteListGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavouriteListGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavouriteListCountArgs<ExtArgs>
            result: $Utils.Optional<FavouriteListCountAggregateOutputType> | number
          }
        }
      }
      SystemConfig: {
        payload: Prisma.$SystemConfigPayload<ExtArgs>
        fields: Prisma.SystemConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          findFirst: {
            args: Prisma.SystemConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          findMany: {
            args: Prisma.SystemConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          create: {
            args: Prisma.SystemConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          createMany: {
            args: Prisma.SystemConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          delete: {
            args: Prisma.SystemConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          update: {
            args: Prisma.SystemConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          deleteMany: {
            args: Prisma.SystemConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          upsert: {
            args: Prisma.SystemConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          aggregate: {
            args: Prisma.SystemConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemConfig>
          }
          groupBy: {
            args: Prisma.SystemConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemConfigCountArgs<ExtArgs>
            result: $Utils.Optional<SystemConfigCountAggregateOutputType> | number
          }
        }
      }
      ImageBedConfig: {
        payload: Prisma.$ImageBedConfigPayload<ExtArgs>
        fields: Prisma.ImageBedConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageBedConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageBedConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageBedConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageBedConfigPayload>
          }
          findFirst: {
            args: Prisma.ImageBedConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageBedConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageBedConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageBedConfigPayload>
          }
          findMany: {
            args: Prisma.ImageBedConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageBedConfigPayload>[]
          }
          create: {
            args: Prisma.ImageBedConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageBedConfigPayload>
          }
          createMany: {
            args: Prisma.ImageBedConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageBedConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageBedConfigPayload>[]
          }
          delete: {
            args: Prisma.ImageBedConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageBedConfigPayload>
          }
          update: {
            args: Prisma.ImageBedConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageBedConfigPayload>
          }
          deleteMany: {
            args: Prisma.ImageBedConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageBedConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageBedConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageBedConfigPayload>[]
          }
          upsert: {
            args: Prisma.ImageBedConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageBedConfigPayload>
          }
          aggregate: {
            args: Prisma.ImageBedConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImageBedConfig>
          }
          groupBy: {
            args: Prisma.ImageBedConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageBedConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageBedConfigCountArgs<ExtArgs>
            result: $Utils.Optional<ImageBedConfigCountAggregateOutputType> | number
          }
        }
      }
      NotificationConfig: {
        payload: Prisma.$NotificationConfigPayload<ExtArgs>
        fields: Prisma.NotificationConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationConfigPayload>
          }
          findFirst: {
            args: Prisma.NotificationConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationConfigPayload>
          }
          findMany: {
            args: Prisma.NotificationConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationConfigPayload>[]
          }
          create: {
            args: Prisma.NotificationConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationConfigPayload>
          }
          createMany: {
            args: Prisma.NotificationConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationConfigPayload>[]
          }
          delete: {
            args: Prisma.NotificationConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationConfigPayload>
          }
          update: {
            args: Prisma.NotificationConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationConfigPayload>
          }
          deleteMany: {
            args: Prisma.NotificationConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationConfigPayload>[]
          }
          upsert: {
            args: Prisma.NotificationConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationConfigPayload>
          }
          aggregate: {
            args: Prisma.NotificationConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationConfig>
          }
          groupBy: {
            args: Prisma.NotificationConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationConfigCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationConfigCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    userInfo?: UserInfoOmit
    taskList?: TaskListOmit
    giftList?: GiftListOmit
    whisperList?: WhisperListOmit
    favouriteList?: FavouriteListOmit
    systemConfig?: SystemConfigOmit
    imageBedConfig?: ImageBedConfigOmit
    notificationConfig?: NotificationConfigOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserInfoCountOutputType
   */

  export type UserInfoCountOutputType = {
    favourites: number
    publishedGifts: number
    publishedTasks: number
    receivedTasks: number
    publishedWhispers: number
    receivedWhispers: number
  }

  export type UserInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favourites?: boolean | UserInfoCountOutputTypeCountFavouritesArgs
    publishedGifts?: boolean | UserInfoCountOutputTypeCountPublishedGiftsArgs
    publishedTasks?: boolean | UserInfoCountOutputTypeCountPublishedTasksArgs
    receivedTasks?: boolean | UserInfoCountOutputTypeCountReceivedTasksArgs
    publishedWhispers?: boolean | UserInfoCountOutputTypeCountPublishedWhispersArgs
    receivedWhispers?: boolean | UserInfoCountOutputTypeCountReceivedWhispersArgs
  }

  // Custom InputTypes
  /**
   * UserInfoCountOutputType without action
   */
  export type UserInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfoCountOutputType
     */
    select?: UserInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserInfoCountOutputType without action
   */
  export type UserInfoCountOutputTypeCountFavouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouriteListWhereInput
  }

  /**
   * UserInfoCountOutputType without action
   */
  export type UserInfoCountOutputTypeCountPublishedGiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiftListWhereInput
  }

  /**
   * UserInfoCountOutputType without action
   */
  export type UserInfoCountOutputTypeCountPublishedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskListWhereInput
  }

  /**
   * UserInfoCountOutputType without action
   */
  export type UserInfoCountOutputTypeCountReceivedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskListWhereInput
  }

  /**
   * UserInfoCountOutputType without action
   */
  export type UserInfoCountOutputTypeCountPublishedWhispersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhisperListWhereInput
  }

  /**
   * UserInfoCountOutputType without action
   */
  export type UserInfoCountOutputTypeCountReceivedWhispersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhisperListWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserInfo
   */

  export type AggregateUserInfo = {
    _count: UserInfoCountAggregateOutputType | null
    _avg: UserInfoAvgAggregateOutputType | null
    _sum: UserInfoSumAggregateOutputType | null
    _min: UserInfoMinAggregateOutputType | null
    _max: UserInfoMaxAggregateOutputType | null
  }

  export type UserInfoAvgAggregateOutputType = {
    userId: number | null
    score: number | null
  }

  export type UserInfoSumAggregateOutputType = {
    userId: number | null
    score: number | null
  }

  export type UserInfoMinAggregateOutputType = {
    userId: number | null
    userEmail: string | null
    username: string | null
    password: string | null
    avatar: string | null
    describeBySelf: string | null
    registrationTime: Date | null
    lover: string | null
    score: number | null
  }

  export type UserInfoMaxAggregateOutputType = {
    userId: number | null
    userEmail: string | null
    username: string | null
    password: string | null
    avatar: string | null
    describeBySelf: string | null
    registrationTime: Date | null
    lover: string | null
    score: number | null
  }

  export type UserInfoCountAggregateOutputType = {
    userId: number
    userEmail: number
    username: number
    password: number
    avatar: number
    describeBySelf: number
    registrationTime: number
    lover: number
    score: number
    _all: number
  }


  export type UserInfoAvgAggregateInputType = {
    userId?: true
    score?: true
  }

  export type UserInfoSumAggregateInputType = {
    userId?: true
    score?: true
  }

  export type UserInfoMinAggregateInputType = {
    userId?: true
    userEmail?: true
    username?: true
    password?: true
    avatar?: true
    describeBySelf?: true
    registrationTime?: true
    lover?: true
    score?: true
  }

  export type UserInfoMaxAggregateInputType = {
    userId?: true
    userEmail?: true
    username?: true
    password?: true
    avatar?: true
    describeBySelf?: true
    registrationTime?: true
    lover?: true
    score?: true
  }

  export type UserInfoCountAggregateInputType = {
    userId?: true
    userEmail?: true
    username?: true
    password?: true
    avatar?: true
    describeBySelf?: true
    registrationTime?: true
    lover?: true
    score?: true
    _all?: true
  }

  export type UserInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInfo to aggregate.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserInfos
    **/
    _count?: true | UserInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserInfoMaxAggregateInputType
  }

  export type GetUserInfoAggregateType<T extends UserInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateUserInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserInfo[P]>
      : GetScalarType<T[P], AggregateUserInfo[P]>
  }




  export type UserInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInfoWhereInput
    orderBy?: UserInfoOrderByWithAggregationInput | UserInfoOrderByWithAggregationInput[]
    by: UserInfoScalarFieldEnum[] | UserInfoScalarFieldEnum
    having?: UserInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserInfoCountAggregateInputType | true
    _avg?: UserInfoAvgAggregateInputType
    _sum?: UserInfoSumAggregateInputType
    _min?: UserInfoMinAggregateInputType
    _max?: UserInfoMaxAggregateInputType
  }

  export type UserInfoGroupByOutputType = {
    userId: number
    userEmail: string
    username: string
    password: string
    avatar: string | null
    describeBySelf: string | null
    registrationTime: Date
    lover: string
    score: number
    _count: UserInfoCountAggregateOutputType | null
    _avg: UserInfoAvgAggregateOutputType | null
    _sum: UserInfoSumAggregateOutputType | null
    _min: UserInfoMinAggregateOutputType | null
    _max: UserInfoMaxAggregateOutputType | null
  }

  type GetUserInfoGroupByPayload<T extends UserInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserInfoGroupByOutputType[P]>
            : GetScalarType<T[P], UserInfoGroupByOutputType[P]>
        }
      >
    >


  export type UserInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userEmail?: boolean
    username?: boolean
    password?: boolean
    avatar?: boolean
    describeBySelf?: boolean
    registrationTime?: boolean
    lover?: boolean
    score?: boolean
    favourites?: boolean | UserInfo$favouritesArgs<ExtArgs>
    publishedGifts?: boolean | UserInfo$publishedGiftsArgs<ExtArgs>
    publishedTasks?: boolean | UserInfo$publishedTasksArgs<ExtArgs>
    receivedTasks?: boolean | UserInfo$receivedTasksArgs<ExtArgs>
    publishedWhispers?: boolean | UserInfo$publishedWhispersArgs<ExtArgs>
    receivedWhispers?: boolean | UserInfo$receivedWhispersArgs<ExtArgs>
    _count?: boolean | UserInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInfo"]>

  export type UserInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userEmail?: boolean
    username?: boolean
    password?: boolean
    avatar?: boolean
    describeBySelf?: boolean
    registrationTime?: boolean
    lover?: boolean
    score?: boolean
  }, ExtArgs["result"]["userInfo"]>

  export type UserInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userEmail?: boolean
    username?: boolean
    password?: boolean
    avatar?: boolean
    describeBySelf?: boolean
    registrationTime?: boolean
    lover?: boolean
    score?: boolean
  }, ExtArgs["result"]["userInfo"]>

  export type UserInfoSelectScalar = {
    userId?: boolean
    userEmail?: boolean
    username?: boolean
    password?: boolean
    avatar?: boolean
    describeBySelf?: boolean
    registrationTime?: boolean
    lover?: boolean
    score?: boolean
  }

  export type UserInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "userEmail" | "username" | "password" | "avatar" | "describeBySelf" | "registrationTime" | "lover" | "score", ExtArgs["result"]["userInfo"]>
  export type UserInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favourites?: boolean | UserInfo$favouritesArgs<ExtArgs>
    publishedGifts?: boolean | UserInfo$publishedGiftsArgs<ExtArgs>
    publishedTasks?: boolean | UserInfo$publishedTasksArgs<ExtArgs>
    receivedTasks?: boolean | UserInfo$receivedTasksArgs<ExtArgs>
    publishedWhispers?: boolean | UserInfo$publishedWhispersArgs<ExtArgs>
    receivedWhispers?: boolean | UserInfo$receivedWhispersArgs<ExtArgs>
    _count?: boolean | UserInfoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserInfo"
    objects: {
      favourites: Prisma.$FavouriteListPayload<ExtArgs>[]
      publishedGifts: Prisma.$GiftListPayload<ExtArgs>[]
      publishedTasks: Prisma.$TaskListPayload<ExtArgs>[]
      receivedTasks: Prisma.$TaskListPayload<ExtArgs>[]
      publishedWhispers: Prisma.$WhisperListPayload<ExtArgs>[]
      receivedWhispers: Prisma.$WhisperListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      userEmail: string
      username: string
      password: string
      avatar: string | null
      describeBySelf: string | null
      registrationTime: Date
      lover: string
      score: number
    }, ExtArgs["result"]["userInfo"]>
    composites: {}
  }

  type UserInfoGetPayload<S extends boolean | null | undefined | UserInfoDefaultArgs> = $Result.GetResult<Prisma.$UserInfoPayload, S>

  type UserInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserInfoCountAggregateInputType | true
    }

  export interface UserInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserInfo'], meta: { name: 'UserInfo' } }
    /**
     * Find zero or one UserInfo that matches the filter.
     * @param {UserInfoFindUniqueArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserInfoFindUniqueArgs>(args: SelectSubset<T, UserInfoFindUniqueArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserInfoFindUniqueOrThrowArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, UserInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindFirstArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserInfoFindFirstArgs>(args?: SelectSubset<T, UserInfoFindFirstArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindFirstOrThrowArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, UserInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserInfos
     * const userInfos = await prisma.userInfo.findMany()
     * 
     * // Get first 10 UserInfos
     * const userInfos = await prisma.userInfo.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userInfoWithUserIdOnly = await prisma.userInfo.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserInfoFindManyArgs>(args?: SelectSubset<T, UserInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserInfo.
     * @param {UserInfoCreateArgs} args - Arguments to create a UserInfo.
     * @example
     * // Create one UserInfo
     * const UserInfo = await prisma.userInfo.create({
     *   data: {
     *     // ... data to create a UserInfo
     *   }
     * })
     * 
     */
    create<T extends UserInfoCreateArgs>(args: SelectSubset<T, UserInfoCreateArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserInfos.
     * @param {UserInfoCreateManyArgs} args - Arguments to create many UserInfos.
     * @example
     * // Create many UserInfos
     * const userInfo = await prisma.userInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserInfoCreateManyArgs>(args?: SelectSubset<T, UserInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserInfos and returns the data saved in the database.
     * @param {UserInfoCreateManyAndReturnArgs} args - Arguments to create many UserInfos.
     * @example
     * // Create many UserInfos
     * const userInfo = await prisma.userInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserInfos and only return the `userId`
     * const userInfoWithUserIdOnly = await prisma.userInfo.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, UserInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserInfo.
     * @param {UserInfoDeleteArgs} args - Arguments to delete one UserInfo.
     * @example
     * // Delete one UserInfo
     * const UserInfo = await prisma.userInfo.delete({
     *   where: {
     *     // ... filter to delete one UserInfo
     *   }
     * })
     * 
     */
    delete<T extends UserInfoDeleteArgs>(args: SelectSubset<T, UserInfoDeleteArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserInfo.
     * @param {UserInfoUpdateArgs} args - Arguments to update one UserInfo.
     * @example
     * // Update one UserInfo
     * const userInfo = await prisma.userInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserInfoUpdateArgs>(args: SelectSubset<T, UserInfoUpdateArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserInfos.
     * @param {UserInfoDeleteManyArgs} args - Arguments to filter UserInfos to delete.
     * @example
     * // Delete a few UserInfos
     * const { count } = await prisma.userInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserInfoDeleteManyArgs>(args?: SelectSubset<T, UserInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserInfos
     * const userInfo = await prisma.userInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserInfoUpdateManyArgs>(args: SelectSubset<T, UserInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInfos and returns the data updated in the database.
     * @param {UserInfoUpdateManyAndReturnArgs} args - Arguments to update many UserInfos.
     * @example
     * // Update many UserInfos
     * const userInfo = await prisma.userInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserInfos and only return the `userId`
     * const userInfoWithUserIdOnly = await prisma.userInfo.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, UserInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserInfo.
     * @param {UserInfoUpsertArgs} args - Arguments to update or create a UserInfo.
     * @example
     * // Update or create a UserInfo
     * const userInfo = await prisma.userInfo.upsert({
     *   create: {
     *     // ... data to create a UserInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserInfo we want to update
     *   }
     * })
     */
    upsert<T extends UserInfoUpsertArgs>(args: SelectSubset<T, UserInfoUpsertArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoCountArgs} args - Arguments to filter UserInfos to count.
     * @example
     * // Count the number of UserInfos
     * const count = await prisma.userInfo.count({
     *   where: {
     *     // ... the filter for the UserInfos we want to count
     *   }
     * })
    **/
    count<T extends UserInfoCountArgs>(
      args?: Subset<T, UserInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserInfoAggregateArgs>(args: Subset<T, UserInfoAggregateArgs>): Prisma.PrismaPromise<GetUserInfoAggregateType<T>>

    /**
     * Group by UserInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoGroupByArgs} args - Group by arguments.
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
      T extends UserInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserInfoGroupByArgs['orderBy'] }
        : { orderBy?: UserInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserInfo model
   */
  readonly fields: UserInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favourites<T extends UserInfo$favouritesArgs<ExtArgs> = {}>(args?: Subset<T, UserInfo$favouritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouriteListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    publishedGifts<T extends UserInfo$publishedGiftsArgs<ExtArgs> = {}>(args?: Subset<T, UserInfo$publishedGiftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    publishedTasks<T extends UserInfo$publishedTasksArgs<ExtArgs> = {}>(args?: Subset<T, UserInfo$publishedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedTasks<T extends UserInfo$receivedTasksArgs<ExtArgs> = {}>(args?: Subset<T, UserInfo$receivedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    publishedWhispers<T extends UserInfo$publishedWhispersArgs<ExtArgs> = {}>(args?: Subset<T, UserInfo$publishedWhispersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhisperListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedWhispers<T extends UserInfo$receivedWhispersArgs<ExtArgs> = {}>(args?: Subset<T, UserInfo$receivedWhispersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhisperListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserInfo model
   */
  interface UserInfoFieldRefs {
    readonly userId: FieldRef<"UserInfo", 'Int'>
    readonly userEmail: FieldRef<"UserInfo", 'String'>
    readonly username: FieldRef<"UserInfo", 'String'>
    readonly password: FieldRef<"UserInfo", 'String'>
    readonly avatar: FieldRef<"UserInfo", 'String'>
    readonly describeBySelf: FieldRef<"UserInfo", 'String'>
    readonly registrationTime: FieldRef<"UserInfo", 'DateTime'>
    readonly lover: FieldRef<"UserInfo", 'String'>
    readonly score: FieldRef<"UserInfo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserInfo findUnique
   */
  export type UserInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo findUniqueOrThrow
   */
  export type UserInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo findFirst
   */
  export type UserInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInfos.
     */
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo findFirstOrThrow
   */
  export type UserInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInfos.
     */
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo findMany
   */
  export type UserInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfos to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo create
   */
  export type UserInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a UserInfo.
     */
    data: XOR<UserInfoCreateInput, UserInfoUncheckedCreateInput>
  }

  /**
   * UserInfo createMany
   */
  export type UserInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserInfos.
     */
    data: UserInfoCreateManyInput | UserInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserInfo createManyAndReturn
   */
  export type UserInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * The data used to create many UserInfos.
     */
    data: UserInfoCreateManyInput | UserInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserInfo update
   */
  export type UserInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a UserInfo.
     */
    data: XOR<UserInfoUpdateInput, UserInfoUncheckedUpdateInput>
    /**
     * Choose, which UserInfo to update.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo updateMany
   */
  export type UserInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserInfos.
     */
    data: XOR<UserInfoUpdateManyMutationInput, UserInfoUncheckedUpdateManyInput>
    /**
     * Filter which UserInfos to update
     */
    where?: UserInfoWhereInput
    /**
     * Limit how many UserInfos to update.
     */
    limit?: number
  }

  /**
   * UserInfo updateManyAndReturn
   */
  export type UserInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * The data used to update UserInfos.
     */
    data: XOR<UserInfoUpdateManyMutationInput, UserInfoUncheckedUpdateManyInput>
    /**
     * Filter which UserInfos to update
     */
    where?: UserInfoWhereInput
    /**
     * Limit how many UserInfos to update.
     */
    limit?: number
  }

  /**
   * UserInfo upsert
   */
  export type UserInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the UserInfo to update in case it exists.
     */
    where: UserInfoWhereUniqueInput
    /**
     * In case the UserInfo found by the `where` argument doesn't exist, create a new UserInfo with this data.
     */
    create: XOR<UserInfoCreateInput, UserInfoUncheckedCreateInput>
    /**
     * In case the UserInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserInfoUpdateInput, UserInfoUncheckedUpdateInput>
  }

  /**
   * UserInfo delete
   */
  export type UserInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter which UserInfo to delete.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo deleteMany
   */
  export type UserInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInfos to delete
     */
    where?: UserInfoWhereInput
    /**
     * Limit how many UserInfos to delete.
     */
    limit?: number
  }

  /**
   * UserInfo.favourites
   */
  export type UserInfo$favouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteList
     */
    select?: FavouriteListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteList
     */
    omit?: FavouriteListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteListInclude<ExtArgs> | null
    where?: FavouriteListWhereInput
    orderBy?: FavouriteListOrderByWithRelationInput | FavouriteListOrderByWithRelationInput[]
    cursor?: FavouriteListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavouriteListScalarFieldEnum | FavouriteListScalarFieldEnum[]
  }

  /**
   * UserInfo.publishedGifts
   */
  export type UserInfo$publishedGiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftList
     */
    select?: GiftListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftList
     */
    omit?: GiftListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftListInclude<ExtArgs> | null
    where?: GiftListWhereInput
    orderBy?: GiftListOrderByWithRelationInput | GiftListOrderByWithRelationInput[]
    cursor?: GiftListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiftListScalarFieldEnum | GiftListScalarFieldEnum[]
  }

  /**
   * UserInfo.publishedTasks
   */
  export type UserInfo$publishedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskList
     */
    omit?: TaskListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
    where?: TaskListWhereInput
    orderBy?: TaskListOrderByWithRelationInput | TaskListOrderByWithRelationInput[]
    cursor?: TaskListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskListScalarFieldEnum | TaskListScalarFieldEnum[]
  }

  /**
   * UserInfo.receivedTasks
   */
  export type UserInfo$receivedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskList
     */
    omit?: TaskListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
    where?: TaskListWhereInput
    orderBy?: TaskListOrderByWithRelationInput | TaskListOrderByWithRelationInput[]
    cursor?: TaskListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskListScalarFieldEnum | TaskListScalarFieldEnum[]
  }

  /**
   * UserInfo.publishedWhispers
   */
  export type UserInfo$publishedWhispersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhisperList
     */
    select?: WhisperListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhisperList
     */
    omit?: WhisperListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhisperListInclude<ExtArgs> | null
    where?: WhisperListWhereInput
    orderBy?: WhisperListOrderByWithRelationInput | WhisperListOrderByWithRelationInput[]
    cursor?: WhisperListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhisperListScalarFieldEnum | WhisperListScalarFieldEnum[]
  }

  /**
   * UserInfo.receivedWhispers
   */
  export type UserInfo$receivedWhispersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhisperList
     */
    select?: WhisperListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhisperList
     */
    omit?: WhisperListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhisperListInclude<ExtArgs> | null
    where?: WhisperListWhereInput
    orderBy?: WhisperListOrderByWithRelationInput | WhisperListOrderByWithRelationInput[]
    cursor?: WhisperListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhisperListScalarFieldEnum | WhisperListScalarFieldEnum[]
  }

  /**
   * UserInfo without action
   */
  export type UserInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
  }


  /**
   * Model TaskList
   */

  export type AggregateTaskList = {
    _count: TaskListCountAggregateOutputType | null
    _avg: TaskListAvgAggregateOutputType | null
    _sum: TaskListSumAggregateOutputType | null
    _min: TaskListMinAggregateOutputType | null
    _max: TaskListMaxAggregateOutputType | null
  }

  export type TaskListAvgAggregateOutputType = {
    taskId: number | null
    taskScore: number | null
  }

  export type TaskListSumAggregateOutputType = {
    taskId: number | null
    taskScore: number | null
  }

  export type TaskListMinAggregateOutputType = {
    taskId: number | null
    publisherEmail: string | null
    receiverEmail: string | null
    taskName: string | null
    taskDesc: string | null
    taskImage: string | null
    taskScore: number | null
    taskStatus: string | null
    creationTime: Date | null
    completionTime: Date | null
    isApprove: boolean | null
  }

  export type TaskListMaxAggregateOutputType = {
    taskId: number | null
    publisherEmail: string | null
    receiverEmail: string | null
    taskName: string | null
    taskDesc: string | null
    taskImage: string | null
    taskScore: number | null
    taskStatus: string | null
    creationTime: Date | null
    completionTime: Date | null
    isApprove: boolean | null
  }

  export type TaskListCountAggregateOutputType = {
    taskId: number
    publisherEmail: number
    receiverEmail: number
    taskName: number
    taskDesc: number
    taskImage: number
    taskScore: number
    taskStatus: number
    creationTime: number
    completionTime: number
    isApprove: number
    _all: number
  }


  export type TaskListAvgAggregateInputType = {
    taskId?: true
    taskScore?: true
  }

  export type TaskListSumAggregateInputType = {
    taskId?: true
    taskScore?: true
  }

  export type TaskListMinAggregateInputType = {
    taskId?: true
    publisherEmail?: true
    receiverEmail?: true
    taskName?: true
    taskDesc?: true
    taskImage?: true
    taskScore?: true
    taskStatus?: true
    creationTime?: true
    completionTime?: true
    isApprove?: true
  }

  export type TaskListMaxAggregateInputType = {
    taskId?: true
    publisherEmail?: true
    receiverEmail?: true
    taskName?: true
    taskDesc?: true
    taskImage?: true
    taskScore?: true
    taskStatus?: true
    creationTime?: true
    completionTime?: true
    isApprove?: true
  }

  export type TaskListCountAggregateInputType = {
    taskId?: true
    publisherEmail?: true
    receiverEmail?: true
    taskName?: true
    taskDesc?: true
    taskImage?: true
    taskScore?: true
    taskStatus?: true
    creationTime?: true
    completionTime?: true
    isApprove?: true
    _all?: true
  }

  export type TaskListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskList to aggregate.
     */
    where?: TaskListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLists to fetch.
     */
    orderBy?: TaskListOrderByWithRelationInput | TaskListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskLists
    **/
    _count?: true | TaskListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskListMaxAggregateInputType
  }

  export type GetTaskListAggregateType<T extends TaskListAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskList[P]>
      : GetScalarType<T[P], AggregateTaskList[P]>
  }




  export type TaskListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskListWhereInput
    orderBy?: TaskListOrderByWithAggregationInput | TaskListOrderByWithAggregationInput[]
    by: TaskListScalarFieldEnum[] | TaskListScalarFieldEnum
    having?: TaskListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskListCountAggregateInputType | true
    _avg?: TaskListAvgAggregateInputType
    _sum?: TaskListSumAggregateInputType
    _min?: TaskListMinAggregateInputType
    _max?: TaskListMaxAggregateInputType
  }

  export type TaskListGroupByOutputType = {
    taskId: number
    publisherEmail: string
    receiverEmail: string | null
    taskName: string
    taskDesc: string | null
    taskImage: string | null
    taskScore: number
    taskStatus: string
    creationTime: Date
    completionTime: Date | null
    isApprove: boolean
    _count: TaskListCountAggregateOutputType | null
    _avg: TaskListAvgAggregateOutputType | null
    _sum: TaskListSumAggregateOutputType | null
    _min: TaskListMinAggregateOutputType | null
    _max: TaskListMaxAggregateOutputType | null
  }

  type GetTaskListGroupByPayload<T extends TaskListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskListGroupByOutputType[P]>
            : GetScalarType<T[P], TaskListGroupByOutputType[P]>
        }
      >
    >


  export type TaskListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taskId?: boolean
    publisherEmail?: boolean
    receiverEmail?: boolean
    taskName?: boolean
    taskDesc?: boolean
    taskImage?: boolean
    taskScore?: boolean
    taskStatus?: boolean
    creationTime?: boolean
    completionTime?: boolean
    isApprove?: boolean
    publisher?: boolean | UserInfoDefaultArgs<ExtArgs>
    receiver?: boolean | TaskList$receiverArgs<ExtArgs>
  }, ExtArgs["result"]["taskList"]>

  export type TaskListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taskId?: boolean
    publisherEmail?: boolean
    receiverEmail?: boolean
    taskName?: boolean
    taskDesc?: boolean
    taskImage?: boolean
    taskScore?: boolean
    taskStatus?: boolean
    creationTime?: boolean
    completionTime?: boolean
    isApprove?: boolean
    publisher?: boolean | UserInfoDefaultArgs<ExtArgs>
    receiver?: boolean | TaskList$receiverArgs<ExtArgs>
  }, ExtArgs["result"]["taskList"]>

  export type TaskListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taskId?: boolean
    publisherEmail?: boolean
    receiverEmail?: boolean
    taskName?: boolean
    taskDesc?: boolean
    taskImage?: boolean
    taskScore?: boolean
    taskStatus?: boolean
    creationTime?: boolean
    completionTime?: boolean
    isApprove?: boolean
    publisher?: boolean | UserInfoDefaultArgs<ExtArgs>
    receiver?: boolean | TaskList$receiverArgs<ExtArgs>
  }, ExtArgs["result"]["taskList"]>

  export type TaskListSelectScalar = {
    taskId?: boolean
    publisherEmail?: boolean
    receiverEmail?: boolean
    taskName?: boolean
    taskDesc?: boolean
    taskImage?: boolean
    taskScore?: boolean
    taskStatus?: boolean
    creationTime?: boolean
    completionTime?: boolean
    isApprove?: boolean
  }

  export type TaskListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"taskId" | "publisherEmail" | "receiverEmail" | "taskName" | "taskDesc" | "taskImage" | "taskScore" | "taskStatus" | "creationTime" | "completionTime" | "isApprove", ExtArgs["result"]["taskList"]>
  export type TaskListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | UserInfoDefaultArgs<ExtArgs>
    receiver?: boolean | TaskList$receiverArgs<ExtArgs>
  }
  export type TaskListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | UserInfoDefaultArgs<ExtArgs>
    receiver?: boolean | TaskList$receiverArgs<ExtArgs>
  }
  export type TaskListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | UserInfoDefaultArgs<ExtArgs>
    receiver?: boolean | TaskList$receiverArgs<ExtArgs>
  }

  export type $TaskListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskList"
    objects: {
      publisher: Prisma.$UserInfoPayload<ExtArgs>
      receiver: Prisma.$UserInfoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      taskId: number
      publisherEmail: string
      receiverEmail: string | null
      taskName: string
      taskDesc: string | null
      taskImage: string | null
      taskScore: number
      taskStatus: string
      creationTime: Date
      completionTime: Date | null
      isApprove: boolean
    }, ExtArgs["result"]["taskList"]>
    composites: {}
  }

  type TaskListGetPayload<S extends boolean | null | undefined | TaskListDefaultArgs> = $Result.GetResult<Prisma.$TaskListPayload, S>

  type TaskListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskListCountAggregateInputType | true
    }

  export interface TaskListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskList'], meta: { name: 'TaskList' } }
    /**
     * Find zero or one TaskList that matches the filter.
     * @param {TaskListFindUniqueArgs} args - Arguments to find a TaskList
     * @example
     * // Get one TaskList
     * const taskList = await prisma.taskList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskListFindUniqueArgs>(args: SelectSubset<T, TaskListFindUniqueArgs<ExtArgs>>): Prisma__TaskListClient<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskListFindUniqueOrThrowArgs} args - Arguments to find a TaskList
     * @example
     * // Get one TaskList
     * const taskList = await prisma.taskList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskListFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskListClient<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskListFindFirstArgs} args - Arguments to find a TaskList
     * @example
     * // Get one TaskList
     * const taskList = await prisma.taskList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskListFindFirstArgs>(args?: SelectSubset<T, TaskListFindFirstArgs<ExtArgs>>): Prisma__TaskListClient<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskListFindFirstOrThrowArgs} args - Arguments to find a TaskList
     * @example
     * // Get one TaskList
     * const taskList = await prisma.taskList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskListFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskListFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskListClient<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskLists
     * const taskLists = await prisma.taskList.findMany()
     * 
     * // Get first 10 TaskLists
     * const taskLists = await prisma.taskList.findMany({ take: 10 })
     * 
     * // Only select the `taskId`
     * const taskListWithTaskIdOnly = await prisma.taskList.findMany({ select: { taskId: true } })
     * 
     */
    findMany<T extends TaskListFindManyArgs>(args?: SelectSubset<T, TaskListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskList.
     * @param {TaskListCreateArgs} args - Arguments to create a TaskList.
     * @example
     * // Create one TaskList
     * const TaskList = await prisma.taskList.create({
     *   data: {
     *     // ... data to create a TaskList
     *   }
     * })
     * 
     */
    create<T extends TaskListCreateArgs>(args: SelectSubset<T, TaskListCreateArgs<ExtArgs>>): Prisma__TaskListClient<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskLists.
     * @param {TaskListCreateManyArgs} args - Arguments to create many TaskLists.
     * @example
     * // Create many TaskLists
     * const taskList = await prisma.taskList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskListCreateManyArgs>(args?: SelectSubset<T, TaskListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskLists and returns the data saved in the database.
     * @param {TaskListCreateManyAndReturnArgs} args - Arguments to create many TaskLists.
     * @example
     * // Create many TaskLists
     * const taskList = await prisma.taskList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskLists and only return the `taskId`
     * const taskListWithTaskIdOnly = await prisma.taskList.createManyAndReturn({
     *   select: { taskId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskListCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskList.
     * @param {TaskListDeleteArgs} args - Arguments to delete one TaskList.
     * @example
     * // Delete one TaskList
     * const TaskList = await prisma.taskList.delete({
     *   where: {
     *     // ... filter to delete one TaskList
     *   }
     * })
     * 
     */
    delete<T extends TaskListDeleteArgs>(args: SelectSubset<T, TaskListDeleteArgs<ExtArgs>>): Prisma__TaskListClient<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskList.
     * @param {TaskListUpdateArgs} args - Arguments to update one TaskList.
     * @example
     * // Update one TaskList
     * const taskList = await prisma.taskList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskListUpdateArgs>(args: SelectSubset<T, TaskListUpdateArgs<ExtArgs>>): Prisma__TaskListClient<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskLists.
     * @param {TaskListDeleteManyArgs} args - Arguments to filter TaskLists to delete.
     * @example
     * // Delete a few TaskLists
     * const { count } = await prisma.taskList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskListDeleteManyArgs>(args?: SelectSubset<T, TaskListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskLists
     * const taskList = await prisma.taskList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskListUpdateManyArgs>(args: SelectSubset<T, TaskListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskLists and returns the data updated in the database.
     * @param {TaskListUpdateManyAndReturnArgs} args - Arguments to update many TaskLists.
     * @example
     * // Update many TaskLists
     * const taskList = await prisma.taskList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskLists and only return the `taskId`
     * const taskListWithTaskIdOnly = await prisma.taskList.updateManyAndReturn({
     *   select: { taskId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskListUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskList.
     * @param {TaskListUpsertArgs} args - Arguments to update or create a TaskList.
     * @example
     * // Update or create a TaskList
     * const taskList = await prisma.taskList.upsert({
     *   create: {
     *     // ... data to create a TaskList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskList we want to update
     *   }
     * })
     */
    upsert<T extends TaskListUpsertArgs>(args: SelectSubset<T, TaskListUpsertArgs<ExtArgs>>): Prisma__TaskListClient<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskListCountArgs} args - Arguments to filter TaskLists to count.
     * @example
     * // Count the number of TaskLists
     * const count = await prisma.taskList.count({
     *   where: {
     *     // ... the filter for the TaskLists we want to count
     *   }
     * })
    **/
    count<T extends TaskListCountArgs>(
      args?: Subset<T, TaskListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskListAggregateArgs>(args: Subset<T, TaskListAggregateArgs>): Prisma.PrismaPromise<GetTaskListAggregateType<T>>

    /**
     * Group by TaskList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskListGroupByArgs} args - Group by arguments.
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
      T extends TaskListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskListGroupByArgs['orderBy'] }
        : { orderBy?: TaskListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskList model
   */
  readonly fields: TaskListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publisher<T extends UserInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserInfoDefaultArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends TaskList$receiverArgs<ExtArgs> = {}>(args?: Subset<T, TaskList$receiverArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TaskList model
   */
  interface TaskListFieldRefs {
    readonly taskId: FieldRef<"TaskList", 'Int'>
    readonly publisherEmail: FieldRef<"TaskList", 'String'>
    readonly receiverEmail: FieldRef<"TaskList", 'String'>
    readonly taskName: FieldRef<"TaskList", 'String'>
    readonly taskDesc: FieldRef<"TaskList", 'String'>
    readonly taskImage: FieldRef<"TaskList", 'String'>
    readonly taskScore: FieldRef<"TaskList", 'Int'>
    readonly taskStatus: FieldRef<"TaskList", 'String'>
    readonly creationTime: FieldRef<"TaskList", 'DateTime'>
    readonly completionTime: FieldRef<"TaskList", 'DateTime'>
    readonly isApprove: FieldRef<"TaskList", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TaskList findUnique
   */
  export type TaskListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskList
     */
    omit?: TaskListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
    /**
     * Filter, which TaskList to fetch.
     */
    where: TaskListWhereUniqueInput
  }

  /**
   * TaskList findUniqueOrThrow
   */
  export type TaskListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskList
     */
    omit?: TaskListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
    /**
     * Filter, which TaskList to fetch.
     */
    where: TaskListWhereUniqueInput
  }

  /**
   * TaskList findFirst
   */
  export type TaskListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskList
     */
    omit?: TaskListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
    /**
     * Filter, which TaskList to fetch.
     */
    where?: TaskListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLists to fetch.
     */
    orderBy?: TaskListOrderByWithRelationInput | TaskListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskLists.
     */
    cursor?: TaskListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskLists.
     */
    distinct?: TaskListScalarFieldEnum | TaskListScalarFieldEnum[]
  }

  /**
   * TaskList findFirstOrThrow
   */
  export type TaskListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskList
     */
    omit?: TaskListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
    /**
     * Filter, which TaskList to fetch.
     */
    where?: TaskListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLists to fetch.
     */
    orderBy?: TaskListOrderByWithRelationInput | TaskListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskLists.
     */
    cursor?: TaskListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskLists.
     */
    distinct?: TaskListScalarFieldEnum | TaskListScalarFieldEnum[]
  }

  /**
   * TaskList findMany
   */
  export type TaskListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskList
     */
    omit?: TaskListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
    /**
     * Filter, which TaskLists to fetch.
     */
    where?: TaskListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLists to fetch.
     */
    orderBy?: TaskListOrderByWithRelationInput | TaskListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskLists.
     */
    cursor?: TaskListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLists.
     */
    skip?: number
    distinct?: TaskListScalarFieldEnum | TaskListScalarFieldEnum[]
  }

  /**
   * TaskList create
   */
  export type TaskListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskList
     */
    omit?: TaskListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskList.
     */
    data: XOR<TaskListCreateInput, TaskListUncheckedCreateInput>
  }

  /**
   * TaskList createMany
   */
  export type TaskListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskLists.
     */
    data: TaskListCreateManyInput | TaskListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskList createManyAndReturn
   */
  export type TaskListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskList
     */
    omit?: TaskListOmit<ExtArgs> | null
    /**
     * The data used to create many TaskLists.
     */
    data: TaskListCreateManyInput | TaskListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskList update
   */
  export type TaskListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskList
     */
    omit?: TaskListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskList.
     */
    data: XOR<TaskListUpdateInput, TaskListUncheckedUpdateInput>
    /**
     * Choose, which TaskList to update.
     */
    where: TaskListWhereUniqueInput
  }

  /**
   * TaskList updateMany
   */
  export type TaskListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskLists.
     */
    data: XOR<TaskListUpdateManyMutationInput, TaskListUncheckedUpdateManyInput>
    /**
     * Filter which TaskLists to update
     */
    where?: TaskListWhereInput
    /**
     * Limit how many TaskLists to update.
     */
    limit?: number
  }

  /**
   * TaskList updateManyAndReturn
   */
  export type TaskListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskList
     */
    omit?: TaskListOmit<ExtArgs> | null
    /**
     * The data used to update TaskLists.
     */
    data: XOR<TaskListUpdateManyMutationInput, TaskListUncheckedUpdateManyInput>
    /**
     * Filter which TaskLists to update
     */
    where?: TaskListWhereInput
    /**
     * Limit how many TaskLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskList upsert
   */
  export type TaskListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskList
     */
    omit?: TaskListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskList to update in case it exists.
     */
    where: TaskListWhereUniqueInput
    /**
     * In case the TaskList found by the `where` argument doesn't exist, create a new TaskList with this data.
     */
    create: XOR<TaskListCreateInput, TaskListUncheckedCreateInput>
    /**
     * In case the TaskList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskListUpdateInput, TaskListUncheckedUpdateInput>
  }

  /**
   * TaskList delete
   */
  export type TaskListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskList
     */
    omit?: TaskListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
    /**
     * Filter which TaskList to delete.
     */
    where: TaskListWhereUniqueInput
  }

  /**
   * TaskList deleteMany
   */
  export type TaskListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskLists to delete
     */
    where?: TaskListWhereInput
    /**
     * Limit how many TaskLists to delete.
     */
    limit?: number
  }

  /**
   * TaskList.receiver
   */
  export type TaskList$receiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    where?: UserInfoWhereInput
  }

  /**
   * TaskList without action
   */
  export type TaskListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskList
     */
    omit?: TaskListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
  }


  /**
   * Model GiftList
   */

  export type AggregateGiftList = {
    _count: GiftListCountAggregateOutputType | null
    _avg: GiftListAvgAggregateOutputType | null
    _sum: GiftListSumAggregateOutputType | null
    _min: GiftListMinAggregateOutputType | null
    _max: GiftListMaxAggregateOutputType | null
  }

  export type GiftListAvgAggregateOutputType = {
    giftId: number | null
    needScore: number | null
    remained: number | null
  }

  export type GiftListSumAggregateOutputType = {
    giftId: number | null
    needScore: number | null
    remained: number | null
  }

  export type GiftListMinAggregateOutputType = {
    giftId: number | null
    publisherEmail: string | null
    giftImg: string | null
    giftName: string | null
    giftDetail: string | null
    needScore: number | null
    remained: number | null
    isShow: boolean | null
    creationTime: Date | null
  }

  export type GiftListMaxAggregateOutputType = {
    giftId: number | null
    publisherEmail: string | null
    giftImg: string | null
    giftName: string | null
    giftDetail: string | null
    needScore: number | null
    remained: number | null
    isShow: boolean | null
    creationTime: Date | null
  }

  export type GiftListCountAggregateOutputType = {
    giftId: number
    publisherEmail: number
    giftImg: number
    giftName: number
    giftDetail: number
    needScore: number
    remained: number
    isShow: number
    creationTime: number
    _all: number
  }


  export type GiftListAvgAggregateInputType = {
    giftId?: true
    needScore?: true
    remained?: true
  }

  export type GiftListSumAggregateInputType = {
    giftId?: true
    needScore?: true
    remained?: true
  }

  export type GiftListMinAggregateInputType = {
    giftId?: true
    publisherEmail?: true
    giftImg?: true
    giftName?: true
    giftDetail?: true
    needScore?: true
    remained?: true
    isShow?: true
    creationTime?: true
  }

  export type GiftListMaxAggregateInputType = {
    giftId?: true
    publisherEmail?: true
    giftImg?: true
    giftName?: true
    giftDetail?: true
    needScore?: true
    remained?: true
    isShow?: true
    creationTime?: true
  }

  export type GiftListCountAggregateInputType = {
    giftId?: true
    publisherEmail?: true
    giftImg?: true
    giftName?: true
    giftDetail?: true
    needScore?: true
    remained?: true
    isShow?: true
    creationTime?: true
    _all?: true
  }

  export type GiftListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GiftList to aggregate.
     */
    where?: GiftListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiftLists to fetch.
     */
    orderBy?: GiftListOrderByWithRelationInput | GiftListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GiftListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiftLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiftLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GiftLists
    **/
    _count?: true | GiftListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GiftListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GiftListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GiftListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GiftListMaxAggregateInputType
  }

  export type GetGiftListAggregateType<T extends GiftListAggregateArgs> = {
        [P in keyof T & keyof AggregateGiftList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGiftList[P]>
      : GetScalarType<T[P], AggregateGiftList[P]>
  }




  export type GiftListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiftListWhereInput
    orderBy?: GiftListOrderByWithAggregationInput | GiftListOrderByWithAggregationInput[]
    by: GiftListScalarFieldEnum[] | GiftListScalarFieldEnum
    having?: GiftListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GiftListCountAggregateInputType | true
    _avg?: GiftListAvgAggregateInputType
    _sum?: GiftListSumAggregateInputType
    _min?: GiftListMinAggregateInputType
    _max?: GiftListMaxAggregateInputType
  }

  export type GiftListGroupByOutputType = {
    giftId: number
    publisherEmail: string
    giftImg: string | null
    giftName: string
    giftDetail: string | null
    needScore: number
    remained: number
    isShow: boolean
    creationTime: Date
    _count: GiftListCountAggregateOutputType | null
    _avg: GiftListAvgAggregateOutputType | null
    _sum: GiftListSumAggregateOutputType | null
    _min: GiftListMinAggregateOutputType | null
    _max: GiftListMaxAggregateOutputType | null
  }

  type GetGiftListGroupByPayload<T extends GiftListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GiftListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GiftListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GiftListGroupByOutputType[P]>
            : GetScalarType<T[P], GiftListGroupByOutputType[P]>
        }
      >
    >


  export type GiftListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    giftId?: boolean
    publisherEmail?: boolean
    giftImg?: boolean
    giftName?: boolean
    giftDetail?: boolean
    needScore?: boolean
    remained?: boolean
    isShow?: boolean
    creationTime?: boolean
    publisher?: boolean | UserInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["giftList"]>

  export type GiftListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    giftId?: boolean
    publisherEmail?: boolean
    giftImg?: boolean
    giftName?: boolean
    giftDetail?: boolean
    needScore?: boolean
    remained?: boolean
    isShow?: boolean
    creationTime?: boolean
    publisher?: boolean | UserInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["giftList"]>

  export type GiftListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    giftId?: boolean
    publisherEmail?: boolean
    giftImg?: boolean
    giftName?: boolean
    giftDetail?: boolean
    needScore?: boolean
    remained?: boolean
    isShow?: boolean
    creationTime?: boolean
    publisher?: boolean | UserInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["giftList"]>

  export type GiftListSelectScalar = {
    giftId?: boolean
    publisherEmail?: boolean
    giftImg?: boolean
    giftName?: boolean
    giftDetail?: boolean
    needScore?: boolean
    remained?: boolean
    isShow?: boolean
    creationTime?: boolean
  }

  export type GiftListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"giftId" | "publisherEmail" | "giftImg" | "giftName" | "giftDetail" | "needScore" | "remained" | "isShow" | "creationTime", ExtArgs["result"]["giftList"]>
  export type GiftListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | UserInfoDefaultArgs<ExtArgs>
  }
  export type GiftListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | UserInfoDefaultArgs<ExtArgs>
  }
  export type GiftListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | UserInfoDefaultArgs<ExtArgs>
  }

  export type $GiftListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GiftList"
    objects: {
      publisher: Prisma.$UserInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      giftId: number
      publisherEmail: string
      giftImg: string | null
      giftName: string
      giftDetail: string | null
      needScore: number
      remained: number
      isShow: boolean
      creationTime: Date
    }, ExtArgs["result"]["giftList"]>
    composites: {}
  }

  type GiftListGetPayload<S extends boolean | null | undefined | GiftListDefaultArgs> = $Result.GetResult<Prisma.$GiftListPayload, S>

  type GiftListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GiftListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GiftListCountAggregateInputType | true
    }

  export interface GiftListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GiftList'], meta: { name: 'GiftList' } }
    /**
     * Find zero or one GiftList that matches the filter.
     * @param {GiftListFindUniqueArgs} args - Arguments to find a GiftList
     * @example
     * // Get one GiftList
     * const giftList = await prisma.giftList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GiftListFindUniqueArgs>(args: SelectSubset<T, GiftListFindUniqueArgs<ExtArgs>>): Prisma__GiftListClient<$Result.GetResult<Prisma.$GiftListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GiftList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GiftListFindUniqueOrThrowArgs} args - Arguments to find a GiftList
     * @example
     * // Get one GiftList
     * const giftList = await prisma.giftList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GiftListFindUniqueOrThrowArgs>(args: SelectSubset<T, GiftListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GiftListClient<$Result.GetResult<Prisma.$GiftListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GiftList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftListFindFirstArgs} args - Arguments to find a GiftList
     * @example
     * // Get one GiftList
     * const giftList = await prisma.giftList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GiftListFindFirstArgs>(args?: SelectSubset<T, GiftListFindFirstArgs<ExtArgs>>): Prisma__GiftListClient<$Result.GetResult<Prisma.$GiftListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GiftList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftListFindFirstOrThrowArgs} args - Arguments to find a GiftList
     * @example
     * // Get one GiftList
     * const giftList = await prisma.giftList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GiftListFindFirstOrThrowArgs>(args?: SelectSubset<T, GiftListFindFirstOrThrowArgs<ExtArgs>>): Prisma__GiftListClient<$Result.GetResult<Prisma.$GiftListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GiftLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GiftLists
     * const giftLists = await prisma.giftList.findMany()
     * 
     * // Get first 10 GiftLists
     * const giftLists = await prisma.giftList.findMany({ take: 10 })
     * 
     * // Only select the `giftId`
     * const giftListWithGiftIdOnly = await prisma.giftList.findMany({ select: { giftId: true } })
     * 
     */
    findMany<T extends GiftListFindManyArgs>(args?: SelectSubset<T, GiftListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GiftList.
     * @param {GiftListCreateArgs} args - Arguments to create a GiftList.
     * @example
     * // Create one GiftList
     * const GiftList = await prisma.giftList.create({
     *   data: {
     *     // ... data to create a GiftList
     *   }
     * })
     * 
     */
    create<T extends GiftListCreateArgs>(args: SelectSubset<T, GiftListCreateArgs<ExtArgs>>): Prisma__GiftListClient<$Result.GetResult<Prisma.$GiftListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GiftLists.
     * @param {GiftListCreateManyArgs} args - Arguments to create many GiftLists.
     * @example
     * // Create many GiftLists
     * const giftList = await prisma.giftList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GiftListCreateManyArgs>(args?: SelectSubset<T, GiftListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GiftLists and returns the data saved in the database.
     * @param {GiftListCreateManyAndReturnArgs} args - Arguments to create many GiftLists.
     * @example
     * // Create many GiftLists
     * const giftList = await prisma.giftList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GiftLists and only return the `giftId`
     * const giftListWithGiftIdOnly = await prisma.giftList.createManyAndReturn({
     *   select: { giftId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GiftListCreateManyAndReturnArgs>(args?: SelectSubset<T, GiftListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GiftList.
     * @param {GiftListDeleteArgs} args - Arguments to delete one GiftList.
     * @example
     * // Delete one GiftList
     * const GiftList = await prisma.giftList.delete({
     *   where: {
     *     // ... filter to delete one GiftList
     *   }
     * })
     * 
     */
    delete<T extends GiftListDeleteArgs>(args: SelectSubset<T, GiftListDeleteArgs<ExtArgs>>): Prisma__GiftListClient<$Result.GetResult<Prisma.$GiftListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GiftList.
     * @param {GiftListUpdateArgs} args - Arguments to update one GiftList.
     * @example
     * // Update one GiftList
     * const giftList = await prisma.giftList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GiftListUpdateArgs>(args: SelectSubset<T, GiftListUpdateArgs<ExtArgs>>): Prisma__GiftListClient<$Result.GetResult<Prisma.$GiftListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GiftLists.
     * @param {GiftListDeleteManyArgs} args - Arguments to filter GiftLists to delete.
     * @example
     * // Delete a few GiftLists
     * const { count } = await prisma.giftList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GiftListDeleteManyArgs>(args?: SelectSubset<T, GiftListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GiftLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GiftLists
     * const giftList = await prisma.giftList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GiftListUpdateManyArgs>(args: SelectSubset<T, GiftListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GiftLists and returns the data updated in the database.
     * @param {GiftListUpdateManyAndReturnArgs} args - Arguments to update many GiftLists.
     * @example
     * // Update many GiftLists
     * const giftList = await prisma.giftList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GiftLists and only return the `giftId`
     * const giftListWithGiftIdOnly = await prisma.giftList.updateManyAndReturn({
     *   select: { giftId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GiftListUpdateManyAndReturnArgs>(args: SelectSubset<T, GiftListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GiftList.
     * @param {GiftListUpsertArgs} args - Arguments to update or create a GiftList.
     * @example
     * // Update or create a GiftList
     * const giftList = await prisma.giftList.upsert({
     *   create: {
     *     // ... data to create a GiftList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GiftList we want to update
     *   }
     * })
     */
    upsert<T extends GiftListUpsertArgs>(args: SelectSubset<T, GiftListUpsertArgs<ExtArgs>>): Prisma__GiftListClient<$Result.GetResult<Prisma.$GiftListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GiftLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftListCountArgs} args - Arguments to filter GiftLists to count.
     * @example
     * // Count the number of GiftLists
     * const count = await prisma.giftList.count({
     *   where: {
     *     // ... the filter for the GiftLists we want to count
     *   }
     * })
    **/
    count<T extends GiftListCountArgs>(
      args?: Subset<T, GiftListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GiftListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GiftList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GiftListAggregateArgs>(args: Subset<T, GiftListAggregateArgs>): Prisma.PrismaPromise<GetGiftListAggregateType<T>>

    /**
     * Group by GiftList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftListGroupByArgs} args - Group by arguments.
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
      T extends GiftListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GiftListGroupByArgs['orderBy'] }
        : { orderBy?: GiftListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GiftListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGiftListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GiftList model
   */
  readonly fields: GiftListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GiftList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GiftListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publisher<T extends UserInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserInfoDefaultArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GiftList model
   */
  interface GiftListFieldRefs {
    readonly giftId: FieldRef<"GiftList", 'Int'>
    readonly publisherEmail: FieldRef<"GiftList", 'String'>
    readonly giftImg: FieldRef<"GiftList", 'String'>
    readonly giftName: FieldRef<"GiftList", 'String'>
    readonly giftDetail: FieldRef<"GiftList", 'String'>
    readonly needScore: FieldRef<"GiftList", 'Int'>
    readonly remained: FieldRef<"GiftList", 'Int'>
    readonly isShow: FieldRef<"GiftList", 'Boolean'>
    readonly creationTime: FieldRef<"GiftList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GiftList findUnique
   */
  export type GiftListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftList
     */
    select?: GiftListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftList
     */
    omit?: GiftListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftListInclude<ExtArgs> | null
    /**
     * Filter, which GiftList to fetch.
     */
    where: GiftListWhereUniqueInput
  }

  /**
   * GiftList findUniqueOrThrow
   */
  export type GiftListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftList
     */
    select?: GiftListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftList
     */
    omit?: GiftListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftListInclude<ExtArgs> | null
    /**
     * Filter, which GiftList to fetch.
     */
    where: GiftListWhereUniqueInput
  }

  /**
   * GiftList findFirst
   */
  export type GiftListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftList
     */
    select?: GiftListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftList
     */
    omit?: GiftListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftListInclude<ExtArgs> | null
    /**
     * Filter, which GiftList to fetch.
     */
    where?: GiftListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiftLists to fetch.
     */
    orderBy?: GiftListOrderByWithRelationInput | GiftListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GiftLists.
     */
    cursor?: GiftListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiftLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiftLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiftLists.
     */
    distinct?: GiftListScalarFieldEnum | GiftListScalarFieldEnum[]
  }

  /**
   * GiftList findFirstOrThrow
   */
  export type GiftListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftList
     */
    select?: GiftListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftList
     */
    omit?: GiftListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftListInclude<ExtArgs> | null
    /**
     * Filter, which GiftList to fetch.
     */
    where?: GiftListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiftLists to fetch.
     */
    orderBy?: GiftListOrderByWithRelationInput | GiftListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GiftLists.
     */
    cursor?: GiftListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiftLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiftLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiftLists.
     */
    distinct?: GiftListScalarFieldEnum | GiftListScalarFieldEnum[]
  }

  /**
   * GiftList findMany
   */
  export type GiftListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftList
     */
    select?: GiftListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftList
     */
    omit?: GiftListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftListInclude<ExtArgs> | null
    /**
     * Filter, which GiftLists to fetch.
     */
    where?: GiftListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiftLists to fetch.
     */
    orderBy?: GiftListOrderByWithRelationInput | GiftListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GiftLists.
     */
    cursor?: GiftListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiftLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiftLists.
     */
    skip?: number
    distinct?: GiftListScalarFieldEnum | GiftListScalarFieldEnum[]
  }

  /**
   * GiftList create
   */
  export type GiftListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftList
     */
    select?: GiftListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftList
     */
    omit?: GiftListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftListInclude<ExtArgs> | null
    /**
     * The data needed to create a GiftList.
     */
    data: XOR<GiftListCreateInput, GiftListUncheckedCreateInput>
  }

  /**
   * GiftList createMany
   */
  export type GiftListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GiftLists.
     */
    data: GiftListCreateManyInput | GiftListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GiftList createManyAndReturn
   */
  export type GiftListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftList
     */
    select?: GiftListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GiftList
     */
    omit?: GiftListOmit<ExtArgs> | null
    /**
     * The data used to create many GiftLists.
     */
    data: GiftListCreateManyInput | GiftListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GiftList update
   */
  export type GiftListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftList
     */
    select?: GiftListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftList
     */
    omit?: GiftListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftListInclude<ExtArgs> | null
    /**
     * The data needed to update a GiftList.
     */
    data: XOR<GiftListUpdateInput, GiftListUncheckedUpdateInput>
    /**
     * Choose, which GiftList to update.
     */
    where: GiftListWhereUniqueInput
  }

  /**
   * GiftList updateMany
   */
  export type GiftListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GiftLists.
     */
    data: XOR<GiftListUpdateManyMutationInput, GiftListUncheckedUpdateManyInput>
    /**
     * Filter which GiftLists to update
     */
    where?: GiftListWhereInput
    /**
     * Limit how many GiftLists to update.
     */
    limit?: number
  }

  /**
   * GiftList updateManyAndReturn
   */
  export type GiftListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftList
     */
    select?: GiftListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GiftList
     */
    omit?: GiftListOmit<ExtArgs> | null
    /**
     * The data used to update GiftLists.
     */
    data: XOR<GiftListUpdateManyMutationInput, GiftListUncheckedUpdateManyInput>
    /**
     * Filter which GiftLists to update
     */
    where?: GiftListWhereInput
    /**
     * Limit how many GiftLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GiftList upsert
   */
  export type GiftListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftList
     */
    select?: GiftListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftList
     */
    omit?: GiftListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftListInclude<ExtArgs> | null
    /**
     * The filter to search for the GiftList to update in case it exists.
     */
    where: GiftListWhereUniqueInput
    /**
     * In case the GiftList found by the `where` argument doesn't exist, create a new GiftList with this data.
     */
    create: XOR<GiftListCreateInput, GiftListUncheckedCreateInput>
    /**
     * In case the GiftList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GiftListUpdateInput, GiftListUncheckedUpdateInput>
  }

  /**
   * GiftList delete
   */
  export type GiftListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftList
     */
    select?: GiftListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftList
     */
    omit?: GiftListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftListInclude<ExtArgs> | null
    /**
     * Filter which GiftList to delete.
     */
    where: GiftListWhereUniqueInput
  }

  /**
   * GiftList deleteMany
   */
  export type GiftListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GiftLists to delete
     */
    where?: GiftListWhereInput
    /**
     * Limit how many GiftLists to delete.
     */
    limit?: number
  }

  /**
   * GiftList without action
   */
  export type GiftListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftList
     */
    select?: GiftListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiftList
     */
    omit?: GiftListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftListInclude<ExtArgs> | null
  }


  /**
   * Model WhisperList
   */

  export type AggregateWhisperList = {
    _count: WhisperListCountAggregateOutputType | null
    _avg: WhisperListAvgAggregateOutputType | null
    _sum: WhisperListSumAggregateOutputType | null
    _min: WhisperListMinAggregateOutputType | null
    _max: WhisperListMaxAggregateOutputType | null
  }

  export type WhisperListAvgAggregateOutputType = {
    whisperId: number | null
  }

  export type WhisperListSumAggregateOutputType = {
    whisperId: number | null
  }

  export type WhisperListMinAggregateOutputType = {
    whisperId: number | null
    publisherEmail: string | null
    toUserEmail: string | null
    title: string | null
    content: string | null
    creationTime: Date | null
    isRead: boolean | null
  }

  export type WhisperListMaxAggregateOutputType = {
    whisperId: number | null
    publisherEmail: string | null
    toUserEmail: string | null
    title: string | null
    content: string | null
    creationTime: Date | null
    isRead: boolean | null
  }

  export type WhisperListCountAggregateOutputType = {
    whisperId: number
    publisherEmail: number
    toUserEmail: number
    title: number
    content: number
    creationTime: number
    isRead: number
    _all: number
  }


  export type WhisperListAvgAggregateInputType = {
    whisperId?: true
  }

  export type WhisperListSumAggregateInputType = {
    whisperId?: true
  }

  export type WhisperListMinAggregateInputType = {
    whisperId?: true
    publisherEmail?: true
    toUserEmail?: true
    title?: true
    content?: true
    creationTime?: true
    isRead?: true
  }

  export type WhisperListMaxAggregateInputType = {
    whisperId?: true
    publisherEmail?: true
    toUserEmail?: true
    title?: true
    content?: true
    creationTime?: true
    isRead?: true
  }

  export type WhisperListCountAggregateInputType = {
    whisperId?: true
    publisherEmail?: true
    toUserEmail?: true
    title?: true
    content?: true
    creationTime?: true
    isRead?: true
    _all?: true
  }

  export type WhisperListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhisperList to aggregate.
     */
    where?: WhisperListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhisperLists to fetch.
     */
    orderBy?: WhisperListOrderByWithRelationInput | WhisperListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhisperListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhisperLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhisperLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhisperLists
    **/
    _count?: true | WhisperListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WhisperListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WhisperListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhisperListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhisperListMaxAggregateInputType
  }

  export type GetWhisperListAggregateType<T extends WhisperListAggregateArgs> = {
        [P in keyof T & keyof AggregateWhisperList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhisperList[P]>
      : GetScalarType<T[P], AggregateWhisperList[P]>
  }




  export type WhisperListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhisperListWhereInput
    orderBy?: WhisperListOrderByWithAggregationInput | WhisperListOrderByWithAggregationInput[]
    by: WhisperListScalarFieldEnum[] | WhisperListScalarFieldEnum
    having?: WhisperListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhisperListCountAggregateInputType | true
    _avg?: WhisperListAvgAggregateInputType
    _sum?: WhisperListSumAggregateInputType
    _min?: WhisperListMinAggregateInputType
    _max?: WhisperListMaxAggregateInputType
  }

  export type WhisperListGroupByOutputType = {
    whisperId: number
    publisherEmail: string
    toUserEmail: string | null
    title: string | null
    content: string
    creationTime: Date
    isRead: boolean
    _count: WhisperListCountAggregateOutputType | null
    _avg: WhisperListAvgAggregateOutputType | null
    _sum: WhisperListSumAggregateOutputType | null
    _min: WhisperListMinAggregateOutputType | null
    _max: WhisperListMaxAggregateOutputType | null
  }

  type GetWhisperListGroupByPayload<T extends WhisperListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhisperListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhisperListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhisperListGroupByOutputType[P]>
            : GetScalarType<T[P], WhisperListGroupByOutputType[P]>
        }
      >
    >


  export type WhisperListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    whisperId?: boolean
    publisherEmail?: boolean
    toUserEmail?: boolean
    title?: boolean
    content?: boolean
    creationTime?: boolean
    isRead?: boolean
    publisher?: boolean | UserInfoDefaultArgs<ExtArgs>
    receiver?: boolean | WhisperList$receiverArgs<ExtArgs>
  }, ExtArgs["result"]["whisperList"]>

  export type WhisperListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    whisperId?: boolean
    publisherEmail?: boolean
    toUserEmail?: boolean
    title?: boolean
    content?: boolean
    creationTime?: boolean
    isRead?: boolean
    publisher?: boolean | UserInfoDefaultArgs<ExtArgs>
    receiver?: boolean | WhisperList$receiverArgs<ExtArgs>
  }, ExtArgs["result"]["whisperList"]>

  export type WhisperListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    whisperId?: boolean
    publisherEmail?: boolean
    toUserEmail?: boolean
    title?: boolean
    content?: boolean
    creationTime?: boolean
    isRead?: boolean
    publisher?: boolean | UserInfoDefaultArgs<ExtArgs>
    receiver?: boolean | WhisperList$receiverArgs<ExtArgs>
  }, ExtArgs["result"]["whisperList"]>

  export type WhisperListSelectScalar = {
    whisperId?: boolean
    publisherEmail?: boolean
    toUserEmail?: boolean
    title?: boolean
    content?: boolean
    creationTime?: boolean
    isRead?: boolean
  }

  export type WhisperListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"whisperId" | "publisherEmail" | "toUserEmail" | "title" | "content" | "creationTime" | "isRead", ExtArgs["result"]["whisperList"]>
  export type WhisperListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | UserInfoDefaultArgs<ExtArgs>
    receiver?: boolean | WhisperList$receiverArgs<ExtArgs>
  }
  export type WhisperListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | UserInfoDefaultArgs<ExtArgs>
    receiver?: boolean | WhisperList$receiverArgs<ExtArgs>
  }
  export type WhisperListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | UserInfoDefaultArgs<ExtArgs>
    receiver?: boolean | WhisperList$receiverArgs<ExtArgs>
  }

  export type $WhisperListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhisperList"
    objects: {
      publisher: Prisma.$UserInfoPayload<ExtArgs>
      receiver: Prisma.$UserInfoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      whisperId: number
      publisherEmail: string
      toUserEmail: string | null
      title: string | null
      content: string
      creationTime: Date
      isRead: boolean
    }, ExtArgs["result"]["whisperList"]>
    composites: {}
  }

  type WhisperListGetPayload<S extends boolean | null | undefined | WhisperListDefaultArgs> = $Result.GetResult<Prisma.$WhisperListPayload, S>

  type WhisperListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhisperListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhisperListCountAggregateInputType | true
    }

  export interface WhisperListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhisperList'], meta: { name: 'WhisperList' } }
    /**
     * Find zero or one WhisperList that matches the filter.
     * @param {WhisperListFindUniqueArgs} args - Arguments to find a WhisperList
     * @example
     * // Get one WhisperList
     * const whisperList = await prisma.whisperList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhisperListFindUniqueArgs>(args: SelectSubset<T, WhisperListFindUniqueArgs<ExtArgs>>): Prisma__WhisperListClient<$Result.GetResult<Prisma.$WhisperListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WhisperList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhisperListFindUniqueOrThrowArgs} args - Arguments to find a WhisperList
     * @example
     * // Get one WhisperList
     * const whisperList = await prisma.whisperList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhisperListFindUniqueOrThrowArgs>(args: SelectSubset<T, WhisperListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhisperListClient<$Result.GetResult<Prisma.$WhisperListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhisperList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhisperListFindFirstArgs} args - Arguments to find a WhisperList
     * @example
     * // Get one WhisperList
     * const whisperList = await prisma.whisperList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhisperListFindFirstArgs>(args?: SelectSubset<T, WhisperListFindFirstArgs<ExtArgs>>): Prisma__WhisperListClient<$Result.GetResult<Prisma.$WhisperListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhisperList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhisperListFindFirstOrThrowArgs} args - Arguments to find a WhisperList
     * @example
     * // Get one WhisperList
     * const whisperList = await prisma.whisperList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhisperListFindFirstOrThrowArgs>(args?: SelectSubset<T, WhisperListFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhisperListClient<$Result.GetResult<Prisma.$WhisperListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WhisperLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhisperListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhisperLists
     * const whisperLists = await prisma.whisperList.findMany()
     * 
     * // Get first 10 WhisperLists
     * const whisperLists = await prisma.whisperList.findMany({ take: 10 })
     * 
     * // Only select the `whisperId`
     * const whisperListWithWhisperIdOnly = await prisma.whisperList.findMany({ select: { whisperId: true } })
     * 
     */
    findMany<T extends WhisperListFindManyArgs>(args?: SelectSubset<T, WhisperListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhisperListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WhisperList.
     * @param {WhisperListCreateArgs} args - Arguments to create a WhisperList.
     * @example
     * // Create one WhisperList
     * const WhisperList = await prisma.whisperList.create({
     *   data: {
     *     // ... data to create a WhisperList
     *   }
     * })
     * 
     */
    create<T extends WhisperListCreateArgs>(args: SelectSubset<T, WhisperListCreateArgs<ExtArgs>>): Prisma__WhisperListClient<$Result.GetResult<Prisma.$WhisperListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WhisperLists.
     * @param {WhisperListCreateManyArgs} args - Arguments to create many WhisperLists.
     * @example
     * // Create many WhisperLists
     * const whisperList = await prisma.whisperList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhisperListCreateManyArgs>(args?: SelectSubset<T, WhisperListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WhisperLists and returns the data saved in the database.
     * @param {WhisperListCreateManyAndReturnArgs} args - Arguments to create many WhisperLists.
     * @example
     * // Create many WhisperLists
     * const whisperList = await prisma.whisperList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WhisperLists and only return the `whisperId`
     * const whisperListWithWhisperIdOnly = await prisma.whisperList.createManyAndReturn({
     *   select: { whisperId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WhisperListCreateManyAndReturnArgs>(args?: SelectSubset<T, WhisperListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhisperListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WhisperList.
     * @param {WhisperListDeleteArgs} args - Arguments to delete one WhisperList.
     * @example
     * // Delete one WhisperList
     * const WhisperList = await prisma.whisperList.delete({
     *   where: {
     *     // ... filter to delete one WhisperList
     *   }
     * })
     * 
     */
    delete<T extends WhisperListDeleteArgs>(args: SelectSubset<T, WhisperListDeleteArgs<ExtArgs>>): Prisma__WhisperListClient<$Result.GetResult<Prisma.$WhisperListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WhisperList.
     * @param {WhisperListUpdateArgs} args - Arguments to update one WhisperList.
     * @example
     * // Update one WhisperList
     * const whisperList = await prisma.whisperList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhisperListUpdateArgs>(args: SelectSubset<T, WhisperListUpdateArgs<ExtArgs>>): Prisma__WhisperListClient<$Result.GetResult<Prisma.$WhisperListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WhisperLists.
     * @param {WhisperListDeleteManyArgs} args - Arguments to filter WhisperLists to delete.
     * @example
     * // Delete a few WhisperLists
     * const { count } = await prisma.whisperList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhisperListDeleteManyArgs>(args?: SelectSubset<T, WhisperListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhisperLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhisperListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhisperLists
     * const whisperList = await prisma.whisperList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhisperListUpdateManyArgs>(args: SelectSubset<T, WhisperListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhisperLists and returns the data updated in the database.
     * @param {WhisperListUpdateManyAndReturnArgs} args - Arguments to update many WhisperLists.
     * @example
     * // Update many WhisperLists
     * const whisperList = await prisma.whisperList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WhisperLists and only return the `whisperId`
     * const whisperListWithWhisperIdOnly = await prisma.whisperList.updateManyAndReturn({
     *   select: { whisperId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WhisperListUpdateManyAndReturnArgs>(args: SelectSubset<T, WhisperListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhisperListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WhisperList.
     * @param {WhisperListUpsertArgs} args - Arguments to update or create a WhisperList.
     * @example
     * // Update or create a WhisperList
     * const whisperList = await prisma.whisperList.upsert({
     *   create: {
     *     // ... data to create a WhisperList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhisperList we want to update
     *   }
     * })
     */
    upsert<T extends WhisperListUpsertArgs>(args: SelectSubset<T, WhisperListUpsertArgs<ExtArgs>>): Prisma__WhisperListClient<$Result.GetResult<Prisma.$WhisperListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WhisperLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhisperListCountArgs} args - Arguments to filter WhisperLists to count.
     * @example
     * // Count the number of WhisperLists
     * const count = await prisma.whisperList.count({
     *   where: {
     *     // ... the filter for the WhisperLists we want to count
     *   }
     * })
    **/
    count<T extends WhisperListCountArgs>(
      args?: Subset<T, WhisperListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhisperListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhisperList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhisperListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WhisperListAggregateArgs>(args: Subset<T, WhisperListAggregateArgs>): Prisma.PrismaPromise<GetWhisperListAggregateType<T>>

    /**
     * Group by WhisperList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhisperListGroupByArgs} args - Group by arguments.
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
      T extends WhisperListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhisperListGroupByArgs['orderBy'] }
        : { orderBy?: WhisperListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WhisperListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhisperListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhisperList model
   */
  readonly fields: WhisperListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhisperList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhisperListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publisher<T extends UserInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserInfoDefaultArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends WhisperList$receiverArgs<ExtArgs> = {}>(args?: Subset<T, WhisperList$receiverArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WhisperList model
   */
  interface WhisperListFieldRefs {
    readonly whisperId: FieldRef<"WhisperList", 'Int'>
    readonly publisherEmail: FieldRef<"WhisperList", 'String'>
    readonly toUserEmail: FieldRef<"WhisperList", 'String'>
    readonly title: FieldRef<"WhisperList", 'String'>
    readonly content: FieldRef<"WhisperList", 'String'>
    readonly creationTime: FieldRef<"WhisperList", 'DateTime'>
    readonly isRead: FieldRef<"WhisperList", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * WhisperList findUnique
   */
  export type WhisperListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhisperList
     */
    select?: WhisperListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhisperList
     */
    omit?: WhisperListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhisperListInclude<ExtArgs> | null
    /**
     * Filter, which WhisperList to fetch.
     */
    where: WhisperListWhereUniqueInput
  }

  /**
   * WhisperList findUniqueOrThrow
   */
  export type WhisperListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhisperList
     */
    select?: WhisperListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhisperList
     */
    omit?: WhisperListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhisperListInclude<ExtArgs> | null
    /**
     * Filter, which WhisperList to fetch.
     */
    where: WhisperListWhereUniqueInput
  }

  /**
   * WhisperList findFirst
   */
  export type WhisperListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhisperList
     */
    select?: WhisperListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhisperList
     */
    omit?: WhisperListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhisperListInclude<ExtArgs> | null
    /**
     * Filter, which WhisperList to fetch.
     */
    where?: WhisperListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhisperLists to fetch.
     */
    orderBy?: WhisperListOrderByWithRelationInput | WhisperListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhisperLists.
     */
    cursor?: WhisperListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhisperLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhisperLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhisperLists.
     */
    distinct?: WhisperListScalarFieldEnum | WhisperListScalarFieldEnum[]
  }

  /**
   * WhisperList findFirstOrThrow
   */
  export type WhisperListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhisperList
     */
    select?: WhisperListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhisperList
     */
    omit?: WhisperListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhisperListInclude<ExtArgs> | null
    /**
     * Filter, which WhisperList to fetch.
     */
    where?: WhisperListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhisperLists to fetch.
     */
    orderBy?: WhisperListOrderByWithRelationInput | WhisperListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhisperLists.
     */
    cursor?: WhisperListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhisperLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhisperLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhisperLists.
     */
    distinct?: WhisperListScalarFieldEnum | WhisperListScalarFieldEnum[]
  }

  /**
   * WhisperList findMany
   */
  export type WhisperListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhisperList
     */
    select?: WhisperListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhisperList
     */
    omit?: WhisperListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhisperListInclude<ExtArgs> | null
    /**
     * Filter, which WhisperLists to fetch.
     */
    where?: WhisperListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhisperLists to fetch.
     */
    orderBy?: WhisperListOrderByWithRelationInput | WhisperListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhisperLists.
     */
    cursor?: WhisperListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhisperLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhisperLists.
     */
    skip?: number
    distinct?: WhisperListScalarFieldEnum | WhisperListScalarFieldEnum[]
  }

  /**
   * WhisperList create
   */
  export type WhisperListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhisperList
     */
    select?: WhisperListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhisperList
     */
    omit?: WhisperListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhisperListInclude<ExtArgs> | null
    /**
     * The data needed to create a WhisperList.
     */
    data: XOR<WhisperListCreateInput, WhisperListUncheckedCreateInput>
  }

  /**
   * WhisperList createMany
   */
  export type WhisperListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhisperLists.
     */
    data: WhisperListCreateManyInput | WhisperListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhisperList createManyAndReturn
   */
  export type WhisperListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhisperList
     */
    select?: WhisperListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhisperList
     */
    omit?: WhisperListOmit<ExtArgs> | null
    /**
     * The data used to create many WhisperLists.
     */
    data: WhisperListCreateManyInput | WhisperListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhisperListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WhisperList update
   */
  export type WhisperListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhisperList
     */
    select?: WhisperListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhisperList
     */
    omit?: WhisperListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhisperListInclude<ExtArgs> | null
    /**
     * The data needed to update a WhisperList.
     */
    data: XOR<WhisperListUpdateInput, WhisperListUncheckedUpdateInput>
    /**
     * Choose, which WhisperList to update.
     */
    where: WhisperListWhereUniqueInput
  }

  /**
   * WhisperList updateMany
   */
  export type WhisperListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhisperLists.
     */
    data: XOR<WhisperListUpdateManyMutationInput, WhisperListUncheckedUpdateManyInput>
    /**
     * Filter which WhisperLists to update
     */
    where?: WhisperListWhereInput
    /**
     * Limit how many WhisperLists to update.
     */
    limit?: number
  }

  /**
   * WhisperList updateManyAndReturn
   */
  export type WhisperListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhisperList
     */
    select?: WhisperListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhisperList
     */
    omit?: WhisperListOmit<ExtArgs> | null
    /**
     * The data used to update WhisperLists.
     */
    data: XOR<WhisperListUpdateManyMutationInput, WhisperListUncheckedUpdateManyInput>
    /**
     * Filter which WhisperLists to update
     */
    where?: WhisperListWhereInput
    /**
     * Limit how many WhisperLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhisperListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WhisperList upsert
   */
  export type WhisperListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhisperList
     */
    select?: WhisperListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhisperList
     */
    omit?: WhisperListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhisperListInclude<ExtArgs> | null
    /**
     * The filter to search for the WhisperList to update in case it exists.
     */
    where: WhisperListWhereUniqueInput
    /**
     * In case the WhisperList found by the `where` argument doesn't exist, create a new WhisperList with this data.
     */
    create: XOR<WhisperListCreateInput, WhisperListUncheckedCreateInput>
    /**
     * In case the WhisperList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhisperListUpdateInput, WhisperListUncheckedUpdateInput>
  }

  /**
   * WhisperList delete
   */
  export type WhisperListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhisperList
     */
    select?: WhisperListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhisperList
     */
    omit?: WhisperListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhisperListInclude<ExtArgs> | null
    /**
     * Filter which WhisperList to delete.
     */
    where: WhisperListWhereUniqueInput
  }

  /**
   * WhisperList deleteMany
   */
  export type WhisperListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhisperLists to delete
     */
    where?: WhisperListWhereInput
    /**
     * Limit how many WhisperLists to delete.
     */
    limit?: number
  }

  /**
   * WhisperList.receiver
   */
  export type WhisperList$receiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    where?: UserInfoWhereInput
  }

  /**
   * WhisperList without action
   */
  export type WhisperListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhisperList
     */
    select?: WhisperListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhisperList
     */
    omit?: WhisperListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhisperListInclude<ExtArgs> | null
  }


  /**
   * Model FavouriteList
   */

  export type AggregateFavouriteList = {
    _count: FavouriteListCountAggregateOutputType | null
    _avg: FavouriteListAvgAggregateOutputType | null
    _sum: FavouriteListSumAggregateOutputType | null
    _min: FavouriteListMinAggregateOutputType | null
    _max: FavouriteListMaxAggregateOutputType | null
  }

  export type FavouriteListAvgAggregateOutputType = {
    favId: number | null
  }

  export type FavouriteListSumAggregateOutputType = {
    favId: number | null
  }

  export type FavouriteListMinAggregateOutputType = {
    favId: number | null
    userEmail: string | null
    collectionId: string | null
    collectionType: string | null
    creationTime: Date | null
  }

  export type FavouriteListMaxAggregateOutputType = {
    favId: number | null
    userEmail: string | null
    collectionId: string | null
    collectionType: string | null
    creationTime: Date | null
  }

  export type FavouriteListCountAggregateOutputType = {
    favId: number
    userEmail: number
    collectionId: number
    collectionType: number
    creationTime: number
    _all: number
  }


  export type FavouriteListAvgAggregateInputType = {
    favId?: true
  }

  export type FavouriteListSumAggregateInputType = {
    favId?: true
  }

  export type FavouriteListMinAggregateInputType = {
    favId?: true
    userEmail?: true
    collectionId?: true
    collectionType?: true
    creationTime?: true
  }

  export type FavouriteListMaxAggregateInputType = {
    favId?: true
    userEmail?: true
    collectionId?: true
    collectionType?: true
    creationTime?: true
  }

  export type FavouriteListCountAggregateInputType = {
    favId?: true
    userEmail?: true
    collectionId?: true
    collectionType?: true
    creationTime?: true
    _all?: true
  }

  export type FavouriteListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavouriteList to aggregate.
     */
    where?: FavouriteListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavouriteLists to fetch.
     */
    orderBy?: FavouriteListOrderByWithRelationInput | FavouriteListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavouriteListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavouriteLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavouriteLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavouriteLists
    **/
    _count?: true | FavouriteListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavouriteListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavouriteListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavouriteListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavouriteListMaxAggregateInputType
  }

  export type GetFavouriteListAggregateType<T extends FavouriteListAggregateArgs> = {
        [P in keyof T & keyof AggregateFavouriteList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavouriteList[P]>
      : GetScalarType<T[P], AggregateFavouriteList[P]>
  }




  export type FavouriteListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouriteListWhereInput
    orderBy?: FavouriteListOrderByWithAggregationInput | FavouriteListOrderByWithAggregationInput[]
    by: FavouriteListScalarFieldEnum[] | FavouriteListScalarFieldEnum
    having?: FavouriteListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavouriteListCountAggregateInputType | true
    _avg?: FavouriteListAvgAggregateInputType
    _sum?: FavouriteListSumAggregateInputType
    _min?: FavouriteListMinAggregateInputType
    _max?: FavouriteListMaxAggregateInputType
  }

  export type FavouriteListGroupByOutputType = {
    favId: number
    userEmail: string
    collectionId: string
    collectionType: string
    creationTime: Date
    _count: FavouriteListCountAggregateOutputType | null
    _avg: FavouriteListAvgAggregateOutputType | null
    _sum: FavouriteListSumAggregateOutputType | null
    _min: FavouriteListMinAggregateOutputType | null
    _max: FavouriteListMaxAggregateOutputType | null
  }

  type GetFavouriteListGroupByPayload<T extends FavouriteListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavouriteListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavouriteListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavouriteListGroupByOutputType[P]>
            : GetScalarType<T[P], FavouriteListGroupByOutputType[P]>
        }
      >
    >


  export type FavouriteListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    favId?: boolean
    userEmail?: boolean
    collectionId?: boolean
    collectionType?: boolean
    creationTime?: boolean
    user?: boolean | UserInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favouriteList"]>

  export type FavouriteListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    favId?: boolean
    userEmail?: boolean
    collectionId?: boolean
    collectionType?: boolean
    creationTime?: boolean
    user?: boolean | UserInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favouriteList"]>

  export type FavouriteListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    favId?: boolean
    userEmail?: boolean
    collectionId?: boolean
    collectionType?: boolean
    creationTime?: boolean
    user?: boolean | UserInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favouriteList"]>

  export type FavouriteListSelectScalar = {
    favId?: boolean
    userEmail?: boolean
    collectionId?: boolean
    collectionType?: boolean
    creationTime?: boolean
  }

  export type FavouriteListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"favId" | "userEmail" | "collectionId" | "collectionType" | "creationTime", ExtArgs["result"]["favouriteList"]>
  export type FavouriteListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserInfoDefaultArgs<ExtArgs>
  }
  export type FavouriteListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserInfoDefaultArgs<ExtArgs>
  }
  export type FavouriteListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserInfoDefaultArgs<ExtArgs>
  }

  export type $FavouriteListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavouriteList"
    objects: {
      user: Prisma.$UserInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      favId: number
      userEmail: string
      collectionId: string
      collectionType: string
      creationTime: Date
    }, ExtArgs["result"]["favouriteList"]>
    composites: {}
  }

  type FavouriteListGetPayload<S extends boolean | null | undefined | FavouriteListDefaultArgs> = $Result.GetResult<Prisma.$FavouriteListPayload, S>

  type FavouriteListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavouriteListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavouriteListCountAggregateInputType | true
    }

  export interface FavouriteListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavouriteList'], meta: { name: 'FavouriteList' } }
    /**
     * Find zero or one FavouriteList that matches the filter.
     * @param {FavouriteListFindUniqueArgs} args - Arguments to find a FavouriteList
     * @example
     * // Get one FavouriteList
     * const favouriteList = await prisma.favouriteList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavouriteListFindUniqueArgs>(args: SelectSubset<T, FavouriteListFindUniqueArgs<ExtArgs>>): Prisma__FavouriteListClient<$Result.GetResult<Prisma.$FavouriteListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FavouriteList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavouriteListFindUniqueOrThrowArgs} args - Arguments to find a FavouriteList
     * @example
     * // Get one FavouriteList
     * const favouriteList = await prisma.favouriteList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavouriteListFindUniqueOrThrowArgs>(args: SelectSubset<T, FavouriteListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavouriteListClient<$Result.GetResult<Prisma.$FavouriteListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavouriteList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteListFindFirstArgs} args - Arguments to find a FavouriteList
     * @example
     * // Get one FavouriteList
     * const favouriteList = await prisma.favouriteList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavouriteListFindFirstArgs>(args?: SelectSubset<T, FavouriteListFindFirstArgs<ExtArgs>>): Prisma__FavouriteListClient<$Result.GetResult<Prisma.$FavouriteListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavouriteList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteListFindFirstOrThrowArgs} args - Arguments to find a FavouriteList
     * @example
     * // Get one FavouriteList
     * const favouriteList = await prisma.favouriteList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavouriteListFindFirstOrThrowArgs>(args?: SelectSubset<T, FavouriteListFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavouriteListClient<$Result.GetResult<Prisma.$FavouriteListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FavouriteLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavouriteLists
     * const favouriteLists = await prisma.favouriteList.findMany()
     * 
     * // Get first 10 FavouriteLists
     * const favouriteLists = await prisma.favouriteList.findMany({ take: 10 })
     * 
     * // Only select the `favId`
     * const favouriteListWithFavIdOnly = await prisma.favouriteList.findMany({ select: { favId: true } })
     * 
     */
    findMany<T extends FavouriteListFindManyArgs>(args?: SelectSubset<T, FavouriteListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouriteListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FavouriteList.
     * @param {FavouriteListCreateArgs} args - Arguments to create a FavouriteList.
     * @example
     * // Create one FavouriteList
     * const FavouriteList = await prisma.favouriteList.create({
     *   data: {
     *     // ... data to create a FavouriteList
     *   }
     * })
     * 
     */
    create<T extends FavouriteListCreateArgs>(args: SelectSubset<T, FavouriteListCreateArgs<ExtArgs>>): Prisma__FavouriteListClient<$Result.GetResult<Prisma.$FavouriteListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FavouriteLists.
     * @param {FavouriteListCreateManyArgs} args - Arguments to create many FavouriteLists.
     * @example
     * // Create many FavouriteLists
     * const favouriteList = await prisma.favouriteList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavouriteListCreateManyArgs>(args?: SelectSubset<T, FavouriteListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FavouriteLists and returns the data saved in the database.
     * @param {FavouriteListCreateManyAndReturnArgs} args - Arguments to create many FavouriteLists.
     * @example
     * // Create many FavouriteLists
     * const favouriteList = await prisma.favouriteList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FavouriteLists and only return the `favId`
     * const favouriteListWithFavIdOnly = await prisma.favouriteList.createManyAndReturn({
     *   select: { favId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavouriteListCreateManyAndReturnArgs>(args?: SelectSubset<T, FavouriteListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouriteListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FavouriteList.
     * @param {FavouriteListDeleteArgs} args - Arguments to delete one FavouriteList.
     * @example
     * // Delete one FavouriteList
     * const FavouriteList = await prisma.favouriteList.delete({
     *   where: {
     *     // ... filter to delete one FavouriteList
     *   }
     * })
     * 
     */
    delete<T extends FavouriteListDeleteArgs>(args: SelectSubset<T, FavouriteListDeleteArgs<ExtArgs>>): Prisma__FavouriteListClient<$Result.GetResult<Prisma.$FavouriteListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FavouriteList.
     * @param {FavouriteListUpdateArgs} args - Arguments to update one FavouriteList.
     * @example
     * // Update one FavouriteList
     * const favouriteList = await prisma.favouriteList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavouriteListUpdateArgs>(args: SelectSubset<T, FavouriteListUpdateArgs<ExtArgs>>): Prisma__FavouriteListClient<$Result.GetResult<Prisma.$FavouriteListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FavouriteLists.
     * @param {FavouriteListDeleteManyArgs} args - Arguments to filter FavouriteLists to delete.
     * @example
     * // Delete a few FavouriteLists
     * const { count } = await prisma.favouriteList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavouriteListDeleteManyArgs>(args?: SelectSubset<T, FavouriteListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavouriteLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavouriteLists
     * const favouriteList = await prisma.favouriteList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavouriteListUpdateManyArgs>(args: SelectSubset<T, FavouriteListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavouriteLists and returns the data updated in the database.
     * @param {FavouriteListUpdateManyAndReturnArgs} args - Arguments to update many FavouriteLists.
     * @example
     * // Update many FavouriteLists
     * const favouriteList = await prisma.favouriteList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FavouriteLists and only return the `favId`
     * const favouriteListWithFavIdOnly = await prisma.favouriteList.updateManyAndReturn({
     *   select: { favId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavouriteListUpdateManyAndReturnArgs>(args: SelectSubset<T, FavouriteListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouriteListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FavouriteList.
     * @param {FavouriteListUpsertArgs} args - Arguments to update or create a FavouriteList.
     * @example
     * // Update or create a FavouriteList
     * const favouriteList = await prisma.favouriteList.upsert({
     *   create: {
     *     // ... data to create a FavouriteList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavouriteList we want to update
     *   }
     * })
     */
    upsert<T extends FavouriteListUpsertArgs>(args: SelectSubset<T, FavouriteListUpsertArgs<ExtArgs>>): Prisma__FavouriteListClient<$Result.GetResult<Prisma.$FavouriteListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FavouriteLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteListCountArgs} args - Arguments to filter FavouriteLists to count.
     * @example
     * // Count the number of FavouriteLists
     * const count = await prisma.favouriteList.count({
     *   where: {
     *     // ... the filter for the FavouriteLists we want to count
     *   }
     * })
    **/
    count<T extends FavouriteListCountArgs>(
      args?: Subset<T, FavouriteListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavouriteListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavouriteList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavouriteListAggregateArgs>(args: Subset<T, FavouriteListAggregateArgs>): Prisma.PrismaPromise<GetFavouriteListAggregateType<T>>

    /**
     * Group by FavouriteList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteListGroupByArgs} args - Group by arguments.
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
      T extends FavouriteListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavouriteListGroupByArgs['orderBy'] }
        : { orderBy?: FavouriteListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavouriteListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavouriteListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavouriteList model
   */
  readonly fields: FavouriteListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavouriteList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavouriteListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserInfoDefaultArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FavouriteList model
   */
  interface FavouriteListFieldRefs {
    readonly favId: FieldRef<"FavouriteList", 'Int'>
    readonly userEmail: FieldRef<"FavouriteList", 'String'>
    readonly collectionId: FieldRef<"FavouriteList", 'String'>
    readonly collectionType: FieldRef<"FavouriteList", 'String'>
    readonly creationTime: FieldRef<"FavouriteList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FavouriteList findUnique
   */
  export type FavouriteListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteList
     */
    select?: FavouriteListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteList
     */
    omit?: FavouriteListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteListInclude<ExtArgs> | null
    /**
     * Filter, which FavouriteList to fetch.
     */
    where: FavouriteListWhereUniqueInput
  }

  /**
   * FavouriteList findUniqueOrThrow
   */
  export type FavouriteListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteList
     */
    select?: FavouriteListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteList
     */
    omit?: FavouriteListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteListInclude<ExtArgs> | null
    /**
     * Filter, which FavouriteList to fetch.
     */
    where: FavouriteListWhereUniqueInput
  }

  /**
   * FavouriteList findFirst
   */
  export type FavouriteListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteList
     */
    select?: FavouriteListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteList
     */
    omit?: FavouriteListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteListInclude<ExtArgs> | null
    /**
     * Filter, which FavouriteList to fetch.
     */
    where?: FavouriteListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavouriteLists to fetch.
     */
    orderBy?: FavouriteListOrderByWithRelationInput | FavouriteListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavouriteLists.
     */
    cursor?: FavouriteListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavouriteLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavouriteLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavouriteLists.
     */
    distinct?: FavouriteListScalarFieldEnum | FavouriteListScalarFieldEnum[]
  }

  /**
   * FavouriteList findFirstOrThrow
   */
  export type FavouriteListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteList
     */
    select?: FavouriteListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteList
     */
    omit?: FavouriteListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteListInclude<ExtArgs> | null
    /**
     * Filter, which FavouriteList to fetch.
     */
    where?: FavouriteListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavouriteLists to fetch.
     */
    orderBy?: FavouriteListOrderByWithRelationInput | FavouriteListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavouriteLists.
     */
    cursor?: FavouriteListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavouriteLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavouriteLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavouriteLists.
     */
    distinct?: FavouriteListScalarFieldEnum | FavouriteListScalarFieldEnum[]
  }

  /**
   * FavouriteList findMany
   */
  export type FavouriteListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteList
     */
    select?: FavouriteListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteList
     */
    omit?: FavouriteListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteListInclude<ExtArgs> | null
    /**
     * Filter, which FavouriteLists to fetch.
     */
    where?: FavouriteListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavouriteLists to fetch.
     */
    orderBy?: FavouriteListOrderByWithRelationInput | FavouriteListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavouriteLists.
     */
    cursor?: FavouriteListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavouriteLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavouriteLists.
     */
    skip?: number
    distinct?: FavouriteListScalarFieldEnum | FavouriteListScalarFieldEnum[]
  }

  /**
   * FavouriteList create
   */
  export type FavouriteListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteList
     */
    select?: FavouriteListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteList
     */
    omit?: FavouriteListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteListInclude<ExtArgs> | null
    /**
     * The data needed to create a FavouriteList.
     */
    data: XOR<FavouriteListCreateInput, FavouriteListUncheckedCreateInput>
  }

  /**
   * FavouriteList createMany
   */
  export type FavouriteListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavouriteLists.
     */
    data: FavouriteListCreateManyInput | FavouriteListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FavouriteList createManyAndReturn
   */
  export type FavouriteListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteList
     */
    select?: FavouriteListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteList
     */
    omit?: FavouriteListOmit<ExtArgs> | null
    /**
     * The data used to create many FavouriteLists.
     */
    data: FavouriteListCreateManyInput | FavouriteListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavouriteList update
   */
  export type FavouriteListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteList
     */
    select?: FavouriteListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteList
     */
    omit?: FavouriteListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteListInclude<ExtArgs> | null
    /**
     * The data needed to update a FavouriteList.
     */
    data: XOR<FavouriteListUpdateInput, FavouriteListUncheckedUpdateInput>
    /**
     * Choose, which FavouriteList to update.
     */
    where: FavouriteListWhereUniqueInput
  }

  /**
   * FavouriteList updateMany
   */
  export type FavouriteListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavouriteLists.
     */
    data: XOR<FavouriteListUpdateManyMutationInput, FavouriteListUncheckedUpdateManyInput>
    /**
     * Filter which FavouriteLists to update
     */
    where?: FavouriteListWhereInput
    /**
     * Limit how many FavouriteLists to update.
     */
    limit?: number
  }

  /**
   * FavouriteList updateManyAndReturn
   */
  export type FavouriteListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteList
     */
    select?: FavouriteListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteList
     */
    omit?: FavouriteListOmit<ExtArgs> | null
    /**
     * The data used to update FavouriteLists.
     */
    data: XOR<FavouriteListUpdateManyMutationInput, FavouriteListUncheckedUpdateManyInput>
    /**
     * Filter which FavouriteLists to update
     */
    where?: FavouriteListWhereInput
    /**
     * Limit how many FavouriteLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavouriteList upsert
   */
  export type FavouriteListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteList
     */
    select?: FavouriteListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteList
     */
    omit?: FavouriteListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteListInclude<ExtArgs> | null
    /**
     * The filter to search for the FavouriteList to update in case it exists.
     */
    where: FavouriteListWhereUniqueInput
    /**
     * In case the FavouriteList found by the `where` argument doesn't exist, create a new FavouriteList with this data.
     */
    create: XOR<FavouriteListCreateInput, FavouriteListUncheckedCreateInput>
    /**
     * In case the FavouriteList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavouriteListUpdateInput, FavouriteListUncheckedUpdateInput>
  }

  /**
   * FavouriteList delete
   */
  export type FavouriteListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteList
     */
    select?: FavouriteListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteList
     */
    omit?: FavouriteListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteListInclude<ExtArgs> | null
    /**
     * Filter which FavouriteList to delete.
     */
    where: FavouriteListWhereUniqueInput
  }

  /**
   * FavouriteList deleteMany
   */
  export type FavouriteListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavouriteLists to delete
     */
    where?: FavouriteListWhereInput
    /**
     * Limit how many FavouriteLists to delete.
     */
    limit?: number
  }

  /**
   * FavouriteList without action
   */
  export type FavouriteListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteList
     */
    select?: FavouriteListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteList
     */
    omit?: FavouriteListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteListInclude<ExtArgs> | null
  }


  /**
   * Model SystemConfig
   */

  export type AggregateSystemConfig = {
    _count: SystemConfigCountAggregateOutputType | null
    _avg: SystemConfigAvgAggregateOutputType | null
    _sum: SystemConfigSumAggregateOutputType | null
    _min: SystemConfigMinAggregateOutputType | null
    _max: SystemConfigMaxAggregateOutputType | null
  }

  export type SystemConfigAvgAggregateOutputType = {
    id: number | null
  }

  export type SystemConfigSumAggregateOutputType = {
    id: number | null
  }

  export type SystemConfigMinAggregateOutputType = {
    id: number | null
    configKey: string | null
    configValue: string | null
    configType: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userEmail: string | null
  }

  export type SystemConfigMaxAggregateOutputType = {
    id: number | null
    configKey: string | null
    configValue: string | null
    configType: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userEmail: string | null
  }

  export type SystemConfigCountAggregateOutputType = {
    id: number
    configKey: number
    configValue: number
    configType: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    userEmail: number
    _all: number
  }


  export type SystemConfigAvgAggregateInputType = {
    id?: true
  }

  export type SystemConfigSumAggregateInputType = {
    id?: true
  }

  export type SystemConfigMinAggregateInputType = {
    id?: true
    configKey?: true
    configValue?: true
    configType?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    userEmail?: true
  }

  export type SystemConfigMaxAggregateInputType = {
    id?: true
    configKey?: true
    configValue?: true
    configType?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    userEmail?: true
  }

  export type SystemConfigCountAggregateInputType = {
    id?: true
    configKey?: true
    configValue?: true
    configType?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    userEmail?: true
    _all?: true
  }

  export type SystemConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemConfig to aggregate.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemConfigs
    **/
    _count?: true | SystemConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemConfigMaxAggregateInputType
  }

  export type GetSystemConfigAggregateType<T extends SystemConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemConfig[P]>
      : GetScalarType<T[P], AggregateSystemConfig[P]>
  }




  export type SystemConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemConfigWhereInput
    orderBy?: SystemConfigOrderByWithAggregationInput | SystemConfigOrderByWithAggregationInput[]
    by: SystemConfigScalarFieldEnum[] | SystemConfigScalarFieldEnum
    having?: SystemConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemConfigCountAggregateInputType | true
    _avg?: SystemConfigAvgAggregateInputType
    _sum?: SystemConfigSumAggregateInputType
    _min?: SystemConfigMinAggregateInputType
    _max?: SystemConfigMaxAggregateInputType
  }

  export type SystemConfigGroupByOutputType = {
    id: number
    configKey: string
    configValue: string
    configType: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    userEmail: string
    _count: SystemConfigCountAggregateOutputType | null
    _avg: SystemConfigAvgAggregateOutputType | null
    _sum: SystemConfigSumAggregateOutputType | null
    _min: SystemConfigMinAggregateOutputType | null
    _max: SystemConfigMaxAggregateOutputType | null
  }

  type GetSystemConfigGroupByPayload<T extends SystemConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemConfigGroupByOutputType[P]>
            : GetScalarType<T[P], SystemConfigGroupByOutputType[P]>
        }
      >
    >


  export type SystemConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configKey?: boolean
    configValue?: boolean
    configType?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userEmail?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configKey?: boolean
    configValue?: boolean
    configType?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userEmail?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configKey?: boolean
    configValue?: boolean
    configType?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userEmail?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectScalar = {
    id?: boolean
    configKey?: boolean
    configValue?: boolean
    configType?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userEmail?: boolean
  }

  export type SystemConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "configKey" | "configValue" | "configType" | "description" | "isActive" | "createdAt" | "updatedAt" | "userEmail", ExtArgs["result"]["systemConfig"]>

  export type $SystemConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      configKey: string
      configValue: string
      configType: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      userEmail: string
    }, ExtArgs["result"]["systemConfig"]>
    composites: {}
  }

  type SystemConfigGetPayload<S extends boolean | null | undefined | SystemConfigDefaultArgs> = $Result.GetResult<Prisma.$SystemConfigPayload, S>

  type SystemConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemConfigCountAggregateInputType | true
    }

  export interface SystemConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemConfig'], meta: { name: 'SystemConfig' } }
    /**
     * Find zero or one SystemConfig that matches the filter.
     * @param {SystemConfigFindUniqueArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemConfigFindUniqueArgs>(args: SelectSubset<T, SystemConfigFindUniqueArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemConfigFindUniqueOrThrowArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindFirstArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemConfigFindFirstArgs>(args?: SelectSubset<T, SystemConfigFindFirstArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindFirstOrThrowArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemConfigs
     * const systemConfigs = await prisma.systemConfig.findMany()
     * 
     * // Get first 10 SystemConfigs
     * const systemConfigs = await prisma.systemConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemConfigFindManyArgs>(args?: SelectSubset<T, SystemConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemConfig.
     * @param {SystemConfigCreateArgs} args - Arguments to create a SystemConfig.
     * @example
     * // Create one SystemConfig
     * const SystemConfig = await prisma.systemConfig.create({
     *   data: {
     *     // ... data to create a SystemConfig
     *   }
     * })
     * 
     */
    create<T extends SystemConfigCreateArgs>(args: SelectSubset<T, SystemConfigCreateArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemConfigs.
     * @param {SystemConfigCreateManyArgs} args - Arguments to create many SystemConfigs.
     * @example
     * // Create many SystemConfigs
     * const systemConfig = await prisma.systemConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemConfigCreateManyArgs>(args?: SelectSubset<T, SystemConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemConfigs and returns the data saved in the database.
     * @param {SystemConfigCreateManyAndReturnArgs} args - Arguments to create many SystemConfigs.
     * @example
     * // Create many SystemConfigs
     * const systemConfig = await prisma.systemConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemConfigs and only return the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemConfig.
     * @param {SystemConfigDeleteArgs} args - Arguments to delete one SystemConfig.
     * @example
     * // Delete one SystemConfig
     * const SystemConfig = await prisma.systemConfig.delete({
     *   where: {
     *     // ... filter to delete one SystemConfig
     *   }
     * })
     * 
     */
    delete<T extends SystemConfigDeleteArgs>(args: SelectSubset<T, SystemConfigDeleteArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemConfig.
     * @param {SystemConfigUpdateArgs} args - Arguments to update one SystemConfig.
     * @example
     * // Update one SystemConfig
     * const systemConfig = await prisma.systemConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemConfigUpdateArgs>(args: SelectSubset<T, SystemConfigUpdateArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemConfigs.
     * @param {SystemConfigDeleteManyArgs} args - Arguments to filter SystemConfigs to delete.
     * @example
     * // Delete a few SystemConfigs
     * const { count } = await prisma.systemConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemConfigDeleteManyArgs>(args?: SelectSubset<T, SystemConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemConfigs
     * const systemConfig = await prisma.systemConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemConfigUpdateManyArgs>(args: SelectSubset<T, SystemConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemConfigs and returns the data updated in the database.
     * @param {SystemConfigUpdateManyAndReturnArgs} args - Arguments to update many SystemConfigs.
     * @example
     * // Update many SystemConfigs
     * const systemConfig = await prisma.systemConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemConfigs and only return the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemConfig.
     * @param {SystemConfigUpsertArgs} args - Arguments to update or create a SystemConfig.
     * @example
     * // Update or create a SystemConfig
     * const systemConfig = await prisma.systemConfig.upsert({
     *   create: {
     *     // ... data to create a SystemConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemConfig we want to update
     *   }
     * })
     */
    upsert<T extends SystemConfigUpsertArgs>(args: SelectSubset<T, SystemConfigUpsertArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigCountArgs} args - Arguments to filter SystemConfigs to count.
     * @example
     * // Count the number of SystemConfigs
     * const count = await prisma.systemConfig.count({
     *   where: {
     *     // ... the filter for the SystemConfigs we want to count
     *   }
     * })
    **/
    count<T extends SystemConfigCountArgs>(
      args?: Subset<T, SystemConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemConfigAggregateArgs>(args: Subset<T, SystemConfigAggregateArgs>): Prisma.PrismaPromise<GetSystemConfigAggregateType<T>>

    /**
     * Group by SystemConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigGroupByArgs} args - Group by arguments.
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
      T extends SystemConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemConfigGroupByArgs['orderBy'] }
        : { orderBy?: SystemConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemConfig model
   */
  readonly fields: SystemConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SystemConfig model
   */
  interface SystemConfigFieldRefs {
    readonly id: FieldRef<"SystemConfig", 'Int'>
    readonly configKey: FieldRef<"SystemConfig", 'String'>
    readonly configValue: FieldRef<"SystemConfig", 'String'>
    readonly configType: FieldRef<"SystemConfig", 'String'>
    readonly description: FieldRef<"SystemConfig", 'String'>
    readonly isActive: FieldRef<"SystemConfig", 'Boolean'>
    readonly createdAt: FieldRef<"SystemConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemConfig", 'DateTime'>
    readonly userEmail: FieldRef<"SystemConfig", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SystemConfig findUnique
   */
  export type SystemConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig findUniqueOrThrow
   */
  export type SystemConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig findFirst
   */
  export type SystemConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemConfigs.
     */
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig findFirstOrThrow
   */
  export type SystemConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemConfigs.
     */
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig findMany
   */
  export type SystemConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfigs to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig create
   */
  export type SystemConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemConfig.
     */
    data: XOR<SystemConfigCreateInput, SystemConfigUncheckedCreateInput>
  }

  /**
   * SystemConfig createMany
   */
  export type SystemConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemConfigs.
     */
    data: SystemConfigCreateManyInput | SystemConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemConfig createManyAndReturn
   */
  export type SystemConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data used to create many SystemConfigs.
     */
    data: SystemConfigCreateManyInput | SystemConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemConfig update
   */
  export type SystemConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemConfig.
     */
    data: XOR<SystemConfigUpdateInput, SystemConfigUncheckedUpdateInput>
    /**
     * Choose, which SystemConfig to update.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig updateMany
   */
  export type SystemConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemConfigs.
     */
    data: XOR<SystemConfigUpdateManyMutationInput, SystemConfigUncheckedUpdateManyInput>
    /**
     * Filter which SystemConfigs to update
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to update.
     */
    limit?: number
  }

  /**
   * SystemConfig updateManyAndReturn
   */
  export type SystemConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data used to update SystemConfigs.
     */
    data: XOR<SystemConfigUpdateManyMutationInput, SystemConfigUncheckedUpdateManyInput>
    /**
     * Filter which SystemConfigs to update
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to update.
     */
    limit?: number
  }

  /**
   * SystemConfig upsert
   */
  export type SystemConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemConfig to update in case it exists.
     */
    where: SystemConfigWhereUniqueInput
    /**
     * In case the SystemConfig found by the `where` argument doesn't exist, create a new SystemConfig with this data.
     */
    create: XOR<SystemConfigCreateInput, SystemConfigUncheckedCreateInput>
    /**
     * In case the SystemConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemConfigUpdateInput, SystemConfigUncheckedUpdateInput>
  }

  /**
   * SystemConfig delete
   */
  export type SystemConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter which SystemConfig to delete.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig deleteMany
   */
  export type SystemConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemConfigs to delete
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to delete.
     */
    limit?: number
  }

  /**
   * SystemConfig without action
   */
  export type SystemConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
  }


  /**
   * Model ImageBedConfig
   */

  export type AggregateImageBedConfig = {
    _count: ImageBedConfigCountAggregateOutputType | null
    _avg: ImageBedConfigAvgAggregateOutputType | null
    _sum: ImageBedConfigSumAggregateOutputType | null
    _min: ImageBedConfigMinAggregateOutputType | null
    _max: ImageBedConfigMaxAggregateOutputType | null
  }

  export type ImageBedConfigAvgAggregateOutputType = {
    id: number | null
    priority: number | null
  }

  export type ImageBedConfigSumAggregateOutputType = {
    id: number | null
    priority: number | null
  }

  export type ImageBedConfigMinAggregateOutputType = {
    id: number | null
    bedName: string | null
    bedType: string | null
    apiUrl: string | null
    apiKey: string | null
    authHeader: string | null
    isActive: boolean | null
    isDefault: boolean | null
    priority: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userEmail: string | null
  }

  export type ImageBedConfigMaxAggregateOutputType = {
    id: number | null
    bedName: string | null
    bedType: string | null
    apiUrl: string | null
    apiKey: string | null
    authHeader: string | null
    isActive: boolean | null
    isDefault: boolean | null
    priority: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userEmail: string | null
  }

  export type ImageBedConfigCountAggregateOutputType = {
    id: number
    bedName: number
    bedType: number
    apiUrl: number
    apiKey: number
    authHeader: number
    isActive: number
    isDefault: number
    priority: number
    description: number
    createdAt: number
    updatedAt: number
    userEmail: number
    _all: number
  }


  export type ImageBedConfigAvgAggregateInputType = {
    id?: true
    priority?: true
  }

  export type ImageBedConfigSumAggregateInputType = {
    id?: true
    priority?: true
  }

  export type ImageBedConfigMinAggregateInputType = {
    id?: true
    bedName?: true
    bedType?: true
    apiUrl?: true
    apiKey?: true
    authHeader?: true
    isActive?: true
    isDefault?: true
    priority?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userEmail?: true
  }

  export type ImageBedConfigMaxAggregateInputType = {
    id?: true
    bedName?: true
    bedType?: true
    apiUrl?: true
    apiKey?: true
    authHeader?: true
    isActive?: true
    isDefault?: true
    priority?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userEmail?: true
  }

  export type ImageBedConfigCountAggregateInputType = {
    id?: true
    bedName?: true
    bedType?: true
    apiUrl?: true
    apiKey?: true
    authHeader?: true
    isActive?: true
    isDefault?: true
    priority?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userEmail?: true
    _all?: true
  }

  export type ImageBedConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageBedConfig to aggregate.
     */
    where?: ImageBedConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageBedConfigs to fetch.
     */
    orderBy?: ImageBedConfigOrderByWithRelationInput | ImageBedConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageBedConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageBedConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageBedConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImageBedConfigs
    **/
    _count?: true | ImageBedConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageBedConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageBedConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageBedConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageBedConfigMaxAggregateInputType
  }

  export type GetImageBedConfigAggregateType<T extends ImageBedConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateImageBedConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImageBedConfig[P]>
      : GetScalarType<T[P], AggregateImageBedConfig[P]>
  }




  export type ImageBedConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageBedConfigWhereInput
    orderBy?: ImageBedConfigOrderByWithAggregationInput | ImageBedConfigOrderByWithAggregationInput[]
    by: ImageBedConfigScalarFieldEnum[] | ImageBedConfigScalarFieldEnum
    having?: ImageBedConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageBedConfigCountAggregateInputType | true
    _avg?: ImageBedConfigAvgAggregateInputType
    _sum?: ImageBedConfigSumAggregateInputType
    _min?: ImageBedConfigMinAggregateInputType
    _max?: ImageBedConfigMaxAggregateInputType
  }

  export type ImageBedConfigGroupByOutputType = {
    id: number
    bedName: string
    bedType: string
    apiUrl: string
    apiKey: string | null
    authHeader: string | null
    isActive: boolean
    isDefault: boolean
    priority: number
    description: string | null
    createdAt: Date
    updatedAt: Date
    userEmail: string
    _count: ImageBedConfigCountAggregateOutputType | null
    _avg: ImageBedConfigAvgAggregateOutputType | null
    _sum: ImageBedConfigSumAggregateOutputType | null
    _min: ImageBedConfigMinAggregateOutputType | null
    _max: ImageBedConfigMaxAggregateOutputType | null
  }

  type GetImageBedConfigGroupByPayload<T extends ImageBedConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageBedConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageBedConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageBedConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ImageBedConfigGroupByOutputType[P]>
        }
      >
    >


  export type ImageBedConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bedName?: boolean
    bedType?: boolean
    apiUrl?: boolean
    apiKey?: boolean
    authHeader?: boolean
    isActive?: boolean
    isDefault?: boolean
    priority?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userEmail?: boolean
  }, ExtArgs["result"]["imageBedConfig"]>

  export type ImageBedConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bedName?: boolean
    bedType?: boolean
    apiUrl?: boolean
    apiKey?: boolean
    authHeader?: boolean
    isActive?: boolean
    isDefault?: boolean
    priority?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userEmail?: boolean
  }, ExtArgs["result"]["imageBedConfig"]>

  export type ImageBedConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bedName?: boolean
    bedType?: boolean
    apiUrl?: boolean
    apiKey?: boolean
    authHeader?: boolean
    isActive?: boolean
    isDefault?: boolean
    priority?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userEmail?: boolean
  }, ExtArgs["result"]["imageBedConfig"]>

  export type ImageBedConfigSelectScalar = {
    id?: boolean
    bedName?: boolean
    bedType?: boolean
    apiUrl?: boolean
    apiKey?: boolean
    authHeader?: boolean
    isActive?: boolean
    isDefault?: boolean
    priority?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userEmail?: boolean
  }

  export type ImageBedConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bedName" | "bedType" | "apiUrl" | "apiKey" | "authHeader" | "isActive" | "isDefault" | "priority" | "description" | "createdAt" | "updatedAt" | "userEmail", ExtArgs["result"]["imageBedConfig"]>

  export type $ImageBedConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImageBedConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bedName: string
      bedType: string
      apiUrl: string
      apiKey: string | null
      authHeader: string | null
      isActive: boolean
      isDefault: boolean
      priority: number
      description: string | null
      createdAt: Date
      updatedAt: Date
      userEmail: string
    }, ExtArgs["result"]["imageBedConfig"]>
    composites: {}
  }

  type ImageBedConfigGetPayload<S extends boolean | null | undefined | ImageBedConfigDefaultArgs> = $Result.GetResult<Prisma.$ImageBedConfigPayload, S>

  type ImageBedConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageBedConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageBedConfigCountAggregateInputType | true
    }

  export interface ImageBedConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImageBedConfig'], meta: { name: 'ImageBedConfig' } }
    /**
     * Find zero or one ImageBedConfig that matches the filter.
     * @param {ImageBedConfigFindUniqueArgs} args - Arguments to find a ImageBedConfig
     * @example
     * // Get one ImageBedConfig
     * const imageBedConfig = await prisma.imageBedConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageBedConfigFindUniqueArgs>(args: SelectSubset<T, ImageBedConfigFindUniqueArgs<ExtArgs>>): Prisma__ImageBedConfigClient<$Result.GetResult<Prisma.$ImageBedConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImageBedConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageBedConfigFindUniqueOrThrowArgs} args - Arguments to find a ImageBedConfig
     * @example
     * // Get one ImageBedConfig
     * const imageBedConfig = await prisma.imageBedConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageBedConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageBedConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageBedConfigClient<$Result.GetResult<Prisma.$ImageBedConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageBedConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageBedConfigFindFirstArgs} args - Arguments to find a ImageBedConfig
     * @example
     * // Get one ImageBedConfig
     * const imageBedConfig = await prisma.imageBedConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageBedConfigFindFirstArgs>(args?: SelectSubset<T, ImageBedConfigFindFirstArgs<ExtArgs>>): Prisma__ImageBedConfigClient<$Result.GetResult<Prisma.$ImageBedConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageBedConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageBedConfigFindFirstOrThrowArgs} args - Arguments to find a ImageBedConfig
     * @example
     * // Get one ImageBedConfig
     * const imageBedConfig = await prisma.imageBedConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageBedConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageBedConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageBedConfigClient<$Result.GetResult<Prisma.$ImageBedConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImageBedConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageBedConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImageBedConfigs
     * const imageBedConfigs = await prisma.imageBedConfig.findMany()
     * 
     * // Get first 10 ImageBedConfigs
     * const imageBedConfigs = await prisma.imageBedConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageBedConfigWithIdOnly = await prisma.imageBedConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageBedConfigFindManyArgs>(args?: SelectSubset<T, ImageBedConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageBedConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImageBedConfig.
     * @param {ImageBedConfigCreateArgs} args - Arguments to create a ImageBedConfig.
     * @example
     * // Create one ImageBedConfig
     * const ImageBedConfig = await prisma.imageBedConfig.create({
     *   data: {
     *     // ... data to create a ImageBedConfig
     *   }
     * })
     * 
     */
    create<T extends ImageBedConfigCreateArgs>(args: SelectSubset<T, ImageBedConfigCreateArgs<ExtArgs>>): Prisma__ImageBedConfigClient<$Result.GetResult<Prisma.$ImageBedConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImageBedConfigs.
     * @param {ImageBedConfigCreateManyArgs} args - Arguments to create many ImageBedConfigs.
     * @example
     * // Create many ImageBedConfigs
     * const imageBedConfig = await prisma.imageBedConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageBedConfigCreateManyArgs>(args?: SelectSubset<T, ImageBedConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImageBedConfigs and returns the data saved in the database.
     * @param {ImageBedConfigCreateManyAndReturnArgs} args - Arguments to create many ImageBedConfigs.
     * @example
     * // Create many ImageBedConfigs
     * const imageBedConfig = await prisma.imageBedConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImageBedConfigs and only return the `id`
     * const imageBedConfigWithIdOnly = await prisma.imageBedConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageBedConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageBedConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageBedConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImageBedConfig.
     * @param {ImageBedConfigDeleteArgs} args - Arguments to delete one ImageBedConfig.
     * @example
     * // Delete one ImageBedConfig
     * const ImageBedConfig = await prisma.imageBedConfig.delete({
     *   where: {
     *     // ... filter to delete one ImageBedConfig
     *   }
     * })
     * 
     */
    delete<T extends ImageBedConfigDeleteArgs>(args: SelectSubset<T, ImageBedConfigDeleteArgs<ExtArgs>>): Prisma__ImageBedConfigClient<$Result.GetResult<Prisma.$ImageBedConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImageBedConfig.
     * @param {ImageBedConfigUpdateArgs} args - Arguments to update one ImageBedConfig.
     * @example
     * // Update one ImageBedConfig
     * const imageBedConfig = await prisma.imageBedConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageBedConfigUpdateArgs>(args: SelectSubset<T, ImageBedConfigUpdateArgs<ExtArgs>>): Prisma__ImageBedConfigClient<$Result.GetResult<Prisma.$ImageBedConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImageBedConfigs.
     * @param {ImageBedConfigDeleteManyArgs} args - Arguments to filter ImageBedConfigs to delete.
     * @example
     * // Delete a few ImageBedConfigs
     * const { count } = await prisma.imageBedConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageBedConfigDeleteManyArgs>(args?: SelectSubset<T, ImageBedConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageBedConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageBedConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImageBedConfigs
     * const imageBedConfig = await prisma.imageBedConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageBedConfigUpdateManyArgs>(args: SelectSubset<T, ImageBedConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageBedConfigs and returns the data updated in the database.
     * @param {ImageBedConfigUpdateManyAndReturnArgs} args - Arguments to update many ImageBedConfigs.
     * @example
     * // Update many ImageBedConfigs
     * const imageBedConfig = await prisma.imageBedConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImageBedConfigs and only return the `id`
     * const imageBedConfigWithIdOnly = await prisma.imageBedConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImageBedConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageBedConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageBedConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImageBedConfig.
     * @param {ImageBedConfigUpsertArgs} args - Arguments to update or create a ImageBedConfig.
     * @example
     * // Update or create a ImageBedConfig
     * const imageBedConfig = await prisma.imageBedConfig.upsert({
     *   create: {
     *     // ... data to create a ImageBedConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImageBedConfig we want to update
     *   }
     * })
     */
    upsert<T extends ImageBedConfigUpsertArgs>(args: SelectSubset<T, ImageBedConfigUpsertArgs<ExtArgs>>): Prisma__ImageBedConfigClient<$Result.GetResult<Prisma.$ImageBedConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImageBedConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageBedConfigCountArgs} args - Arguments to filter ImageBedConfigs to count.
     * @example
     * // Count the number of ImageBedConfigs
     * const count = await prisma.imageBedConfig.count({
     *   where: {
     *     // ... the filter for the ImageBedConfigs we want to count
     *   }
     * })
    **/
    count<T extends ImageBedConfigCountArgs>(
      args?: Subset<T, ImageBedConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageBedConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImageBedConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageBedConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageBedConfigAggregateArgs>(args: Subset<T, ImageBedConfigAggregateArgs>): Prisma.PrismaPromise<GetImageBedConfigAggregateType<T>>

    /**
     * Group by ImageBedConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageBedConfigGroupByArgs} args - Group by arguments.
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
      T extends ImageBedConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageBedConfigGroupByArgs['orderBy'] }
        : { orderBy?: ImageBedConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageBedConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageBedConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImageBedConfig model
   */
  readonly fields: ImageBedConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImageBedConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageBedConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ImageBedConfig model
   */
  interface ImageBedConfigFieldRefs {
    readonly id: FieldRef<"ImageBedConfig", 'Int'>
    readonly bedName: FieldRef<"ImageBedConfig", 'String'>
    readonly bedType: FieldRef<"ImageBedConfig", 'String'>
    readonly apiUrl: FieldRef<"ImageBedConfig", 'String'>
    readonly apiKey: FieldRef<"ImageBedConfig", 'String'>
    readonly authHeader: FieldRef<"ImageBedConfig", 'String'>
    readonly isActive: FieldRef<"ImageBedConfig", 'Boolean'>
    readonly isDefault: FieldRef<"ImageBedConfig", 'Boolean'>
    readonly priority: FieldRef<"ImageBedConfig", 'Int'>
    readonly description: FieldRef<"ImageBedConfig", 'String'>
    readonly createdAt: FieldRef<"ImageBedConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"ImageBedConfig", 'DateTime'>
    readonly userEmail: FieldRef<"ImageBedConfig", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ImageBedConfig findUnique
   */
  export type ImageBedConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageBedConfig
     */
    select?: ImageBedConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageBedConfig
     */
    omit?: ImageBedConfigOmit<ExtArgs> | null
    /**
     * Filter, which ImageBedConfig to fetch.
     */
    where: ImageBedConfigWhereUniqueInput
  }

  /**
   * ImageBedConfig findUniqueOrThrow
   */
  export type ImageBedConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageBedConfig
     */
    select?: ImageBedConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageBedConfig
     */
    omit?: ImageBedConfigOmit<ExtArgs> | null
    /**
     * Filter, which ImageBedConfig to fetch.
     */
    where: ImageBedConfigWhereUniqueInput
  }

  /**
   * ImageBedConfig findFirst
   */
  export type ImageBedConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageBedConfig
     */
    select?: ImageBedConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageBedConfig
     */
    omit?: ImageBedConfigOmit<ExtArgs> | null
    /**
     * Filter, which ImageBedConfig to fetch.
     */
    where?: ImageBedConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageBedConfigs to fetch.
     */
    orderBy?: ImageBedConfigOrderByWithRelationInput | ImageBedConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageBedConfigs.
     */
    cursor?: ImageBedConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageBedConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageBedConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageBedConfigs.
     */
    distinct?: ImageBedConfigScalarFieldEnum | ImageBedConfigScalarFieldEnum[]
  }

  /**
   * ImageBedConfig findFirstOrThrow
   */
  export type ImageBedConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageBedConfig
     */
    select?: ImageBedConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageBedConfig
     */
    omit?: ImageBedConfigOmit<ExtArgs> | null
    /**
     * Filter, which ImageBedConfig to fetch.
     */
    where?: ImageBedConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageBedConfigs to fetch.
     */
    orderBy?: ImageBedConfigOrderByWithRelationInput | ImageBedConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageBedConfigs.
     */
    cursor?: ImageBedConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageBedConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageBedConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageBedConfigs.
     */
    distinct?: ImageBedConfigScalarFieldEnum | ImageBedConfigScalarFieldEnum[]
  }

  /**
   * ImageBedConfig findMany
   */
  export type ImageBedConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageBedConfig
     */
    select?: ImageBedConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageBedConfig
     */
    omit?: ImageBedConfigOmit<ExtArgs> | null
    /**
     * Filter, which ImageBedConfigs to fetch.
     */
    where?: ImageBedConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageBedConfigs to fetch.
     */
    orderBy?: ImageBedConfigOrderByWithRelationInput | ImageBedConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImageBedConfigs.
     */
    cursor?: ImageBedConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageBedConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageBedConfigs.
     */
    skip?: number
    distinct?: ImageBedConfigScalarFieldEnum | ImageBedConfigScalarFieldEnum[]
  }

  /**
   * ImageBedConfig create
   */
  export type ImageBedConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageBedConfig
     */
    select?: ImageBedConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageBedConfig
     */
    omit?: ImageBedConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a ImageBedConfig.
     */
    data: XOR<ImageBedConfigCreateInput, ImageBedConfigUncheckedCreateInput>
  }

  /**
   * ImageBedConfig createMany
   */
  export type ImageBedConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImageBedConfigs.
     */
    data: ImageBedConfigCreateManyInput | ImageBedConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImageBedConfig createManyAndReturn
   */
  export type ImageBedConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageBedConfig
     */
    select?: ImageBedConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImageBedConfig
     */
    omit?: ImageBedConfigOmit<ExtArgs> | null
    /**
     * The data used to create many ImageBedConfigs.
     */
    data: ImageBedConfigCreateManyInput | ImageBedConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImageBedConfig update
   */
  export type ImageBedConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageBedConfig
     */
    select?: ImageBedConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageBedConfig
     */
    omit?: ImageBedConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a ImageBedConfig.
     */
    data: XOR<ImageBedConfigUpdateInput, ImageBedConfigUncheckedUpdateInput>
    /**
     * Choose, which ImageBedConfig to update.
     */
    where: ImageBedConfigWhereUniqueInput
  }

  /**
   * ImageBedConfig updateMany
   */
  export type ImageBedConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImageBedConfigs.
     */
    data: XOR<ImageBedConfigUpdateManyMutationInput, ImageBedConfigUncheckedUpdateManyInput>
    /**
     * Filter which ImageBedConfigs to update
     */
    where?: ImageBedConfigWhereInput
    /**
     * Limit how many ImageBedConfigs to update.
     */
    limit?: number
  }

  /**
   * ImageBedConfig updateManyAndReturn
   */
  export type ImageBedConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageBedConfig
     */
    select?: ImageBedConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImageBedConfig
     */
    omit?: ImageBedConfigOmit<ExtArgs> | null
    /**
     * The data used to update ImageBedConfigs.
     */
    data: XOR<ImageBedConfigUpdateManyMutationInput, ImageBedConfigUncheckedUpdateManyInput>
    /**
     * Filter which ImageBedConfigs to update
     */
    where?: ImageBedConfigWhereInput
    /**
     * Limit how many ImageBedConfigs to update.
     */
    limit?: number
  }

  /**
   * ImageBedConfig upsert
   */
  export type ImageBedConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageBedConfig
     */
    select?: ImageBedConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageBedConfig
     */
    omit?: ImageBedConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the ImageBedConfig to update in case it exists.
     */
    where: ImageBedConfigWhereUniqueInput
    /**
     * In case the ImageBedConfig found by the `where` argument doesn't exist, create a new ImageBedConfig with this data.
     */
    create: XOR<ImageBedConfigCreateInput, ImageBedConfigUncheckedCreateInput>
    /**
     * In case the ImageBedConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageBedConfigUpdateInput, ImageBedConfigUncheckedUpdateInput>
  }

  /**
   * ImageBedConfig delete
   */
  export type ImageBedConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageBedConfig
     */
    select?: ImageBedConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageBedConfig
     */
    omit?: ImageBedConfigOmit<ExtArgs> | null
    /**
     * Filter which ImageBedConfig to delete.
     */
    where: ImageBedConfigWhereUniqueInput
  }

  /**
   * ImageBedConfig deleteMany
   */
  export type ImageBedConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageBedConfigs to delete
     */
    where?: ImageBedConfigWhereInput
    /**
     * Limit how many ImageBedConfigs to delete.
     */
    limit?: number
  }

  /**
   * ImageBedConfig without action
   */
  export type ImageBedConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageBedConfig
     */
    select?: ImageBedConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageBedConfig
     */
    omit?: ImageBedConfigOmit<ExtArgs> | null
  }


  /**
   * Model NotificationConfig
   */

  export type AggregateNotificationConfig = {
    _count: NotificationConfigCountAggregateOutputType | null
    _avg: NotificationConfigAvgAggregateOutputType | null
    _sum: NotificationConfigSumAggregateOutputType | null
    _min: NotificationConfigMinAggregateOutputType | null
    _max: NotificationConfigMaxAggregateOutputType | null
  }

  export type NotificationConfigAvgAggregateOutputType = {
    id: number | null
  }

  export type NotificationConfigSumAggregateOutputType = {
    id: number | null
  }

  export type NotificationConfigMinAggregateOutputType = {
    id: number | null
    notifyType: string | null
    notifyName: string | null
    webhookUrl: string | null
    apiKey: string | null
    isActive: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userEmail: string | null
  }

  export type NotificationConfigMaxAggregateOutputType = {
    id: number | null
    notifyType: string | null
    notifyName: string | null
    webhookUrl: string | null
    apiKey: string | null
    isActive: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userEmail: string | null
  }

  export type NotificationConfigCountAggregateOutputType = {
    id: number
    notifyType: number
    notifyName: number
    webhookUrl: number
    apiKey: number
    isActive: number
    description: number
    createdAt: number
    updatedAt: number
    userEmail: number
    _all: number
  }


  export type NotificationConfigAvgAggregateInputType = {
    id?: true
  }

  export type NotificationConfigSumAggregateInputType = {
    id?: true
  }

  export type NotificationConfigMinAggregateInputType = {
    id?: true
    notifyType?: true
    notifyName?: true
    webhookUrl?: true
    apiKey?: true
    isActive?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userEmail?: true
  }

  export type NotificationConfigMaxAggregateInputType = {
    id?: true
    notifyType?: true
    notifyName?: true
    webhookUrl?: true
    apiKey?: true
    isActive?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userEmail?: true
  }

  export type NotificationConfigCountAggregateInputType = {
    id?: true
    notifyType?: true
    notifyName?: true
    webhookUrl?: true
    apiKey?: true
    isActive?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userEmail?: true
    _all?: true
  }

  export type NotificationConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationConfig to aggregate.
     */
    where?: NotificationConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationConfigs to fetch.
     */
    orderBy?: NotificationConfigOrderByWithRelationInput | NotificationConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationConfigs
    **/
    _count?: true | NotificationConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationConfigMaxAggregateInputType
  }

  export type GetNotificationConfigAggregateType<T extends NotificationConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationConfig[P]>
      : GetScalarType<T[P], AggregateNotificationConfig[P]>
  }




  export type NotificationConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationConfigWhereInput
    orderBy?: NotificationConfigOrderByWithAggregationInput | NotificationConfigOrderByWithAggregationInput[]
    by: NotificationConfigScalarFieldEnum[] | NotificationConfigScalarFieldEnum
    having?: NotificationConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationConfigCountAggregateInputType | true
    _avg?: NotificationConfigAvgAggregateInputType
    _sum?: NotificationConfigSumAggregateInputType
    _min?: NotificationConfigMinAggregateInputType
    _max?: NotificationConfigMaxAggregateInputType
  }

  export type NotificationConfigGroupByOutputType = {
    id: number
    notifyType: string
    notifyName: string
    webhookUrl: string | null
    apiKey: string | null
    isActive: boolean
    description: string | null
    createdAt: Date
    updatedAt: Date
    userEmail: string
    _count: NotificationConfigCountAggregateOutputType | null
    _avg: NotificationConfigAvgAggregateOutputType | null
    _sum: NotificationConfigSumAggregateOutputType | null
    _min: NotificationConfigMinAggregateOutputType | null
    _max: NotificationConfigMaxAggregateOutputType | null
  }

  type GetNotificationConfigGroupByPayload<T extends NotificationConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationConfigGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationConfigGroupByOutputType[P]>
        }
      >
    >


  export type NotificationConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notifyType?: boolean
    notifyName?: boolean
    webhookUrl?: boolean
    apiKey?: boolean
    isActive?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userEmail?: boolean
  }, ExtArgs["result"]["notificationConfig"]>

  export type NotificationConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notifyType?: boolean
    notifyName?: boolean
    webhookUrl?: boolean
    apiKey?: boolean
    isActive?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userEmail?: boolean
  }, ExtArgs["result"]["notificationConfig"]>

  export type NotificationConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notifyType?: boolean
    notifyName?: boolean
    webhookUrl?: boolean
    apiKey?: boolean
    isActive?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userEmail?: boolean
  }, ExtArgs["result"]["notificationConfig"]>

  export type NotificationConfigSelectScalar = {
    id?: boolean
    notifyType?: boolean
    notifyName?: boolean
    webhookUrl?: boolean
    apiKey?: boolean
    isActive?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userEmail?: boolean
  }

  export type NotificationConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "notifyType" | "notifyName" | "webhookUrl" | "apiKey" | "isActive" | "description" | "createdAt" | "updatedAt" | "userEmail", ExtArgs["result"]["notificationConfig"]>

  export type $NotificationConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      notifyType: string
      notifyName: string
      webhookUrl: string | null
      apiKey: string | null
      isActive: boolean
      description: string | null
      createdAt: Date
      updatedAt: Date
      userEmail: string
    }, ExtArgs["result"]["notificationConfig"]>
    composites: {}
  }

  type NotificationConfigGetPayload<S extends boolean | null | undefined | NotificationConfigDefaultArgs> = $Result.GetResult<Prisma.$NotificationConfigPayload, S>

  type NotificationConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationConfigCountAggregateInputType | true
    }

  export interface NotificationConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationConfig'], meta: { name: 'NotificationConfig' } }
    /**
     * Find zero or one NotificationConfig that matches the filter.
     * @param {NotificationConfigFindUniqueArgs} args - Arguments to find a NotificationConfig
     * @example
     * // Get one NotificationConfig
     * const notificationConfig = await prisma.notificationConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationConfigFindUniqueArgs>(args: SelectSubset<T, NotificationConfigFindUniqueArgs<ExtArgs>>): Prisma__NotificationConfigClient<$Result.GetResult<Prisma.$NotificationConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationConfigFindUniqueOrThrowArgs} args - Arguments to find a NotificationConfig
     * @example
     * // Get one NotificationConfig
     * const notificationConfig = await prisma.notificationConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationConfigClient<$Result.GetResult<Prisma.$NotificationConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationConfigFindFirstArgs} args - Arguments to find a NotificationConfig
     * @example
     * // Get one NotificationConfig
     * const notificationConfig = await prisma.notificationConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationConfigFindFirstArgs>(args?: SelectSubset<T, NotificationConfigFindFirstArgs<ExtArgs>>): Prisma__NotificationConfigClient<$Result.GetResult<Prisma.$NotificationConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationConfigFindFirstOrThrowArgs} args - Arguments to find a NotificationConfig
     * @example
     * // Get one NotificationConfig
     * const notificationConfig = await prisma.notificationConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationConfigClient<$Result.GetResult<Prisma.$NotificationConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationConfigs
     * const notificationConfigs = await prisma.notificationConfig.findMany()
     * 
     * // Get first 10 NotificationConfigs
     * const notificationConfigs = await prisma.notificationConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationConfigWithIdOnly = await prisma.notificationConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationConfigFindManyArgs>(args?: SelectSubset<T, NotificationConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationConfig.
     * @param {NotificationConfigCreateArgs} args - Arguments to create a NotificationConfig.
     * @example
     * // Create one NotificationConfig
     * const NotificationConfig = await prisma.notificationConfig.create({
     *   data: {
     *     // ... data to create a NotificationConfig
     *   }
     * })
     * 
     */
    create<T extends NotificationConfigCreateArgs>(args: SelectSubset<T, NotificationConfigCreateArgs<ExtArgs>>): Prisma__NotificationConfigClient<$Result.GetResult<Prisma.$NotificationConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationConfigs.
     * @param {NotificationConfigCreateManyArgs} args - Arguments to create many NotificationConfigs.
     * @example
     * // Create many NotificationConfigs
     * const notificationConfig = await prisma.notificationConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationConfigCreateManyArgs>(args?: SelectSubset<T, NotificationConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationConfigs and returns the data saved in the database.
     * @param {NotificationConfigCreateManyAndReturnArgs} args - Arguments to create many NotificationConfigs.
     * @example
     * // Create many NotificationConfigs
     * const notificationConfig = await prisma.notificationConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationConfigs and only return the `id`
     * const notificationConfigWithIdOnly = await prisma.notificationConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationConfig.
     * @param {NotificationConfigDeleteArgs} args - Arguments to delete one NotificationConfig.
     * @example
     * // Delete one NotificationConfig
     * const NotificationConfig = await prisma.notificationConfig.delete({
     *   where: {
     *     // ... filter to delete one NotificationConfig
     *   }
     * })
     * 
     */
    delete<T extends NotificationConfigDeleteArgs>(args: SelectSubset<T, NotificationConfigDeleteArgs<ExtArgs>>): Prisma__NotificationConfigClient<$Result.GetResult<Prisma.$NotificationConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationConfig.
     * @param {NotificationConfigUpdateArgs} args - Arguments to update one NotificationConfig.
     * @example
     * // Update one NotificationConfig
     * const notificationConfig = await prisma.notificationConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationConfigUpdateArgs>(args: SelectSubset<T, NotificationConfigUpdateArgs<ExtArgs>>): Prisma__NotificationConfigClient<$Result.GetResult<Prisma.$NotificationConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationConfigs.
     * @param {NotificationConfigDeleteManyArgs} args - Arguments to filter NotificationConfigs to delete.
     * @example
     * // Delete a few NotificationConfigs
     * const { count } = await prisma.notificationConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationConfigDeleteManyArgs>(args?: SelectSubset<T, NotificationConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationConfigs
     * const notificationConfig = await prisma.notificationConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationConfigUpdateManyArgs>(args: SelectSubset<T, NotificationConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationConfigs and returns the data updated in the database.
     * @param {NotificationConfigUpdateManyAndReturnArgs} args - Arguments to update many NotificationConfigs.
     * @example
     * // Update many NotificationConfigs
     * const notificationConfig = await prisma.notificationConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationConfigs and only return the `id`
     * const notificationConfigWithIdOnly = await prisma.notificationConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationConfig.
     * @param {NotificationConfigUpsertArgs} args - Arguments to update or create a NotificationConfig.
     * @example
     * // Update or create a NotificationConfig
     * const notificationConfig = await prisma.notificationConfig.upsert({
     *   create: {
     *     // ... data to create a NotificationConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationConfig we want to update
     *   }
     * })
     */
    upsert<T extends NotificationConfigUpsertArgs>(args: SelectSubset<T, NotificationConfigUpsertArgs<ExtArgs>>): Prisma__NotificationConfigClient<$Result.GetResult<Prisma.$NotificationConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationConfigCountArgs} args - Arguments to filter NotificationConfigs to count.
     * @example
     * // Count the number of NotificationConfigs
     * const count = await prisma.notificationConfig.count({
     *   where: {
     *     // ... the filter for the NotificationConfigs we want to count
     *   }
     * })
    **/
    count<T extends NotificationConfigCountArgs>(
      args?: Subset<T, NotificationConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationConfigAggregateArgs>(args: Subset<T, NotificationConfigAggregateArgs>): Prisma.PrismaPromise<GetNotificationConfigAggregateType<T>>

    /**
     * Group by NotificationConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationConfigGroupByArgs} args - Group by arguments.
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
      T extends NotificationConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationConfigGroupByArgs['orderBy'] }
        : { orderBy?: NotificationConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationConfig model
   */
  readonly fields: NotificationConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the NotificationConfig model
   */
  interface NotificationConfigFieldRefs {
    readonly id: FieldRef<"NotificationConfig", 'Int'>
    readonly notifyType: FieldRef<"NotificationConfig", 'String'>
    readonly notifyName: FieldRef<"NotificationConfig", 'String'>
    readonly webhookUrl: FieldRef<"NotificationConfig", 'String'>
    readonly apiKey: FieldRef<"NotificationConfig", 'String'>
    readonly isActive: FieldRef<"NotificationConfig", 'Boolean'>
    readonly description: FieldRef<"NotificationConfig", 'String'>
    readonly createdAt: FieldRef<"NotificationConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"NotificationConfig", 'DateTime'>
    readonly userEmail: FieldRef<"NotificationConfig", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NotificationConfig findUnique
   */
  export type NotificationConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationConfig
     */
    select?: NotificationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationConfig
     */
    omit?: NotificationConfigOmit<ExtArgs> | null
    /**
     * Filter, which NotificationConfig to fetch.
     */
    where: NotificationConfigWhereUniqueInput
  }

  /**
   * NotificationConfig findUniqueOrThrow
   */
  export type NotificationConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationConfig
     */
    select?: NotificationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationConfig
     */
    omit?: NotificationConfigOmit<ExtArgs> | null
    /**
     * Filter, which NotificationConfig to fetch.
     */
    where: NotificationConfigWhereUniqueInput
  }

  /**
   * NotificationConfig findFirst
   */
  export type NotificationConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationConfig
     */
    select?: NotificationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationConfig
     */
    omit?: NotificationConfigOmit<ExtArgs> | null
    /**
     * Filter, which NotificationConfig to fetch.
     */
    where?: NotificationConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationConfigs to fetch.
     */
    orderBy?: NotificationConfigOrderByWithRelationInput | NotificationConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationConfigs.
     */
    cursor?: NotificationConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationConfigs.
     */
    distinct?: NotificationConfigScalarFieldEnum | NotificationConfigScalarFieldEnum[]
  }

  /**
   * NotificationConfig findFirstOrThrow
   */
  export type NotificationConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationConfig
     */
    select?: NotificationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationConfig
     */
    omit?: NotificationConfigOmit<ExtArgs> | null
    /**
     * Filter, which NotificationConfig to fetch.
     */
    where?: NotificationConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationConfigs to fetch.
     */
    orderBy?: NotificationConfigOrderByWithRelationInput | NotificationConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationConfigs.
     */
    cursor?: NotificationConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationConfigs.
     */
    distinct?: NotificationConfigScalarFieldEnum | NotificationConfigScalarFieldEnum[]
  }

  /**
   * NotificationConfig findMany
   */
  export type NotificationConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationConfig
     */
    select?: NotificationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationConfig
     */
    omit?: NotificationConfigOmit<ExtArgs> | null
    /**
     * Filter, which NotificationConfigs to fetch.
     */
    where?: NotificationConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationConfigs to fetch.
     */
    orderBy?: NotificationConfigOrderByWithRelationInput | NotificationConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationConfigs.
     */
    cursor?: NotificationConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationConfigs.
     */
    skip?: number
    distinct?: NotificationConfigScalarFieldEnum | NotificationConfigScalarFieldEnum[]
  }

  /**
   * NotificationConfig create
   */
  export type NotificationConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationConfig
     */
    select?: NotificationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationConfig
     */
    omit?: NotificationConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a NotificationConfig.
     */
    data: XOR<NotificationConfigCreateInput, NotificationConfigUncheckedCreateInput>
  }

  /**
   * NotificationConfig createMany
   */
  export type NotificationConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationConfigs.
     */
    data: NotificationConfigCreateManyInput | NotificationConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationConfig createManyAndReturn
   */
  export type NotificationConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationConfig
     */
    select?: NotificationConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationConfig
     */
    omit?: NotificationConfigOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationConfigs.
     */
    data: NotificationConfigCreateManyInput | NotificationConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationConfig update
   */
  export type NotificationConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationConfig
     */
    select?: NotificationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationConfig
     */
    omit?: NotificationConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a NotificationConfig.
     */
    data: XOR<NotificationConfigUpdateInput, NotificationConfigUncheckedUpdateInput>
    /**
     * Choose, which NotificationConfig to update.
     */
    where: NotificationConfigWhereUniqueInput
  }

  /**
   * NotificationConfig updateMany
   */
  export type NotificationConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationConfigs.
     */
    data: XOR<NotificationConfigUpdateManyMutationInput, NotificationConfigUncheckedUpdateManyInput>
    /**
     * Filter which NotificationConfigs to update
     */
    where?: NotificationConfigWhereInput
    /**
     * Limit how many NotificationConfigs to update.
     */
    limit?: number
  }

  /**
   * NotificationConfig updateManyAndReturn
   */
  export type NotificationConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationConfig
     */
    select?: NotificationConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationConfig
     */
    omit?: NotificationConfigOmit<ExtArgs> | null
    /**
     * The data used to update NotificationConfigs.
     */
    data: XOR<NotificationConfigUpdateManyMutationInput, NotificationConfigUncheckedUpdateManyInput>
    /**
     * Filter which NotificationConfigs to update
     */
    where?: NotificationConfigWhereInput
    /**
     * Limit how many NotificationConfigs to update.
     */
    limit?: number
  }

  /**
   * NotificationConfig upsert
   */
  export type NotificationConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationConfig
     */
    select?: NotificationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationConfig
     */
    omit?: NotificationConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the NotificationConfig to update in case it exists.
     */
    where: NotificationConfigWhereUniqueInput
    /**
     * In case the NotificationConfig found by the `where` argument doesn't exist, create a new NotificationConfig with this data.
     */
    create: XOR<NotificationConfigCreateInput, NotificationConfigUncheckedCreateInput>
    /**
     * In case the NotificationConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationConfigUpdateInput, NotificationConfigUncheckedUpdateInput>
  }

  /**
   * NotificationConfig delete
   */
  export type NotificationConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationConfig
     */
    select?: NotificationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationConfig
     */
    omit?: NotificationConfigOmit<ExtArgs> | null
    /**
     * Filter which NotificationConfig to delete.
     */
    where: NotificationConfigWhereUniqueInput
  }

  /**
   * NotificationConfig deleteMany
   */
  export type NotificationConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationConfigs to delete
     */
    where?: NotificationConfigWhereInput
    /**
     * Limit how many NotificationConfigs to delete.
     */
    limit?: number
  }

  /**
   * NotificationConfig without action
   */
  export type NotificationConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationConfig
     */
    select?: NotificationConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationConfig
     */
    omit?: NotificationConfigOmit<ExtArgs> | null
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


  export const UserInfoScalarFieldEnum: {
    userId: 'userId',
    userEmail: 'userEmail',
    username: 'username',
    password: 'password',
    avatar: 'avatar',
    describeBySelf: 'describeBySelf',
    registrationTime: 'registrationTime',
    lover: 'lover',
    score: 'score'
  };

  export type UserInfoScalarFieldEnum = (typeof UserInfoScalarFieldEnum)[keyof typeof UserInfoScalarFieldEnum]


  export const TaskListScalarFieldEnum: {
    taskId: 'taskId',
    publisherEmail: 'publisherEmail',
    receiverEmail: 'receiverEmail',
    taskName: 'taskName',
    taskDesc: 'taskDesc',
    taskImage: 'taskImage',
    taskScore: 'taskScore',
    taskStatus: 'taskStatus',
    creationTime: 'creationTime',
    completionTime: 'completionTime',
    isApprove: 'isApprove'
  };

  export type TaskListScalarFieldEnum = (typeof TaskListScalarFieldEnum)[keyof typeof TaskListScalarFieldEnum]


  export const GiftListScalarFieldEnum: {
    giftId: 'giftId',
    publisherEmail: 'publisherEmail',
    giftImg: 'giftImg',
    giftName: 'giftName',
    giftDetail: 'giftDetail',
    needScore: 'needScore',
    remained: 'remained',
    isShow: 'isShow',
    creationTime: 'creationTime'
  };

  export type GiftListScalarFieldEnum = (typeof GiftListScalarFieldEnum)[keyof typeof GiftListScalarFieldEnum]


  export const WhisperListScalarFieldEnum: {
    whisperId: 'whisperId',
    publisherEmail: 'publisherEmail',
    toUserEmail: 'toUserEmail',
    title: 'title',
    content: 'content',
    creationTime: 'creationTime',
    isRead: 'isRead'
  };

  export type WhisperListScalarFieldEnum = (typeof WhisperListScalarFieldEnum)[keyof typeof WhisperListScalarFieldEnum]


  export const FavouriteListScalarFieldEnum: {
    favId: 'favId',
    userEmail: 'userEmail',
    collectionId: 'collectionId',
    collectionType: 'collectionType',
    creationTime: 'creationTime'
  };

  export type FavouriteListScalarFieldEnum = (typeof FavouriteListScalarFieldEnum)[keyof typeof FavouriteListScalarFieldEnum]


  export const SystemConfigScalarFieldEnum: {
    id: 'id',
    configKey: 'configKey',
    configValue: 'configValue',
    configType: 'configType',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userEmail: 'userEmail'
  };

  export type SystemConfigScalarFieldEnum = (typeof SystemConfigScalarFieldEnum)[keyof typeof SystemConfigScalarFieldEnum]


  export const ImageBedConfigScalarFieldEnum: {
    id: 'id',
    bedName: 'bedName',
    bedType: 'bedType',
    apiUrl: 'apiUrl',
    apiKey: 'apiKey',
    authHeader: 'authHeader',
    isActive: 'isActive',
    isDefault: 'isDefault',
    priority: 'priority',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userEmail: 'userEmail'
  };

  export type ImageBedConfigScalarFieldEnum = (typeof ImageBedConfigScalarFieldEnum)[keyof typeof ImageBedConfigScalarFieldEnum]


  export const NotificationConfigScalarFieldEnum: {
    id: 'id',
    notifyType: 'notifyType',
    notifyName: 'notifyName',
    webhookUrl: 'webhookUrl',
    apiKey: 'apiKey',
    isActive: 'isActive',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userEmail: 'userEmail'
  };

  export type NotificationConfigScalarFieldEnum = (typeof NotificationConfigScalarFieldEnum)[keyof typeof NotificationConfigScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserInfoWhereInput = {
    AND?: UserInfoWhereInput | UserInfoWhereInput[]
    OR?: UserInfoWhereInput[]
    NOT?: UserInfoWhereInput | UserInfoWhereInput[]
    userId?: IntFilter<"UserInfo"> | number
    userEmail?: StringFilter<"UserInfo"> | string
    username?: StringFilter<"UserInfo"> | string
    password?: StringFilter<"UserInfo"> | string
    avatar?: StringNullableFilter<"UserInfo"> | string | null
    describeBySelf?: StringNullableFilter<"UserInfo"> | string | null
    registrationTime?: DateTimeFilter<"UserInfo"> | Date | string
    lover?: StringFilter<"UserInfo"> | string
    score?: IntFilter<"UserInfo"> | number
    favourites?: FavouriteListListRelationFilter
    publishedGifts?: GiftListListRelationFilter
    publishedTasks?: TaskListListRelationFilter
    receivedTasks?: TaskListListRelationFilter
    publishedWhispers?: WhisperListListRelationFilter
    receivedWhispers?: WhisperListListRelationFilter
  }

  export type UserInfoOrderByWithRelationInput = {
    userId?: SortOrder
    userEmail?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    describeBySelf?: SortOrderInput | SortOrder
    registrationTime?: SortOrder
    lover?: SortOrder
    score?: SortOrder
    favourites?: FavouriteListOrderByRelationAggregateInput
    publishedGifts?: GiftListOrderByRelationAggregateInput
    publishedTasks?: TaskListOrderByRelationAggregateInput
    receivedTasks?: TaskListOrderByRelationAggregateInput
    publishedWhispers?: WhisperListOrderByRelationAggregateInput
    receivedWhispers?: WhisperListOrderByRelationAggregateInput
  }

  export type UserInfoWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    userEmail?: string
    AND?: UserInfoWhereInput | UserInfoWhereInput[]
    OR?: UserInfoWhereInput[]
    NOT?: UserInfoWhereInput | UserInfoWhereInput[]
    username?: StringFilter<"UserInfo"> | string
    password?: StringFilter<"UserInfo"> | string
    avatar?: StringNullableFilter<"UserInfo"> | string | null
    describeBySelf?: StringNullableFilter<"UserInfo"> | string | null
    registrationTime?: DateTimeFilter<"UserInfo"> | Date | string
    lover?: StringFilter<"UserInfo"> | string
    score?: IntFilter<"UserInfo"> | number
    favourites?: FavouriteListListRelationFilter
    publishedGifts?: GiftListListRelationFilter
    publishedTasks?: TaskListListRelationFilter
    receivedTasks?: TaskListListRelationFilter
    publishedWhispers?: WhisperListListRelationFilter
    receivedWhispers?: WhisperListListRelationFilter
  }, "userId" | "userEmail">

  export type UserInfoOrderByWithAggregationInput = {
    userId?: SortOrder
    userEmail?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    describeBySelf?: SortOrderInput | SortOrder
    registrationTime?: SortOrder
    lover?: SortOrder
    score?: SortOrder
    _count?: UserInfoCountOrderByAggregateInput
    _avg?: UserInfoAvgOrderByAggregateInput
    _max?: UserInfoMaxOrderByAggregateInput
    _min?: UserInfoMinOrderByAggregateInput
    _sum?: UserInfoSumOrderByAggregateInput
  }

  export type UserInfoScalarWhereWithAggregatesInput = {
    AND?: UserInfoScalarWhereWithAggregatesInput | UserInfoScalarWhereWithAggregatesInput[]
    OR?: UserInfoScalarWhereWithAggregatesInput[]
    NOT?: UserInfoScalarWhereWithAggregatesInput | UserInfoScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UserInfo"> | number
    userEmail?: StringWithAggregatesFilter<"UserInfo"> | string
    username?: StringWithAggregatesFilter<"UserInfo"> | string
    password?: StringWithAggregatesFilter<"UserInfo"> | string
    avatar?: StringNullableWithAggregatesFilter<"UserInfo"> | string | null
    describeBySelf?: StringNullableWithAggregatesFilter<"UserInfo"> | string | null
    registrationTime?: DateTimeWithAggregatesFilter<"UserInfo"> | Date | string
    lover?: StringWithAggregatesFilter<"UserInfo"> | string
    score?: IntWithAggregatesFilter<"UserInfo"> | number
  }

  export type TaskListWhereInput = {
    AND?: TaskListWhereInput | TaskListWhereInput[]
    OR?: TaskListWhereInput[]
    NOT?: TaskListWhereInput | TaskListWhereInput[]
    taskId?: IntFilter<"TaskList"> | number
    publisherEmail?: StringFilter<"TaskList"> | string
    receiverEmail?: StringNullableFilter<"TaskList"> | string | null
    taskName?: StringFilter<"TaskList"> | string
    taskDesc?: StringNullableFilter<"TaskList"> | string | null
    taskImage?: StringNullableFilter<"TaskList"> | string | null
    taskScore?: IntFilter<"TaskList"> | number
    taskStatus?: StringFilter<"TaskList"> | string
    creationTime?: DateTimeFilter<"TaskList"> | Date | string
    completionTime?: DateTimeNullableFilter<"TaskList"> | Date | string | null
    isApprove?: BoolFilter<"TaskList"> | boolean
    publisher?: XOR<UserInfoScalarRelationFilter, UserInfoWhereInput>
    receiver?: XOR<UserInfoNullableScalarRelationFilter, UserInfoWhereInput> | null
  }

  export type TaskListOrderByWithRelationInput = {
    taskId?: SortOrder
    publisherEmail?: SortOrder
    receiverEmail?: SortOrderInput | SortOrder
    taskName?: SortOrder
    taskDesc?: SortOrderInput | SortOrder
    taskImage?: SortOrderInput | SortOrder
    taskScore?: SortOrder
    taskStatus?: SortOrder
    creationTime?: SortOrder
    completionTime?: SortOrderInput | SortOrder
    isApprove?: SortOrder
    publisher?: UserInfoOrderByWithRelationInput
    receiver?: UserInfoOrderByWithRelationInput
  }

  export type TaskListWhereUniqueInput = Prisma.AtLeast<{
    taskId?: number
    AND?: TaskListWhereInput | TaskListWhereInput[]
    OR?: TaskListWhereInput[]
    NOT?: TaskListWhereInput | TaskListWhereInput[]
    publisherEmail?: StringFilter<"TaskList"> | string
    receiverEmail?: StringNullableFilter<"TaskList"> | string | null
    taskName?: StringFilter<"TaskList"> | string
    taskDesc?: StringNullableFilter<"TaskList"> | string | null
    taskImage?: StringNullableFilter<"TaskList"> | string | null
    taskScore?: IntFilter<"TaskList"> | number
    taskStatus?: StringFilter<"TaskList"> | string
    creationTime?: DateTimeFilter<"TaskList"> | Date | string
    completionTime?: DateTimeNullableFilter<"TaskList"> | Date | string | null
    isApprove?: BoolFilter<"TaskList"> | boolean
    publisher?: XOR<UserInfoScalarRelationFilter, UserInfoWhereInput>
    receiver?: XOR<UserInfoNullableScalarRelationFilter, UserInfoWhereInput> | null
  }, "taskId">

  export type TaskListOrderByWithAggregationInput = {
    taskId?: SortOrder
    publisherEmail?: SortOrder
    receiverEmail?: SortOrderInput | SortOrder
    taskName?: SortOrder
    taskDesc?: SortOrderInput | SortOrder
    taskImage?: SortOrderInput | SortOrder
    taskScore?: SortOrder
    taskStatus?: SortOrder
    creationTime?: SortOrder
    completionTime?: SortOrderInput | SortOrder
    isApprove?: SortOrder
    _count?: TaskListCountOrderByAggregateInput
    _avg?: TaskListAvgOrderByAggregateInput
    _max?: TaskListMaxOrderByAggregateInput
    _min?: TaskListMinOrderByAggregateInput
    _sum?: TaskListSumOrderByAggregateInput
  }

  export type TaskListScalarWhereWithAggregatesInput = {
    AND?: TaskListScalarWhereWithAggregatesInput | TaskListScalarWhereWithAggregatesInput[]
    OR?: TaskListScalarWhereWithAggregatesInput[]
    NOT?: TaskListScalarWhereWithAggregatesInput | TaskListScalarWhereWithAggregatesInput[]
    taskId?: IntWithAggregatesFilter<"TaskList"> | number
    publisherEmail?: StringWithAggregatesFilter<"TaskList"> | string
    receiverEmail?: StringNullableWithAggregatesFilter<"TaskList"> | string | null
    taskName?: StringWithAggregatesFilter<"TaskList"> | string
    taskDesc?: StringNullableWithAggregatesFilter<"TaskList"> | string | null
    taskImage?: StringNullableWithAggregatesFilter<"TaskList"> | string | null
    taskScore?: IntWithAggregatesFilter<"TaskList"> | number
    taskStatus?: StringWithAggregatesFilter<"TaskList"> | string
    creationTime?: DateTimeWithAggregatesFilter<"TaskList"> | Date | string
    completionTime?: DateTimeNullableWithAggregatesFilter<"TaskList"> | Date | string | null
    isApprove?: BoolWithAggregatesFilter<"TaskList"> | boolean
  }

  export type GiftListWhereInput = {
    AND?: GiftListWhereInput | GiftListWhereInput[]
    OR?: GiftListWhereInput[]
    NOT?: GiftListWhereInput | GiftListWhereInput[]
    giftId?: IntFilter<"GiftList"> | number
    publisherEmail?: StringFilter<"GiftList"> | string
    giftImg?: StringNullableFilter<"GiftList"> | string | null
    giftName?: StringFilter<"GiftList"> | string
    giftDetail?: StringNullableFilter<"GiftList"> | string | null
    needScore?: IntFilter<"GiftList"> | number
    remained?: IntFilter<"GiftList"> | number
    isShow?: BoolFilter<"GiftList"> | boolean
    creationTime?: DateTimeFilter<"GiftList"> | Date | string
    publisher?: XOR<UserInfoScalarRelationFilter, UserInfoWhereInput>
  }

  export type GiftListOrderByWithRelationInput = {
    giftId?: SortOrder
    publisherEmail?: SortOrder
    giftImg?: SortOrderInput | SortOrder
    giftName?: SortOrder
    giftDetail?: SortOrderInput | SortOrder
    needScore?: SortOrder
    remained?: SortOrder
    isShow?: SortOrder
    creationTime?: SortOrder
    publisher?: UserInfoOrderByWithRelationInput
  }

  export type GiftListWhereUniqueInput = Prisma.AtLeast<{
    giftId?: number
    AND?: GiftListWhereInput | GiftListWhereInput[]
    OR?: GiftListWhereInput[]
    NOT?: GiftListWhereInput | GiftListWhereInput[]
    publisherEmail?: StringFilter<"GiftList"> | string
    giftImg?: StringNullableFilter<"GiftList"> | string | null
    giftName?: StringFilter<"GiftList"> | string
    giftDetail?: StringNullableFilter<"GiftList"> | string | null
    needScore?: IntFilter<"GiftList"> | number
    remained?: IntFilter<"GiftList"> | number
    isShow?: BoolFilter<"GiftList"> | boolean
    creationTime?: DateTimeFilter<"GiftList"> | Date | string
    publisher?: XOR<UserInfoScalarRelationFilter, UserInfoWhereInput>
  }, "giftId">

  export type GiftListOrderByWithAggregationInput = {
    giftId?: SortOrder
    publisherEmail?: SortOrder
    giftImg?: SortOrderInput | SortOrder
    giftName?: SortOrder
    giftDetail?: SortOrderInput | SortOrder
    needScore?: SortOrder
    remained?: SortOrder
    isShow?: SortOrder
    creationTime?: SortOrder
    _count?: GiftListCountOrderByAggregateInput
    _avg?: GiftListAvgOrderByAggregateInput
    _max?: GiftListMaxOrderByAggregateInput
    _min?: GiftListMinOrderByAggregateInput
    _sum?: GiftListSumOrderByAggregateInput
  }

  export type GiftListScalarWhereWithAggregatesInput = {
    AND?: GiftListScalarWhereWithAggregatesInput | GiftListScalarWhereWithAggregatesInput[]
    OR?: GiftListScalarWhereWithAggregatesInput[]
    NOT?: GiftListScalarWhereWithAggregatesInput | GiftListScalarWhereWithAggregatesInput[]
    giftId?: IntWithAggregatesFilter<"GiftList"> | number
    publisherEmail?: StringWithAggregatesFilter<"GiftList"> | string
    giftImg?: StringNullableWithAggregatesFilter<"GiftList"> | string | null
    giftName?: StringWithAggregatesFilter<"GiftList"> | string
    giftDetail?: StringNullableWithAggregatesFilter<"GiftList"> | string | null
    needScore?: IntWithAggregatesFilter<"GiftList"> | number
    remained?: IntWithAggregatesFilter<"GiftList"> | number
    isShow?: BoolWithAggregatesFilter<"GiftList"> | boolean
    creationTime?: DateTimeWithAggregatesFilter<"GiftList"> | Date | string
  }

  export type WhisperListWhereInput = {
    AND?: WhisperListWhereInput | WhisperListWhereInput[]
    OR?: WhisperListWhereInput[]
    NOT?: WhisperListWhereInput | WhisperListWhereInput[]
    whisperId?: IntFilter<"WhisperList"> | number
    publisherEmail?: StringFilter<"WhisperList"> | string
    toUserEmail?: StringNullableFilter<"WhisperList"> | string | null
    title?: StringNullableFilter<"WhisperList"> | string | null
    content?: StringFilter<"WhisperList"> | string
    creationTime?: DateTimeFilter<"WhisperList"> | Date | string
    isRead?: BoolFilter<"WhisperList"> | boolean
    publisher?: XOR<UserInfoScalarRelationFilter, UserInfoWhereInput>
    receiver?: XOR<UserInfoNullableScalarRelationFilter, UserInfoWhereInput> | null
  }

  export type WhisperListOrderByWithRelationInput = {
    whisperId?: SortOrder
    publisherEmail?: SortOrder
    toUserEmail?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrder
    creationTime?: SortOrder
    isRead?: SortOrder
    publisher?: UserInfoOrderByWithRelationInput
    receiver?: UserInfoOrderByWithRelationInput
  }

  export type WhisperListWhereUniqueInput = Prisma.AtLeast<{
    whisperId?: number
    AND?: WhisperListWhereInput | WhisperListWhereInput[]
    OR?: WhisperListWhereInput[]
    NOT?: WhisperListWhereInput | WhisperListWhereInput[]
    publisherEmail?: StringFilter<"WhisperList"> | string
    toUserEmail?: StringNullableFilter<"WhisperList"> | string | null
    title?: StringNullableFilter<"WhisperList"> | string | null
    content?: StringFilter<"WhisperList"> | string
    creationTime?: DateTimeFilter<"WhisperList"> | Date | string
    isRead?: BoolFilter<"WhisperList"> | boolean
    publisher?: XOR<UserInfoScalarRelationFilter, UserInfoWhereInput>
    receiver?: XOR<UserInfoNullableScalarRelationFilter, UserInfoWhereInput> | null
  }, "whisperId">

  export type WhisperListOrderByWithAggregationInput = {
    whisperId?: SortOrder
    publisherEmail?: SortOrder
    toUserEmail?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrder
    creationTime?: SortOrder
    isRead?: SortOrder
    _count?: WhisperListCountOrderByAggregateInput
    _avg?: WhisperListAvgOrderByAggregateInput
    _max?: WhisperListMaxOrderByAggregateInput
    _min?: WhisperListMinOrderByAggregateInput
    _sum?: WhisperListSumOrderByAggregateInput
  }

  export type WhisperListScalarWhereWithAggregatesInput = {
    AND?: WhisperListScalarWhereWithAggregatesInput | WhisperListScalarWhereWithAggregatesInput[]
    OR?: WhisperListScalarWhereWithAggregatesInput[]
    NOT?: WhisperListScalarWhereWithAggregatesInput | WhisperListScalarWhereWithAggregatesInput[]
    whisperId?: IntWithAggregatesFilter<"WhisperList"> | number
    publisherEmail?: StringWithAggregatesFilter<"WhisperList"> | string
    toUserEmail?: StringNullableWithAggregatesFilter<"WhisperList"> | string | null
    title?: StringNullableWithAggregatesFilter<"WhisperList"> | string | null
    content?: StringWithAggregatesFilter<"WhisperList"> | string
    creationTime?: DateTimeWithAggregatesFilter<"WhisperList"> | Date | string
    isRead?: BoolWithAggregatesFilter<"WhisperList"> | boolean
  }

  export type FavouriteListWhereInput = {
    AND?: FavouriteListWhereInput | FavouriteListWhereInput[]
    OR?: FavouriteListWhereInput[]
    NOT?: FavouriteListWhereInput | FavouriteListWhereInput[]
    favId?: IntFilter<"FavouriteList"> | number
    userEmail?: StringFilter<"FavouriteList"> | string
    collectionId?: StringFilter<"FavouriteList"> | string
    collectionType?: StringFilter<"FavouriteList"> | string
    creationTime?: DateTimeFilter<"FavouriteList"> | Date | string
    user?: XOR<UserInfoScalarRelationFilter, UserInfoWhereInput>
  }

  export type FavouriteListOrderByWithRelationInput = {
    favId?: SortOrder
    userEmail?: SortOrder
    collectionId?: SortOrder
    collectionType?: SortOrder
    creationTime?: SortOrder
    user?: UserInfoOrderByWithRelationInput
  }

  export type FavouriteListWhereUniqueInput = Prisma.AtLeast<{
    favId?: number
    userEmail_collectionId_collectionType?: FavouriteListUserEmailCollectionIdCollectionTypeCompoundUniqueInput
    AND?: FavouriteListWhereInput | FavouriteListWhereInput[]
    OR?: FavouriteListWhereInput[]
    NOT?: FavouriteListWhereInput | FavouriteListWhereInput[]
    userEmail?: StringFilter<"FavouriteList"> | string
    collectionId?: StringFilter<"FavouriteList"> | string
    collectionType?: StringFilter<"FavouriteList"> | string
    creationTime?: DateTimeFilter<"FavouriteList"> | Date | string
    user?: XOR<UserInfoScalarRelationFilter, UserInfoWhereInput>
  }, "favId" | "userEmail_collectionId_collectionType">

  export type FavouriteListOrderByWithAggregationInput = {
    favId?: SortOrder
    userEmail?: SortOrder
    collectionId?: SortOrder
    collectionType?: SortOrder
    creationTime?: SortOrder
    _count?: FavouriteListCountOrderByAggregateInput
    _avg?: FavouriteListAvgOrderByAggregateInput
    _max?: FavouriteListMaxOrderByAggregateInput
    _min?: FavouriteListMinOrderByAggregateInput
    _sum?: FavouriteListSumOrderByAggregateInput
  }

  export type FavouriteListScalarWhereWithAggregatesInput = {
    AND?: FavouriteListScalarWhereWithAggregatesInput | FavouriteListScalarWhereWithAggregatesInput[]
    OR?: FavouriteListScalarWhereWithAggregatesInput[]
    NOT?: FavouriteListScalarWhereWithAggregatesInput | FavouriteListScalarWhereWithAggregatesInput[]
    favId?: IntWithAggregatesFilter<"FavouriteList"> | number
    userEmail?: StringWithAggregatesFilter<"FavouriteList"> | string
    collectionId?: StringWithAggregatesFilter<"FavouriteList"> | string
    collectionType?: StringWithAggregatesFilter<"FavouriteList"> | string
    creationTime?: DateTimeWithAggregatesFilter<"FavouriteList"> | Date | string
  }

  export type SystemConfigWhereInput = {
    AND?: SystemConfigWhereInput | SystemConfigWhereInput[]
    OR?: SystemConfigWhereInput[]
    NOT?: SystemConfigWhereInput | SystemConfigWhereInput[]
    id?: IntFilter<"SystemConfig"> | number
    configKey?: StringFilter<"SystemConfig"> | string
    configValue?: StringFilter<"SystemConfig"> | string
    configType?: StringFilter<"SystemConfig"> | string
    description?: StringNullableFilter<"SystemConfig"> | string | null
    isActive?: BoolFilter<"SystemConfig"> | boolean
    createdAt?: DateTimeFilter<"SystemConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SystemConfig"> | Date | string
    userEmail?: StringFilter<"SystemConfig"> | string
  }

  export type SystemConfigOrderByWithRelationInput = {
    id?: SortOrder
    configKey?: SortOrder
    configValue?: SortOrder
    configType?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userEmail?: SortOrder
  }

  export type SystemConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    configKey_userEmail?: SystemConfigConfigKeyUserEmailCompoundUniqueInput
    AND?: SystemConfigWhereInput | SystemConfigWhereInput[]
    OR?: SystemConfigWhereInput[]
    NOT?: SystemConfigWhereInput | SystemConfigWhereInput[]
    configKey?: StringFilter<"SystemConfig"> | string
    configValue?: StringFilter<"SystemConfig"> | string
    configType?: StringFilter<"SystemConfig"> | string
    description?: StringNullableFilter<"SystemConfig"> | string | null
    isActive?: BoolFilter<"SystemConfig"> | boolean
    createdAt?: DateTimeFilter<"SystemConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SystemConfig"> | Date | string
    userEmail?: StringFilter<"SystemConfig"> | string
  }, "id" | "configKey_userEmail">

  export type SystemConfigOrderByWithAggregationInput = {
    id?: SortOrder
    configKey?: SortOrder
    configValue?: SortOrder
    configType?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userEmail?: SortOrder
    _count?: SystemConfigCountOrderByAggregateInput
    _avg?: SystemConfigAvgOrderByAggregateInput
    _max?: SystemConfigMaxOrderByAggregateInput
    _min?: SystemConfigMinOrderByAggregateInput
    _sum?: SystemConfigSumOrderByAggregateInput
  }

  export type SystemConfigScalarWhereWithAggregatesInput = {
    AND?: SystemConfigScalarWhereWithAggregatesInput | SystemConfigScalarWhereWithAggregatesInput[]
    OR?: SystemConfigScalarWhereWithAggregatesInput[]
    NOT?: SystemConfigScalarWhereWithAggregatesInput | SystemConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SystemConfig"> | number
    configKey?: StringWithAggregatesFilter<"SystemConfig"> | string
    configValue?: StringWithAggregatesFilter<"SystemConfig"> | string
    configType?: StringWithAggregatesFilter<"SystemConfig"> | string
    description?: StringNullableWithAggregatesFilter<"SystemConfig"> | string | null
    isActive?: BoolWithAggregatesFilter<"SystemConfig"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SystemConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemConfig"> | Date | string
    userEmail?: StringWithAggregatesFilter<"SystemConfig"> | string
  }

  export type ImageBedConfigWhereInput = {
    AND?: ImageBedConfigWhereInput | ImageBedConfigWhereInput[]
    OR?: ImageBedConfigWhereInput[]
    NOT?: ImageBedConfigWhereInput | ImageBedConfigWhereInput[]
    id?: IntFilter<"ImageBedConfig"> | number
    bedName?: StringFilter<"ImageBedConfig"> | string
    bedType?: StringFilter<"ImageBedConfig"> | string
    apiUrl?: StringFilter<"ImageBedConfig"> | string
    apiKey?: StringNullableFilter<"ImageBedConfig"> | string | null
    authHeader?: StringNullableFilter<"ImageBedConfig"> | string | null
    isActive?: BoolFilter<"ImageBedConfig"> | boolean
    isDefault?: BoolFilter<"ImageBedConfig"> | boolean
    priority?: IntFilter<"ImageBedConfig"> | number
    description?: StringNullableFilter<"ImageBedConfig"> | string | null
    createdAt?: DateTimeFilter<"ImageBedConfig"> | Date | string
    updatedAt?: DateTimeFilter<"ImageBedConfig"> | Date | string
    userEmail?: StringFilter<"ImageBedConfig"> | string
  }

  export type ImageBedConfigOrderByWithRelationInput = {
    id?: SortOrder
    bedName?: SortOrder
    bedType?: SortOrder
    apiUrl?: SortOrder
    apiKey?: SortOrderInput | SortOrder
    authHeader?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    priority?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userEmail?: SortOrder
  }

  export type ImageBedConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    bedName_userEmail?: ImageBedConfigBedNameUserEmailCompoundUniqueInput
    AND?: ImageBedConfigWhereInput | ImageBedConfigWhereInput[]
    OR?: ImageBedConfigWhereInput[]
    NOT?: ImageBedConfigWhereInput | ImageBedConfigWhereInput[]
    bedName?: StringFilter<"ImageBedConfig"> | string
    bedType?: StringFilter<"ImageBedConfig"> | string
    apiUrl?: StringFilter<"ImageBedConfig"> | string
    apiKey?: StringNullableFilter<"ImageBedConfig"> | string | null
    authHeader?: StringNullableFilter<"ImageBedConfig"> | string | null
    isActive?: BoolFilter<"ImageBedConfig"> | boolean
    isDefault?: BoolFilter<"ImageBedConfig"> | boolean
    priority?: IntFilter<"ImageBedConfig"> | number
    description?: StringNullableFilter<"ImageBedConfig"> | string | null
    createdAt?: DateTimeFilter<"ImageBedConfig"> | Date | string
    updatedAt?: DateTimeFilter<"ImageBedConfig"> | Date | string
    userEmail?: StringFilter<"ImageBedConfig"> | string
  }, "id" | "bedName_userEmail">

  export type ImageBedConfigOrderByWithAggregationInput = {
    id?: SortOrder
    bedName?: SortOrder
    bedType?: SortOrder
    apiUrl?: SortOrder
    apiKey?: SortOrderInput | SortOrder
    authHeader?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    priority?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userEmail?: SortOrder
    _count?: ImageBedConfigCountOrderByAggregateInput
    _avg?: ImageBedConfigAvgOrderByAggregateInput
    _max?: ImageBedConfigMaxOrderByAggregateInput
    _min?: ImageBedConfigMinOrderByAggregateInput
    _sum?: ImageBedConfigSumOrderByAggregateInput
  }

  export type ImageBedConfigScalarWhereWithAggregatesInput = {
    AND?: ImageBedConfigScalarWhereWithAggregatesInput | ImageBedConfigScalarWhereWithAggregatesInput[]
    OR?: ImageBedConfigScalarWhereWithAggregatesInput[]
    NOT?: ImageBedConfigScalarWhereWithAggregatesInput | ImageBedConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ImageBedConfig"> | number
    bedName?: StringWithAggregatesFilter<"ImageBedConfig"> | string
    bedType?: StringWithAggregatesFilter<"ImageBedConfig"> | string
    apiUrl?: StringWithAggregatesFilter<"ImageBedConfig"> | string
    apiKey?: StringNullableWithAggregatesFilter<"ImageBedConfig"> | string | null
    authHeader?: StringNullableWithAggregatesFilter<"ImageBedConfig"> | string | null
    isActive?: BoolWithAggregatesFilter<"ImageBedConfig"> | boolean
    isDefault?: BoolWithAggregatesFilter<"ImageBedConfig"> | boolean
    priority?: IntWithAggregatesFilter<"ImageBedConfig"> | number
    description?: StringNullableWithAggregatesFilter<"ImageBedConfig"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ImageBedConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ImageBedConfig"> | Date | string
    userEmail?: StringWithAggregatesFilter<"ImageBedConfig"> | string
  }

  export type NotificationConfigWhereInput = {
    AND?: NotificationConfigWhereInput | NotificationConfigWhereInput[]
    OR?: NotificationConfigWhereInput[]
    NOT?: NotificationConfigWhereInput | NotificationConfigWhereInput[]
    id?: IntFilter<"NotificationConfig"> | number
    notifyType?: StringFilter<"NotificationConfig"> | string
    notifyName?: StringFilter<"NotificationConfig"> | string
    webhookUrl?: StringNullableFilter<"NotificationConfig"> | string | null
    apiKey?: StringNullableFilter<"NotificationConfig"> | string | null
    isActive?: BoolFilter<"NotificationConfig"> | boolean
    description?: StringNullableFilter<"NotificationConfig"> | string | null
    createdAt?: DateTimeFilter<"NotificationConfig"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationConfig"> | Date | string
    userEmail?: StringFilter<"NotificationConfig"> | string
  }

  export type NotificationConfigOrderByWithRelationInput = {
    id?: SortOrder
    notifyType?: SortOrder
    notifyName?: SortOrder
    webhookUrl?: SortOrderInput | SortOrder
    apiKey?: SortOrderInput | SortOrder
    isActive?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userEmail?: SortOrder
  }

  export type NotificationConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    notifyType_userEmail?: NotificationConfigNotifyTypeUserEmailCompoundUniqueInput
    AND?: NotificationConfigWhereInput | NotificationConfigWhereInput[]
    OR?: NotificationConfigWhereInput[]
    NOT?: NotificationConfigWhereInput | NotificationConfigWhereInput[]
    notifyType?: StringFilter<"NotificationConfig"> | string
    notifyName?: StringFilter<"NotificationConfig"> | string
    webhookUrl?: StringNullableFilter<"NotificationConfig"> | string | null
    apiKey?: StringNullableFilter<"NotificationConfig"> | string | null
    isActive?: BoolFilter<"NotificationConfig"> | boolean
    description?: StringNullableFilter<"NotificationConfig"> | string | null
    createdAt?: DateTimeFilter<"NotificationConfig"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationConfig"> | Date | string
    userEmail?: StringFilter<"NotificationConfig"> | string
  }, "id" | "notifyType_userEmail">

  export type NotificationConfigOrderByWithAggregationInput = {
    id?: SortOrder
    notifyType?: SortOrder
    notifyName?: SortOrder
    webhookUrl?: SortOrderInput | SortOrder
    apiKey?: SortOrderInput | SortOrder
    isActive?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userEmail?: SortOrder
    _count?: NotificationConfigCountOrderByAggregateInput
    _avg?: NotificationConfigAvgOrderByAggregateInput
    _max?: NotificationConfigMaxOrderByAggregateInput
    _min?: NotificationConfigMinOrderByAggregateInput
    _sum?: NotificationConfigSumOrderByAggregateInput
  }

  export type NotificationConfigScalarWhereWithAggregatesInput = {
    AND?: NotificationConfigScalarWhereWithAggregatesInput | NotificationConfigScalarWhereWithAggregatesInput[]
    OR?: NotificationConfigScalarWhereWithAggregatesInput[]
    NOT?: NotificationConfigScalarWhereWithAggregatesInput | NotificationConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NotificationConfig"> | number
    notifyType?: StringWithAggregatesFilter<"NotificationConfig"> | string
    notifyName?: StringWithAggregatesFilter<"NotificationConfig"> | string
    webhookUrl?: StringNullableWithAggregatesFilter<"NotificationConfig"> | string | null
    apiKey?: StringNullableWithAggregatesFilter<"NotificationConfig"> | string | null
    isActive?: BoolWithAggregatesFilter<"NotificationConfig"> | boolean
    description?: StringNullableWithAggregatesFilter<"NotificationConfig"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NotificationConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NotificationConfig"> | Date | string
    userEmail?: StringWithAggregatesFilter<"NotificationConfig"> | string
  }

  export type UserInfoCreateInput = {
    userEmail: string
    username: string
    password: string
    avatar?: string | null
    describeBySelf?: string | null
    registrationTime?: Date | string
    lover: string
    score?: number
    favourites?: FavouriteListCreateNestedManyWithoutUserInput
    publishedGifts?: GiftListCreateNestedManyWithoutPublisherInput
    publishedTasks?: TaskListCreateNestedManyWithoutPublisherInput
    receivedTasks?: TaskListCreateNestedManyWithoutReceiverInput
    publishedWhispers?: WhisperListCreateNestedManyWithoutPublisherInput
    receivedWhispers?: WhisperListCreateNestedManyWithoutReceiverInput
  }

  export type UserInfoUncheckedCreateInput = {
    userId?: number
    userEmail: string
    username: string
    password: string
    avatar?: string | null
    describeBySelf?: string | null
    registrationTime?: Date | string
    lover: string
    score?: number
    favourites?: FavouriteListUncheckedCreateNestedManyWithoutUserInput
    publishedGifts?: GiftListUncheckedCreateNestedManyWithoutPublisherInput
    publishedTasks?: TaskListUncheckedCreateNestedManyWithoutPublisherInput
    receivedTasks?: TaskListUncheckedCreateNestedManyWithoutReceiverInput
    publishedWhispers?: WhisperListUncheckedCreateNestedManyWithoutPublisherInput
    receivedWhispers?: WhisperListUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserInfoUpdateInput = {
    userEmail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    describeBySelf?: NullableStringFieldUpdateOperationsInput | string | null
    registrationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lover?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    favourites?: FavouriteListUpdateManyWithoutUserNestedInput
    publishedGifts?: GiftListUpdateManyWithoutPublisherNestedInput
    publishedTasks?: TaskListUpdateManyWithoutPublisherNestedInput
    receivedTasks?: TaskListUpdateManyWithoutReceiverNestedInput
    publishedWhispers?: WhisperListUpdateManyWithoutPublisherNestedInput
    receivedWhispers?: WhisperListUpdateManyWithoutReceiverNestedInput
  }

  export type UserInfoUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    describeBySelf?: NullableStringFieldUpdateOperationsInput | string | null
    registrationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lover?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    favourites?: FavouriteListUncheckedUpdateManyWithoutUserNestedInput
    publishedGifts?: GiftListUncheckedUpdateManyWithoutPublisherNestedInput
    publishedTasks?: TaskListUncheckedUpdateManyWithoutPublisherNestedInput
    receivedTasks?: TaskListUncheckedUpdateManyWithoutReceiverNestedInput
    publishedWhispers?: WhisperListUncheckedUpdateManyWithoutPublisherNestedInput
    receivedWhispers?: WhisperListUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserInfoCreateManyInput = {
    userId?: number
    userEmail: string
    username: string
    password: string
    avatar?: string | null
    describeBySelf?: string | null
    registrationTime?: Date | string
    lover: string
    score?: number
  }

  export type UserInfoUpdateManyMutationInput = {
    userEmail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    describeBySelf?: NullableStringFieldUpdateOperationsInput | string | null
    registrationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lover?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type UserInfoUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    describeBySelf?: NullableStringFieldUpdateOperationsInput | string | null
    registrationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lover?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type TaskListCreateInput = {
    taskName: string
    taskDesc?: string | null
    taskImage?: string | null
    taskScore?: number
    taskStatus?: string
    creationTime?: Date | string
    completionTime?: Date | string | null
    isApprove?: boolean
    publisher: UserInfoCreateNestedOneWithoutPublishedTasksInput
    receiver?: UserInfoCreateNestedOneWithoutReceivedTasksInput
  }

  export type TaskListUncheckedCreateInput = {
    taskId?: number
    publisherEmail: string
    receiverEmail?: string | null
    taskName: string
    taskDesc?: string | null
    taskImage?: string | null
    taskScore?: number
    taskStatus?: string
    creationTime?: Date | string
    completionTime?: Date | string | null
    isApprove?: boolean
  }

  export type TaskListUpdateInput = {
    taskName?: StringFieldUpdateOperationsInput | string
    taskDesc?: NullableStringFieldUpdateOperationsInput | string | null
    taskImage?: NullableStringFieldUpdateOperationsInput | string | null
    taskScore?: IntFieldUpdateOperationsInput | number
    taskStatus?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    completionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isApprove?: BoolFieldUpdateOperationsInput | boolean
    publisher?: UserInfoUpdateOneRequiredWithoutPublishedTasksNestedInput
    receiver?: UserInfoUpdateOneWithoutReceivedTasksNestedInput
  }

  export type TaskListUncheckedUpdateInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    publisherEmail?: StringFieldUpdateOperationsInput | string
    receiverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    taskName?: StringFieldUpdateOperationsInput | string
    taskDesc?: NullableStringFieldUpdateOperationsInput | string | null
    taskImage?: NullableStringFieldUpdateOperationsInput | string | null
    taskScore?: IntFieldUpdateOperationsInput | number
    taskStatus?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    completionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isApprove?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskListCreateManyInput = {
    taskId?: number
    publisherEmail: string
    receiverEmail?: string | null
    taskName: string
    taskDesc?: string | null
    taskImage?: string | null
    taskScore?: number
    taskStatus?: string
    creationTime?: Date | string
    completionTime?: Date | string | null
    isApprove?: boolean
  }

  export type TaskListUpdateManyMutationInput = {
    taskName?: StringFieldUpdateOperationsInput | string
    taskDesc?: NullableStringFieldUpdateOperationsInput | string | null
    taskImage?: NullableStringFieldUpdateOperationsInput | string | null
    taskScore?: IntFieldUpdateOperationsInput | number
    taskStatus?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    completionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isApprove?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskListUncheckedUpdateManyInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    publisherEmail?: StringFieldUpdateOperationsInput | string
    receiverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    taskName?: StringFieldUpdateOperationsInput | string
    taskDesc?: NullableStringFieldUpdateOperationsInput | string | null
    taskImage?: NullableStringFieldUpdateOperationsInput | string | null
    taskScore?: IntFieldUpdateOperationsInput | number
    taskStatus?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    completionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isApprove?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GiftListCreateInput = {
    giftImg?: string | null
    giftName: string
    giftDetail?: string | null
    needScore?: number
    remained?: number
    isShow?: boolean
    creationTime?: Date | string
    publisher: UserInfoCreateNestedOneWithoutPublishedGiftsInput
  }

  export type GiftListUncheckedCreateInput = {
    giftId?: number
    publisherEmail: string
    giftImg?: string | null
    giftName: string
    giftDetail?: string | null
    needScore?: number
    remained?: number
    isShow?: boolean
    creationTime?: Date | string
  }

  export type GiftListUpdateInput = {
    giftImg?: NullableStringFieldUpdateOperationsInput | string | null
    giftName?: StringFieldUpdateOperationsInput | string
    giftDetail?: NullableStringFieldUpdateOperationsInput | string | null
    needScore?: IntFieldUpdateOperationsInput | number
    remained?: IntFieldUpdateOperationsInput | number
    isShow?: BoolFieldUpdateOperationsInput | boolean
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    publisher?: UserInfoUpdateOneRequiredWithoutPublishedGiftsNestedInput
  }

  export type GiftListUncheckedUpdateInput = {
    giftId?: IntFieldUpdateOperationsInput | number
    publisherEmail?: StringFieldUpdateOperationsInput | string
    giftImg?: NullableStringFieldUpdateOperationsInput | string | null
    giftName?: StringFieldUpdateOperationsInput | string
    giftDetail?: NullableStringFieldUpdateOperationsInput | string | null
    needScore?: IntFieldUpdateOperationsInput | number
    remained?: IntFieldUpdateOperationsInput | number
    isShow?: BoolFieldUpdateOperationsInput | boolean
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftListCreateManyInput = {
    giftId?: number
    publisherEmail: string
    giftImg?: string | null
    giftName: string
    giftDetail?: string | null
    needScore?: number
    remained?: number
    isShow?: boolean
    creationTime?: Date | string
  }

  export type GiftListUpdateManyMutationInput = {
    giftImg?: NullableStringFieldUpdateOperationsInput | string | null
    giftName?: StringFieldUpdateOperationsInput | string
    giftDetail?: NullableStringFieldUpdateOperationsInput | string | null
    needScore?: IntFieldUpdateOperationsInput | number
    remained?: IntFieldUpdateOperationsInput | number
    isShow?: BoolFieldUpdateOperationsInput | boolean
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftListUncheckedUpdateManyInput = {
    giftId?: IntFieldUpdateOperationsInput | number
    publisherEmail?: StringFieldUpdateOperationsInput | string
    giftImg?: NullableStringFieldUpdateOperationsInput | string | null
    giftName?: StringFieldUpdateOperationsInput | string
    giftDetail?: NullableStringFieldUpdateOperationsInput | string | null
    needScore?: IntFieldUpdateOperationsInput | number
    remained?: IntFieldUpdateOperationsInput | number
    isShow?: BoolFieldUpdateOperationsInput | boolean
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhisperListCreateInput = {
    title?: string | null
    content: string
    creationTime?: Date | string
    isRead?: boolean
    publisher: UserInfoCreateNestedOneWithoutPublishedWhispersInput
    receiver?: UserInfoCreateNestedOneWithoutReceivedWhispersInput
  }

  export type WhisperListUncheckedCreateInput = {
    whisperId?: number
    publisherEmail: string
    toUserEmail?: string | null
    title?: string | null
    content: string
    creationTime?: Date | string
    isRead?: boolean
  }

  export type WhisperListUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    publisher?: UserInfoUpdateOneRequiredWithoutPublishedWhispersNestedInput
    receiver?: UserInfoUpdateOneWithoutReceivedWhispersNestedInput
  }

  export type WhisperListUncheckedUpdateInput = {
    whisperId?: IntFieldUpdateOperationsInput | number
    publisherEmail?: StringFieldUpdateOperationsInput | string
    toUserEmail?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WhisperListCreateManyInput = {
    whisperId?: number
    publisherEmail: string
    toUserEmail?: string | null
    title?: string | null
    content: string
    creationTime?: Date | string
    isRead?: boolean
  }

  export type WhisperListUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WhisperListUncheckedUpdateManyInput = {
    whisperId?: IntFieldUpdateOperationsInput | number
    publisherEmail?: StringFieldUpdateOperationsInput | string
    toUserEmail?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FavouriteListCreateInput = {
    collectionId: string
    collectionType: string
    creationTime?: Date | string
    user: UserInfoCreateNestedOneWithoutFavouritesInput
  }

  export type FavouriteListUncheckedCreateInput = {
    favId?: number
    userEmail: string
    collectionId: string
    collectionType: string
    creationTime?: Date | string
  }

  export type FavouriteListUpdateInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    collectionType?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserInfoUpdateOneRequiredWithoutFavouritesNestedInput
  }

  export type FavouriteListUncheckedUpdateInput = {
    favId?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    collectionType?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavouriteListCreateManyInput = {
    favId?: number
    userEmail: string
    collectionId: string
    collectionType: string
    creationTime?: Date | string
  }

  export type FavouriteListUpdateManyMutationInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    collectionType?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavouriteListUncheckedUpdateManyInput = {
    favId?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    collectionType?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigCreateInput = {
    configKey: string
    configValue: string
    configType: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userEmail: string
  }

  export type SystemConfigUncheckedCreateInput = {
    id?: number
    configKey: string
    configValue: string
    configType: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userEmail: string
  }

  export type SystemConfigUpdateInput = {
    configKey?: StringFieldUpdateOperationsInput | string
    configValue?: StringFieldUpdateOperationsInput | string
    configType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userEmail?: StringFieldUpdateOperationsInput | string
  }

  export type SystemConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    configKey?: StringFieldUpdateOperationsInput | string
    configValue?: StringFieldUpdateOperationsInput | string
    configType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userEmail?: StringFieldUpdateOperationsInput | string
  }

  export type SystemConfigCreateManyInput = {
    id?: number
    configKey: string
    configValue: string
    configType: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userEmail: string
  }

  export type SystemConfigUpdateManyMutationInput = {
    configKey?: StringFieldUpdateOperationsInput | string
    configValue?: StringFieldUpdateOperationsInput | string
    configType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userEmail?: StringFieldUpdateOperationsInput | string
  }

  export type SystemConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    configKey?: StringFieldUpdateOperationsInput | string
    configValue?: StringFieldUpdateOperationsInput | string
    configType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userEmail?: StringFieldUpdateOperationsInput | string
  }

  export type ImageBedConfigCreateInput = {
    bedName: string
    bedType: string
    apiUrl: string
    apiKey?: string | null
    authHeader?: string | null
    isActive?: boolean
    isDefault?: boolean
    priority?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userEmail: string
  }

  export type ImageBedConfigUncheckedCreateInput = {
    id?: number
    bedName: string
    bedType: string
    apiUrl: string
    apiKey?: string | null
    authHeader?: string | null
    isActive?: boolean
    isDefault?: boolean
    priority?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userEmail: string
  }

  export type ImageBedConfigUpdateInput = {
    bedName?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
    apiUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    authHeader?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userEmail?: StringFieldUpdateOperationsInput | string
  }

  export type ImageBedConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bedName?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
    apiUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    authHeader?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userEmail?: StringFieldUpdateOperationsInput | string
  }

  export type ImageBedConfigCreateManyInput = {
    id?: number
    bedName: string
    bedType: string
    apiUrl: string
    apiKey?: string | null
    authHeader?: string | null
    isActive?: boolean
    isDefault?: boolean
    priority?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userEmail: string
  }

  export type ImageBedConfigUpdateManyMutationInput = {
    bedName?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
    apiUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    authHeader?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userEmail?: StringFieldUpdateOperationsInput | string
  }

  export type ImageBedConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bedName?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
    apiUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    authHeader?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userEmail?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationConfigCreateInput = {
    notifyType: string
    notifyName: string
    webhookUrl?: string | null
    apiKey?: string | null
    isActive?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userEmail: string
  }

  export type NotificationConfigUncheckedCreateInput = {
    id?: number
    notifyType: string
    notifyName: string
    webhookUrl?: string | null
    apiKey?: string | null
    isActive?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userEmail: string
  }

  export type NotificationConfigUpdateInput = {
    notifyType?: StringFieldUpdateOperationsInput | string
    notifyName?: StringFieldUpdateOperationsInput | string
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userEmail?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    notifyType?: StringFieldUpdateOperationsInput | string
    notifyName?: StringFieldUpdateOperationsInput | string
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userEmail?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationConfigCreateManyInput = {
    id?: number
    notifyType: string
    notifyName: string
    webhookUrl?: string | null
    apiKey?: string | null
    isActive?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userEmail: string
  }

  export type NotificationConfigUpdateManyMutationInput = {
    notifyType?: StringFieldUpdateOperationsInput | string
    notifyName?: StringFieldUpdateOperationsInput | string
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userEmail?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    notifyType?: StringFieldUpdateOperationsInput | string
    notifyName?: StringFieldUpdateOperationsInput | string
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userEmail?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FavouriteListListRelationFilter = {
    every?: FavouriteListWhereInput
    some?: FavouriteListWhereInput
    none?: FavouriteListWhereInput
  }

  export type GiftListListRelationFilter = {
    every?: GiftListWhereInput
    some?: GiftListWhereInput
    none?: GiftListWhereInput
  }

  export type TaskListListRelationFilter = {
    every?: TaskListWhereInput
    some?: TaskListWhereInput
    none?: TaskListWhereInput
  }

  export type WhisperListListRelationFilter = {
    every?: WhisperListWhereInput
    some?: WhisperListWhereInput
    none?: WhisperListWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FavouriteListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GiftListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhisperListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserInfoCountOrderByAggregateInput = {
    userId?: SortOrder
    userEmail?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    describeBySelf?: SortOrder
    registrationTime?: SortOrder
    lover?: SortOrder
    score?: SortOrder
  }

  export type UserInfoAvgOrderByAggregateInput = {
    userId?: SortOrder
    score?: SortOrder
  }

  export type UserInfoMaxOrderByAggregateInput = {
    userId?: SortOrder
    userEmail?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    describeBySelf?: SortOrder
    registrationTime?: SortOrder
    lover?: SortOrder
    score?: SortOrder
  }

  export type UserInfoMinOrderByAggregateInput = {
    userId?: SortOrder
    userEmail?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    describeBySelf?: SortOrder
    registrationTime?: SortOrder
    lover?: SortOrder
    score?: SortOrder
  }

  export type UserInfoSumOrderByAggregateInput = {
    userId?: SortOrder
    score?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserInfoScalarRelationFilter = {
    is?: UserInfoWhereInput
    isNot?: UserInfoWhereInput
  }

  export type UserInfoNullableScalarRelationFilter = {
    is?: UserInfoWhereInput | null
    isNot?: UserInfoWhereInput | null
  }

  export type TaskListCountOrderByAggregateInput = {
    taskId?: SortOrder
    publisherEmail?: SortOrder
    receiverEmail?: SortOrder
    taskName?: SortOrder
    taskDesc?: SortOrder
    taskImage?: SortOrder
    taskScore?: SortOrder
    taskStatus?: SortOrder
    creationTime?: SortOrder
    completionTime?: SortOrder
    isApprove?: SortOrder
  }

  export type TaskListAvgOrderByAggregateInput = {
    taskId?: SortOrder
    taskScore?: SortOrder
  }

  export type TaskListMaxOrderByAggregateInput = {
    taskId?: SortOrder
    publisherEmail?: SortOrder
    receiverEmail?: SortOrder
    taskName?: SortOrder
    taskDesc?: SortOrder
    taskImage?: SortOrder
    taskScore?: SortOrder
    taskStatus?: SortOrder
    creationTime?: SortOrder
    completionTime?: SortOrder
    isApprove?: SortOrder
  }

  export type TaskListMinOrderByAggregateInput = {
    taskId?: SortOrder
    publisherEmail?: SortOrder
    receiverEmail?: SortOrder
    taskName?: SortOrder
    taskDesc?: SortOrder
    taskImage?: SortOrder
    taskScore?: SortOrder
    taskStatus?: SortOrder
    creationTime?: SortOrder
    completionTime?: SortOrder
    isApprove?: SortOrder
  }

  export type TaskListSumOrderByAggregateInput = {
    taskId?: SortOrder
    taskScore?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GiftListCountOrderByAggregateInput = {
    giftId?: SortOrder
    publisherEmail?: SortOrder
    giftImg?: SortOrder
    giftName?: SortOrder
    giftDetail?: SortOrder
    needScore?: SortOrder
    remained?: SortOrder
    isShow?: SortOrder
    creationTime?: SortOrder
  }

  export type GiftListAvgOrderByAggregateInput = {
    giftId?: SortOrder
    needScore?: SortOrder
    remained?: SortOrder
  }

  export type GiftListMaxOrderByAggregateInput = {
    giftId?: SortOrder
    publisherEmail?: SortOrder
    giftImg?: SortOrder
    giftName?: SortOrder
    giftDetail?: SortOrder
    needScore?: SortOrder
    remained?: SortOrder
    isShow?: SortOrder
    creationTime?: SortOrder
  }

  export type GiftListMinOrderByAggregateInput = {
    giftId?: SortOrder
    publisherEmail?: SortOrder
    giftImg?: SortOrder
    giftName?: SortOrder
    giftDetail?: SortOrder
    needScore?: SortOrder
    remained?: SortOrder
    isShow?: SortOrder
    creationTime?: SortOrder
  }

  export type GiftListSumOrderByAggregateInput = {
    giftId?: SortOrder
    needScore?: SortOrder
    remained?: SortOrder
  }

  export type WhisperListCountOrderByAggregateInput = {
    whisperId?: SortOrder
    publisherEmail?: SortOrder
    toUserEmail?: SortOrder
    title?: SortOrder
    content?: SortOrder
    creationTime?: SortOrder
    isRead?: SortOrder
  }

  export type WhisperListAvgOrderByAggregateInput = {
    whisperId?: SortOrder
  }

  export type WhisperListMaxOrderByAggregateInput = {
    whisperId?: SortOrder
    publisherEmail?: SortOrder
    toUserEmail?: SortOrder
    title?: SortOrder
    content?: SortOrder
    creationTime?: SortOrder
    isRead?: SortOrder
  }

  export type WhisperListMinOrderByAggregateInput = {
    whisperId?: SortOrder
    publisherEmail?: SortOrder
    toUserEmail?: SortOrder
    title?: SortOrder
    content?: SortOrder
    creationTime?: SortOrder
    isRead?: SortOrder
  }

  export type WhisperListSumOrderByAggregateInput = {
    whisperId?: SortOrder
  }

  export type FavouriteListUserEmailCollectionIdCollectionTypeCompoundUniqueInput = {
    userEmail: string
    collectionId: string
    collectionType: string
  }

  export type FavouriteListCountOrderByAggregateInput = {
    favId?: SortOrder
    userEmail?: SortOrder
    collectionId?: SortOrder
    collectionType?: SortOrder
    creationTime?: SortOrder
  }

  export type FavouriteListAvgOrderByAggregateInput = {
    favId?: SortOrder
  }

  export type FavouriteListMaxOrderByAggregateInput = {
    favId?: SortOrder
    userEmail?: SortOrder
    collectionId?: SortOrder
    collectionType?: SortOrder
    creationTime?: SortOrder
  }

  export type FavouriteListMinOrderByAggregateInput = {
    favId?: SortOrder
    userEmail?: SortOrder
    collectionId?: SortOrder
    collectionType?: SortOrder
    creationTime?: SortOrder
  }

  export type FavouriteListSumOrderByAggregateInput = {
    favId?: SortOrder
  }

  export type SystemConfigConfigKeyUserEmailCompoundUniqueInput = {
    configKey: string
    userEmail: string
  }

  export type SystemConfigCountOrderByAggregateInput = {
    id?: SortOrder
    configKey?: SortOrder
    configValue?: SortOrder
    configType?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userEmail?: SortOrder
  }

  export type SystemConfigAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SystemConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    configKey?: SortOrder
    configValue?: SortOrder
    configType?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userEmail?: SortOrder
  }

  export type SystemConfigMinOrderByAggregateInput = {
    id?: SortOrder
    configKey?: SortOrder
    configValue?: SortOrder
    configType?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userEmail?: SortOrder
  }

  export type SystemConfigSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ImageBedConfigBedNameUserEmailCompoundUniqueInput = {
    bedName: string
    userEmail: string
  }

  export type ImageBedConfigCountOrderByAggregateInput = {
    id?: SortOrder
    bedName?: SortOrder
    bedType?: SortOrder
    apiUrl?: SortOrder
    apiKey?: SortOrder
    authHeader?: SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    priority?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userEmail?: SortOrder
  }

  export type ImageBedConfigAvgOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
  }

  export type ImageBedConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    bedName?: SortOrder
    bedType?: SortOrder
    apiUrl?: SortOrder
    apiKey?: SortOrder
    authHeader?: SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    priority?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userEmail?: SortOrder
  }

  export type ImageBedConfigMinOrderByAggregateInput = {
    id?: SortOrder
    bedName?: SortOrder
    bedType?: SortOrder
    apiUrl?: SortOrder
    apiKey?: SortOrder
    authHeader?: SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    priority?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userEmail?: SortOrder
  }

  export type ImageBedConfigSumOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
  }

  export type NotificationConfigNotifyTypeUserEmailCompoundUniqueInput = {
    notifyType: string
    userEmail: string
  }

  export type NotificationConfigCountOrderByAggregateInput = {
    id?: SortOrder
    notifyType?: SortOrder
    notifyName?: SortOrder
    webhookUrl?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userEmail?: SortOrder
  }

  export type NotificationConfigAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificationConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    notifyType?: SortOrder
    notifyName?: SortOrder
    webhookUrl?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userEmail?: SortOrder
  }

  export type NotificationConfigMinOrderByAggregateInput = {
    id?: SortOrder
    notifyType?: SortOrder
    notifyName?: SortOrder
    webhookUrl?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userEmail?: SortOrder
  }

  export type NotificationConfigSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FavouriteListCreateNestedManyWithoutUserInput = {
    create?: XOR<FavouriteListCreateWithoutUserInput, FavouriteListUncheckedCreateWithoutUserInput> | FavouriteListCreateWithoutUserInput[] | FavouriteListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouriteListCreateOrConnectWithoutUserInput | FavouriteListCreateOrConnectWithoutUserInput[]
    createMany?: FavouriteListCreateManyUserInputEnvelope
    connect?: FavouriteListWhereUniqueInput | FavouriteListWhereUniqueInput[]
  }

  export type GiftListCreateNestedManyWithoutPublisherInput = {
    create?: XOR<GiftListCreateWithoutPublisherInput, GiftListUncheckedCreateWithoutPublisherInput> | GiftListCreateWithoutPublisherInput[] | GiftListUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: GiftListCreateOrConnectWithoutPublisherInput | GiftListCreateOrConnectWithoutPublisherInput[]
    createMany?: GiftListCreateManyPublisherInputEnvelope
    connect?: GiftListWhereUniqueInput | GiftListWhereUniqueInput[]
  }

  export type TaskListCreateNestedManyWithoutPublisherInput = {
    create?: XOR<TaskListCreateWithoutPublisherInput, TaskListUncheckedCreateWithoutPublisherInput> | TaskListCreateWithoutPublisherInput[] | TaskListUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: TaskListCreateOrConnectWithoutPublisherInput | TaskListCreateOrConnectWithoutPublisherInput[]
    createMany?: TaskListCreateManyPublisherInputEnvelope
    connect?: TaskListWhereUniqueInput | TaskListWhereUniqueInput[]
  }

  export type TaskListCreateNestedManyWithoutReceiverInput = {
    create?: XOR<TaskListCreateWithoutReceiverInput, TaskListUncheckedCreateWithoutReceiverInput> | TaskListCreateWithoutReceiverInput[] | TaskListUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: TaskListCreateOrConnectWithoutReceiverInput | TaskListCreateOrConnectWithoutReceiverInput[]
    createMany?: TaskListCreateManyReceiverInputEnvelope
    connect?: TaskListWhereUniqueInput | TaskListWhereUniqueInput[]
  }

  export type WhisperListCreateNestedManyWithoutPublisherInput = {
    create?: XOR<WhisperListCreateWithoutPublisherInput, WhisperListUncheckedCreateWithoutPublisherInput> | WhisperListCreateWithoutPublisherInput[] | WhisperListUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: WhisperListCreateOrConnectWithoutPublisherInput | WhisperListCreateOrConnectWithoutPublisherInput[]
    createMany?: WhisperListCreateManyPublisherInputEnvelope
    connect?: WhisperListWhereUniqueInput | WhisperListWhereUniqueInput[]
  }

  export type WhisperListCreateNestedManyWithoutReceiverInput = {
    create?: XOR<WhisperListCreateWithoutReceiverInput, WhisperListUncheckedCreateWithoutReceiverInput> | WhisperListCreateWithoutReceiverInput[] | WhisperListUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: WhisperListCreateOrConnectWithoutReceiverInput | WhisperListCreateOrConnectWithoutReceiverInput[]
    createMany?: WhisperListCreateManyReceiverInputEnvelope
    connect?: WhisperListWhereUniqueInput | WhisperListWhereUniqueInput[]
  }

  export type FavouriteListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavouriteListCreateWithoutUserInput, FavouriteListUncheckedCreateWithoutUserInput> | FavouriteListCreateWithoutUserInput[] | FavouriteListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouriteListCreateOrConnectWithoutUserInput | FavouriteListCreateOrConnectWithoutUserInput[]
    createMany?: FavouriteListCreateManyUserInputEnvelope
    connect?: FavouriteListWhereUniqueInput | FavouriteListWhereUniqueInput[]
  }

  export type GiftListUncheckedCreateNestedManyWithoutPublisherInput = {
    create?: XOR<GiftListCreateWithoutPublisherInput, GiftListUncheckedCreateWithoutPublisherInput> | GiftListCreateWithoutPublisherInput[] | GiftListUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: GiftListCreateOrConnectWithoutPublisherInput | GiftListCreateOrConnectWithoutPublisherInput[]
    createMany?: GiftListCreateManyPublisherInputEnvelope
    connect?: GiftListWhereUniqueInput | GiftListWhereUniqueInput[]
  }

  export type TaskListUncheckedCreateNestedManyWithoutPublisherInput = {
    create?: XOR<TaskListCreateWithoutPublisherInput, TaskListUncheckedCreateWithoutPublisherInput> | TaskListCreateWithoutPublisherInput[] | TaskListUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: TaskListCreateOrConnectWithoutPublisherInput | TaskListCreateOrConnectWithoutPublisherInput[]
    createMany?: TaskListCreateManyPublisherInputEnvelope
    connect?: TaskListWhereUniqueInput | TaskListWhereUniqueInput[]
  }

  export type TaskListUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<TaskListCreateWithoutReceiverInput, TaskListUncheckedCreateWithoutReceiverInput> | TaskListCreateWithoutReceiverInput[] | TaskListUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: TaskListCreateOrConnectWithoutReceiverInput | TaskListCreateOrConnectWithoutReceiverInput[]
    createMany?: TaskListCreateManyReceiverInputEnvelope
    connect?: TaskListWhereUniqueInput | TaskListWhereUniqueInput[]
  }

  export type WhisperListUncheckedCreateNestedManyWithoutPublisherInput = {
    create?: XOR<WhisperListCreateWithoutPublisherInput, WhisperListUncheckedCreateWithoutPublisherInput> | WhisperListCreateWithoutPublisherInput[] | WhisperListUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: WhisperListCreateOrConnectWithoutPublisherInput | WhisperListCreateOrConnectWithoutPublisherInput[]
    createMany?: WhisperListCreateManyPublisherInputEnvelope
    connect?: WhisperListWhereUniqueInput | WhisperListWhereUniqueInput[]
  }

  export type WhisperListUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<WhisperListCreateWithoutReceiverInput, WhisperListUncheckedCreateWithoutReceiverInput> | WhisperListCreateWithoutReceiverInput[] | WhisperListUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: WhisperListCreateOrConnectWithoutReceiverInput | WhisperListCreateOrConnectWithoutReceiverInput[]
    createMany?: WhisperListCreateManyReceiverInputEnvelope
    connect?: WhisperListWhereUniqueInput | WhisperListWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FavouriteListUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavouriteListCreateWithoutUserInput, FavouriteListUncheckedCreateWithoutUserInput> | FavouriteListCreateWithoutUserInput[] | FavouriteListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouriteListCreateOrConnectWithoutUserInput | FavouriteListCreateOrConnectWithoutUserInput[]
    upsert?: FavouriteListUpsertWithWhereUniqueWithoutUserInput | FavouriteListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavouriteListCreateManyUserInputEnvelope
    set?: FavouriteListWhereUniqueInput | FavouriteListWhereUniqueInput[]
    disconnect?: FavouriteListWhereUniqueInput | FavouriteListWhereUniqueInput[]
    delete?: FavouriteListWhereUniqueInput | FavouriteListWhereUniqueInput[]
    connect?: FavouriteListWhereUniqueInput | FavouriteListWhereUniqueInput[]
    update?: FavouriteListUpdateWithWhereUniqueWithoutUserInput | FavouriteListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavouriteListUpdateManyWithWhereWithoutUserInput | FavouriteListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavouriteListScalarWhereInput | FavouriteListScalarWhereInput[]
  }

  export type GiftListUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<GiftListCreateWithoutPublisherInput, GiftListUncheckedCreateWithoutPublisherInput> | GiftListCreateWithoutPublisherInput[] | GiftListUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: GiftListCreateOrConnectWithoutPublisherInput | GiftListCreateOrConnectWithoutPublisherInput[]
    upsert?: GiftListUpsertWithWhereUniqueWithoutPublisherInput | GiftListUpsertWithWhereUniqueWithoutPublisherInput[]
    createMany?: GiftListCreateManyPublisherInputEnvelope
    set?: GiftListWhereUniqueInput | GiftListWhereUniqueInput[]
    disconnect?: GiftListWhereUniqueInput | GiftListWhereUniqueInput[]
    delete?: GiftListWhereUniqueInput | GiftListWhereUniqueInput[]
    connect?: GiftListWhereUniqueInput | GiftListWhereUniqueInput[]
    update?: GiftListUpdateWithWhereUniqueWithoutPublisherInput | GiftListUpdateWithWhereUniqueWithoutPublisherInput[]
    updateMany?: GiftListUpdateManyWithWhereWithoutPublisherInput | GiftListUpdateManyWithWhereWithoutPublisherInput[]
    deleteMany?: GiftListScalarWhereInput | GiftListScalarWhereInput[]
  }

  export type TaskListUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<TaskListCreateWithoutPublisherInput, TaskListUncheckedCreateWithoutPublisherInput> | TaskListCreateWithoutPublisherInput[] | TaskListUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: TaskListCreateOrConnectWithoutPublisherInput | TaskListCreateOrConnectWithoutPublisherInput[]
    upsert?: TaskListUpsertWithWhereUniqueWithoutPublisherInput | TaskListUpsertWithWhereUniqueWithoutPublisherInput[]
    createMany?: TaskListCreateManyPublisherInputEnvelope
    set?: TaskListWhereUniqueInput | TaskListWhereUniqueInput[]
    disconnect?: TaskListWhereUniqueInput | TaskListWhereUniqueInput[]
    delete?: TaskListWhereUniqueInput | TaskListWhereUniqueInput[]
    connect?: TaskListWhereUniqueInput | TaskListWhereUniqueInput[]
    update?: TaskListUpdateWithWhereUniqueWithoutPublisherInput | TaskListUpdateWithWhereUniqueWithoutPublisherInput[]
    updateMany?: TaskListUpdateManyWithWhereWithoutPublisherInput | TaskListUpdateManyWithWhereWithoutPublisherInput[]
    deleteMany?: TaskListScalarWhereInput | TaskListScalarWhereInput[]
  }

  export type TaskListUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<TaskListCreateWithoutReceiverInput, TaskListUncheckedCreateWithoutReceiverInput> | TaskListCreateWithoutReceiverInput[] | TaskListUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: TaskListCreateOrConnectWithoutReceiverInput | TaskListCreateOrConnectWithoutReceiverInput[]
    upsert?: TaskListUpsertWithWhereUniqueWithoutReceiverInput | TaskListUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: TaskListCreateManyReceiverInputEnvelope
    set?: TaskListWhereUniqueInput | TaskListWhereUniqueInput[]
    disconnect?: TaskListWhereUniqueInput | TaskListWhereUniqueInput[]
    delete?: TaskListWhereUniqueInput | TaskListWhereUniqueInput[]
    connect?: TaskListWhereUniqueInput | TaskListWhereUniqueInput[]
    update?: TaskListUpdateWithWhereUniqueWithoutReceiverInput | TaskListUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: TaskListUpdateManyWithWhereWithoutReceiverInput | TaskListUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: TaskListScalarWhereInput | TaskListScalarWhereInput[]
  }

  export type WhisperListUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<WhisperListCreateWithoutPublisherInput, WhisperListUncheckedCreateWithoutPublisherInput> | WhisperListCreateWithoutPublisherInput[] | WhisperListUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: WhisperListCreateOrConnectWithoutPublisherInput | WhisperListCreateOrConnectWithoutPublisherInput[]
    upsert?: WhisperListUpsertWithWhereUniqueWithoutPublisherInput | WhisperListUpsertWithWhereUniqueWithoutPublisherInput[]
    createMany?: WhisperListCreateManyPublisherInputEnvelope
    set?: WhisperListWhereUniqueInput | WhisperListWhereUniqueInput[]
    disconnect?: WhisperListWhereUniqueInput | WhisperListWhereUniqueInput[]
    delete?: WhisperListWhereUniqueInput | WhisperListWhereUniqueInput[]
    connect?: WhisperListWhereUniqueInput | WhisperListWhereUniqueInput[]
    update?: WhisperListUpdateWithWhereUniqueWithoutPublisherInput | WhisperListUpdateWithWhereUniqueWithoutPublisherInput[]
    updateMany?: WhisperListUpdateManyWithWhereWithoutPublisherInput | WhisperListUpdateManyWithWhereWithoutPublisherInput[]
    deleteMany?: WhisperListScalarWhereInput | WhisperListScalarWhereInput[]
  }

  export type WhisperListUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<WhisperListCreateWithoutReceiverInput, WhisperListUncheckedCreateWithoutReceiverInput> | WhisperListCreateWithoutReceiverInput[] | WhisperListUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: WhisperListCreateOrConnectWithoutReceiverInput | WhisperListCreateOrConnectWithoutReceiverInput[]
    upsert?: WhisperListUpsertWithWhereUniqueWithoutReceiverInput | WhisperListUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: WhisperListCreateManyReceiverInputEnvelope
    set?: WhisperListWhereUniqueInput | WhisperListWhereUniqueInput[]
    disconnect?: WhisperListWhereUniqueInput | WhisperListWhereUniqueInput[]
    delete?: WhisperListWhereUniqueInput | WhisperListWhereUniqueInput[]
    connect?: WhisperListWhereUniqueInput | WhisperListWhereUniqueInput[]
    update?: WhisperListUpdateWithWhereUniqueWithoutReceiverInput | WhisperListUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: WhisperListUpdateManyWithWhereWithoutReceiverInput | WhisperListUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: WhisperListScalarWhereInput | WhisperListScalarWhereInput[]
  }

  export type FavouriteListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavouriteListCreateWithoutUserInput, FavouriteListUncheckedCreateWithoutUserInput> | FavouriteListCreateWithoutUserInput[] | FavouriteListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouriteListCreateOrConnectWithoutUserInput | FavouriteListCreateOrConnectWithoutUserInput[]
    upsert?: FavouriteListUpsertWithWhereUniqueWithoutUserInput | FavouriteListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavouriteListCreateManyUserInputEnvelope
    set?: FavouriteListWhereUniqueInput | FavouriteListWhereUniqueInput[]
    disconnect?: FavouriteListWhereUniqueInput | FavouriteListWhereUniqueInput[]
    delete?: FavouriteListWhereUniqueInput | FavouriteListWhereUniqueInput[]
    connect?: FavouriteListWhereUniqueInput | FavouriteListWhereUniqueInput[]
    update?: FavouriteListUpdateWithWhereUniqueWithoutUserInput | FavouriteListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavouriteListUpdateManyWithWhereWithoutUserInput | FavouriteListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavouriteListScalarWhereInput | FavouriteListScalarWhereInput[]
  }

  export type GiftListUncheckedUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<GiftListCreateWithoutPublisherInput, GiftListUncheckedCreateWithoutPublisherInput> | GiftListCreateWithoutPublisherInput[] | GiftListUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: GiftListCreateOrConnectWithoutPublisherInput | GiftListCreateOrConnectWithoutPublisherInput[]
    upsert?: GiftListUpsertWithWhereUniqueWithoutPublisherInput | GiftListUpsertWithWhereUniqueWithoutPublisherInput[]
    createMany?: GiftListCreateManyPublisherInputEnvelope
    set?: GiftListWhereUniqueInput | GiftListWhereUniqueInput[]
    disconnect?: GiftListWhereUniqueInput | GiftListWhereUniqueInput[]
    delete?: GiftListWhereUniqueInput | GiftListWhereUniqueInput[]
    connect?: GiftListWhereUniqueInput | GiftListWhereUniqueInput[]
    update?: GiftListUpdateWithWhereUniqueWithoutPublisherInput | GiftListUpdateWithWhereUniqueWithoutPublisherInput[]
    updateMany?: GiftListUpdateManyWithWhereWithoutPublisherInput | GiftListUpdateManyWithWhereWithoutPublisherInput[]
    deleteMany?: GiftListScalarWhereInput | GiftListScalarWhereInput[]
  }

  export type TaskListUncheckedUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<TaskListCreateWithoutPublisherInput, TaskListUncheckedCreateWithoutPublisherInput> | TaskListCreateWithoutPublisherInput[] | TaskListUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: TaskListCreateOrConnectWithoutPublisherInput | TaskListCreateOrConnectWithoutPublisherInput[]
    upsert?: TaskListUpsertWithWhereUniqueWithoutPublisherInput | TaskListUpsertWithWhereUniqueWithoutPublisherInput[]
    createMany?: TaskListCreateManyPublisherInputEnvelope
    set?: TaskListWhereUniqueInput | TaskListWhereUniqueInput[]
    disconnect?: TaskListWhereUniqueInput | TaskListWhereUniqueInput[]
    delete?: TaskListWhereUniqueInput | TaskListWhereUniqueInput[]
    connect?: TaskListWhereUniqueInput | TaskListWhereUniqueInput[]
    update?: TaskListUpdateWithWhereUniqueWithoutPublisherInput | TaskListUpdateWithWhereUniqueWithoutPublisherInput[]
    updateMany?: TaskListUpdateManyWithWhereWithoutPublisherInput | TaskListUpdateManyWithWhereWithoutPublisherInput[]
    deleteMany?: TaskListScalarWhereInput | TaskListScalarWhereInput[]
  }

  export type TaskListUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<TaskListCreateWithoutReceiverInput, TaskListUncheckedCreateWithoutReceiverInput> | TaskListCreateWithoutReceiverInput[] | TaskListUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: TaskListCreateOrConnectWithoutReceiverInput | TaskListCreateOrConnectWithoutReceiverInput[]
    upsert?: TaskListUpsertWithWhereUniqueWithoutReceiverInput | TaskListUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: TaskListCreateManyReceiverInputEnvelope
    set?: TaskListWhereUniqueInput | TaskListWhereUniqueInput[]
    disconnect?: TaskListWhereUniqueInput | TaskListWhereUniqueInput[]
    delete?: TaskListWhereUniqueInput | TaskListWhereUniqueInput[]
    connect?: TaskListWhereUniqueInput | TaskListWhereUniqueInput[]
    update?: TaskListUpdateWithWhereUniqueWithoutReceiverInput | TaskListUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: TaskListUpdateManyWithWhereWithoutReceiverInput | TaskListUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: TaskListScalarWhereInput | TaskListScalarWhereInput[]
  }

  export type WhisperListUncheckedUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<WhisperListCreateWithoutPublisherInput, WhisperListUncheckedCreateWithoutPublisherInput> | WhisperListCreateWithoutPublisherInput[] | WhisperListUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: WhisperListCreateOrConnectWithoutPublisherInput | WhisperListCreateOrConnectWithoutPublisherInput[]
    upsert?: WhisperListUpsertWithWhereUniqueWithoutPublisherInput | WhisperListUpsertWithWhereUniqueWithoutPublisherInput[]
    createMany?: WhisperListCreateManyPublisherInputEnvelope
    set?: WhisperListWhereUniqueInput | WhisperListWhereUniqueInput[]
    disconnect?: WhisperListWhereUniqueInput | WhisperListWhereUniqueInput[]
    delete?: WhisperListWhereUniqueInput | WhisperListWhereUniqueInput[]
    connect?: WhisperListWhereUniqueInput | WhisperListWhereUniqueInput[]
    update?: WhisperListUpdateWithWhereUniqueWithoutPublisherInput | WhisperListUpdateWithWhereUniqueWithoutPublisherInput[]
    updateMany?: WhisperListUpdateManyWithWhereWithoutPublisherInput | WhisperListUpdateManyWithWhereWithoutPublisherInput[]
    deleteMany?: WhisperListScalarWhereInput | WhisperListScalarWhereInput[]
  }

  export type WhisperListUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<WhisperListCreateWithoutReceiverInput, WhisperListUncheckedCreateWithoutReceiverInput> | WhisperListCreateWithoutReceiverInput[] | WhisperListUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: WhisperListCreateOrConnectWithoutReceiverInput | WhisperListCreateOrConnectWithoutReceiverInput[]
    upsert?: WhisperListUpsertWithWhereUniqueWithoutReceiverInput | WhisperListUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: WhisperListCreateManyReceiverInputEnvelope
    set?: WhisperListWhereUniqueInput | WhisperListWhereUniqueInput[]
    disconnect?: WhisperListWhereUniqueInput | WhisperListWhereUniqueInput[]
    delete?: WhisperListWhereUniqueInput | WhisperListWhereUniqueInput[]
    connect?: WhisperListWhereUniqueInput | WhisperListWhereUniqueInput[]
    update?: WhisperListUpdateWithWhereUniqueWithoutReceiverInput | WhisperListUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: WhisperListUpdateManyWithWhereWithoutReceiverInput | WhisperListUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: WhisperListScalarWhereInput | WhisperListScalarWhereInput[]
  }

  export type UserInfoCreateNestedOneWithoutPublishedTasksInput = {
    create?: XOR<UserInfoCreateWithoutPublishedTasksInput, UserInfoUncheckedCreateWithoutPublishedTasksInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutPublishedTasksInput
    connect?: UserInfoWhereUniqueInput
  }

  export type UserInfoCreateNestedOneWithoutReceivedTasksInput = {
    create?: XOR<UserInfoCreateWithoutReceivedTasksInput, UserInfoUncheckedCreateWithoutReceivedTasksInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutReceivedTasksInput
    connect?: UserInfoWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserInfoUpdateOneRequiredWithoutPublishedTasksNestedInput = {
    create?: XOR<UserInfoCreateWithoutPublishedTasksInput, UserInfoUncheckedCreateWithoutPublishedTasksInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutPublishedTasksInput
    upsert?: UserInfoUpsertWithoutPublishedTasksInput
    connect?: UserInfoWhereUniqueInput
    update?: XOR<XOR<UserInfoUpdateToOneWithWhereWithoutPublishedTasksInput, UserInfoUpdateWithoutPublishedTasksInput>, UserInfoUncheckedUpdateWithoutPublishedTasksInput>
  }

  export type UserInfoUpdateOneWithoutReceivedTasksNestedInput = {
    create?: XOR<UserInfoCreateWithoutReceivedTasksInput, UserInfoUncheckedCreateWithoutReceivedTasksInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutReceivedTasksInput
    upsert?: UserInfoUpsertWithoutReceivedTasksInput
    disconnect?: UserInfoWhereInput | boolean
    delete?: UserInfoWhereInput | boolean
    connect?: UserInfoWhereUniqueInput
    update?: XOR<XOR<UserInfoUpdateToOneWithWhereWithoutReceivedTasksInput, UserInfoUpdateWithoutReceivedTasksInput>, UserInfoUncheckedUpdateWithoutReceivedTasksInput>
  }

  export type UserInfoCreateNestedOneWithoutPublishedGiftsInput = {
    create?: XOR<UserInfoCreateWithoutPublishedGiftsInput, UserInfoUncheckedCreateWithoutPublishedGiftsInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutPublishedGiftsInput
    connect?: UserInfoWhereUniqueInput
  }

  export type UserInfoUpdateOneRequiredWithoutPublishedGiftsNestedInput = {
    create?: XOR<UserInfoCreateWithoutPublishedGiftsInput, UserInfoUncheckedCreateWithoutPublishedGiftsInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutPublishedGiftsInput
    upsert?: UserInfoUpsertWithoutPublishedGiftsInput
    connect?: UserInfoWhereUniqueInput
    update?: XOR<XOR<UserInfoUpdateToOneWithWhereWithoutPublishedGiftsInput, UserInfoUpdateWithoutPublishedGiftsInput>, UserInfoUncheckedUpdateWithoutPublishedGiftsInput>
  }

  export type UserInfoCreateNestedOneWithoutPublishedWhispersInput = {
    create?: XOR<UserInfoCreateWithoutPublishedWhispersInput, UserInfoUncheckedCreateWithoutPublishedWhispersInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutPublishedWhispersInput
    connect?: UserInfoWhereUniqueInput
  }

  export type UserInfoCreateNestedOneWithoutReceivedWhispersInput = {
    create?: XOR<UserInfoCreateWithoutReceivedWhispersInput, UserInfoUncheckedCreateWithoutReceivedWhispersInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutReceivedWhispersInput
    connect?: UserInfoWhereUniqueInput
  }

  export type UserInfoUpdateOneRequiredWithoutPublishedWhispersNestedInput = {
    create?: XOR<UserInfoCreateWithoutPublishedWhispersInput, UserInfoUncheckedCreateWithoutPublishedWhispersInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutPublishedWhispersInput
    upsert?: UserInfoUpsertWithoutPublishedWhispersInput
    connect?: UserInfoWhereUniqueInput
    update?: XOR<XOR<UserInfoUpdateToOneWithWhereWithoutPublishedWhispersInput, UserInfoUpdateWithoutPublishedWhispersInput>, UserInfoUncheckedUpdateWithoutPublishedWhispersInput>
  }

  export type UserInfoUpdateOneWithoutReceivedWhispersNestedInput = {
    create?: XOR<UserInfoCreateWithoutReceivedWhispersInput, UserInfoUncheckedCreateWithoutReceivedWhispersInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutReceivedWhispersInput
    upsert?: UserInfoUpsertWithoutReceivedWhispersInput
    disconnect?: UserInfoWhereInput | boolean
    delete?: UserInfoWhereInput | boolean
    connect?: UserInfoWhereUniqueInput
    update?: XOR<XOR<UserInfoUpdateToOneWithWhereWithoutReceivedWhispersInput, UserInfoUpdateWithoutReceivedWhispersInput>, UserInfoUncheckedUpdateWithoutReceivedWhispersInput>
  }

  export type UserInfoCreateNestedOneWithoutFavouritesInput = {
    create?: XOR<UserInfoCreateWithoutFavouritesInput, UserInfoUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutFavouritesInput
    connect?: UserInfoWhereUniqueInput
  }

  export type UserInfoUpdateOneRequiredWithoutFavouritesNestedInput = {
    create?: XOR<UserInfoCreateWithoutFavouritesInput, UserInfoUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutFavouritesInput
    upsert?: UserInfoUpsertWithoutFavouritesInput
    connect?: UserInfoWhereUniqueInput
    update?: XOR<XOR<UserInfoUpdateToOneWithWhereWithoutFavouritesInput, UserInfoUpdateWithoutFavouritesInput>, UserInfoUncheckedUpdateWithoutFavouritesInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FavouriteListCreateWithoutUserInput = {
    collectionId: string
    collectionType: string
    creationTime?: Date | string
  }

  export type FavouriteListUncheckedCreateWithoutUserInput = {
    favId?: number
    collectionId: string
    collectionType: string
    creationTime?: Date | string
  }

  export type FavouriteListCreateOrConnectWithoutUserInput = {
    where: FavouriteListWhereUniqueInput
    create: XOR<FavouriteListCreateWithoutUserInput, FavouriteListUncheckedCreateWithoutUserInput>
  }

  export type FavouriteListCreateManyUserInputEnvelope = {
    data: FavouriteListCreateManyUserInput | FavouriteListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GiftListCreateWithoutPublisherInput = {
    giftImg?: string | null
    giftName: string
    giftDetail?: string | null
    needScore?: number
    remained?: number
    isShow?: boolean
    creationTime?: Date | string
  }

  export type GiftListUncheckedCreateWithoutPublisherInput = {
    giftId?: number
    giftImg?: string | null
    giftName: string
    giftDetail?: string | null
    needScore?: number
    remained?: number
    isShow?: boolean
    creationTime?: Date | string
  }

  export type GiftListCreateOrConnectWithoutPublisherInput = {
    where: GiftListWhereUniqueInput
    create: XOR<GiftListCreateWithoutPublisherInput, GiftListUncheckedCreateWithoutPublisherInput>
  }

  export type GiftListCreateManyPublisherInputEnvelope = {
    data: GiftListCreateManyPublisherInput | GiftListCreateManyPublisherInput[]
    skipDuplicates?: boolean
  }

  export type TaskListCreateWithoutPublisherInput = {
    taskName: string
    taskDesc?: string | null
    taskImage?: string | null
    taskScore?: number
    taskStatus?: string
    creationTime?: Date | string
    completionTime?: Date | string | null
    isApprove?: boolean
    receiver?: UserInfoCreateNestedOneWithoutReceivedTasksInput
  }

  export type TaskListUncheckedCreateWithoutPublisherInput = {
    taskId?: number
    receiverEmail?: string | null
    taskName: string
    taskDesc?: string | null
    taskImage?: string | null
    taskScore?: number
    taskStatus?: string
    creationTime?: Date | string
    completionTime?: Date | string | null
    isApprove?: boolean
  }

  export type TaskListCreateOrConnectWithoutPublisherInput = {
    where: TaskListWhereUniqueInput
    create: XOR<TaskListCreateWithoutPublisherInput, TaskListUncheckedCreateWithoutPublisherInput>
  }

  export type TaskListCreateManyPublisherInputEnvelope = {
    data: TaskListCreateManyPublisherInput | TaskListCreateManyPublisherInput[]
    skipDuplicates?: boolean
  }

  export type TaskListCreateWithoutReceiverInput = {
    taskName: string
    taskDesc?: string | null
    taskImage?: string | null
    taskScore?: number
    taskStatus?: string
    creationTime?: Date | string
    completionTime?: Date | string | null
    isApprove?: boolean
    publisher: UserInfoCreateNestedOneWithoutPublishedTasksInput
  }

  export type TaskListUncheckedCreateWithoutReceiverInput = {
    taskId?: number
    publisherEmail: string
    taskName: string
    taskDesc?: string | null
    taskImage?: string | null
    taskScore?: number
    taskStatus?: string
    creationTime?: Date | string
    completionTime?: Date | string | null
    isApprove?: boolean
  }

  export type TaskListCreateOrConnectWithoutReceiverInput = {
    where: TaskListWhereUniqueInput
    create: XOR<TaskListCreateWithoutReceiverInput, TaskListUncheckedCreateWithoutReceiverInput>
  }

  export type TaskListCreateManyReceiverInputEnvelope = {
    data: TaskListCreateManyReceiverInput | TaskListCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type WhisperListCreateWithoutPublisherInput = {
    title?: string | null
    content: string
    creationTime?: Date | string
    isRead?: boolean
    receiver?: UserInfoCreateNestedOneWithoutReceivedWhispersInput
  }

  export type WhisperListUncheckedCreateWithoutPublisherInput = {
    whisperId?: number
    toUserEmail?: string | null
    title?: string | null
    content: string
    creationTime?: Date | string
    isRead?: boolean
  }

  export type WhisperListCreateOrConnectWithoutPublisherInput = {
    where: WhisperListWhereUniqueInput
    create: XOR<WhisperListCreateWithoutPublisherInput, WhisperListUncheckedCreateWithoutPublisherInput>
  }

  export type WhisperListCreateManyPublisherInputEnvelope = {
    data: WhisperListCreateManyPublisherInput | WhisperListCreateManyPublisherInput[]
    skipDuplicates?: boolean
  }

  export type WhisperListCreateWithoutReceiverInput = {
    title?: string | null
    content: string
    creationTime?: Date | string
    isRead?: boolean
    publisher: UserInfoCreateNestedOneWithoutPublishedWhispersInput
  }

  export type WhisperListUncheckedCreateWithoutReceiverInput = {
    whisperId?: number
    publisherEmail: string
    title?: string | null
    content: string
    creationTime?: Date | string
    isRead?: boolean
  }

  export type WhisperListCreateOrConnectWithoutReceiverInput = {
    where: WhisperListWhereUniqueInput
    create: XOR<WhisperListCreateWithoutReceiverInput, WhisperListUncheckedCreateWithoutReceiverInput>
  }

  export type WhisperListCreateManyReceiverInputEnvelope = {
    data: WhisperListCreateManyReceiverInput | WhisperListCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type FavouriteListUpsertWithWhereUniqueWithoutUserInput = {
    where: FavouriteListWhereUniqueInput
    update: XOR<FavouriteListUpdateWithoutUserInput, FavouriteListUncheckedUpdateWithoutUserInput>
    create: XOR<FavouriteListCreateWithoutUserInput, FavouriteListUncheckedCreateWithoutUserInput>
  }

  export type FavouriteListUpdateWithWhereUniqueWithoutUserInput = {
    where: FavouriteListWhereUniqueInput
    data: XOR<FavouriteListUpdateWithoutUserInput, FavouriteListUncheckedUpdateWithoutUserInput>
  }

  export type FavouriteListUpdateManyWithWhereWithoutUserInput = {
    where: FavouriteListScalarWhereInput
    data: XOR<FavouriteListUpdateManyMutationInput, FavouriteListUncheckedUpdateManyWithoutUserInput>
  }

  export type FavouriteListScalarWhereInput = {
    AND?: FavouriteListScalarWhereInput | FavouriteListScalarWhereInput[]
    OR?: FavouriteListScalarWhereInput[]
    NOT?: FavouriteListScalarWhereInput | FavouriteListScalarWhereInput[]
    favId?: IntFilter<"FavouriteList"> | number
    userEmail?: StringFilter<"FavouriteList"> | string
    collectionId?: StringFilter<"FavouriteList"> | string
    collectionType?: StringFilter<"FavouriteList"> | string
    creationTime?: DateTimeFilter<"FavouriteList"> | Date | string
  }

  export type GiftListUpsertWithWhereUniqueWithoutPublisherInput = {
    where: GiftListWhereUniqueInput
    update: XOR<GiftListUpdateWithoutPublisherInput, GiftListUncheckedUpdateWithoutPublisherInput>
    create: XOR<GiftListCreateWithoutPublisherInput, GiftListUncheckedCreateWithoutPublisherInput>
  }

  export type GiftListUpdateWithWhereUniqueWithoutPublisherInput = {
    where: GiftListWhereUniqueInput
    data: XOR<GiftListUpdateWithoutPublisherInput, GiftListUncheckedUpdateWithoutPublisherInput>
  }

  export type GiftListUpdateManyWithWhereWithoutPublisherInput = {
    where: GiftListScalarWhereInput
    data: XOR<GiftListUpdateManyMutationInput, GiftListUncheckedUpdateManyWithoutPublisherInput>
  }

  export type GiftListScalarWhereInput = {
    AND?: GiftListScalarWhereInput | GiftListScalarWhereInput[]
    OR?: GiftListScalarWhereInput[]
    NOT?: GiftListScalarWhereInput | GiftListScalarWhereInput[]
    giftId?: IntFilter<"GiftList"> | number
    publisherEmail?: StringFilter<"GiftList"> | string
    giftImg?: StringNullableFilter<"GiftList"> | string | null
    giftName?: StringFilter<"GiftList"> | string
    giftDetail?: StringNullableFilter<"GiftList"> | string | null
    needScore?: IntFilter<"GiftList"> | number
    remained?: IntFilter<"GiftList"> | number
    isShow?: BoolFilter<"GiftList"> | boolean
    creationTime?: DateTimeFilter<"GiftList"> | Date | string
  }

  export type TaskListUpsertWithWhereUniqueWithoutPublisherInput = {
    where: TaskListWhereUniqueInput
    update: XOR<TaskListUpdateWithoutPublisherInput, TaskListUncheckedUpdateWithoutPublisherInput>
    create: XOR<TaskListCreateWithoutPublisherInput, TaskListUncheckedCreateWithoutPublisherInput>
  }

  export type TaskListUpdateWithWhereUniqueWithoutPublisherInput = {
    where: TaskListWhereUniqueInput
    data: XOR<TaskListUpdateWithoutPublisherInput, TaskListUncheckedUpdateWithoutPublisherInput>
  }

  export type TaskListUpdateManyWithWhereWithoutPublisherInput = {
    where: TaskListScalarWhereInput
    data: XOR<TaskListUpdateManyMutationInput, TaskListUncheckedUpdateManyWithoutPublisherInput>
  }

  export type TaskListScalarWhereInput = {
    AND?: TaskListScalarWhereInput | TaskListScalarWhereInput[]
    OR?: TaskListScalarWhereInput[]
    NOT?: TaskListScalarWhereInput | TaskListScalarWhereInput[]
    taskId?: IntFilter<"TaskList"> | number
    publisherEmail?: StringFilter<"TaskList"> | string
    receiverEmail?: StringNullableFilter<"TaskList"> | string | null
    taskName?: StringFilter<"TaskList"> | string
    taskDesc?: StringNullableFilter<"TaskList"> | string | null
    taskImage?: StringNullableFilter<"TaskList"> | string | null
    taskScore?: IntFilter<"TaskList"> | number
    taskStatus?: StringFilter<"TaskList"> | string
    creationTime?: DateTimeFilter<"TaskList"> | Date | string
    completionTime?: DateTimeNullableFilter<"TaskList"> | Date | string | null
    isApprove?: BoolFilter<"TaskList"> | boolean
  }

  export type TaskListUpsertWithWhereUniqueWithoutReceiverInput = {
    where: TaskListWhereUniqueInput
    update: XOR<TaskListUpdateWithoutReceiverInput, TaskListUncheckedUpdateWithoutReceiverInput>
    create: XOR<TaskListCreateWithoutReceiverInput, TaskListUncheckedCreateWithoutReceiverInput>
  }

  export type TaskListUpdateWithWhereUniqueWithoutReceiverInput = {
    where: TaskListWhereUniqueInput
    data: XOR<TaskListUpdateWithoutReceiverInput, TaskListUncheckedUpdateWithoutReceiverInput>
  }

  export type TaskListUpdateManyWithWhereWithoutReceiverInput = {
    where: TaskListScalarWhereInput
    data: XOR<TaskListUpdateManyMutationInput, TaskListUncheckedUpdateManyWithoutReceiverInput>
  }

  export type WhisperListUpsertWithWhereUniqueWithoutPublisherInput = {
    where: WhisperListWhereUniqueInput
    update: XOR<WhisperListUpdateWithoutPublisherInput, WhisperListUncheckedUpdateWithoutPublisherInput>
    create: XOR<WhisperListCreateWithoutPublisherInput, WhisperListUncheckedCreateWithoutPublisherInput>
  }

  export type WhisperListUpdateWithWhereUniqueWithoutPublisherInput = {
    where: WhisperListWhereUniqueInput
    data: XOR<WhisperListUpdateWithoutPublisherInput, WhisperListUncheckedUpdateWithoutPublisherInput>
  }

  export type WhisperListUpdateManyWithWhereWithoutPublisherInput = {
    where: WhisperListScalarWhereInput
    data: XOR<WhisperListUpdateManyMutationInput, WhisperListUncheckedUpdateManyWithoutPublisherInput>
  }

  export type WhisperListScalarWhereInput = {
    AND?: WhisperListScalarWhereInput | WhisperListScalarWhereInput[]
    OR?: WhisperListScalarWhereInput[]
    NOT?: WhisperListScalarWhereInput | WhisperListScalarWhereInput[]
    whisperId?: IntFilter<"WhisperList"> | number
    publisherEmail?: StringFilter<"WhisperList"> | string
    toUserEmail?: StringNullableFilter<"WhisperList"> | string | null
    title?: StringNullableFilter<"WhisperList"> | string | null
    content?: StringFilter<"WhisperList"> | string
    creationTime?: DateTimeFilter<"WhisperList"> | Date | string
    isRead?: BoolFilter<"WhisperList"> | boolean
  }

  export type WhisperListUpsertWithWhereUniqueWithoutReceiverInput = {
    where: WhisperListWhereUniqueInput
    update: XOR<WhisperListUpdateWithoutReceiverInput, WhisperListUncheckedUpdateWithoutReceiverInput>
    create: XOR<WhisperListCreateWithoutReceiverInput, WhisperListUncheckedCreateWithoutReceiverInput>
  }

  export type WhisperListUpdateWithWhereUniqueWithoutReceiverInput = {
    where: WhisperListWhereUniqueInput
    data: XOR<WhisperListUpdateWithoutReceiverInput, WhisperListUncheckedUpdateWithoutReceiverInput>
  }

  export type WhisperListUpdateManyWithWhereWithoutReceiverInput = {
    where: WhisperListScalarWhereInput
    data: XOR<WhisperListUpdateManyMutationInput, WhisperListUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserInfoCreateWithoutPublishedTasksInput = {
    userEmail: string
    username: string
    password: string
    avatar?: string | null
    describeBySelf?: string | null
    registrationTime?: Date | string
    lover: string
    score?: number
    favourites?: FavouriteListCreateNestedManyWithoutUserInput
    publishedGifts?: GiftListCreateNestedManyWithoutPublisherInput
    receivedTasks?: TaskListCreateNestedManyWithoutReceiverInput
    publishedWhispers?: WhisperListCreateNestedManyWithoutPublisherInput
    receivedWhispers?: WhisperListCreateNestedManyWithoutReceiverInput
  }

  export type UserInfoUncheckedCreateWithoutPublishedTasksInput = {
    userId?: number
    userEmail: string
    username: string
    password: string
    avatar?: string | null
    describeBySelf?: string | null
    registrationTime?: Date | string
    lover: string
    score?: number
    favourites?: FavouriteListUncheckedCreateNestedManyWithoutUserInput
    publishedGifts?: GiftListUncheckedCreateNestedManyWithoutPublisherInput
    receivedTasks?: TaskListUncheckedCreateNestedManyWithoutReceiverInput
    publishedWhispers?: WhisperListUncheckedCreateNestedManyWithoutPublisherInput
    receivedWhispers?: WhisperListUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserInfoCreateOrConnectWithoutPublishedTasksInput = {
    where: UserInfoWhereUniqueInput
    create: XOR<UserInfoCreateWithoutPublishedTasksInput, UserInfoUncheckedCreateWithoutPublishedTasksInput>
  }

  export type UserInfoCreateWithoutReceivedTasksInput = {
    userEmail: string
    username: string
    password: string
    avatar?: string | null
    describeBySelf?: string | null
    registrationTime?: Date | string
    lover: string
    score?: number
    favourites?: FavouriteListCreateNestedManyWithoutUserInput
    publishedGifts?: GiftListCreateNestedManyWithoutPublisherInput
    publishedTasks?: TaskListCreateNestedManyWithoutPublisherInput
    publishedWhispers?: WhisperListCreateNestedManyWithoutPublisherInput
    receivedWhispers?: WhisperListCreateNestedManyWithoutReceiverInput
  }

  export type UserInfoUncheckedCreateWithoutReceivedTasksInput = {
    userId?: number
    userEmail: string
    username: string
    password: string
    avatar?: string | null
    describeBySelf?: string | null
    registrationTime?: Date | string
    lover: string
    score?: number
    favourites?: FavouriteListUncheckedCreateNestedManyWithoutUserInput
    publishedGifts?: GiftListUncheckedCreateNestedManyWithoutPublisherInput
    publishedTasks?: TaskListUncheckedCreateNestedManyWithoutPublisherInput
    publishedWhispers?: WhisperListUncheckedCreateNestedManyWithoutPublisherInput
    receivedWhispers?: WhisperListUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserInfoCreateOrConnectWithoutReceivedTasksInput = {
    where: UserInfoWhereUniqueInput
    create: XOR<UserInfoCreateWithoutReceivedTasksInput, UserInfoUncheckedCreateWithoutReceivedTasksInput>
  }

  export type UserInfoUpsertWithoutPublishedTasksInput = {
    update: XOR<UserInfoUpdateWithoutPublishedTasksInput, UserInfoUncheckedUpdateWithoutPublishedTasksInput>
    create: XOR<UserInfoCreateWithoutPublishedTasksInput, UserInfoUncheckedCreateWithoutPublishedTasksInput>
    where?: UserInfoWhereInput
  }

  export type UserInfoUpdateToOneWithWhereWithoutPublishedTasksInput = {
    where?: UserInfoWhereInput
    data: XOR<UserInfoUpdateWithoutPublishedTasksInput, UserInfoUncheckedUpdateWithoutPublishedTasksInput>
  }

  export type UserInfoUpdateWithoutPublishedTasksInput = {
    userEmail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    describeBySelf?: NullableStringFieldUpdateOperationsInput | string | null
    registrationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lover?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    favourites?: FavouriteListUpdateManyWithoutUserNestedInput
    publishedGifts?: GiftListUpdateManyWithoutPublisherNestedInput
    receivedTasks?: TaskListUpdateManyWithoutReceiverNestedInput
    publishedWhispers?: WhisperListUpdateManyWithoutPublisherNestedInput
    receivedWhispers?: WhisperListUpdateManyWithoutReceiverNestedInput
  }

  export type UserInfoUncheckedUpdateWithoutPublishedTasksInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    describeBySelf?: NullableStringFieldUpdateOperationsInput | string | null
    registrationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lover?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    favourites?: FavouriteListUncheckedUpdateManyWithoutUserNestedInput
    publishedGifts?: GiftListUncheckedUpdateManyWithoutPublisherNestedInput
    receivedTasks?: TaskListUncheckedUpdateManyWithoutReceiverNestedInput
    publishedWhispers?: WhisperListUncheckedUpdateManyWithoutPublisherNestedInput
    receivedWhispers?: WhisperListUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserInfoUpsertWithoutReceivedTasksInput = {
    update: XOR<UserInfoUpdateWithoutReceivedTasksInput, UserInfoUncheckedUpdateWithoutReceivedTasksInput>
    create: XOR<UserInfoCreateWithoutReceivedTasksInput, UserInfoUncheckedCreateWithoutReceivedTasksInput>
    where?: UserInfoWhereInput
  }

  export type UserInfoUpdateToOneWithWhereWithoutReceivedTasksInput = {
    where?: UserInfoWhereInput
    data: XOR<UserInfoUpdateWithoutReceivedTasksInput, UserInfoUncheckedUpdateWithoutReceivedTasksInput>
  }

  export type UserInfoUpdateWithoutReceivedTasksInput = {
    userEmail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    describeBySelf?: NullableStringFieldUpdateOperationsInput | string | null
    registrationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lover?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    favourites?: FavouriteListUpdateManyWithoutUserNestedInput
    publishedGifts?: GiftListUpdateManyWithoutPublisherNestedInput
    publishedTasks?: TaskListUpdateManyWithoutPublisherNestedInput
    publishedWhispers?: WhisperListUpdateManyWithoutPublisherNestedInput
    receivedWhispers?: WhisperListUpdateManyWithoutReceiverNestedInput
  }

  export type UserInfoUncheckedUpdateWithoutReceivedTasksInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    describeBySelf?: NullableStringFieldUpdateOperationsInput | string | null
    registrationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lover?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    favourites?: FavouriteListUncheckedUpdateManyWithoutUserNestedInput
    publishedGifts?: GiftListUncheckedUpdateManyWithoutPublisherNestedInput
    publishedTasks?: TaskListUncheckedUpdateManyWithoutPublisherNestedInput
    publishedWhispers?: WhisperListUncheckedUpdateManyWithoutPublisherNestedInput
    receivedWhispers?: WhisperListUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserInfoCreateWithoutPublishedGiftsInput = {
    userEmail: string
    username: string
    password: string
    avatar?: string | null
    describeBySelf?: string | null
    registrationTime?: Date | string
    lover: string
    score?: number
    favourites?: FavouriteListCreateNestedManyWithoutUserInput
    publishedTasks?: TaskListCreateNestedManyWithoutPublisherInput
    receivedTasks?: TaskListCreateNestedManyWithoutReceiverInput
    publishedWhispers?: WhisperListCreateNestedManyWithoutPublisherInput
    receivedWhispers?: WhisperListCreateNestedManyWithoutReceiverInput
  }

  export type UserInfoUncheckedCreateWithoutPublishedGiftsInput = {
    userId?: number
    userEmail: string
    username: string
    password: string
    avatar?: string | null
    describeBySelf?: string | null
    registrationTime?: Date | string
    lover: string
    score?: number
    favourites?: FavouriteListUncheckedCreateNestedManyWithoutUserInput
    publishedTasks?: TaskListUncheckedCreateNestedManyWithoutPublisherInput
    receivedTasks?: TaskListUncheckedCreateNestedManyWithoutReceiverInput
    publishedWhispers?: WhisperListUncheckedCreateNestedManyWithoutPublisherInput
    receivedWhispers?: WhisperListUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserInfoCreateOrConnectWithoutPublishedGiftsInput = {
    where: UserInfoWhereUniqueInput
    create: XOR<UserInfoCreateWithoutPublishedGiftsInput, UserInfoUncheckedCreateWithoutPublishedGiftsInput>
  }

  export type UserInfoUpsertWithoutPublishedGiftsInput = {
    update: XOR<UserInfoUpdateWithoutPublishedGiftsInput, UserInfoUncheckedUpdateWithoutPublishedGiftsInput>
    create: XOR<UserInfoCreateWithoutPublishedGiftsInput, UserInfoUncheckedCreateWithoutPublishedGiftsInput>
    where?: UserInfoWhereInput
  }

  export type UserInfoUpdateToOneWithWhereWithoutPublishedGiftsInput = {
    where?: UserInfoWhereInput
    data: XOR<UserInfoUpdateWithoutPublishedGiftsInput, UserInfoUncheckedUpdateWithoutPublishedGiftsInput>
  }

  export type UserInfoUpdateWithoutPublishedGiftsInput = {
    userEmail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    describeBySelf?: NullableStringFieldUpdateOperationsInput | string | null
    registrationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lover?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    favourites?: FavouriteListUpdateManyWithoutUserNestedInput
    publishedTasks?: TaskListUpdateManyWithoutPublisherNestedInput
    receivedTasks?: TaskListUpdateManyWithoutReceiverNestedInput
    publishedWhispers?: WhisperListUpdateManyWithoutPublisherNestedInput
    receivedWhispers?: WhisperListUpdateManyWithoutReceiverNestedInput
  }

  export type UserInfoUncheckedUpdateWithoutPublishedGiftsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    describeBySelf?: NullableStringFieldUpdateOperationsInput | string | null
    registrationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lover?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    favourites?: FavouriteListUncheckedUpdateManyWithoutUserNestedInput
    publishedTasks?: TaskListUncheckedUpdateManyWithoutPublisherNestedInput
    receivedTasks?: TaskListUncheckedUpdateManyWithoutReceiverNestedInput
    publishedWhispers?: WhisperListUncheckedUpdateManyWithoutPublisherNestedInput
    receivedWhispers?: WhisperListUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserInfoCreateWithoutPublishedWhispersInput = {
    userEmail: string
    username: string
    password: string
    avatar?: string | null
    describeBySelf?: string | null
    registrationTime?: Date | string
    lover: string
    score?: number
    favourites?: FavouriteListCreateNestedManyWithoutUserInput
    publishedGifts?: GiftListCreateNestedManyWithoutPublisherInput
    publishedTasks?: TaskListCreateNestedManyWithoutPublisherInput
    receivedTasks?: TaskListCreateNestedManyWithoutReceiverInput
    receivedWhispers?: WhisperListCreateNestedManyWithoutReceiverInput
  }

  export type UserInfoUncheckedCreateWithoutPublishedWhispersInput = {
    userId?: number
    userEmail: string
    username: string
    password: string
    avatar?: string | null
    describeBySelf?: string | null
    registrationTime?: Date | string
    lover: string
    score?: number
    favourites?: FavouriteListUncheckedCreateNestedManyWithoutUserInput
    publishedGifts?: GiftListUncheckedCreateNestedManyWithoutPublisherInput
    publishedTasks?: TaskListUncheckedCreateNestedManyWithoutPublisherInput
    receivedTasks?: TaskListUncheckedCreateNestedManyWithoutReceiverInput
    receivedWhispers?: WhisperListUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserInfoCreateOrConnectWithoutPublishedWhispersInput = {
    where: UserInfoWhereUniqueInput
    create: XOR<UserInfoCreateWithoutPublishedWhispersInput, UserInfoUncheckedCreateWithoutPublishedWhispersInput>
  }

  export type UserInfoCreateWithoutReceivedWhispersInput = {
    userEmail: string
    username: string
    password: string
    avatar?: string | null
    describeBySelf?: string | null
    registrationTime?: Date | string
    lover: string
    score?: number
    favourites?: FavouriteListCreateNestedManyWithoutUserInput
    publishedGifts?: GiftListCreateNestedManyWithoutPublisherInput
    publishedTasks?: TaskListCreateNestedManyWithoutPublisherInput
    receivedTasks?: TaskListCreateNestedManyWithoutReceiverInput
    publishedWhispers?: WhisperListCreateNestedManyWithoutPublisherInput
  }

  export type UserInfoUncheckedCreateWithoutReceivedWhispersInput = {
    userId?: number
    userEmail: string
    username: string
    password: string
    avatar?: string | null
    describeBySelf?: string | null
    registrationTime?: Date | string
    lover: string
    score?: number
    favourites?: FavouriteListUncheckedCreateNestedManyWithoutUserInput
    publishedGifts?: GiftListUncheckedCreateNestedManyWithoutPublisherInput
    publishedTasks?: TaskListUncheckedCreateNestedManyWithoutPublisherInput
    receivedTasks?: TaskListUncheckedCreateNestedManyWithoutReceiverInput
    publishedWhispers?: WhisperListUncheckedCreateNestedManyWithoutPublisherInput
  }

  export type UserInfoCreateOrConnectWithoutReceivedWhispersInput = {
    where: UserInfoWhereUniqueInput
    create: XOR<UserInfoCreateWithoutReceivedWhispersInput, UserInfoUncheckedCreateWithoutReceivedWhispersInput>
  }

  export type UserInfoUpsertWithoutPublishedWhispersInput = {
    update: XOR<UserInfoUpdateWithoutPublishedWhispersInput, UserInfoUncheckedUpdateWithoutPublishedWhispersInput>
    create: XOR<UserInfoCreateWithoutPublishedWhispersInput, UserInfoUncheckedCreateWithoutPublishedWhispersInput>
    where?: UserInfoWhereInput
  }

  export type UserInfoUpdateToOneWithWhereWithoutPublishedWhispersInput = {
    where?: UserInfoWhereInput
    data: XOR<UserInfoUpdateWithoutPublishedWhispersInput, UserInfoUncheckedUpdateWithoutPublishedWhispersInput>
  }

  export type UserInfoUpdateWithoutPublishedWhispersInput = {
    userEmail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    describeBySelf?: NullableStringFieldUpdateOperationsInput | string | null
    registrationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lover?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    favourites?: FavouriteListUpdateManyWithoutUserNestedInput
    publishedGifts?: GiftListUpdateManyWithoutPublisherNestedInput
    publishedTasks?: TaskListUpdateManyWithoutPublisherNestedInput
    receivedTasks?: TaskListUpdateManyWithoutReceiverNestedInput
    receivedWhispers?: WhisperListUpdateManyWithoutReceiverNestedInput
  }

  export type UserInfoUncheckedUpdateWithoutPublishedWhispersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    describeBySelf?: NullableStringFieldUpdateOperationsInput | string | null
    registrationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lover?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    favourites?: FavouriteListUncheckedUpdateManyWithoutUserNestedInput
    publishedGifts?: GiftListUncheckedUpdateManyWithoutPublisherNestedInput
    publishedTasks?: TaskListUncheckedUpdateManyWithoutPublisherNestedInput
    receivedTasks?: TaskListUncheckedUpdateManyWithoutReceiverNestedInput
    receivedWhispers?: WhisperListUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserInfoUpsertWithoutReceivedWhispersInput = {
    update: XOR<UserInfoUpdateWithoutReceivedWhispersInput, UserInfoUncheckedUpdateWithoutReceivedWhispersInput>
    create: XOR<UserInfoCreateWithoutReceivedWhispersInput, UserInfoUncheckedCreateWithoutReceivedWhispersInput>
    where?: UserInfoWhereInput
  }

  export type UserInfoUpdateToOneWithWhereWithoutReceivedWhispersInput = {
    where?: UserInfoWhereInput
    data: XOR<UserInfoUpdateWithoutReceivedWhispersInput, UserInfoUncheckedUpdateWithoutReceivedWhispersInput>
  }

  export type UserInfoUpdateWithoutReceivedWhispersInput = {
    userEmail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    describeBySelf?: NullableStringFieldUpdateOperationsInput | string | null
    registrationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lover?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    favourites?: FavouriteListUpdateManyWithoutUserNestedInput
    publishedGifts?: GiftListUpdateManyWithoutPublisherNestedInput
    publishedTasks?: TaskListUpdateManyWithoutPublisherNestedInput
    receivedTasks?: TaskListUpdateManyWithoutReceiverNestedInput
    publishedWhispers?: WhisperListUpdateManyWithoutPublisherNestedInput
  }

  export type UserInfoUncheckedUpdateWithoutReceivedWhispersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    describeBySelf?: NullableStringFieldUpdateOperationsInput | string | null
    registrationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lover?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    favourites?: FavouriteListUncheckedUpdateManyWithoutUserNestedInput
    publishedGifts?: GiftListUncheckedUpdateManyWithoutPublisherNestedInput
    publishedTasks?: TaskListUncheckedUpdateManyWithoutPublisherNestedInput
    receivedTasks?: TaskListUncheckedUpdateManyWithoutReceiverNestedInput
    publishedWhispers?: WhisperListUncheckedUpdateManyWithoutPublisherNestedInput
  }

  export type UserInfoCreateWithoutFavouritesInput = {
    userEmail: string
    username: string
    password: string
    avatar?: string | null
    describeBySelf?: string | null
    registrationTime?: Date | string
    lover: string
    score?: number
    publishedGifts?: GiftListCreateNestedManyWithoutPublisherInput
    publishedTasks?: TaskListCreateNestedManyWithoutPublisherInput
    receivedTasks?: TaskListCreateNestedManyWithoutReceiverInput
    publishedWhispers?: WhisperListCreateNestedManyWithoutPublisherInput
    receivedWhispers?: WhisperListCreateNestedManyWithoutReceiverInput
  }

  export type UserInfoUncheckedCreateWithoutFavouritesInput = {
    userId?: number
    userEmail: string
    username: string
    password: string
    avatar?: string | null
    describeBySelf?: string | null
    registrationTime?: Date | string
    lover: string
    score?: number
    publishedGifts?: GiftListUncheckedCreateNestedManyWithoutPublisherInput
    publishedTasks?: TaskListUncheckedCreateNestedManyWithoutPublisherInput
    receivedTasks?: TaskListUncheckedCreateNestedManyWithoutReceiverInput
    publishedWhispers?: WhisperListUncheckedCreateNestedManyWithoutPublisherInput
    receivedWhispers?: WhisperListUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserInfoCreateOrConnectWithoutFavouritesInput = {
    where: UserInfoWhereUniqueInput
    create: XOR<UserInfoCreateWithoutFavouritesInput, UserInfoUncheckedCreateWithoutFavouritesInput>
  }

  export type UserInfoUpsertWithoutFavouritesInput = {
    update: XOR<UserInfoUpdateWithoutFavouritesInput, UserInfoUncheckedUpdateWithoutFavouritesInput>
    create: XOR<UserInfoCreateWithoutFavouritesInput, UserInfoUncheckedCreateWithoutFavouritesInput>
    where?: UserInfoWhereInput
  }

  export type UserInfoUpdateToOneWithWhereWithoutFavouritesInput = {
    where?: UserInfoWhereInput
    data: XOR<UserInfoUpdateWithoutFavouritesInput, UserInfoUncheckedUpdateWithoutFavouritesInput>
  }

  export type UserInfoUpdateWithoutFavouritesInput = {
    userEmail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    describeBySelf?: NullableStringFieldUpdateOperationsInput | string | null
    registrationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lover?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    publishedGifts?: GiftListUpdateManyWithoutPublisherNestedInput
    publishedTasks?: TaskListUpdateManyWithoutPublisherNestedInput
    receivedTasks?: TaskListUpdateManyWithoutReceiverNestedInput
    publishedWhispers?: WhisperListUpdateManyWithoutPublisherNestedInput
    receivedWhispers?: WhisperListUpdateManyWithoutReceiverNestedInput
  }

  export type UserInfoUncheckedUpdateWithoutFavouritesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userEmail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    describeBySelf?: NullableStringFieldUpdateOperationsInput | string | null
    registrationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lover?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    publishedGifts?: GiftListUncheckedUpdateManyWithoutPublisherNestedInput
    publishedTasks?: TaskListUncheckedUpdateManyWithoutPublisherNestedInput
    receivedTasks?: TaskListUncheckedUpdateManyWithoutReceiverNestedInput
    publishedWhispers?: WhisperListUncheckedUpdateManyWithoutPublisherNestedInput
    receivedWhispers?: WhisperListUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type FavouriteListCreateManyUserInput = {
    favId?: number
    collectionId: string
    collectionType: string
    creationTime?: Date | string
  }

  export type GiftListCreateManyPublisherInput = {
    giftId?: number
    giftImg?: string | null
    giftName: string
    giftDetail?: string | null
    needScore?: number
    remained?: number
    isShow?: boolean
    creationTime?: Date | string
  }

  export type TaskListCreateManyPublisherInput = {
    taskId?: number
    receiverEmail?: string | null
    taskName: string
    taskDesc?: string | null
    taskImage?: string | null
    taskScore?: number
    taskStatus?: string
    creationTime?: Date | string
    completionTime?: Date | string | null
    isApprove?: boolean
  }

  export type TaskListCreateManyReceiverInput = {
    taskId?: number
    publisherEmail: string
    taskName: string
    taskDesc?: string | null
    taskImage?: string | null
    taskScore?: number
    taskStatus?: string
    creationTime?: Date | string
    completionTime?: Date | string | null
    isApprove?: boolean
  }

  export type WhisperListCreateManyPublisherInput = {
    whisperId?: number
    toUserEmail?: string | null
    title?: string | null
    content: string
    creationTime?: Date | string
    isRead?: boolean
  }

  export type WhisperListCreateManyReceiverInput = {
    whisperId?: number
    publisherEmail: string
    title?: string | null
    content: string
    creationTime?: Date | string
    isRead?: boolean
  }

  export type FavouriteListUpdateWithoutUserInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    collectionType?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavouriteListUncheckedUpdateWithoutUserInput = {
    favId?: IntFieldUpdateOperationsInput | number
    collectionId?: StringFieldUpdateOperationsInput | string
    collectionType?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavouriteListUncheckedUpdateManyWithoutUserInput = {
    favId?: IntFieldUpdateOperationsInput | number
    collectionId?: StringFieldUpdateOperationsInput | string
    collectionType?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftListUpdateWithoutPublisherInput = {
    giftImg?: NullableStringFieldUpdateOperationsInput | string | null
    giftName?: StringFieldUpdateOperationsInput | string
    giftDetail?: NullableStringFieldUpdateOperationsInput | string | null
    needScore?: IntFieldUpdateOperationsInput | number
    remained?: IntFieldUpdateOperationsInput | number
    isShow?: BoolFieldUpdateOperationsInput | boolean
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftListUncheckedUpdateWithoutPublisherInput = {
    giftId?: IntFieldUpdateOperationsInput | number
    giftImg?: NullableStringFieldUpdateOperationsInput | string | null
    giftName?: StringFieldUpdateOperationsInput | string
    giftDetail?: NullableStringFieldUpdateOperationsInput | string | null
    needScore?: IntFieldUpdateOperationsInput | number
    remained?: IntFieldUpdateOperationsInput | number
    isShow?: BoolFieldUpdateOperationsInput | boolean
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftListUncheckedUpdateManyWithoutPublisherInput = {
    giftId?: IntFieldUpdateOperationsInput | number
    giftImg?: NullableStringFieldUpdateOperationsInput | string | null
    giftName?: StringFieldUpdateOperationsInput | string
    giftDetail?: NullableStringFieldUpdateOperationsInput | string | null
    needScore?: IntFieldUpdateOperationsInput | number
    remained?: IntFieldUpdateOperationsInput | number
    isShow?: BoolFieldUpdateOperationsInput | boolean
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskListUpdateWithoutPublisherInput = {
    taskName?: StringFieldUpdateOperationsInput | string
    taskDesc?: NullableStringFieldUpdateOperationsInput | string | null
    taskImage?: NullableStringFieldUpdateOperationsInput | string | null
    taskScore?: IntFieldUpdateOperationsInput | number
    taskStatus?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    completionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isApprove?: BoolFieldUpdateOperationsInput | boolean
    receiver?: UserInfoUpdateOneWithoutReceivedTasksNestedInput
  }

  export type TaskListUncheckedUpdateWithoutPublisherInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    receiverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    taskName?: StringFieldUpdateOperationsInput | string
    taskDesc?: NullableStringFieldUpdateOperationsInput | string | null
    taskImage?: NullableStringFieldUpdateOperationsInput | string | null
    taskScore?: IntFieldUpdateOperationsInput | number
    taskStatus?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    completionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isApprove?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskListUncheckedUpdateManyWithoutPublisherInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    receiverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    taskName?: StringFieldUpdateOperationsInput | string
    taskDesc?: NullableStringFieldUpdateOperationsInput | string | null
    taskImage?: NullableStringFieldUpdateOperationsInput | string | null
    taskScore?: IntFieldUpdateOperationsInput | number
    taskStatus?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    completionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isApprove?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskListUpdateWithoutReceiverInput = {
    taskName?: StringFieldUpdateOperationsInput | string
    taskDesc?: NullableStringFieldUpdateOperationsInput | string | null
    taskImage?: NullableStringFieldUpdateOperationsInput | string | null
    taskScore?: IntFieldUpdateOperationsInput | number
    taskStatus?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    completionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isApprove?: BoolFieldUpdateOperationsInput | boolean
    publisher?: UserInfoUpdateOneRequiredWithoutPublishedTasksNestedInput
  }

  export type TaskListUncheckedUpdateWithoutReceiverInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    publisherEmail?: StringFieldUpdateOperationsInput | string
    taskName?: StringFieldUpdateOperationsInput | string
    taskDesc?: NullableStringFieldUpdateOperationsInput | string | null
    taskImage?: NullableStringFieldUpdateOperationsInput | string | null
    taskScore?: IntFieldUpdateOperationsInput | number
    taskStatus?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    completionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isApprove?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskListUncheckedUpdateManyWithoutReceiverInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    publisherEmail?: StringFieldUpdateOperationsInput | string
    taskName?: StringFieldUpdateOperationsInput | string
    taskDesc?: NullableStringFieldUpdateOperationsInput | string | null
    taskImage?: NullableStringFieldUpdateOperationsInput | string | null
    taskScore?: IntFieldUpdateOperationsInput | number
    taskStatus?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    completionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isApprove?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WhisperListUpdateWithoutPublisherInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    receiver?: UserInfoUpdateOneWithoutReceivedWhispersNestedInput
  }

  export type WhisperListUncheckedUpdateWithoutPublisherInput = {
    whisperId?: IntFieldUpdateOperationsInput | number
    toUserEmail?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WhisperListUncheckedUpdateManyWithoutPublisherInput = {
    whisperId?: IntFieldUpdateOperationsInput | number
    toUserEmail?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WhisperListUpdateWithoutReceiverInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    publisher?: UserInfoUpdateOneRequiredWithoutPublishedWhispersNestedInput
  }

  export type WhisperListUncheckedUpdateWithoutReceiverInput = {
    whisperId?: IntFieldUpdateOperationsInput | number
    publisherEmail?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WhisperListUncheckedUpdateManyWithoutReceiverInput = {
    whisperId?: IntFieldUpdateOperationsInput | number
    publisherEmail?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }



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