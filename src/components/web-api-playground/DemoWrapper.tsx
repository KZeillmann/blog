interface Props {
  id: string;
  title: string;
  // actually required but Preact is unhappy
  children?: preact.ComponentChildren;
}

const DemoWrapper = (props: Props) => {
  const { id, title, children } = props;
  return (
    <details id={id}>
      <summary class="text-xl">{title}</summary>
      {children}
    </details>
  );
};

export default DemoWrapper;
