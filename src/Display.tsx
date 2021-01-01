import './Display.css'

import { DateTime } from 'luxon'
import React from 'react'

import { formatTime, dateDiff } from './datetime'

interface DisplayProps {
  localTime: DateTime
  remoteTime: DateTime
  valid: boolean
}

const Display: React.FC<DisplayProps> = ({ localTime, remoteTime, valid }) => {
  const difference = dateDiff(localTime, remoteTime)
  const [localTimeString, localTimeZone] = formatTime(localTime)

  const invalidTime = valid ? '' : 'invalidTime'

  return (
    <div className="displayContent">
      is
      <div className={`localTimeContainer ${invalidTime}`}>
        <div className="localTime">{localTimeString}</div>
        <div className="localTimeZone">{localTimeZone}</div>
      </div>
      {difference}
    </div>
  )
}
export default Display
