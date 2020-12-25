import React from 'react'
import { DateTime } from 'luxon'

const timeFormat = { hour: 'numeric', minute: '2-digit', hour12: false }

interface DisplayProps {
  localTime: DateTime
  remoteTime: DateTime
}

const Display: React.FC<DisplayProps> = ({ localTime, remoteTime }) => {
  const localTimeString = localTime.toLocaleString(timeFormat)
  const localTimeZone = localTime.offsetNameShort
  const remoteTimeString = remoteTime.toLocaleString(timeFormat)
  const remoteTimeZone = remoteTime.offsetNameShort

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
