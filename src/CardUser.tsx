import {Card, Text as TextField, Tooltip, User, UserAvatar} from '@gravity-ui/uikit';

import block from 'bem-cn-lite';
import {useEffect, useRef, useState} from 'react';

import './CardUser.scss';
import {AnyComponent} from './AnyComponent';

const b = block('card');

const DATAUSER = {
    name: 'Иван Иванкин',
    description: 'супер чувак, один из лучших',
    imgUrl: '../public/img/1.jpg',
    textField:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt convallis porta. Suspendisse ut leo accumsan velit rutrum vehicula. Curabitur placerat tempus mattis. Mauris dictum eros consectetur laoreet gravida. Integer ac convallis erat. Praesent risus est, scelerisque sit amet finibus ut, scelerisque vitae metus. Donec sagittis velit at bibendum sollicitudin.',
};

export const CardUser = () => {
    const textField = useRef<HTMLSpanElement>(null);
    const [visibleTooltip, setVisibleTooltip] = useState(true);

    useEffect(() => {
        if (textField.current!.offsetWidth < textField.current!.scrollWidth)
            setVisibleTooltip(!visibleTooltip);
    }, []);

    return (
        <>
            <Card className={b()}>
                <div className={b('data-user')}>
                    <UserAvatar className={b('user-avatar')} imgUrl={DATAUSER.imgUrl} size="xl" />
                    <User
                        className={b('user-info')}
                        name={DATAUSER.name}
                        description={DATAUSER.description}
                        size="xl"
                    />
                </div>
                <div className={b('footer')}>
                    <Tooltip
                        className={b('tooltip')}
                        content={DATAUSER.textField}
                        disabled={visibleTooltip}
                    >
                        <div>
                            <TextField ref={textField} ellipsis={true} className={b('text_field')}>
                                {DATAUSER.textField}
                            </TextField>
                        </div>
                    </Tooltip>
                    <AnyComponent />
                </div>
            </Card>
        </>
    );
};
