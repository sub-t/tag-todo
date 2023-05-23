// https://dev.to/franciscomendes10866/how-to-build-a-custom-calendar-component-in-react-26kj
import '@fontsource/anek-telugu';
import dayjs from 'dayjs';
import { ComponentPropsWithoutRef } from 'react';
import { Calendar } from '.';
import { CalendarDayCell } from './CalendarDayCell';
import { useDate } from './DateProvider';
import { styled } from '/stitches.config';

type Props = ComponentPropsWithoutRef<typeof Calendar>;

export const CalendarContent = (props: Props) => {
  const { currentDate, weeksOfTheMonth } = useDate();

  return (
    <Wrapper>
      <WeekDays>
        {weeksOfTheMonth[0].map((day) => (
          <WeekDayCell key={day.toString()}>
            {dayjs(day).format('dd')}
          </WeekDayCell>
        ))}
      </WeekDays>
      {weeksOfTheMonth.map((week) => (
        <CalendarDays key={week.toString()}>
          {week.map((day) => (
            <CalendarDayCell
              type="button"
              key={day.toString() + currentDate.toString()}
              variant={
                dayjs(props.date).isSame(day, 'date')
                  ? 'selected'
                  : currentDate.clone().toDate().getMonth() !== day.getMonth()
                  ? 'nextMonth'
                  : 'default'
              }
              onClick={() => {
                props.onClick(day);
              }}
            >
              {day.getDate()}
            </CalendarDayCell>
          ))}
        </CalendarDays>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  userSelect: 'none',
});

const WeekDays = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const WeekDayCell = styled('div', {
  height: 30,
  width: 30,
  margin: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#9BA4B4',
});

const CalendarDays = styled('div', {
  display: 'flex',
  flexDirection: 'row',
});
