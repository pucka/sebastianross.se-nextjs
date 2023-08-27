import type { Metadata } from "next";
import "./normalize.css";
import "./globals.css";
import { code, existence } from "./fonts";

export const metadata: Metadata = {
  title: "Sebastian Ross - Developer / Musician / Gamer",
  description: "Developer with the web in focus",
  robots: "noindex",
  viewport: "width=device-width, initial-scale=1, minimum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={`${code.variable} ${existence.variable}`}>
        <div
          dangerouslySetInnerHTML={{
            __html: ` <!--
              Self portrait :/
              ........:?8Z7ODDDDDNDNDDNDDD$,..........
              ......,ODDD+~?ZD8O8OD$O8D8MDDDI.........
              .....=8ND8Z~~~:~IZZDNDZDNDDNDDD:........
              ....,ODDDO?::::::::=8MNOOMNNDDDD,.....,,
              ....$DDD8O=::::::::~~~==7MNNDDDDD..,,,,,
              ...~+8DDD7:,:::::::::~==?+IMNDDN8:,,,,,,
              ...,ZDNDD7~OO8OZI:::+Z8MDD88ND8D8,,,,,,,
              ....7DDNN$+:++?++=~~8$I+77?$DDONN,,,,,,,
              ....=8DDNO???+Z+?=:~8?+?7II?8D8DD.,,,,,,
              .....ODND$:::~==~::~?7=+?+==I88D$.,,,,,,
              .....$D8?,,,:::::,::+=~=~~~~=78D:,,,,,,,
              .....:OO:,,,::::::::+?+~~~~==+OO~,,,,,,,
              ......==~,,,,,:::,::?=8~~~~~=+I7,,,,,,,,
              .......::,,,,:::~+~?$$+=~~~=++8=.,,,,,,,
              ........~,,,,:==+=?IIII+?+==+?7,,,,,,,,,
              .......~,=:,,~=?+~~~??I7?++++I,,,,,,,,,,
              .........=+:::=~~===?I?+?I??I.,,,,,,,,,,
              .......,.I+~===~~+IZ$$I?I7II~,,,,,,,,,,,
              ..........,===+=~~~~++++?Z$7=.,,,,,,,,,,
              .........,8:==??~~~=++?7OO$??MD,,,,,,,,,
              ........=$N::~+7$$ZZZO8OOZ7I+MM$.,,,,,,,
              ... ,+88$ZN:::~==?ZO8DDOZ7I??MN8~,,,,,,,
              +O7ZOODOZZO~~~~~=~~++?I??+?IDN888D7,,,,,
              8O8D88OOZ$ZD?~~~~==+I?????7OOOOZ8MODOO:,
              ZO8O8OZ$ZZO887==~===+?I??7$$$$8ODMND8OO$
              ZO8O88OZOZZODD7=~~~=++I?I$II?OD8M888O8D8
              OOD88DO$OO88DD8$~~~~=+++7+++?8DNNM88888O
              O88D88OZDOZNODDN=~~~~~~====+8D8NMD88DDDO
              OO8888OZD8D88ODD:~:~~:::~~~=8D8MND8DDDDD
              88888D8O8DDDDDO::~~:~:::::=~8MM8ND8DDDDD
              8O8888OO888DDDDD?~~:~~:::==88DM8D8DDDDND
              OO8888OO888D8DZ7O?~::::::?O88MMOD8DD8DDD
              O888OOOOOOOD8O88OO+~::::7888MMOOO88O8DD8
              O888888O8DDD8O88DOD::::IOOOMN8O88D8D8888
              -->`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
