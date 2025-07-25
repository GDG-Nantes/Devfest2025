import { Stack, Typography } from '@mui/material';
import classNames from "classnames";
import React from "react";

import { PartialSession, Speakers, Tags, rooms } from "./common";
import "./schedule.scss";
import { Slot } from '../../../types/schedule/slots';
import {  RoomName } from '../../../types/schedule/schedule';
import { getTranslation } from '@/i18n/i18n';
import { CommonParams } from '@/types';
import { MyLink } from '@/components/commun/link';
import { Flag } from '@/components/commun/flags';

export const LargeSchedule: React.FC<{
  sessions: PartialSession[];
  allHoursSlots: Slot[];
  fixedSlots: Slot[];
  params: CommonParams["params"];
}> = ({ sessions, allHoursSlots, fixedSlots, params }) => {
  const hoursStart = allHoursSlots.map((slot) => slot.start);
  const hoursSlots = hoursStart.map(
    (start) => allHoursSlots.find((slot) => slot.start === start) as Slot
  );

  const sessionsByHours: { [k: string]: Array<PartialSession> } = {};
  const fixedSlotsByHours: { [k: string]: Array<Slot> } = {};
  hoursSlots.forEach((hourSlot) => {
    sessionsByHours[hourSlot.start] = sessions
      .filter((s) => s.slot.start === hourSlot.start)
      .sort((s1, s2) => rooms.indexOf(s1.room) - rooms.indexOf(s2.room));
    fixedSlotsByHours[hourSlot.start] = fixedSlots.filter(
      (s) => s.start === hourSlot.start
    );
  });

  return (
    <>
      <div className="header-rooms sticky" />
      <div className="schedule-large">
        {rooms.map((room) => (
          <Room key={room} name={room} />
        ))}
        {hoursSlots.map((hourSlot) => {
          return (
            <React.Fragment key={hourSlot.start}>
              <Hour key={hourSlot.key} slot={hourSlot} />
              {fixedSlotsByHours[hourSlot.start].map((slot) => (
                <FixedSlot slot={slot} params={params} key={slot.key} />
              ))}
              {sessionsByHours[hourSlot.start].map((session) => (
                <SessionInfo session={session} key={session.key} />
              ))}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

function columnFromRoom(room: RoomName) {
  return rooms.indexOf(room) + 2 + " / " + (rooms.indexOf(room) + 2);
}

const Hour: React.FC<{ slot: Slot }> = ({ slot }) => (
  <div
    className="slot"
    style={{
      gridColumn: "1 / 1",
      gridRow: slotToRow(slot as Slot),
    }}
  >
    <Typography variant="h3">{slot.start}</Typography>
  </div>
);

const FixedSlot: React.FC<{ slot: Slot, params: CommonParams["params"] }> = async ({ slot, params }) => {
  const t =  await getTranslation(params, "pages.schedule");
  const gridColumn = slot.type.startsWith("keynote")
    ? "2 / 2"
    : slot.display.notForCodelab
    ? "2 / span 4"
    : "2 / -1";
  return (
    <div
      className={classNames("slot", "fixed", slot.type)}
      style={{
        gridColumn,
        gridRow: slotToRow(slot as Slot),
        zIndex: 0,
      }}
    >
      <Typography variant="h3">{t(slot.type)}</Typography>
    </div>
  );
};

const Room: React.FC<{ name: RoomName }> = ({ name }) => {
  const gridColumn = columnFromRoom(name);
  return (
    <div
      className="slot room sticky"
      style={{
        gridColumn,
        gridRow: "1 / 1",
      }}
    >
      <Typography variant="h3">{name}</Typography>
    </div>
  );
};

const SessionInfo: React.FC<{ session: PartialSession }> = ({ session }) => {

  const gridColumn = columnFromRoom(session.room);
  return (
    <div
      className={classNames("slot session-info", session.cancelled && "cancelled")}
      style={{
        gridColumn,
        gridRow: slotToRow(session.slot),
        zIndex: 1,
      }}
    >
      <MyLink href={"/sessions/" + session.key}><span className="session-title">{session.title}</span></MyLink>
      <span className="sr-only">Salle {session.room}</span>
      <div className="session-info-bottom">
        <Stack direction="row" alignItems="center" spacing={1}>
          {session.tags && <Tags tags={session.tags}/>}
          <Flag lang={session.language} size="tiny" />
        </Stack>
        <Speakers speakers={session.speakers} />
      </div>
    </div>
  );
};

function slotToRow(slot: Slot) {
  const firstRow = 1;
  const rowStart = slot.display.row + firstRow;
  const spanRow = slot.display.size;
  return `${rowStart} / span ${spanRow}`;
}
