import React from "next";
import { FC, ReactNode } from "react";

export interface ContentProps {
  sections: SectionProps[];
}

export interface SectionProps {
  title: string;
  content: ReactNode;
  demo: ReactNode;
}

export const Content: FC<ContentProps> = ({ sections }): JSX.Element => {
  return (
    <>
      {sections.map((section) => (
        <div key={section.title} className="content-section">
          <h3 className="content-title">{section.title}</h3>
          <div className="content-component">{section.content}</div>
          <div className="content-demo">{section.demo}</div>
        </div>
      ))}
    </>
  );
};