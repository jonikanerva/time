import React, { useEffect, useState } from 'react'
import { DateTime } from 'luxon'

const timeFormat = { hour: 'numeric', minute: '2-digit', hour12: false }

const App: React.FC = () => {
  const [timeValue, setTimeValue] = useState<string>('12:00')
  const [timeZoneValue, setTimeZoneValue] = useState<string>('UTC')
  const [localTime, setLocalTime] = useState<DateTime>(DateTime.local())
  const [remoteTime, setRemoteTime] = useState<DateTime>(DateTime.local())

  useEffect(() => {
    try {
      const [hour, minute] = timeValue.split(':')
      const time = DateTime.fromObject({
        hour: parseInt(hour, 10),
        minute: minute ? parseInt(minute, 10) : 0,
        zone: timeZoneValue,
      })

      setLocalTime(time.toLocal())
      setRemoteTime(time)
    } catch (e) {
      console.error('error', e)
    }
  }, [timeValue, timeZoneValue])

  const localTimeString = localTime.toLocaleString(timeFormat)
  const localTimeZone = localTime.offsetNameShort
  const remoteTimeString = remoteTime.toLocaleString(timeFormat)
  const remoteTimeZone = remoteTime.offsetNameShort

  return (
    <div>
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
      <br />
      {remoteTimeString} {remoteTimeZone}
      <br />
      in your time zone ({localTimeZone}) is
      <br />
      {localTimeString}
    </div>
  )
}
export default App
