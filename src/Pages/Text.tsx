import { KernHeading, KernText  } from "../components/kern";

export default function Text() {


  return (
    <>

      <KernHeading>Text</KernHeading>
      <KernText>...</KernText>

      <KernText type="title">Title</KernText>
      <KernText type="preline">Preline</KernText>
      <KernText type="subline">Subline</KernText>
      <KernText type="label">Label</KernText>
      <KernText type="body">Body text</KernText>

    </>
  );

}