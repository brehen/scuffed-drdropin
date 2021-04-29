import { ClinicInfo } from '../types'
import * as React from 'react'
import { getOpeningHours } from './utils'

interface Props {
    clinic: ClinicInfo
}


/**
 *  Note about isOpen prop: 
 *  
 *  Sourcing data from the staging-api is done on build-time of the Gatsby project.
 *  I noticed while writing the code that isOpen on a clinic changes from true to false
 *  when the clinic actually closes. (A real headscratcher as I was coding around that hour change!)
 *  
 *  I wanted to include this clinicIsOpen state in the UI somehow, but because I decided to 
 *  try out a source-api-plugin for gatsby, which fetches the data and inserts it into the local data
 *  storage on build time, this state would be stale pretty quickly.
 * 
 *  So isOpen is included in the GraphQL schema, but not utilized in the UI - as it was not a part of the case.
 */

const Clinic = ({
    clinic: {
        name,
        isOpen,
        openingHours,
    }
}: Props) => {
    const mappedOpeningHours = getOpeningHours(openingHours)
    return (
        <div>
            <h3>{name.toLocaleUpperCase()}</h3>
            <div>
                <h4>Opening hours: </h4>
                {mappedOpeningHours.map(({
                    dayName,
                    period,
                    consecutiveDaysWithSameTime: days,
                    isOpen
                }) => (
                    <div
                        key={`${name} - ${dayName}`}
                    >
                        {(days.length > 1 && days.length < 7) && (
                            <p>{`${days[0]} - ${days[days.length - 1]}`}: {isOpen ? period : 'Closed'}</p>
                        )}
                        {days.length === 1 && (
                            <p>
                                {dayName}: {isOpen ? period : 'Closed'}
                            </p>
                        )}
                        {days.length === 7 && (
                            <p>
                                All week: {period === '0 - 0' ? 'All day 😎' : period}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Clinic