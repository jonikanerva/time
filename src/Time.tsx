import './Time.css'

import { DateTime } from 'luxon'
import React, { useEffect, useState } from 'react'

import { parseTime } from './datetime'
import Display from './Display'

const Time: React.FC = () => {
  const [timeValue, setTimeValue] = useState<string>('14')
  const [timeZoneValue, setTimeZoneValue] = useState<string>('UTC')
  const [localTime, setLocalTime] = useState<DateTime>(DateTime.local())
  const [remoteTime, setRemoteTime] = useState<DateTime>(DateTime.local())
  const [valid, setValid] = useState<boolean>(true)

  useEffect(() => {
    const time = parseTime(timeValue, timeZoneValue)

    setValid(time?.isValid || false)

    if (time?.isValid) {
      setLocalTime(time.toLocal())
      setRemoteTime(time)
    }
  }, [timeValue, timeZoneValue])

  // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

  return (
    <div className="timeContainer">
      <div className="inputContainer">
        <input
          autoFocus
          type="text"
          className="inputText time"
          placeholder="Time"
          value={timeValue}
          maxLength={5}
          autoComplete="off"
          inputMode="numeric"
          onChange={(e) => setTimeValue(e.target.value)}
        />
        <input
          type="text"
          className="inputText timeZone"
          placeholder="Time Zone"
          spellCheck={false}
          autoComplete="off"
          value={timeZoneValue}
          onChange={(e) => setTimeZoneValue(e.target.value)}
        />
      </div>
      <div className="displayContainer">
        <Display valid={valid} remoteTime={remoteTime} localTime={localTime} />
      </div>
    </div>
  )
}

export default Time
