import type { NextPage } from "next";
import Header from "../components/Header";
import { Content, SectionProps } from "../components/Content";

const Modal: NextPage = () => {

  const pageSections: SectionProps[] = [
    {
      title: "",
      content: (
        <>

        </>
      ),
      demo: (
        <>

        </>
      ),
    }
  ];

  return (
    <div className="main-content">
      <Header
        title="Modal"
        description="Modals are used to highlight elements showing it in foreground"
      />
      <Content sections={pageSections} />
    </div>
  );
};

export default Modal;