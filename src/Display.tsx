import './Display.css'

import { DateTime } from 'luxon'
import React from 'react'

import { formatTime } from './datetime'

interface DisplayProps {
  localTime: DateTime
  remoteTime: DateTime
  valid: boolean
}

const Display: React.FC<DisplayProps> = ({ localTime, valid }) => {
  const [localTimeString, localTimeZone] = formatTime(localTime)
  const invalidTime = valid ? '' : 'invalidTime'

  return (
    <div className="displayContent">
      is
      <div className={`localTimeContainer ${invalidTime}`}>
        <div className="localTime">{localTimeString}</div>
        <div className="localTimeZone">{localTimeZone}</div>
      </div>
    </div>
  )
}
export default Display
