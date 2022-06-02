import { JSX } from "solid-js";

interface Props {
  id: string;
  title: string;
  open?: boolean;
  children?: JSX.Element;
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
