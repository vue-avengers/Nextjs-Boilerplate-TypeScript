import React from 'react';

import { Form } from 'react-final-form';

const BaseForm = ({ children }: { children: React.ReactNode }) => {
  const handleSubmit = (value: any) => console.log(value);

  return (
    <Form
      onSubmit={handleSubmit}
      render={() => {
        return <form className="form-1">{children}</form>;
      }}
    />
  );
};

export default BaseForm;
