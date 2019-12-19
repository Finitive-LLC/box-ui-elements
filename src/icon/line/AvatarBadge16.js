// @flow
/* eslint-disable react/jsx-sort-props */
import * as React from 'react';
import AccessibleSVG from '../../icons/accessible-svg';
import type { Icon } from '../../icons/flowTypes';

const AvatarBadge16 = (props: Icon) => (
    <AccessibleSVG width={16} height={16} viewBox="0 0 16 16" {...props}>
        <path
            fill="#222"
            fillRule="evenodd"
            d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 1a7 7 0 100 14A7 7 0 008 1zm0 8.5c1.21 0 2.293.413 3.232 1.096.56.407.953.817 1.168 1.104a.5.5 0 01-.8.6 3.29 3.29 0 00-.234-.267 5.406 5.406 0 00-.722-.629C9.864 10.837 8.979 10.5 8 10.5c-.979 0-1.865.337-2.644.904-.275.2-.517.415-.722.63a3.29 3.29 0 00-.234.266.5.5 0 01-.8-.6c.215-.287.607-.697 1.168-1.104C5.707 9.913 6.79 9.5 8 9.5zm0-6a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        />
    </AccessibleSVG>
);

export default AvatarBadge16;