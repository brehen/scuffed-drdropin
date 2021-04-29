export interface Period {
    from: number
    to: number
}

export interface DayInfo {
    isOpen: boolean
    periods: Period[]
}

export const dayOrder = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const
export type Day = typeof dayOrder[number]
export const dayNamesInOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const
export type DayNames = typeof dayNamesInOrder[number]

export type OpeningHours = Record<Day, DayInfo>

export interface ClinicInfo {
    id: string
    name: string
    timezone: string
    openingHours: OpeningHours
    isOpen: boolean
}
