import './Time.css'

import { DateTime } from 'luxon'
import React, { Fragment, useEffect, useState } from 'react'

import { parseTime } from './datetime'
import Display from './Display'

const Time: React.FC = () => {
  const [timeValue, setTimeValue] = useState<string>('14')
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
        className="inputText"
        placeholder="Time"
        value={timeValue}
        maxLength={5}
        pattern="([01]?[0-9]|2[0-3]):?([0-5][0-9]){0,2}"
        onChange={(e) => setTimeValue(e.target.value)}
      />
      <input
        type="text"
        className="inputText"
        placeholder="Time Zone"
        value={timeZoneValue}
        pattern="[A-Za-z\/]+"
        onChange={(e) => setTimeZoneValue(e.target.value)}
      />
      <Display remoteTime={remoteTime} localTime={localTime} />
    </Fragment>
  )
}

export default Time
