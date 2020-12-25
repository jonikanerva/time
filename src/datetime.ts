import { DateTime } from 'luxon'

export const parseTime = (time: string, zone: string): DateTime | undefined => {
  try {
    const [hour, minute] = time.split(':')

    return DateTime.fromObject({
      hour: parseInt(hour, 10),
      minute: minute ? parseInt(minute, 10) : 0,
      zone,
    })
  } catch (e) {
    console.error('error', e)

    return undefined
  }
}
