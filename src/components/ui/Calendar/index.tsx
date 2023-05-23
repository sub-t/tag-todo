// https://dev.to/franciscomendes10866/how-to-build-a-custom-calendar-component-in-react-26kj
import '@fontsource/anek-telugu';
import { memo } from 'react';
import { styled } from 'stitches.config';
import { CalendarContent } from './CalendarContent';
import { CalendarHeader } from './CalendarHeader';
import { DateProvider } from './DateProvider';

type Props = {
  date?: Date;
  onClick: (date: Date) => void;
};

export const Calendar = memo(function Calendar(props: Props) {
  return (
    <Wrapper>
      <DateProvider>
        <CalendarHeader />
        <CalendarContent date={props.date} onClick={props.onClick} />
      </DateProvider>
    </Wrapper>
  );
});

export const Wrapper = styled('div', {
  userSelect: 'none',
  width: 'max-content',
  borderRadius: 10,
  padding: 20,
  backgroundColor: 'white',
  fontFamily: 'Anek Telugu',
});
