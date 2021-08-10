import React from 'react';
import {GridContainer, RowContainer, Logo, StationInfo} from './styles/stations';

export default function StationGrid({...restProps}){
    return <GridContainer {...restProps} />
}

StationGrid.StationRow = function ({...restProps}){
    return <RowContainer {...restProps} />
}

StationGrid.Logo = function({...restProps}){
    return <Logo {...restProps} />
}

StationGrid.StationInfo = function({children, ...restProps}){
    return <StationInfo {...restProps}>{children}</StationInfo>
}