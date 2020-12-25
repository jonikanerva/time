import { DateTime } from 'luxon'
import React, { Fragment, useEffect, useState } from 'react'
import { parseTime } from './datetime'

import Display from './Display'

const Time: React.FC = () => {
  const [timeValue, setTimeValue] = useState<string>('12:00')
  const [timeZoneValue, setTimeZoneValue] = useState<string>('UTC')
  const [localTime, setLocalTime] = useState<DateTime>(DateTime.local())
  const [remoteTime, setRemoteTime] = useState<DateTime>(DateTime.local())

  useEffect(() => {
    const time = parseTime(timeValue, timeZoneValue)

    if (time instanceof DateTime) {
      setLocalTime(time.toLocal())
      setRemoteTime(time)
    }
  }, [timeValue, timeZoneValue])

  return (
    <Fragment>
      <input
        autoFocus
        type="text"
        placeholder="Time"
        value={timeValue}
        onChange={(e) => setTimeValue(e.target.value)}
      />
      <input
        type="text"
        placeholder="Time Zone"
        value={timeZoneValue}
        onChange={(e) => setTimeZoneValue(e.target.value)}
      />
      <Display remoteTime={remoteTime} localTime={localTime} />
    </Fragment>
  )
}

export default Time
