import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Login.module.css';
import { Rectangle2Icon2 } from './Rectangle2Icon2.js';
import { Rectangle2Icon } from './Rectangle2Icon.js';
import { Rectangle6Icon } from './Rectangle6Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 67:5 */
export const Login: FC<Props> = memo(function Login(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.logo}></div>
      <div className={classes.group63}>
        <div className={classes.rectangle6}>
          <Rectangle6Icon className={classes.icon} />
        </div>
        <div className={classes.login}>Login</div>
        <div className={classes.rectangle12}></div>
        <div className={classes.entrar}>Entrar</div>
        <div className={classes.senha}>Senha:</div>
        <div className={classes.rectangle2}>
          <Rectangle2Icon className={classes.icon2} />
        </div>
        <div className={classes.check_circle}>check_circle</div>
        <div className={classes.rectangle22}>
          <Rectangle2Icon2 className={classes.icon3} />
        </div>
        <div className={classes.check_circle2}>check_circle</div>
      </div>
      <div className={classes.goServices}>GoServices</div>
      <div className={classes.eMail}>E-mail:</div>
    </div>
  );
});
