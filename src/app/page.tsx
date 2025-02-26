import { CE_Sect_Agent }   from "./_element/client.section.agent";
import { CE_Sect_Logo }    from "./_element/client.section.logo";
import { CE_Sect_PowerUp } from "./_element/client.section.powerup";
import { CE_Sect_Unified } from "./_element/client.section.unified";
import { CE_Sect_Header } from "./_element/client.section.header";

export default function Home() {
  return (
    <>
      <CE_Sect_Header />
      <CE_Sect_Logo />
      <CE_Sect_PowerUp />
      <CE_Sect_Agent />
      <CE_Sect_Unified />
    </>
  );
}
