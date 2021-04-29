import * as React from "react"
import styled from 'styled-components'
import "normalize.css"
import { graphql } from 'gatsby'
import { ClinicInfo } from '../components/types'
import OpeningHours from "../components/OpeningHours"
// styles
const StyledMain = styled.main`
  color: #232129;
  font-family: -apple-system, Roboto, sans-serif, serif;
`

const StyledNav = styled.nav`
  width: 100vw;
  display: grid;
  align-items: center;
`

const StyledHeading = styled.h1`
  margin-left: 2rem;
`

const StyledImage = styled.img`
  height: 10rem;
`

const StyledContent = styled.section`
  height: 10rem;
`

type PageProps = {
  [key: string]: any,
  data: {
    clinicData: {
      clinics: ClinicInfo[]
    }
  }
}

// markup
const IndexPage = ({
  data
}: PageProps) => {
  console.log(data)
  return (
    <StyledMain>
      <title>Dette er en case</title>
      <StyledNav>
        <StyledHeading>
          <StyledImage
            alt="Scuffed dr dropin"
            src="Frame.png"
          />
        </StyledHeading>
      </StyledNav>
      <StyledContent>
        <OpeningHours clinics={data.clinicData.clinics} />
        <div>
          Made with <img height={100} alt="Gatsby, my cat" title="Gatsby, one of my cats" src="gatsby.png" />.js
        </div>
      </StyledContent>
    </StyledMain>
  )
}

export const query = graphql`
query GetAllClients {
  clinicData: allCustomApi {
    clinics: nodes {
      name
      isOpen
      timezone
      openingHours {
        mon {
          isOpen
          periods {
            from
            to
          }
        }
        tue {
          isOpen
          periods {
            from
            to
          }
        }
        wed {
          isOpen
          periods {
            from
            to
          }
        }
        thu {
          periods {
            from
            to
          }
          isOpen
        }
        fri {
          isOpen
          periods {
            from
            to
          }
        }
        sat {
          isOpen
          periods {
            from
            to
          }
        }
        sun {
          isOpen
          periods {
            from
            to
          }
        }
      }
    }
  }
}

`

export default IndexPage
