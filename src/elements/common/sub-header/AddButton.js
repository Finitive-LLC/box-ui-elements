/**
 * @flow
 * @file Add Button component
 * @author Box
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../../../components/button';
import IconAddThin from '../../../icons/general/IconAddThin';
import messages from '../messages';
import Tooltip from '../Tooltip';
import './AddButton.scss';
import IconCaretDown from '../../../icons/general/IconCaretDown';

const AddButton = (props: ?Object) => (
    <Tooltip text={<FormattedMessage {...messages.add} />}>
        <Button className="be-btn-add" aria-label={messages.add.defaultMessage} type="button" {...props}>
            <IconAddThin color="#FFFFFF" />
            Documents
            <IconCaretDown color="#FFFFFF" width={8} />
        </Button>
    </Tooltip>
);

export default AddButton;
