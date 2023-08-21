/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import * as React from 'react';
import {IconRestart} from '../../Icon/IconRestart';
export interface ResetButtonProps {
  onReset: () => void;
}

export function ResetButton({onReset}: ResetButtonProps) {
  return (
    <button
      className="text-sm text-primary dark:text-primary-dark inline-flex items-center hover:text-link duration-100 ease-in transition mx-1"
      onClick={onReset}
      title="Obnovit Sandbox"
      type="button">
<<<<<<< HEAD
<<<<<<< HEAD
      <IconRestart className="inline ml-1 mr-1 relative" /> Obnovit
=======
      <IconRestart className="inline ms-1 me-1 relative" /> Reset
>>>>>>> 819518cfe32dd2db3b765410247c30feea713c77
=======
      <IconRestart className="inline mx-1 relative" /> Reset
>>>>>>> 842c24c9aefaa60b7ae9b46b002bd1b3cf4d31f3
    </button>
  );
}
