import './Time.css'

import { DateTime } from 'luxon'
import React, { Fragment, useEffect, useState } from 'react'

import { parseTime } from './datetime'
import Display from './Display'

const Time: React.FC = () => {
  const [timeValue, setTimeValue] = useState<string>('14:00')
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
    <div className="timeContainer">
      <div className="inputContainer">
        <input
          autoFocus
          type="text"
          className="inputText time"
          placeholder="Time"
          value={timeValue}
          tabIndex={1}
          maxLength={5}
          pattern="([01]?[0-9]|2[0-3]):?([0-5][0-9]){0,2}"
          onChange={(e) => setTimeValue(e.target.value)}
        />
        <input
          type="text"
          className="inputText timeZone"
          placeholder="Time Zone"
          spellCheck={false}
          tabIndex={2}
          value={timeZoneValue}
          pattern="[A-Za-z\/]+"
          onChange={(e) => setTimeZoneValue(e.target.value)}
        />
      </div>
      <div className="displayContainer">
        <Display remoteTime={remoteTime} localTime={localTime} />
      </div>
    </div>
  )
}

export default Time
