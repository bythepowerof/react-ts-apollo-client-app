import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type KmakeRunFileWait = KmakeRunOp & {
   __typename?: 'KmakeRunFileWait';
  dummy: Scalars['String'];
  files?: Maybe<Array<Scalars['String']>>;
};

export type KmakeScheduleRunRestart = KmakeScheduleRunOp & {
   __typename?: 'KmakeScheduleRunRestart';
  dummy: Scalars['String'];
  run: Scalars['String'];
};

export type KmakeScheduleRunStop = KmakeScheduleRunOp & {
   __typename?: 'KmakeScheduleRunStop';
  dummy: Scalars['String'];
  run: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  namespaces: Array<Maybe<Namespace>>;
  kmakeObjects: Array<Maybe<KmakeObject>>;
  kmakeschedulers: Array<Maybe<KmakeScheduler>>;
  kmakes: Array<Maybe<Kmake>>;
  kmakeruns: Array<Maybe<KmakeRun>>;
  kmakescheduleruns: Array<Maybe<KmakeScheduleRun>>;
};


export type QueryNamespacesArgs = {
  name?: Maybe<Scalars['String']>;
};


export type QueryKmakeObjectsArgs = {
  namespace: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};


export type QueryKmakeschedulersArgs = {
  namespace: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  monitor?: Maybe<Scalars['String']>;
};


export type QueryKmakesArgs = {
  namespace: Scalars['String'];
  kmake?: Maybe<Scalars['String']>;
};


export type QueryKmakerunsArgs = {
  namespace: Scalars['String'];
  kmake?: Maybe<Scalars['String']>;
  jobtype?: Maybe<JobType>;
  kmakerun?: Maybe<Scalars['String']>;
};


export type QueryKmakeschedulerunsArgs = {
  namespace: Scalars['String'];
  kmake?: Maybe<Scalars['String']>;
  kmakerun?: Maybe<Scalars['String']>;
  kmakescheduler?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  runtype?: Maybe<RunType>;
};

export type Namespace = {
   __typename?: 'Namespace';
  name: Scalars['String'];
  kmakes: Array<Maybe<Kmake>>;
};


export type NamespaceKmakesArgs = {
  name?: Maybe<Scalars['String']>;
};

export type Rule = {
   __typename?: 'Rule';
  targets: Array<Maybe<Scalars['String']>>;
  doublecolon: Scalars['Boolean'];
  commands: Array<Maybe<Scalars['String']>>;
  prereqs: Array<Maybe<Scalars['String']>>;
  targetpattern: Scalars['String'];
};

