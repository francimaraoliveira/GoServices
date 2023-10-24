import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './CadastroCliente.module.css';
import { Rectangle2Icon2 } from './Rectangle2Icon2.js';
import { Rectangle2Icon3 } from './Rectangle2Icon3.js';
import { Rectangle2Icon4 } from './Rectangle2Icon4.js';
import { Rectangle2Icon5 } from './Rectangle2Icon5.js';
import { Rectangle2Icon6 } from './Rectangle2Icon6.js';
import { Rectangle2Icon } from './Rectangle2Icon.js';
import { Rectangle6Icon } from './Rectangle6Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 36:2 */
export const CadastroCliente: FC<Props> = memo(function CadastroCliente(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.logo}></div>
      <div className={classes.rectangle6}>
        <Rectangle6Icon className={classes.icon} />
      </div>
      <div className={classes.rectangle2}>
        <Rectangle2Icon className={classes.icon2} />
      </div>
      <div className={classes.check_circle}>check_circle</div>
      <div className={classes.rectangle22}>
        <Rectangle2Icon2 className={classes.icon3} />
      </div>
      <div className={classes.check_circle2}>check_circle</div>
      <div className={classes.telefone}>Telefone</div>
      <div className={classes.cadastro}>Cadastro</div>
      <div className={classes.rectangle12}></div>
      <div className={classes.cadastrar}>Cadastrar</div>
      <div className={classes.senha}>Senha:</div>
      <div className={classes.nome}>Nome</div>
      <div className={classes.rectangle23}>
        <Rectangle2Icon3 className={classes.icon4} />
      </div>
      <div className={classes.check_circle3}>check_circle</div>
      <div className={classes.rectangle24}>
        <Rectangle2Icon4 className={classes.icon5} />
      </div>
      <div className={classes.check_circle4}>check_circle</div>
      <div className={classes.endereco}>Endereço</div>
      <div className={classes.rectangle25}>
        <Rectangle2Icon5 className={classes.icon6} />
      </div>
      <div className={classes.check_circle5}>check_circle</div>
      <div className={classes.cpf}>Cpf</div>
      <div className={classes.rectangle26}>
        <Rectangle2Icon6 className={classes.icon7} />
      </div>
      <div className={classes.check_circle6}>check_circle</div>
      <div className={classes.goServices}>GoServices</div>
      <div className={classes.eMail}>E-mail:</div>
    </div>
  );
});
