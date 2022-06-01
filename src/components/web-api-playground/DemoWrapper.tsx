interface Props {
  id: string;
  title: string;
  open?: boolean;
  // actually required but Preact is unhappy
  children?: preact.ComponentChildren;
}

const DemoWrapper = (props: Props) => {
  const { id, title, open, children } = props;
  return (
    <details id={id} open={open}>
      <summary class="text-xl">{title}</summary>
      {children}
    </details>
  );
};

export default DemoWrapper;
