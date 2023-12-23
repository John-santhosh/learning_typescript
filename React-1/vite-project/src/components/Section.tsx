import { ReactNode } from "react";

// old way writing react components
// export const Section: React.FC<{ title: string }> = ({ children, title }) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       <p>{children}</p>
//     </section>
//   );
// };

type SectionProp = {
  title?: string;
  children: ReactNode;
};

export const Section = ({
  title = "My Sub Heading",
  children,
}: SectionProp) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};
