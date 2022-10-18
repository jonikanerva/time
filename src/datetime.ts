import { DateTime } from 'luxon'

export const parseTime = (time: string, zone: string): DateTime | undefined => {
  try {
    const [hour, minute] = time.split(':')

    return DateTime.fromObject(
      {
        hour: parseInt(hour, 10),
        minute: minute ? parseInt(minute, 10) : 0,
      },
      { zone }
    )
  } catch (e) {
    return undefined
  }
}

export const formatTime = (time: DateTime): [string, string] => {
  const localTimeString = time.toLocaleString({
    hour: 'numeric',
    minute: '2-digit',
    hour12: false,
  })

  return [localTimeString, time.offsetNameShort]
}

export const dateDiff = (first: DateTime, second: DateTime): string => {
  const firstDate = DateTime.fromISO(first.toISODate())
  const secondDate = DateTime.fromISO(second.toISODate())
  const diff = firstDate.diff(secondDate, 'days').toObject()
  const days = diff.days || 0
  const word = Math.abs(days) > 1 ? 'days' : 'day'

  if (days === 0) {
    return ''
  }

  return days > 0 ? `+${days} ${word}` : `${days} ${word}`
}
