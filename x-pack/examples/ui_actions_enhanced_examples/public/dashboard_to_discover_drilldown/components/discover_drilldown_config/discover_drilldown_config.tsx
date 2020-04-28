/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';
import { EuiFormRow, EuiSelect, EuiSwitch, EuiSpacer } from '@elastic/eui';
import { txtChooseDestinationIndexPattern } from './i18n';

export interface IndexPatternItem {
  id: string;
  title: string;
}

export interface DiscoverDrilldownConfigProps {
  activeIndexPatternId?: string;
  indexPatterns: IndexPatternItem[];
  onIndexPatternSelect: (indexPatternId: string) => void;
  customIndexPattern?: boolean;
  onCustomIndexPatternToggle?: () => void;
  carryFiltersAndQuery?: boolean;
  onCarryFiltersAndQueryToggle?: () => void;
  carryTimeRange?: boolean;
  onCarryTimeRangeToggle?: () => void;
}

export const DiscoverDrilldownConfig: React.FC<DiscoverDrilldownConfigProps> = ({
  activeIndexPatternId,
  indexPatterns,
  onIndexPatternSelect,
  customIndexPattern,
  onCustomIndexPatternToggle,
  carryFiltersAndQuery,
  onCarryFiltersAndQueryToggle,
  carryTimeRange,
  onCarryTimeRangeToggle,
}) => {
  return (
    <>
      {!!onCustomIndexPatternToggle && (
        <>
          <EuiFormRow hasChildLabel={false}>
            <EuiSwitch
              name="customIndexPattern"
              label="Use custom index pattern"
              checked={!!customIndexPattern}
              onChange={onCustomIndexPatternToggle}
            />
          </EuiFormRow>
          {!!customIndexPattern && (
            <EuiFormRow fullWidth label={txtChooseDestinationIndexPattern}>
              <EuiSelect
                name="selectDashboard"
                hasNoInitialSelection={true}
                fullWidth
                options={[
                  { id: '', text: 'Pick one...' },
                  ...indexPatterns.map(({ id, title }) => ({ value: id, text: title })),
                ]}
                value={activeIndexPatternId || ''}
                onChange={e => onIndexPatternSelect(e.target.value)}
              />
            </EuiFormRow>
          )}
          <EuiSpacer size="xl" />
        </>
      )}

      {!!onCarryFiltersAndQueryToggle && (
        <EuiFormRow hasChildLabel={false}>
          <EuiSwitch
            name="carryFiltersAndQuery"
            label="Carry over filters and query"
            checked={!!carryFiltersAndQuery}
            onChange={onCarryFiltersAndQueryToggle}
          />
        </EuiFormRow>
      )}
      {!!onCarryTimeRangeToggle && (
        <EuiFormRow hasChildLabel={false}>
          <EuiSwitch
            name="carryTimeRange"
            label="Carry over time range"
            checked={!!carryTimeRange}
            onChange={onCarryTimeRangeToggle}
          />
        </EuiFormRow>
      )}
    </>
  );
};