export type KmakeRunJob = KmakeRunOp & {
   __typename?: 'KmakeRunJob';
  dummy: Scalars['String'];
  targets: Array<Maybe<Scalars['String']>>;
  image: Scalars['String'];
  command?: Maybe<Array<Maybe<Scalars['String']>>>;
  args?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type KmakeObject = {
  name?: Maybe<Scalars['String']>;
  namespace?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type Kmake = KmakeObject & {
   __typename?: 'Kmake';
  name: Scalars['String'];
  namespace: Scalars['String'];
  status: Scalars['String'];
  variables: Array<Maybe<Kv>>;
  rules: Array<Maybe<Rule>>;
  runs: Array<Maybe<KmakeRun>>;
};


export type KmakeRunsArgs = {
  jobtype?: Maybe<JobType>;
  name?: Maybe<Scalars['String']>;
};

export type KmakeScheduleRunStart = KmakeScheduleRunOp & {
   __typename?: 'KmakeScheduleRunStart';
  dummy: Scalars['String'];
};

export type KmakeScheduleCreate = KmakeScheduleRunOp & {
   __typename?: 'KmakeScheduleCreate';
  dummy: Scalars['String'];
};

export type RunLevelIn = {
  namespace: Scalars['String'];
  kmakerun: Scalars['String'];
  kmakescheduler: Scalars['String'];
};

export type KmakeRunDummy = KmakeRunOp & {
   __typename?: 'KmakeRunDummy';
  dummy: Scalars['String'];
};

export type KmakeScheduleForce = KmakeScheduleRunOp & {
   __typename?: 'KmakeScheduleForce';
  dummy: Scalars['String'];
  operation: Scalars['String'];
  recurse: Scalars['String'];
};

export type KmakeNowScheduler = KmakeScheduler & KmakeObject & {
   __typename?: 'KmakeNowScheduler';
  name?: Maybe<Scalars['String']>;
  namespace?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  variables?: Maybe<Array<Maybe<Kv>>>;
  monitor?: Maybe<Array<Maybe<Scalars['String']>>>;
  scheduleruns: Array<Maybe<KmakeScheduleRun>>;
};


export type KmakeNowSchedulerSchedulerunsArgs = {
  kmake?: Maybe<Scalars['String']>;
  kmakerun?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  runtype?: Maybe<RunType>;
};

export type KmakeScheduler = {
  name?: Maybe<Scalars['String']>;
  namespace?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  variables?: Maybe<Array<Maybe<Kv>>>;
  monitor?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type KmakeScheduleRunOp = {
  dummy?: Maybe<Scalars['String']>;
};

export type SubNamespace = {
  namespace: Scalars['String'];
};

export type Mutation = {
   __typename?: 'Mutation';
  reset: KmakeScheduleRun;
  stop: KmakeScheduleRun;
  restart: KmakeScheduleRun;
};


export type MutationResetArgs = {
  input: NewReset;
};


export type MutationStopArgs = {
  input: RunLevelIn;
};


export type MutationRestartArgs = {
  input: RunLevelIn;
};

export type Kv = {
   __typename?: 'KV';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type KmakeRun = KmakeObject & {
   __typename?: 'KmakeRun';
  name: Scalars['String'];
  namespace: Scalars['String'];
  status: Scalars['String'];
  kmakename?: Maybe<Scalars['String']>;
  operation?: Maybe<KmakeRunOp>;
  schedulerun?: Maybe<Array<Maybe<KmakeScheduleRun>>>;
};


export type KmakeRunSchedulerunArgs = {
  kmakescheduler?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  runtype?: Maybe<RunType>;
};

export type KmakeScheduleReset = KmakeScheduleRunOp & {
   __typename?: 'KmakeScheduleReset';
  dummy: Scalars['String'];
  recurse: Scalars['String'];
  full: Scalars['String'];
};

export enum RunType {
  Start = 'START',
  Restart = 'RESTART',
  Stop = 'STOP',
  Delete = 'DELETE',
  Create = 'CREATE',
  Reset = 'RESET',
  Force = 'FORCE'
}

export type KmakeScheduleDelete = KmakeScheduleRunOp & {
   __typename?: 'KmakeScheduleDelete';
  dummy: Scalars['String'];
};

export type NewReset = {
  namespace: Scalars['String'];
  kmakescheduler: Scalars['String'];
  full: Scalars['Boolean'];
};

export type Subscription = {
   __typename?: 'Subscription';
  changed: KmakeObject;
};


export type SubscriptionChangedArgs = {
  input?: Maybe<SubNamespace>;
};

export enum JobType {
  Job = 'JOB',
  Dummy = 'DUMMY',
  Filewait = 'FILEWAIT'
}

export type KmakeScheduleRun = KmakeObject & {
   __typename?: 'KmakeScheduleRun';
  name: Scalars['String'];
  namespace: Scalars['String'];
  status: Scalars['String'];
  kmakename?: Maybe<Scalars['String']>;
  kmakerunname?: Maybe<Scalars['String']>;
  kmakeschedulename?: Maybe<Scalars['String']>;
  operation: KmakeScheduleRunOp;
};

export type KmakeRunOp = {
  dummy?: Maybe<Scalars['String']>;
};

export type KmakeQueryQueryVariables = {
  namespace: Scalars['String'];
};


export type KmakeQueryQuery = (
  { __typename?: 'Query' }
  & { kmakeObjects: Array<Maybe<(
    { __typename: 'Kmake' }
    & Pick<Kmake, 'name' | 'namespace' | 'status'>
    & { variables: Array<Maybe<(
      { __typename?: 'KV' }
      & Pick<Kv, 'key' | 'value'>
    )>> }
  ) | (
    { __typename: 'KmakeNowScheduler' }
    & Pick<KmakeNowScheduler, 'monitor' | 'name' | 'namespace' | 'status'>
  ) | (
    { __typename: 'KmakeRun' }
    & Pick<KmakeRun, 'kmakename' | 'name' | 'namespace' | 'status'>
  ) | (
    { __typename: 'KmakeScheduleRun' }
    & Pick<KmakeScheduleRun, 'kmakename' | 'kmakerunname' | 'kmakeschedulename' | 'name' | 'namespace' | 'status'>
  )>> }
);


export const KmakeQueryDocument = gql`
    query KmakeQuery($namespace: String!) {
  kmakeObjects(namespace: "default") {
    __typename
    name
    namespace
    status
    ... on KmakeScheduleRun {
      kmakename
      kmakerunname
      kmakeschedulename
    }
    ... on KmakeRun {
      kmakename
    }
    ... on KmakeNowScheduler {
      monitor
    }
    ... on Kmake {
      variables {
        key
        value
      }
    }
  }
}
    `;
export type KmakeQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<KmakeQueryQuery, KmakeQueryQueryVariables>, 'query'> & ({ variables: KmakeQueryQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const KmakeQueryComponent = (props: KmakeQueryComponentProps) => (
      <ApolloReactComponents.Query<KmakeQueryQuery, KmakeQueryQueryVariables> query={KmakeQueryDocument} {...props} />
    );
    
export type KmakeQueryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<KmakeQueryQuery, KmakeQueryQueryVariables>
    } & TChildProps;
export function withKmakeQuery<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  KmakeQueryQuery,
  KmakeQueryQueryVariables,
  KmakeQueryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, KmakeQueryQuery, KmakeQueryQueryVariables, KmakeQueryProps<TChildProps, TDataName>>(KmakeQueryDocument, {
      alias: 'kmakeQuery',
      ...operationOptions
    });
};
export type KmakeQueryQueryResult = ApolloReactCommon.QueryResult<KmakeQueryQuery, KmakeQueryQueryVariables>;