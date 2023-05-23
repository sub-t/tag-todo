import { IconButton } from '@/components/ui';
import { red } from '@radix-ui/colors';
import { BsTrash3Fill } from 'react-icons/bs';
import { MdAdd, MdMenu } from 'react-icons/md';
import { useDeleteTodos } from '../../todo/store';
import { useOpenMobileForm, useOpenMobileMenu } from '../store';
import { css, styled } from '/stitches.config';

export const Controller = () => {
  const openMobileMenu = useOpenMobileMenu();
  const openMobileForm = useOpenMobileForm();
  const deleteTodos = useDeleteTodos();

  return (
    <>
      <MobileMenuButton onClick={openMobileMenu} display={{ '@lg': false }}>
        <MdMenu size={24} />
      </MobileMenuButton>
      <MobileFormButton onClick={openMobileForm} display={{ '@md': false }}>
        <MdAdd size={20} />
      </MobileFormButton>
      <DeleteButton onClick={deleteTodos}>
        <BsTrash3Fill size={20} />
      </DeleteButton>
    </>
  );
};

const buttonStyle = css({
  zIndex: '$docked',
  position: 'absolute',
  size: 56,
});

const MobileMenuButton = styled(IconButton, buttonStyle, {
  left: 32,
  bottom: 64,

  variants: {
    display: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },
  defaultVariants: {
    display: true,
  },
});

const MobileFormButton = styled(IconButton, buttonStyle, {
  bottom: 64,
  left: '50%',
  transform: 'translate(-50%)',

  variants: {
    display: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },
  defaultVariants: {
    display: true,
  },
});

const DeleteButton = styled(IconButton, buttonStyle, {
  right: 32,
  bottom: 64,
  color: red.red10,
});
