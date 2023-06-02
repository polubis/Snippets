import { useStepper } from './use-stepper';

interface EmailStepProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const EmailStep = ({ onChange }: EmailStepProps) => (
  <div>
    Type your email: <input onChange={onChange} />
  </div>
);

// Every step must have different key.
const steps = [
  { key: 'email', Component: EmailStep },
  {
    key: 'confirm',
    Component: ({ onClick }: { onClick: () => void }) => (
      <div>
        <button onClick={onClick}>Confirm</button>
      </div>
    ),
  },
  {
    key: 'error',
    Component: ({ onClick }: { onClick: () => void }) => (
      <button onClick={onClick}>Retry</button>
    ),
  },
  { key: 'exception', Component: () => null },
] as const;

// This will give us type-safety.
type Steps = typeof steps;
type Union = Steps[number];

const RegisterForm = () => {
  const [Step, { is, next, previous, set }] = useStepper<Union, Steps>(
    'email',
    steps
  );

  // Checking the equality of keys and renders the component.
  if (is(Step, 'email')) return <Step.Component onChange={previous} />;

  if (is(Step, 'error'))
    return <Step.Component onClick={() => set('confirm')} />;

  if (is(Step, 'confirm')) return <Step.Component onClick={next} />;

  if (is(Step, 'exception')) return <Step.Component />;

  // If this code will executed it means - we did something wrong - it
  // shouldn't be possible!
  throw Error(
    'You did something wrong - there may be additional unsupported step!'
  );
};
