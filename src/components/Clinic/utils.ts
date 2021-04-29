import { DayNames } from './../types';
import { OpeningHours, dayOrder, Period, Day } from "../types";
import { pipe } from 'fp-ts/function'

const dayMap = {
    mon: 'Monday',
    tue: 'Tuesday',
    wed: 'Wednesday',
    thu: 'Thursday',
    fri: 'Friday',
    sat: 'Saturday',
    sun: 'Sunday'
} 

type BaseType = {
    day: Day
    dayName: DayNames;
    isOpen: boolean;
}

type MappedType = {
    periods: Period[];
} & BaseType

type FormattedType = {
    period: string
} & BaseType

type SquishedType = {
    consecutiveDaysWithSameTime: string[]
} & FormattedType

const formatTime = (ms: number) => {
    const hours = (ms / (1000 * 60 * 60)).toFixed(0)
    const minutes = (ms / (1000 * 60)) % 60
    return minutes ? `${hours}:${minutes}` : hours
}

const formatPeriod = ({from, to}: Period) => {
    const fromHour = formatTime(from)
    const toHour = formatTime(to)
    return `${fromHour} - ${toHour}`
}

const squishIdenticalConsecutiveDays = (days: FormattedType[]) => {
    const squished: SquishedType[] = []
    let iter = -1
    for(const {
        period,
        dayName,
        ...rest
    } of days) {
        // Can safely assume that period will always be on the format "XX - YY", so 
        // checking on strict string equalness should suffice here. 
        if(iter === -1 || squished[iter].period !== period) {
            squished.push({ 
                dayName,
                consecutiveDaysWithSameTime: [dayName], 
                period, 
                ...rest 
            })
            iter++
        } else {
            squished[iter].consecutiveDaysWithSameTime.push(dayName)
        }
    }
    return squished
}

// The API always returns a periods array with a single element
// NB! This will break if API changes this for some reason.
const mapFormattedPeriods = (correctOrder: MappedType[]) => correctOrder.map(({ periods, ...rest }) => ({
    period: formatPeriod(periods[0]),
    ...rest
}))

const mapAndSetDayNameInCorrectOrder = (openingHours: OpeningHours) => dayOrder.map(day => ({
    ...openingHours[day],
    day,
    dayName: dayMap[day]
}))

// Make a pipeline utiziling fp-ts to transform data safely and functionally.

export const getOpeningHours = (openingHours: OpeningHours) => pipe(
    openingHours,
    mapAndSetDayNameInCorrectOrder,
    mapFormattedPeriods,
    squishIdenticalConsecutiveDays
)