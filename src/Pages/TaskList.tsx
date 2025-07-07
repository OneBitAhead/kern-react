import { KernTaskList,  KernHeading, KernText  } from "../components/kern";

export default function KernLoaderExample() {


  const items = [
    {
      heading: "Persönliche Daten", items: [
        { number: 1, label: "Angaben zur Person", badge: { label: "Erledigt", status: "success" } },
        { number: 2, label: "Aktuelle Meldeandresse", badge: { label: "Fehlende Angaben", status: "warning" } },

      ]
    },
    { heading: "Zusammenfassung", items: [{ number: 3, label: "Wenn Sie alle Angaben gemacht haben, können Sie diese hier noch einmal prüfen.", badge: { label: "...", status: "info" } }] }
  ];


  return (
    <>


      <KernHeading>Task List</KernHeading>
      <KernText>...</KernText>


      <KernTaskList items={items}></KernTaskList>



    </>
  );

}
