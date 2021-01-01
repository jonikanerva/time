import React from 'react'
import { DateTime } from 'luxon'
import { formatTime } from './datetime'

interface DisplayProps {
  localTime: DateTime
  remoteTime: DateTime
}

const Display: React.FC<DisplayProps> = ({ localTime, remoteTime }) => {
  const [localTimeString, localTimeZone] = formatTime(localTime)
  const [remoteTimeString, remoteTimeZone] = formatTime(remoteTime)

  return (
    <div>
      <br />
      {remoteTimeString} {remoteTimeZone}
      <br />
      in your time zone ({localTimeZone}) is
      <br />
      {localTimeString}
    </div>
  )
}
export default Display
