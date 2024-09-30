import Grow, { GrowProps } from '@mui/material/Grow';
import Fade from '@mui/material/Fade';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';

export default function useSnackBar() {
  const [state, setState] = React.useState<{
    open: boolean;
    message: string;
    Transition: React.ComponentType<
      TransitionProps & {
        children: React.ReactElement<any, any>;
      }
    >;
  }>({
    open: false,
    message: '',
    Transition: Fade,
  });

  const handleClick =
    (
      Transition: React.ComponentType<
        TransitionProps & {
          children: React.ReactElement<any, any>;
        }
      >,
      message: string
    ) =>
    () => {
      setState({
        open: true,
        message,
        Transition,
      });
    };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  function growTransition(props: GrowProps) {
    return <Grow {...props} />;
  }

  return { state, handleClick, handleClose, growTransition };
}
