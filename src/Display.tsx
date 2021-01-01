import './Display.css'

import { DateTime } from 'luxon'
import React from 'react'

import { formatTime } from './datetime'

interface DisplayProps {
  localTime: DateTime
  remoteTime: DateTime
}

const Display: React.FC<DisplayProps> = ({ localTime }) => {
  const [localTimeString, localTimeZone] = formatTime(localTime)

  return (
    <div className="displayContent">
      is
      <div className="localTimeContainer">
        <div className="localTime">{localTimeString}</div>
        <div className="localTimeZone">{localTimeZone}</div>
      </div>
    </div>
  )
}
export default Display
