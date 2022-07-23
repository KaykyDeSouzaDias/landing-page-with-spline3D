import { Button } from "@mantine/core";
import HeaderMenu from "../../shared/components/header";

export default function FuturisticPage() {
  const data = [
    {
      link: "/",
      label: "Futuristic",
    },
    {
      link: "/low-poly",
      label: "Low poly",
    },
  ];

  return <HeaderMenu links={data} />;
}
