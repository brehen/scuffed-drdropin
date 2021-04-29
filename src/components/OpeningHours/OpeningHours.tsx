import { ClinicInfo } from "../types"
import * as React from 'react'
import Clinic from "../Clinic"
import styled from 'styled-components'
interface Props {
    clinics: ClinicInfo[]
}

const StyledOpeningHours = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 5rem;
`

const OpeningHours = ({
    clinics
}: Props) => {
    return (
        <StyledOpeningHours>
            {clinics.map((clinic) => <Clinic clinic={clinic} />)}
        </StyledOpeningHours>
    )
}

export default OpeningHours