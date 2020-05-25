import { useMutation } from '@apollo/react-hooks';
import { ChangeEvent, FormEvent, useState } from 'react';
import {
  ResetDocument,
  ResetMutation,
  KmakeObject,
  KmakeQueryDocument,
} from '../../../generated/kmakegql';
import { isEmpty, isNil } from 'lodash';
import React from 'react';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';
import './reset-scheduler.component.css'

export function ResetSchedulerComponent() {
  /* Hooks */
  const [namespace, setNamespace] = useState('');
  const [scheduler, setScheduler] = useState('');
  const [full, setFull] = useState('');

  const [resetScheduler, {error, data}] = useMutation<{addReset: ResetMutation, kmo: KmakeObject}>(ResetDocument, {
    variables: {
      namespace: "default",
      scheduler: "kmakenowscheduler-sample",
      full: false
    },
    // refetchQueries: [{ query: KmakeQueryDocument, variables: {namespace: "default"} }],
  });

  /* Functions */
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEmpty(namespace) && !isEmpty(scheduler) && !isEmpty(full)) {
      resetScheduler();
      setNamespace('');
      setScheduler('');
      setFull('');
    }
  };

  /* Template */
  return (
    <form className="reset-scheduler" onSubmit={(e: FormEvent<HTMLFormElement>) => submitForm(e)}>
      <p>
        {error ? <p>Oh no! {error.message}</p> : null}
        {data && data.addReset ? <p>Saved!</p> : null}
      </p>
      <div className="reset-scheduler__field">
        <label>Namespace:</label>
        <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setNamespace(e.target.value)}/>
      </div>
      <div className="reset-scheduler__field">
        <label>Scheduler:</label>
        <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setScheduler(e.target.value)}/>
      </div>
      <div className="reset-scheduler__field">
        <label>Full:</label>
        <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setFull(e.target.value)}/>
      </div>
      <button>
        <Plus className="reset-scheduler__plus"/>
      </button>
    </form>
  );
};
